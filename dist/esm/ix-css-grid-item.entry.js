import { r as registerInstance, h, H as Host } from './index-f18c5ad1.js';

const cssGridItemCss = ":host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}";
const IxCssGridItemStyle0 = cssGridItemCss;

const CssGridItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.itemName = undefined;
    }
    render() {
        const style = {};
        style['grid-area'] = this.itemName;
        return (h(Host, { key: '062f950b23bd5e5e943008f95b654cf629532a90', style: style }, h("slot", { key: '1b0e07eeda37b949637dddcf53510a9760ff2ede' })));
    }
};
CssGridItem.style = IxCssGridItemStyle0;

export { CssGridItem as ix_css_grid_item };

//# sourceMappingURL=ix-css-grid-item.entry.js.map