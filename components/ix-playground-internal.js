import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const playgroundCss = ".sc-ix-playground-internal-h{display:block;position:relative;width:100vw;height:100vh;padding:0rem 0rem 0rem 0rem}";
const IxPlaygroundInternalStyle0 = playgroundCss;

const PlaygroundInternal = /*@__PURE__*/ proxyCustomElement(class PlaygroundInternal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return h(Host, { key: 'd1a5b02febd62dcc43ea13c0a531990ec5fe2156' });
    }
    static get style() { return IxPlaygroundInternalStyle0; }
}, [2, "ix-playground-internal"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-playground-internal"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-playground-internal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PlaygroundInternal);
            }
            break;
    } });
}

const IxPlaygroundInternal = PlaygroundInternal;
const defineCustomElement = defineCustomElement$1;

export { IxPlaygroundInternal, defineCustomElement };

//# sourceMappingURL=ix-playground-internal.js.map