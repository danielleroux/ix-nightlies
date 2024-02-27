import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cardTitleCss = ":host{display:flex;position:relative;flex-direction:row;align-items:center;margin-top:0.25rem;margin-bottom:0.5rem;gap:1rem;width:100%}:host .title-actions{display:flex;position:relative;flex-direction:row;gap:0.25rem;margin-left:auto;margin-right:0px}";
const IxCardTitleStyle0 = cardTitleCss;

const CardHeader = /*@__PURE__*/ proxyCustomElement(class CardHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '0d6fb3a5e4d91a6ca36e670dd6840a430fd5bf80' }, h("slot", { key: '18f10b373eace5c4cf7102a8a5eca93402f67884' }), h("div", { key: '19bacf432aef00963c20c3f54abe458717df03c8', class: "title-actions" }, h("slot", { key: 'bd52f42b05e873163be38840453d9564e17b03a9', name: "title-actions" }))));
    }
    static get style() { return IxCardTitleStyle0; }
}, [1, "ix-card-title"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-card-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-card-title":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardHeader);
            }
            break;
    } });
}

export { CardHeader as C, defineCustomElement as d };

//# sourceMappingURL=card-title.js.map