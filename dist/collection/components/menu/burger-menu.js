/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { getButtonClasses } from "../button/base-button";
import { a11yBoolean } from "../utils/a11y";
/**
 * @internal
 */
export class BurgerMenu {
    constructor() {
        this.ixAriaLabel = 'Expand';
        this.expanded = false;
        this.pinned = false;
    }
    render() {
        return (h(Host, { key: '4e7e34d73d70225b42dfdab7529786e9a86a1931', class: {
                expanded: this.expanded,
            } }, this.pinned ? (h("ix-icon-button", { icon: `double-chevron-${this.expanded ? 'left' : 'right'}`, ghost: true })) : (h("button", { class: Object.assign(Object.assign({}, getButtonClasses('secondary', false, true, true, false, false, false)), { 'burger-menu-button': true }), type: "button", "aria-label": this.ixAriaLabel ? this.ixAriaLabel : null, "aria-pressed": a11yBoolean(this.expanded) }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" }, h("rect", { class: "line line-1", x: "2", y: "5", width: "20", height: "2" }), h("rect", { class: "line line-2", x: "2", y: "11", width: "13", height: "2" }), h("rect", { class: "line line-3", x: "2", y: "17", width: "20", height: "2" }))))));
    }
    static get is() { return "ix-burger-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./burger-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["burger-menu.css"]
        };
    }
    static get properties() {
        return {
            "ixAriaLabel": {
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
                    "text": "Accessibility label for the burger menu button (MANDATORY)"
                },
                "attribute": "ix-aria-label",
                "reflect": false,
                "defaultValue": "'Expand'"
            },
            "expanded": {
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
                    "text": "Does burger menu button display the expanded or the not expanded state"
                },
                "attribute": "expanded",
                "reflect": true,
                "defaultValue": "false"
            },
            "pinned": {
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
                    "text": "Display as pinned"
                },
                "attribute": "pinned",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=burger-menu.js.map
