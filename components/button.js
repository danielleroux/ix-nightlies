import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BaseButton } from './base-button.js';
import { d as defineCustomElement$1 } from './spinner.js';

const buttonCss = ":host{display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem}:host ix-spinner{margin-right:0.25rem}:host ix-icon{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none}:host(.disabled){cursor:default}:host .btn-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-primary,:host .btn-primary.focus,:host .btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}:host .btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-primary--border-color--hover);background-color:var(--theme-btn-primary--background--hover);color:var(--theme-btn-primary--color--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-primary--border-color--active);background-color:var(--theme-btn-primary--background--active);color:var(--theme-btn-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}:host .btn-outline-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-primary,:host .btn-outline-primary.focus,:host .btn-outline-primary:focus-visible{background-color:var(--theme-btn-outline-primary--background);color:var(--theme-btn-outline-primary--color);--ix-button-color:var(--theme-btn-outline-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-primary--border-color);border-style:solid}:host .btn-outline-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-primary--border-color--hover);background-color:var(--theme-btn-outline-primary--background--hover);color:var(--theme-btn-outline-primary--color--hover)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):active,:host .btn-outline-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-primary--border-color--active);background-color:var(--theme-btn-outline-primary--background--active);color:var(--theme-btn-outline-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-primary.disabled,:host(.disabled) .btn-outline-primary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-primary--border-color--disabled);background-color:var(--theme-btn-outline-primary--background--disabled);color:var(--theme-btn-outline-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-primary--color--disabled)}:host .btn-invisible-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-primary,:host .btn-invisible-primary.focus,:host .btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}:host .btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-primary--background--hover);color:var(--theme-btn-invisible-primary--color--hover)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):active,:host .btn-invisible-primary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-primary--background--active);color:var(--theme-btn-invisible-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-primary.disabled,:host(.disabled) .btn-invisible-primary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-primary--background--disabled);color:var(--theme-btn-invisible-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-primary--color--disabled)}:host .btn-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-secondary,:host .btn-secondary.focus,:host .btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}:host .btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-secondary--border-color--hover);background-color:var(--theme-btn-secondary--background--hover);color:var(--theme-btn-secondary--color--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-secondary--border-color--active);background-color:var(--theme-btn-secondary--background--active);color:var(--theme-btn-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}:host .btn-outline-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-secondary,:host .btn-outline-secondary.focus,:host .btn-outline-secondary:focus-visible{background-color:var(--theme-btn-outline-secondary--background);color:var(--theme-btn-outline-secondary--color);--ix-button-color:var(--theme-btn-outline-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-secondary--border-color);border-style:solid}:host .btn-outline-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-secondary--border-color--hover);background-color:var(--theme-btn-outline-secondary--background--hover);color:var(--theme-btn-outline-secondary--color--hover)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):active,:host .btn-outline-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-secondary--border-color--active);background-color:var(--theme-btn-outline-secondary--background--active);color:var(--theme-btn-outline-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-secondary.disabled,:host(.disabled) .btn-outline-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-secondary--border-color--disabled);background-color:var(--theme-btn-outline-secondary--background--disabled);color:var(--theme-btn-outline-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-secondary--color--disabled)}:host .btn-invisible-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-secondary,:host .btn-invisible-secondary.focus,:host .btn-invisible-secondary:focus-visible{background-color:var(--theme-btn-invisible-secondary--background);color:var(--theme-btn-invisible-secondary--color);--ix-button-color:var(--theme-btn-invisible-secondary--color);border-color:transparent}:host .btn-invisible-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-secondary--background--hover);color:var(--theme-btn-invisible-secondary--color--hover)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-secondary--background--active);color:var(--theme-btn-invisible-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-secondary.disabled,:host(.disabled) .btn-invisible-secondary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-secondary--background--disabled);color:var(--theme-btn-invisible-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-secondary--color--disabled)}:host{min-width:5rem}";
const IxButtonStyle0 = buttonCss;

const Button = /*@__PURE__*/ proxyCustomElement(class Button extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.variant = 'primary';
        this.outline = false;
        this.ghost = false;
        this.disabled = false;
        this.type = 'button';
        this.loading = false;
        this.icon = undefined;
        this.alignment = 'center';
        this.iconSize = '24';
    }
    componentDidLoad() {
        if (this.type === 'submit') {
            const submitButton = document.createElement('button');
            submitButton.style.display = 'none';
            submitButton.type = 'submit';
            submitButton.tabIndex = -1;
            this.hostElement.appendChild(submitButton);
            this.submitButtonElement = submitButton;
        }
    }
    dispatchFormEvents() {
        if (this.type === 'submit' && this.submitButtonElement) {
            this.submitButtonElement.click();
        }
    }
    render() {
        const baseButtonProps = {
            variant: this.variant,
            outline: this.outline,
            ghost: this.ghost,
            iconOnly: false,
            iconOval: false,
            selected: false,
            disabled: this.disabled || this.loading,
            icon: this.icon,
            iconSize: this.iconSize,
            loading: this.loading,
            onClick: () => this.dispatchFormEvents(),
            type: this.type,
            alignment: this.alignment,
        };
        return (h(Host, { key: 'dd15becc6804d274e5f1ba6a9b219dd09a277e71', class: {
                disabled: this.disabled || this.loading,
            } }, h(BaseButton, Object.assign({ key: 'b5a3ddaeeb9e72c1d0067d34d2d0d835db621503' }, baseButtonProps), h("slot", { key: '01ba2401ab6b414ee88b8757c83f2c37e478b54f' }))));
    }
    get hostElement() { return this; }
    static get style() { return IxButtonStyle0; }
}, [1, "ix-button", {
        "variant": [1],
        "outline": [4],
        "ghost": [4],
        "disabled": [516],
        "type": [1],
        "loading": [4],
        "icon": [1],
        "alignment": [1],
        "iconSize": [1, "icon-size"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Button);
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Button as B, defineCustomElement as d };

//# sourceMappingURL=button.js.map