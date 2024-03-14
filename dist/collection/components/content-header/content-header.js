/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class ContentHeader {
    constructor() {
        this.variant = 'primary';
        this.headerTitle = undefined;
        this.headerSubtitle = undefined;
        this.hasBackButton = false;
    }
    render() {
        return (h(Host, { key: '9376b89cd7ea2f1a169e0b2fce2e2a7aa8e5f46a' }, this.hasBackButton ? (h("ix-icon-button", { class: 'backButton', variant: "primary", icon: 'arrow-left', ghost: true, onClick: () => this.backButtonClick.emit() })) : null, h("div", { key: '6141d3d548f39bff6176fcefd6149fe044792626', class: "titleGroup" }, h("ix-typography", { key: '5f97d37172b511b47b7c803beea7e99c15203757', variant: this.variant === 'secondary' ? 'large-single' : 'h2' }, this.headerTitle), this.headerSubtitle !== undefined ? (h("ix-typography", { variant: 'caption', color: 'soft', class: "subtitle" }, this.headerSubtitle)) : null), h("div", { key: '38152287e955d5b149ac6c4bd5df99d4920ca587', class: "buttons" }, h("slot", { key: '1d1bcc39278e91ff5da85460149ed76399ccbb1c' }))));
    }
    static get is() { return "ix-content-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["content-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["content-header.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ContentHeaderVariant",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "ContentHeaderVariant": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/content-header/content-header.tsx",
                            "id": "src/components/content-header/content-header.tsx::ContentHeaderVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variant of content header"
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "headerTitle": {
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
                    "text": "Title of Header"
                },
                "attribute": "header-title",
                "reflect": false
            },
            "headerSubtitle": {
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
                    "text": "Subtitle of Header"
                },
                "attribute": "header-subtitle",
                "reflect": false,
                "defaultValue": "undefined"
            },
            "hasBackButton": {
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
                    "text": "Display a back button"
                },
                "attribute": "has-back-button",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "backButtonClick",
                "name": "backButtonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when back button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=content-header.js.map
