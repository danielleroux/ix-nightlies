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
        return (h(Host, { key: '4276b052d998fa436597a67bc7df4b5f4dac79e7' }, h("slot", { key: 'fe99c816c933c10d45fdb93acfadf23938ffa1ae' })));
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
