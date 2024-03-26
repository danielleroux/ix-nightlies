/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { getSlottedElements } from "../utils/shadow-dom";
export class GroupContextMenu {
    constructor() {
        this.showContextMenu = false;
    }
    getTrigger() {
        return this.hostElement;
    }
    configureDropdown(dropdownElement, triggerElement) {
        dropdownElement.positioningStrategy = 'fixed';
        dropdownElement.trigger = triggerElement;
    }
    onSlotChange() {
        const slot = this.hostElement.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const elements = getSlottedElements(slot);
        this.showContextMenu = elements.length !== 0;
        const dropdownElement = elements.find((elm) => elm.tagName === 'IX-DROPDOWN');
        const triggerElement = this.getTrigger();
        if (!triggerElement) {
            return;
        }
        if (!dropdownElement) {
            return;
        }
        this.configureDropdown(dropdownElement, triggerElement);
    }
    render() {
        return (h(Host, { key: 'dc1b2419f5ef0f8ed2fe053c2f823fe68c38910b' }, h("ix-icon-button", { key: '24cb23952528b5b6d52f5f4eb8492bb48a70585e', class: { hide: !this.showContextMenu }, size: "24", ghost: true, icon: 'context-menu' }), h("slot", { key: 'cad27920fe22f17b37f03754e6136ba55cc4cab4', onSlotchange: () => this.onSlotChange() })));
    }
    static get is() { return "ix-group-context-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./group-context-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["group-context-menu.css"]
        };
    }
    static get states() {
        return {
            "showContextMenu": {}
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=group-context-menu.js.map
