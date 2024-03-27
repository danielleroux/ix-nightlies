'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');
const shadowDom = require('./shadow-dom-73f9d553.js');

const inputGroupCss = ":host{position:relative;display:flex;width:100%;flex-wrap:wrap;align-items:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .group{display:flex;position:absolute;align-items:center;height:100%}:host .group-start{left:0px;height:2rem;margin-left:0.375rem;color:var(--theme-color-soft-text)}:host .group-end{right:0px;height:2rem;margin-right:0.5rem;color:var(--theme-color-soft-text)}:host ::slotted(*){display:flex}:host(.disabled){pointer-events:none}:host(.disabled) .group-start ::slotted(*),:host(.disabled) .group-end ::slotted(*){opacity:0.4 !important}";
const IxInputGroupStyle0 = inputGroupCss;

const InputGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.disabled = false;
        this.inputPaddingLeft = 0;
        this.inputPaddingRight = 0;
    }
    get inputElement() {
        return this.hostElement.querySelector('input');
    }
    componentWillLoad() {
        var _a;
        const { valid } = this.inputElement.validity;
        this.inputElement.addEventListener('valid', () => {
            this.onValidInput();
        });
        this.inputElement.addEventListener('invalid', () => {
            this.onInvalidInput();
        });
        this.inputElement.addEventListener('input', () => {
            this.startSlotChanged();
        });
        (_a = this.inputElement.form) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', () => {
            this.startSlotChanged();
        });
        valid ? this.onValidInput() : this.onInvalidInput();
        this.observer = new MutationObserver(() => {
            this.slotChanged();
            this.startSlotChanged();
            this.endSlotChanged();
        });
        this.observer.observe(this.hostElement, {
            subtree: true,
            childList: true,
            attributes: true,
            characterData: true,
        });
    }
    componentDidRender() {
        this.prepareInputElement();
    }
    onValidInput() {
        this.startSlotChanged();
    }
    onInvalidInput() {
        this.startSlotChanged();
    }
    prepareInputElement() {
        if (this.inputElement) {
            this.inputElement.style.width = '100%';
            if (this.inputPaddingRight !== 0) {
                this.inputElement.style.paddingRight = this.inputPaddingRight + 'px';
            }
            else {
                this.inputElement.style.paddingRight = '0.5rem';
            }
            if (this.inputPaddingLeft !== 0) {
                this.inputElement.style.paddingLeft = this.inputPaddingLeft + 'px';
            }
            else {
                this.inputElement.style.paddingLeft = '0.5rem';
            }
        }
        else {
            console.warn('You used the ix-input-group without an input tag, e.g. <input class="form-control" />');
        }
    }
    slotChanged() {
        var _a;
        this.disabled = (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.disabled;
    }
    startSlotChanged() {
        const slot = this.hostElement.shadowRoot.querySelector('slot[name="input-start"]');
        setTimeout(() => {
            var _a, _b;
            const startPadding = this.getChildrenWidth(slot);
            if (startPadding !== 0) {
                this.inputPaddingLeft = 11 + startPadding;
            }
            else {
                this.inputPaddingLeft = 0;
            }
            if (!this.inputElement) {
                return;
            }
            const isInputInvalid = !this.inputElement.validity.valid ||
                this.inputElement.classList.contains('is-invalid');
            const formWasValidated = ((_a = this.inputElement.form) === null || _a === void 0 ? void 0 : _a.classList.contains('was-validated')) ||
                ((_b = this.inputElement.form) === null || _b === void 0 ? void 0 : _b.noValidate) === false;
            if (formWasValidated && isInputInvalid) {
                const left = this.inputPaddingLeft !== 0 ? this.inputPaddingLeft : 7;
                this.inputElement.style.backgroundPosition = `left ${left}px center`;
                this.inputPaddingLeft += 26;
            }
        });
    }
    endSlotChanged() {
        const slot = this.hostElement.shadowRoot.querySelector('slot[name="input-end"]');
        setTimeout(() => {
            this.inputPaddingRight = 15 + this.getChildrenWidth(slot);
        });
    }
    getChildrenWidth(slotElement) {
        if (!slotElement) {
            return 0;
        }
        const endElements = shadowDom.getSlottedElements(slotElement);
        if (endElements.length === 0) {
            return 0;
        }
        let width = 0;
        endElements.forEach((element) => {
            width += element.getBoundingClientRect().width;
        });
        return width;
    }
    render() {
        return (index.h(index.Host, { key: '094ec7eabecee10f21d44641ae5f31c7fce65443', class: { disabled: this.disabled } }, index.h("div", { key: '9ddb51dcc940e30fe6dbd1ff6b49c183fcefef74', class: "group group-start" }, index.h("slot", { key: '8269f91cac4b0401ac21f718d41f03c3b85760cc', name: "input-start" })), index.h("slot", { key: '6990cc9488e246a6e2d6666add1c4d57585a3262' }), index.h("div", { key: '8a804a2249ac74c7338ac0afb015a2278a83d7e5', class: "group group-end" }, index.h("slot", { key: 'b6defa490be1007a5f6b0f64e5e263dc12662af6', name: "input-end" }))));
    }
    get hostElement() { return index.getElement(this); }
};
InputGroup.style = IxInputGroupStyle0;

exports.ix_input_group = InputGroup;

//# sourceMappingURL=ix-input-group.cjs.entry.js.map