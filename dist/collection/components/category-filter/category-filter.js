/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import { BaseButton } from "../button/base-button";
import { InputState } from "./input-state";
import { LogicalFilterOperator } from "./logical-filter-operator";
export class CategoryFilter {
    constructor() {
        this.ID_CUSTOM_FILTER_VALUE = 'CW_CUSTOM_FILTER_VALUE';
        this.showDropdown = undefined;
        this.textInput = undefined;
        this.hasFocus = undefined;
        this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
        this.inputValue = undefined;
        this.category = undefined;
        this.filterTokens = [];
        this.disabled = false;
        this.readonly = false;
        this.filterState = undefined;
        this.placeholder = undefined;
        this.categories = undefined;
        this.nonSelectableCategories = {};
        this.suggestions = undefined;
        this.icon = 'search';
        this.hideIcon = undefined;
        this.repeatCategories = true;
        this.tmpDisableScrollIntoView = true;
        this.labelCategories = 'Categories';
        this.i18nPlainText = 'Filter by text';
    }
    watchFilterState(newValue) {
        this.setFilterState(newValue);
    }
    componentDidLoad() {
        var _a, _b;
        if (this.filterState !== undefined) {
            setTimeout(() => this.setFilterState(this.filterState));
        }
        (_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', this.handleFormElementKeyDown.bind(this));
        (_b = this.formElement) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', (e) => e.preventDefault());
        if (this.textInput == null) {
            console.warn('ix-category-filter - unable to add event listeners to native input element');
            return;
        }
        this.textInput.addEventListener('focusin', () => {
            this.hasFocus = true;
        });
        this.textInput.addEventListener('focusout', () => (this.hasFocus = false));
        this.textInput.addEventListener('input', () => {
            this.inputValue = this.textInput.value;
            const inputState = new InputState(this.inputValue, this.category);
            this.inputChanged.emit(inputState);
        });
        this.textInput.addEventListener('keydown', this.handleInputElementKeyDown.bind(this));
    }
    setFilterState(state) {
        this.filterTokens = [];
        for (const token of state.tokens) {
            this.addToken(token, this.ID_CUSTOM_FILTER_VALUE, this.categoryLogicalOperator, false);
        }
        for (const category of state.categories) {
            this.addToken(category.value, category.id, category.operator, false);
        }
        this.emitFilterEvent();
    }
    closeDropdown() {
        if (this.disabled || this.readonly) {
            return;
        }
        this.hostElement.shadowRoot.querySelector('ix-dropdown').show = false;
    }
    handleFormElementKeyDown(e) {
        switch (e.code) {
            case 'Enter':
            case 'NumpadEnter':
                if (!document.activeElement.classList.contains('dropdown-item')) {
                    return;
                }
                const token = document.activeElement.getAttribute('data-id');
                if (this.hasCategorySelection()) {
                    if (this.category !== undefined) {
                        this.addToken(token, this.category);
                    }
                    else if (document.activeElement.classList.contains('category-item-id')) {
                        this.selectCategory(token);
                    }
                }
                else {
                    this.addToken(token);
                }
                e.preventDefault();
                break;
            case 'ArrowUp':
                this.focusPreviousItem();
                e.preventDefault();
                break;
            case 'ArrowDown':
                this.showDropdown = true;
                this.focusNextItem();
                e.preventDefault();
                break;
            case 'Escape':
                this.closeDropdown();
                break;
        }
    }
    focusPreviousItem() {
        const sibling = document.activeElement.previousSibling;
        if (sibling instanceof HTMLElement) {
            sibling.focus();
        }
    }
    focusNextItem() {
        const sibling = document.activeElement.nextSibling;
        if (sibling instanceof HTMLElement) {
            sibling.focus();
        }
    }
    handleInputElementKeyDown(e) {
        var _a;
        switch (e.code) {
            case 'ArrowDown':
                const selector = `.category-item-${this.category !== undefined ? 'value' : 'id'}`;
                let item = this.hostElement.shadowRoot.querySelector(selector);
                if (item instanceof HTMLElement) {
                    item.focus();
                    e.stopPropagation();
                }
                else if ((_a = this.suggestions) === null || _a === void 0 ? void 0 : _a.length) {
                    item = this.hostElement.shadowRoot.querySelector('.category-item');
                    if (item instanceof HTMLElement) {
                        item.focus();
                        e.stopPropagation();
                    }
                }
                break;
            case 'Backspace':
                if (this.textInput.value !== '') {
                    return;
                }
                if (this.category !== undefined) {
                    this.category = undefined;
                    return;
                }
                const tokenCount = this.filterTokens.length;
                if (tokenCount > 0) {
                    this.removeToken(tokenCount - 1);
                }
                break;
            case 'Enter':
            case 'NumpadEnter':
                this.addToken(this.inputValue, this.category);
                e.preventDefault();
                break;
        }
    }
    emitFilterEvent() {
        const tokens = this.filterTokens
            .filter((item) => item.id === this.ID_CUSTOM_FILTER_VALUE)
            .map((item) => item.value);
        const categories = this.filterTokens.filter((item) => item.id !== this.ID_CUSTOM_FILTER_VALUE);
        const filterState = {
            tokens,
            categories,
        };
        this.filterChanged.emit(filterState);
    }
    addToken(token, category = this.ID_CUSTOM_FILTER_VALUE, operator = this.categoryLogicalOperator, emitEvent = true) {
        if (token === undefined || token === null) {
            return;
        }
        const newToken = token.trim();
        if (newToken === '') {
            return;
        }
        if (this.hasToken(newToken)) {
            return;
        }
        const pair = { id: category, value: newToken, operator };
        this.filterTokens = [...this.filterTokens, pair];
        this.textInput.value = '';
        this.inputValue = '';
        this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
        if (this.category !== undefined) {
            this.category = undefined;
        }
        this.isScrollStateDirty = true;
        this.textInput.focus();
        if (emitEvent) {
            this.emitFilterEvent();
        }
        this.closeDropdown();
    }
    removeToken(index) {
        this.filterTokens = this.filterTokens.filter((_, i) => i !== index);
        this.emitFilterEvent();
    }
    getCategoryIds() {
        const ids = [];
        for (const id in this.categories) {
            if (Object.prototype.hasOwnProperty.call(this.categories, id)) {
                ids.push(id);
            }
        }
        return ids;
    }
    selectCategory(category) {
        this.category = category;
        this.textInput.value = '';
        this.inputValue = '';
        this.textInput.focus();
        this.categoryChanged.emit(category);
    }
    resetFilter(e) {
        e.stopPropagation();
        this.closeDropdown();
        this.filterTokens = [];
        this.emitFilterEvent();
    }
    filterMultiples(value) {
        if (this.repeatCategories) {
            return true;
        }
        const isCategoryAlreadySet = this.filterTokens.find((token) => token.id === value);
        return !isCategoryAlreadySet;
    }
    hasToken(token) {
        return this.filterTokens.some((filterToken) => {
            const hasSameValue = filterToken.value === token;
            if (!hasSameValue) {
                return false;
            }
            if (this.category !== undefined) {
                return this.category === filterToken.id;
            }
            if (filterToken.id) {
                return filterToken.id === this.ID_CUSTOM_FILTER_VALUE;
            }
            return hasSameValue;
        });
    }
    filterDuplicateTokens(value) {
        return !this.hasToken(value);
    }
    filterByInput(value) {
        if (this.inputValue === undefined || this.inputValue === '') {
            return true;
        }
        return value.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1;
    }
    toggleCategoryOperator() {
        switch (this.categoryLogicalOperator) {
            case LogicalFilterOperator.EQUAL:
                this.categoryLogicalOperator = LogicalFilterOperator.NOT_EQUAL;
                break;
            case LogicalFilterOperator.NOT_EQUAL:
                this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
                break;
        }
    }
    getFilterChipLabel(value) {
        var _a, _b, _c;
        if (value.id === this.ID_CUSTOM_FILTER_VALUE) {
            return value.value;
        }
        const operatorString = value.operator === LogicalFilterOperator.EQUAL ? '=' : '!=';
        const label = (_c = (_b = (_a = this.categories[value.id]) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : this.nonSelectableCategories[value.id]) !== null && _c !== void 0 ? _c : value.id;
        return `${label} ${operatorString} ${value.value}`;
    }
    getFilteredSuggestions() {
        var _a, _b;
        if (!((_a = this.suggestions) === null || _a === void 0 ? void 0 : _a.length)) {
            return [];
        }
        return (_b = this.suggestions) === null || _b === void 0 ? void 0 : _b.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value));
    }
    hasCategorySelection() {
        return this.categories !== undefined;
    }
    renderPlainSuggestions() {
        return (h("div", { class: "dropdown-item-container" }, this.getFilteredSuggestions().map((suggestion) => (h("button", { class: "dropdown-item", "data-id": suggestion, onClick: () => this.addToken(suggestion), key: suggestion, title: suggestion }, suggestion)))));
    }
    renderOperatorButton() {
        const params = {
            type: 'button',
            variant: 'secondary',
            outline: false,
            ghost: true,
            iconOnly: true,
            iconOval: false,
            selected: false,
            disabled: this.disabled,
            loading: false,
            icon: '',
            onClick: (e) => {
                e.stopPropagation();
                this.toggleCategoryOperator();
            },
            extraClasses: {
                'btn-icon-32': true,
                'btn-toggle-operator': true,
            },
        };
        return (h(BaseButton, Object.assign({}, params), this.categoryLogicalOperator === LogicalFilterOperator.NOT_EQUAL
            ? '='
            : '!='));
    }
    renderCategoryValues() {
        var _a, _b;
        return (h("div", { class: "dropdown-item-container" }, this.renderOperatorButton(), h("div", { class: "dropdown-header" }, (_a = this.categories[this.category]) === null || _a === void 0 ? void 0 : _a.label), (_b = this.categories[this.category]) === null || _b === void 0 ? void 0 :
            _b.options.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value)).map((id) => (h("button", { class: "dropdown-item category-item-value", "data-id": id, title: id, key: id, onClick: () => this.addToken(id, this.category) }, `${this.categoryLogicalOperator === LogicalFilterOperator.EQUAL
                ? '='
                : '!='} ${id}`)))));
    }
    renderDropdownContent() {
        if (this.hasCategorySelection()) {
            if (this.category !== undefined) {
                return this.renderCategoryValues();
            }
            else {
                return this.renderCategorySelection();
            }
        }
        else
            return this.renderPlainSuggestions();
    }
    renderCategorySelection() {
        var _a;
        return (h("div", { class: "dropdown-item-container" }, (_a = this.getCategoryIds()) === null || _a === void 0 ? void 0 : _a.filter((id) => this.filterByInput(this.categories[id].label)).filter((id) => this.filterMultiples(id)).map((id) => {
            var _a;
            return (h("button", { class: "dropdown-item category-item category-item-id", "data-id": id, title: this.categories[id].label, key: id, onClick: (e) => {
                    e.preventDefault();
                    this.selectCategory(id);
                }, tabindex: "0" }, (_a = this.categories[id]) === null || _a === void 0 ? void 0 : _a.label));
        })));
    }
    getDropdownHeader() {
        if (this.categories !== undefined) {
            if (this.category !== undefined) {
                return null;
            }
            else {
                return this.labelCategories;
            }
        }
        return this.i18nPlainText;
    }
    componentDidRender() {
        if (this.isScrollStateDirty) {
            if (!this.tmpDisableScrollIntoView) {
                this.textInput.scrollIntoView();
            }
            this.isScrollStateDirty = false;
        }
    }
    getResetButton() {
        return (h("ix-icon-button", { onClick: (e) => this.resetFilter(e), class: {
                'reset-button': true,
                'hide-reset-button': !this.filterTokens.length && this.category === undefined,
            }, ghost: true, oval: true, icon: 'clear', size: "16" }));
    }
    getIconColor() {
        if (this.disabled) {
            return 'color-componentn-1';
        }
        if (this.readonly) {
            return 'color-std-txt';
        }
        return 'color-primary';
    }
    render() {
        var _a;
        return (h(Host, { key: 'bb1895ca71c8872520aa91537892b08bc44e8799' }, h("form", { key: '724c3f8b7344ff2a8d6dbc978328c1c40e9f4c86', ref: (el) => (this.formElement = el) }, h("div", { key: 'ce61f09afc88a407e8af9ab5de8d70df614c99c7', "read-only": this.readonly, class: {
                'input-container': true,
                disabled: this.disabled,
                focus: this.hasFocus,
                readonly: this.readonly,
                'no-icon': this.hideIcon,
            } }, h("ix-icon", { key: 'c051a2ba705082c534c441997138d0a7681d9483', color: this.getIconColor(), class: { 'd-none': this.hideIcon }, name: this.icon, size: "16" }), h("div", { key: '11adfdb0d008ff35dbe1022bc8cdac5b04024cdf', class: "token-container" }, h("ul", { key: 'c9a892b1ac2757c9117eaf957548624184af0f83', class: "list-unstyled" }, this.filterTokens.map((value, index) => (h("li", { key: value.toString(), class: {
                animate__animated: true,
                animate__fadein: true,
            } }, h("ix-filter-chip", { disabled: this.disabled, readonly: this.readonly, onClick: (e) => e.stopPropagation(), onCloseClick: () => this.removeToken(index) }, this.getFilterChipLabel(value))))), this.categories === undefined ? ('') : (h("li", { class: {
                'category-preview': true,
                'd-none': this.category === undefined,
            } }, (_a = this.categories[this.category]) === null || _a === void 0 ? void 0 : _a.label)), h("input", { key: '9b8af2d470dbd7c9fe6d7d34717c7678317bed4b', class: {
                'text-input': true,
                'hide-placeholder': this.readonly ||
                    this.disabled ||
                    this.category !== undefined,
            }, autocomplete: "off", name: "category-filter-input", disabled: this.disabled, readonly: this.readonly, ref: (el) => (this.textInput = el), type: "text", placeholder: this.placeholder }))), this.getResetButton())), this.disabled || this.readonly ? ('') : (h("ix-dropdown", { show: this.showDropdown, closeBehavior: "outside", offset: { mainAxis: 2 }, anchor: this.textInput, trigger: this.hostElement, header: this.getDropdownHeader() }, this.renderDropdownContent()))));
    }
    static get is() { return "ix-category-filter"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["category-filter.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["category-filter.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "If true the filter will be in disabled state"
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
                    "text": "If true the filter will be in readonly mode"
                },
                "attribute": "readonly",
                "reflect": false,
                "defaultValue": "false"
            },
            "filterState": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FilterState",
                    "resolved": "FilterState",
                    "references": {
                        "FilterState": {
                            "location": "import",
                            "path": "./filter-state",
                            "id": "src/components/category-filter/filter-state.ts::FilterState"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A set of search criteria to populate the component with."
                }
            },
            "placeholder": {
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
                    "text": "Placeholder text to be displayed in an empty input field."
                },
                "attribute": "placeholder",
                "reflect": false
            },
            "categories": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\n    [id: string]: {\n      label: string;\n      options: string[];\n    };\n  }",
                    "resolved": "{ [id: string]: { label: string; options: string[]; }; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Configuration object hash used to populate the dropwdown menu for typeahead and quick selection functionality.\nEach ID maps to an object with a label and an array of options to select from."
                }
            },
            "nonSelectableCategories": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\n    [id: string]: string;\n  }",
                    "resolved": "{ [id: string]: string; }",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "In certain use cases some categories may not be available for selection anymore.\nTo allow proper display of set filters with these categories this ID to label mapping can be populated.\n\nConfiguration object hash used to supply labels to the filter chips in the input field.\nEach ID maps to a string representing the label to display."
                },
                "defaultValue": "{}"
            },
            "suggestions": {
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
                    "text": "A list of strings that will be supplied as typeahead suggestions not tied to any categories."
                }
            },
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
                    "text": "The icon next to the actual text input\nDefaults to 'search'"
                },
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "'search'"
            },
            "hideIcon": {
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
                    "text": "Allows to hide the icon inside the text input.\nDefaults to false"
                },
                "attribute": "hide-icon",
                "reflect": false
            },
            "repeatCategories": {
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
                    "text": "If set to true allows that a single category can be set more than once.\nAn already set category will not appear in the category dropdown if set to false.\n\nDefaults to true"
                },
                "attribute": "repeat-categories",
                "reflect": false,
                "defaultValue": "true"
            },
            "tmpDisableScrollIntoView": {
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
                            "name": "internal",
                            "text": "For debugging purposes only!"
                        }],
                    "text": ""
                },
                "attribute": "tmp-disable-scroll-into-view",
                "reflect": false,
                "defaultValue": "true"
            },
            "labelCategories": {
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
                    "text": "i18n"
                },
                "attribute": "label-categories",
                "reflect": false,
                "defaultValue": "'Categories'"
            },
            "i18nPlainText": {
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
                    "text": "i18n"
                },
                "attribute": "i-1-8n-plain-text",
                "reflect": false,
                "defaultValue": "'Filter by text'"
            }
        };
    }
    static get states() {
        return {
            "showDropdown": {},
            "textInput": {},
            "hasFocus": {},
            "categoryLogicalOperator": {},
            "inputValue": {},
            "category": {},
            "filterTokens": {}
        };
    }
    static get events() {
        return [{
                "method": "categoryChanged",
                "name": "categoryChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event dispatched whenever the a category gets selected in the dropdown"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "inputChanged",
                "name": "inputChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event dispatched whenever the text input changes."
                },
                "complexType": {
                    "original": "InputState",
                    "resolved": "InputState",
                    "references": {
                        "InputState": {
                            "location": "import",
                            "path": "./input-state",
                            "id": "src/components/category-filter/input-state.ts::InputState"
                        }
                    }
                }
            }, {
                "method": "filterChanged",
                "name": "filterChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event dispatched whenever the filter state changes."
                },
                "complexType": {
                    "original": "FilterState",
                    "resolved": "FilterState",
                    "references": {
                        "FilterState": {
                            "location": "import",
                            "path": "./filter-state",
                            "id": "src/components/category-filter/filter-state.ts::FilterState"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "filterState",
                "methodName": "watchFilterState"
            }];
    }
}
//# sourceMappingURL=category-filter.js.map
