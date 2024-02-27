/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class DefaultFrameworkDelegate {
    async attachView(view, config) {
        var _a;
        const attachToElement = (_a = config === null || config === void 0 ? void 0 : config.parentElement) !== null && _a !== void 0 ? _a : document.body;
        attachToElement.appendChild(view);
        return view;
    }
    async removeView(view) {
        view.remove();
    }
}
const coreDelegate = new DefaultFrameworkDelegate();
let currentDelegate = coreDelegate;
export function registerFrameworkDelegate(delegate) {
    currentDelegate = delegate;
}
export const resolveDelegate = () => {
    return currentDelegate;
};
export const getCoreDelegate = () => coreDelegate;
//# sourceMappingURL=delegate.js.map
