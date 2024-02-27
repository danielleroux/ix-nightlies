import './animation-4a73b1c3.js';
import { b as showModal } from './modal-54740f80.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
async function showAppSwitch(config) {
    const modal = document.createElement('ix-application-switch-modal');
    modal.config = config;
    const result = await showModal({
        content: modal,
        size: '840',
        closeOnBackdropClick: true,
    });
    const appSwitchElement = result.htmlElement.querySelector('ix-application-switch-modal');
    return (updateAppSwitchConfig) => {
        appSwitchElement.config = updateAppSwitchConfig;
    };
}

export { showAppSwitch as s };

//# sourceMappingURL=index-76b9c8de.js.map