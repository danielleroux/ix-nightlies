'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const mutationObserver = require('./mutation-observer-babb20a5.js');
const flipTileState = require('./flip-tile-state-92223109.js');

const flipTileCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}@keyframes flip-animation{0%{transform:rotateY(0)}50%{transform:rotateY(90deg)}51%{transform:rotateY(270deg)}100%{transform:rotateY(360deg)}}:host{display:flex;flex-direction:column;perspective:1000px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .flip-tile-header{display:flex;align-items:center;height:2.5rem;padding:0 0.5rem 0 1rem}:host .flip-tile-header .header-slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;min-width:0}:host .content-container{flex-grow:1;margin:1rem}:host .flip-tile-container{display:flex;flex-direction:column;height:100%;background-color:var(--theme-blind-base--background);border:solid 1px var(--theme-blind-base--border-color);border-radius:var(--theme-flip-tile--border-radius) var(--theme-flip-tile--border-radius) 0 0;transform-style:preserve-3d}:host .flip-tile-container.flip-animation-active{animation:flip-animation 300ms, ease-in-out}:host .flip-tile-container .footer{display:flex;height:3rem;align-items:center;justify-content:center;padding:0 0.5rem;color:var(--theme-flip-footer--color);background-color:var(--theme-blind-base--background)}:host .flip-tile-container .footer :first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:100%}:host .flip-tile-container ::slotted(*){overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;align-items:center;min-width:0}:host .flip-tile-container.primary{border-color:var(--theme-color-primary)}:host .flip-tile-container.primary .footer{background-color:var(--theme-color-primary);color:var(--theme-color-primary--contrast)}:host .flip-tile-container.info{border-color:var(--theme-color-info)}:host .flip-tile-container.info .footer{background-color:var(--theme-color-info);color:var(--theme-color-info--contrast)}:host .flip-tile-container.warning{border-color:var(--theme-color-warning)}:host .flip-tile-container.warning .footer{background-color:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}:host .flip-tile-container.alarm{border-color:var(--theme-color-alarm)}:host .flip-tile-container.alarm .footer{background-color:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}:host:hover .flip-tile-container .footer ix-icon{color:var(--theme-color-std-text)}";
const IxFlipTileStyle0 = flipTileCss;

const FlipTile = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ANIMATION_DURATION = 150;
        this.state = undefined;
        this.height = 15.125;
        this.width = 16;
        this.index = 0;
        this.isFlipAnimationActive = undefined;
    }
    componentDidLoad() {
        this.observer = mutationObserver.createMutationObserver(() => this.updateContentItems());
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
        return (index.h(index.Host, { key: 'f48c8fa439a5b38b06fbda02e4185aa4195dcba5', style: {
                height: `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                'min-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                'max-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                width: `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
                'min-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
                'max-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
            } }, index.h("div", { key: 'fc676886cdf565c7cc121640b37c579eb1ea2f64', class: {
                'flip-tile-container': true,
                info: this.state === flipTileState.FlipTileState.Info,
                warning: this.state === flipTileState.FlipTileState.Warning,
                alarm: this.state === flipTileState.FlipTileState.Alarm,
                primary: this.state === flipTileState.FlipTileState.Primary,
                'flip-animation-active': this.isFlipAnimationActive,
            } }, index.h("div", { key: '036a5f9b336796232c649a0c1718601ccd5c46b5', class: "flip-tile-header" }, index.h("div", { key: '3eb347f451cf27f614f855eee99f8562fc4aa785', class: "header-slot-container text-l-title" }, index.h("slot", { key: '563785f622191f0692f3790f3a908125e30e7276', name: "header" })), index.h("ix-icon-button", { key: '9a52873d2890f187d3a2c940688bbd000e676233', icon: 'eye', variant: "primary", ghost: true, onClick: () => this.toggleIndex() })), index.h("div", { key: '0efc4537aa97d3b79459141678dc180a140bd658', class: "content-container" }, index.h("slot", { key: '1c7035e6e29731a2f192a37f1d86985c3c219220' })), index.h("div", { key: '2d1f20e35490d7f87b1d70cb9783268c5f1dc270', class: {
                footer: true,
                'contrast-light': this.state === flipTileState.FlipTileState.Warning,
                'contrast-dark': this.state === flipTileState.FlipTileState.Info ||
                    this.state === flipTileState.FlipTileState.Alarm,
            } }, index.h("slot", { key: '074e8bcae63f134dab5623df0682c754e3212159', name: "footer" })))));
    }
    get hostElement() { return index.getElement(this); }
};
FlipTile.style = IxFlipTileStyle0;

exports.ix_flip_tile = FlipTile;

//# sourceMappingURL=ix-flip-tile.cjs.entry.js.map