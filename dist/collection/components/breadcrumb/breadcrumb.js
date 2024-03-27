/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { forceUpdate, h, Host, } from "@stencil/core";
import { a11yBoolean, a11yHostAttributes } from "../utils/a11y";
import { createMutationObserver } from "../utils/mutation-observer";
let sequenceId = 0;
const createId = (prefix = 'breadcrumb-') => {
    return `${prefix}-${sequenceId++}`;
};
export class Breadcrumb {
    constructor() {
        this.previousButtonId = createId();
        this.previousDropdownId = createId();
        this.visibleItemCount = 9;
        this.nextItems = [];
        this.ghost = true;
        this.ariaLabelPreviousButton = 'previous';
        this.previousButtonRef = undefined;
        this.nextButtonRef = undefined;
        this.items = [];
        this.isPreviousDropdownExpanded = false;
    }
    onNextItemsChange() {
        this.onChildMutation();
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
    componentDidLoad() {
        this.mutationObserver = createMutationObserver(() => this.onChildMutation());
        this.mutationObserver.observe(this.hostElement, {
            subtree: true,
            childList: true,
        });
    }
    componentWillLoad() {
        this.onChildMutation();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    async onChildMutation() {
        const updatedItems = this.getItems();
        updatedItems.forEach((bc, index) => {
            const shouldShowDropdown = this.nextItems.length !== 0 && updatedItems.length - 1 === index;
            bc.ghost = this.ghost;
            bc.showChevron = updatedItems.length - 1 !== index || shouldShowDropdown;
            bc.isDropdownTrigger = shouldShowDropdown;
            if (shouldShowDropdown) {
                this.nextButtonRef = bc;
            }
            if (updatedItems.length < this.visibleItemCount) {
                return;
            }
            bc.visible = index >= updatedItems.length - this.visibleItemCount;
        });
        this.items = updatedItems;
    }
    getItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-breadcrumb-item'));
    }
    render() {
        var _a, _b, _c, _d;
        const a11y = a11yHostAttributes(this.hostElement);
        return (h(Host, { key: 'd4a7d70b996b0e613a05a53896aedcaf786cb05b' }, h("ix-dropdown", { key: '545dd5b645297725ef8b58c2619ebff9cdc0b0c1', id: this.previousDropdownId, "aria-label": this.ariaLabelPreviousButton, trigger: ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length) > this.visibleItemCount
                ? this.previousButtonRef
                : null, onShowChanged: ({ detail }) => {
                this.isPreviousDropdownExpanded = detail;
                const previousButton = this.hostElement.shadowRoot.getElementById(this.previousButtonId);
                // Need to force update previous button to change `aria-expanded`
                if (previousButton) {
                    forceUpdate(this.hostElement.shadowRoot.getElementById(this.previousButtonId));
                }
            } }, this.items
            .slice(0, this.items.length - this.visibleItemCount)
            .map((item) => {
            var _a;
            const label = (_a = item.label) !== null && _a !== void 0 ? _a : item.innerText;
            return (h("ix-dropdown-item", { label: label, onClick: () => {
                    this.onItemClick(label);
                }, onItemClick: (event) => event.stopPropagation() }));
        })), ((_b = this.items) === null || _b === void 0 ? void 0 : _b.length) > this.visibleItemCount ? (h("ix-breadcrumb-item", { id: this.previousButtonId, ref: (ref) => (this.previousButtonRef = ref), label: "...", tabIndex: 1, onItemClick: (event) => event.stopPropagation(), "aria-describedby": this.previousDropdownId, "aria-controls": this.previousDropdownId, "aria-expanded": a11yBoolean(this.isPreviousDropdownExpanded), class: 'previous-button' })) : null, h("nav", { key: 'e3e3162f385bd64ddde0671c3bb6fe084ca32714', class: "crumb-items", "aria-label": (_c = a11y['aria-label']) !== null && _c !== void 0 ? _c : 'breadcrumbs' }, h("ol", { key: 'ba7a37c3a9124efa24ea6ac3ddfe5a146d6cc5a1' }, h("slot", { key: 'b4b30cf5e41c4583ea6fbbdb372f79d167f859c9' }))), h("ix-dropdown", { key: 'aa20745609c9110ebed70439c26bf214f3386710', trigger: this.nextButtonRef }, (_d = this.nextItems) === null || _d === void 0 ? void 0 : _d.map((item) => (h("ix-dropdown-item", { label: item, onClick: (e) => {
                this.nextClick.emit({
                    event: e,
                    item,
                });
            }, onItemClick: (event) => event.stopPropagation() }))))));
    }
    static get is() { return "ix-breadcrumb"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["breadcrumb.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["breadcrumb.css"]
        };
    }
    static get properties() {
        return {
            "visibleItemCount": {
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
                    "text": "Excess items will get hidden inside of dropdown"
                },
                "attribute": "visible-item-count",
                "reflect": false,
                "defaultValue": "9"
            },
            "nextItems": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Items will be accessible through a dropdown"
                },
                "defaultValue": "[]"
            },
            "ghost": {
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
                    "text": "Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)"
                },
                "attribute": "ghost",
                "reflect": false,
                "defaultValue": "true"
            },
            "ariaLabelPreviousButton": {
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
                            "text": "2.0.0"
                        }],
                    "text": "Accessibility label for the dropdown button (ellipsis icon) used to access the dropdown list\nwith conditionally hidden previous items"
                },
                "attribute": "aria-label-previous-button",
                "reflect": false,
                "defaultValue": "'previous'"
            }
        };
    }
    static get states() {
        return {
            "previousButtonRef": {},
            "nextButtonRef": {},
            "items": {},
            "isPreviousDropdownExpanded": {}
        };
    }
    static get events() {
        return [{
                "method": "itemClick",
                "name": "itemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Crumb item clicked event"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "nextClick",
                "name": "nextClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Next item clicked event"
                },
                "complexType": {
                    "original": "{ event: UIEvent; item: string }",
                    "resolved": "{ event: UIEvent; item: string; }",
                    "references": {
                        "UIEvent": {
                            "location": "global",
                            "id": "global::UIEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "nextItems",
                "methodName": "onNextItemsChange"
            }];
    }
}
//# sourceMappingURL=breadcrumb.js.map
