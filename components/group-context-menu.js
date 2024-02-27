import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { g as getSlottedElements } from './shadow-dom.js';
import { d as defineCustomElement$2 } from './icon-button.js';
import { d as defineCustomElement$1 } from './spinner.js';

const groupContextMenuCss = ":host{display:block;position:relative;height:2rem;width:2rem;margin-block-start:0.3125rem;margin-inline-end:0.3125rem;margin-inline-start:auto}:host .hide{visibility:collapse}";
const IxGroupContextMenuStyle0 = groupContextMenuCss;

const GroupContextMenu = /*@__PURE__*/ proxyCustomElement(class GroupContextMenu extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.showContextMenu = false;
    }
    getTrigger() {
        return this.hostElement;
    }
    configureDropdown(dropdownElement, triggerElement) {
        dropdownElement.positioningStrategy = 'fixed';
        dropdownElement.trigger = triggerElement;
    }
    onSlotChange() {
        const slot = this.hostElement.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const elements = getSlottedElements(slot);
        this.showContextMenu = elements.length !== 0;
        const dropdownElement = elements.find((elm) => elm.tagName === 'IX-DROPDOWN');
        const triggerElement = this.getTrigger();
        if (!triggerElement) {
            return;
        }
        if (!dropdownElement) {
            return;
        }
        this.configureDropdown(dropdownElement, triggerElement);
    }
    render() {
        return (h(Host, { key: '7b561df4adbe4906b1f4dbc4c50fab9788ec30c9' }, h("ix-icon-button", { key: '602b724690fb58e3261710002ef95fff2ef28c25', class: { hide: !this.showContextMenu }, size: "24", ghost: true, icon: 'context-menu' }), h("slot", { key: '0d42add312838be530623029430bc1007ba08a5a', onSlotchange: () => this.onSlotChange() })));
    }
    get hostElement() { return this; }
    static get style() { return IxGroupContextMenuStyle0; }
}, [1, "ix-group-context-menu", {
        "showContextMenu": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-group-context-menu", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-group-context-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GroupContextMenu);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { GroupContextMenu as G, defineCustomElement as d };

//# sourceMappingURL=group-context-menu.js.map