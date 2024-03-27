'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');
const shadowDom = require('./shadow-dom-73f9d553.js');

const contentCss = ":host{display:flex;flex-direction:column;position:relative;padding:1.5rem 0rem 0.25rem 2rem;width:100%;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{flex-grow:1;overflow:auto;padding-right:1.5rem}:host .content-header.slotted{margin-bottom:1rem;padding-right:1.5rem}";
const IxContentStyle0 = contentCss;

const Content = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isContentHeaderSlotted = false;
    }
    get contentHeaderSlot() {
        return this.hostElement.shadowRoot.querySelector('.content-header slot');
    }
    render() {
        return (index.h(index.Host, { key: 'ed854cd926e26c98f6a9ba6e8b10bf854308d0d2' }, index.h("div", { key: '1ad8b864dc541b214832cdc01cd4752288e9c667', class: {
                'content-header': true,
                slotted: this.isContentHeaderSlotted,
            } }, index.h("slot", { key: '892583b8bf4f0efdcca345ba42e376ce09af9788', name: "header", onSlotchange: () => {
                this.isContentHeaderSlotted = shadowDom.hasSlottedElements(this.contentHeaderSlot);
            } })), index.h("div", { key: '05d8b3ad1c822d1d813b6c0c65d6c9fab54dcdf2', class: "content" }, index.h("slot", { key: '757f80d0d430489e41a10e2e46ae6c931ba07a8f' }))));
    }
    get hostElement() { return index.getElement(this); }
};
Content.style = IxContentStyle0;

exports.ix_content = Content;

//# sourceMappingURL=ix-content.cjs.entry.js.map