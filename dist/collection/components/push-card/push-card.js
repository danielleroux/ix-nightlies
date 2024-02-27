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
        return (h(Host, { key: '96529a9ec926a30bf0ff5609a215a50df3a77b8d' }, h("ix-card", { key: '5bd737a3a82658bfb9a778dd6202ddecd0a754b2', variant: this.variant }, h("ix-card-content", { key: '829626941478481b805a287f5ae56541556e7207' }, h("ix-card-title", { key: '30e966156649d54adabce3883ed182fe9ff0e42b' }, this.icon ? (h("ix-icon", { class: 'icon', name: this.icon, size: "32" })) : null, h("span", { key: 'b09cc036a7b0b4aaf647cd432dfae8c6793ec91a', class: 'notification' }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: '9f85511858f444cdb6629515c428a5454fe94525', name: "title-action" })), h("ix-typography", { key: '425a782ad84de4af28876cd268a7162b983830a0', color: color, format: "h4" }, this.heading), h("ix-typography", { key: '4da2386c51ae909c824c16215ffdd4daa6524225', color: color }, this.subheading)), h("ix-card-accordion", { key: 'ac3701b2ab1caade4ca1ab810e1a47ac11c4e963', collapse: this.collapse }, h("slot", { key: '6ed725b03baaa16fbdc9ff42e8e8fd26be683013' })))));
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
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/push-card/push-card.tsx",
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
