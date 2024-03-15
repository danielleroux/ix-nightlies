/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { getSlottedElements } from "../utils/shadow-dom";
export class InputGroup {
    constructor() {
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
        return (h(Host, { key: '6c305a387eab52c23cff873efb217835cb6552fa' }, h("div", { key: 'db0c738d7a46099408b419a27bc00b8417d3c365', class: "group group-start" }, h("slot", { key: '63c34ce0364cb706b008d50ccf0f56e6fd79dd98', name: "input-start" })), h("slot", { key: '1aac71bae49371f2974dac8f2e9b88df12fd57cb' }), h("div", { key: '552f38ecce4f5db61b108f3a1f8badc52fe546ea', class: "group group-end" }, h("slot", { key: 'e4074cd35b74ec82b7413f11e2c21a8896def99e', name: "input-end" }))));
    }
    static get is() { return "ix-input-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["input-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-group.css"]
        };
    }
    static get states() {
        return {
            "inputPaddingLeft": {},
            "inputPaddingRight": {}
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=input-group.js.map
