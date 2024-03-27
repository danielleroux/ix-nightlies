import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { m as makeRef } from './make-ref.js';
import { d as defineCustomElement$1 } from './dropdown-item.js';

const menuAvatarItemCss = ":host{display:block;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxMenuAvatarItemStyle0 = menuAvatarItemCss;

const MenuAvatarItem = /*@__PURE__*/ proxyCustomElement(class MenuAvatarItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.itemClick = createEvent(this, "itemClick", 7);
        this.dropdownItemRef = makeRef();
        this.icon = undefined;
        this.label = undefined;
    }
    /** @internal */
    async getDropdownItemElement() {
        return this.dropdownItemRef.waitForCurrent();
    }
    render() {
        return (h("ix-dropdown-item", { key: '29fc32af98771990e67a0f31197db8d20151d3d0', ref: this.dropdownItemRef, icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) }));
    }
    get hostElement() { return this; }
    static get style() { return IxMenuAvatarItemStyle0; }
}, [1, "ix-menu-avatar-item", {
        "icon": [1],
        "label": [1],
        "getDropdownItemElement": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-menu-avatar-item", "ix-dropdown-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-menu-avatar-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuAvatarItem);
            }
            break;
        case "ix-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { MenuAvatarItem as M, defineCustomElement as d };

//# sourceMappingURL=menu-avatar-item.js.map