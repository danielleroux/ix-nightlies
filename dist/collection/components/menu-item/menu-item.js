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
        return (h(Host, Object.assign({ key: 'cf7c3ee73c7ff53d9825bc64460a72a876c46f03', class: {
                disabled: this.disabled,
                'home-tab': this.home,
                'bottom-tab': this.bottom,
                active: this.active,
                'tab-nested': this.isHostedInsideCategory,
            } }, extendedAttributes), h("button", { key: 'd79e9ab5097e712949a65e59e08426166dfa4091', class: "tab", title: this.title, tabIndex: this.disabled ? -1 : 0, role: "listitem" }, (this.icon || this.tabIcon) && (h("ix-icon", { class: 'tab-icon', name: (_a = this.icon) !== null && _a !== void 0 ? _a : this.tabIcon })), this.notifications ? (h("div", { class: "notification" }, h("div", { class: "pill" }, this.notifications))) : null, h("span", { key: 'edbdefc1edd5b572c49d2f74e184a466989500e6', class: "tab-text text-default" }, h("slot", { key: 'f3d75d13c9b68b69e7731f9c947c423e304a76d6' })))));
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
