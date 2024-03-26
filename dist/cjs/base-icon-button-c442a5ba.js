'use strict';

const index = require('./index-59fe9b91.js');
const baseButton = require('./base-button-03d587f5.js');

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

//# sourceMappingURL=base-icon-button-c442a5ba.js.map