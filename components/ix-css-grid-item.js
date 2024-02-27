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
        return (h(Host, { key: '2f048d51f62508a7f07bca1537a3d5b132a456ca', style: style }, h("slot", { key: '9e1ba33a62542da9789e19bfca6fa9c4a31ee692' })));
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