import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const flipTileContentCss = ":host{display:block}";
const IxFlipTileContentStyle0 = flipTileContentCss;

const FlipTileContent = /*@__PURE__*/ proxyCustomElement(class FlipTileContent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.contentVisible = false;
    }
    render() {
        return h(Host, { key: '73bbcf0a6ae4c5e285d289f23d4d07025d4b5051' }, this.contentVisible ? h("slot", null) : null);
    }
    static get style() { return IxFlipTileContentStyle0; }
}, [1, "ix-flip-tile-content", {
        "contentVisible": [4, "content-visible"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-flip-tile-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-flip-tile-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FlipTileContent);
            }
            break;
    } });
}

const IxFlipTileContent = FlipTileContent;
const defineCustomElement = defineCustomElement$1;

export { IxFlipTileContent, defineCustomElement };

//# sourceMappingURL=ix-flip-tile-content.js.map