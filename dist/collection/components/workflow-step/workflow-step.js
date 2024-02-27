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
        return (h(Host, { key: 'e6da26c63019f1efd788ac0e6d64e8c669f711b3', onClick: () => this.onStepClick() }, h("div", { key: '607ad21e42070abc412fd4a5313e207f7908d765', tabIndex: 0, class: {
                step: true,
                selected: this.selected,
                vertical: this.vertical,
                disabled: this.disabled,
                clickable: this.clickable && !this.disabled,
            } }, h("div", { key: 'a55397363ac7fdb3579751903e98e4840314a2c7', class: "wrapper" }, h("div", { key: 'b4044cabf368cdb5632727baf1a9040a2ba59296', class: {
                line: true,
                selected: this.selected,
                [this.status]: true,
                [this.position]: true,
            } }), h("div", { key: 'da4cbb5b0755dea7c8ff4c45676a5c7da33e0caf', class: "iconWrapper" }, icons, h("slot", { key: '3059dcda912a1fd2d7225dd7c97cf6c7f640b875', name: "custom-icon" }))), h("div", { key: '316a8dbb4b5e8845cca3635b3f2c1bb5ef3ebefd', class: "text" }, h("slot", { key: '9cc1127aa169fb7096b671720160da4a3ab7efc7' })))));
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
