'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

const cssGridItemCss = ":host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}";
const IxCssGridItemStyle0 = cssGridItemCss;

const CssGridItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.itemName = undefined;
    }
    render() {
        const style = {};
        style['grid-area'] = this.itemName;
        return (index.h(index.Host, { key: '062f950b23bd5e5e943008f95b654cf629532a90', style: style }, index.h("slot", { key: '1b0e07eeda37b949637dddcf53510a9760ff2ede' })));
    }
};
CssGridItem.style = IxCssGridItemStyle0;

exports.ix_css_grid_item = CssGridItem;

//# sourceMappingURL=ix-css-grid-item.cjs.entry.js.map