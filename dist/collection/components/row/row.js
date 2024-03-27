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
        return (h(Host, { key: '2466651a95ad4ca4c2871ee034342efb743fe6f5' }, h("slot", { key: 'd1bfd21c5948cc460601e570566d2b321b13b7ba' })));
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
