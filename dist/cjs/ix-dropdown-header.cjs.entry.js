'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

const dropdownHeaderCss = ":host{display:flex;align-items:center;position:relative;height:2.5rem;width:auto;padding:0.25rem 1rem;overflow:hidden;cursor:default;color:var(--theme-color-soft-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxDropdownHeaderStyle0 = dropdownHeaderCss;

const DropdownHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
    }
    render() {
        return (index.h(index.Host, { key: '230bfe17b21343034c269c4f89f0d0b1e1edfb9a' }, index.h("ix-typography", { key: 'b9a822893ba122ae7efbe3ec600fb57f7fcd0475', class: 'category-text', variant: 'default-title' }, this.label)));
    }
};
DropdownHeader.style = IxDropdownHeaderStyle0;

exports.ix_dropdown_header = DropdownHeader;

//# sourceMappingURL=ix-dropdown-header.cjs.entry.js.map