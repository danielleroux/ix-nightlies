/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import { getSlottedElements } from "../utils/shadow-dom";
export class MenuAvatar {
    constructor() {
        this.avatarElementId = 'ix-menu-avatar-id';
        this.top = undefined;
        this.bottom = undefined;
        this.image = undefined;
        this.initials = undefined;
        this.i18nLogout = 'Logout';
        this.showLogoutButton = true;
        this.showContextMenu = false;
    }
    onSlotChange() {
        const slot = this.hostElement.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const elements = getSlottedElements(slot);
        this.showContextMenu = elements.length !== 0;
    }
    render() {
        return (h(Host, { key: '80205449f8a227f1150d29869bb751972c00e5ba', slot: "ix-menu-avatar" }, h("button", { key: '8c6f819b552bc4252922363b3cb5572df452d113', class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: 'ad2c39144858f3bab508f3e669b74b6eca33a6b8', image: this.image, initials: this.initials }), h("div", { key: '3d460c2a1cdd5b2b1027287eaacc706ec0dbef00', class: "avatar-name" }, h("span", { key: '0b012eb24167bde33735ffb8c7543f1a90d51691', class: "text-default-single", title: this.top }, this.top), h("span", { key: 'a46ec1197af4d303f8eba3de258c9351814702dc', class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: 'f832a8b3a424393be121cf24de5d3e56aad0c9cd', trigger: this.hostElement, placement: 'right-start', hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
                mainAxis: 16,
            } }, h("slot", { key: 'a86dd3bf4ffc579d0a0472b00a060c3be392758b', onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? (h("ix-menu-avatar-item", { label: this.i18nLogout, icon: 'log-out', onClick: (e) => {
                this.logoutClick.emit(e);
            } })) : null)));
    }
    static get is() { return "ix-menu-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-avatar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-avatar.css"]
        };
    }
    static get properties() {
        return {
            "top": {
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
                    "text": "First line of text"
                },
                "attribute": "top",
                "reflect": false
            },
            "bottom": {
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
                    "text": "Second line of text"
                },
                "attribute": "bottom",
                "reflect": false
            },
            "image": {
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
                    "tags": [{
                            "name": "since",
                            "text": "1.4.0"
                        }],
                    "text": "Display a avatar image"
                },
                "attribute": "image",
                "reflect": false
            },
            "initials": {
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
                    "tags": [{
                            "name": "since",
                            "text": "1.4.0"
                        }],
                    "text": "Display the initials of the user. Will be overwritten by image"
                },
                "attribute": "initials",
                "reflect": false
            },
            "i18nLogout": {
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
                    "text": "Use for translation"
                },
                "attribute": "i-1-8n-logout",
                "reflect": false,
                "defaultValue": "'Logout'"
            },
            "showLogoutButton": {
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
                            "text": "2.1.0"
                        }],
                    "text": "Control the visibility of the logout button"
                },
                "attribute": "show-logout-button",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "showContextMenu": {}
        };
    }
    static get events() {
        return [{
                "method": "logoutClick",
                "name": "logoutClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Logout click"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=menu-avatar.js.map
