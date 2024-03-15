'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
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
        return (index.h(index.Host, { key: '2857acae0de3f6e738276080924f3e1b937546c6' }, index.h("ix-dropdown-item", { key: 'ca37a4f42b3a673bb80890e43229711a45b378b9', ref: this.wrapperRef, suppressChecked: true, icon: this.icon, label: this.label, onItemClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, onClick: (e) => this.itemClick.emit(e) })));
    }
    get hostElement() { return index.getElement(this); }
};
SplitButtonItem.style = IxSplitButtonItemStyle0;

exports.ix_split_button_item = SplitButtonItem;

//# sourceMappingURL=ix-split-button-item.cjs.entry.js.map