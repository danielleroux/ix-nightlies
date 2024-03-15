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
        return (h(Host, { key: '4ba9c673e94ffceedf28fbf04a7d136720db55f4', class: {
                disabled: this.disabled,
            }, onClick: () => this.onCheckedChange(!this.checked) }, h("input", { key: '38b9f9e4577c54c1f930e93db5958f828e5fe789', disabled: this.disabled, indeterminate: this.indeterminate, checked: this.checked, role: "switch", tabindex: 0, type: "checkbox", "aria-checked": a11yBoolean(this.checked), onChange: (event) => this.onCheckedChange(event.target.checked) }), h("label", { key: '0ec0fa498dde12fc557ab02fc785ef291a803dcd', class: "switch", tabIndex: -1 }, h("span", { key: '8101166f958219372a1ea6e509233b63c0d05ede', class: "slider" })), !this.hideText ? (h(Fragment, null, !this.indeterminate ? (h("span", { class: 'toggle-text', "aria-hidden": a11yBoolean(true) }, this.checked ? this.textOn : this.textOff)) : (h("span", { class: 'toggle-text', "aria-hidden": a11yBoolean(true) }, this.textIndeterminate)))) : null));
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
