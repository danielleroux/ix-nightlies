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
        return (h(Host, { key: 'be5764812e9610f5799856b27aa4517469d9a24f' }, h("a", { key: '864f226d9eccd8385f926b37688326fba5fa890b', title: this.url, tabindex: "0", class: {
                'link-button': true,
                disabled: this.disabled,
            }, href: this.disabled ? undefined : this.url, target: this.target }, h("ix-icon", { key: 'fd946d77b3a0d4da995751311ba6346f82d1cc98', class: "icon", name: 'chevron-right-small', size: "16" }), h("div", { key: '35a530a3752f37229fa656de6ee20154d5ef4e03', class: {
                link: true,
                disabled: this.disabled,
            } }, h("slot", { key: 'f117649997d227f1b33b813a9c5a8aad03cd5789' })))));
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
