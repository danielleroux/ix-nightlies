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
        return (h(Host, { key: 'aa93d80e297d1f8c34dca11a6f17248e9120c48c' }, h("slot", { key: 'b70150e7f97c5a6559e5c39c6c19065971a1aca9' })));
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
