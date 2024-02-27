'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
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
        return (index.h(index.Host, { key: 'ef69e746551d1799ac549a40d5bf993e20b947e8' }, index.h("div", { key: 'd5f0f5ef0dd67769ac59d4efa17e746bd2af3d8f', class: {
                'content-header': true,
                slotted: this.isContentHeaderSlotted,
            } }, index.h("slot", { key: '2a7a54ca49a946ba2043d48e93311095aa5a1696', name: "header", onSlotchange: () => {
                this.isContentHeaderSlotted = shadowDom.hasSlottedElements(this.contentHeaderSlot);
            } })), index.h("div", { key: '43bfdf4ae39781a58ca3b6f4d9981841d37ff347', class: "content" }, index.h("slot", { key: '88d53f6d9c324182af7e8e0c341910ff5fd04cb1' }))));
    }
    get hostElement() { return index.getElement(this); }
};
Content.style = IxContentStyle0;

exports.ix_content = Content;

//# sourceMappingURL=ix-content.cjs.entry.js.map