import { r as registerInstance, c as createEvent, h, H as Host } from './index-f18c5ad1.js';

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
        return (h(Host, { key: '963b59afed12d8bba0b4107da846b433bc451b1f' }, h("slot", { key: 'fbea143350cd9850db1526e19363f7d8632035af' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
};
MenuAboutItem.style = IxMenuAboutItemStyle0;

export { MenuAboutItem as ix_menu_about_item };

//# sourceMappingURL=ix-menu-about-item.entry.js.map