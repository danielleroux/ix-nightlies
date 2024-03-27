import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as anime } from './anime.es.js';
import { d as defineCustomElement$2 } from './icon-button.js';
import { d as defineCustomElement$1 } from './spinner.js';

const mapNavigationOverlayCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{position:absolute;width:100%;height:100%;z-index:2;top:0;left:0;background-color:var(--theme-overlay--background)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .overlay-header{display:flex;position:relative;justify-content:flex-start;align-items:center;height:3.5rem;background-color:var(--theme-overlay-header--background)}:host .overlay-header-content{display:flex;align-items:center;min-width:0}:host .overlay-header-content ix-icon{margin-inline-start:1rem;color:var(--theme-overlay-header--color)}:host .overlay-header-content .overlay-header-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-overlay-header--color);margin-inline-start:1rem}:host .color-indicator{display:inline-block;position:relative;width:0.5rem;height:100%;background-color:var(--theme-color-neutral)}:host .overlay-close{margin-inline-start:auto;margin-inline-end:1rem}:host .d-none{display:none}:host(.d-none){display:none}";
const IxMapNavigationOverlayStyle0 = mapNavigationOverlayCss;

const MapNavigationOverlay = /*@__PURE__*/ proxyCustomElement(class MapNavigationOverlay extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.closeClick = createEvent(this, "closeClick", 7);
        this.name = undefined;
        this.icon = undefined;
        this.color = undefined;
        this.iconColor = undefined;
    }
    componentWillLoad() {
        anime({
            targets: this.hostElement,
            duration: MapNavigationOverlay.slowTime,
            backdropFilter: [0, 'blur(1rem)'],
            translateX: ['-4rem', 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            begin: () => {
                this.hostElement.classList.remove('d-none');
            },
        });
    }
    closeOverlay() {
        anime({
            targets: this.hostElement,
            duration: MapNavigationOverlay.slowTime,
            backdropFilter: ['blur(1rem)', 0],
            translateX: [0, '-4rem'],
            opacity: [1, 0],
            easing: 'easeInSine',
            complete: () => {
                this.closeClick.emit();
                this.hostElement.classList.add('d-none');
            },
        });
    }
    render() {
        var _a, _b, _c;
        return (h(Host, { key: 'd9a05885c16a9b6984950e07ff9ebf7d404804dc' }, h("div", { key: '23dc9da17d089ef38584cfed2280c0b094a7863a', class: "overlay-header" }, h("div", { key: '1215b123fa471e5a608e3104e240b01583e2ed29', class: {
                'color-indicator': true,
                'd-none': ((_a = this.iconColor) !== null && _a !== void 0 ? _a : this.color) === undefined,
            }, style: {
                'background-color': ((_b = this.iconColor) !== null && _b !== void 0 ? _b : this.color)
                    ? `var(--theme-${(_c = this.iconColor) !== null && _c !== void 0 ? _c : this.color})`
                    : '',
            } }), h("div", { key: '5ba269e62e9271623bbe65666148f9430129bc42', class: "overlay-header-content" }, h("ix-icon", { key: '318b2696266aca2ff67de725add75f52c8773f06', size: "32", name: this.icon }), h("span", { key: 'a2a81b0c87b555101eabe1e4737bca7dfb4d28ef', class: "overlay-header-title", title: this.name }, this.name)), h("ix-icon-button", { key: '9e5e0f6c335888e5fcc8ee11a296e539b5143018', class: "overlay-close", ghost: true, icon: 'close', size: "24", onClick: () => this.closeOverlay() })), h("slot", { key: 'c50ecafcc691ac3245fb5baefba097eb40788342' })));
    }
    get hostElement() { return this; }
    static get style() { return IxMapNavigationOverlayStyle0; }
}, [1, "ix-map-navigation-overlay", {
        "name": [1],
        "icon": [1],
        "color": [1],
        "iconColor": [1, "icon-color"]
    }]);
MapNavigationOverlay.slowTime = 500;
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-map-navigation-overlay", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-map-navigation-overlay":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MapNavigationOverlay);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { MapNavigationOverlay as M, defineCustomElement as d };

//# sourceMappingURL=map-navigation-overlay.js.map