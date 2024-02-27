'use strict';

require('./animation-99234008.js');
const modal = require('./modal-828cb80a.js');

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
async function showAppSwitch(config) {
    const modal$1 = document.createElement('ix-application-switch-modal');
    modal$1.config = config;
    const result = await modal.showModal({
        content: modal$1,
        size: '840',
        closeOnBackdropClick: true,
    });
    const appSwitchElement = result.htmlElement.querySelector('ix-application-switch-modal');
    return (updateAppSwitchConfig) => {
        appSwitchElement.config = updateAppSwitchConfig;
    };
}

exports.showAppSwitch = showAppSwitch;

//# sourceMappingURL=index-c4629a8d.js.map