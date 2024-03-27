import { r as registerInstance, c as createEvent, h, H as Host } from './index-f18c5ad1.js';

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
        return (h(Host, { key: 'af7b6698864d0f6c2e893843787b07450f586259' }, h("slot", { key: '5ced9613e2513330bd9d8152656dedb7320bdd74' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
};
MenuSettingsItem.style = IxMenuSettingsItemStyle0;

export { MenuSettingsItem as ix_menu_settings_item };

//# sourceMappingURL=ix-menu-settings-item.entry.js.map