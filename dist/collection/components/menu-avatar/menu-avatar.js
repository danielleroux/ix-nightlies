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
        return (h(Host, { key: '9e441960de041793fa2dfcb01ee9eba0dfaee7b1', slot: "ix-menu-avatar" }, h("button", { key: '71b655be0b85714accc737a03003cee112a811d6', class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: '1a5478003d44c00a2143e894f4f72eb97803d0eb', image: this.image, initials: this.initials }), h("div", { key: '6e71d678965e7a668b8a77a6e677d48e3eaca96a', class: "avatar-name" }, h("span", { key: 'd70dea64cda4ccea61c88390280d14a4638ccf4d', class: "text-default-single", title: this.top }, this.top), h("span", { key: '43e22d6443af2105d6066cedb488d3053464782a', class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: 'fb3f385aebe317672664739930696481ad1d275f', trigger: this.hostElement, placement: 'right-start', hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
                mainAxis: 16,
            } }, h("slot", { key: '4d7ec8a3ea4abe5214d1b5d8e87ca111fa40a9f3', onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? (h("ix-menu-avatar-item", { label: this.i18nLogout, icon: 'log-out', onClick: (e) => {
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
