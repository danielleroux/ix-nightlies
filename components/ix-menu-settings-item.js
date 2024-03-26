import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const menuSettingsItemCss = ":host{display:block}";
const IxMenuSettingsItemStyle0 = menuSettingsItemCss;

const MenuSettingsItem = /*@__PURE__*/ proxyCustomElement(class MenuSettingsItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return IxMenuSettingsItemStyle0; }
}, [1, "ix-menu-settings-item", {
        "label": [513]
    }, undefined, {
        "label": ["watchLabel"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-menu-settings-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-menu-settings-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuSettingsItem);
            }
            break;
    } });
}

const IxMenuSettingsItem = MenuSettingsItem;
const defineCustomElement = defineCustomElement$1;

export { IxMenuSettingsItem, defineCustomElement };

//# sourceMappingURL=ix-menu-settings-item.js.map