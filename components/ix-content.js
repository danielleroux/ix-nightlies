import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hasSlottedElements } from './shadow-dom.js';

const contentCss = ":host{display:flex;flex-direction:column;position:relative;padding:1.5rem 0rem 0.25rem 2rem;width:100%;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{flex-grow:1;overflow:auto;padding-right:1.5rem}:host .content-header.slotted{margin-bottom:1rem;padding-right:1.5rem}";
const IxContentStyle0 = contentCss;

const Content = /*@__PURE__*/ proxyCustomElement(class Content extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.isContentHeaderSlotted = false;
    }
    get contentHeaderSlot() {
        return this.hostElement.shadowRoot.querySelector('.content-header slot');
    }
    render() {
        return (h(Host, { key: 'ef69e746551d1799ac549a40d5bf993e20b947e8' }, h("div", { key: 'd5f0f5ef0dd67769ac59d4efa17e746bd2af3d8f', class: {
                'content-header': true,
                slotted: this.isContentHeaderSlotted,
            } }, h("slot", { key: '2a7a54ca49a946ba2043d48e93311095aa5a1696', name: "header", onSlotchange: () => {
                this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
            } })), h("div", { key: '43bfdf4ae39781a58ca3b6f4d9981841d37ff347', class: "content" }, h("slot", { key: '88d53f6d9c324182af7e8e0c341910ff5fd04cb1' }))));
    }
    get hostElement() { return this; }
    static get style() { return IxContentStyle0; }
}, [1, "ix-content", {
        "isContentHeaderSlotted": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Content);
            }
            break;
    } });
}

const IxContent = Content;
const defineCustomElement = defineCustomElement$1;

export { IxContent, defineCustomElement };

//# sourceMappingURL=ix-content.js.map