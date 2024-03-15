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
        return (h(Host, { key: 'f8ed1e43427e1723f5015a550c2cc9a110bee2b2' }, h("div", { key: 'f29905676e209d12e851fb8991e60d28cf7153bb', class: this.cardClasses() }, h("div", { key: '4e34b58cb52dddd372fda6713bdd41d612612f96', class: "header" }, h("slot", { key: 'c31d602a45866159181c20a3674cd18c5679052f', name: "header" })), h("div", { key: '5d86be7a1b70d75246bf07cda2898bc3ee768ca5', class: "separator" }), h("div", { key: '3d3e38bff5d56f06e88ef654e6f621ee3ffc8b9c', class: "content" }, h("slot", { key: 'c8a3b2a6ef2f7260ee0a8a16f5ee8c5eda1d9db6' })))));
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
