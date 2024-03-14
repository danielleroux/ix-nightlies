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
        return (h(Host, { key: '2930b0986034ef25c350284fad67347ab5d13c4d' }, h("ix-spinner", { key: '5ac3bd8f71406e3adda36a3af14ab98cac5f5b79', variant: "primary" }), h("span", { key: 'af819b28bde6dc5d55cbe233e94381c34a5732c8', class: 'loading-text' }, h("slot", { key: 'cb174a3367f4195370aa45dfca1ca409bde1745d' }))));
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