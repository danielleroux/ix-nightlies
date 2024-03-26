/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { forceUpdate, h, } from "@stencil/core";
import { MenuTabs } from "../utils/menu-tabs/menu-tabs-fc";
import { initialize, setTab, } from "../utils/menu-tabs/menu-tabs-utils";
export class MenuSettings {
    constructor() {
        this.activeTabLabel = undefined;
        this.label = 'Settings';
        this.show = false;
        this.items = undefined;
    }
    updateTab(label) {
        setTab(this, label);
    }
    componentWillLoad() {
        initialize(this);
    }
    componentDidLoad() {
        forceUpdate(this.el);
    }
    render() {
        return h(MenuTabs, { key: '81cb8883f4cdcf08c1d6005c634cfe9d44fde8e2', context: this });
    }
    static get is() { return "ix-menu-settings"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-settings.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-settings.css"]
        };
    }
    static get properties() {
        return {
            "activeTabLabel": {
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
                    "tags": [],
                    "text": "Active tab"
                },
                "attribute": "active-tab-label",
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
                    "text": "Label of first tab"
                },
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'Settings'"
            },
            "show": {
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
                    "text": "Internal"
                },
                "attribute": "show",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "items": {}
        };
    }
    static get events() {
        return [{
                "method": "close",
                "name": "close",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Popover closed"
                },
                "complexType": {
                    "original": "CustomCloseEvent",
                    "resolved": "CustomCloseEvent",
                    "references": {
                        "CustomCloseEvent": {
                            "location": "import",
                            "path": "../utils/menu-tabs/menu-tabs-utils",
                            "id": "src/components/utils/menu-tabs/menu-tabs-utils.ts::CustomCloseEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "activeTabLabel",
                "methodName": "updateTab"
            }];
    }
}
//# sourceMappingURL=menu-settings.js.map
