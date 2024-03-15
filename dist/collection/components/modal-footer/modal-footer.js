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
        return (h(Host, { key: '979bb97e3f19345c9fd001574570059a166c6dc0' }, h("slot", { key: 'c7c17474eacc35fc407f38b0ae9d9fac7871e228' })));
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
