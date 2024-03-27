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
        return (h(Host, { key: 'b7360859acb51da295ef29d514e8d4dbef347931' }, h("ix-dropdown-item", { key: '1c47e6937a8a686da1bb0b028daa0fef1b711f4e', ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
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