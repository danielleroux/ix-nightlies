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
        return (h(Host, { key: '7dcf0a3ab61e12650f3236d2d01905088dd46476', class: {
                expanded: this.showItems,
            } }, h("ix-menu-item", { key: 'd7525b4d1577beddef2a9bc46102c5c27056f7a8', class: 'category-parent', active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClicked(e) }, h("div", { key: '45f42d78aea804389d18b71aa497d595d0d28d2f', class: "category" }, h("div", { key: '328e734eff35051e741d5f300cef62d89b2d8357', class: "category-text" }, this.label), h("ix-icon", { key: 'a020ca032255c4e0cab6eaf21a999f778d44f89e', name: 'chevron-down-small', class: {
                'category-chevron': true,
                'category-chevron--open': this.showItems,
            } }))), h("div", { key: 'cb9f873594624636c51f5cdb88117c8609ca0660', ref: (ref) => (this.menuItemsContainer = ref), class: {
                'menu-items': true,
                'menu-items--expanded': this.showItems,
                'menu-items--collapsed': !this.showItems,
            } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: '44e23c289ee58d8e6a64c4eae043b5d21e7acccf', closeBehavior: 'both', show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
                this.showDropdown = dropdownShown;
            }, class: 'category-dropdown', anchor: this.hostElement, placement: "right-start", offset: {
                mainAxis: 3,
            }, onClick: (e) => {
                if (e.target instanceof HTMLElement) {
                    if (e.target.tagName === 'IX-MENU-ITEM') {
                        this.showDropdown = false;
                    }
                }
            } }, h("ix-dropdown-item", { key: 'a991462ed69a30c6c9d8535d88a0642203663c9a', class: 'category-dropdown-header' }, h("ix-typography", { key: 'a9947afa5cfb6c9415a3eae5c0daf762fd91843a', variant: "default-title-single", color: "std" }, this.label)), h("ix-divider", { key: '2ff0ae7813b7ff6a32e0b6aae13b2bb3dca95d77' }), h("slot", { key: '4c9f7e1cac69cbd8e0c305eb9f60ea9a64e69b0d' }))));
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
