/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class FlipTileContent {
    constructor() {
        this.contentVisible = false;
    }
    render() {
        return h(Host, { key: '861c12c524efa42bdcf52922898ceb4fd367ffb0' }, this.contentVisible ? h("slot", null) : null);
    }
    static get is() { return "ix-flip-tile-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["flip-tile-content.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["flip-tile-content.css"]
        };
    }
    static get properties() {
        return {
            "contentVisible": {
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
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": "Controls the visibility of the content"
                },
                "attribute": "content-visible",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=flip-tile-content.js.map
