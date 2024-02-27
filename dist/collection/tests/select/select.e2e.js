/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from "@playwright/test";
import { regressionTest } from "../utils/test/index";
regressionTest.describe('select', () => {
    regressionTest('basic', async ({ page }) => {
        await page.goto('select/basic');
        await page.locator('ix-select').locator('[data-select-dropdown]').click();
        await page.waitForSelector('.dropdown-menu.show');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('editable', async ({ page }) => {
        await page.goto('select/editable');
        await page.locator('ix-select').locator('[data-select-dropdown]').click();
        await page.waitForSelector('.dropdown-menu.show');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('mode-multiple', async ({ page }) => {
        await page.goto('select/mode-multiple');
        await page.locator('ix-select').locator('[data-select-dropdown]').click();
        await page.waitForSelector('.dropdown-menu.show');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('mode-multiple-overflow', async ({ page }) => {
        await page.goto('select/mode-multiple-overflow');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('mode-multiple-overflow scroll down', async ({ page }) => {
        await page.goto('select/mode-multiple-overflow');
        const inputHandle = await page.waitForSelector('div.chips');
        await page.type('[data-testid="input"]', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
        page.evaluate((menuElement) => {
            menuElement.scrollTop = 9999;
            menuElement.classList.add('__SCROLLED__');
        }, inputHandle);
        await page.waitForSelector('div.chips.__SCROLLED__');
        await page.locator('[data-testid="input"]').blur();
        await page.waitForTimeout(500);
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('overflow', async ({ page }) => {
        await page.goto('select/overflow');
        await page.locator('ix-select').locator('[data-select-dropdown]').click();
        await page.waitForSelector('.dropdown-menu.show');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('autoplacement', async ({ page }) => {
        await page.goto('select/autoplacement');
        await page.locator('ix-select').locator('[data-select-dropdown]').click();
        await page.waitForSelector('.dropdown-menu.show');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('allow-clear', async ({ page }) => {
        await page.goto('select/allow-clear');
        await page.locator('ix-select').locator('[data-select-dropdown]').click();
        await page.waitForSelector('.dropdown-menu.show');
        await page.locator('text=Item 2').first().click();
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('list-header-hide', async ({ page }) => {
        await page.goto('select/list-header-hide');
        await page.locator('ix-select').locator('[data-select-dropdown]').click();
        await page.waitForSelector('.dropdown-menu.show');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('readonly', async ({ page }) => {
        await page.goto('select/readonly');
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('readonly select Index', async ({ page }) => {
        await page.goto('select/readonly');
        const element = page.locator('ix-select');
        await element.evaluate((el) => (el.value = ['1']));
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
    regressionTest('readonly select multiple index', async ({ page }) => {
        await page.goto('select/readonly');
        const element = page.locator('ix-select');
        await element.evaluate((el) => {
            el.mode = 'multiple';
            el.value = ['1', '2'];
        });
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
});
//# sourceMappingURL=select.e2e.js.map
