/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Fragment, h, Host, } from "@stencil/core";
import { createMutationObserver } from "../utils/mutation-observer";
import { hasSlottedElements } from "../utils/shadow-dom";
export class Group {
    constructor() {
        this.suppressHeaderSelection = false;
        this.header = undefined;
        this.subHeader = undefined;
        this.collapsed = true;
        this.selected = undefined;
        this.index = undefined;
        this.expandOnHeaderClick = false;
        this.itemSelected = false;
        this.dropdownTriggerRef = undefined;
        this.slotSize = this.groupItems.length;
        this.footerVisible = false;
    }
    get dropdownItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-group-dropdown-item'));
    }
    get groupItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-group-item:not(.footer)'));
    }
    get groupContent() {
        return this.hostElement.shadowRoot.querySelector('.group-content');
    }
    onExpandClick(event) {
        this.collapsed = !this.collapsed;
        this.collapsedChanged.emit(this.collapsed);
        event.stopPropagation();
    }
    onHeaderClick(event) {
        this.setGroupSelection(!this.selected);
        if (this.suppressHeaderSelection) {
            this.onExpandClick(event);
        }
    }
    onItemClick(index) {
        if (index === this.index) {
            this.index = undefined;
            this.selectItem.emit(undefined);
        }
        else {
            this.index = index;
            this.selectItem.emit(index);
        }
        if (this.index >= 0) {
            this.itemSelected = true;
        }
        else
            this.itemSelected = false;
        this.setGroupSelection(false);
    }
    setGroupSelection(selection) {
        if (!this.suppressHeaderSelection) {
            this.selected = selection;
            this.selectGroup.emit(this.selected);
        }
    }
    onSlotChange() {
        const slot = this.hostElement.shadowRoot.querySelector('slot[name="footer"]');
        if (slot) {
            this.footerVisible = hasSlottedElements(slot);
        }
    }
    componentWillRender() {
        this.groupItems.forEach((item, index) => {
            if (this.selected === true) {
                item.selected = false;
                this.index = undefined;
                this.itemSelected = false;
                return;
            }
            item.selected = index === this.index;
            item.index = index;
        });
    }
    componentDidLoad() {
        this.observer = createMutationObserver(() => {
            this.slotSize = this.groupItems.length;
        });
        this.observer.observe(this.groupContent, {
            childList: true,
        });
        this.groupContent.addEventListener('selectedChanged', (evt) => {
            this.onItemClick(evt.detail.index);
        });
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    render() {
        return (h(Host, { key: 'bda6803545577fefae47c47adbec8a9386096713' }, h("div", { key: '767084cb393dfd58a2f4af2a66167c4a8b29c942', class: {
                'group-header': true,
                expand: !this.collapsed,
                selected: this.selected,
            }, tabindex: "0" }, h("div", { key: 'a4ab69fe6407477a4b47ec615e592bd8725a4a7c', class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: '230227a102bd5397b4b54f65a517ad03e8affb71', class: {
                'group-header-selection-indicator': true,
                'group-header-selection-indicator-item-selected': this.itemSelected,
            } }), h("div", { key: '795295a972e0df5e77ad71f91d1b6d9c6290335c', class: "btn-expand-header" }, h("ix-icon", { key: 'f1e0de9ab7ad78eaa769545964d28e3dd48f3d5d', class: {
                hidden: this.slotSize === 0,
            }, name: this.collapsed ? 'chevron-right-small' : 'chevron-down-small', onClick: (e) => this.onExpandClick(e) })), h("div", { key: 'e067c4232cfd54b8071f4e713d25b59f7b4b8571', class: "group-header-content" }, this.header ? (h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader))) : null, h("slot", { key: 'f4d0abe144cc870db4393aa5c06bc455a8213e26', name: "header" }))), h("ix-group-context-menu", { key: 'c53d7dc2d6f8edb497f8d03484fee968c7e92539' }, h("slot", { key: '3b145e25ce63ae7396b1d4ecff254345b664ddca', name: "dropdown" }))), h("div", { key: 'b3e1900cf5a41383899f7ff97583898070be7ed7', class: {
                'group-content': true,
            } }, !this.collapsed ? (h(Fragment, null, h("slot", null), h("ix-group-item", { suppressSelection: true, focusable: false, class: {
                footer: true,
                'footer-visible': this.footerVisible,
            } }, h("slot", { name: "footer", onSlotchange: () => this.onSlotChange() })))) : null)));
    }
    static get is() { return "ix-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["group.css"]
        };
    }
    static get properties() {
        return {
            "suppressHeaderSelection": {
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
                    "text": "Prevent header from being selectable"
                },
                "attribute": "suppress-header-selection",
                "reflect": false,
                "defaultValue": "false"
            },
            "header": {
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
                    "text": "Group header"
                },
                "attribute": "header",
                "reflect": false
            },
            "subHeader": {
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
                    "text": "Group header subtitle"
                },
                "attribute": "sub-header",
                "reflect": false
            },
            "collapsed": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the group is collapsed or expanded. Defaults to true."
                },
                "attribute": "collapsed",
                "reflect": true,
                "defaultValue": "true"
            },
            "selected": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the group is selected."
                },
                "attribute": "selected",
                "reflect": true
            },
            "index": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The index of the selected group entry.\nIf undefined no group item is selected."
                },
                "attribute": "index",
                "reflect": true
            },
            "expandOnHeaderClick": {
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
                    "text": "Expand the group if the header is clicked"
                },
                "attribute": "expand-on-header-click",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "itemSelected": {},
            "dropdownTriggerRef": {},
            "slotSize": {},
            "footerVisible": {}
        };
    }
    static get events() {
        return [{
                "method": "selectGroup",
                "name": "selectGroup",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when whole group gets selected."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "selectItem",
                "name": "selectItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when group item gets selected."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "collapsedChanged",
                "name": "collapsedChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Group collapsed"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=group.js.map
