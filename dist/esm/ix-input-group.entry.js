import { r as registerInstance, h, H as Host, g as getElement } from './index-f18c5ad1.js';
import { g as getSlottedElements } from './shadow-dom-60e9243d.js';

const inputGroupCss = ":host{position:relative;display:flex;width:100%;flex-wrap:wrap;align-items:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .group{display:flex;position:absolute;align-items:center;height:100%}:host .group-start{left:0px;height:2rem;margin-left:0.375rem;color:var(--theme-color-soft-text)}:host .group-end{right:0px;height:2rem;margin-right:0.375rem;color:var(--theme-color-soft-text)}:host ::slotted(*){display:flex}";
const IxInputGroupStyle0 = inputGroupCss;

const InputGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    startSlotChanged() {
        const slot = this.hostElement.shadowRoot.querySelector('slot[name="input-start"]');
        setTimeout(() => {
            var _a, _b;
            const startPadding = this.getChildrenWidth(slot);
            if (startPadding !== 0) {
                this.inputPaddingLeft = 15 + startPadding;
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
                const left = this.inputPaddingLeft !== 0 ? this.inputPaddingLeft : 8;
                this.inputElement.style.backgroundPosition = `left ${left}px center`;
                this.inputPaddingLeft += 32;
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
        const endElements = getSlottedElements(slotElement);
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
        return (h(Host, { key: '29a80f73af90ded68d51fc2c8b45480eb5f51103' }, h("div", { key: 'b1eb8162183e5321065be638a2cc066457f4a9d6', class: "group group-start" }, h("slot", { key: 'e45fbadac51e50eb02a8b472d27dfcb8ed20d07a', name: "input-start" })), h("slot", { key: '0e0d9175f0bfdf30591d16bb773969e1e30f5ea6' }), h("div", { key: 'a56044407d0ff6c478754ceb80b64c0399506c4a', class: "group group-end" }, h("slot", { key: 'ccda1fe838ca49022b6a3dc5f02b183a867bb54b', name: "input-end" }))));
    }
    get hostElement() { return getElement(this); }
};
InputGroup.style = IxInputGroupStyle0;

export { InputGroup as ix_input_group };

//# sourceMappingURL=ix-input-group.entry.js.map