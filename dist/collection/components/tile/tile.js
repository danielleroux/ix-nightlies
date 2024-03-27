/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class Tile {
    constructor() {
        this.size = 'medium';
        this.hasHeaderSlot = false;
        this.hasFooterSlot = false;
    }
    handleHeaderSlotChange() {
        this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
    }
    handleFooterSlotChange() {
        this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
    }
    render() {
        return (h(Host, { key: 'c0d60ca326a0a16f2255ae8a755f03a86c4c2bdf', class: {
                'tile-small': this.size === 'small',
                'tile-medium': this.size === 'medium',
                'tile-big': this.size === 'big',
            } }, h("div", { key: 'b43e41051b62b8146749b884c9d611f79b6bf9c8', class: {
                'tile-header': true,
                'has-content': this.hasHeaderSlot,
            } }, h("slot", { key: '3dc74cc4beb1b24023463d62daf862c28ba2177a', name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: '4935b7758861eab0fd305ceccba9d4d3a7cc90de', class: "tile-subheader" }, h("slot", { key: '31d66eb3e361c0b811ab3c0f89976c39f3576629', name: "subheader" })), h("div", { key: '083b54d5455f1015811c904826dda8fb2b35a243', class: "tile-content" }, h("slot", { key: '14c79b5d8365444f234c030c56b2592b7cb38dc8' })), h("div", { key: 'a12114c3593b8032aa4e5d841efc55723deb7b44', class: {
                'tile-footer': true,
                'has-content': this.hasFooterSlot,
            } }, h("slot", { key: 'aa1f08fe633554658a5119cd7d61febb3928e8f4', name: "footer", onSlotchange: () => this.handleFooterSlotChange() }))));
    }
    static get is() { return "ix-tile"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tile.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tile.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium' | 'big'",
                    "resolved": "\"big\" | \"medium\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the tile - one of 'small', 'medium' or 'large'"
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'medium'"
            }
        };
    }
    static get states() {
        return {
            "hasHeaderSlot": {},
            "hasFooterSlot": {}
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=tile.js.map
