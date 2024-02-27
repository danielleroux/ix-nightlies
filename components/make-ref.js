/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function makeRef(currentChangedCallback) {
    let resolve = null;
    let currentPromise = new Promise((res) => (resolve = res));
    let current = null;
    const setRefFunction = (ref) => {
        current = ref;
        currentChangedCallback === null || currentChangedCallback === void 0 ? void 0 : currentChangedCallback(ref);
        resolve();
    };
    setRefFunction.current = current;
    setRefFunction.waitForCurrent = async () => {
        await currentPromise;
        return current;
    };
    return setRefFunction;
}

export { makeRef as m };

//# sourceMappingURL=make-ref.js.map