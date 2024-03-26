/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
export class DropdownItem {
    constructor() {
        this.label = undefined;
        this.icon = undefined;
        this.hover = false;
        this.disabled = false;
        this.checked = false;
        this.isSubMenu = false;
        this.suppressChecked = false;
    }
    /**
     * Internal usage only
     */
    async emitItemClick() {
        this.itemClick.emit(this.hostElement);
    }
    /** @internal */
    async getDropdownItemElement() {
        return this.hostElement;
    }
    isIconOnly() {
        return (this.label === undefined &&
            this.hostElement.innerText === '' &&
            this.icon !== undefined);
    }
    render() {
        return (h(Host, { key: 'd34bb3c1947e4d807fde7bc99674d1d90bffdace', class: {
                hover: this.hover,
                'icon-only': this.isIconOnly(),
                disabled: this.disabled,
                submenu: this.isSubMenu,
            }, role: "listitem" }, h("button", { key: 'e1d2d336b9dec9f056ad93fc62f2a9573a16aa94', type: "button", tabIndex: 0, class: {
                'dropdown-item': true,
                'no-checked-field': this.suppressChecked,
            }, onClick: () => this.emitItemClick() }, !this.suppressChecked ? (h("div", { class: "dropdown-item-checked" }, this.checked ? (h("ix-icon", { class: "checkmark", name: 'single-check', size: "16" })) : null)) : null, this.icon ? (h("ix-icon", { class: "dropdown-item-icon", name: this.icon })) : null, h("div", { key: '0544f71c5fb18304695eee5b80913866f6f59267', class: "dropdown-item-text" }, this.label, h("slot", { key: '01da7753d2151db1095dfcd1f9a3155611d8f2b6' })), this.isSubMenu ? (h("ix-icon", { name: 'chevron-right-small', class: 'submenu-icon' })) : null)));
    }
    static get is() { return "ix-dropdown-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown-item.css"]
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
                    "text": "Label of dropdown item"
                },
                "attribute": "label",
                "reflect": false
            },
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
                    "text": "Icon of dropdown item"
                },
                "attribute": "icon",
                "reflect": false
            },
            "hover": {
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
                    "text": "Display hover state"
                },
                "attribute": "hover",
                "reflect": false,
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
                    "text": "Disable item and remove event listeners"
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "checked": {
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
                    "text": "Whether the item is checked or not. If true a checkmark will mark the item as checked."
                },
                "attribute": "checked",
                "reflect": false,
                "defaultValue": "false"
            },
            "isSubMenu": {
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
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "is-sub-menu",
                "reflect": false,
                "defaultValue": "false"
            },
            "suppressChecked": {
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
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "suppress-checked",
                "reflect": false,
                "defaultValue": "false"
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "complexType": {
                    "original": "HTMLIxDropdownItemElement",
                    "resolved": "HTMLIxDropdownItemElement",
                    "references": {
                        "HTMLIxDropdownItemElement": {
                            "location": "global",
                            "id": "global::HTMLIxDropdownItemElement"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "emitItemClick": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Internal usage only",
                    "tags": []
                }
            },
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
//# sourceMappingURL=dropdown-item.js.map
