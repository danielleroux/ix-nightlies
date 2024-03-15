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
export class Drawer {
    constructor() {
        this.callback = this.clickedOutside.bind(this);
        this.show = false;
        this.closeOnClickOutside = true;
        this.fullHeight = false;
        this.minWidth = 16;
        this.maxWidth = 28;
        this.width = this.minWidth;
    }
    onShowChanged(newValue) {
        this.show = newValue !== undefined ? newValue : !this.show;
        this.toggleDrawer(this.show);
    }
    /**
     * Toggle or define show state of drawer
     * @param show Overwrite toggle state with boolean
     */
    async toggleDrawer(show) {
        this.show = show !== undefined ? show : !this.show;
        if (show) {
            this.open.emit();
            this.slideInRight(this.divElement);
            setTimeout(() => {
                window.addEventListener('mousedown', this.callback);
            }, 300);
        }
        else {
            this.drawerClose.emit();
            this.slideOutRight(this.divElement);
            window.removeEventListener('mousedown', this.callback);
        }
        return Promise.resolve();
    }
    onCloseClicked() {
        this.show = false;
    }
    clickedOutside(evt) {
        if (!this.closeOnClickOutside) {
            return;
        }
        const target = evt.target;
        const closestElement = target.closest('#div-container');
        const btn = target.closest('#drawer-btn');
        if (evt.target.type !== 'button' &&
            closestElement !== this.divElement &&
            target !== btn) {
            this.show = false;
        }
    }
    slideOutRight(el) {
        anime({
            targets: el,
            duration: Drawer.duration,
            translateX: [0, '16rem'],
            opacity: [1, 0],
            easing: 'easeInSine',
            complete: () => {
                el.classList.add('d-none');
            },
        });
    }
    slideInRight(el) {
        anime({
            targets: el,
            duration: Drawer.duration,
            translateX: ['16rem', 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            begin: () => {
                el.classList.remove('d-none');
            },
        });
    }
    componentDidLoad() {
        this.onShowChanged(this.show);
    }
    render() {
        return (h(Host, { key: 'e62222323c1b4c58abef1702618873c3856405de', class: {
                'drawer-container': true,
                toggle: this.show,
                'full-height': this.fullHeight,
                'd-none': true,
            }, style: {
                width: this.width === 'auto' ? this.width : `${this.width}rem`,
                'min-width': `${this.minWidth}rem`,
                'max-width': `${this.maxWidth}rem`,
            }, ref: (el) => (this.divElement = el), "data-testid": "container", id: "div-container" }, h("div", { key: 'add6dc645923e78ea4aab5a5119900ffb77f84e2', class: "header" }, h("div", { key: 'e173f66d20de86d73957e68ba58049d9fd5694f2', class: "header-content" }, h("slot", { key: '8c3fcccd355f8648ef1bd2367c764d3360805ffb', name: "header" })), h("ix-icon-button", { key: '4ca6c7513df414120a6f7f4164cb8cfed84992fe', class: "close-button", icon: 'close', size: "24", ghost: true, onClick: () => this.onCloseClicked(), "data-testid": "close-button" })), h("div", { key: '95fb535fc3fe56ff7731d00d849fd4d93b61d31a', class: "content" }, h("slot", { key: '44f5d0a2b5d4c876c67c4db047653d63550e5ac2' }))));
    }
    static get is() { return "ix-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["drawer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["drawer.css"]
        };
    }
    static get properties() {
        return {
            "show": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show or hide the drawer"
                },
                "attribute": "show",
                "reflect": false,
                "defaultValue": "false"
            },
            "closeOnClickOutside": {
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
                    "text": "Fired in case of an outside click during drawer showed state"
                },
                "attribute": "close-on-click-outside",
                "reflect": false,
                "defaultValue": "true"
            },
            "fullHeight": {
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
                    "text": "Render the drawer with maximum height"
                },
                "attribute": "full-height",
                "reflect": false,
                "defaultValue": "false"
            },
            "minWidth": {
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
                    "text": "Min width interpreted as REM"
                },
                "attribute": "min-width",
                "reflect": false,
                "defaultValue": "16"
            },
            "maxWidth": {
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
                    "text": "Max width interpreted as REM"
                },
                "attribute": "max-width",
                "reflect": false,
                "defaultValue": "28"
            },
            "width": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | 'auto'",
                    "resolved": "\"auto\" | number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Width interpreted as REM if not set to 'auto'"
                },
                "attribute": "width",
                "reflect": false,
                "defaultValue": "this.minWidth"
            }
        };
    }
    static get events() {
        return [{
                "method": "open",
                "name": "open",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fire event after drawer is open"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "drawerClose",
                "name": "drawerClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fire event after drawer is close"
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
            "toggleDrawer": {
                "complexType": {
                    "signature": "(show?: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "show",
                            "type": "boolean",
                            "docs": "Overwrite toggle state with boolean"
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggle or define show state of drawer",
                    "tags": [{
                            "name": "param",
                            "text": "show Overwrite toggle state with boolean"
                        }]
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "show",
                "methodName": "onShowChanged"
            }];
    }
}
Drawer.duration = 300;
//# sourceMappingURL=drawer.js.map
