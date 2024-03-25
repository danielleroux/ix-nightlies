import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const keyValueCss = ":host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}:host(.keyValue) .keyValue__content .content__label{color:var(--theme-color-soft-text)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--theme-color-soft-bdr)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}";
const IxKeyValueStyle0 = keyValueCss;

const KeyValue = /*@__PURE__*/ proxyCustomElement(class KeyValue extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.icon = undefined;
        this.label = undefined;
        this.labelPosition = 'top';
        this.value = undefined;
    }
    render() {
        return (h(Host, { key: '227f052645f548c6e1c19a925734bbd6066358e4', class: `keyValue keyValue--${this.labelPosition === 'top' ? 'column' : 'row'}` }, this.icon && (h("ix-icon", { name: this.icon, size: "24", class: "keyValue__icon" })), h("div", { key: 'ffe1c46cf33671aeb701559b6da2ec5133099c94', class: "keyValue__content" }, h("div", { key: '700543226c808d81d11c9d9bf69cf25c73825688', class: "content__label" }, this.label), h("div", { key: '7e5b12f25fb6d9503947d6a7b200c7a3f962aee2', class: {
                content__value: true,
                'has-customValue': this.value === undefined,
            } }, this.value !== undefined ? (this.value) : (h("slot", { name: "custom-value" }))))));
    }
    static get style() { return IxKeyValueStyle0; }
}, [1, "ix-key-value", {
        "icon": [1],
        "label": [1],
        "labelPosition": [1, "label-position"],
        "value": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-key-value"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-key-value":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, KeyValue);
            }
            break;
    } });
}

const IxKeyValue = KeyValue;
const defineCustomElement = defineCustomElement$1;

export { IxKeyValue, defineCustomElement };

//# sourceMappingURL=ix-key-value.js.map