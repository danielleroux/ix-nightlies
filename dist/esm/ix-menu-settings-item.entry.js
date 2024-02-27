import { r as registerInstance, c as createEvent, h, H as Host } from './index-5cd176b3.js';

const menuSettingsItemCss = ":host{display:block}";
const IxMenuSettingsItemStyle0 = menuSettingsItemCss;

const MenuSettingsItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.labelChange = createEvent(this, "labelChange", 7);
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
        return (h(Host, { key: '265bf24f492278e364dcdba664e6e919e60b745a' }, h("slot", { key: '2979e025b275b5d031f22f1bfb1f37272d624d1b' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
};
MenuSettingsItem.style = IxMenuSettingsItemStyle0;

export { MenuSettingsItem as ix_menu_settings_item };

//# sourceMappingURL=ix-menu-settings-item.entry.js.map