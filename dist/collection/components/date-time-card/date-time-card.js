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
 * @internal
 */
export class DateTimeCard {
    constructor() {
        this.standaloneAppearance = undefined;
        this.individual = true;
        this.corners = 'rounded';
    }
    cardClasses() {
        return {
            card: true,
            standaloneAppearance: this.standaloneAppearance !== undefined
                ? this.standaloneAppearance
                : this.individual,
            rounded: this.corners === 'rounded',
            left: this.corners === 'left',
            right: this.corners === 'right',
        };
    }
    render() {
        return (h(Host, { key: 'be249cc33523ab05fcea91c285a828d42803530c' }, h("div", { key: '3a4389a7bf5e5ec46622ddae68a14d121a1cad97', class: this.cardClasses() }, h("div", { key: '711acb2cd8a3a78046bc800e7c6ead60a0ad1b1f', class: "header" }, h("slot", { key: '72dd5f1b4c27869449729395a2dd9fe73b81d2b8', name: "header" })), h("div", { key: 'cc763fd99e776b0e8fa4b5615d92c51a556e0ee8', class: "separator" }), h("div", { key: '3654550d4f9fa01bbd79d0c8666116ed645ae495', class: "content" }, h("slot", { key: 'b2e03f699d22bedc7a586ec2f1be3bce3497d82f' })))));
    }
    static get is() { return "ix-date-time-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["date-time-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["date-time-card.css"]
        };
    }
    static get properties() {
        return {
            "standaloneAppearance": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "standalone-appearance",
                "reflect": false,
                "defaultValue": "undefined"
            },
            "individual": {
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
                    "text": "set styles"
                },
                "attribute": "individual",
                "reflect": false,
                "defaultValue": "true"
            },
            "corners": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DateTimeCardCorners",
                    "resolved": "\"left\" | \"right\" | \"rounded\" | \"straight\"",
                    "references": {
                        "DateTimeCardCorners": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/date-time-card/date-time-card.tsx",
                            "id": "src/components/date-time-card/date-time-card.tsx::DateTimeCardCorners"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set corners style"
                },
                "attribute": "corners",
                "reflect": false,
                "defaultValue": "'rounded'"
            }
        };
    }
}
//# sourceMappingURL=date-time-card.js.map
