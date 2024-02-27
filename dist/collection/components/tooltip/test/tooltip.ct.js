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
    await mount(`
    <ix-tooltip for=".test">tooltip</ix-tooltip>
    <ix-button class="test">button</ix-button>
  `);
    const tooltip = page.locator('ix-tooltip');
    const button = page.locator('ix-button');
    await button.hover();
    await expect(tooltip).toHaveClass(/hydrated/);
    await expect(tooltip).toBeVisible();
});
test.describe('a11y', () => {
    test('closes on ESC', async ({ mount, page }) => {
        await mount(`
      <ix-tooltip for=".test">tooltip</ix-tooltip>
      <ix-button class="test"></ix-button>
    `);
        const button = page.locator('ix-button');
        await button.hover();
        page.keyboard.down('Escape');
        const tooltip = page.locator('ix-tooltip');
        await expect(tooltip).not.toBeVisible();
    });
});
//# sourceMappingURL=tooltip.ct.js.map
