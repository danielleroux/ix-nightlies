/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { hasDropdownItemWrapperImplemented, } from "../dropdown-controller";
describe('dropdown-controller', () => {
    it('check wrapper interface implementation', () => {
        const noWrapperElement = {};
        const wrapperElement = {
            getDropdownItemElement: () => { },
        };
        expect(hasDropdownItemWrapperImplemented(null)).toBeFalsy();
        expect(hasDropdownItemWrapperImplemented(noWrapperElement)).toBeFalsy();
        expect(hasDropdownItemWrapperImplemented(wrapperElement)).toBeTruthy();
    });
});
//# sourceMappingURL=dropdown-controller.spec.js.map
