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
export class ModalFooter {
    render() {
        return (h(Host, { key: '798888b92e40b6c7fe43eddfc94437d8fc8a49c8' }, h("slot", { key: '2da276a8b43f061d07f85953e1e54e144944267e' })));
    }
    static get is() { return "ix-modal-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-footer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-footer.css"]
        };
    }
}
//# sourceMappingURL=modal-footer.js.map
