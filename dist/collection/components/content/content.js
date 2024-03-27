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
        return (h(Host, { key: '85ecfecc47910592c3e5633e8f21ca6e2bf98b68' }, h("div", { key: '5856277dbd6d05054a0c0083ae8ba9496e127cf5', class: {
                'content-header': true,
                slotted: this.isContentHeaderSlotted,
            } }, h("slot", { key: 'b5989ea440740b99deef634be6b30cb5b443d18b', name: "header", onSlotchange: () => {
                this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
            } })), h("div", { key: 'b4eea60b710cd2a2cf188c2125a91a33b4fca82f', class: "content" }, h("slot", { key: 'b739a3016884b29e41b1975b76121511c9f35f2a' }))));
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
