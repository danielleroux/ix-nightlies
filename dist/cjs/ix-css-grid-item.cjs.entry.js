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
        return (index.h(index.Host, { key: 'e5f4a0cda7624d07672ff6892f55ab8d7d8faf8d', style: style }, index.h("slot", { key: '962c12dd575e9f5d81b51259ad973616ae200515' })));
    }
};
CssGridItem.style = IxCssGridItemStyle0;

exports.ix_css_grid_item = CssGridItem;

//# sourceMappingURL=ix-css-grid-item.cjs.entry.js.map