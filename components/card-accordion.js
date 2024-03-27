import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const cardAccordionCss = ":host{display:flex;position:relative;flex-direction:column;width:100%;transition:var(--theme-default-time) ease-in-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .expand-action{all:unset;display:flex;position:relative;-webkit-appearance:button;-moz-appearance:button;appearance:button;height:2.5rem;width:100%;background-color:var(--theme-color-component-1);align-items:center;justify-content:flex-start}:host .expand-action:not(.disabled):not(:disabled).hover,:host .expand-action:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .expand-action:not(.disabled):not(:disabled).active,:host .expand-action:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .expand-action:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .expand-action::before{content:\"\";position:absolute;width:100%;height:100%;background-color:var(--ix-card-background);z-index:-1}:host .expand-action:not(.show),:host .expand-action:not(.show)::before{border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}:host .expand-icon{margin-left:0.5rem;transition:var(--theme-default-time) transform ease-in-out}:host .expand-icon.show{transform:rotate(90deg)}:host .expand-content{display:grid;position:relative;grid-template-rows:0fr;transition:var(--theme-default-time) ease-in-out;width:100%;max-height:14.75rem;opacity:0;background-color:var(--theme-color-component-1)}:host .expand-content.show{grid-template-rows:14.75rem;opacity:1}:host .expand-content-inner{position:relative;height:100%;overflow:hidden}:host .expand-content.show .expand-content-body{display:none;overflow:hidden;color:var(--theme-color-std-text)}:host .expand-content.show .expand-content-body{display:block;overflow:auto;height:calc(100% - 1rem)}:host .expand-content-footer{display:block;position:relative;width:100%;height:1rem;margin-top:auto;margin-bottom:0px;background-color:var(--theme-color-component-1);border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}";
const IxCardAccordionStyle0 = cardAccordionCss;

let accordionControlId = 0;
const getAriaControlsId = (prefix = 'expand-content') => {
    return [prefix, accordionControlId++].join('-');
};
const CardAccordion = /*@__PURE__*/ proxyCustomElement(class CardAccordion extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.accordionExpand = createEvent(this, "accordionExpand", 7);
        this.collapse = false;
        this.expandContent = false;
    }
    onInitialExpandChange() {
        this.expandContent = !this.collapse;
    }
    get expandedContent() {
        return this.hostElement.shadowRoot.querySelector('.expand-content');
    }
    onExpandActionClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.expandContent = !this.expandContent;
        this.accordionExpand.emit({
            expand: this.expandContent,
            nativeEvent: event,
        });
        if (this.expandContent) {
            this.scrollExpandedContentIntoView();
        }
    }
    scrollExpandedContentIntoView() {
        setTimeout(() => {
            const rect = this.expandedContent.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                this.hostElement.shadowRoot
                    .querySelector('.expand-content')
                    .scrollIntoView(false);
            }
        }, 150);
    }
    componentWillLoad() {
        this.onInitialExpandChange();
    }
    render() {
        return (h(Host, { key: 'bc39054c9b50f4a1de3ebb720553d667f30e7420', slot: "card-accordion" }, h("button", { key: '39a8f4b977ca5d4f797a12f4d06a09e7a2909e80', tabIndex: 0, class: { 'expand-action': true, show: this.expandContent }, onClick: (event) => this.onExpandActionClick(event), role: "button", type: "button", "aria-expanded": this.expandContent, "aria-controls": getAriaControlsId() }, h("ix-icon", { key: '2d75d5fc08d4d79e1d70fef36440dba4ee5b62c9', name: 'chevron-right-small', class: {
                'expand-icon': true,
                show: this.expandContent,
            } })), h("div", { key: 'd2b662f006a69d90e2353922e377a1e83830de70', class: {
                'expand-content': true,
                show: this.expandContent,
            } }, h("div", { key: '7cedf82588afb804a626b1ba1c1cb9147c76306a', class: "expand-content-inner" }, h("div", { key: '04b85a19f6354fd725b634748e7ff7a5c58dd7cb', class: "expand-content-body" }, h("slot", { key: '732c33dbaa591432e14f74eb305b7e7c526d4e49' })), h("div", { key: '83291f55a13f8a8bebddb4d24c81cfc1a090f1f4', class: "expand-content-footer" })))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "collapse": ["onInitialExpandChange"]
    }; }
    static get style() { return IxCardAccordionStyle0; }
}, [1, "ix-card-accordion", {
        "collapse": [4],
        "expandContent": [32]
    }, undefined, {
        "collapse": ["onInitialExpandChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-card-accordion"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-card-accordion":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardAccordion);
            }
            break;
    } });
}

export { CardAccordion as C, defineCustomElement as d };

//# sourceMappingURL=card-accordion.js.map