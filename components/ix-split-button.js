import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './button.js';
import { d as defineCustomElement$4 } from './dropdown.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './spinner.js';

const splitButtonCss = ".btn-group ix-button:first-child .btn{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.btn-group ix-button:last-child .btn{border-top-left-radius:0px;border-bottom-left-radius:0px}.btn-group ix-button:not(:first-child):not(:last-child) .btn{border-radius:0px;border-right:0px}:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .btn-group{position:relative;display:inline-flex;vertical-align:middle;width:100%}:host .btn-group>ix-button:nth-child(1){width:calc(100% - 2rem)}:host .btn-group>ix-button:nth-child(2){width:2rem}:host .middle-gap{gap:0.125rem}:host .left-button-border{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}";
const IxSplitButtonStyle0 = splitButtonCss;

const SplitButton = /*@__PURE__*/ proxyCustomElement(class SplitButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.buttonClick = createEvent(this, "buttonClick", 7);
        this.variant = 'primary';
        this.outline = false;
        this.ghost = false;
        this.label = undefined;
        this.icon = '';
        this.splitIcon = 'context-menu';
        this.disabled = false;
        this.placement = 'bottom-start';
        this.toggle = false;
    }
    linkTriggerRef() {
        if (this.triggerElement && this.dropdownElement) {
            this.dropdownElement.trigger = this.triggerElement;
        }
    }
    componentDidLoad() {
        this.linkTriggerRef();
    }
    render() {
        const buttonAttributes = {
            variant: this.variant,
            outline: this.outline,
            ghost: this.ghost,
            disabled: this.disabled,
            class: {
                'left-button-border': !this.outline,
            },
        };
        return (h(Host, { key: '72cef252b92343974f54030d735d9add93a1ce50' }, h("div", { key: 'e3b90f79ffc667a96f14ce5f32f91844acba8503', class: { 'btn-group': true, 'middle-gap': !this.outline } }, this.label ? (h("ix-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }), this.label)) : (h("ix-icon-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }))), h("ix-icon-button", Object.assign({ key: '02d9964f46c960e19045135e63212cba857c99df' }, buttonAttributes, { ref: (r) => (this.triggerElement = r), class: 'anchor', icon: this.splitIcon }))), h("ix-dropdown", { key: '62f7410479325fa1f20b08baef68d0b83f41e03a', ref: (r) => (this.dropdownElement = r) }, h("slot", { key: 'dbf07a44f0596567676905abc4bc156560ddcd1d' }))));
    }
    get hostElement() { return this; }
    static get style() { return IxSplitButtonStyle0; }
}, [1, "ix-split-button", {
        "variant": [1],
        "outline": [4],
        "ghost": [4],
        "label": [1],
        "icon": [1],
        "splitIcon": [1, "split-icon"],
        "disabled": [4],
        "placement": [1],
        "toggle": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-split-button", "ix-button", "ix-dropdown", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-split-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SplitButton);
            }
            break;
        case "ix-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxSplitButton = SplitButton;
const defineCustomElement = defineCustomElement$1;

export { IxSplitButton, defineCustomElement };

//# sourceMappingURL=ix-split-button.js.map