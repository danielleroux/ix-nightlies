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
        return (h(Host, { key: '7692448b4bbda3ba73fc23b13fcb25a4a6d67a05', class: "animate__animated animate__fadeIn" }, h("div", { key: 'fd4decfcdf52323be94dcd163f13e239c2c82b68', class: "toast-body", onPointerLeave: () => {
                this.touched = false;
            }, onPointerEnter: () => {
                this.touched = true;
            } }, this.type || this.icon ? (h("div", { class: "toast-icon" }, this.getIcon())) : null, h("div", { key: '5463178efd7be1430fc621c9460ca9370d33327d', class: "toast-content" }, this.toastTitle ? (h("div", { class: "toast-title" }, this.toastTitle)) : null, h("div", { key: 'bda35d6203126a07ce204e63103225c3d11fdef8', class: "toast-message" }, h("slot", { key: '8e5663ee3fa2b6370e6b4389ba5cb6b8fd4adb4f' }))), h("div", { key: '2b4b7d88f6b58bb75ea665d4fffa4a668d6a8da2', class: "toast-close" }, h("ix-icon-button", { key: '6a65d9c8a4458b73d210546883524c94be46c636', icon: 'close', size: "24", ghost: true, onClick: () => this.closeToast.emit() }))), this.autoClose ? (h("div", { class: progressBarClass.join(' '), style: progressBarStyle, onAnimationEnd: () => {
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
