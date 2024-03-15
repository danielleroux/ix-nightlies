/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
export class SplitButton {
    constructor() {
        this.variant = 'primary';
        this.outline = false;
        this.ghost = false;
        this.label = undefined;
        this.icon = '';
        this.splitIcon = 'context-menu';
        this.disabled = false;
        this.placement = 'bottom-start';
        this.toggle = false;
    }
    linkTriggerRef() {
        if (this.triggerElement && this.dropdownElement) {
            this.dropdownElement.trigger = this.triggerElement;
        }
    }
    componentDidLoad() {
        this.linkTriggerRef();
    }
    render() {
        const buttonAttributes = {
            variant: this.variant,
            outline: this.outline,
            ghost: this.ghost,
            disabled: this.disabled,
            class: {
                'left-button-border': !this.outline,
            },
        };
        return (h(Host, { key: '72cef252b92343974f54030d735d9add93a1ce50' }, h("div", { key: 'e3b90f79ffc667a96f14ce5f32f91844acba8503', class: { 'btn-group': true, 'middle-gap': !this.outline } }, this.label ? (h("ix-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }), this.label)) : (h("ix-icon-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }))), h("ix-icon-button", Object.assign({ key: '02d9964f46c960e19045135e63212cba857c99df' }, buttonAttributes, { ref: (r) => (this.triggerElement = r), class: 'anchor', icon: this.splitIcon }))), h("ix-dropdown", { key: '62f7410479325fa1f20b08baef68d0b83f41e03a', ref: (r) => (this.dropdownElement = r) }, h("slot", { key: 'dbf07a44f0596567676905abc4bc156560ddcd1d' }))));
    }
    static get is() { return "ix-split-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["split-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["split-button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SplitButtonVariant",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "SplitButtonVariant": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/split-button/split-button.tsx",
                            "id": "src/components/split-button/split-button.tsx::SplitButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color variant of button"
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
                    "text": "Button outline variant"
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
                    "text": "Button invisible"
                },
                "attribute": "ghost",
                "reflect": false,
                "defaultValue": "false"
            },
            "label": {
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
                    "text": "Button label"
                },
                "attribute": "label",
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
                    "text": "Button icon"
                },
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "''"
            },
            "splitIcon": {
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
                    "text": "Icon of the button on the right"
                },
                "attribute": "split-icon",
                "reflect": false,
                "defaultValue": "'context-menu'"
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
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AlignedPlacement",
                    "resolved": "\"bottom-end\" | \"bottom-start\" | \"left-end\" | \"left-start\" | \"right-end\" | \"right-start\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "AlignedPlacement": {
                            "location": "import",
                            "path": "../dropdown/placement",
                            "id": "src/components/dropdown/placement.ts::AlignedPlacement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placement of the dropdown"
                },
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'bottom-start'"
            }
        };
    }
    static get states() {
        return {
            "toggle": {}
        };
    }
    static get events() {
        return [{
                "method": "buttonClick",
                "name": "buttonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Button clicked"
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=split-button.js.map
