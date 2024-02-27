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
    <ix-application>
      <ix-menu>
        <ix-menu-category label="Category label">
          <ix-menu-item>Test</ix-menu-item>
          <ix-menu-item>Test</ix-menu-item>
        </ix-menu-category>
      </ix-menu>
    </ix-application>
    `);
    const element = page.locator('ix-menu-category');
    await expect(element).toHaveClass('hydrated');
});
test('should collapse by click', async ({ mount, page }) => {
    await mount(`
  <ix-basic-navigation>
    <ix-menu>
      <ix-menu-category label="Category label">
        <ix-menu-item>Test</ix-menu-item>
        <ix-menu-item>Test 2</ix-menu-item>
      </ix-menu-category>
    </ix-menu>
  </ix-basic-navigation>
  `);
    const categoryItem = page.locator('ix-menu-category');
    const app = page.locator('ix-basic-navigation');
    const expandMenuButton = page.locator('ix-menu').locator('.burger-menu');
    await app.evaluate((menu) => (menu.breakpoints = ['md']));
    await categoryItem.click();
    const item = page.locator('ix-menu-item').getByText('Test 2');
    await item.evaluate((item) => (item.active = true));
    await expect(item).toHaveClass(/active/);
    await item.click();
    await expandMenuButton.click();
    await expect(categoryItem.locator('.menu-items')).toHaveClass(/menu-items--expanded/);
    await categoryItem.locator('.category-parent').click();
    await expect(categoryItem.locator('.menu-items')).not.toHaveClass(/menu-items--expanded/);
});
test('should expand items', async ({ mount, page }) => {
    await mount(`
  <ix-basic-navigation>
    <ix-menu>
      <ix-menu-category label="Category label">
        <ix-menu-item>Test Item 1</ix-menu-item>
        <ix-menu-item>Test Item 2</ix-menu-item>
      </ix-menu-category>
    </ix-menu>
  </ix-basic-navigation>
  `);
    const menu = page.locator('ix-menu');
    await page
        .locator('ix-basic-navigation')
        .evaluate((menu) => (menu.breakpoints = ['md']));
    const menuButton = menu.locator('ix-burger-menu');
    await menuButton.click();
    const menuCategory = page.locator('ix-menu-category');
    await menuCategory.click();
    await expect(menuCategory.locator('.menu-items')).toHaveClass('menu-items menu-items--expanded');
    const dropdown = menuCategory.locator('ix-dropdown');
    await expect(dropdown).not.toBeVisible();
});
test('should show items as dropdown', async ({ mount, page }) => {
    await mount(`
  <ix-basic-navigation>
    <ix-menu>
      <ix-menu-category label="Category label">
        <ix-menu-item>Test Item 1</ix-menu-item>
        <ix-menu-item>Test Item 2</ix-menu-item>
      </ix-menu-category>
    </ix-menu>
  </ix-basic-navigation>
  `);
    await page.waitForSelector('ix-menu');
    await page
        .locator('ix-basic-navigation')
        .evaluate((menu) => (menu.breakpoints = ['md']));
    const menuCategory = page.locator('ix-menu-category');
    await menuCategory.click();
    const dropdown = menuCategory.locator('ix-dropdown');
    await expect(dropdown).toBeVisible();
    await expect(menuCategory.locator('.menu-items')).toHaveClass('menu-items menu-items--collapsed');
    const dropdownHeader = dropdown.locator('ix-dropdown-item');
    await expect(dropdownHeader).toHaveText('Category label');
    const itemOne = page.locator('ix-menu-item').nth(0);
    const itemTwo = page.locator('ix-menu-item').nth(1);
    await expect(itemOne).toBeVisible();
    await expect(itemTwo).toBeVisible();
});
test('should collapse category after collapse menu', async ({ mount, page, }) => {
    await mount(`
    <ix-basic-navigation>
      <ix-menu>
        <ix-menu-category label="Category label">
          <ix-menu-item>Test Item 1</ix-menu-item>
          <ix-menu-item>Test Item 2</ix-menu-item>
        </ix-menu-category>
      </ix-menu>
    </ix-basic-navigation>
  `);
    await page.waitForSelector('ix-menu');
    const menu = page.locator('ix-menu');
    await page
        .locator('ix-basic-navigation')
        .evaluate((menu) => (menu.breakpoints = ['md']));
    const menuButton = menu.locator('ix-burger-menu');
    await menuButton.click();
    const menuCategory = page.locator('ix-menu-category');
    await menuCategory.click();
    await expect(menuCategory.locator('.menu-items')).toHaveClass('menu-items menu-items--expanded');
    await menuButton.click();
    await expect(menuCategory.locator('.menu-items')).toHaveClass('menu-items menu-items--collapsed');
});
test('should hide menu-items when collapsed', async ({ mount, page }) => {
    await mount(`
    <ix-basic-navigation>
      <ix-menu>
        <ix-menu-category label="Category label">
          <ix-menu-item>Test Item 1</ix-menu-item>
          <ix-menu-item>Test Item 2</ix-menu-item>
        </ix-menu-category>
      </ix-menu>
    </ix-basic-navigation>
  `);
    await page.waitForSelector('ix-menu');
    const menu = page.locator('ix-menu');
    await page
        .locator('ix-basic-navigation')
        .evaluate((menu) => (menu.breakpoints = ['md']));
    const menuButton = menu.locator('ix-burger-menu');
    await menuButton.click();
    const menuCategory = page.locator('ix-menu-category');
    await expect(menuCategory.locator('.menu-items')).toHaveClass('menu-items menu-items--collapsed');
    await expect(menuCategory.locator('.menu-items')).toBeHidden();
});
test('should open category when collapsed initially and active', async ({ mount, page, }) => {
    await mount(`
    <ix-basic-navigation>
      <ix-menu>
        <ix-menu-category label="Category label">
          <ix-menu-item active="true">Test Item 1</ix-menu-item>
          <ix-menu-item>Test Item 2</ix-menu-item>
        </ix-menu-category>
      </ix-menu>
    </ix-basic-navigation>
  `);
    await page.waitForSelector('ix-menu');
    const menu = page.locator('ix-menu');
    await page
        .locator('ix-basic-navigation')
        .evaluate((menu) => (menu.breakpoints = ['md']));
    const menuButton = menu.locator('ix-burger-menu');
    await menuButton.click();
    const menuCategory = page.locator('ix-menu-category');
    await expect(menuCategory.locator('.menu-items')).toHaveClass('menu-items menu-items--expanded');
    await menuCategory.locator('.category-parent').click();
    await expect(menuCategory.locator('.menu-items')).toHaveClass(/menu-items/);
    await menuButton.click();
    await menuButton.click();
    await expect(menuCategory.locator('.menu-items')).toHaveClass('menu-items menu-items--expanded');
});
//# sourceMappingURL=menu-category.ct.js.map
