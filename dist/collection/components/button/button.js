/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { BaseButton } from "./base-button";
export class Button {
    constructor() {
        this.variant = 'primary';
        this.outline = false;
        this.ghost = false;
        this.disabled = false;
        this.type = 'button';
        this.loading = false;
        this.icon = undefined;
        this.alignment = 'center';
        this.iconSize = '24';
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
    render() {
        const baseButtonProps = {
            variant: this.variant,
            outline: this.outline,
            ghost: this.ghost,
            iconOnly: false,
            iconOval: false,
            selected: false,
            disabled: this.disabled || this.loading,
            icon: this.icon,
            iconSize: this.iconSize,
            loading: this.loading,
            onClick: () => this.dispatchFormEvents(),
            type: this.type,
            alignment: this.alignment,
        };
        return (h(Host, { key: 'e4eef14d9c62b35f4b5893a894560ea5eeed658b', class: {
                disabled: this.disabled || this.loading,
            } }, h(BaseButton, Object.assign({ key: '6be43142d36a01f1303fed566d834cf163564dea' }, baseButtonProps), h("slot", { key: 'fc9b6d2d0bdaacfef05599cd5c5bc0e35380bb50' }))));
    }
    static get is() { return "ix-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["button.css"]
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
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/button/button.tsx",
                            "id": "src/components/button/button.tsx::ButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Button variant"
                },
                "attribute": "variant",
                "reflect": false,
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
            "alignment": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'center' | 'start'",
                    "resolved": "\"center\" | \"start\"",
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
                "attribute": "alignment",
                "reflect": false,
                "defaultValue": "'center'"
            },
            "iconSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'12' | '16' | '24'",
                    "resolved": "\"12\" | \"16\" | \"24\"",
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
                "attribute": "icon-size",
                "reflect": false,
                "defaultValue": "'24'"
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=button.js.map
