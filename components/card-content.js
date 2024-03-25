import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cardContentCss = ":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;gap:0.5rem;padding:1rem;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxCardContentStyle0 = cardContentCss;

const CardContent = /*@__PURE__*/ proxyCustomElement(class CardContent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '7351d9d0c2ac7e3bb3ff04f7327876f3c118eede' }, h("slot", { key: 'ae6747bb0d3204fcb78bb26d763a04a090424fc5' })));
    }
    static get style() { return IxCardContentStyle0; }
}, [1, "ix-card-content"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-card-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-card-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardContent);
            }
            break;
    } });
}

export { CardContent as C, defineCustomElement as d };

//# sourceMappingURL=card-content.js.map