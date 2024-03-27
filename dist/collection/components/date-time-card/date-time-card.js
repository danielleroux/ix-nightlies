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
        return (h(Host, { key: '40541d8514911fcfec7620c3542774eb189d1687' }, h("div", { key: 'd07d67a70360f31c67e3f220446e92f0266a5fbe', class: this.cardClasses() }, h("div", { key: '60681672b69bf55d3106eec4cf2a1d811c0cf637', class: "header" }, h("slot", { key: '5042ffc5ea4e264baa793dddd8fc071800f3eeaa', name: "header" })), h("div", { key: '68371c4b3fb5f66f291482dd44e738ba64813fb4', class: "separator" }), h("div", { key: 'a6dbde0e6f11d298bd78dfbaec884b1272e564c4', class: "content" }, h("slot", { key: '5537b6cca4feb31830e9d654785bc9c8258455ba' })))));
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
