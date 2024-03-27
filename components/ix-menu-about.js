import { proxyCustomElement, HTMLElement, createEvent, forceUpdate, h } from '@stencil/core/internal/client';
import { s as setTab, i as initialize, M as MenuTabs } from './menu-tabs-fc.js';
import { d as defineCustomElement$5 } from './icon-button.js';
import { d as defineCustomElement$4 } from './spinner.js';
import { d as defineCustomElement$3 } from './tab-item.js';
import { d as defineCustomElement$2 } from './tabs.js';

const menuAboutCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host .about-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .about-header h2{color:var(--theme-nav-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}:host ix-menu-about-item{display:none}";
const IxMenuAboutStyle0 = menuAboutCss;

const MenuAbout = /*@__PURE__*/ proxyCustomElement(class MenuAbout extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.close = createEvent(this, "close", 7);
        this.activeTabLabel = undefined;
        this.label = 'About & legal information';
        this.show = false;
        this.items = undefined;
    }
    updateTab(label) {
        setTab(this, label);
    }
    componentWillLoad() {
        initialize(this);
    }
    componentDidLoad() {
        forceUpdate(this.el);
    }
    render() {
        return h(MenuTabs, { key: '5795ddcf3b8bdf0d48587e91a7d4551543424917', context: this });
    }
    get el() { return this; }
    static get watchers() { return {
        "activeTabLabel": ["updateTab"]
    }; }
    static get style() { return IxMenuAboutStyle0; }
}, [1, "ix-menu-about", {
        "activeTabLabel": [1025, "active-tab-label"],
        "label": [1],
        "show": [4],
        "items": [32]
    }, undefined, {
        "activeTabLabel": ["updateTab"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-menu-about", "ix-icon-button", "ix-spinner", "ix-tab-item", "ix-tabs"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-menu-about":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuAbout);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-tab-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-tabs":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxMenuAbout = MenuAbout;
const defineCustomElement = defineCustomElement$1;

export { IxMenuAbout, defineCustomElement };

//# sourceMappingURL=ix-menu-about.js.map