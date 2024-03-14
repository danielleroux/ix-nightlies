'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const shadowDom = require('./shadow-dom-73f9d553.js');

const modalContentCss = ":host{display:block;position:relative;overflow:auto;padding:0.25rem 0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxModalContentStyle0 = modalContentCss;

const ModalContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b36a65aae830091d79a14c6ff3eae20cb6a188ce' }, index.h("slot", { key: '9c2e696a169ec08f58a831086d29264426e03cc9' })));
    }
};
ModalContent.style = IxModalContentStyle0;

const modalHeaderCss = ":host{display:flex;padding:0.5rem;align-items:center;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-close{margin-left:auto;margin-right:-1rem}:host .modal-icon{margin-right:1rem}";
const IxModalHeaderStyle0 = modalHeaderCss;

const ModalHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeClick = index.createEvent(this, "closeClick", 7);
        this.hideClose = false;
        this.icon = undefined;
        this.iconColor = undefined;
    }
    onIconChange(icon) {
        if (this.parentDialog) {
            if (icon) {
                this.parentDialog.classList.add('with-icon');
            }
            else {
                this.parentDialog.classList.remove('with-icon');
            }
        }
    }
    componentDidLoad() {
        this.parentDialog = shadowDom.closestPassShadow(this.hostElement, 'ix-modal');
        this.onIconChange(this.icon);
    }
    onCloseClick(event) {
        const ce = this.closeClick.emit(event);
        if (ce.defaultPrevented || event.defaultPrevented) {
            return;
        }
        this.parentDialog.dismissModal();
    }
    render() {
        return (index.h(index.Host, { key: '6acc4a0a566d2b681ccabf3b1bc1b8a09da23926' }, this.icon ? (index.h("ix-icon", { class: 'modal-icon', name: this.icon, color: this.iconColor })) : null, index.h("ix-typography", { key: '1bcbb5e77ec381b904efa5d18315a35da9fb5964', variant: 'default-title' }, index.h("slot", { key: '12f1f41c559b4ba64c69e5039d425ee17019254a' })), !this.hideClose ? (index.h("ix-icon-button", { onClick: (event) => this.onCloseClick(event), ghost: true, icon: "close", class: 'modal-close' })) : null));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "icon": ["onIconChange"]
    }; }
};
ModalHeader.style = IxModalHeaderStyle0;

exports.ix_modal_content = ModalContent;
exports.ix_modal_header = ModalHeader;

//# sourceMappingURL=ix-modal-content_2.cjs.entry.js.map