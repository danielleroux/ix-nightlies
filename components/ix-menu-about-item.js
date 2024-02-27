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
        return (h(Host, { key: '28d22dbd6e6eb8a175b008691199fd99b539a980' }, h("slot", { key: '2754c6731cb31d757dd620b6e42aa070cc1b96a0' })));
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