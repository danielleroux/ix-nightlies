/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import { createMutationObserver } from "../utils/mutation-observer";
export class WorkflowSteps {
    constructor() {
        this.vertical = false;
        this.clickable = false;
        this.selectedIndex = 0;
    }
    getSteps() {
        return Array.from(this.hostElement.querySelectorAll('ix-workflow-step'));
    }
    updateSteps() {
        let steps = this.getSteps();
        steps.forEach((element, index) => {
            element.vertical = this.vertical;
            element.clickable = this.clickable;
            element.selected = this.selectedIndex === index;
            if (steps.length === 1) {
                element.position = 'single';
                return;
            }
            if (index === 0) {
                element.position = 'first';
            }
            else if (index === steps.length - 1) {
                element.position = 'last';
            }
            else {
                element.position = 'undefined';
            }
        });
    }
    onStepSelectionChanged(event) {
        const eventTarget = event.detail;
        const steps = this.getSteps();
        const clickIndex = steps.findIndex((step) => step === eventTarget);
        const clientEvent = this.stepSelected.emit(clickIndex);
        if (clientEvent.defaultPrevented) {
            return;
        }
        steps.forEach((step, index) => {
            step.selected = index === clickIndex;
        });
    }
    componentDidLoad() {
        this.observer = createMutationObserver((mutations) => {
            for (let mutation of mutations) {
                if (mutation.type === 'childList') {
                    this.updateSteps();
                }
            }
        });
        this.observer.observe(this.hostElement, { childList: true });
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    componentDidRender() {
        this.updateSteps();
    }
    render() {
        return (h(Host, { key: '5f78e87029a37e70a97bbb09f61b0749e7c137c2' }, h("div", { key: 'ff1ce2dca97b243b9895baad94615e380cc3b00f', class: { steps: true, vertical: this.vertical } }, h("slot", { key: '99711cedbb1939adc813d6b360b3d83404cac421' }))));
    }
    static get is() { return "ix-workflow-steps"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["workflow-steps.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["workflow-steps.css"]
        };
    }
    static get properties() {
        return {
            "vertical": {
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
                    "tags": [],
                    "text": "Select orientation"
                },
                "attribute": "vertical",
                "reflect": false,
                "defaultValue": "false"
            },
            "clickable": {
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
                    "tags": [],
                    "text": "Activate navigation click"
                },
                "attribute": "clickable",
                "reflect": false,
                "defaultValue": "false"
            },
            "selectedIndex": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Activate navigation click"
                },
                "attribute": "selected-index",
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get events() {
        return [{
                "method": "stepSelected",
                "name": "stepSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "On step selected event"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "selectedChanged",
                "method": "onStepSelectionChanged",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=workflow-steps.js.map
