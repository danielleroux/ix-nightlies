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
        return (index.h(index.Host, { key: '025ff327aab289aac772ff759c613f3e71d86e38' }, index.h("slot", { key: '73ce4cff7ca3fa8e7f1a496346c4e72d4d8543c1' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
};
MenuAboutItem.style = IxMenuAboutItemStyle0;

exports.ix_menu_about_item = MenuAboutItem;

//# sourceMappingURL=ix-menu-about-item.cjs.entry.js.map