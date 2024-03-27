'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const dropdownHeaderCss = ":host{display:flex;align-items:center;position:relative;height:2.5rem;width:auto;padding:0.25rem 1rem;overflow:hidden;cursor:default;color:var(--theme-color-soft-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxDropdownHeaderStyle0 = dropdownHeaderCss;

const DropdownHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
    }
    render() {
        return (index.h(index.Host, { key: 'fa3daed3c42026d56472617e8011daf26a6a0143' }, index.h("ix-typography", { key: 'd5b713244e69d78221498344e435c0fe08c06b26', class: 'category-text', variant: 'default-title' }, this.label)));
    }
};
DropdownHeader.style = IxDropdownHeaderStyle0;

exports.ix_dropdown_header = DropdownHeader;

//# sourceMappingURL=ix-dropdown-header.cjs.entry.js.map