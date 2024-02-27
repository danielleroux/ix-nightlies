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
        return (h(Host, { key: 'd354ef216d5dc5f80ce2a7a4a7ab9130afe94c0e', class: {
                expanded: this.expanded,
                'right-position': this.expanded,
                fullWidth: this.fullWidth,
            } }, h("ix-icon-button", { key: '960286296bba24fa10228927d446f23c542e3404', size: this.expanded ? '16' : '24', icon: this.icon, ghost: true, variant: "primary", "data-testid": "button", onClick: () => this.expandInput(), tabindex: this.expanded ? -1 : 0, color: this.hasFocus ? 'input-search-icon--color--focus' : undefined, class: {
                'btn-search': true,
                'btn-search--expanded': this.expanded,
            } }), h("div", { key: '08c1c9975d18d21a1a2f0331ac72fd44e5ed1fb2', class: {
                expanded: this.expanded,
                fullWidth: this.fullWidth,
                collapsed: !this.expanded,
                'disable-pointer': !this.expanded,
                'input-container': true,
            }, "data-testid": "input-wrapper" }, h("input", { key: 'f2bafc86d72957c20343fbde76664c70ad1a4dc6', class: {
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
