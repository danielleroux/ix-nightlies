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
        return (h(Host, { key: '8301fd495bb79e5a2350d18d324bf381250fb801', class: {
                'no-margin': this.noMargin,
            }, style: {
                '--ix-layout-grid-columns': `${this.columns}`,
                '--ix-layout-grid-gutter': `${this.gap}px`,
            } }, h("slot", { key: '618fc9cad0e01b5bd7ec657a22da1df1450e721c' })));
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