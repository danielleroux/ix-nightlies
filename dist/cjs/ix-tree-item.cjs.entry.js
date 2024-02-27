'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const treeItemCss = ":host{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tree-node-container{display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem}:host .icon-toggle-container ix-icon{transition:transform 150ms ease-in-out}:host .icon-toggle-container ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(:disabled):not(.selected).hover),:host(:not(.disabled):not(:disabled):not(.selected):hover){background-color:var(--theme-tree-item--background--hover)}:host(:not(.disabled):not(:disabled):not(.selected).active),:host(:not(.disabled):not(:disabled):not(.selected):active){background-color:var(--theme-tree-item--background--active)}:host(.selected){background-color:var(--theme-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--theme-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--theme-tree-item--background--selected-active)}";
const IxTreeItemStyle0 = treeItemCss;

const TreeItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toggle = index.createEvent(this, "toggle", 7);
        this.itemClick = index.createEvent(this, "itemClick", 7);
        this.text = undefined;
        this.hasChildren = undefined;
        this.context = undefined;
    }
    render() {
        var _a, _b, _c;
        return (index.h(index.Host, { key: 'ba0c464b633cb3ca1ed0c5690245c1a69612e7fb', class: {
                selected: (_a = this.context) === null || _a === void 0 ? void 0 : _a.isSelected,
            } }, index.h("div", { key: 'b94962dfd5d8be52ae6dab6b209d7f235dc2fc97', class: "icon-toggle-container", onClick: (e) => {
                e.preventDefault();
                this.toggle.emit();
            } }, this.hasChildren ? (index.h("ix-icon", { name: 'chevron-right', size: "16", class: {
                ['icon-toggle-down']: (_b = this.context) === null || _b === void 0 ? void 0 : _b.isExpanded,
            }, color: `color-${((_c = this.context) === null || _c === void 0 ? void 0 : _c.isExpanded) ? 'primary' : 'std-text'}` })) : null), index.h("div", { key: 'ec90acd5573bbb23978666fc9e43e4c107d35ce1', class: "tree-node-container", onClick: () => {
                this.itemClick.emit();
            } }, this.text, index.h("slot", { key: 'd70e947ceceeb7ecef901da3bc48ba58f898d419' }))));
    }
};
TreeItem.style = IxTreeItemStyle0;

exports.ix_tree_item = TreeItem;

//# sourceMappingURL=ix-tree-item.cjs.entry.js.map