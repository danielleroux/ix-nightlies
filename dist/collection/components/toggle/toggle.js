/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Fragment, h, Host, } from "@stencil/core";
import { a11yBoolean } from "../utils/a11y";
export class Toggle {
    constructor() {
        this.checked = false;
        this.disabled = false;
        this.indeterminate = false;
        this.textOn = 'On';
        this.textOff = 'Off';
        this.textIndeterminate = 'Mixed';
        this.hideText = false;
    }
    onCheckedChange(newChecked) {
        if (this.indeterminate) {
            this.indeterminate = false;
        }
        this.checked = newChecked;
        this.checkedChange.emit(this.checked);
    }
    render() {
        return (h(Host, { key: '47551ac764885becdf8b0679b04050692867c99c', class: {
                disabled: this.disabled,
            }, onClick: () => this.onCheckedChange(!this.checked) }, h("input", { key: '2f8ceac3b78c9496f6bed179cb7b05310616f3ba', disabled: this.disabled, indeterminate: this.indeterminate, checked: this.checked, role: "switch", tabindex: 0, type: "checkbox", "aria-checked": a11yBoolean(this.checked), onChange: (event) => this.onCheckedChange(event.target.checked) }), h("label", { key: '11f165b726d672b8bd24b411deb0f9ccfeee5054', class: "switch", tabIndex: -1 }, h("span", { key: 'a2b95f492b930d283df35f61db9e4375fd20d2d6', class: "slider" })), !this.hideText ? (h(Fragment, null, !this.indeterminate ? (h("span", { class: 'toggle-text', "aria-hidden": a11yBoolean(true) }, this.checked ? this.textOn : this.textOff)) : (h("span", { class: 'toggle-text', "aria-hidden": a11yBoolean(true) }, this.textIndeterminate)))) : null));
    }
    static get is() { return "ix-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["toggle.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["toggle.css"]
        };
    }
    static get properties() {
        return {
            "checked": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the slide-toggle element is checked or not."
                },
                "attribute": "checked",
                "reflect": true,
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "Whether the slide-toggle element is disabled or not."
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "indeterminate": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true the control is in indeterminate state"
                },
                "attribute": "indeterminate",
                "reflect": true,
                "defaultValue": "false"
            },
            "textOn": {
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
                    "text": "Text for on state"
                },
                "attribute": "text-on",
                "reflect": false,
                "defaultValue": "'On'"
            },
            "textOff": {
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
                    "text": "Text for off state"
                },
                "attribute": "text-off",
                "reflect": false,
                "defaultValue": "'Off'"
            },
            "textIndeterminate": {
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
                    "text": "Text for indeterminate state"
                },
                "attribute": "text-indeterminate",
                "reflect": false,
                "defaultValue": "'Mixed'"
            },
            "hideText": {
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
                    "text": "Hide `on` and `off` text"
                },
                "attribute": "hide-text",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "checkedChange",
                "name": "checkedChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "An event will be dispatched each time the slide-toggle changes its value."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=toggle.js.map
