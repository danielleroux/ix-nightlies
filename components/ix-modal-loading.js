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
        return (h(Host, { key: '9333078e1c22a3307abb022ca8cf761667ce9d95' }, h("ix-spinner", { key: '895d205873c13dfa9257627094b67a9bfb40e04a', variant: "primary" }), h("span", { key: '9c84db0939e4f9fbf359425251103ce9ba2cd968', class: 'loading-text' }, h("slot", { key: 'b2fa68d8d6ab862b88cf7deadc4249c2775fd6e6' }))));
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