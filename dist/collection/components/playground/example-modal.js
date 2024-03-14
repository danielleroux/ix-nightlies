/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { closeModal, dismissModal } from "../utils/modal";
export class ModalExample {
    dismiss() {
        dismissModal(this.host);
    }
    close() {
        closeModal(this.host, 'Done!');
    }
    render() {
        return (h(Host, { key: '4ead947641c449826d2a0160304fdc3a7ac69817' }, h("div", { key: '299a7457a7b7c724252b47d5b6c9d2eb656efcf9' }, h("div", { key: 'f26421f60cafe11b55cf2a7af350cf54bd8e9c50', class: "modal-header" }, "Message headline", h("ix-icon-button", { key: 'c3bf94ce8624537cbe936aead4b435e9b40540f7', "data-close-button": true, ghost: true, icon: 'close', onClick: () => this.dismiss() })), h("div", { key: 'e1d62f7bd2a03375b3994a4aa3b9e23eee6ca1ab', class: "modal-body" }, "Message text lorem ipsum"), h("div", { key: '289425914048dd0d67abe4dc871f0ee86f8262fd', class: "modal-footer" }, h("ix-button", { key: '056fb4c0df84dca31cbc90280f4a216f2d9826fe', outline: true, onClick: () => this.dismiss() }, "Cancel"), h("ix-button", { key: '5be49f2996d268a1f19abd9f069f14acb02ab67d', onClick: () => this.close() }, "OK")))));
    }
    static get is() { return "ix-modal-example"; }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=example-modal.js.map
