'use strict';

const index = require('./index-c6f0ac73.js');
const baseButton = require('./base-button-2f74b19d.js');

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function BaseIconButton(props) {
    return index.h(baseButton.BaseButton, Object.assign({}, props, { type: "button" }));
}

exports.BaseIconButton = BaseIconButton;

//# sourceMappingURL=base-icon-button-848c77f2.js.map