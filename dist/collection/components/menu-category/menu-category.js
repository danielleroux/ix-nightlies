/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import anime from "animejs";
import { closestIxMenu } from "../utils/application-layout/context";
import { createMutationObserver } from "../utils/mutation-observer";
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
/**
 * @since 2.0.0
 */
export class MenuCategory {
    constructor() {
        this.label = undefined;
        this.icon = undefined;
        this.notifications = undefined;
        this.menuExpand = false;
        this.showItems = false;
        this.showDropdown = false;
        this.nestedItems = [];
    }
    isNestedItemActive() {
        return this.getNestedItems().some((item) => item.active);
    }
    getNestedItems() {
        return Array.from(this.hostElement.querySelectorAll(':scope ix-menu-item'));
    }
    getNestedItemsHeight() {
        const items = this.getNestedItems();
        return items.length * DefaultIxMenuItemHeight;
    }
    onExpandCategory(showItems) {
        if (showItems) {
            this.animateFadeIn();
        }
        else {
            this.animateFadeOut();
        }
    }
    animateFadeOut() {
        const slotHideThresholdMs = 25;
        anime({
            targets: this.menuItemsContainer,
            duration: DefaultAnimationTimeout,
            easing: 'easeInSine',
            opacity: [1, 0],
            maxHeight: [this.getNestedItemsHeight() + DefaultIxMenuItemHeight, 0],
            complete: () => {
                setTimeout(() => {
                    this.showItems = false;
                    this.showDropdown = false;
                }, DefaultAnimationTimeout + slotHideThresholdMs);
            },
        });
    }
    animateFadeIn() {
        anime({
            targets: this.menuItemsContainer,
            duration: DefaultAnimationTimeout,
            easing: 'easeInSine',
            opacity: [0, 1],
            maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
            begin: () => {
                this.showItems = true;
                this.showDropdown = false;
            },
        });
    }
    onCategoryClicked(e) {
        if (this.ixMenu.expand) {
            e === null || e === void 0 ? void 0 : e.stopPropagation();
            this.onExpandCategory(!this.showItems);
            return;
        }
        this.showDropdown = !this.showDropdown;
    }
    onNestedItemsChanged() {
        this.nestedItems = this.getNestedItems();
    }
    isCategoryItemListVisible() {
        return this.menuExpand && (this.showItems || this.isNestedItemActive());
    }
    componentWillLoad() {
        const closestMenu = closestIxMenu(this.hostElement);
        if (!closestMenu) {
            throw Error('ix-menu-category can only be used as a child of ix-menu');
        }
        this.ixMenu = closestMenu;
        this.menuExpand = this.ixMenu.expand;
        this.showItems = this.isCategoryItemListVisible();
    }
    componentDidLoad() {
        this.observer = createMutationObserver(() => this.onNestedItemsChanged());
        this.observer.observe(this.hostElement, {
            attributes: true,
            childList: true,
            subtree: true,
        });
        requestAnimationFrame(() => {
            this.onNestedItemsChanged();
        });
        this.ixMenu.addEventListener('expandChange', ({ detail: menuExpand }) => {
            this.menuExpand = menuExpand;
            if (!menuExpand) {
                this.clearMenuItemStyles();
            }
            this.showItems = this.isCategoryItemListVisible();
        });
    }
    clearMenuItemStyles() {
        this.menuItemsContainer.style.removeProperty('max-height');
        this.menuItemsContainer.style.removeProperty('opacity');
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    render() {
        return (h(Host, { key: '9223fe391bba5c17350b31f1ff83b563cb9edd48', class: {
                expanded: this.showItems,
            } }, h("ix-menu-item", { key: '5e5dd9b0ad8f4027663ad32ec92167202b5431b7', class: 'category-parent', active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClicked(e) }, h("div", { key: 'bff799f0d1b5ee2744bf90a7377296c7b764c878', class: "category" }, h("div", { key: 'd8cead5e316bde70c44d6a7bea2ea6b528e5aceb', class: "category-text" }, this.label), h("ix-icon", { key: 'a3c324aaf22d05599d96ddb6b18cdc6bac7f83c8', name: 'chevron-down-small', class: {
                'category-chevron': true,
                'category-chevron--open': this.showItems,
            } }))), h("div", { key: 'b6954876e6d15fba763825b3e2813b115d48101b', ref: (ref) => (this.menuItemsContainer = ref), class: {
                'menu-items': true,
                'menu-items--expanded': this.showItems,
                'menu-items--collapsed': !this.showItems,
            } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: 'f3dad9385ad05c40f1b5e8e6b2395ea6ae3ad42f', closeBehavior: 'both', show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
                this.showDropdown = dropdownShown;
            }, class: 'category-dropdown', anchor: this.hostElement, placement: "right-start", offset: {
                mainAxis: 3,
            }, onClick: (e) => {
                if (e.target instanceof HTMLElement) {
                    if (e.target.tagName === 'IX-MENU-ITEM') {
                        this.showDropdown = false;
                    }
                }
            } }, h("ix-dropdown-item", { key: '7b0b9836c178b196416565872d00e5071c11a6e3', class: 'category-dropdown-header' }, h("ix-typography", { key: 'e920c1397d39a398e30c770da93fb5c2c54c449f', variant: "default-title-single", color: "std" }, this.label)), h("ix-divider", { key: '305c10ad37d22d64b73feb8cb7423ad9f4bf134c' }), h("slot", { key: '1e727521095f394299b14e2921f53d0f67e033c7' }))));
    }
    static get is() { return "ix-menu-category"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-category.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-category.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Display name of the category"
                },
                "attribute": "label",
                "reflect": false
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Icon of the category"
                },
                "attribute": "icon",
                "reflect": false
            },
            "notifications": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show notification count on the category"
                },
                "attribute": "notifications",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "menuExpand": {},
            "showItems": {},
            "showDropdown": {},
            "nestedItems": {}
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=menu-category.js.map
