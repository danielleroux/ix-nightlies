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
        return (h(Host, { key: '69b094c49b4c40844709067d3d330cbd9e439a54' }, h("a", { key: 'd480bd3a4956928b36cacb1737b9f15bef4e6db4', title: this.url, tabindex: "0", class: {
                'link-button': true,
                disabled: this.disabled,
            }, href: this.disabled ? undefined : this.url, target: this.target }, h("ix-icon", { key: 'f38cdc216ef27ad121605adf41d4b9dfee0ad21c', class: "icon", name: 'chevron-right-small', size: "16" }), h("div", { key: 'bd9aecd23fbffe8af71f3c9648552781ac350df2', class: {
                link: true,
                disabled: this.disabled,
            } }, h("slot", { key: 'a122841a7a121b168198300e574df0f4319fd040' })))));
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
