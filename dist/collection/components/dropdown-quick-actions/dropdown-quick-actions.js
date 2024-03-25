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
 * @since 1.4.0
 */
export class DropdownQuickActions {
    render() {
        return (h(Host, { key: '63bf90e05df3c09c34592ed8760d4447ec3c7f4f' }, h("slot", { key: '2a078f550498c8e1a62f880f1079d445d131a26a' })));
    }
    static get is() { return "ix-dropdown-quick-actions"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown-quick-actions.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown-quick-actions.css"]
        };
    }
}
//# sourceMappingURL=dropdown-quick-actions.js.map
