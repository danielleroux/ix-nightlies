/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function hasDropdownItemWrapperImplemented(item) {
    return (item &&
        item.getDropdownItemElement !== undefined &&
        typeof item.getDropdownItemElement === 'function');
}
class DropdownController {
    constructor() {
        this.dropdowns = new Map();
        this.submenuIds = {};
        this.isWindowListenerActive = false;
    }
    connected(dropdown) {
        if (!this.isWindowListenerActive) {
            this.addOverlayListeners();
        }
        this.dropdowns.set(dropdown.getId(), dropdown);
        if (dropdown.discoverAllSubmenus) {
            this.discoverSubmenus();
        }
    }
    disconnected(dropdown) {
        this.dropdowns.delete(dropdown.getId());
    }
    discoverSubmenus() {
        this.dropdowns.forEach((dropdown) => {
            dropdown.discoverSubmenu();
        });
    }
    present(dropdown) {
        if (!dropdown.isPresent() && dropdown.willPresent()) {
            this.submenuIds[dropdown.getId()] = dropdown.getAssignedSubmenuIds();
            dropdown.present();
        }
    }
    dismissChildren(uid) {
        const childIds = this.submenuIds[uid] || [];
        for (const id of childIds) {
            this.dismiss(this.dropdowns.get(id));
        }
    }
    dismiss(dropdown) {
        if (dropdown.isPresent() && dropdown.willDismiss()) {
            this.dismissChildren(dropdown.getId());
            dropdown.dismiss();
            delete this.submenuIds[dropdown.getId()];
        }
    }
    dismissAll(ignoreBehaviorForIds = []) {
        this.dropdowns.forEach((dropdown) => {
            if (!ignoreBehaviorForIds.includes(dropdown.getId()) &&
                (dropdown.closeBehavior === 'inside' ||
                    dropdown.closeBehavior === false)) {
                return;
            }
            this.dismiss(dropdown);
        });
    }
    dismissOthers(uid) {
        let path = this.buildComposedPath(uid, new Set());
        this.dropdowns.forEach((dropdown) => {
            if (dropdown.closeBehavior !== 'inside' &&
                dropdown.closeBehavior !== false &&
                !path.has(dropdown.getId())) {
                this.dismiss(dropdown);
            }
        });
    }
    pathIncludesTrigger(eventTargets) {
        for (let eventTarget of eventTargets) {
            if (eventTarget instanceof HTMLElement) {
                if (eventTarget.hasAttribute('data-ix-dropdown-trigger')) {
                    return true;
                }
            }
        }
        return false;
    }
    pathIncludesDropdown(eventTargets) {
        return !!eventTargets.find((element) => element.tagName === 'IX-DROPDOWN');
    }
    buildComposedPath(id, path) {
        if (this.submenuIds[id]) {
            path.add(id);
        }
        for (const ruleKey of Object.keys(this.submenuIds)) {
            if (this.submenuIds[ruleKey].includes(id)) {
                this.buildComposedPath(ruleKey, path).forEach((key) => path.add(key));
            }
        }
        return path;
    }
    addOverlayListeners() {
        this.isWindowListenerActive = true;
        window.addEventListener('click', (event) => {
            const hasTrigger = this.pathIncludesTrigger(event.composedPath());
            const hasDropdown = this.pathIncludesDropdown(event.composedPath());
            if (!hasTrigger && !hasDropdown) {
                this.dismissAll();
            }
        });
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.dismissAll([...this.dropdowns.keys()]);
            }
        });
    }
}
export const addDisposableEventListener = (element, eventType, callback) => {
    element.addEventListener(eventType, callback);
    return () => {
        element.removeEventListener(eventType, callback);
    };
};
export const addDisposableEventListenerAsArray = (listener) => {
    const disposables = listener.map(({ callback, element, eventType }) => addDisposableEventListener(element, eventType, callback));
    return () => disposables.forEach((dispose) => dispose());
};
export const dropdownController = new DropdownController();
//# sourceMappingURL=dropdown-controller.js.map
