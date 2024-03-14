/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import Hyperlist from "hyperlist";
import { renderDefaultItem } from "../tree-item/default-tree-item";
export class Tree {
    constructor() {
        this.toggleListener = new Map();
        this.itemClickListener = new Map();
        this.updates = new Map();
        this.hasFirstRender = false;
        this.root = undefined;
        this.model = undefined;
        this.renderItem = undefined;
        this.context = {};
    }
    updatePadding(element, item) {
        element.style.paddingLeft = item.level + 'rem';
    }
    getVirtualizerOptions() {
        const list = this.buildTreeList(this.model[this.root]);
        let setToggleListener = (item, el, index) => {
            if (item.hasChildren && !this.toggleListener.has(el)) {
                const toggleCallback = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const context = this.getContext(list[index].id);
                    context.isExpanded = !context.isExpanded;
                    this.nodeToggled.emit({ id: item.id, isExpaned: context.isExpanded });
                    this.setContext(item.id, context);
                };
                el.addEventListener('toggle', toggleCallback);
                this.toggleListener.set(el, toggleCallback);
            }
        };
        return {
            itemHeight: 32,
            total: list.length,
            generate: (index) => {
                const item = list[index];
                const renderedTreeItem = this.hostElement.querySelector(`[data-tree-node-id="${item.id}"]`);
                const context = this.getContext(item.id);
                if (renderedTreeItem) {
                    renderedTreeItem.hasChildren = item.hasChildren;
                    renderedTreeItem.context = Object.assign({}, context);
                    setToggleListener(item, renderedTreeItem, index);
                    if (this.updates.has(item.id)) {
                        const doUpdate = this.updates.get(item.id);
                        doUpdate(item, Object.assign({}, this.context));
                    }
                    this.updatePadding(renderedTreeItem, item);
                    return renderedTreeItem;
                }
                const update = (callback) => {
                    this.updates.set(item.id, callback);
                };
                let innerElement = null;
                if (this.renderItem) {
                    innerElement = this.renderItem(index, item, list, Object.assign({}, this.context), update);
                }
                if (innerElement === null) {
                    innerElement = renderDefaultItem(item, context, update);
                }
                const el = innerElement;
                el.setAttribute('data-tree-node-id', item.id);
                el.style.paddingRight = '1rem';
                this.updatePadding(el, item);
                if (!this.itemClickListener.has(el)) {
                    const itemClickCallback = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        Object.values(this.context).forEach((c) => (c.isSelected = false));
                        const context = this.getContext(item.id);
                        context.isSelected = true;
                        this.setContext(item.id, context);
                        this.nodeClicked.emit(item.id);
                    };
                    el.addEventListener('itemClick', itemClickCallback);
                    this.itemClickListener.set(el, itemClickCallback);
                }
                setToggleListener(item, el, index);
                return el;
            },
        };
    }
    setContext(id, context) {
        this.context = Object.assign(Object.assign({}, this.context), { [id]: context });
        this.contextChange.emit(this.context);
    }
    getContext(id) {
        if (!this.context) {
            return {
                isExpanded: false,
                isSelected: false,
            };
        }
        if (!this.context[id]) {
            this.context[id] = {
                isExpanded: false,
                isSelected: false,
            };
        }
        return this.context[id];
    }
    buildTreeList(root, level = 0) {
        const itemList = [];
        if (root === null || root === void 0 ? void 0 : root.hasChildren) {
            const newLevel = level + 1;
            root.children.forEach((id) => {
                const item = this.model[id];
                const context = this.getContext(id);
                itemList.push(Object.assign(Object.assign({}, item), { level }));
                if (item.hasChildren && context.isExpanded) {
                    itemList.push(...this.buildTreeList(item, newLevel));
                }
            });
        }
        return itemList;
    }
    componentDidLoad() {
        this.initList();
        this.observer = new MutationObserver((records) => {
            let removed = [];
            records.forEach((record) => {
                removed = [...removed, ...Array.from(record.removedNodes)];
                record.addedNodes.forEach((an) => {
                    const index = removed.indexOf(an);
                    if (index >= 0) {
                        removed.splice(index, 1);
                    }
                });
            });
            this.nodeRemoved.emit(removed);
        });
        this.observer.observe(this.hostElement, {
            childList: true,
        });
    }
    componentWillRender() {
        this.hasFirstRender = true;
        if (this.isListInitialized()) {
            this.refreshList();
        }
        else {
            this.initList();
        }
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.observer) === null || _b === void 0 ? void 0 : _b.disconnect();
    }
    modelChange() {
        if (this.hasFirstRender && !this.isListInitialized()) {
            this.initList();
        }
    }
    isListInitialized() {
        var _a;
        const itemPositions = (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a._itemPositions;
        return (itemPositions !== undefined &&
            itemPositions.length &&
            !(itemPositions === null || itemPositions === void 0 ? void 0 : itemPositions.some((item) => item === undefined || Number.isNaN(item))));
    }
    refreshList() {
        if (this.hyperlist) {
            this.hyperlist.refresh(this.hostElement, this.getVirtualizerOptions());
        }
    }
    initList() {
        var _a;
        if (!this.model) {
            return;
        }
        (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a.destroy();
        const config = this.getVirtualizerOptions();
        this.hyperlist = new Hyperlist(this.hostElement, config);
    }
    render() {
        return (h(Host, { key: '9337ac3642e090f58688500e66686c0f9764da0c' }, h("slot", { key: '10d5c6adb776298b2ec9da74b654749790f102dd' })));
    }
    static get is() { return "ix-tree"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tree.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tree.css"]
        };
    }
    static get properties() {
        return {
            "root": {
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
                    "text": "Initial root element will not be rendered"
                },
                "attribute": "root",
                "reflect": false
            },
            "model": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TreeModel<any>",
                    "resolved": "{ [x: string]: TreeItem<any>; }",
                    "references": {
                        "TreeModel": {
                            "location": "import",
                            "path": "./tree-model",
                            "id": "src/components/tree/tree-model.ts::TreeModel"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tree model"
                }
            },
            "renderItem": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "<T = any>(\n    index: number,\n    data: T,\n    dataList: Array<T>,\n    context: TreeContext,\n    update: (callback: UpdateCallback) => void\n  ) => HTMLElement",
                    "resolved": "<T = any>(index: number, data: T, dataList: T[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement",
                    "references": {
                        "T": {
                            "location": "global",
                            "id": "global::T"
                        },
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "TreeContext": {
                            "location": "import",
                            "path": "./tree-model",
                            "id": "src/components/tree/tree-model.ts::TreeContext"
                        },
                        "UpdateCallback": {
                            "location": "import",
                            "path": "./tree-model",
                            "id": "src/components/tree/tree-model.ts::UpdateCallback"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Render function of tree items"
                }
            },
            "context": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "TreeContext",
                    "resolved": "{ [x: string]: TreeItemContext; }",
                    "references": {
                        "TreeContext": {
                            "location": "import",
                            "path": "./tree-model",
                            "id": "src/components/tree/tree-model.ts::TreeContext"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selection and collapsed state management"
                },
                "defaultValue": "{}"
            }
        };
    }
    static get events() {
        return [{
                "method": "contextChange",
                "name": "contextChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Context changed"
                },
                "complexType": {
                    "original": "TreeContext",
                    "resolved": "{ [x: string]: TreeItemContext; }",
                    "references": {
                        "TreeContext": {
                            "location": "import",
                            "path": "./tree-model",
                            "id": "src/components/tree/tree-model.ts::TreeContext"
                        }
                    }
                }
            }, {
                "method": "nodeToggled",
                "name": "nodeToggled",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.5.0"
                        }],
                    "text": "Node toggled event"
                },
                "complexType": {
                    "original": "{ id: string; isExpaned: boolean }",
                    "resolved": "{ id: string; isExpaned: boolean; }",
                    "references": {}
                }
            }, {
                "method": "nodeClicked",
                "name": "nodeClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.5.0"
                        }],
                    "text": "Node clicked event"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "nodeRemoved",
                "name": "nodeRemoved",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits removed nodes"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "model",
                "methodName": "modelChange"
            }];
    }
}
//# sourceMappingURL=tree.js.map
