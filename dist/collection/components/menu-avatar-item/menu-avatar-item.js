/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, } from "@stencil/core";
import { makeRef } from "../utils/make-ref";
export class MenuAvatarItem {
    constructor() {
        this.dropdownItemRef = makeRef();
        this.icon = undefined;
        this.label = undefined;
    }
    /** @internal */
    async getDropdownItemElement() {
        return this.dropdownItemRef.waitForCurrent();
    }
    render() {
        return (h("ix-dropdown-item", { key: '19c0f4f0f90748af24ff82abd9a16f1e2bdcbe65', ref: this.dropdownItemRef, icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) }));
    }
    static get is() { return "ix-menu-avatar-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-avatar-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-avatar-item.css"]
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
                    "text": "Avatar dropdown icon"
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
                    "text": "Avatar dropdown label"
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
                    "text": "Avatar dropdown item clicked"
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
//# sourceMappingURL=menu-avatar-item.js.map
