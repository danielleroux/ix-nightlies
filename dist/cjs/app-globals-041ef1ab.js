'use strict';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
async function setupIcons() {
    if (typeof window === 'undefined') {
        return;
    }
    const iconComponent = window.customElements.get('ix-icon');
    if (iconComponent) {
        return;
    }
    console.warn('ix-icon web component not loaded. Using local fallback version');
    const ixIcons = await Promise.resolve().then(function () { return require('./index.es2017-0db94b91.js'); }).then(function (n) { return n.index_es2017; });
    await ixIcons.defineCustomElements();
}
async function appGlobalScript () {
    await setupIcons();
}

const globalScripts = appGlobalScript;

exports.globalScripts = globalScripts;

//# sourceMappingURL=app-globals-041ef1ab.js.map