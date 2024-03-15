/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
/** @internal */
export class PlaygroundInternal {
    render() {
        return h(Host, { key: '2c7023915b61491ec4626431974c787778741459' });
    }
    static get is() { return "ix-playground-internal"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["playground.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["playground.css"]
        };
    }
}
//# sourceMappingURL=playground.js.map
