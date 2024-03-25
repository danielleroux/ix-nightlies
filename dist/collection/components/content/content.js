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
        return (h(Host, { key: 'ed854cd926e26c98f6a9ba6e8b10bf854308d0d2' }, h("div", { key: '1ad8b864dc541b214832cdc01cd4752288e9c667', class: {
                'content-header': true,
                slotted: this.isContentHeaderSlotted,
            } }, h("slot", { key: '892583b8bf4f0efdcca345ba42e376ce09af9788', name: "header", onSlotchange: () => {
                this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
            } })), h("div", { key: '05d8b3ad1c822d1d813b6c0c65d6c9fab54dcdf2', class: "content" }, h("slot", { key: '757f80d0d430489e41a10e2e46ae6c931ba07a8f' }))));
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
