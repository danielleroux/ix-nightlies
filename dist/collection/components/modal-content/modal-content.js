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
        return (h(Host, { key: 'b36a65aae830091d79a14c6ff3eae20cb6a188ce' }, h("slot", { key: '9c2e696a169ec08f58a831086d29264426e03cc9' })));
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
