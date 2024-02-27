import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const dividerCss = ":host{display:block;position:relative;width:100%;border-bottom:0.0625rem solid var(--theme-color-x-weak-bdr);margin:0.25rem 0px}";
const IxDividerStyle0 = dividerCss;

const Divider = /*@__PURE__*/ proxyCustomElement(class Divider extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return h(Host, { key: 'a12f752ef0fa741ad16068b425293e9ba39d21c8' });
    }
    static get style() { return IxDividerStyle0; }
}, [1, "ix-divider"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-divider"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-divider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Divider);
            }
            break;
    } });
}

export { Divider as D, defineCustomElement as d };

//# sourceMappingURL=divider.js.map