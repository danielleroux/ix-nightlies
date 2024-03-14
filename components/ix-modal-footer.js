import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const modalFooterCss = ":host{display:flex;padding:0.5rem;justify-content:flex-end;align-items:center;gap:0.5rem;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxModalFooterStyle0 = modalFooterCss;

const ModalFooter = /*@__PURE__*/ proxyCustomElement(class ModalFooter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'ca4b647d4a7c7e3b09a2970b69dc507dcb711f08' }, h("slot", { key: '188f082b6716d3af472413f240434c5a987471b7' })));
    }
    static get style() { return IxModalFooterStyle0; }
}, [1, "ix-modal-footer"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-modal-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-modal-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ModalFooter);
            }
            break;
    } });
}

const IxModalFooter = ModalFooter;
const defineCustomElement = defineCustomElement$1;

export { IxModalFooter, defineCustomElement };

//# sourceMappingURL=ix-modal-footer.js.map