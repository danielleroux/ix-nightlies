/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
export class FilterChip {
    constructor() {
        this.disabled = false;
        this.readonly = false;
    }
    onCloseClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.closeClick.emit();
    }
    render() {
        return (h(Host, { key: '10df51e34656ed3b7b18e9f2a07a59c18784a3d1', class: { disabled: this.disabled, readonly: this.readonly }, title: this.el.textContent }, h("div", { key: '5a94912e2c22cbddb984b28ba0126f31c1e20165', class: "slot-container" }, h("slot", { key: '0fdc94729908b9c3a040667318dcc18d300e4176' })), !this.disabled && !this.readonly ? (h("ix-icon-button", { ghost: true, oval: true, icon: 'close-small', size: "16", tabindex: this.disabled ? -1 : 0, variant: "primary", disabled: this.disabled, onClick: (e) => this.onCloseClick(e) })) : null));
    }
    static get is() { return "ix-filter-chip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["filter-chip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["filter-chip.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "If true the filter chip will be in disabled state"
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "readonly": {
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
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "If true the filter chip will be in readonly mode"
                },
                "attribute": "readonly",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "closeClick",
                "name": "closeClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Close clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=filter-chip.js.map
