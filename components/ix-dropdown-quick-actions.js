import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}";
const IxDropdownQuickActionsStyle0 = dropdownQuickActionsCss;

const DropdownQuickActions = /*@__PURE__*/ proxyCustomElement(class DropdownQuickActions extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '63bf90e05df3c09c34592ed8760d4447ec3c7f4f' }, h("slot", { key: '2a078f550498c8e1a62f880f1079d445d131a26a' })));
    }
    static get style() { return IxDropdownQuickActionsStyle0; }
}, [1, "ix-dropdown-quick-actions"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-dropdown-quick-actions"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-dropdown-quick-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DropdownQuickActions);
            }
            break;
    } });
}

const IxDropdownQuickActions = DropdownQuickActions;
const defineCustomElement = defineCustomElement$1;

export { IxDropdownQuickActions, defineCustomElement };

//# sourceMappingURL=ix-dropdown-quick-actions.js.map