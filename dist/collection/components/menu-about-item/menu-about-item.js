/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
export class MenuAboutItem {
    constructor() {
        this.label = undefined;
    }
    watchLabel(newValue, oldValue) {
        this.labelChange.emit({
            name: 'ix-menu-about-item',
            oldLabel: oldValue,
            newLabel: newValue,
        });
    }
    render() {
        return (h(Host, { key: '963b59afed12d8bba0b4107da846b433bc451b1f' }, h("slot", { key: 'fbea143350cd9850db1526e19363f7d8632035af' })));
    }
    static get is() { return "ix-menu-about-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-about-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-about-item.css"]
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
                    "text": "About Item label"
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
//# sourceMappingURL=menu-about-item.js.map
