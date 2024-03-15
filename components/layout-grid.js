import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const layoutGridCss = ":host{--ix-layout-grid-gutter:24px;display:block;flex:1 1 0%;width:100%;padding-left:calc(var(--ix-layout-grid-gutter) * 0.5);padding-right:calc(var(--ix-layout-grid-gutter) * 0.5)}:host(.no-margin){padding-left:0;padding-right:0}";
const IxLayoutGridStyle0 = layoutGridCss;

const LayoutGrid = /*@__PURE__*/ proxyCustomElement(class LayoutGrid extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.noMargin = false;
        this.gap = '24';
        this.columns = 12;
    }
    render() {
        return (h(Host, { key: 'd3f673eeface55a4cd571acda477794c8735c5e4', class: {
                'no-margin': this.noMargin,
            }, style: {
                '--ix-layout-grid-columns': `${this.columns}`,
                '--ix-layout-grid-gutter': `${this.gap}px`,
            } }, h("slot", { key: 'e70ea397035d14b0eefc589150d1106983599cec' })));
    }
    static get style() { return IxLayoutGridStyle0; }
}, [1, "ix-layout-grid", {
        "noMargin": [4, "no-margin"],
        "gap": [1],
        "columns": [2]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-layout-grid"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-layout-grid":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LayoutGrid);
            }
            break;
    } });
}

export { LayoutGrid as L, defineCustomElement as d };

//# sourceMappingURL=layout-grid.js.map