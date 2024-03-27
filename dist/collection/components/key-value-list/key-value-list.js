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
 * @since 1.6.0
 */
export class KeyValueList {
    constructor() {
        this.striped = undefined;
    }
    render() {
        return (h(Host, { key: '3b211fbd897af85b1ef38544d1177bd13e88d1e6', class: { keyValueList: true, 'keyValueList--striped': this.striped } }, h("slot", { key: '4fa83986fc2d859f2c600347a7e1afc13f5a1113' })));
    }
    static get is() { return "ix-key-value-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["key-value-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["key-value-list.css"]
        };
    }
    static get properties() {
        return {
            "striped": {
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
                    "text": "Optional striped key value list style"
                },
                "attribute": "striped",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=key-value-list.js.map
