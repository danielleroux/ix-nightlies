/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class Pill {
    constructor() {
        this.variant = 'primary';
        this.outline = false;
        this.icon = undefined;
        this.background = undefined;
        this.color = undefined;
        this.pillColor = undefined;
        this.alignLeft = false;
    }
    render() {
        var _a, _b;
        let customStyle = {};
        if (this.variant === 'custom') {
            customStyle = {
                color: (_a = this.pillColor) !== null && _a !== void 0 ? _a : this.color,
                [this.outline ? 'borderColor' : 'backgroundColor']: this.background,
            };
        }
        return (h(Host, { key: '8cdaa8d8b2c429a046db4bc3ecf05fab8c8dd43d', style: this.variant === 'custom'
                ? {
                    '--ix-icon-button-color': (_b = this.pillColor) !== null && _b !== void 0 ? _b : this.color,
                }
                : {}, title: this.el.textContent, class: {
                'align-left': this.alignLeft,
            } }, h("div", { key: '2be689c5f608c39f13969c80680f2a482d0e33bb', style: Object.assign({}, customStyle), class: {
                container: true,
                outline: this.outline,
                inactive: false,
                alarm: this.variant === 'alarm',
                critical: this.variant === 'critical',
                info: this.variant === 'info',
                neutral: this.variant === 'neutral',
                primary: this.variant === 'primary',
                success: this.variant === 'success',
                warning: this.variant === 'warning',
                custom: this.variant === 'custom',
                closable: false,
                icon: !!this.icon,
            } }, h("ix-icon", { key: '3695a57e5de1e243a9b453df6ea1fc9e6a8a37a4', class: {
                'with-icon': true,
                hidden: this.icon === undefined || this.icon === '',
            }, name: this.icon, size: '16' }), h("span", { key: '999f7e18df2ae7e0626714d85f4abcca0a0e8bce', class: "slot-container" }, h("slot", { key: 'bcc766b78fa8cf6a2b044b0356296225862765c9' })))));
    }
    static get is() { return "ix-pill"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["pill.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pill.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'primary'\n    | 'alarm'\n    | 'critical'\n    | 'warning'\n    | 'info'\n    | 'neutral'\n    | 'success'\n    | 'custom'",
                    "resolved": "\"alarm\" | \"critical\" | \"custom\" | \"info\" | \"neutral\" | \"primary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Pill variant"
                },
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "'primary'"
            },
            "outline": {
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
                    "text": "Show pill as outline"
                },
                "attribute": "outline",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Show icon"
                },
                "attribute": "icon",
                "reflect": false
            },
            "background": {
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
                    "text": "Custom color for pill. Only working for `variant='custom'`"
                },
                "attribute": "background",
                "reflect": false
            },
            "color": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "since 2.1.0 use `pill-color`"
                        }],
                    "text": "Custom font color for pill. Only working for `variant='custom'`"
                },
                "attribute": "color",
                "reflect": false
            },
            "pillColor": {
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
                    "text": "Custom font color for pill. Only working for `variant='custom'`"
                },
                "attribute": "pill-color",
                "reflect": false
            },
            "alignLeft": {
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
                    "text": "Align pill content left"
                },
                "attribute": "align-left",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=pill.js.map
