import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as closestPassShadow } from './shadow-dom.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './spinner.js';
import { d as defineCustomElement$1 } from './typography.js';

const modalHeaderCss = ":host{display:flex;padding:0.5rem;align-items:center;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-close{margin-left:auto;margin-right:-1rem}:host .modal-icon{margin-right:1rem}";
const IxModalHeaderStyle0 = modalHeaderCss;

const ModalHeader = /*@__PURE__*/ proxyCustomElement(class ModalHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.closeClick = createEvent(this, "closeClick", 7);
        this.hideClose = false;
        this.icon = undefined;
        this.iconColor = undefined;
    }
    onIconChange(icon) {
        if (this.parentDialog) {
            if (icon) {
                this.parentDialog.classList.add('with-icon');
            }
            else {
                this.parentDialog.classList.remove('with-icon');
            }
        }
    }
    componentDidLoad() {
        this.parentDialog = closestPassShadow(this.hostElement, 'ix-modal');
        this.onIconChange(this.icon);
    }
    onCloseClick(event) {
        const ce = this.closeClick.emit(event);
        if (ce.defaultPrevented || event.defaultPrevented) {
            return;
        }
        this.parentDialog.dismissModal();
    }
    render() {
        return (h(Host, { key: 'ae262d966e9e69c5c7558190f61928b4c109643f' }, this.icon ? (h("ix-icon", { class: 'modal-icon', name: this.icon, color: this.iconColor })) : null, h("ix-typography", { key: '4ff8195c0b582e37527d793e1e32615cb190e0a5', variant: 'default-title' }, h("slot", { key: '10f9506941a2f34631520d7209612c3cf07dd431' })), !this.hideClose ? (h("ix-icon-button", { onClick: (event) => this.onCloseClick(event), ghost: true, icon: "close", class: 'modal-close' })) : null));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "icon": ["onIconChange"]
    }; }
    static get style() { return IxModalHeaderStyle0; }
}, [1, "ix-modal-header", {
        "hideClose": [4, "hide-close"],
        "icon": [1],
        "iconColor": [1, "icon-color"]
    }, undefined, {
        "icon": ["onIconChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-modal-header", "ix-icon-button", "ix-spinner", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-modal-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ModalHeader);
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
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ModalHeader as M, defineCustomElement as d };

//# sourceMappingURL=modal-header.js.map