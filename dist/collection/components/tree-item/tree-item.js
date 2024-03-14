/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class TreeItem {
    constructor() {
        this.text = undefined;
        this.hasChildren = undefined;
        this.context = undefined;
    }
    render() {
        var _a, _b, _c;
        return (h(Host, { key: '72c298e696aaee44b442f49ceb11a3144a09c168', class: {
                selected: (_a = this.context) === null || _a === void 0 ? void 0 : _a.isSelected,
            } }, h("div", { key: '4788be140916a10ba790ca794fe73ff622e62c02', class: "icon-toggle-container", onClick: (e) => {
                e.preventDefault();
                this.toggle.emit();
            } }, this.hasChildren ? (h("ix-icon", { name: 'chevron-right', size: "16", class: {
                ['icon-toggle-down']: (_b = this.context) === null || _b === void 0 ? void 0 : _b.isExpanded,
            }, color: `color-${((_c = this.context) === null || _c === void 0 ? void 0 : _c.isExpanded) ? 'primary' : 'std-text'}` })) : null), h("div", { key: '2a3ea8e297cfcd16229ec6a8591d7037992fbc44', class: "tree-node-container", onClick: () => {
                this.itemClick.emit();
            } }, this.text, h("slot", { key: '7bacf0d5cd6e90f188c6f1d8548de2f0a9d82ecb' }))));
    }
    static get is() { return "ix-tree-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tree-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tree-item.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Text"
                },
                "attribute": "text",
                "reflect": false
            },
            "hasChildren": {
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
                    "text": "Has tree item children"
                },
                "attribute": "has-children",
                "reflect": false
            },
            "context": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TreeItemContext",
                    "resolved": "TreeItemContext",
                    "references": {
                        "TreeItemContext": {
                            "location": "import",
                            "path": "../tree/tree-model",
                            "id": "src/components/tree/tree-model.ts::TreeItemContext"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Context"
                }
            }
        };
    }
    static get events() {
        return [{
                "method": "toggle",
                "name": "toggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Expand/Collapsed toggled"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "itemClick",
                "name": "itemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=tree-item.js.map
