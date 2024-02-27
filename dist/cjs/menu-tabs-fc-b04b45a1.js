'use strict';

const index = require('./index-59fe9b91.js');

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function getItems(context) {
    return Array.from(context.el.querySelectorAll(context instanceof MenuSettings
        ? 'ix-menu-settings-item'
        : 'ix-menu-about-item'));
}
function setTab(context, label) {
    context.activeTabLabel = label;
    context.items.forEach((i) => {
        i.style.display = 'none';
        if (i.label === context.activeTabLabel) {
            i.style.display = 'block';
        }
    });
}
function initialize(context) {
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

const menuSettingsCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .settings-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .settings-header h2{color:var(--theme-nav-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}:host .settings-tabs{margin-bottom:1.5rem}";
const IxMenuSettingsStyle0 = menuSettingsCss;

const MenuSettings = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.close = index.createEvent(this, "close", 7);
        this.activeTabLabel = undefined;
        this.label = 'Settings';
        this.show = false;
        this.items = undefined;
    }
    updateTab(label) {
        setTab(this, label);
    }
    componentWillLoad() {
        initialize(this);
    }
    componentDidLoad() {
        index.forceUpdate(this.el);
    }
    render() {
        return index.h(MenuTabs, { key: 'a2691ce375c764745c7b364ac8d09e280869c86d', context: this });
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "activeTabLabel": ["updateTab"]
    }; }
};
MenuSettings.style = IxMenuSettingsStyle0;

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const getTabItems = (context) => {
    return context.items.map(({ label }) => {
        return (index.h("ix-tab-item", { selected: label === context.activeTabLabel, onClick: () => setTab(context, label) }, label));
    });
};
const MenuTabs = ({ context }) => (index.h(index.Host, { slot: context instanceof MenuSettings ? 'ix-menu-settings' : 'ix-menu-about', class: {
        show: context.show,
    } },
    index.h("div", { class: context instanceof MenuSettings ? 'settings-header' : 'about-header' },
        index.h("h2", { class: "text-h2" }, context.label),
        index.h("ix-icon-button", { ghost: true, size: "24", icon: 'close', onClick: (e) => context.close.emit({
                name: context instanceof MenuSettings
                    ? 'ix-menu-settings'
                    : 'ix-menu-about',
                nativeEvent: e,
            }) })),
    index.h("ix-tabs", null, getTabItems(context)),
    index.h("slot", null)));

exports.MenuSettings = MenuSettings;
exports.MenuTabs = MenuTabs;
exports.initialize = initialize;
exports.setTab = setTab;

//# sourceMappingURL=menu-tabs-fc-b04b45a1.js.map