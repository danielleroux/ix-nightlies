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
    getSubheadingColor() {
        switch (this.variant) {
            case 'insight':
            case 'notification':
                return 'soft';
            default:
                return undefined;
        }
    }
    render() {
        return (h(Host, { key: 'f83abb076a856034694fa17014a31c511508ac84' }, h("ix-card", { key: 'e21ebb1bc1e27db30872b8c144001ea338c89ce2', selected: this.selected, variant: this.variant, class: 'pointer' }, h("ix-card-content", { key: '6074ffb241993674c9b636d2b43c8cf0b76d3437' }, this.icon ? (h("ix-icon", { class: 'icon', name: this.icon, size: "24" })) : null, h("div", { key: 'ee7c10340f5dd87d397f013de5879caddb37ca5d' }, this.heading ? (h("ix-typography", { format: "h4" }, this.heading)) : null, this.subheading ? (h("ix-typography", { format: "h5", color: this.getSubheadingColor() }, this.subheading)) : null, h("slot", { key: '5ba86a041964d413a2f7ff7d323905ba9880543e' }))))));
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
