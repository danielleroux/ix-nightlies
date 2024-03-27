import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-5cd176b3.js';
import { a as anime } from './anime.es-a5520566.js';

const mapNavigationOverlayCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{position:absolute;width:100%;height:100%;z-index:2;top:0;left:0;background-color:var(--theme-overlay--background)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .overlay-header{display:flex;position:relative;justify-content:flex-start;align-items:center;height:3.5rem;background-color:var(--theme-overlay-header--background)}:host .overlay-header-content{display:flex;align-items:center;min-width:0}:host .overlay-header-content ix-icon{margin-inline-start:1rem;color:var(--theme-overlay-header--color)}:host .overlay-header-content .overlay-header-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-overlay-header--color);margin-inline-start:1rem}:host .color-indicator{display:inline-block;position:relative;width:0.5rem;height:100%;background-color:var(--theme-color-neutral)}:host .overlay-close{margin-inline-start:auto;margin-inline-end:1rem}:host .d-none{display:none}:host(.d-none){display:none}";
const IxMapNavigationOverlayStyle0 = mapNavigationOverlayCss;

const MapNavigationOverlay = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'e032148cd238a6e03703b12098550b0af3d59116' }, h("div", { key: '99a192f95c70611b60bdb0dc6ea2626e77c04603', class: "overlay-header" }, h("div", { key: '805208183f5c68841625778424618609a681bb2d', class: {
                'color-indicator': true,
                'd-none': ((_a = this.iconColor) !== null && _a !== void 0 ? _a : this.color) === undefined,
            }, style: {
                'background-color': ((_b = this.iconColor) !== null && _b !== void 0 ? _b : this.color)
                    ? `var(--theme-${(_c = this.iconColor) !== null && _c !== void 0 ? _c : this.color})`
                    : '',
            } }), h("div", { key: '657730e6f7ee8de1dc6f81832e203dc08ff4fc4c', class: "overlay-header-content" }, h("ix-icon", { key: 'aa4b879448b68d7a98c663c1a1687886ec1ff319', size: "32", name: this.icon }), h("span", { key: '54c28bb988123955edb26f656af30a808b75e5d3', class: "overlay-header-title", title: this.name }, this.name)), h("ix-icon-button", { key: '86975e3e49b5f691c05631fa6b0726987cd136d4', class: "overlay-close", ghost: true, icon: 'close', size: "24", onClick: () => this.closeOverlay() })), h("slot", { key: 'fa0eb00b9acfe52af042b580c69b8cd444b35acc' })));
    }
    get hostElement() { return getElement(this); }
};
MapNavigationOverlay.slowTime = 500;
MapNavigationOverlay.style = IxMapNavigationOverlayStyle0;

export { MapNavigationOverlay as ix_map_navigation_overlay };

//# sourceMappingURL=ix-map-navigation-overlay.entry.js.map