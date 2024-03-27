/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class Spinner {
    constructor() {
        this.variant = 'secondary';
        this.size = 'medium';
        this.hideTrack = false;
    }
    render() {
        return (h(Host, { key: 'ae03c01022d0144ced3c631a78d947934fdef0cf', class: {
                primary: this.variant === 'primary',
                'xx-small': this.size === 'xx-small',
                'x-small': this.size === 'x-small',
                small: this.size === 'small',
                medium: this.size === 'medium',
                large: this.size === 'large',
                'hide-track': this.hideTrack,
            } }));
    }
    static get is() { return "ix-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["spinner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["spinner.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary'",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variant of spinner"
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'secondary'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'xx-small' | 'x-small' | 'small' | 'medium' | 'large'",
                    "resolved": "\"large\" | \"medium\" | \"small\" | \"x-small\" | \"xx-small\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of spinner"
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'medium'"
            },
            "hideTrack": {
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
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "hide-track",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=spinner.js.map
