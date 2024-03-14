import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from './index-5cd176b3.js';
import { a as closestPassShadow } from './shadow-dom-60e9243d.js';

const modalContentCss = ":host{display:block;position:relative;overflow:auto;padding:0.25rem 0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxModalContentStyle0 = modalContentCss;

const ModalContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'b36a65aae830091d79a14c6ff3eae20cb6a188ce' }, h("slot", { key: '9c2e696a169ec08f58a831086d29264426e03cc9' })));
    }
};
ModalContent.style = IxModalContentStyle0;

const modalHeaderCss = ":host{display:flex;padding:0.5rem;align-items:center;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-close{margin-left:auto;margin-right:-1rem}:host .modal-icon{margin-right:1rem}";
const IxModalHeaderStyle0 = modalHeaderCss;

const ModalHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeClick = createEvent(this, "closeClick", 7);
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
        this.parentDialog = closestPassShadow(this.hostElement, 'ix-modal');
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
        return (h(Host, { key: '6acc4a0a566d2b681ccabf3b1bc1b8a09da23926' }, this.icon ? (h("ix-icon", { class: 'modal-icon', name: this.icon, color: this.iconColor })) : null, h("ix-typography", { key: '1bcbb5e77ec381b904efa5d18315a35da9fb5964', variant: 'default-title' }, h("slot", { key: '12f1f41c559b4ba64c69e5039d425ee17019254a' })), !this.hideClose ? (h("ix-icon-button", { onClick: (event) => this.onCloseClick(event), ghost: true, icon: "close", class: 'modal-close' })) : null));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "icon": ["onIconChange"]
    }; }
};
ModalHeader.style = IxModalHeaderStyle0;

export { ModalContent as ix_modal_content, ModalHeader as ix_modal_header };

//# sourceMappingURL=ix-modal-content_2.entry.js.map