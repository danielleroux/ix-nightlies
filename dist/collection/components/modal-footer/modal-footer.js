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
        return (h(Host, { key: '62e35b423b00c0ad75954e735188dce705f7ff3e' }, h("slot", { key: '29a2a22875ae6197dab3c056329125dcefe70032' })));
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
