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
        return (h(Host, { key: '19b497d7ad3c1aa2d71d812dbfd1089c1b50b2e3' }, h("div", { key: '03e0872848ed47560ce24a00a4825f2cb68f2664', class: {
                'group-header': true,
                expand: !this.collapsed,
                selected: this.selected,
            }, tabindex: "0" }, h("div", { key: '41e2c2452cc5eacbfdd6618d5b8355f41cc8327f', class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: '8674eb2d919f66bffff898c3a454e7ef3ef3754f', class: {
                'group-header-selection-indicator': true,
                'group-header-selection-indicator-item-selected': this.itemSelected,
            } }), h("div", { key: '19cac9b33c1cb86ae1c12850a812e0543ac1b0c1', class: "btn-expand-header" }, h("ix-icon", { key: 'eafb3888f8f934c832c2d7747eeae80646805b87', class: {
                hidden: this.slotSize === 0,
            }, name: this.collapsed ? 'chevron-right-small' : 'chevron-down-small', onClick: (e) => this.onExpandClick(e) })), h("div", { key: 'b319b2d6278a1d5e4954e9ffc96c67fd15b6a5f3', class: "group-header-content" }, this.header ? (h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader))) : null, h("slot", { key: 'a08d5753ca3d1a04769c79d8dfb9c40689f3f158', name: "header" }))), h("ix-group-context-menu", { key: '0c6452e80a02b4e1dfb1cb64195b498b399941e4' }, h("slot", { key: '4e83e0aec7a0a07316bce599fb67137f37227323', name: "dropdown" }))), h("div", { key: 'b72a5a7808c759ec319baa90e3961df273569e09', class: {
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
