/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { BaseIconButton } from "../icon-button/base-icon-button";
import { getFallbackLabelFromIconName } from "../utils/a11y";
export class IconButton {
    constructor() {
        this.a11yLabel = undefined;
        this.variant = 'secondary';
        this.outline = undefined;
        this.ghost = undefined;
        this.oval = undefined;
        this.icon = undefined;
        this.size = '24';
        this.color = undefined;
        this.iconColor = undefined;
        this.disabled = false;
        this.type = 'button';
        this.loading = false;
    }
    componentDidLoad() {
        if (this.type === 'submit') {
            const submitButton = document.createElement('button');
            submitButton.style.display = 'none';
            submitButton.type = 'submit';
            submitButton.tabIndex = -1;
            this.hostElement.appendChild(submitButton);
            this.submitButtonElement = submitButton;
        }
    }
    dispatchFormEvents() {
        if (this.type === 'submit' && this.submitButtonElement) {
            this.submitButtonElement.click();
        }
    }
    getIconSizeClass() {
        return {
            'btn-icon-12': this.size === '12',
            'btn-icon-16': this.size === '16',
            'btn-icon-32': this.size === '32' || this.size === '24' || !this.size,
        };
    }
    render() {
        var _a;
        const baseButtonProps = {
            ariaAttributes: {
                'aria-label': this.a11yLabel
                    ? this.a11yLabel
                    : getFallbackLabelFromIconName(this.icon),
            },
            variant: this.variant,
            outline: this.outline,
            ghost: this.ghost,
            iconOnly: true,
            iconOval: this.oval,
            selected: false,
            disabled: this.disabled || this.loading,
            icon: this.icon,
            iconColor: (_a = this.iconColor) !== null && _a !== void 0 ? _a : this.color,
            iconSize: this.size,
            loading: this.loading,
            onClick: () => this.dispatchFormEvents(),
            type: this.type,
            extraClasses: this.getIconSizeClass(),
        };
        return (h(Host, { key: '7da24896eae7dce5de64057e70c6d996681d60b7', class: Object.assign(Object.assign({}, this.getIconSizeClass()), { disabled: this.disabled || this.loading }) }, h(BaseIconButton, Object.assign({ key: '067f21e0afca8fb01ea374d60fe51560ec203228' }, baseButtonProps))));
    }
    static get is() { return "ix-icon-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["icon-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["icon-button.css"]
        };
    }
    static get properties() {
        return {
            "a11yLabel": {
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
                    "tags": [{
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "Accessibility label for the icon button\nWill be set as aria-label on the nested HTML button element"
                },
                "attribute": "a11y-label",
                "reflect": false
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconButtonVariant",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "IconButtonVariant": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/icon-button/icon-button.tsx",
                            "id": "src/components/icon-button/icon-button.tsx::IconButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variant of button"
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
                    "text": "Button outline"
                },
                "attribute": "outline",
                "reflect": false
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
                    "text": "Button invisible"
                },
                "attribute": "ghost",
                "reflect": false
            },
            "oval": {
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
                    "text": "Button in oval shape"
                },
                "attribute": "oval",
                "reflect": false
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
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'32' | '24' | '16' | '12'",
                    "resolved": "\"12\" | \"16\" | \"24\" | \"32\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "Only size 32 will be removed in 3.0.0"
                        }],
                    "text": "Size of icon in button"
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'24'"
            },
            "color": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "since 2.1.0 use `icon-color`"
                        }],
                    "text": "Color of icon in  button"
                },
                "attribute": "color",
                "reflect": false
            },
            "iconColor": {
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
                    "text": "Color of icon in  button"
                },
                "attribute": "icon-color",
                "reflect": false
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
                    "text": "Disabled"
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'button' | 'submit'",
                    "resolved": "\"button\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of the button"
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'button'"
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
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "Loading button"
                },
                "attribute": "loading",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=icon-button.js.map
