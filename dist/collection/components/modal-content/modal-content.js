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
export class ModalContent {
    render() {
        return (h(Host, { key: 'a879639cc048dc4388ff5f324c6beaf928089480' }, h("slot", { key: 'b7d7d8afe947646464dd409bcc574cba40c9a1b3' })));
    }
    static get is() { return "ix-modal-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-content.css"]
        };
    }
}
//# sourceMappingURL=modal-content.js.map
