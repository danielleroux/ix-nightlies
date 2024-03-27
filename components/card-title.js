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
        return (h(Host, { key: '481b7160e94af19ad4601024adfb1a18e3d74cc2' }, h("slot", { key: '5f8f8cd064f0c4d260edfdb10585a76b89b1e99f' }), h("div", { key: 'b6c56de2266fab7639edf607e550bd57589c86a3', class: "title-actions" }, h("slot", { key: '32dc2df2451bade00e79483db8594cecaceaf0b9', name: "title-actions" }))));
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