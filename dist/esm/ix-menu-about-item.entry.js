import { r as registerInstance, c as createEvent, h, H as Host } from './index-5cd176b3.js';

const menuAboutItemCss = ":host{display:block}";
const IxMenuAboutItemStyle0 = menuAboutItemCss;

const MenuAboutItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.labelChange = createEvent(this, "labelChange", 7);
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
        return (h(Host, { key: '28d22dbd6e6eb8a175b008691199fd99b539a980' }, h("slot", { key: '2754c6731cb31d757dd620b6e42aa070cc1b96a0' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
};
MenuAboutItem.style = IxMenuAboutItemStyle0;

export { MenuAboutItem as ix_menu_about_item };

//# sourceMappingURL=ix-menu-about-item.entry.js.map