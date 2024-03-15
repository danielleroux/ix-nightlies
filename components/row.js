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
        return (h(Host, { key: '2770cfaea562d4645313f6a45760f6a815008845' }, h("slot", { key: '6eeb8750c92b167909e7f0031decf80aef40662c' })));
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