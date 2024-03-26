'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');
const shadowDom = require('./shadow-dom-73f9d553.js');

const modalContentCss = ":host{display:block;position:relative;overflow:auto;padding:0.25rem 0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxModalContentStyle0 = modalContentCss;

const ModalContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a879639cc048dc4388ff5f324c6beaf928089480' }, index.h("slot", { key: 'b7d7d8afe947646464dd409bcc574cba40c9a1b3' })));
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
        return (index.h(index.Host, { key: 'ae262d966e9e69c5c7558190f61928b4c109643f' }, this.icon ? (index.h("ix-icon", { class: 'modal-icon', name: this.icon, color: this.iconColor })) : null, index.h("ix-typography", { key: '4ff8195c0b582e37527d793e1e32615cb190e0a5', variant: 'default-title' }, index.h("slot", { key: '10f9506941a2f34631520d7209612c3cf07dd431' })), !this.hideClose ? (index.h("ix-icon-button", { onClick: (event) => this.onCloseClick(event), ghost: true, icon: "close", class: 'modal-close' })) : null));
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