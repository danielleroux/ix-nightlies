/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { devices } from "@playwright/test";
import path from "path";
import defaultConfig from "./playwright.config";
/**
 * See https://playwright.dev/docs/test-configuration.
 */
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = Object.assign(Object.assign({}, defaultConfig), { testMatch: path.join(__dirname, 'src', 'components', '**', '*.ct.ts'), reporter: 'list', projects: [
        {
            name: `chromium`,
            use: Object.assign({}, devices['Desktop Chrome']),
        },
    ] });
export default config;
//# sourceMappingURL=playwright-ct.config.js.map
