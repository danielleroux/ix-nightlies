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
 * @since 2.0.0
 */
export class LinkButton {
    constructor() {
        this.disabled = false;
        this.url = undefined;
        this.target = '_self';
    }
    render() {
        return (h(Host, { key: '0cffb1a2af16a85f88b3a5dbe992c65c2cfda95f' }, h("a", { key: '4cf598ef898f79f4700fda6a9fb0f05982573622', title: this.url, tabindex: "0", class: {
                'link-button': true,
                disabled: this.disabled,
            }, href: this.disabled ? undefined : this.url, target: this.target }, h("ix-icon", { key: '8c6df13ebd2d829dababe98951f9d724bceb8480', class: "icon", name: 'chevron-right-small', size: "16" }), h("div", { key: '3425681dbfb6b9b845a7add231f03d2824713580', class: {
                link: true,
                disabled: this.disabled,
            } }, h("slot", { key: '1c0178bd5c8827628b04ae6471a728b4e3504d10' })))));
    }
    static get is() { return "ix-link-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["link-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["link-button.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Disable the link button"
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "url": {
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
                    "text": "Url for the link button"
                },
                "attribute": "url",
                "reflect": false
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'_self' | '_blank' | '_parent' | '_top'",
                    "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies where to open the link\n\nhttps://www.w3schools.com/html/html_links.asp"
                },
                "attribute": "target",
                "reflect": false,
                "defaultValue": "'_self'"
            }
        };
    }
}
//# sourceMappingURL=link-button.js.map
