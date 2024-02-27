/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from "@playwright/test";
import { test } from "../../../tests/utils/test/index";
test('renders', async ({ mount, page }) => {
    await mount(`<ix-blind label="Example label">Some content</ix-blind>`);
    const blindElement = page.locator('ix-blind');
    await expect(blindElement).toHaveClass(/hydrated/);
});
//# sourceMappingURL=blind.ct.js.map
