/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export class InputState {
    hasCategory() {
        return this.category !== undefined;
    }
    constructor(token, category) {
        this.token = token;
        this.category = category;
    }
}
//# sourceMappingURL=input-state.js.map
