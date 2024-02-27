import { h } from '@stencil/core/internal/client';
import { B as BaseButton } from './base-button.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function BaseIconButton(props) {
    return h(BaseButton, Object.assign({}, props, { type: "button" }));
}

export { BaseIconButton as B };

//# sourceMappingURL=base-icon-button.js.map