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
        return (h(Host, { key: 'd9978d4e7c37309d508c6f469d1a1c54cac432bc' }, h("ix-dropdown-item", { key: '501fd4ca885036ae75dff7cc66c948ac582ab59d', ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, onClick: (e) => this.itemClick.emit(e) })));
    }
    get hostElement() { return getElement(this); }
};
SplitButtonItem.style = IxSplitButtonItemStyle0;

export { SplitButtonItem as ix_split_button_item };

//# sourceMappingURL=ix-split-button-item.entry.js.map