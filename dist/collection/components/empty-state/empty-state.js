/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
/**
 * @since 1.6.0
 */
export class EmptyState {
    constructor() {
        this.layout = 'large';
        this.icon = undefined;
        this.header = undefined;
        this.subHeader = undefined;
        this.action = undefined;
    }
    render() {
        return (h(Host, { key: 'd4948b49bb9fab021917a1e59191f8d12d26d336', class: `emptyState emptyState--${this.layout}` }, this.icon && (h("div", { class: "emptyState__icon" }, h("ix-icon", { name: this.icon, size: this.layout === 'large' ? '32' : '32', color: "color-soft-text" }))), h("div", { key: 'f7e619a388d459d74efe6927ee2efd044346b1da', class: "emptyState__content" }, h("div", { key: '676824c13fcdff2a071b9dacf98e2536a373ae5c', class: "content__label" }, h("ix-typography", { key: '53a08238276da07a1bf4c10ad8cd76952124af7c', variant: this.layout === 'large' ? 'display-large' : 'default' }, this.header), this.subHeader && (h("div", { class: "label__subHeader" }, this.subHeader))), this.action && (h("div", { class: "content__action" }, h("ix-button", { onClick: () => this.actionClick.emit() }, this.action))))));
    }
    static get is() { return "ix-empty-state"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["empty-state.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["empty-state.css"]
        };
    }
    static get properties() {
        return {
            "layout": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "EmptyStateLayout",
                    "resolved": "\"compact\" | \"compactBreak\" | \"large\"",
                    "references": {
                        "EmptyStateLayout": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/empty-state/empty-state.tsx",
                            "id": "src/components/empty-state/empty-state.tsx::EmptyStateLayout"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Optional empty state layout - one of 'large', 'compact' or 'compactBreak'"
                },
                "attribute": "layout",
                "reflect": false,
                "defaultValue": "'large'"
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
                    "text": "Optional empty state icon"
                },
                "attribute": "icon",
                "reflect": false
            },
            "header": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Empty state header"
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
                    "text": "Optional empty state sub header"
                },
                "attribute": "sub-header",
                "reflect": false
            },
            "action": {
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
                    "text": "Optional empty state action"
                },
                "attribute": "action",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "actionClick",
                "name": "actionClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Empty state action click event"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=empty-state.js.map
