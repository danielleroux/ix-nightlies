import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createMutationObserver } from './mutation-observer.js';
import { F as FlipTileState } from './flip-tile-state.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './spinner.js';

const flipTileCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}@keyframes flip-animation{0%{transform:rotateY(0)}50%{transform:rotateY(90deg)}51%{transform:rotateY(270deg)}100%{transform:rotateY(360deg)}}:host{display:flex;flex-direction:column;perspective:1000px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .flip-tile-header{display:flex;align-items:center;height:2.5rem;padding:0 0.5rem 0 1rem}:host .flip-tile-header .header-slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;min-width:0}:host .content-container{flex-grow:1;margin:1rem}:host .flip-tile-container{display:flex;flex-direction:column;height:100%;background-color:var(--theme-blind-base--background);border:solid 1px var(--theme-blind-base--border-color);border-radius:var(--theme-flip-tile--border-radius) var(--theme-flip-tile--border-radius) 0 0;transform-style:preserve-3d}:host .flip-tile-container.flip-animation-active{animation:flip-animation 300ms, ease-in-out}:host .flip-tile-container .footer{display:flex;height:3rem;align-items:center;justify-content:center;padding:0 0.5rem;color:var(--theme-flip-footer--color);background-color:var(--theme-blind-base--background)}:host .flip-tile-container .footer :first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:100%}:host .flip-tile-container ::slotted(*){overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;align-items:center;min-width:0}:host .flip-tile-container.primary{border-color:var(--theme-color-primary)}:host .flip-tile-container.primary .footer{background-color:var(--theme-color-primary);color:var(--theme-color-primary--contrast)}:host .flip-tile-container.info{border-color:var(--theme-color-info)}:host .flip-tile-container.info .footer{background-color:var(--theme-color-info);color:var(--theme-color-info--contrast)}:host .flip-tile-container.warning{border-color:var(--theme-color-warning)}:host .flip-tile-container.warning .footer{background-color:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}:host .flip-tile-container.alarm{border-color:var(--theme-color-alarm)}:host .flip-tile-container.alarm .footer{background-color:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}:host:hover .flip-tile-container .footer ix-icon{color:var(--theme-color-std-text)}";
const IxFlipTileStyle0 = flipTileCss;

const FlipTile = /*@__PURE__*/ proxyCustomElement(class FlipTile extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.ANIMATION_DURATION = 150;
        this.state = undefined;
        this.height = 15.125;
        this.width = 16;
        this.index = 0;
        this.isFlipAnimationActive = undefined;
    }
    componentDidLoad() {
        this.observer = createMutationObserver(() => this.updateContentItems());
        this.observer.observe(this.hostElement, {
            childList: true,
        });
    }
    componentWillLoad() {
        this.updateContentItems();
        this.updateContentVisibility(this.index);
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    updateContentItems() {
        this.contentItems = Array.from(this.hostElement.querySelectorAll('ix-flip-tile-content'));
    }
    updateContentVisibility(indexVisible) {
        this.contentItems.forEach((content, index) => (content.contentVisible = index === indexVisible));
    }
    toggleIndex() {
        this.doFlipAnimation();
    }
    doFlipAnimation() {
        this.isFlipAnimationActive = true;
        setTimeout(() => {
            this.updateContentVisibility(this.index);
            if (this.index >= this.contentItems.length - 1) {
                this.index = 0;
            }
            else {
                this.index++;
            }
            this.updateContentVisibility(this.index);
        }, this.ANIMATION_DURATION);
        setTimeout(() => {
            this.isFlipAnimationActive = false;
        }, 2 * this.ANIMATION_DURATION);
    }
    render() {
        return (h(Host, { key: 'cc8aa4a3840420698c89cf7eba1fa39d438200b2', style: {
                height: `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                'min-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                'max-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                width: `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
                'min-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
                'max-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
            } }, h("div", { key: 'e0108d7724c6ccc8d066cbb699ee578ecc238a84', class: {
                'flip-tile-container': true,
                info: this.state === FlipTileState.Info,
                warning: this.state === FlipTileState.Warning,
                alarm: this.state === FlipTileState.Alarm,
                primary: this.state === FlipTileState.Primary,
                'flip-animation-active': this.isFlipAnimationActive,
            } }, h("div", { key: 'a25a48841949a984ddee4e02c6e59931eec20d6e', class: "flip-tile-header" }, h("div", { key: 'd6025ec293a8f0d19a4eee9034e127ca9da8e74d', class: "header-slot-container text-l-title" }, h("slot", { key: 'fcf90bb2847b1e186bbaa4fbcb457587b158cb95', name: "header" })), h("ix-icon-button", { key: 'a544785da60c6b9392fa1a17ea8ad55e5f8a7072', icon: 'eye', variant: "primary", ghost: true, onClick: () => this.toggleIndex() })), h("div", { key: '6d5482c2f01280797047bca2a11c48948e0bced8', class: "content-container" }, h("slot", { key: '0cf6acf8b3c736e986d68fd14a67788267c569cf' })), h("div", { key: '001e67e180dab7afa72b53eeffdfe0fd975e4511', class: {
                footer: true,
                'contrast-light': this.state === FlipTileState.Warning,
                'contrast-dark': this.state === FlipTileState.Info ||
                    this.state === FlipTileState.Alarm,
            } }, h("slot", { key: '51f72393d82adadad9a767fc0d620ef882a67d03', name: "footer" })))));
    }
    get hostElement() { return this; }
    static get style() { return IxFlipTileStyle0; }
}, [1, "ix-flip-tile", {
        "state": [1],
        "height": [8],
        "width": [8],
        "index": [32],
        "isFlipAnimationActive": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-flip-tile", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-flip-tile":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FlipTile);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxFlipTile = FlipTile;
const defineCustomElement = defineCustomElement$1;

export { IxFlipTile, defineCustomElement };

//# sourceMappingURL=ix-flip-tile.js.map