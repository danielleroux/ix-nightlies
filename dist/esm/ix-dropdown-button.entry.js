import { r as registerInstance, h, H as Host, g as getElement } from './index-5cd176b3.js';

const dropdownButtonCss = ":host{display:inline-block;position:relative;height:2rem;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .hide{display:none}:host .dropdown-button{display:block;position:relative;width:100%;height:100%}:host .dropdown-button>ix-button{width:100%;height:100%}:host .dropdown-button .button-label{margin-right:auto;min-width:0px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .dropdown-button .dropdown-icon{margin-right:0.25rem}:host .triangle{position:absolute;margin-inline-start:1.5625rem;margin-block-start:-0.4375rem;border-right:0 solid transparent;border-left:4px solid transparent;border-top:0 solid transparent;border-bottom:4px solid;color:var(--theme-btn-primary--color)}:host .triangle.primary.ghost{color:var(--theme-btn-invisible-primary--color)}:host .triangle.primary.outline{color:var(--theme-btn-outline-primary--color)}:host .triangle.primary.ghost.disabled{color:var(--theme-btn-invisible-primary--color--disabled)}:host .triangle.primary.outline.disabled{color:var(--theme-btn-outline-primary--color--disabled)}:host .triangle.primary.disabled{color:var(--theme-btn-primary--color--disabled)}:host .triangle.secondary.ghost{color:var(--theme-btn-invisible-secondary--color)}:host .triangle.secondary.outline{color:var(--theme-btn-outline-secondary--color)}:host .triangle.secondary.ghost.disabled{color:var(--theme-btn-invisible-secondary--color--disabled)}:host .triangle.secondary.outline.disabled{color:var(--theme-btn-outline-secondary--color--disabled)}:host .triangle.secondary.disabled{color:var(--theme-btn-secondary--color--disabled)}:host .content{display:flex;align-items:center}:host(.disabled){pointer-events:none}";
const IxDropdownButtonStyle0 = dropdownButtonCss;

const DropdownButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '8930487c4b37d245f7fb9828c5028136e50ac81b', class: {
                disabled: this.disabled,
            }, ref: (ref) => {
                this.dropdownAnchor = ref;
            } }, h("div", { key: 'ea5caa3aac82f89ece0f569345f10b8afe995e44', class: "dropdown-button" }, this.label ? (h("ix-button", { variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled, alignment: "start" }, h("div", { class: 'content' }, this.icon ? (h("ix-icon", { name: this.icon, size: "24", class: 'dropdown-icon' })) : null, h("div", { class: 'button-label' }, this.label), h("ix-icon", { name: 'chevron-down-small', size: "24" })))) : (h("div", null, h("ix-icon-button", { icon: this.icon, variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled }), this.getTriangle()))), h("ix-dropdown", { key: '744ebec47c4658921d5a57f0165f6a7c95ed32e8', class: "dropdown", trigger: this.dropdownAnchor, placement: this.placement, closeBehavior: this.closeBehavior }, h("slot", { key: '438133ed750034c6a94cab0921c06cdf74c7b79e' }))));
    }
    get hostElement() { return getElement(this); }
};
DropdownButton.style = IxDropdownButtonStyle0;

export { DropdownButton as ix_dropdown_button };

//# sourceMappingURL=ix-dropdown-button.entry.js.map