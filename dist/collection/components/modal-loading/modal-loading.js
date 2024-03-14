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
        return (h(Host, { key: '2930b0986034ef25c350284fad67347ab5d13c4d' }, h("ix-spinner", { key: '5ac3bd8f71406e3adda36a3af14ab98cac5f5b79', variant: "primary" }), h("span", { key: 'af819b28bde6dc5d55cbe233e94381c34a5732c8', class: 'loading-text' }, h("slot", { key: 'cb174a3367f4195370aa45dfca1ca409bde1745d' }))));
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
