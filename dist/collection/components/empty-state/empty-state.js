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
        return (h(Host, { key: '79259f06912559cfdc060adbd8af1841b6743d5d', class: `emptyState emptyState--${this.layout}` }, this.icon && (h("div", { class: "emptyState__icon" }, h("ix-icon", { name: this.icon, size: this.layout === 'large' ? '32' : '32', color: "color-soft-text" }))), h("div", { key: 'f9665e695a8d12c6ed0c07f66a1a9e46c87ee99e', class: "emptyState__content" }, h("div", { key: '073f23f872bc5c761679e29951824b1b5123991d', class: "content__label" }, h("ix-typography", { key: 'a3dd46861fe229b04905c4bb1be31f549e3d4c3b', variant: this.layout === 'large' ? 'display-large' : 'default' }, this.header), this.subHeader && (h("div", { class: "label__subHeader" }, this.subHeader))), this.action && (h("div", { class: "content__action" }, h("ix-button", { onClick: () => this.actionClick.emit() }, this.action))))));
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
