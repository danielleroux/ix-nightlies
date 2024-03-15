var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import anime from "animejs";
import { a11yBoolean, a11yHostAttributes } from "../utils/a11y";
import Animation from "../utils/animation";
import { OnListener } from "../utils/listener";
import { waitForElement } from "../utils/waitForElement";
export class Modal {
    constructor() {
        this.ariaAttributes = {};
        this.size = '360';
        this.animation = true;
        this.backdrop = true;
        this.closeOnBackdropClick = false;
        this.beforeDismiss = undefined;
        this.centered = false;
        this.keyboard = true;
        this.closeOnEscape = true;
        this.modalVisible = false;
    }
    onKey(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
        }
    }
    get dialog() {
        return this.hostElement.shadowRoot.querySelector('dialog');
    }
    slideInModal() {
        const duration = this.animation ? Animation.mediumTime : 0;
        let transformY = this.centered ? '-50%' : 40;
        anime({
            targets: this.dialog,
            duration,
            opacity: [0, 1],
            translateY: [0, transformY],
            translateX: ['-50%', '-50%'],
            easing: 'easeOutSine',
        });
    }
    slideOutModal(completeCallback) {
        const duration = this.animation ? Animation.mediumTime : 0;
        let transformY = this.centered ? '-50%' : 40;
        anime({
            targets: this.dialog,
            duration,
            opacity: [1, 0],
            translateY: [transformY, 0],
            translateX: ['-50%', '-50%'],
            easing: 'easeInSine',
            complete: () => {
                if (completeCallback) {
                    completeCallback();
                }
            },
        });
    }
    onModalClick(event) {
        if (event.target !== this.dialog) {
            return;
        }
        const rect = this.dialog.getBoundingClientRect();
        const isClickOutside = rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;
        if (!isClickOutside && this.closeOnBackdropClick) {
            this.dismissModal();
        }
    }
    /**
     * Show the dialog
     */
    async showModal() {
        try {
            const dialog = await waitForElement('dialog', this.hostElement.shadowRoot);
            this.modalVisible = true;
            dialog.showModal();
        }
        catch (e) {
            console.error('HTMLDialogElement not existing');
        }
    }
    /**
     * Dismiss the dialog
     */
    async dismissModal(reason) {
        let allowDismiss = true;
        if (this.beforeDismiss !== undefined) {
            allowDismiss = await this.beforeDismiss(reason);
        }
        if (!allowDismiss) {
            return;
        }
        this.slideOutModal(() => {
            this.modalVisible = false;
            this.dialog.close(JSON.stringify({
                type: 'dismiss',
                reason,
            }, null, 2));
            this.dialogDismiss.emit(reason);
        });
    }
    /**
     * Close the dialog
     */
    async closeModal(reason) {
        this.slideOutModal(() => {
            this.dialog.close(JSON.stringify({
                type: 'close',
                reason,
            }, null, 2));
            this.dialogClose.emit(reason);
        });
    }
    componentDidLoad() {
        this.slideInModal();
    }
    componentWillLoad() {
        this.ariaAttributes = a11yHostAttributes(this.hostElement);
    }
    render() {
        return (h(Host, { key: '6ea977c2709606682fe0faf8ef50cbba4479ba5b', class: {
                visible: this.modalVisible,
                'no-backdrop': this.backdrop === false,
                'align-center': this.centered,
            } }, h("div", { key: 'e8dfd773a94149ec9ab2706ce66a5a319c327342', class: "dialog-backdrop" }, h("dialog", { key: '25b8bc33d33a72b7e90701c16014b9ba85c4c275', "aria-modal": a11yBoolean(true), "aria-describedby": this.ariaAttributes['aria-describedby'], "aria-labelledby": this.ariaAttributes['aria-labelledby'], class: {
                modal: true,
                [`modal-size-${this.size}`]: true,
            }, onClose: () => this.dismissModal(), onClick: (event) => this.onModalClick(event), onCancel: (e) => {
                e.preventDefault();
                this.dismissModal();
            } }, h("slot", { key: '3c576f2a30af4cc916bfa7e91eeb0c3aae5abfdf' })))));
    }
    static get is() { return "ix-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IxModalSize",
                    "resolved": "\"360\" | \"480\" | \"600\" | \"720\" | \"840\" | \"full-screen\" | \"full-width\"",
                    "references": {
                        "IxModalSize": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/modal/modal.tsx",
                            "id": "src/components/modal/modal.tsx::IxModalSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "Modal size"
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'360'"
            },
            "animation": {
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
                    "text": "Should the modal be animated"
                },
                "attribute": "animation",
                "reflect": false,
                "defaultValue": "true"
            },
            "backdrop": {
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
                    "text": "Show a backdrop behind the modal dialog"
                },
                "attribute": "backdrop",
                "reflect": false,
                "defaultValue": "true"
            },
            "closeOnBackdropClick": {
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
                    "text": "Dismiss modal on backdrop click"
                },
                "attribute": "close-on-backdrop-click",
                "reflect": false,
                "defaultValue": "false"
            },
            "beforeDismiss": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(reason?: any) => boolean | Promise<boolean>",
                    "resolved": "(reason?: any) => boolean | Promise<boolean>",
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Is called before the modal is dismissed.\n\n- Return `true` to proceed in dismissing the modal\n- Return `false` to abort in dismissing the modal"
                }
            },
            "centered": {
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
                    "text": "Centered modal"
                },
                "attribute": "centered",
                "reflect": false,
                "defaultValue": "false"
            },
            "keyboard": {
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
                            "name": "deprecated",
                            "text": "- Use closeOnEscape instead"
                        }],
                    "text": "Use ESC to dismiss the modal"
                },
                "attribute": "keyboard",
                "reflect": false,
                "defaultValue": "true"
            },
            "closeOnEscape": {
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
                    "text": "If set to true the modal can be closed by pressing the Escape key"
                },
                "attribute": "close-on-escape",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "modalVisible": {}
        };
    }
    static get events() {
        return [{
                "method": "dialogClose",
                "name": "dialogClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Dialog close"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "dialogDismiss",
                "name": "dialogDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Dialog cancel"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "showModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLDialogElement": {
                            "location": "global",
                            "id": "global::HTMLDialogElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Show the dialog",
                    "tags": []
                }
            },
            "dismissModal": {
                "complexType": {
                    "signature": "<T = any>(reason?: T) => Promise<void>",
                    "parameters": [{
                            "name": "reason",
                            "type": "T",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "T": {
                            "location": "global",
                            "id": "global::T"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Dismiss the dialog",
                    "tags": []
                }
            },
            "closeModal": {
                "complexType": {
                    "signature": "<T = any>(reason: T) => Promise<void>",
                    "parameters": [{
                            "name": "reason",
                            "type": "T",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "T": {
                            "location": "global",
                            "id": "global::T"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Close the dialog",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
__decorate([
    OnListener('keydown', (self) => !self.closeOnEscape || !self.keyboard)
], Modal.prototype, "onKey", null);
//# sourceMappingURL=modal.js.map
