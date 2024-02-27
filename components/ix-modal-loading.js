import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './spinner.js';

const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;

const ModalLoading = /*@__PURE__*/ proxyCustomElement(class ModalLoading extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '80c2129a12f6f9e3791ef200fc023be50e462123' }, h("ix-spinner", { key: '219e4c39e89e9280794db9feea031cb92154cb15', variant: "primary" }), h("span", { key: '5f652d8ee2de0438f635938564264380a0ad7e0d', class: 'loading-text' }, h("slot", { key: 'c780d132e75994f7d12088e2e1d273cc02fc7de0' }))));
    }
    static get style() { return IxModalLoadingStyle0; }
}, [1, "ix-modal-loading"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-modal-loading", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-modal-loading":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ModalLoading);
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxModalLoading = ModalLoading;
const defineCustomElement = defineCustomElement$1;

export { IxModalLoading, defineCustomElement };

//# sourceMappingURL=ix-modal-loading.js.map