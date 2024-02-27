/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from "@stencil/core";
import { BaseButton } from "../button/base-button";
export function BaseIconButton(props) {
    return h(BaseButton, Object.assign({}, props, { type: "button" }));
}
//# sourceMappingURL=base-icon-button.js.map
