/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import { makeRef } from "../utils/make-ref";
/**
 * @deprecated since 2.0.0. Use the `ix-dropdown-item` component instead.
 */
export class SplitButtonItem {
    constructor() {
        this.wrapperRef = makeRef();
        this.icon = undefined;
        this.label = undefined;
    }
    /** @internal */
    async getDropdownItemElement() {
        return this.wrapperRef.waitForCurrent();
    }
    render() {
        return (h(Host, { key: 'b7360859acb51da295ef29d514e8d4dbef347931' }, h("ix-dropdown-item", { key: '1c47e6937a8a686da1bb0b028daa0fef1b711f4e', ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, onClick: (e) => this.itemClick.emit(e) })));
    }
    static get is() { return "ix-split-button-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["split-button-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["split-button-item.css"]
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
                    "text": "Dropdown icon"
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
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Dropdown label"
                },
                "attribute": "label",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "itemClick",
                "name": "itemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Dropdown item clicked"
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "getDropdownItemElement": {
                "complexType": {
                    "signature": "() => Promise<HTMLIxDropdownItemElement>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLIxDropdownItemElement": {
                            "location": "global",
                            "id": "global::HTMLIxDropdownItemElement"
                        }
                    },
                    "return": "Promise<HTMLIxDropdownItemElement>"
                },
                "docs": {
                    "text": "",
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }]
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=split-button-item.js.map
