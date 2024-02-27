import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const dateTimeCardCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:0 0 2px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 12px 18px 0 rgba(0, 0, 0, 0.1);border-radius:4px}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card .header{padding:1rem;flex:0 1 auto}:host .card .separator{border:1px solid var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 0.75rem 0.75rem 0.75rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}";
const IxDateTimeCardStyle0 = dateTimeCardCss;

const DateTimeCard = /*@__PURE__*/ proxyCustomElement(class DateTimeCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.standaloneAppearance = undefined;
        this.individual = true;
        this.corners = 'rounded';
    }
    cardClasses() {
        return {
            card: true,
            standaloneAppearance: this.standaloneAppearance !== undefined
                ? this.standaloneAppearance
                : this.individual,
            rounded: this.corners === 'rounded',
            left: this.corners === 'left',
            right: this.corners === 'right',
        };
    }
    render() {
        return (h(Host, { key: 'be249cc33523ab05fcea91c285a828d42803530c' }, h("div", { key: '3a4389a7bf5e5ec46622ddae68a14d121a1cad97', class: this.cardClasses() }, h("div", { key: '711acb2cd8a3a78046bc800e7c6ead60a0ad1b1f', class: "header" }, h("slot", { key: '72dd5f1b4c27869449729395a2dd9fe73b81d2b8', name: "header" })), h("div", { key: 'cc763fd99e776b0e8fa4b5615d92c51a556e0ee8', class: "separator" }), h("div", { key: '3654550d4f9fa01bbd79d0c8666116ed645ae495', class: "content" }, h("slot", { key: 'b2e03f699d22bedc7a586ec2f1be3bce3497d82f' })))));
    }
    static get style() { return IxDateTimeCardStyle0; }
}, [1, "ix-date-time-card", {
        "standaloneAppearance": [8, "standalone-appearance"],
        "individual": [4],
        "corners": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-date-time-card"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-date-time-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DateTimeCard);
            }
            break;
    } });
}

export { DateTimeCard as D, defineCustomElement as d };

//# sourceMappingURL=date-time-card.js.map