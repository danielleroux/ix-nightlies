/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import { BaseButton } from "../button/base-button";
import { a11yBoolean } from "../utils/a11y";
/**
 * @since 1.5.0
 */
export class Pagination {
    constructor() {
        this.baseButtonConfig = {
            variant: 'secondary',
            outline: false,
            ghost: true,
            iconOnly: true,
            iconOval: false,
            disabled: false,
            icon: '',
            loading: false,
            selected: false,
            type: 'button',
            extraClasses: {
                ['w-auto']: true,
            },
        };
        this.maxCountPages = 7;
        this.advanced = undefined;
        this.itemCount = 15;
        this.showItemCount = true;
        this.count = undefined;
        this.selectedPage = 0;
        this.i18nPage = 'Page';
        this.i18nOf = 'of';
        this.i18nItems = 'Items';
    }
    selectPage(index) {
        if (index < 0) {
            this.selectedPage = 0;
        }
        else if (index > this.count - 1) {
            this.selectedPage = this.count - 1;
        }
        else {
            this.selectedPage = index;
        }
        this.pageSelected.emit(this.selectedPage);
    }
    increase() {
        if (this.selectedPage === this.count - 1) {
            return;
        }
        this.selectPage(this.selectedPage + 1);
    }
    decrease() {
        if (this.selectedPage === 0) {
            return;
        }
        this.selectPage(this.selectedPage - 1);
    }
    getPageButton(index) {
        const baseButtonProps = Object.assign(Object.assign({}, this.baseButtonConfig), { onClick: () => this.selectPage(index), selected: this.selectedPage === index, ariaAttributes: {
                'aria-pressed': a11yBoolean(this.selectedPage === index),
            } });
        return h(BaseButton, Object.assign({}, baseButtonProps), index + 1);
    }
    renderPageButtons() {
        const pagesBeforeOverflow = Math.floor(this.maxCountPages / 2);
        const hasOverflow = this.count > this.maxCountPages;
        const hasOverflowStart = hasOverflow && this.selectedPage > pagesBeforeOverflow;
        const hasOverflowEnd = hasOverflow && this.selectedPage < this.count - pagesBeforeOverflow - 1;
        const pageButtons = [];
        let start = 0;
        let end = Math.min(this.count, this.maxCountPages);
        let pageCount = Math.floor((this.maxCountPages - 4) / 2);
        if (hasOverflowStart) {
            const baseButtonProps = Object.assign(Object.assign({}, this.baseButtonConfig), { onClick: () => {
                    if (hasOverflowEnd) {
                        this.selectPage(this.selectedPage - Math.max(0, 2 * pageCount + 1));
                    }
                    else {
                        this.selectPage(this.count - this.maxCountPages);
                    }
                } });
            pageButtons.push(this.getPageButton(0));
            pageButtons.push(h(BaseButton, Object.assign({}, baseButtonProps), "..."));
            if (hasOverflowEnd) {
                start = this.count - this.maxCountPages + 2;
            }
            else {
                start = this.count - this.maxCountPages + 2;
                end = this.count;
            }
        }
        if (hasOverflowEnd) {
            if (hasOverflowStart) {
                start = this.selectedPage - pageCount;
                end = this.selectedPage + pageCount + 1;
            }
            else {
                end = this.maxCountPages - 2;
            }
        }
        for (let i = start; i < end; i++) {
            pageButtons.push(this.getPageButton(i));
        }
        if (hasOverflowEnd) {
            const baseButtonProps = Object.assign(Object.assign({}, this.baseButtonConfig), { onClick: () => {
                    if (hasOverflowStart) {
                        this.selectPage(this.selectedPage + Math.max(0, 2 * pageCount + 1));
                    }
                    else {
                        this.selectPage(this.maxCountPages - 1);
                    }
                } });
            pageButtons.push(h(BaseButton, Object.assign({}, baseButtonProps), "..."));
            pageButtons.push(this.getPageButton(this.count - 1));
        }
        return h("span", { class: "page-buttons" }, pageButtons);
    }
    render() {
        return (h(Host, { key: '4144aa27790c62471eed3a893fa4f5c701f0b225' }, h("ix-icon-button", { key: '733c68907d57e8ce987a447cde16e46fe52dab27', disabled: this.selectedPage === 0, ghost: true, icon: 'chevron-left-small', onClick: () => this.decrease() }), this.advanced ? (h("div", { class: "advanced-pagination" }, h("ix-typography", { variant: "default" }, this.i18nPage), h("input", { class: "form-control page-selection", type: "number", min: "1", max: this.count, value: this.selectedPage + 1, onChange: (e) => {
                const index = Number.parseInt(e.target['value']);
                this.selectPage(index - 1);
            } }), h("span", { class: "total-count" }, h("ix-typography", { variant: "default" }, this.i18nOf, " ", this.count)))) : (h("span", { class: "basic-pagination" }, this.renderPageButtons(), " ")), h("ix-icon-button", { key: '2f66debc2192c56199c7d36a626f60e1eed62704', disabled: this.selectedPage === this.count - 1, ghost: true, icon: 'chevron-right-small', onClick: () => this.increase() }), this.advanced && this.showItemCount ? (h("span", { class: "item-count" }, h("ix-typography", { variant: "default" }, this.i18nItems), h("ix-select", { hideListHeader: true, i18nPlaceholder: "", i18nSelectListHeader: "", value: `${this.itemCount}`, onValueChange: (e) => {
                const count = Number.parseInt(Array.isArray(e.detail) ? e.detail[0] : e.detail);
                this.itemCountChanged.emit(count);
            } }, h("ix-select-item", { label: "10", value: "10" }), h("ix-select-item", { label: "15", value: "15" }), h("ix-select-item", { label: "20", value: "20" }), h("ix-select-item", { label: "40", value: "40" }), h("ix-select-item", { label: "100", value: "100" })))) : ('')));
    }
    static get is() { return "ix-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["pagination.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pagination.css"]
        };
    }
    static get properties() {
        return {
            "advanced": {
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
                    "text": "Advanced mode"
                },
                "attribute": "advanced",
                "reflect": false
            },
            "itemCount": {
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
                    "text": "Number of items shown at once.\nCan only be changed in advaced mode."
                },
                "attribute": "item-count",
                "reflect": false,
                "defaultValue": "15"
            },
            "showItemCount": {
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
                    "text": "Show item count in advanced mode"
                },
                "attribute": "show-item-count",
                "reflect": false,
                "defaultValue": "true"
            },
            "count": {
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
                    "text": "Total number of pages"
                },
                "attribute": "count",
                "reflect": false
            },
            "selectedPage": {
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
                    "text": "Zero based index of currently selected page"
                },
                "attribute": "selected-page",
                "reflect": false,
                "defaultValue": "0"
            },
            "i18nPage": {
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
                "attribute": "i-1-8n-page",
                "reflect": false,
                "defaultValue": "'Page'"
            },
            "i18nOf": {
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
                "attribute": "i-1-8n-of",
                "reflect": false,
                "defaultValue": "'of'"
            },
            "i18nItems": {
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
                    "text": "/**\n  i18n"
                },
                "attribute": "i-1-8n-items",
                "reflect": false,
                "defaultValue": "'Items'"
            }
        };
    }
    static get events() {
        return [{
                "method": "pageSelected",
                "name": "pageSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Page selection event"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "itemCountChanged",
                "name": "itemCountChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Item count change event"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=pagination.js.map
