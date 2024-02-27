import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './typography.js';

const dropdownHeaderCss = ":host{display:flex;align-items:center;position:relative;height:2.5rem;width:auto;padding:0.25rem 1rem;overflow:hidden;cursor:default;color:var(--theme-color-soft-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxDropdownHeaderStyle0 = dropdownHeaderCss;

const DropdownHeader = /*@__PURE__*/ proxyCustomElement(class DropdownHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.label = undefined;
    }
    render() {
        return (h(Host, { key: '9b48e23d908cf0cc9f47822f9e25adacc878165d' }, h("ix-typography", { key: 'd89842c74ad80c00e696b0ca5d5a02d4eb646c3c', class: 'category-text', variant: 'default-title' }, this.label)));
    }
    static get style() { return IxDropdownHeaderStyle0; }
}, [1, "ix-dropdown-header", {
        "label": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-dropdown-header", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-dropdown-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DropdownHeader);
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxDropdownHeader = DropdownHeader;
const defineCustomElement = defineCustomElement$1;

export { IxDropdownHeader, defineCustomElement };

//# sourceMappingURL=ix-dropdown-header.js.map