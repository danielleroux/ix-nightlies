/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { arrow, autoUpdate, computePosition, flip, inline, offset, shift, } from "@floating-ui/dom";
import { h, Host } from "@stencil/core";
/**
 * @slot tooltip-message - Custom tooltip message with html support
 */
export class ValidationTooltip {
    constructor() {
        this.onSubmitBind = this.onSubmit.bind(this);
        this.onInputFocusBind = this.onInputFocus.bind(this);
        this.message = undefined;
        this.placement = 'top';
        this.suppressAutomaticPlacement = false;
        this.isInputValid = true;
        this.tooltipPosition = undefined;
        this.arrowPosition = undefined;
    }
    get arrow() {
        return this.hostElement.shadowRoot.querySelector('#arrow');
    }
    get inputElement() {
        return this.hostElement.querySelector('input');
    }
    get formElement() {
        var _a;
        return (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.form;
    }
    get tooltipElement() {
        return this.hostElement.shadowRoot.querySelector('.validation-tooltip');
    }
    destroyAutoUpdate() {
        if (this.tooltipElement) {
            this.tooltipElement.style.display = 'none';
        }
        if (this.autoUpdateCleanup) {
            this.autoUpdateCleanup();
        }
    }
    applyTooltipPosition() {
        this.tooltipElement.style.display = 'block';
        let positionConfig = {
            strategy: 'fixed',
            middleware: [
                inline(),
                shift(),
                offset({
                    mainAxis: 8,
                }),
            ],
        };
        if (!this.suppressAutomaticPlacement) {
            positionConfig.middleware.push(flip({ fallbackStrategy: 'initialPlacement' }));
        }
        positionConfig.placement = this.placement;
        this.autoUpdateCleanup = autoUpdate(this.inputElement, this.tooltipElement, async () => {
            positionConfig.middleware = [
                ...positionConfig.middleware,
                arrow({
                    element: this.arrow,
                }),
            ];
            const computeResponse = await computePosition(this.inputElement, this.tooltipElement, positionConfig);
            if (computeResponse.middlewareData.arrow) {
                const { x, y } = computeResponse.middlewareData.arrow;
                this.arrowPosition = {
                    x,
                    y,
                };
                Object.assign(this.arrow.style, {
                    left: x != null ? `${x}px` : '',
                    top: y != null ? `${y}px` : '',
                });
            }
            this.tooltipPosition = {
                x: computeResponse.x,
                y: computeResponse.y,
            };
        }, {
            ancestorResize: true,
            ancestorScroll: true,
            elementResize: true,
        });
    }
    componentDidLoad() {
        if (!this.inputElement) {
            throw Error('Validation tooltip is only working with an direct input child.');
        }
        if (!this.formElement) {
            throw Error('Validation tooltip is only working with an form element.');
        }
        this.formElement.addEventListener('submit', this.onSubmitBind);
        this.inputElement.addEventListener('focus', this.onInputFocusBind);
        this.observer = new MutationObserver(() => {
            if (this.inputElement.classList.contains('is-invalid')) {
                this.isInputValid = false;
                this.validationChanged();
            }
        });
        this.observer.observe(this.inputElement, {
            childList: false,
            subtree: false,
            attributes: true,
            attributeFilter: ['class'],
        });
    }
    onInputFocus() {
        this.isInputValid = true;
    }
    onSubmit() {
        if (this.formElement.classList.contains('needs-validation')) {
            this.isInputValid = this.inputElement.validity.valid;
        }
    }
    disconnectedCallback() {
        var _a, _b, _c;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.destroyAutoUpdate();
        (_b = this.formElement) === null || _b === void 0 ? void 0 : _b.removeEventListener('submit', this.onSubmitBind);
        (_c = this.inputElement) === null || _c === void 0 ? void 0 : _c.removeEventListener('focus', this.onInputFocusBind);
    }
    validationChanged() {
        if (!this.isInputValid) {
            this.applyTooltipPosition();
        }
        else {
            this.destroyAutoUpdate();
        }
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '67aacf7f22d2d165674ab78c2f590c54abe33420' }, h("slot", { key: 'e0c33f6e04e6ce11caeb8dba4318214699de0f4c' }), h("div", { key: '3c5d508386e333a2ca50dc5bfe6ab59375c60e37', role: "tooltip", style: {
                display: 'none',
                position: 'fixed',
                top: '0',
                left: '0',
                transform: `translate(${Math.round(((_a = this.tooltipPosition) === null || _a === void 0 ? void 0 : _a.x) || 0)}px,${Math.round(((_b = this.tooltipPosition) === null || _b === void 0 ? void 0 : _b.y) || 0)}px)`,
            }, class: "validation-tooltip text-default" }, this.message, h("slot", { key: '8e87f49c00ea3916fd83a3b7e69b996311197dcb', name: "tooltip-message" }), h("div", { key: '1bd0d2d368cb7cb0fa113605522fff53831f2c35', id: "arrow" }))));
    }
    static get is() { return "ix-validation-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["validation-tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["validation-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "message": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Message of the tooltip"
                },
                "attribute": "message",
                "reflect": false
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Side",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {
                        "Side": {
                            "location": "import",
                            "path": "../dropdown/placement",
                            "id": "src/components/dropdown/placement.ts::Side"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placement of the tooltip"
                },
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'top'"
            },
            "suppressAutomaticPlacement": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "Suppress the automatic placement of the dropdown."
                },
                "attribute": "suppress-automatic-placement",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isInputValid": {},
            "tooltipPosition": {},
            "arrowPosition": {}
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "isInputValid",
                "methodName": "validationChanged"
            }];
    }
}
//# sourceMappingURL=validation-tooltip.js.map
