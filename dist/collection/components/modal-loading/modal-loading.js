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
        return (h(Host, { key: '9333078e1c22a3307abb022ca8cf761667ce9d95' }, h("ix-spinner", { key: '895d205873c13dfa9257627094b67a9bfb40e04a', variant: "primary" }), h("span", { key: '9c84db0939e4f9fbf359425251103ce9ba2cd968', class: 'loading-text' }, h("slot", { key: 'b2fa68d8d6ab862b88cf7deadc4249c2775fd6e6' }))));
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
