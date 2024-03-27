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
        return (h(Host, { key: 'e1593ee1d306bc61b5eb123cab15766b13674196' }, h("slot", { key: '75a6728212575e1a265f39ff1a9efdcffb580838' })));
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
