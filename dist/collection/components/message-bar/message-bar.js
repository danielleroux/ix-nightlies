/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import anime from "animejs";
export class MessageBar {
    constructor() {
        this.type = 'info';
        this.dismissible = true;
        this.icon = undefined;
        this.color = undefined;
    }
    componentWillRender() {
        if (this.type === 'danger') {
            this.icon = 'error';
            this.color = 'color-alarm';
        }
        if (this.type === 'info') {
            this.icon = 'info';
            this.color = 'color-info';
        }
        if (this.type === 'warning') {
            this.icon = 'warning';
            this.color = 'color-warning';
        }
    }
    closeAlert(el) {
        anime({
            targets: el,
            duration: MessageBar.duration,
            opacity: [1, 0],
            easing: 'easeOutSine',
            complete: () => {
                el.classList.add('d-none');
            },
        });
        this.closedChange.emit();
    }
    render() {
        return (h(Host, { key: '610b30afda9530351f18514757fa02bb463f14fd' }, h("div", { key: 'f087c80eabe66fdc962c565fe3dd0130d5e80189', class: { 'message-container': true, [this.type]: true }, role: "alert", ref: (el) => (this.divElement = el) }, h("ix-icon", { key: '875022604fb5bb38cac7d8e46ca718e45ef9f686', color: this.color, name: this.icon }), h("div", { key: 'bca551cd194acac092778d7c3f86f46f6e6178ea', class: "message-content" }, h("slot", { key: '18051ca8aa62cb9fa4a4ca5e84fa8f06510f323d' })), this.dismissible ? (h("ix-icon-button", { icon: 'close', size: "24", ghost: true, onClick: () => {
                this.closeAlert(this.divElement);
            }, "data-testid": "close-btn" })) : (''))));
    }
    static get is() { return "ix-message-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["message-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["message-bar.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'danger' | 'warning' | 'info'",
                    "resolved": "\"danger\" | \"info\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the type of the alert."
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'info'"
            },
            "dismissible": {
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
                    "text": "If true, close button is enabled and alert can be dismissed by the user"
                },
                "attribute": "dismissible",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "icon": {},
            "color": {}
        };
    }
    static get events() {
        return [{
                "method": "closedChange",
                "name": "closedChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "An event emitted when the close button is clicked"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
MessageBar.duration = 300;
//# sourceMappingURL=message-bar.js.map
