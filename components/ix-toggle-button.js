import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BaseButton } from './base-button.js';
import { a as a11yBoolean } from './a11y.js';
import { d as defineCustomElement$2 } from './spinner.js';

const toggleButtonCss = ".btn{display:inline-flex;align-items:center;justify-content:center;height:2rem;font-size:0.875rem;font-weight:700;transition:150ms;padding:0 0.5rem;min-width:5rem;gap:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.btn .glyph{margin-right:0.25rem;font-weight:400}.btn:focus-visible,.btn.focus{box-shadow:none}.btn-primary{border-radius:var(--theme-btn--border-radius)}.btn-primary,.btn-primary.focus,.btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}.btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}.btn-primary.hover,.btn-primary:hover{border-color:var(--theme-btn-primary--border-color--hover);background-color:var(--theme-btn-primary--background--hover);color:var(--theme-btn-primary--color--hover)}.btn-primary.selected.hover,.btn-primary.selected:hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{border-color:var(--theme-btn-primary--border-color--active);background-color:var(--theme-btn-primary--background--active);color:var(--theme-btn-primary--color--active)}.btn-primary.selected:not(:disabled):not(.disabled):active,.btn-primary.selected:not(:disabled):not(.disabled).active,.show>.btn-primary.selected.dropdown-toggle{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}.btn-primary.disabled,.btn-primary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}.btn-outline-primary{border-radius:var(--theme-btn--border-radius)}.btn-outline-primary,.btn-outline-primary.focus,.btn-outline-primary:focus-visible{background-color:var(--theme-btn-outline-primary--background);color:var(--theme-btn-outline-primary--color);--ix-button-color:var(--theme-btn-outline-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-primary--border-color);border-style:solid}.btn-outline-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-outline-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}.btn-outline-primary.hover,.btn-outline-primary:hover{border-color:var(--theme-btn-outline-primary--border-color--hover);background-color:var(--theme-btn-outline-primary--background--hover);color:var(--theme-btn-outline-primary--color--hover)}.btn-outline-primary.selected.hover,.btn-outline-primary.selected:hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{border-color:var(--theme-btn-outline-primary--border-color--active);background-color:var(--theme-btn-outline-primary--background--active);color:var(--theme-btn-outline-primary--color--active)}.btn-outline-primary.selected:not(:disabled):not(.disabled):active,.btn-outline-primary.selected:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.selected.dropdown-toggle{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-outline-primary--border-color--disabled);background-color:var(--theme-btn-outline-primary--background--disabled);color:var(--theme-btn-outline-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-primary--color--disabled)}.btn-invisible-primary{border-radius:var(--theme-btn--border-radius);--bs-btn-border-width:0px;--bs-btn-active-border-color:none}.btn-invisible-primary,.btn-invisible-primary.focus,.btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}.btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-invisible-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}.btn-invisible-primary.hover,.btn-invisible-primary:hover{background-color:var(--theme-btn-invisible-primary--background--hover);color:var(--theme-btn-invisible-primary--color--hover)}.btn-invisible-primary.selected.hover,.btn-invisible-primary.selected:hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}.btn-invisible-primary:not(:disabled):not(.disabled):active,.btn-invisible-primary:not(:disabled):not(.disabled).active,.show>.btn-invisible-primary.dropdown-toggle{background-color:var(--theme-btn-invisible-primary--background--active);color:var(--theme-btn-invisible-primary--color--active)}.btn-invisible-primary.selected:not(:disabled):not(.disabled):active,.btn-invisible-primary.selected:not(:disabled):not(.disabled).active,.show>.btn-invisible-primary.selected.dropdown-toggle{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}.btn-invisible-primary.disabled,.btn-invisible-primary:disabled{pointer-events:none;cursor:initial;background-color:var(--theme-btn-invisible-primary--background--disabled);color:var(--theme-btn-invisible-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-primary--color--disabled)}.btn-secondary{border-radius:var(--theme-btn--border-radius)}.btn-secondary,.btn-secondary.focus,.btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}.btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}.btn-secondary.hover,.btn-secondary:hover{border-color:var(--theme-btn-secondary--border-color--hover);background-color:var(--theme-btn-secondary--background--hover);color:var(--theme-btn-secondary--color--hover)}.btn-secondary.selected.hover,.btn-secondary.selected:hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{border-color:var(--theme-btn-secondary--border-color--active);background-color:var(--theme-btn-secondary--background--active);color:var(--theme-btn-secondary--color--active)}.btn-secondary.selected:not(:disabled):not(.disabled):active,.btn-secondary.selected:not(:disabled):not(.disabled).active,.show>.btn-secondary.selected.dropdown-toggle{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}.btn-secondary.disabled,.btn-secondary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}.btn-outline-secondary{border-radius:var(--theme-btn--border-radius)}.btn-outline-secondary,.btn-outline-secondary.focus,.btn-outline-secondary:focus-visible{background-color:var(--theme-btn-outline-secondary--background);color:var(--theme-btn-outline-secondary--color);--ix-button-color:var(--theme-btn-outline-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-secondary--border-color);border-style:solid}.btn-outline-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-outline-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}.btn-outline-secondary.hover,.btn-outline-secondary:hover{border-color:var(--theme-btn-outline-secondary--border-color--hover);background-color:var(--theme-btn-outline-secondary--background--hover);color:var(--theme-btn-outline-secondary--color--hover)}.btn-outline-secondary.selected.hover,.btn-outline-secondary.selected:hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{border-color:var(--theme-btn-outline-secondary--border-color--active);background-color:var(--theme-btn-outline-secondary--background--active);color:var(--theme-btn-outline-secondary--color--active)}.btn-outline-secondary.selected:not(:disabled):not(.disabled):active,.btn-outline-secondary.selected:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.selected.dropdown-toggle{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{pointer-events:none;cursor:initial;border-color:var(--theme-btn-outline-secondary--border-color--disabled);background-color:var(--theme-btn-outline-secondary--background--disabled);color:var(--theme-btn-outline-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-secondary--color--disabled)}.btn-invisible-secondary{border-radius:var(--theme-btn--border-radius);--bs-btn-border-width:0px;--bs-btn-active-border-color:none}.btn-invisible-secondary,.btn-invisible-secondary.focus,.btn-invisible-secondary:focus-visible{background-color:var(--theme-btn-invisible-secondary--background);color:var(--theme-btn-invisible-secondary--color);--ix-button-color:var(--theme-btn-invisible-secondary--color);border-color:transparent}.btn-invisible-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.btn-invisible-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}.btn-invisible-secondary.hover,.btn-invisible-secondary:hover{background-color:var(--theme-btn-invisible-secondary--background--hover);color:var(--theme-btn-invisible-secondary--color--hover)}.btn-invisible-secondary.selected.hover,.btn-invisible-secondary.selected:hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}.btn-invisible-secondary:not(:disabled):not(.disabled):active,.btn-invisible-secondary:not(:disabled):not(.disabled).active,.show>.btn-invisible-secondary.dropdown-toggle{background-color:var(--theme-btn-invisible-secondary--background--active);color:var(--theme-btn-invisible-secondary--color--active)}.btn-invisible-secondary.selected:not(:disabled):not(.disabled):active,.btn-invisible-secondary.selected:not(:disabled):not(.disabled).active,.show>.btn-invisible-secondary.selected.dropdown-toggle{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}.btn-invisible-secondary.disabled,.btn-invisible-secondary:disabled{pointer-events:none;cursor:initial;background-color:var(--theme-btn-invisible-secondary--background--disabled);color:var(--theme-btn-invisible-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-secondary--color--disabled)}.btn-oval,.btn-icon{min-width:2rem;width:2rem}.btn-oval .glyph,.btn-icon .glyph{margin-right:0}.btn-oval{border-radius:6.25rem;width:2rem}.btn-icon-xs,.btn-icon-12{height:1rem;width:1rem;min-width:1rem;min-height:1rem}.btn-icon-s,.btn-icon-16{height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}.btn-icon-32{height:2rem;width:2rem;min-width:2rem;min-height:2rem}:host{display:inline-block;width:auto;height:2rem;vertical-align:middle}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .btn{width:100%;height:100%}:host button:not(:disabled){cursor:pointer}:host(.disabled){pointer-events:none}";
const IxToggleButtonStyle0 = toggleButtonCss;

const ToggleButton = /*@__PURE__*/ proxyCustomElement(class ToggleButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pressedChange = createEvent(this, "pressedChange", 7);
        this.variant = 'secondary';
        this.outline = false;
        this.ghost = false;
        this.disabled = false;
        this.loading = false;
        this.icon = undefined;
        this.pressed = false;
    }
    isIllegalToggleButtonConfig() {
        return this.variant === 'primary' && (this.outline || this.ghost);
    }
    logIllegalConfig() {
        console.warn('iX toggle button with illegal configuration detected. Variant "primary" can only be combined with "outline" or "ghost".');
    }
    onVariantChange() {
        if (this.isIllegalToggleButtonConfig()) {
            this.logIllegalConfig();
        }
    }
    onGhostChange() {
        this.onVariantChange();
    }
    onOutlineChange() {
        this.onVariantChange();
    }
    componentDidLoad() {
        this.onVariantChange();
    }
    dispatchPressedChange() {
        this.pressedChange.emit(!this.pressed);
    }
    render() {
        const baseButtonProps = {
            variant: this.variant,
            outline: this.outline,
            ghost: this.ghost,
            iconOnly: false,
            iconOval: false,
            selected: this.pressed,
            disabled: this.disabled || this.loading,
            icon: this.icon,
            loading: this.loading,
            onClick: () => this.dispatchPressedChange(),
            type: 'button',
            ariaAttributes: {
                'aria-pressed': a11yBoolean(this.pressed),
            },
        };
        return (h(Host, { key: 'dfcef75c0ea69b53af7afc1df02915a869b6ef3b', class: {
                disabled: this.disabled || this.loading,
            } }, h(BaseButton, Object.assign({ key: 'ea0fbe743f0c3371fb71925be47fc566e5dee37d' }, baseButtonProps), h("slot", { key: '2e6d2c6169978fc567974220437f2a7aa05c62ac' }))));
    }
    static get watchers() { return {
        "variant": ["onVariantChange"],
        "ghost": ["onGhostChange"],
        "outline": ["onOutlineChange"]
    }; }
    static get style() { return IxToggleButtonStyle0; }
}, [1, "ix-toggle-button", {
        "variant": [1],
        "outline": [4],
        "ghost": [4],
        "disabled": [516],
        "loading": [4],
        "icon": [1],
        "pressed": [4]
    }, undefined, {
        "variant": ["onVariantChange"],
        "ghost": ["onGhostChange"],
        "outline": ["onOutlineChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-toggle-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-toggle-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ToggleButton);
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxToggleButton = ToggleButton;
const defineCustomElement = defineCustomElement$1;

export { IxToggleButton, defineCustomElement };

//# sourceMappingURL=ix-toggle-button.js.map