import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './icon-button.js';
import { d as defineCustomElement$3 } from './spinner.js';
import { d as defineCustomElement$2 } from './typography.js';

const contentHeaderCss = ":host{display:flex;flex-direction:row;align-items:flex-start;padding:0px}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0%}:host .subtitle{margin-top:0.5rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}";
const IxContentHeaderStyle0 = contentHeaderCss;

const ContentHeader = /*@__PURE__*/ proxyCustomElement(class ContentHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.backButtonClick = createEvent(this, "backButtonClick", 7);
        this.variant = 'primary';
        this.headerTitle = undefined;
        this.headerSubtitle = undefined;
        this.hasBackButton = false;
    }
    render() {
        return (h(Host, { key: 'eae27014039b16c023892b60cc904609e55b89ad' }, this.hasBackButton ? (h("ix-icon-button", { class: 'backButton', variant: "primary", icon: 'arrow-left', ghost: true, onClick: () => this.backButtonClick.emit() })) : null, h("div", { key: '397be2503715bb15d260bcfada2260a8eb72e33b', class: "titleGroup" }, h("ix-typography", { key: '5d08e001eb5178aaf4b089a4faa15bc759a43b6b', variant: this.variant === 'secondary' ? 'large-single' : 'h2' }, this.headerTitle), this.headerSubtitle !== undefined ? (h("ix-typography", { variant: 'caption', color: 'soft', class: "subtitle" }, this.headerSubtitle)) : null), h("div", { key: '6c6cc165c96307a6ee2c2bec59a80d6cd62a02cf', class: "buttons" }, h("slot", { key: '0ac3730bb5ec852b127554e8dbdd73970204e275' }))));
    }
    static get style() { return IxContentHeaderStyle0; }
}, [1, "ix-content-header", {
        "variant": [1],
        "headerTitle": [1, "header-title"],
        "headerSubtitle": [1, "header-subtitle"],
        "hasBackButton": [4, "has-back-button"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-content-header", "ix-icon-button", "ix-spinner", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-content-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ContentHeader);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxContentHeader = ContentHeader;
const defineCustomElement = defineCustomElement$1;

export { IxContentHeader, defineCustomElement };

//# sourceMappingURL=ix-content-header.js.map