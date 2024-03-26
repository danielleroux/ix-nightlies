'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

const menuSettingsItemCss = ":host{display:block}";
const IxMenuSettingsItemStyle0 = menuSettingsItemCss;

const MenuSettingsItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.labelChange = index.createEvent(this, "labelChange", 7);
        this.label = undefined;
    }
    watchLabel(newValue, oldValue) {
        this.labelChange.emit({
            name: 'ix-menu-settings-item',
            oldLabel: oldValue,
            newLabel: newValue,
        });
    }
    render() {
        return (index.h(index.Host, { key: 'af7b6698864d0f6c2e893843787b07450f586259' }, index.h("slot", { key: '5ced9613e2513330bd9d8152656dedb7320bdd74' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
};
MenuSettingsItem.style = IxMenuSettingsItemStyle0;

exports.ix_menu_settings_item = MenuSettingsItem;

//# sourceMappingURL=ix-menu-settings-item.cjs.entry.js.map