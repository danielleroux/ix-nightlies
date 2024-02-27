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
        return (h(Host, { key: '7d65ee586b3d78c89cc6f6a90689eaa1d98f4ec2' }, h("slot", { key: 'a2cb0a30400cf62e782a0fbb9e2926f4127ace4f' })));
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
