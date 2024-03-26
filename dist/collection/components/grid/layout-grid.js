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
export class LayoutGrid {
    constructor() {
        this.noMargin = false;
        this.gap = '24';
        this.columns = 12;
    }
    render() {
        return (h(Host, { key: '8301fd495bb79e5a2350d18d324bf381250fb801', class: {
                'no-margin': this.noMargin,
            }, style: {
                '--ix-layout-grid-columns': `${this.columns}`,
                '--ix-layout-grid-gutter': `${this.gap}px`,
            } }, h("slot", { key: '618fc9cad0e01b5bd7ec657a22da1df1450e721c' })));
    }
    static get is() { return "ix-layout-grid"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["layout-grid.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["layout-grid.css"]
        };
    }
    static get properties() {
        return {
            "noMargin": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The grid will not have any horizontal padding"
                },
                "attribute": "no-margin",
                "reflect": false,
                "defaultValue": "false"
            },
            "gap": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'8' | '12' | '16' | '24'",
                    "resolved": "\"12\" | \"16\" | \"24\" | \"8\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Grid gap"
                },
                "attribute": "gap",
                "reflect": false,
                "defaultValue": "'24'"
            },
            "columns": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Overwrite the default number of columns. Choose between 2 and 12 columns."
                },
                "attribute": "columns",
                "reflect": false,
                "defaultValue": "12"
            }
        };
    }
}
//# sourceMappingURL=layout-grid.js.map
