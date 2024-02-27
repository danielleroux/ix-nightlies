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
        return (h(Host, { key: '65e1277cf4b5ccc449dabc26c7216b13dd2c2aa3', class: {
                'tile-small': this.size === 'small',
                'tile-medium': this.size === 'medium',
                'tile-big': this.size === 'big',
            } }, h("div", { key: '69f1d82f28fb8d345bbaae2624114298c3c1c879', class: {
                'tile-header': true,
                'has-content': this.hasHeaderSlot,
            } }, h("slot", { key: '9f0cd992a9ea408da4cc7756f8d9ce0c61a0fd8c', name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: 'da541a2a3ba69eeba1a4421915f75d700050c5f8', class: "tile-subheader" }, h("slot", { key: 'a498169a21e53e3abf332461e2b1ef8eaad4910b', name: "subheader" })), h("div", { key: '4caacfbc6cad0e7432f8c53be2f2785c4d76cc5d', class: "tile-content" }, h("slot", { key: '59e81a46d10307f93e1bb50735a9b05f106d7dd6' })), h("div", { key: '1455303a22aff7c91392946de8f3b87d0d401b45', class: {
                'tile-footer': true,
                'has-content': this.hasFooterSlot,
            } }, h("slot", { key: 'e498be21e2041b2689ebe5689e846668a556bb1e', name: "footer", onSlotchange: () => this.handleFooterSlotChange() }))));
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
