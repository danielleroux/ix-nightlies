'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const menuAboutItemCss = ":host{display:block}";
const IxMenuAboutItemStyle0 = menuAboutItemCss;

const MenuAboutItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.labelChange = index.createEvent(this, "labelChange", 7);
        this.label = undefined;
    }
    watchLabel(newValue, oldValue) {
        this.labelChange.emit({
            name: 'ix-menu-about-item',
            oldLabel: oldValue,
            newLabel: newValue,
        });
    }
    render() {
        return (index.h(index.Host, { key: '77050563a1570aa964f9e1d3c09508ad02959919' }, index.h("slot", { key: '8172f676de5753a6d27f5c4a7087da3566216c48' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
};
MenuAboutItem.style = IxMenuAboutItemStyle0;

exports.ix_menu_about_item = MenuAboutItem;

//# sourceMappingURL=ix-menu-about-item.cjs.entry.js.map