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
        return (h(Host, { key: 'ae262d966e9e69c5c7558190f61928b4c109643f' }, this.icon ? (h("ix-icon", { class: 'modal-icon', name: this.icon, color: this.iconColor })) : null, h("ix-typography", { key: '4ff8195c0b582e37527d793e1e32615cb190e0a5', variant: 'default-title' }, h("slot", { key: '10f9506941a2f34631520d7209612c3cf07dd431' })), !this.hideClose ? (h("ix-icon-button", { onClick: (event) => this.onCloseClick(event), ghost: true, icon: "close", class: 'modal-close' })) : null));
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
