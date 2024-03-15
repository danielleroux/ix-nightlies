import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const menuAboutItemCss = ":host{display:block}";
const IxMenuAboutItemStyle0 = menuAboutItemCss;

const MenuAboutItem = /*@__PURE__*/ proxyCustomElement(class MenuAboutItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: '77050563a1570aa964f9e1d3c09508ad02959919' }, h("slot", { key: '8172f676de5753a6d27f5c4a7087da3566216c48' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
    static get style() { return IxMenuAboutItemStyle0; }
}, [1, "ix-menu-about-item", {
        "label": [513]
    }, undefined, {
        "label": ["watchLabel"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-menu-about-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-menu-about-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuAboutItem);
            }
            break;
    } });
}

const IxMenuAboutItem = MenuAboutItem;
const defineCustomElement = defineCustomElement$1;

export { IxMenuAboutItem, defineCustomElement };

//# sourceMappingURL=ix-menu-about-item.js.map