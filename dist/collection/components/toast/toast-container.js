/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { TypedEvent } from "../utils/typed-event";
export class ToastContainer {
    constructor() {
        this.PREFIX_POSITION_CLASS = 'toast-container--';
        this.containerId = 'toast-container';
        this.containerClass = 'toast-container';
        this.position = 'bottom-right';
    }
    get hostContainer() {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                const containerElement = document.getElementById(this.containerId);
                if (containerElement) {
                    clearInterval(interval);
                    resolve(containerElement);
                }
            });
        });
    }
    componentDidLoad() {
        if (!document.getElementById(this.containerId)) {
            const toastContainer = document.createElement('div');
            toastContainer.id = this.containerId;
            toastContainer.classList.add(this.containerClass);
            toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${this.position}`);
            document.body.appendChild(toastContainer);
        }
    }
    onPositionChange(newPosition, oldPosition) {
        const toastContainer = document.getElementById(this.containerId);
        toastContainer.classList.remove(`${this.PREFIX_POSITION_CLASS}${oldPosition}`);
        toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${newPosition}`);
    }
    /**
     * Display a toast message
     * @param config
     */
    async showToast(config) {
        var _a, _b;
        const toast = document.createElement('ix-toast');
        const onClose = new TypedEvent();
        function removeToast(result) {
            toast.remove();
            onClose.emit(result);
        }
        toast.toastTitle = config.title;
        toast.type = config.type;
        toast.autoClose = (_a = config.autoClose) !== null && _a !== void 0 ? _a : true;
        toast.autoCloseDelay = (_b = config.autoCloseDelay) !== null && _b !== void 0 ? _b : 5000;
        toast.icon = config.icon;
        toast.iconColor = config.iconColor;
        toast.addEventListener('closeToast', (event) => {
            const { detail } = event;
            removeToast(detail);
        });
        if (typeof config.message === 'string') {
            toast.innerText = config.message;
        }
        else {
            toast.appendChild(config.message);
        }
        (await this.hostContainer).appendChild(toast);
        return {
            onClose,
            close: (result) => {
                removeToast(result);
            },
        };
    }
    render() {
        return (h(Host, { key: '2f5cc3b256ff81ebb2dadd0c774f89ddc59caffb', class: {
                'toast-container--bottom-right': this.position === 'bottom-right',
                'toast-container--top-right': this.position === 'top-right',
            } }));
    }
    static get is() { return "ix-toast-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./styles/toast-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["styles/toast-container.css"]
        };
    }
    static get properties() {
        return {
            "containerId": {
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
                    "text": ""
                },
                "attribute": "container-id",
                "reflect": false,
                "defaultValue": "'toast-container'"
            },
            "containerClass": {
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
                    "text": ""
                },
                "attribute": "container-class",
                "reflect": false,
                "defaultValue": "'toast-container'"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'bottom-right' | 'top-right'",
                    "resolved": "\"bottom-right\" | \"top-right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "position",
                "reflect": false,
                "defaultValue": "'bottom-right'"
            }
        };
    }
    static get methods() {
        return {
            "showToast": {
                "complexType": {
                    "signature": "(config: ToastConfig) => Promise<{ onClose: TypedEvent<any>; close: (result?: any) => void; }>",
                    "parameters": [{
                            "name": "config",
                            "type": "ToastConfig",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "TypedEvent": {
                            "location": "import",
                            "path": "../utils/typed-event",
                            "id": "src/components/utils/typed-event.ts::TypedEvent"
                        },
                        "ToastConfig": {
                            "location": "import",
                            "path": "./toast-utils",
                            "id": "src/components/toast/toast-utils.ts::ToastConfig"
                        },
                        "CustomEvent": {
                            "location": "global",
                            "id": "global::CustomEvent"
                        }
                    },
                    "return": "Promise<{ onClose: TypedEvent<any>; close: (result?: any) => void; }>"
                },
                "docs": {
                    "text": "Display a toast message",
                    "tags": [{
                            "name": "param",
                            "text": "config"
                        }]
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "position",
                "methodName": "onPositionChange"
            }];
    }
}
//# sourceMappingURL=toast-container.js.map
