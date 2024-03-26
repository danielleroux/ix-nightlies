/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
export class GroupItem {
    constructor() {
        this.icon = undefined;
        this.text = undefined;
        this.secondaryText = undefined;
        this.suppressSelection = false;
        this.selected = undefined;
        this.focusable = true;
        this.index = undefined;
    }
    clickListen() {
        if (this.suppressSelection) {
            return;
        }
        this.selectedChanged.emit(this.hostElement);
    }
    render() {
        return (h(Host, { key: '510249c40eb513c0cad7ad186f94311e86b99c1c', class: {
                selected: this.selected && !this.suppressSelection,
                'suppress-selection': this.suppressSelection,
            } }, h("button", { key: '58314b961969fc828b490a251eb3fc991b332356', tabindex: this.focusable ? 0 : -1 }, h("div", { key: '3b643550562e7368c87e4b6443a51902f63da7d5', class: "group-entry-selection-indicator" }), this.icon ? h("ix-icon", { size: "16", name: this.icon }) : null, this.text ? (h("span", { class: "group-entry-text" }, h("span", { title: this.text }, this.text))) : null, this.secondaryText ? (h("span", { class: "group-entry-text-secondary" }, h("span", { title: this.secondaryText }, this.secondaryText))) : null, h("slot", { key: '1314f12170969fd85675165af10b1bff1048f8a5' }))));
    }
    static get is() { return "ix-group-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["group-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["group-item.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Group item icon"
                },
                "attribute": "icon",
                "reflect": false
            },
            "text": {
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
                    "text": "Group item text"
                },
                "attribute": "text",
                "reflect": false
            },
            "secondaryText": {
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
                    "text": "Group item secondary text"
                },
                "attribute": "secondary-text",
                "reflect": false
            },
            "suppressSelection": {
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
                    "text": "Supress the selection of the group"
                },
                "attribute": "suppress-selection",
                "reflect": false,
                "defaultValue": "false"
            },
            "selected": {
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
                    "text": "Show selected state"
                },
                "attribute": "selected",
                "reflect": false
            },
            "focusable": {
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
                    "text": "The elements tabindex attribute will get set accordingly.\nIf true tabindex will be 0, -1 otherwise."
                },
                "attribute": "focusable",
                "reflect": false,
                "defaultValue": "true"
            },
            "index": {
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
                    "text": "Index"
                },
                "attribute": "index",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "selectedChanged",
                "name": "selectedChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Selection changed"
                },
                "complexType": {
                    "original": "HTMLIxGroupItemElement",
                    "resolved": "HTMLIxGroupItemElement",
                    "references": {
                        "HTMLIxGroupItemElement": {
                            "location": "global",
                            "id": "global::HTMLIxGroupItemElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "clickListen",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=group-item.js.map
