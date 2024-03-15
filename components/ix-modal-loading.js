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
        return (h(Host, { key: '10d32ee56938d12d5300cc8bccb401a4492ddb85' }, h("ix-spinner", { key: 'bfaed4c8523b6b59556c2898ecb4044c795b1bbd', variant: "primary" }), h("span", { key: '45f219a3c36c2cc67eda65d58a4564ca6163a2ef', class: 'loading-text' }, h("slot", { key: '364c7ff091ca2409a15dd65acebb268ac0971117' }))));
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