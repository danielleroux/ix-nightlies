'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');
const makeRef = require('./make-ref-c25629b7.js');

const splitButtonItemCss = ":host{display:contents}";
const IxSplitButtonItemStyle0 = splitButtonItemCss;

const SplitButtonItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.itemClick = index.createEvent(this, "itemClick", 7);
        this.wrapperRef = makeRef.makeRef();
        this.icon = undefined;
        this.label = undefined;
    }
    /** @internal */
    async getDropdownItemElement() {
        return this.wrapperRef.waitForCurrent();
    }
    render() {
        return (index.h(index.Host, { key: 'b7360859acb51da295ef29d514e8d4dbef347931' }, index.h("ix-dropdown-item", { key: '1c47e6937a8a686da1bb0b028daa0fef1b711f4e', ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, onClick: (e) => this.itemClick.emit(e) })));
    }
    get hostElement() { return index.getElement(this); }
};
SplitButtonItem.style = IxSplitButtonItemStyle0;

exports.ix_split_button_item = SplitButtonItem;

//# sourceMappingURL=ix-split-button-item.cjs.entry.js.map