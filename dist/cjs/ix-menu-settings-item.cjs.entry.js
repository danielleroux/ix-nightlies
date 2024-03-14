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
        return (index.h(index.Host, { key: '16ae09324b5ce5e94886e7738cfee131ed8c711c' }, index.h("slot", { key: 'fc064333e928f4b54a4ea9d3f0849ad27964a72d' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
};
MenuSettingsItem.style = IxMenuSettingsItemStyle0;

exports.ix_menu_settings_item = MenuSettingsItem;

//# sourceMappingURL=ix-menu-settings-item.cjs.entry.js.map