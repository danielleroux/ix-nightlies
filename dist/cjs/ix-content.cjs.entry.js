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
        return (index.h(index.Host, { key: '85ecfecc47910592c3e5633e8f21ca6e2bf98b68' }, index.h("div", { key: '5856277dbd6d05054a0c0083ae8ba9496e127cf5', class: {
                'content-header': true,
                slotted: this.isContentHeaderSlotted,
            } }, index.h("slot", { key: 'b5989ea440740b99deef634be6b30cb5b443d18b', name: "header", onSlotchange: () => {
                this.isContentHeaderSlotted = shadowDom.hasSlottedElements(this.contentHeaderSlot);
            } })), index.h("div", { key: 'b4eea60b710cd2a2cf188c2125a91a33b4fca82f', class: "content" }, index.h("slot", { key: 'b739a3016884b29e41b1975b76121511c9f35f2a' }))));
    }
    get hostElement() { return index.getElement(this); }
};
Content.style = IxContentStyle0;

exports.ix_content = Content;

//# sourceMappingURL=ix-content.cjs.entry.js.map