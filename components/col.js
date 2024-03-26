import { proxyCustomElement, HTMLElement, forceUpdate, h, Host } from '@stencil/core/internal/client';
import { m as matchBreakpoint } from './breakpoints.js';

const colCss = ":host{position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px;padding:calc(var(--ix-layout-grid-gutter) * 0.5)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxColStyle0 = colCss;

const Col = /*@__PURE__*/ proxyCustomElement(class Col extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.size = undefined;
        this.sizeSm = undefined;
        this.sizeMd = undefined;
        this.sizeLg = undefined;
    }
    onResize() {
        forceUpdate(this);
    }
    getSize(breakpoint) {
        if (breakpoint === '') {
            return this.size;
        }
        if (breakpoint === 'sm') {
            return this.sizeSm;
        }
        if (breakpoint === 'md') {
            return this.sizeMd;
        }
        if (breakpoint === 'lg') {
            return this.sizeLg;
        }
    }
    getColumnSize() {
        let size;
        Col.Breakpoints.forEach((breakpoint) => {
            const isMediaQueryActive = breakpoint !== '' ? matchBreakpoint(breakpoint) : true;
            if (!isMediaQueryActive) {
                return;
            }
            const currentSize = this.getSize(breakpoint);
            if (currentSize) {
                size = currentSize;
            }
        });
        return size;
    }
    getColumnSizeStyling() {
        const size = this.getColumnSize();
        if (!size) {
            return;
        }
        if (size === 'auto') {
            return {
                flex: '0 0 auto',
                width: 'auto',
                'max-width': 'auto',
            };
        }
        const colSize = `calc(calc(${size} / var(--ix-layout-grid-columns)) * 100%)`;
        return {
            flex: `0 0 ${colSize}`,
            width: `${colSize}`,
            'max-width': `${colSize}`,
        };
    }
    render() {
        return (h(Host, { key: 'c117230044b3e1de13480314392f64373a49f2dc', style: Object.assign({}, this.getColumnSizeStyling()) }, h("slot", { key: '872b553d86cd17f366150cc579f7caeff8eba9d1' })));
    }
    static get style() { return IxColStyle0; }
}, [1, "ix-col", {
        "size": [1],
        "sizeSm": [1, "size-sm"],
        "sizeMd": [1, "size-md"],
        "sizeLg": [1, "size-lg"]
    }, [[9, "resize", "onResize"]]]);
Col.Breakpoints = ['', 'sm', 'md', 'lg'];
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-col"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-col":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Col);
            }
            break;
    } });
}

export { Col as C, defineCustomElement as d };

//# sourceMappingURL=col.js.map