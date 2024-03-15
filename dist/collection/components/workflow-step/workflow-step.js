/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Fragment, h, Host, } from "@stencil/core";
export class WorkflowStep {
    constructor() {
        this.vertical = false;
        this.disabled = false;
        this.status = 'open';
        this.clickable = false;
        this.selected = false;
        this.position = 'undefined';
        this.iconName = 'circle';
        this.iconColor = 'workflow-step-icon-default--color';
    }
    selectedHandler() {
        const selectedStyle = this.selected ? '--selected' : '';
        if (this.status === 'open') {
            this.iconName = this.selected ? 'circle-dot' : 'circle';
            this.iconColor = `workflow-step-icon-default--color${selectedStyle}`;
        }
        if (this.status === 'done' && !this.disabled) {
            this.iconColor = `workflow-step-icon-done--color${selectedStyle}`;
        }
    }
    watchPropHandler() {
        switch (this.status) {
            case 'open':
                this.iconName = 'circle';
                this.iconColor = 'workflow-step-icon-default--color';
                break;
            case 'success':
                this.iconName = 'success';
                this.iconColor = 'color-success';
                break;
            case 'done':
                this.iconName = 'success';
                this.iconColor = 'workflow-step-icon-done--color';
                break;
            case 'warning':
                this.iconName = 'warning';
                this.iconColor = 'color-warning';
                break;
            case 'error':
                this.iconName = 'error';
                this.iconColor = 'color-alarm';
                break;
            default:
                this.iconName = 'circle';
                break;
        }
        if (this.disabled) {
            this.iconColor = 'workflow-step-icon-success--color--disabled';
        }
    }
    componentDidLoad() {
        this.watchPropHandler();
        this.selectedHandler();
        this.customIconSlot = !!this.hostElement.querySelector('[slot="custom-icon"]');
    }
    onStepClick() {
        if (!this.disabled && this.clickable) {
            this.selectedChanged.emit(this.hostElement);
        }
    }
    render() {
        const icons = !this.customIconSlot ? (h(Fragment, null, h("ix-icon", { color: "color-1", name: this.iconName === 'warning' ? 'triangle-filled' : 'circle-filled', class: "absolute", size: "24" }), h("ix-icon", { color: this.iconColor, name: this.iconName, class: "absolute", size: "24" }))) : null;
        return (h(Host, { key: '358b9e3e25d832467c9b2abbdf9f48a270a4a340', onClick: () => this.onStepClick() }, h("div", { key: 'e5206e9a7ba4f3a3c63f82199d434f4f66e1f1dc', tabIndex: 0, class: {
                step: true,
                selected: this.selected,
                vertical: this.vertical,
                disabled: this.disabled,
                clickable: this.clickable && !this.disabled,
            } }, h("div", { key: '26fc906525c73bbfb79053ccfa0c4f7f0a2ececd', class: "wrapper" }, h("div", { key: '3990d45cdf8241bd53a849d11313e877ef82c974', class: {
                line: true,
                selected: this.selected,
                [this.status]: true,
                [this.position]: true,
            } }), h("div", { key: '9d509a30ef4c514c8d71048e9cf29bfe954659ff', class: "iconWrapper" }, icons, h("slot", { key: '61edba63ba2d2f812837fb50f55f8ce184c5821d', name: "custom-icon" }))), h("div", { key: '1e0f1c991dcd3d9d6ca9368ffef196c3133f78ba', class: "text" }, h("slot", { key: 'b758245d47b573e20a6cae6e8d28b1aa030f5b65' })))));
    }
    static get is() { return "ix-workflow-step"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["workflow-step.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["workflow-step.css"]
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
            "disabled": {
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
                    "text": "Set disabled"
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'open' | 'success' | 'done' | 'warning' | 'error'",
                    "resolved": "\"done\" | \"error\" | \"open\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set status"
                },
                "attribute": "status",
                "reflect": false,
                "defaultValue": "'open'"
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
            "selected": {
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
                    "text": "Set selected"
                },
                "attribute": "selected",
                "reflect": false,
                "defaultValue": "false"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'first' | 'last' | 'single' | 'undefined'",
                    "resolved": "\"first\" | \"last\" | \"single\" | \"undefined\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": "Activate navigation click"
                },
                "attribute": "position",
                "reflect": false,
                "defaultValue": "'undefined'"
            }
        };
    }
    static get states() {
        return {
            "iconName": {},
            "iconColor": {}
        };
    }
    static get events() {
        return [{
                "method": "selectedChanged",
                "name": "selectedChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "complexType": {
                    "original": "HTMLIxWorkflowStepElement",
                    "resolved": "HTMLIxWorkflowStepElement",
                    "references": {
                        "HTMLIxWorkflowStepElement": {
                            "location": "global",
                            "id": "global::HTMLIxWorkflowStepElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "selected",
                "methodName": "selectedHandler"
            }, {
                "propName": "disabled",
                "methodName": "watchPropHandler"
            }, {
                "propName": "status",
                "methodName": "watchPropHandler"
            }];
    }
}
//# sourceMappingURL=workflow-step.js.map
