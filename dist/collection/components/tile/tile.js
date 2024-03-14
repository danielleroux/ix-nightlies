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
        return (h(Host, { key: '587f23ee7bc91720ff10966d105782f473f00e44', class: {
                'tile-small': this.size === 'small',
                'tile-medium': this.size === 'medium',
                'tile-big': this.size === 'big',
            } }, h("div", { key: 'e3ae9e61a6cb4d525ecf53230537aabd64ecec3e', class: {
                'tile-header': true,
                'has-content': this.hasHeaderSlot,
            } }, h("slot", { key: 'd2e3c5dc465a65eb8c84f89bd7cb340d5dea3823', name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: '937ec531e8e203620c1fa8de94981bae8c4f9256', class: "tile-subheader" }, h("slot", { key: 'e6b7dd7fe7e4dbd68f692603a9658f86905fb70a', name: "subheader" })), h("div", { key: 'f745c7d22fff7f1869342cdc369328019b9320db', class: "tile-content" }, h("slot", { key: '198f6fa1a032a026849e1290458a5d0cb9e12de0' })), h("div", { key: 'add52ae52734cfb7c53709fe0bdc2aacd2432c79', class: {
                'tile-footer': true,
                'has-content': this.hasFooterSlot,
            } }, h("slot", { key: 'ecab235d46944a82f6c6589cb1c360be79e18fa5', name: "footer", onSlotchange: () => this.handleFooterSlotChange() }))));
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
