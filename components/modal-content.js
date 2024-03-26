import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const modalContentCss = ":host{display:block;position:relative;overflow:auto;padding:0.25rem 0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxModalContentStyle0 = modalContentCss;

const ModalContent = /*@__PURE__*/ proxyCustomElement(class ModalContent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'e1593ee1d306bc61b5eb123cab15766b13674196' }, h("slot", { key: '75a6728212575e1a265f39ff1a9efdcffb580838' })));
    }
    static get style() { return IxModalContentStyle0; }
}, [1, "ix-modal-content"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-modal-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-modal-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ModalContent);
            }
            break;
    } });
}

export { ModalContent as M, defineCustomElement as d };

//# sourceMappingURL=modal-content.js.map