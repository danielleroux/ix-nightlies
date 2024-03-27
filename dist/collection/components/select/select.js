/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Host, } from "@stencil/core";
import { OnListener } from "../utils/listener";
export class Select {
    constructor() {
        this.selectedIndices = undefined;
        this.value = undefined;
        this.allowClear = false;
        this.mode = 'single';
        this.editable = false;
        this.disabled = false;
        this.readonly = false;
        this.i18nPlaceholder = 'Select an option';
        this.i18nPlaceholderEditable = 'Type of select option';
        this.i18nSelectListHeader = 'Please select an option';
        this.i18nNoMatches = 'No matches';
        this.hideListHeader = false;
        this.dropdownShow = false;
        this.selectedLabels = undefined;
        this.dropdownWrapperRef = undefined;
        this.dropdownAnchor = undefined;
        this.isDropdownEmpty = false;
        this.hasFocus = false;
        this.navigationItem = undefined;
        this.inputFilterText = undefined;
        this.inputValue = undefined;
    }
    get items() {
        return [
            ...Array.from(this.hostElement.querySelectorAll('ix-select-item')),
            ...Array.from(this.hostElement.shadowRoot.querySelectorAll('ix-select-item')),
        ];
    }
    get selectedItems() {
        return this.items.filter((item) => item.selected);
    }
    get addItemButton() {
        return this.hostElement.shadowRoot.querySelector('.add-item');
    }
    get isSingleMode() {
        return this.mode === 'single';
    }
    get isMultipleMode() {
        return this.mode === 'multiple';
    }
    get isEveryDropdownItemHidden() {
        return this.items.every((item) => item.classList.contains('d-none'));
    }
    watchSelectedIndices(value) {
        this.value = value;
        this.updateSelection();
    }
    watchValue(value) {
        this.selectedIndices = value;
        this.updateSelection();
    }
    onItemClicked(event) {
        const newId = event.detail;
        this.itemClick(newId);
    }
    itemClick(newId) {
        this.value = this.toggleValue(newId);
        this.updateSelection();
        this.emitValueChange();
    }
    emitAddItem(value) {
        if (value.trim() === '') {
            return;
        }
        const newItem = document.createElement('ix-select-item');
        newItem.value = value;
        newItem.label = value;
        this.addItemRef.appendChild(newItem);
        this.clearInput();
        this.itemClick(value);
        this.addItem.emit(value);
    }
    toggleValue(itemValue) {
        if (!this.isMultipleMode) {
            return itemValue;
        }
        if (!this.value) {
            return [itemValue];
        }
        let value = this.value;
        if (!Array.isArray(value)) {
            value = [value];
        }
        if (value.includes(itemValue)) {
            return value.filter((value) => value !== itemValue);
        }
        else {
            return [...value, itemValue];
        }
    }
    updateSelection() {
        var _a;
        let ids = [];
        if (this.value) {
            ids = Array.isArray(this.value) ? [...this.value] : [this.value];
        }
        this.items.forEach((item) => {
            item.selected = ids.some(
            // Check can be removed if value is type of string in future releases
            (i) => i === (item.value ? item.value.toString() : ''));
        });
        this.selectedLabels = this.selectedItems.map((item) => item.label);
        if (this.isSingleMode) {
            this.inputValue = ((_a = this.selectedLabels) === null || _a === void 0 ? void 0 : _a.length)
                ? this.selectedLabels[0]
                : null;
            return;
        }
        this.inputValue = null;
    }
    emitValueChange() {
        this.valueChange.emit(this.value);
        if (!this.value) {
            this.itemSelectionChange.emit(null);
        }
        else {
            this.itemSelectionChange.emit(Array.isArray(this.value) ? this.value : [this.value]);
        }
    }
    componentDidLoad() {
        this.inputRef.addEventListener('input', () => {
            this.dropdownShow = true;
            this.inputChange.emit(this.inputRef.value);
        });
    }
    componentWillLoad() {
        if (this.selectedIndices && !this.value) {
            this.value = this.selectedIndices;
        }
        this.updateSelection();
    }
    onLabelChange(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.updateSelection();
    }
    disconnectedCallback() {
        if (this.labelMutationObserver) {
            this.labelMutationObserver.disconnect();
        }
    }
    itemExists(item) {
        return this.items.find((i) => i.label === item);
    }
    dropdownVisibilityChanged(event) {
        this.dropdownShow = event.detail;
        this.hasFocus = event.detail;
        if (event.detail) {
            this.inputRef.focus();
            this.inputRef.select();
            this.removeHiddenFromItems();
            this.isDropdownEmpty = this.isEveryDropdownItemHidden;
        }
        else {
            this.navigationItem = undefined;
        }
    }
    async onKeyDown(event) {
        if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
            this.onArrowNavigation(event, event.code);
        }
        if (!this.dropdownShow) {
            return;
        }
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            await this.onEnterNavigation();
        }
        if (event.code === 'Escape') {
            this.dropdownShow = false;
        }
    }
    async onEnterNavigation() {
        var _a, _b;
        if (this.isMultipleMode) {
            return;
        }
        if (this.editable && !this.itemExists(this.inputFilterText)) {
            this.emitAddItem(this.inputFilterText);
            this.navigationItem = this.items[this.items.length - 1];
        }
        (_a = this.navigationItem) === null || _a === void 0 ? void 0 : _a.onItemClick();
        await ((_b = this.dropdownRef) === null || _b === void 0 ? void 0 : _b.updatePosition());
        if (this.isSingleMode && !this.editable) {
            this.dropdownShow = false;
        }
    }
    onArrowNavigation(event, key) {
        event.preventDefault();
        event.stopPropagation();
        this.dropdownShow = true;
        const items = this.items.filter((i) => !i.classList.contains('d-none'));
        if (this.navigationItem === undefined) {
            this.applyFocusTo(items[0]);
            return;
        }
        let indexOfNavigationItem = items.findIndex((item) => item === this.navigationItem);
        if (key === 'ArrowDown') {
            indexOfNavigationItem++;
        }
        else {
            indexOfNavigationItem--;
        }
        const newFocusItem = items[indexOfNavigationItem];
        this.applyFocusTo(newFocusItem);
    }
    applyFocusTo(element) {
        if (!element) {
            return;
        }
        this.navigationItem = element;
        setTimeout(() => {
            element.shadowRoot
                .querySelector('ix-dropdown-item')
                .shadowRoot.querySelector('button')
                .focus();
        });
    }
    filterItemsWithTypeahead() {
        this.inputFilterText = this.inputRef.value;
        if (this.isSingleMode && this.inputFilterText === this.selectedLabels[0]) {
            return;
        }
        if (this.inputFilterText) {
            this.items.forEach((item) => {
                item.classList.remove('d-none');
                if (!item.label.toLowerCase().includes(this.inputFilterText.toLowerCase())) {
                    item.classList.add('d-none');
                }
            });
        }
        else {
            this.removeHiddenFromItems();
        }
        this.isDropdownEmpty = this.isEveryDropdownItemHidden;
    }
    removeHiddenFromItems() {
        this.items.forEach((item) => {
            item.classList.remove('d-none');
        });
    }
    clearInput() {
        this.inputRef.value = '';
        this.inputFilterText = '';
    }
    clear() {
        this.clearInput();
        this.selectedLabels = [];
        this.value = [];
        this.valueChange.emit(null);
        this.dropdownShow = false;
    }
    onInputBlur(e) {
        if (this.editable) {
            return;
        }
        if (this.isSingleMode) {
            return;
        }
        if (!this.dropdownShow && this.mode !== 'multiple') {
            e.target['value'] = this.selectedLabels;
        }
    }
    placeholderValue() {
        if (this.editable) {
            return this.i18nPlaceholderEditable;
        }
        if (this.readonly) {
            return '';
        }
        return this.i18nPlaceholder;
    }
    isAddItemVisible() {
        return (!this.itemExists(this.inputFilterText) &&
            this.editable &&
            this.inputFilterText);
    }
    render() {
        var _a, _b, _c;
        return (h(Host, { key: '0fc926abc501ee03ef30437a7f727f81e9bec80d' }, h("div", { key: '20959745335d4d0a9ed101c25de2c225981ecc50', class: {
                select: true,
                disabled: this.disabled,
                readonly: this.readonly,
            }, ref: (ref) => {
                this.dropdownAnchor = ref;
                if (!this.editable)
                    this.dropdownWrapperRef = ref;
            } }, h("div", { key: '4177f3645edb69e527101f21d1af47407d3e1f8e', class: "input-container" }, h("div", { key: '834d0f8dce560d09a05667014123886ae7b67732', class: "chips" }, this.isMultipleMode
            ? (_a = this.selectedItems) === null || _a === void 0 ? void 0 : _a.map((item) => (h("ix-filter-chip", { disabled: this.disabled || this.readonly, key: item.value, onCloseClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.itemClick(item.value);
                } }, item.label)))
            : '', h("div", { key: 'f34ec19796e97f25e94a3c9835dc5208c8389392', class: "trigger" }, h("input", { key: 'db62b1328a0879b3faaf76c4bc04fbbb8ffad540', autocomplete: "off", "data-testid": "input", disabled: this.disabled, readOnly: this.readonly, type: "text", class: {
                'allow-clear': this.allowClear && !!((_b = this.selectedLabels) === null || _b === void 0 ? void 0 : _b.length),
            }, placeholder: this.placeholderValue(), value: this.inputValue, ref: (ref) => (this.inputRef = ref), onBlur: (e) => this.onInputBlur(e), onFocus: () => {
                this.navigationItem = undefined;
            }, onInput: () => this.filterItemsWithTypeahead(), onKeyDown: (e) => this.onKeyDown(e) }), this.allowClear &&
            (((_c = this.selectedLabels) === null || _c === void 0 ? void 0 : _c.length) || this.inputFilterText) ? (h("ix-icon-button", { class: "clear", icon: 'clear', ghost: true, oval: true, size: "16", onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.clear();
            } })) : null, this.disabled || this.readonly ? null : (h("ix-icon-button", { "data-select-dropdown": true, class: { 'dropdown-visible': this.dropdownShow }, icon: "chevron-down-small", ghost: true, ref: (ref) => {
                if (this.editable)
                    this.dropdownWrapperRef = ref;
            } })))))), h("ix-dropdown", { key: '92fa7a1b1ac9768262fad9e22bb99e282607ca13', ref: (ref) => (this.dropdownRef = ref), show: this.dropdownShow, closeBehavior: this.isMultipleMode ? 'outside' : 'both', class: {
                'd-none': this.disabled || this.readonly,
            }, anchor: this.dropdownAnchor, trigger: this.dropdownWrapperRef, onShowChanged: (e) => this.dropdownVisibilityChanged(e), placement: "bottom-start", overwriteDropdownStyle: async () => {
                return {
                    minWidth: `${this.hostElement.clientWidth}px`,
                };
            } }, h("div", { key: '285e1dc8dbf439e6ad7d070c28e8ee544c6adb33', class: {
                'select-list-header': true,
                hidden: this.hideListHeader || this.isDropdownEmpty,
            }, title: this.i18nSelectListHeader }, this.i18nSelectListHeader), h("slot", { key: 'f2fdde64538440e79c8e2ee90579e2f5603e3753' }), h("div", { key: 'bcd9e61223e0c764f087cc6c72ce342d671baa4c', ref: (ref) => (this.addItemRef = ref), class: "d-contents" }), this.isAddItemVisible() ? (h("ix-dropdown-item", { "data-testid": "add-item", icon: 'plus', class: {
                'add-item': true,
            }, label: this.inputFilterText, onItemClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.emitAddItem(this.inputFilterText);
            } })) : null, this.isDropdownEmpty && !this.editable ? (h("div", { class: "select-list-header" }, this.i18nNoMatches)) : (''))));
    }
    static get is() { return "ix-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["select.css"]
        };
    }
    static get properties() {
        return {
            "selectedIndices": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "since 2.0.0. Use the `value` property instead."
                        }],
                    "text": "Indices of selected items.\nThis corresponds to the value property of ix-select-items and therefor not necessarily the indices of the items in the list."
                },
                "attribute": "selected-indices",
                "reflect": false
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "Current selected value.\nThis corresponds to the value property of ix-select-items"
                },
                "attribute": "value",
                "reflect": false
            },
            "allowClear": {
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
                    "text": "Show clear button"
                },
                "attribute": "allow-clear",
                "reflect": false,
                "defaultValue": "false"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'single' | 'multiple'",
                    "resolved": "\"multiple\" | \"single\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selection mode"
                },
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'single'"
            },
            "editable": {
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
                    "text": "Select is extendable"
                },
                "attribute": "editable",
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "If true the select will be in disabled state"
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "readonly": {
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
                    "text": "If true the select will be in readonly mode"
                },
                "attribute": "readonly",
                "reflect": false,
                "defaultValue": "false"
            },
            "i18nPlaceholder": {
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
                    "text": "Input field placeholder"
                },
                "attribute": "i-1-8n-placeholder",
                "reflect": false,
                "defaultValue": "'Select an option'"
            },
            "i18nPlaceholderEditable": {
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
                    "text": "Input field placeholder for editable select"
                },
                "attribute": "i-1-8n-placeholder-editable",
                "reflect": false,
                "defaultValue": "'Type of select option'"
            },
            "i18nSelectListHeader": {
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
                    "text": "Select list header"
                },
                "attribute": "i-1-8n-select-list-header",
                "reflect": false,
                "defaultValue": "'Please select an option'"
            },
            "i18nNoMatches": {
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
                            "text": "1.5.0"
                        }],
                    "text": "Hint inside of dropdown if no items where found with current filter text"
                },
                "attribute": "i-1-8n-no-matches",
                "reflect": false,
                "defaultValue": "'No matches'"
            },
            "hideListHeader": {
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
                    "tags": [{
                            "name": "since",
                            "text": "1.5.0"
                        }],
                    "text": "Hide list header"
                },
                "attribute": "hide-list-header",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "dropdownShow": {},
            "selectedLabels": {},
            "dropdownWrapperRef": {},
            "dropdownAnchor": {},
            "isDropdownEmpty": {},
            "hasFocus": {},
            "navigationItem": {},
            "inputFilterText": {},
            "inputValue": {}
        };
    }
    static get events() {
        return [{
                "method": "valueChange",
                "name": "valueChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "Value changed"
                },
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                }
            }, {
                "method": "itemSelectionChange",
                "name": "itemSelectionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "since 2.0.0. Use `valueChange` instead."
                        }],
                    "text": "Item selection changed"
                },
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                }
            }, {
                "method": "inputChange",
                "name": "inputChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "Event dispatched whenever the text input changes."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "addItem",
                "name": "addItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Item added to selection"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "selectedIndices",
                "methodName": "watchSelectedIndices"
            }, {
                "propName": "value",
                "methodName": "watchValue"
            }];
    }
    static get listeners() {
        return [{
                "name": "itemClick",
                "method": "onItemClicked",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "ix-select-item:labelChange",
                "method": "onLabelChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnListener('keydown', (self) => self.dropdownShow)
], Select.prototype, "onKeyDown", null);
//# sourceMappingURL=select.js.map
