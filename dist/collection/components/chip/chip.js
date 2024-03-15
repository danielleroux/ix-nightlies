/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
export class Chip {
    constructor() {
        this.variant = 'primary';
        this.active = true;
        this.closable = false;
        this.icon = undefined;
        this.background = undefined;
        this.color = undefined;
        this.chipColor = undefined;
        this.outline = false;
    }
    getCloseButton() {
        var _a;
        return (h("div", { class: "close-button-container" }, h("ix-icon-button", { type: "button", variant: "secondary", icon: 'close-small', class: "close-button", oval: true, size: "16", style: this.variant === 'custom'
                ? { color: (_a = this.chipColor) !== null && _a !== void 0 ? _a : this.color }
                : {}, ghost: true, onClick: (event) => {
                this.closeChip.emit(event);
                event.stopPropagation();
            } })));
    }
    render() {
        var _a, _b;
        const isInactive = this.active === false;
        let customStyle = {};
        if (this.variant === 'custom') {
            customStyle = {
                color: (_a = this.chipColor) !== null && _a !== void 0 ? _a : this.color,
                [this.outline ? 'borderColor' : 'backgroundColor']: this.background,
            };
        }
        return (h(Host, { key: '04ad48738af21d85310e4b6e81b509ff748740fe', tabIndex: "-1", title: this.el.textContent, style: this.variant === 'custom'
                ? {
                    '--ix-icon-button-color': (_b = this.chipColor) !== null && _b !== void 0 ? _b : this.color,
                }
                : {} }, h("div", { key: 'fcb2c6a534fee6a075505632524db05ea6214611', style: Object.assign({}, customStyle), class: {
                container: true,
                outline: this.outline,
                inactive: isInactive,
                alarm: this.variant === 'alarm',
                critical: this.variant === 'critical',
                info: this.variant === 'info',
                neutral: this.variant === 'neutral',
                primary: this.variant === 'primary',
                success: this.variant === 'success',
                warning: this.variant === 'warning',
                custom: this.variant === 'custom',
                closable: this.closable,
                icon: !!this.icon,
            } }, h("ix-icon", { key: '8177db5d16f03117e3397a99c4f364bff48b063b', class: {
                'with-icon': true,
                hidden: !this.icon,
            }, name: this.icon, size: '24' }), h("span", { key: 'f1f0f6b22b92951ce0b1b5c81b1071ad4a3c6165', class: "slot-container" }, h("slot", { key: '59087cf16d54288ef6dc324520f0f43b84108166' })), isInactive === false && this.closable ? this.getCloseButton() : null)));
    }
    static get is() { return "ix-chip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chip.css"]
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
                    "text": "Chip variant"
                },
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "'primary'"
            },
            "active": {
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
                    "text": "Determines if the chip is interactive. If false no user input (e.g. mouse states, keyboard navigation)\nwill be possible and also the close button will not be present."
                },
                "attribute": "active",
                "reflect": false,
                "defaultValue": "true"
            },
            "closable": {
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
                    "text": "Show close icon"
                },
                "attribute": "closable",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Custom background color.\nOnly has an effect on chips with `variant='custom'`"
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
                            "text": "since 2.1.0 use `chip-color`"
                        }],
                    "text": "Custom font and icon color.\nOnly has an effect on chips with `variant='custom'`"
                },
                "attribute": "color",
                "reflect": false
            },
            "chipColor": {
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
                    "text": "Custom font and icon color.\nOnly has an effect on chips with `variant='custom'`"
                },
                "attribute": "chip-color",
                "reflect": false
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
                    "text": "Show chip with outline style"
                },
                "attribute": "outline",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "closeChip",
                "name": "closeChip",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.5.0"
                        }],
                    "text": "Fire event if close button is clicked"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=chip.js.map
