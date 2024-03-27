import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './card.js';
import { d as defineCustomElement$3 } from './card-content.js';
import { d as defineCustomElement$2 } from './typography.js';

const actionCardCss = ":host{display:block;position:relative;min-width:13.375rem;width:13.375rem;height:7.5rem;min-height:7.5rem;cursor:pointer;margin:0.25rem 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-card{width:100%;height:100%}";
const IxActionCardStyle0 = actionCardCss;

const IxActionCard$1 = /*@__PURE__*/ proxyCustomElement(class IxActionCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.variant = 'insight';
        this.icon = undefined;
        this.heading = undefined;
        this.subheading = undefined;
        this.selected = false;
    }
    getSubheadingColor() {
        switch (this.variant) {
            case 'insight':
            case 'notification':
                return 'soft';
            default:
                return undefined;
        }
    }
    render() {
        return (h(Host, { key: 'f83abb076a856034694fa17014a31c511508ac84' }, h("ix-card", { key: 'e21ebb1bc1e27db30872b8c144001ea338c89ce2', selected: this.selected, variant: this.variant, class: 'pointer' }, h("ix-card-content", { key: '6074ffb241993674c9b636d2b43c8cf0b76d3437' }, this.icon ? (h("ix-icon", { class: 'icon', name: this.icon, size: "24" })) : null, h("div", { key: 'ee7c10340f5dd87d397f013de5879caddb37ca5d' }, this.heading ? (h("ix-typography", { format: "h4" }, this.heading)) : null, this.subheading ? (h("ix-typography", { format: "h5", color: this.getSubheadingColor() }, this.subheading)) : null, h("slot", { key: '5ba86a041964d413a2f7ff7d323905ba9880543e' }))))));
    }
    static get style() { return IxActionCardStyle0; }
}, [1, "ix-action-card", {
        "variant": [1],
        "icon": [1],
        "heading": [1],
        "subheading": [1],
        "selected": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-action-card", "ix-card", "ix-card-content", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-action-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IxActionCard$1);
            }
            break;
        case "ix-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-card-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxActionCard = IxActionCard$1;
const defineCustomElement = defineCustomElement$1;

export { IxActionCard, defineCustomElement };

//# sourceMappingURL=ix-action-card.js.map