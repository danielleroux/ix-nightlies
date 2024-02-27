/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createContext } from "../context";
export const closestIxMenu = (element) => {
    const menuElement = element.closest('ix-menu');
    return menuElement;
};
export const ApplicationLayoutContext = createContext('application-layout-context', {
    hideHeader: false,
    host: null,
    sidebar: false,
});
//# sourceMappingURL=context.js.map
