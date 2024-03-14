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
        return (h(Host, { key: 'aa93d80e297d1f8c34dca11a6f17248e9120c48c' }, h("slot", { key: 'b70150e7f97c5a6559e5c39c6c19065971a1aca9' })));
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