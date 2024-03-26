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
export class IxActionCard {
    constructor() {
        this.variant = 'insight';
        this.icon = undefined;
        this.heading = undefined;
        this.subheading = undefined;
        this.selected = false;
    }
    render() {
        return (h(Host, { key: '42f95fd1de84746fcad8094b51909364a10dddb3' }, h("ix-card", { key: '9dfb5ad9782e314dc4751cf2dd1cceebea9f3eca', selected: this.selected, variant: this.variant, class: 'pointer' }, h("ix-card-content", { key: '29683fa1a1cc83dea13af3a26232f1b575788d3a' }, this.icon ? (h("ix-icon", { class: 'icon', name: this.icon, size: "24" })) : null, h("div", { key: '125ac2f8b62cc1512b0a7c9d687a3f0a85eca5c3' }, this.heading ? (h("ix-typography", { format: "h4" }, this.heading)) : null, this.subheading ? (h("ix-typography", { format: "h5", color: this.variant === 'insight' ? 'soft' : undefined }, this.subheading)) : null, h("slot", { key: '7b76ddd1c734a4b741022914695bdeb3af2c2988' }))))));
    }
    static get is() { return "ix-action-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["action-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["action-card.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ActionCardVariant",
                    "resolved": "\"alarm\" | \"critical\" | \"info\" | \"insight\" | \"neutral\" | \"notification\" | \"primary\" | \"success\" | \"warning\"",
                    "references": {
                        "ActionCardVariant": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/action-card/action-card.tsx",
                            "id": "src/components/action-card/action-card.tsx::ActionCardVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Card variant"
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'insight'"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Card icon"
                },
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "undefined"
            },
            "heading": {
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
                    "text": "Card heading"
                },
                "attribute": "heading",
                "reflect": false
            },
            "subheading": {
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
                    "text": "Card subheading"
                },
                "attribute": "subheading",
                "reflect": false
            },
            "selected": {
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
                    "text": "Card selection"
                },
                "attribute": "selected",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=action-card.js.map
