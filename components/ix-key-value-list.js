import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;

const KeyValueList = /*@__PURE__*/ proxyCustomElement(class KeyValueList extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.striped = undefined;
    }
    render() {
        return (h(Host, { key: '3b211fbd897af85b1ef38544d1177bd13e88d1e6', class: { keyValueList: true, 'keyValueList--striped': this.striped } }, h("slot", { key: '4fa83986fc2d859f2c600347a7e1afc13f5a1113' })));
    }
    static get style() { return IxKeyValueListStyle0; }
}, [1, "ix-key-value-list", {
        "striped": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-key-value-list"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-key-value-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, KeyValueList);
            }
            break;
    } });
}

const IxKeyValueList = KeyValueList;
const defineCustomElement = defineCustomElement$1;

export { IxKeyValueList, defineCustomElement };

//# sourceMappingURL=ix-key-value-list.js.map