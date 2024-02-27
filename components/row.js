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
        return (h(Host, { key: 'ae640297aa02dba7d4ca3f43f929ba9149889a3d' }, h("slot", { key: '38c1e1ee0c51c93c79e1f1a8e8c6a95e08760f24' })));
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