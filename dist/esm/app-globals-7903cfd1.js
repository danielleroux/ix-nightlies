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
    const ixIcons = await import('./index.es2017-45304832.js').then(function (n) { return n.i; });
    await ixIcons.defineCustomElements();
}
async function appGlobalScript () {
    await setupIcons();
}

const globalScripts = appGlobalScript;

export { globalScripts as g };

//# sourceMappingURL=app-globals-7903cfd1.js.map