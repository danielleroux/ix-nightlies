'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

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
        return (index.h(index.Host, { key: '963b59afed12d8bba0b4107da846b433bc451b1f' }, index.h("slot", { key: 'fbea143350cd9850db1526e19363f7d8632035af' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
};
MenuAboutItem.style = IxMenuAboutItemStyle0;

exports.ix_menu_about_item = MenuAboutItem;

//# sourceMappingURL=ix-menu-about-item.cjs.entry.js.map