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
        return (h(Host, { key: 'c18f9b86f07ad9ce056d22c0ebcdce4ce0a4195f', class: {
                'tile-small': this.size === 'small',
                'tile-medium': this.size === 'medium',
                'tile-big': this.size === 'big',
            } }, h("div", { key: '34808bb57f813224b7f0f4bb289de56aef170864', class: {
                'tile-header': true,
                'has-content': this.hasHeaderSlot,
            } }, h("slot", { key: 'a5755136d26d7ca1c1fb087cd16ceadffbcad9bc', name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: '6082482ecbfc4a332b85451aa1661df7ff8a5425', class: "tile-subheader" }, h("slot", { key: 'bd43456069f9f0117f66194a2be6ae2913325abc', name: "subheader" })), h("div", { key: '3c37eb01ade7f131f33204c7f1f927a3b1341c03', class: "tile-content" }, h("slot", { key: '7e359cb0720e7ce0eefba2e3d25f5cf31f92fc49' })), h("div", { key: 'df1ae76b5b7d5df128b5baac00171f8906c01301', class: {
                'tile-footer': true,
                'has-content': this.hasFooterSlot,
            } }, h("slot", { key: 'cd340f4ab95913bd6bc4d6d40ee4c6712992f964', name: "footer", onSlotchange: () => this.handleFooterSlotChange() }))));
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
