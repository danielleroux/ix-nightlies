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
        return (h(Host, { key: '50658e58108e551e704d40f5658e8bf405908841' }, h("div", { key: '7c6dd6d17182f417b7b8845a1caebfc42b2a4ae3', class: {
                'group-header': true,
                expand: !this.collapsed,
                selected: this.selected,
            }, tabindex: "0" }, h("div", { key: '82064c34500593f4dddc2f5766466e48239b6558', class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: '551ad7dcd5b93652012ca16f8e6df6a029e9de3e', class: {
                'group-header-selection-indicator': true,
                'group-header-selection-indicator-item-selected': this.itemSelected,
            } }), h("div", { key: '551174d9914334ad390798ae0483237dedebcd73', class: "btn-expand-header" }, h("ix-icon", { key: '0b86cb98fcb9022a77f855ba34166012a2693a4a', class: {
                hidden: this.slotSize === 0,
            }, name: this.collapsed ? 'chevron-right-small' : 'chevron-down-small', onClick: (e) => this.onExpandClick(e) })), h("div", { key: '39717ec88f2e53e9a9f4f48e2e7245637ec00653', class: "group-header-content" }, this.header ? (h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader))) : null, h("slot", { key: '2b33b0c9c50099f7d904ed1bf8787acd888ad24d', name: "header" }))), h("ix-group-context-menu", { key: 'cd1268faa06b30f4292cbf988c041da0f0738e8d' }, h("slot", { key: '6152c5bb0e8831ccba53067d4aac1350027e208b', name: "dropdown" }))), h("div", { key: '7682ad50798d4839c71e79d88761cda57cf06801', class: {
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
