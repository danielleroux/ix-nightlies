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
        return (h(Host, { key: '16ae09324b5ce5e94886e7738cfee131ed8c711c' }, h("slot", { key: 'fc064333e928f4b54a4ea9d3f0849ad27964a72d' })));
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