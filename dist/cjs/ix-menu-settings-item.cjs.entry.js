'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

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
        return (index.h(index.Host, { key: '0de6c5999b525136525b9319c4c77b609637e589' }, index.h("slot", { key: 'c9fb0334e733956a9d93d5599e8f13c84feed30a' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
};
MenuSettingsItem.style = IxMenuSettingsItemStyle0;

exports.ix_menu_settings_item = MenuSettingsItem;

//# sourceMappingURL=ix-menu-settings-item.cjs.entry.js.map