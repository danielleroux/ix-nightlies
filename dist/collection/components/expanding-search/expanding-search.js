/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
export class ExpandingSearch {
    expandInput() {
        setTimeout(this.focusTextInput, 300);
        this.expanded = true;
    }
    collapseInput() {
        if (!this.isFieldChanged && this.expanded) {
            this.expanded = false;
        }
    }
    clearInput() {
        this.value = '';
        this.isFieldChanged = false;
    }
    onChange(e) {
        this.value = e.target.value;
        if (this.isFieldChanged && this.value === '') {
            this.isFieldChanged = false;
        }
        else {
            this.isFieldChanged = true;
        }
        this.valueChange.emit(this.value);
    }
    constructor() {
        this.icon = 'search';
        this.placeholder = 'Enter text here';
        this.value = '';
        this.fullWidth = false;
        this.isFieldChanged = false;
        this.expanded = false;
        this.hasFocus = false;
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput() {
        var _a;
        (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    clearClicked() {
        var _a;
        this.clearInput();
        (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
        this.valueChange.emit(this.value);
    }
    render() {
        return (h(Host, { key: '9bd67b6447d4ab2aa3d8183b541d5118cfac926f', class: {
                expanded: this.expanded,
                'right-position': this.expanded,
                fullWidth: this.fullWidth,
            } }, h("ix-icon-button", { key: '53147a287683e46d23520c4a8c517ff52454cfcf', size: this.expanded ? '16' : '24', icon: this.icon, ghost: true, variant: "primary", "data-testid": "button", onClick: () => this.expandInput(), tabindex: this.expanded ? -1 : 0, color: this.hasFocus ? 'input-search-icon--color--focus' : undefined, class: {
                'btn-search': true,
                'btn-search--expanded': this.expanded,
            } }), h("div", { key: 'c60d58b106c39f1b3f08f340a13b64cfb7576866', class: {
                expanded: this.expanded,
                fullWidth: this.fullWidth,
                collapsed: !this.expanded,
                'disable-pointer': !this.expanded,
                'input-container': true,
            }, "data-testid": "input-wrapper" }, h("input", { key: 'dfb94002365e9fc5ab3e18ba4e8f30407fceade8', class: {
                'form-control': true,
                input: this.expanded,
                'disable-pointer': !this.expanded,
                'opacity-before': !this.expanded,
                'opacity-after': this.expanded,
            }, ref: (el) => (this.textInput = el), "data-testid": "input", placeholder: this.placeholder, type: "text", value: this.value, onBlur: () => {
                this.collapseInput();
                this.hasFocus = false;
            }, onFocus: () => (this.hasFocus = true), onInput: (e) => this.onChange(e), tabindex: this.expanded ? 0 : -1 }), this.isFieldChanged ? (h("ix-icon-button", { class: "btn-clear", icon: 'clear', ghost: true, size: "16", "data-testid": "clear-button", onClick: () => this.clearClicked() })) : null)));
    }
    static get is() { return "ix-expanding-search"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["expanding-search.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["expanding-search.css"]
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
                    "text": "Search icon"
                },
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "'search'"
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
                    "text": "Placeholder text"
                },
                "attribute": "placeholder",
                "reflect": false,
                "defaultValue": "'Enter text here'"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Default value"
                },
                "attribute": "value",
                "reflect": false,
                "defaultValue": "''"
            },
            "fullWidth": {
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
                            "text": "1.6.0"
                        }],
                    "text": "If true the search field will fill all available horizontal space of it's parent container when expanded."
                },
                "attribute": "full-width",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isFieldChanged": {},
            "expanded": {},
            "hasFocus": {}
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
                    "tags": [],
                    "text": "Value changed"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=expanding-search.js.map
