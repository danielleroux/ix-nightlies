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
        return (h(Host, { key: '8bf5e46c861e4ecc96e1d60bb264df172eb04d4b', slot: "ix-menu-avatar" }, h("button", { key: '0e71ddc336f3479babc631286d2d197b22425b15', class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: '21e19546cc0c85f08dc55c756257d6837026bbc4', image: this.image, initials: this.initials }), h("div", { key: 'ae34c1fbcfb9e3308f7cc30d95eed2936103752e', class: "avatar-name" }, h("span", { key: 'd0d347700dce04ce30d7d94db555685ae41757a9', class: "text-default-single", title: this.top }, this.top), h("span", { key: '421929f8378c77fe75c9b277ad618dbf4e0beb61', class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: 'e6b252824d99d5bd04623cfe9d44748d908f426d', trigger: this.hostElement, placement: 'right-start', hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
                mainAxis: 16,
            } }, h("slot", { key: 'b18051f219de8a505fac62c3b50a700e3d9147f0', onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? (h("ix-menu-avatar-item", { label: this.i18nLogout, icon: 'log-out', onClick: (e) => {
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
