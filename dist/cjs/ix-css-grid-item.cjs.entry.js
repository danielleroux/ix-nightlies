'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

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
        return (index.h(index.Host, { key: '2f048d51f62508a7f07bca1537a3d5b132a456ca', style: style }, index.h("slot", { key: '9e1ba33a62542da9789e19bfca6fa9c4a31ee692' })));
    }
};
CssGridItem.style = IxCssGridItemStyle0;

exports.ix_css_grid_item = CssGridItem;

//# sourceMappingURL=ix-css-grid-item.cjs.entry.js.map