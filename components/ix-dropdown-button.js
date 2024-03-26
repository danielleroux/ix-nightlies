import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './button.js';
import { d as defineCustomElement$4 } from './dropdown.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './spinner.js';

const dropdownButtonCss = ":host{display:inline-block;position:relative;height:2rem;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .hide{display:none}:host .dropdown-button{display:block;position:relative;width:100%;height:100%}:host .dropdown-button>ix-button{width:100%;height:100%}:host .dropdown-button .button-label{margin-right:auto;min-width:0px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .dropdown-button .dropdown-icon{margin-right:0.25rem}:host .triangle{position:absolute;margin-inline-start:1.5625rem;margin-block-start:-0.4375rem;border-right:0 solid transparent;border-left:4px solid transparent;border-top:0 solid transparent;border-bottom:4px solid;color:var(--theme-btn-primary--color)}:host .triangle.primary.ghost{color:var(--theme-btn-invisible-primary--color)}:host .triangle.primary.outline{color:var(--theme-btn-outline-primary--color)}:host .triangle.primary.ghost.disabled{color:var(--theme-btn-invisible-primary--color--disabled)}:host .triangle.primary.outline.disabled{color:var(--theme-btn-outline-primary--color--disabled)}:host .triangle.primary.disabled{color:var(--theme-btn-primary--color--disabled)}:host .triangle.secondary.ghost{color:var(--theme-btn-invisible-secondary--color)}:host .triangle.secondary.outline{color:var(--theme-btn-outline-secondary--color)}:host .triangle.secondary.ghost.disabled{color:var(--theme-btn-invisible-secondary--color--disabled)}:host .triangle.secondary.outline.disabled{color:var(--theme-btn-outline-secondary--color--disabled)}:host .triangle.secondary.disabled{color:var(--theme-btn-secondary--color--disabled)}:host .content{display:flex;align-items:center}:host(.disabled){pointer-events:none}";
const IxDropdownButtonStyle0 = dropdownButtonCss;

const DropdownButton = /*@__PURE__*/ proxyCustomElement(class DropdownButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.variant = 'primary';
        this.outline = false;
        this.ghost = false;
        this.disabled = false;
        this.label = undefined;
        this.icon = undefined;
        this.closeBehavior = 'both';
        this.placement = undefined;
        this.dropdownAnchor = undefined;
    }
    getTriangle() {
        return (h("div", { class: {
                triangle: true,
                hide: this.label !== '',
                primary: this.variant === 'primary',
                secondary: this.variant === 'secondary',
                ghost: this.ghost,
                outline: this.outline,
                disabled: this.disabled,
            } }));
    }
    render() {
        return (h(Host, { key: '4a18eaa51a9defa9a50aa2d4008176640d94fd5a', class: {
                disabled: this.disabled,
            }, ref: (ref) => {
                this.dropdownAnchor = ref;
            } }, h("div", { key: '2e967b92d073f88609f31d90cafd6b5455930560', class: "dropdown-button" }, this.label ? (h("ix-button", { variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled, alignment: "start" }, h("div", { class: 'content' }, this.icon ? (h("ix-icon", { name: this.icon, size: "24", class: 'dropdown-icon' })) : null, h("div", { class: 'button-label' }, this.label), h("ix-icon", { name: 'chevron-down-small', size: "24" })))) : (h("div", null, h("ix-icon-button", { icon: this.icon, variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled }), this.getTriangle()))), h("ix-dropdown", { key: '1477ef9b47c696f1ab705f0973b6ba20228975b2', class: "dropdown", trigger: this.dropdownAnchor, placement: this.placement, closeBehavior: this.closeBehavior }, h("slot", { key: '137db0e0b45d8e5f370346620782007c3b28f7f7' }))));
    }
    get hostElement() { return this; }
    static get style() { return IxDropdownButtonStyle0; }
}, [1, "ix-dropdown-button", {
        "variant": [1],
        "outline": [4],
        "ghost": [4],
        "disabled": [4],
        "label": [1],
        "icon": [1],
        "closeBehavior": [8, "close-behavior"],
        "placement": [1],
        "dropdownAnchor": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-dropdown-button", "ix-button", "ix-dropdown", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-dropdown-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DropdownButton);
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

const IxDropdownButton = DropdownButton;
const defineCustomElement = defineCustomElement$1;

export { IxDropdownButton, defineCustomElement };

//# sourceMappingURL=ix-dropdown-button.js.map