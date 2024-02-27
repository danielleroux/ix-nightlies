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
 * @since 1.3.0
 */
export class DropdownButton {
    constructor() {
        this.variant = 'primary';
        this.outline = false;
        this.ghost = false;
        this.disabled = false;
        this.label = undefined;
        this.icon = undefined;
        this.closeBehavior = 'both';
        this.placement = undefined;
        this.dropdownAnchor = undefined;
    }
    getTriangle() {
        return (h("div", { class: {
                triangle: true,
                hide: this.label !== '',
                primary: this.variant === 'primary',
                secondary: this.variant === 'secondary',
                ghost: this.ghost,
                outline: this.outline,
                disabled: this.disabled,
            } }));
    }
    render() {
        return (h(Host, { key: '8930487c4b37d245f7fb9828c5028136e50ac81b', class: {
                disabled: this.disabled,
            }, ref: (ref) => {
                this.dropdownAnchor = ref;
            } }, h("div", { key: 'ea5caa3aac82f89ece0f569345f10b8afe995e44', class: "dropdown-button" }, this.label ? (h("ix-button", { variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled, alignment: "start" }, h("div", { class: 'content' }, this.icon ? (h("ix-icon", { name: this.icon, size: "24", class: 'dropdown-icon' })) : null, h("div", { class: 'button-label' }, this.label), h("ix-icon", { name: 'chevron-down-small', size: "24" })))) : (h("div", null, h("ix-icon-button", { icon: this.icon, variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled }), this.getTriangle()))), h("ix-dropdown", { key: '744ebec47c4658921d5a57f0165f6a7c95ed32e8', class: "dropdown", trigger: this.dropdownAnchor, placement: this.placement, closeBehavior: this.closeBehavior }, h("slot", { key: '438133ed750034c6a94cab0921c06cdf74c7b79e' }))));
    }
    static get is() { return "ix-dropdown-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown-button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DropdownButtonVariant",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "DropdownButtonVariant": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/dropdown-button/dropdown-button.tsx",
                            "id": "src/components/dropdown-button/dropdown-button.tsx::DropdownButtonVariant"
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
                    "text": "Disable button"
                },
                "attribute": "disabled",
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
                    "text": "Set label"
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
                "reflect": false
            },
            "closeBehavior": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "'inside' | 'outside' | 'both' | boolean",
                    "resolved": "\"both\" | \"inside\" | \"outside\" | boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown."
                },
                "attribute": "close-behavior",
                "reflect": false,
                "defaultValue": "'both'"
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
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "Placement of the dropdown"
                },
                "attribute": "placement",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "dropdownAnchor": {}
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=dropdown-button.js.map
