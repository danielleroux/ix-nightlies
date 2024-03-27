'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

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
        return (index.h(index.Host, { key: 'c40a13c3395d6f3a785e7f17ed8887d0f54642c6', class: {
                selected: (_a = this.context) === null || _a === void 0 ? void 0 : _a.isSelected,
            } }, index.h("div", { key: '47264231c4f5b919b4f4480a409b4b2047c46fc0', class: "icon-toggle-container", onClick: (e) => {
                e.preventDefault();
                this.toggle.emit();
            } }, this.hasChildren ? (index.h("ix-icon", { name: 'chevron-right', size: "16", class: {
                ['icon-toggle-down']: (_b = this.context) === null || _b === void 0 ? void 0 : _b.isExpanded,
            }, color: `color-${((_c = this.context) === null || _c === void 0 ? void 0 : _c.isExpanded) ? 'primary' : 'std-text'}` })) : null), index.h("div", { key: '5ab2e0dc8ac4b4aa5a6b6851b70980d7e04d02ea', class: "tree-node-container", onClick: () => {
                this.itemClick.emit();
            } }, this.text, index.h("slot", { key: '93f195d06fb13641e330028d460e2a077736c5be' }))));
    }
};
TreeItem.style = IxTreeItemStyle0;

exports.ix_tree_item = TreeItem;

//# sourceMappingURL=ix-tree-item.cjs.entry.js.map