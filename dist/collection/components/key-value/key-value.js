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
 * @slot custom-value - Optional custom value at key value instead of text value
 *
 * @since 1.6.0
 */
export class KeyValue {
    constructor() {
        this.icon = undefined;
        this.label = undefined;
        this.labelPosition = 'top';
        this.value = undefined;
    }
    render() {
        return (h(Host, { key: '88dcec3572f18783faddef7e3ac8a66aef01ed1b', class: `keyValue keyValue--${this.labelPosition === 'top' ? 'column' : 'row'}` }, this.icon && (h("ix-icon", { name: this.icon, size: "24", class: "keyValue__icon" })), h("div", { key: '133fd9fa5e7fc3af3e181425045073c43c47049d', class: "keyValue__content" }, h("div", { key: '569cb9031c047421118d8847ec0c84dc8aeee469', class: "content__label" }, this.label), h("div", { key: 'a082de0c7b9a820d3ab86ef06f7be7425343a67a', class: {
                content__value: true,
                'has-customValue': this.value === undefined,
            } }, this.value !== undefined ? (this.value) : (h("slot", { name: "custom-value" }))))));
    }
    static get is() { return "ix-key-value"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["key-value.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["key-value.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
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
                    "text": "Optional key value icon"
                },
                "attribute": "icon",
                "reflect": false
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Key value label"
                },
                "attribute": "label",
                "reflect": false
            },
            "labelPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "KeyValueLabelPosition",
                    "resolved": "\"left\" | \"top\"",
                    "references": {
                        "KeyValueLabelPosition": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/key-value/key-value.tsx",
                            "id": "src/components/key-value/key-value.tsx::KeyValueLabelPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Optional key value label position - 'top' or 'left'"
                },
                "attribute": "label-position",
                "reflect": false,
                "defaultValue": "'top'"
            },
            "value": {
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
                    "text": "Optional key value text value"
                },
                "attribute": "value",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=key-value.js.map
