import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cssGridItemCss = ":host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}";
const IxCssGridItemStyle0 = cssGridItemCss;

const CssGridItem = /*@__PURE__*/ proxyCustomElement(class CssGridItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.itemName = undefined;
    }
    render() {
        const style = {};
        style['grid-area'] = this.itemName;
        return (h(Host, { key: '062f950b23bd5e5e943008f95b654cf629532a90', style: style }, h("slot", { key: '1b0e07eeda37b949637dddcf53510a9760ff2ede' })));
    }
    static get style() { return IxCssGridItemStyle0; }
}, [1, "ix-css-grid-item", {
        "itemName": [1, "item-name"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-css-grid-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-css-grid-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CssGridItem);
            }
            break;
    } });
}

const IxCssGridItem = CssGridItem;
const defineCustomElement = defineCustomElement$1;

export { IxCssGridItem, defineCustomElement };

//# sourceMappingURL=ix-css-grid-item.js.map