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
        return (h(Host, { key: '6fc1f482e9e43fd2e70535c7f2bb7786fc59e305' }, h("slot", { key: 'd8a06e975f6498b7735159e09a29e8d715a1ff99' })));
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