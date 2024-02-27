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
        return (h(Host, { key: '7b561df4adbe4906b1f4dbc4c50fab9788ec30c9' }, h("ix-icon-button", { key: '602b724690fb58e3261710002ef95fff2ef28c25', class: { hide: !this.showContextMenu }, size: "24", ghost: true, icon: 'context-menu' }), h("slot", { key: '0d42add312838be530623029430bc1007ba08a5a', onSlotchange: () => this.onSlotChange() })));
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
