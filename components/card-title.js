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
        return (h(Host, { key: 'becda7afe606335391887cbf616a679a79ca23f8' }, h("slot", { key: '81d4200983e9288ae910d6e9bbf4ec8f107ed4b9' }), h("div", { key: 'e5894f17b9fdc84e70631bd03751d613f8e9ecf0', class: "title-actions" }, h("slot", { key: '30b969a1a99f9b411f6bfcee4ea5fcfc4c1f73b7', name: "title-actions" }))));
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