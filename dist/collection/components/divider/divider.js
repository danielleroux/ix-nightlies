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
export class Divider {
    render() {
        return h(Host, { key: '77aba5256230ceae62d44788f8b3c5e882fe5e80' });
    }
    static get is() { return "ix-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["divider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["divider.css"]
        };
    }
}
//# sourceMappingURL=divider.js.map
