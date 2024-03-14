/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import { closestPassShadow } from "../utils/shadow-dom";
/**
 * @since 2.0.0
 */
export class ModalHeader {
    constructor() {
        this.hideClose = false;
        this.icon = undefined;
        this.iconColor = undefined;
    }
    onIconChange(icon) {
        if (this.parentDialog) {
            if (icon) {
                this.parentDialog.classList.add('with-icon');
            }
            else {
                this.parentDialog.classList.remove('with-icon');
            }
        }
    }
    componentDidLoad() {
        this.parentDialog = closestPassShadow(this.hostElement, 'ix-modal');
        this.onIconChange(this.icon);
    }
    onCloseClick(event) {
        const ce = this.closeClick.emit(event);
        if (ce.defaultPrevented || event.defaultPrevented) {
            return;
        }
        this.parentDialog.dismissModal();
    }
    render() {
        return (h(Host, { key: '6acc4a0a566d2b681ccabf3b1bc1b8a09da23926' }, this.icon ? (h("ix-icon", { class: 'modal-icon', name: this.icon, color: this.iconColor })) : null, h("ix-typography", { key: '1bcbb5e77ec381b904efa5d18315a35da9fb5964', variant: 'default-title' }, h("slot", { key: '12f1f41c559b4ba64c69e5039d425ee17019254a' })), !this.hideClose ? (h("ix-icon-button", { onClick: (event) => this.onCloseClick(event), ghost: true, icon: "close", class: 'modal-close' })) : null));
    }
    static get is() { return "ix-modal-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-header.css"]
        };
    }
    static get properties() {
        return {
            "hideClose": {
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
                    "text": "Hide the close button"
                },
                "attribute": "hide-close",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Icon of the Header"
                },
                "attribute": "icon",
                "reflect": false
            },
            "iconColor": {
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
                    "text": "Icon color"
                },
                "attribute": "icon-color",
                "reflect": false
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
                    "text": "Emits when close icon is clicked and closes the modal\nCan be prevented, in which case only the event is triggered, and the modal remains open"
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
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "icon",
                "methodName": "onIconChange"
            }];
    }
}
//# sourceMappingURL=modal-header.js.map
