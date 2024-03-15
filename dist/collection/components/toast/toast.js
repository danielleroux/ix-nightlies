/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
export class Toast {
    constructor() {
        this.type = 'info';
        this.toastTitle = undefined;
        this.autoCloseDelay = 5000;
        this.autoClose = true;
        this.icon = undefined;
        this.iconColor = undefined;
        this.progress = 0;
        this.touched = false;
    }
    getIcon() {
        if (this.icon) {
            return h("ix-icon", { name: this.icon, color: this.iconColor, size: "24" });
        }
        switch (this.type) {
            case 'info':
                return h("ix-icon", { name: 'info', size: "24", color: "color-std-text" });
            case 'error':
                return h("ix-icon", { name: 'error', size: "24", color: "color-alarm" });
            case 'success':
                return h("ix-icon", { name: 'success', size: "24", color: "color-success" });
            case 'warning':
                return h("ix-icon", { name: 'warning', size: "24", color: "color-warning" });
            default:
                return '';
        }
    }
    close() {
        if (this.hostElement) {
            this.hostElement.classList.add('animate__fadeOut');
        }
        setTimeout(() => {
            this.closeToast.emit();
        }, 250);
    }
    render() {
        let progressBarStyle = {};
        const progressBarClass = ['toast-progress-bar'];
        progressBarStyle = {
            animationDuration: `${this.autoCloseDelay}ms`,
            animationPlayState: this.touched ? 'paused' : 'running',
        };
        progressBarClass.push('toast-progress-bar--animated');
        return (h(Host, { key: '064ab233924479a92456900e282fe87e98ff2074', class: "animate__animated animate__fadeIn" }, h("div", { key: 'e66b0034a2d43eb475d79127eda95d7af81dc77c', class: "toast-body", onPointerLeave: () => {
                this.touched = false;
            }, onPointerEnter: () => {
                this.touched = true;
            } }, this.type || this.icon ? (h("div", { class: "toast-icon" }, this.getIcon())) : null, h("div", { key: '122302506aff7076b6e5d6df66e4409ca86fde31', class: "toast-content" }, this.toastTitle ? (h("div", { class: "toast-title" }, this.toastTitle)) : null, h("div", { key: '22f349d326b604cd7c5734ebd09280a1263423e4', class: "toast-message" }, h("slot", { key: '78e822dd9ac08ab00b2b789dd95a7fd9ef0ddf70' }))), h("div", { key: 'f67bf3768af2d77c5619cced98976d9f92a57a68', class: "toast-close" }, h("ix-icon-button", { key: '81fceaa64577ab118ff9c59efc3098bec235a7b3', icon: 'close', size: "24", ghost: true, onClick: () => this.closeToast.emit() }))), this.autoClose ? (h("div", { class: progressBarClass.join(' '), style: progressBarStyle, onAnimationEnd: () => {
                this.close();
            }, onTransitionEnd: () => {
                if (this.progress === 0) {
                    this.close();
                }
            } })) : null));
    }
    static get is() { return "ix-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["toast.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ToastType",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "ToastType": {
                            "location": "import",
                            "path": "./toast-utils",
                            "id": "src/components/toast/toast-utils.ts::ToastType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Toast type"
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'info'"
            },
            "toastTitle": {
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
                    "text": "Toast title"
                },
                "attribute": "toast-title",
                "reflect": false
            },
            "autoCloseDelay": {
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
                    "text": "Autoclose title after delay"
                },
                "attribute": "auto-close-delay",
                "reflect": false,
                "defaultValue": "5000"
            },
            "autoClose": {
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
                    "text": "Autoclose behavior"
                },
                "attribute": "auto-close",
                "reflect": false,
                "defaultValue": "true"
            },
            "icon": {
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
                    "text": "Icon of toast"
                },
                "attribute": "icon",
                "reflect": false
            },
            "iconColor": {
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
                    "text": "Icon color of toast"
                },
                "attribute": "icon-color",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "progress": {},
            "touched": {}
        };
    }
    static get events() {
        return [{
                "method": "closeToast",
                "name": "closeToast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Toast closed"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=toast.js.map
