/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { MenuSettings } from "../../menu-settings/menu-settings";
function getItems(context) {
    return Array.from(context.el.querySelectorAll(context instanceof MenuSettings
        ? 'ix-menu-settings-item'
        : 'ix-menu-about-item'));
}
export function setTab(context, label) {
    context.activeTabLabel = label;
    context.items.forEach((i) => {
        i.style.display = 'none';
        if (i.label === context.activeTabLabel) {
            i.style.display = 'block';
        }
    });
}
export function initialize(context) {
    context.items = getItems(context);
    if (context.items.length) {
        setTab(context, context.activeTabLabel || context.items[0].label);
    }
    context.items.forEach((item) => {
        item.addEventListener('labelChange', (e) => {
            context.items = getItems(context);
            if (e.detail.oldLabel === context.activeTabLabel) {
                context.activeTabLabel = e.detail.newLabel;
            }
        });
    });
}
//# sourceMappingURL=menu-tabs-utils.js.map
