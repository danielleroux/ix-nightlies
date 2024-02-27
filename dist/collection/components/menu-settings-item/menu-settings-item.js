/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
export class MenuSettingsItem {
    constructor() {
        this.label = undefined;
    }
    watchLabel(newValue, oldValue) {
        this.labelChange.emit({
            name: 'ix-menu-settings-item',
            oldLabel: oldValue,
            newLabel: newValue,
        });
    }
    render() {
        return (h(Host, { key: '265bf24f492278e364dcdba664e6e919e60b745a' }, h("slot", { key: '2979e025b275b5d031f22f1bfb1f37272d624d1b' })));
    }
    static get is() { return "ix-menu-settings-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-settings-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-settings-item.css"]
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
                    "text": "Settings Item label"
                },
                "attribute": "label",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "labelChange",
                "name": "labelChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Label changed"
                },
                "complexType": {
                    "original": "CustomLabelChangeEvent",
                    "resolved": "CustomLabelChangeEvent",
                    "references": {
                        "CustomLabelChangeEvent": {
                            "location": "import",
                            "path": "../utils/menu-tabs/menu-tabs-utils",
                            "id": "src/components/utils/menu-tabs/menu-tabs-utils.ts::CustomLabelChangeEvent"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "label",
                "methodName": "watchLabel"
            }];
    }
}
//# sourceMappingURL=menu-settings-item.js.map
