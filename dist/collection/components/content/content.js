/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { hasSlottedElements } from "../utils/shadow-dom";
/**
 * @since 2.1.0
 * @slot header - Display content at the top of the content page
 */
export class Content {
    constructor() {
        this.isContentHeaderSlotted = false;
    }
    get contentHeaderSlot() {
        return this.hostElement.shadowRoot.querySelector('.content-header slot');
    }
    render() {
        return (h(Host, { key: 'ef69e746551d1799ac549a40d5bf993e20b947e8' }, h("div", { key: 'd5f0f5ef0dd67769ac59d4efa17e746bd2af3d8f', class: {
                'content-header': true,
                slotted: this.isContentHeaderSlotted,
            } }, h("slot", { key: '2a7a54ca49a946ba2043d48e93311095aa5a1696', name: "header", onSlotchange: () => {
                this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
            } })), h("div", { key: '43bfdf4ae39781a58ca3b6f4d9981841d37ff347', class: "content" }, h("slot", { key: '88d53f6d9c324182af7e8e0c341910ff5fd04cb1' }))));
    }
    static get is() { return "ix-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["content.css"]
        };
    }
    static get states() {
        return {
            "isContentHeaderSlotted": {}
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=content.js.map
