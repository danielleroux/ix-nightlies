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
 * @internal
 */
export class ModalLoading {
    render() {
        return (h(Host, { key: '10d32ee56938d12d5300cc8bccb401a4492ddb85' }, h("ix-spinner", { key: 'bfaed4c8523b6b59556c2898ecb4044c795b1bbd', variant: "primary" }), h("span", { key: '45f219a3c36c2cc67eda65d58a4564ca6163a2ef', class: 'loading-text' }, h("slot", { key: '364c7ff091ca2409a15dd65acebb268ac0971117' }))));
    }
    static get is() { return "ix-modal-loading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-loading.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-loading.css"]
        };
    }
}
//# sourceMappingURL=modal-loading.js.map
