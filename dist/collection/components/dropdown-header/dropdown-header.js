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
 * @since 2.0.0
 */
export class DropdownHeader {
    constructor() {
        this.label = undefined;
    }
    render() {
        return (h(Host, { key: '230bfe17b21343034c269c4f89f0d0b1e1edfb9a' }, h("ix-typography", { key: 'b9a822893ba122ae7efbe3ec600fb57f7fcd0475', class: 'category-text', variant: 'default-title' }, this.label)));
    }
    static get is() { return "ix-dropdown-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown-header.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                    "text": "Display name of the header"
                },
                "attribute": "label",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=dropdown-header.js.map
