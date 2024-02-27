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
        return (h(Host, { key: 'ae640297aa02dba7d4ca3f43f929ba9149889a3d' }, h("slot", { key: '38c1e1ee0c51c93c79e1f1a8e8c6a95e08760f24' })));
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
