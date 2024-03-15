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
export class PushCard {
    constructor() {
        this.icon = undefined;
        this.notification = undefined;
        this.heading = undefined;
        this.subheading = undefined;
        this.variant = 'insight';
        this.collapse = true;
    }
    render() {
        var _a;
        const color = this.variant === 'insight' || this.variant === 'notification'
            ? 'std'
            : undefined;
        return (h(Host, { key: 'e24565973d07f9e229c36913ca3ac89a50fa203a' }, h("ix-card", { key: '44282cb66fe975ec987c732564b1a1b2f157fb5b', variant: this.variant }, h("ix-card-content", { key: 'a81102518c997300dd706eaaf9be2c409dc2cb57' }, h("ix-card-title", { key: 'cfe94c332de47b3457f713e601d5528da88eb9d6' }, this.icon ? (h("ix-icon", { class: 'icon', name: this.icon, size: "32" })) : null, h("span", { key: '70ae6659d04f30ba68a58f8cdf0fde3f33c3de01', class: 'notification' }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: 'b16c8760f377f9f5118cf2d6b09f0ed831c4d7bd', name: "title-action" })), h("ix-typography", { key: '861cc81ab636b168fbd6f931095d5128a2a4732b', color: color, format: "h4" }, this.heading), h("ix-typography", { key: '310464f9afd7994ccc5c51a8154387e59205b2bb', color: color }, this.subheading)), h("ix-card-accordion", { key: 'e070cee2f6ded1b56b92d3fc1ed5028cfe2d0d5d', collapse: this.collapse }, h("slot", { key: 'd8b198392bd09b45d2f0c6f6579e333c5f4d96e0' })))));
    }
    static get is() { return "ix-push-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["push-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["push-card.css"]
        };
    }
    static get properties() {
        return {
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
            "notification": {
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
                    "text": "Card KPI value"
                },
                "attribute": "notification",
                "reflect": false
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
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PushCardVariant",
                    "resolved": "\"alarm\" | \"critical\" | \"info\" | \"insight\" | \"neutral\" | \"notification\" | \"primary\" | \"success\" | \"warning\"",
                    "references": {
                        "PushCardVariant": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/push-card/push-card.tsx",
                            "id": "src/components/push-card/push-card.tsx::PushCardVariant"
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
            "collapse": {
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
                            "text": "2.1.0"
                        }],
                    "text": "Collapse the card"
                },
                "attribute": "collapse",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=push-card.js.map
