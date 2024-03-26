/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { setTab } from "./menu-tabs-utils";
import { MenuSettings } from "../../menu-settings/menu-settings";
const getTabItems = (context) => {
    return context.items.map(({ label }) => {
        return (h("ix-tab-item", { selected: label === context.activeTabLabel, onClick: () => setTab(context, label) }, label));
    });
};
export const MenuTabs = ({ context }) => (h(Host, { slot: context instanceof MenuSettings ? 'ix-menu-settings' : 'ix-menu-about', class: {
        show: context.show,
    } }, h("div", { class: context instanceof MenuSettings ? 'settings-header' : 'about-header' }, h("h2", { class: "text-h2" }, context.label), h("ix-icon-button", { ghost: true, size: "24", icon: 'close', onClick: (e) => context.close.emit({
        name: context instanceof MenuSettings
            ? 'ix-menu-settings'
            : 'ix-menu-about',
        nativeEvent: e,
    }) })), h("ix-tabs", null, getTabItems(context)), h("slot", null)));
//# sourceMappingURL=menu-tabs-fc.js.map
