import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-5cd176b3.js';
import { m as makeRef } from './make-ref-c80046bf.js';

const splitButtonItemCss = ":host{display:contents}";
const IxSplitButtonItemStyle0 = splitButtonItemCss;

const SplitButtonItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'f25e1e6cb9b54071058b126718b0892bec07e9dc' }, h("ix-dropdown-item", { key: '0dd8665d736ab6d19e694de3eb72f32c4222d100', ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, onClick: (e) => this.itemClick.emit(e) })));
    }
    get hostElement() { return getElement(this); }
};
SplitButtonItem.style = IxSplitButtonItemStyle0;

export { SplitButtonItem as ix_split_button_item };

//# sourceMappingURL=ix-split-button-item.entry.js.map