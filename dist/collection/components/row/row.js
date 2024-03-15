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
export class Row {
    render() {
        return (h(Host, { key: '2770cfaea562d4645313f6a45760f6a815008845' }, h("slot", { key: '6eeb8750c92b167909e7f0031decf80aef40662c' })));
    }
    static get is() { return "ix-row"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["row.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["row.css"]
        };
    }
}
//# sourceMappingURL=row.js.map
