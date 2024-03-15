/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import { BaseButton } from "../button/base-button";
import { a11yBoolean } from "../utils/a11y";
/**
 * @since 2.0.0
 */
export class ToggleButton {
    constructor() {
        this.variant = 'secondary';
        this.outline = false;
        this.ghost = false;
        this.disabled = false;
        this.loading = false;
        this.icon = undefined;
        this.pressed = false;
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
    render() {
        const baseButtonProps = {
            variant: this.variant,
            outline: this.outline,
            ghost: this.ghost,
            iconOnly: false,
            iconOval: false,
            selected: this.pressed,
            disabled: this.disabled || this.loading,
            icon: this.icon,
            loading: this.loading,
            onClick: () => this.dispatchPressedChange(),
            type: 'button',
            ariaAttributes: {
                'aria-pressed': a11yBoolean(this.pressed),
            },
        };
        return (h(Host, { key: 'dfcef75c0ea69b53af7afc1df02915a869b6ef3b', class: {
                disabled: this.disabled || this.loading,
            } }, h(BaseButton, Object.assign({ key: 'ea0fbe743f0c3371fb71925be47fc566e5dee37d' }, baseButtonProps), h("slot", { key: '2e6d2c6169978fc567974220437f2a7aa05c62ac' }))));
    }
    static get is() { return "ix-toggle-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./toggle-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["toggle-button.css"]
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
//# sourceMappingURL=toggle-button.js.map
