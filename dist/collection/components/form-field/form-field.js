/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class FormField {
    constructor() {
        this.label = undefined;
    }
    get inputElement() {
        return this.hostElement.querySelector('input');
    }
    componentWillLoad() { }
    render() {
        return (h(Host, { key: '6b94db9e2ce60a80ccf1f64463fabcf6c432ad70' }, this.label ? (h("label", { htmlFor: this.inputElement.id }, this.label)) : null, h("slot", { key: '7dd324c00fa1fddd947739ec7f4e3a77a10ceaf8' })));
    }
    static get is() { return "ix-form-field"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["form-field.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["form-field.css"]
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
                    "text": "Label"
                },
                "attribute": "label",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=form-field.js.map
