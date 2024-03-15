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
        return (h(Host, { key: '0de6c5999b525136525b9319c4c77b609637e589' }, h("slot", { key: 'c9fb0334e733956a9d93d5599e8f13c84feed30a' })));
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