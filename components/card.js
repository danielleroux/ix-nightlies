import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cardCss = ":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;align-self:flex-start;overflow:hidden;width:20rem;border:1px solid var(--ix-card-border-color, var(--theme-color-soft-bdr));border-radius:var(--theme-default-border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card-content{display:block;position:relative;flex-shrink:0;flex-grow:1;width:100%;height:calc(100% - 2rem);background-color:var(--ix-card-background, transparent);border-top-left-radius:var(--theme-default-border-radius);border-top-right-radius:var(--theme-default-border-radius)}:host .card-footer{display:flex;position:relative;width:100%}:host(.card-insight){--ix-card-background:transparent;--ix-card-border-color:var(--theme-color-soft-bdr)}:host(.card-notification){--ix-card-background:var(--theme-color-component-1)}:host(.card-alarm){--ix-card-background:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}:host(.card-critical){--ix-card-background:var(--theme-color-critical);color:var(--theme-color-critical--contrast)}:host(.card-warning){--ix-card-background:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}:host(.card-success){--ix-card-background:var(--theme-color-success);color:var(--theme-color-success--contrast)}:host(.card-info){--ix-card-background:var(--theme-color-info);color:var(--theme-color-info--contrast)}:host(.card-neutral){--ix-card-background:var(--theme-color-neutral);color:var(--theme-color-neutral--contrast)}:host(.card-primary){--ix-card-background:var(--theme-color-primary);color:var(--theme-color-neutral--contrast)}:host(:not(.card-insight)){--ix-card-border-color:transparent}:host(.card-insight:hover){--ix-card-background:var(--theme-color-ghost--hover)}:host(.card-notification:hover){--ix-card-background:var(--theme-color-component-1--hover)}:host(.card-alarm:hover){--ix-card-background:var(--theme-color-alarm--hover)}:host(.card-critical:hover){--ix-card-background:var(--theme-color-critical--hover)}:host(.card-warning:hover){--ix-card-background:var(--theme-color-warning--hover)}:host(.card-success:hover){--ix-card-background:var(--theme-color-success--hover)}:host(.card-info:hover){--ix-card-background:var(--theme-color-info--hover)}:host(.card-neutral:hover){--ix-card-background:var(--theme-color-neutral--hover)}:host(.card-primary:hover){--ix-card-background:var(--theme-color-primary--hover)}:host(.card-insight:active){--ix-card-background:var(--theme-color-ghost--active)}:host(.card-notification:active){--ix-card-background:var(--theme-color-component-1--active)}:host(.card-alarm:active){--ix-card-background:var(--theme-color-alarm--active)}:host(.card-critical:active){--ix-card-background:var(--theme-color-critical--active)}:host(.card-warning:active){--ix-card-background:var(--theme-color-warning--active)}:host(.card-success:active){--ix-card-background:var(--theme-color-success--active)}:host(.card-info:active){--ix-card-background:var(--theme-color-info--active)}:host(.card-neutral:active){--ix-card-background:var(--theme-color-neutral--active)}:host(.card-primary:active){--ix-card-background:var(--theme-color-primary--active)}:host(.selected){--ix-card-border-color:var(--theme-color-dynamic)}:host(.selected).card-insight{--ix-card-background:var(--theme-color-ghost--selected)}:host(.selected).card-notification{--ix-card-background:var(--theme-color-ghost--selected)}:host(.selected).card-alarm{--ix-card-background:var(--theme-color-alarm--active)}:host(.selected).card-critical{--ix-card-background:var(--theme-color-critical--active)}:host(.selected).card-warning{--ix-card-background:var(--theme-color-warning--active)}:host(.selected).card-success{--ix-card-background:var(--theme-color-success--active)}:host(.selected).card-info{--ix-card-background:var(--theme-color-info--active)}:host(.selected).card-neutral{--ix-card-background:var(--theme-color-neutral--active)}:host(.selected).card-primary{--ix-card-background:var(--theme-color-primary--active)}";
const IxCardStyle0 = cardCss;

const Card = /*@__PURE__*/ proxyCustomElement(class Card extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.variant = 'insight';
        this.selected = undefined;
    }
    render() {
        return (h(Host, { key: 'f91df8c114ec01e95ae0eba29c8acf3cacbdec25', class: {
                selected: this.selected,
                [`card-${this.variant}`]: true,
            } }, h("div", { key: '24c775b7ae7b2940df9e101b702b91a17a0f6749', class: "card-content" }, h("slot", { key: '57bfc8eb49985aae6aff8ea277475b2012ac8ba2' })), h("div", { key: '8eac7eefd8020827e0ebf38be231de2c7b934797', class: "card-footer" }, h("slot", { key: '207dc0b0ce6279ecb9dfda76e3d03a145a5ff168', name: "card-accordion" }))));
    }
    get hostElement() { return this; }
    static get style() { return IxCardStyle0; }
}, [1, "ix-card", {
        "variant": [1],
        "selected": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-card"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Card);
            }
            break;
    } });
}

export { Card as C, defineCustomElement as d };

//# sourceMappingURL=card.js.map