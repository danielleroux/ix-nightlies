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
        return (h(Host, { key: '80c2129a12f6f9e3791ef200fc023be50e462123' }, h("ix-spinner", { key: '219e4c39e89e9280794db9feea031cb92154cb15', variant: "primary" }), h("span", { key: '5f652d8ee2de0438f635938564264380a0ad7e0d', class: 'loading-text' }, h("slot", { key: 'c780d132e75994f7d12088e2e1d273cc02fc7de0' }))));
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
