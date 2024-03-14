import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { m as makeRef } from './make-ref.js';
import { d as defineCustomElement$2 } from './dropdown-item.js';

const splitButtonItemCss = ":host{display:contents}";
const IxSplitButtonItemStyle0 = splitButtonItemCss;

const SplitButtonItem = /*@__PURE__*/ proxyCustomElement(class SplitButtonItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.itemClick = createEvent(this, "itemClick", 7);
        this.wrapperRef = makeRef();
        this.icon = undefined;
        this.label = undefined;
    }
    /** @internal */
    async getDropdownItemElement() {
        return this.wrapperRef.waitForCurrent();
    }
    render() {
        return (h(Host, { key: 'd9978d4e7c37309d508c6f469d1a1c54cac432bc' }, h("ix-dropdown-item", { key: '501fd4ca885036ae75dff7cc66c948ac582ab59d', ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, onClick: (e) => this.itemClick.emit(e) })));
    }
    get hostElement() { return this; }
    static get style() { return IxSplitButtonItemStyle0; }
}, [1, "ix-split-button-item", {
        "icon": [1],
        "label": [1],
        "getDropdownItemElement": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-split-button-item", "ix-dropdown-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-split-button-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SplitButtonItem);
            }
            break;
        case "ix-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxSplitButtonItem = SplitButtonItem;
const defineCustomElement = defineCustomElement$1;

export { IxSplitButtonItem, defineCustomElement };

//# sourceMappingURL=ix-split-button-item.js.map