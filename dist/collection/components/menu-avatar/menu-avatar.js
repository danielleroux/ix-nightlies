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
        return (h(Host, { key: '658e27fb6385bda64d9d7f68f77eb70a4c65ba6a', slot: "ix-menu-avatar" }, h("button", { key: '42024cf4bd2c5d350b9369ebeba474a62f006639', class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: 'a4e855427e1fe55b6d866895587b53cda99b3b3b', image: this.image, initials: this.initials }), h("div", { key: 'c41428278d3309934761759d5f1f3587e2bff850', class: "avatar-name" }, h("span", { key: '9504c5acb6d1903068897e3a151116428f5e05da', class: "text-default-single", title: this.top }, this.top), h("span", { key: '423bfa9d792d7c0c92500cb961c21d15f9d2a0cd', class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: 'cf520e8c7e940c05bb7ff850ba86d137ca606ab5', trigger: this.hostElement, placement: 'right-start', hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
                mainAxis: 16,
            } }, h("slot", { key: '4fcfea4ec3e971d4d29fedd00d556405fdb77209', onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? (h("ix-menu-avatar-item", { label: this.i18nLogout, icon: 'log-out', onClick: (e) => {
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
