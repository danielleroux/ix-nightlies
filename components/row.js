import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const rowCss = ":host{display:flex;flex-wrap:wrap}:host(:not(:first-of-type)){margin-block-start:var(--ix-layout-grid-row-margin, 0)}";
const IxRowStyle0 = rowCss;

const Row = /*@__PURE__*/ proxyCustomElement(class Row extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '2466651a95ad4ca4c2871ee034342efb743fe6f5' }, h("slot", { key: 'd1bfd21c5948cc460601e570566d2b321b13b7ba' })));
    }
    static get style() { return IxRowStyle0; }
}, [1, "ix-row"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-row"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Row);
            }
            break;
    } });
}

export { Row as R, defineCustomElement as d };

//# sourceMappingURL=row.js.map