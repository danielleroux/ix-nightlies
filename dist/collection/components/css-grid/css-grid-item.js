/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
/**
 * @internal
 */
export class CssGridItem {
    constructor() {
        this.itemName = undefined;
    }
    render() {
        const style = {};
        style['grid-area'] = this.itemName;
        return (h(Host, { key: '062f950b23bd5e5e943008f95b654cf629532a90', style: style }, h("slot", { key: '1b0e07eeda37b949637dddcf53510a9760ff2ede' })));
    }
    static get is() { return "ix-css-grid-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["css-grid-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["css-grid-item.css"]
        };
    }
    static get properties() {
        return {
            "itemName": {
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
                    "text": "Grid item name"
                },
                "attribute": "item-name",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=css-grid-item.js.map
