/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { createMutationObserver } from "../utils/mutation-observer";
/**
 * @slot menu-item-label Custom label
 */
export class MenuItem {
    constructor() {
        this.isHostedInsideCategory = false;
        this.home = false;
        this.bottom = false;
        this.tabIcon = undefined;
        this.icon = undefined;
        this.notifications = undefined;
        this.active = undefined;
        this.disabled = undefined;
        this.title = undefined;
    }
    componentWillLoad() {
        this.isHostedInsideCategory =
            !!this.hostElement.closest('ix-menu-category');
        this.onIconChange();
        this.onTabIconChange();
    }
    componentWillRender() {
        this.title = this.hostElement.innerText;
    }
    connectedCallback() {
        this.observer = createMutationObserver(() => {
            this.title = this.hostElement.innerText;
        });
        this.observer.observe(this.hostElement, {
            subtree: true,
            childList: true,
            characterData: true,
        });
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    onIconChange() {
        if (!this.isHostedInsideCategory &&
            !this.hostElement.icon &&
            !this.hostElement.tabIcon) {
            this.icon = 'document';
        }
    }
    onTabIconChange() {
        if (!this.isHostedInsideCategory &&
            !this.hostElement.icon &&
            !this.hostElement.tabIcon) {
            this.tabIcon = 'document';
        }
    }
    render() {
        var _a;
        let extendedAttributes = {};
        if (this.home) {
            extendedAttributes = {
                slot: 'home',
            };
        }
        if (this.bottom) {
            extendedAttributes = {
                slot: 'bottom',
            };
        }
        return (h(Host, Object.assign({ key: 'ccfb89a1d40730adfcdc3afe2067abb436fcbbeb', class: {
                disabled: this.disabled,
                'home-tab': this.home,
                'bottom-tab': this.bottom,
                active: this.active,
                'tab-nested': this.isHostedInsideCategory,
            } }, extendedAttributes), h("button", { key: '0d3a28e71c173f4373eb166a675cacd0982a159a', class: "tab", title: this.title, tabIndex: this.disabled ? -1 : 0, role: "listitem" }, (this.icon || this.tabIcon) && (h("ix-icon", { class: 'tab-icon', name: (_a = this.icon) !== null && _a !== void 0 ? _a : this.tabIcon })), this.notifications ? (h("div", { class: "notification" }, h("div", { class: "pill" }, this.notifications))) : null, h("span", { key: '142f75cc33d765e172a73bd109736f71d0859f54', class: "tab-text text-default" }, h("slot", { key: '302d2eb2bce613f1d6d19498dee73ebcb0448510' })))));
    }
    static get is() { return "ix-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-item.css"]
        };
    }
    static get properties() {
        return {
            "home": {
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
                    "text": "Move the Tab to a top position."
                },
                "attribute": "home",
                "reflect": false,
                "defaultValue": "false"
            },
            "bottom": {
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
                    "text": "Caution: this is no longer working. Please use slot=\"bottom\" instead.\n\nPlace tab on bottom"
                },
                "attribute": "bottom",
                "reflect": false,
                "defaultValue": "false"
            },
            "tabIcon": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "link",
                            "text": "https://ix.siemens.io/docs/icon-library/icons"
                        }, {
                            "name": "deprecated",
                            "text": "since 2.0.0 use `icon` property. Will be removed in 3.0.0"
                        }],
                    "text": "Name of the icon you want to display. Icon names can be resolved from the documentation"
                },
                "attribute": "tab-icon",
                "reflect": false
            },
            "icon": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "link",
                            "text": "https://ix.siemens.io/docs/icon-library/icons"
                        }],
                    "text": "Name of the icon you want to display. Icon names can be resolved from the documentation"
                },
                "attribute": "icon",
                "reflect": false
            },
            "notifications": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show notification count on tab"
                },
                "attribute": "notifications",
                "reflect": false
            },
            "active": {
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
                    "text": "State to display active"
                },
                "attribute": "active",
                "reflect": false
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
                    "text": "Disable tab and remove event handlers"
                },
                "attribute": "disabled",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "title": {}
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "icon",
                "methodName": "onIconChange"
            }, {
                "propName": "tabIcon",
                "methodName": "onTabIconChange"
            }];
    }
}
//# sourceMappingURL=menu-item.js.map
