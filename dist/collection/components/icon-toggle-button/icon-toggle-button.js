/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import { BaseIconButton } from "../icon-button/base-icon-button";
import { a11yBoolean } from "../utils/a11y";
/**
 * @since 2.0.0
 */
export class IconToggleButton {
    constructor() {
        this.variant = 'secondary';
        this.outline = false;
        this.ghost = false;
        this.icon = undefined;
        this.pressed = false;
        this.size = '24';
        this.disabled = false;
        this.loading = false;
    }
    isIllegalToggleButtonConfig() {
        return this.variant === 'primary' && (this.outline || this.ghost);
    }
    logIllegalConfig() {
        console.warn('iX toggle button with illegal configuration detected. Variant "primary" can only be combined with "outline" or "ghost".');
    }
    onVariantChange() {
        if (this.isIllegalToggleButtonConfig()) {
            this.logIllegalConfig();
        }
    }
    onGhostChange() {
        this.onVariantChange();
    }
    onOutlineChange() {
        this.onVariantChange();
    }
    componentDidLoad() {
        this.onVariantChange();
    }
    dispatchPressedChange() {
        this.pressedChange.emit(!this.pressed);
    }
    getIconSizeClass() {
        return {
            'btn-icon-12': this.size === '12',
            'btn-icon-16': this.size === '16',
            'btn-icon-32': this.size === '24',
        };
    }
    render() {
        const baseButtonProps = {
            variant: this.variant,
            outline: this.outline,
            ghost: this.ghost,
            iconOnly: true,
            iconOval: false,
            selected: this.pressed,
            disabled: this.disabled || this.loading,
            icon: this.icon,
            iconSize: this.size,
            loading: this.loading,
            onClick: () => this.dispatchPressedChange(),
            type: 'button',
            ariaAttributes: {
                'aria-pressed': a11yBoolean(this.pressed),
            },
            extraClasses: Object.assign({ 'icon-button': true }, this.getIconSizeClass()),
        };
        console.log(baseButtonProps, this.disabled, this.loading);
        return (h(Host, { key: '86f8d6e28705fe03d3a918e8452f62b18fc1ee01', class: Object.assign(Object.assign({}, this.getIconSizeClass()), { disabled: this.disabled || this.loading }) }, h(BaseIconButton, Object.assign({ key: '5e4379a3bbb5fe48603b520a268d51b9703540f8' }, baseButtonProps))));
    }
    static get is() { return "ix-icon-toggle-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./icon-toggle-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["icon-toggle-button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonVariant",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "ButtonVariant": {
                            "location": "import",
                            "path": "../button/button",
                            "id": "src/components/button/button.tsx::ButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Button variant.\nImportant: Variant 'primary' can only be combined with either outline or ghost."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'secondary'"
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
                    "text": "Outline button"
                },
                "attribute": "outline",
                "reflect": false,
                "defaultValue": "false"
            },
            "ghost": {
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
                    "text": "Button with no background or outline"
                },
                "attribute": "ghost",
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
                    "text": "Icon name"
                },
                "attribute": "icon",
                "reflect": false
            },
            "pressed": {
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
                    "text": "Show button as pressed"
                },
                "attribute": "pressed",
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'24' | '16' | '12'",
                    "resolved": "\"12\" | \"16\" | \"24\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of icon in button"
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'24'"
            },
            "disabled": {
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
                    "text": "Disable the button"
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "loading": {
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
                    "text": "Loading button"
                },
                "attribute": "loading",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "pressedChange",
                "name": "pressedChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Pressed change event"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "variant",
                "methodName": "onVariantChange"
            }, {
                "propName": "ghost",
                "methodName": "onGhostChange"
            }, {
                "propName": "outline",
                "methodName": "onOutlineChange"
            }];
    }
}
//# sourceMappingURL=icon-toggle-button.js.map
