'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const splitButtonCss = ".btn-group ix-button:first-child .btn{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.btn-group ix-button:last-child .btn{border-top-left-radius:0px;border-bottom-left-radius:0px}.btn-group ix-button:not(:first-child):not(:last-child) .btn{border-radius:0px;border-right:0px}:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .btn-group{position:relative;display:inline-flex;vertical-align:middle;width:100%}:host .btn-group>ix-button:nth-child(1){width:calc(100% - 2rem)}:host .btn-group>ix-button:nth-child(2){width:2rem}:host .middle-gap{gap:0.125rem}:host .left-button-border{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}";
const IxSplitButtonStyle0 = splitButtonCss;

const SplitButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonClick = index.createEvent(this, "buttonClick", 7);
        this.variant = 'primary';
        this.outline = false;
        this.ghost = false;
        this.label = undefined;
        this.icon = '';
        this.splitIcon = 'context-menu';
        this.disabled = false;
        this.placement = 'bottom-start';
        this.toggle = false;
    }
    linkTriggerRef() {
        if (this.triggerElement && this.dropdownElement) {
            this.dropdownElement.trigger = this.triggerElement;
        }
    }
    componentDidLoad() {
        this.linkTriggerRef();
    }
    render() {
        const buttonAttributes = {
            variant: this.variant,
            outline: this.outline,
            ghost: this.ghost,
            disabled: this.disabled,
            class: {
                'left-button-border': !this.outline,
            },
        };
        return (index.h(index.Host, { key: '52639556f15c57d83cb4cbb3d19435c6ebce416d' }, index.h("div", { key: 'ff929c04cd4935613587b66084b7aeda65df7ead', class: { 'btn-group': true, 'middle-gap': !this.outline } }, this.label ? (index.h("ix-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }), this.label)) : (index.h("ix-icon-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }))), index.h("ix-icon-button", Object.assign({ key: '6f3c9437734bcf6e1ae42c8f3ef6e122931aa551' }, buttonAttributes, { ref: (r) => (this.triggerElement = r), class: 'anchor', icon: this.splitIcon }))), index.h("ix-dropdown", { key: '4424f23d71b89cb94351e12b469e7cd8a9747a35', ref: (r) => (this.dropdownElement = r) }, index.h("slot", { key: 'f026677e93b0b182f15b1b7bf114254ee6279684' }))));
    }
    get hostElement() { return index.getElement(this); }
};
SplitButton.style = IxSplitButtonStyle0;

exports.ix_split_button = SplitButton;

//# sourceMappingURL=ix-split-button.cjs.entry.js.map