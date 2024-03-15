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
import { ApplicationLayoutContext } from "../utils/application-layout/context";
import { useContextProvider } from "../utils/context";
export class MapNavigation {
    constructor() {
        this.applicationName = undefined;
        this.navigationTitle = undefined;
        this.hideContextMenu = true;
        this.isSidebarOpen = true;
        this.hasContentHeader = false;
    }
    get menu() {
        return this.hostElement.querySelector('ix-menu');
    }
    get menuOverlay() {
        return this.hostElement.querySelector('ix-menu-overlay');
    }
    get mapNavMenu() {
        return this.hostElement.shadowRoot.querySelector('.map-nav-menu');
    }
    get sidebar() {
        return this.hostElement.shadowRoot.querySelector('.map-nav-sidebar');
    }
    get overlay() {
        return this.hostElement.shadowRoot.querySelector('#overlay');
    }
    componentDidRender() {
        this.appendMenu();
        this.closeOverlay();
    }
    componentWillLoad() {
        useContextProvider(this.hostElement, ApplicationLayoutContext, {
            hideHeader: false,
            host: 'map-navigation',
        });
    }
    appendMenu() {
        this.menu.addEventListener('mapExpandChange', (event) => {
            const state = !event.detail;
            this.toggleSidebar(state);
        });
        this.menu.enableMapExpand = true;
    }
    /**
     * Change the visibility of the sidebar
     *
     * @param show new visibility state
     * @since 1.6.0
     */
    async toggleSidebar(show) {
        if (show !== undefined) {
            this.isSidebarOpen = show;
        }
        else {
            this.isSidebarOpen = !this.isSidebarOpen;
        }
        if (this.isSidebarOpen) {
            this.openSidebar();
        }
        else {
            this.closeSidebar();
        }
        this.navigationToggled.emit(this.isSidebarOpen);
        this.menu.toggleMapExpand(this.isSidebarOpen);
    }
    closeSidebar() {
        anime({
            targets: this.sidebar,
            duration: MapNavigation.defaultTime,
            marginLeft: [0, '-29.75rem'],
            opacity: [1, 0],
            easing: 'easeInSine',
            complete: () => {
                this.sidebar.classList.add('d-none');
            },
        });
    }
    openSidebar() {
        anime({
            targets: this.sidebar,
            duration: MapNavigation.defaultTime,
            marginLeft: ['-29.75rem', 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            begin: () => {
                this.sidebar.classList.remove('d-none');
            },
        });
    }
    /**
     * Open a overlay inside content area
     * @deprecated Will be removed in 2.0.0. Use slot based approach
     *
     * @param name
     * @param component
     * @param icon
     * @param color
     */
    async openOverlay(name, component, icon, color) {
        anime({
            targets: this.overlay,
            duration: MapNavigation.slowTime,
            backdropFilter: [0, 'blur(1rem)'],
            translateX: ['-4rem', 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            begin: () => {
                this.overlay.classList.remove('d-none');
            },
        });
        const overlayInstance = document.createElement('ix-map-navigation-overlay');
        overlayInstance.setAttribute('color', color);
        overlayInstance.setAttribute('name', name);
        overlayInstance.setAttribute('icon', icon);
        overlayInstance.setAttribute('slot', 'overlay');
        overlayInstance.addEventListener('closeClick', () => this.closeOverlay());
        overlayInstance.appendChild(component);
        this.hostElement.appendChild(overlayInstance);
    }
    /**
     * Close current shown overlay
     * @deprecated Will be removed in 2.0.0. Use slot based approach
     */
    async closeOverlay() {
        anime({
            targets: this.overlay,
            duration: MapNavigation.slowTime,
            backdropFilter: ['blur(1rem)', 0],
            translateX: [0, '-4rem'],
            opacity: [1, 0],
            easing: 'easeInSine',
            complete: () => {
                var _a;
                if (!this.overlay) {
                    return;
                }
                (_a = this.overlay.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
                this.overlay.classList.add('d-none');
            },
        });
    }
    checkHasContentHeader(e) {
        const nodes = e.currentTarget.assignedNodes({
            flatten: true,
        });
        this.hasContentHeader = (nodes === null || nodes === void 0 ? void 0 : nodes.length) !== 0;
    }
    render() {
        return (h(Host, { key: 'cce268591eb698f3ea4e1df75f6d901b299955cd' }, h("slot", { key: '5fe015d8ea32646579e2908ed96d384cf6d3b23c', name: "menu" }), h("div", { key: '4b3aef7e9d54ad0ca685fe78a966c68212ddeeac', class: "map-nav" }, h("div", { key: '3ec6010dfb0782a34d05f88802fa4c1af3e5c4fc', class: "map-nav-sidebar" }, h("div", { key: '8dcbc1abbd2e92e4587e8ce3a13827ad7c3af96f', class: "map-nav-header" }, h("ix-application-header", { key: 'fde3c4b328cc2decdbab0046fab65e236b48675e', name: this.applicationName, class: "map-nav-header-brand" }, h("slot", { key: '3c0fc3155201783ce46cfa5c0f9636ce85a62eef', slot: "logo", name: "logo" }))), h("div", { key: '814697d7b86d4a7f1d940a4677261a1106cc8e6e', class: "map-nav-sidebar-content" }, h("div", { key: '92b84f7bd508df872dee03f233da8aae9277df2d', class: "map-nav-sidebar-static-content" }, h("div", { key: 'a68ddb0e887157c08e45d85cef327bf1bf76064f', class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? ('') : (h("ix-icon-button", { icon: 'context-menu', ghost: true, size: "24", variant: "secondary", onClick: (_) => this.contextMenuClick.emit() }))), h("div", { key: 'd0dc557464a6eef40b5d26e72b3eda0d3113bb9e', class: "map-nav-sidebar-user-content" }, h("slot", { key: 'a4c80892e77776c69d1397514b76da25b6785737', name: "sidebar-content" })))), h("div", { key: '742909b2f8cb2897d4f3e27fe8624a058ca86bfa', class: "content" }, h("div", { key: '86ae660768f26bbae02417ab6b20c16dfec82b00', class: {
                'map-nav-header-content': true,
                'bg-2': true,
                empty: !this.hasContentHeader,
            } }, h("slot", { key: 'e042f4d6dadf007435e87e6ca028a9908ffcc48b', name: "content-header", onSlotchange: (e) => this.checkHasContentHeader(e) })), h("main", { key: '2f5ca6dd5e3a9e8d32a2b02e0baf462daeff4a7c' }, h("slot", { key: '437f35dd628c442991188436aebfb72213f4e723' }), h("slot", { key: '7b107165c57e30798ed188959ff4e88416a0e6be', name: "overlay" }))))));
    }
    static get is() { return "ix-map-navigation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["map-navigation.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["map-navigation.css"]
        };
    }
    static get properties() {
        return {
            "applicationName": {
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
                    "text": "Application name"
                },
                "attribute": "application-name",
                "reflect": false
            },
            "navigationTitle": {
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
                    "text": "Navigation title"
                },
                "attribute": "navigation-title",
                "reflect": false
            },
            "hideContextMenu": {
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
                    "text": "Hide the sidebar context menu button when set to true"
                },
                "attribute": "hide-context-menu",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "isSidebarOpen": {},
            "hasContentHeader": {}
        };
    }
    static get events() {
        return [{
                "method": "navigationToggled",
                "name": "navigationToggled",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Navigation toggled"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "contextMenuClick",
                "name": "contextMenuClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Context menu clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggleSidebar": {
                "complexType": {
                    "signature": "(show?: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "show",
                            "type": "boolean",
                            "docs": "new visibility state"
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
                    "text": "Change the visibility of the sidebar",
                    "tags": [{
                            "name": "param",
                            "text": "show new visibility state"
                        }, {
                            "name": "since",
                            "text": "1.6.0"
                        }]
                }
            },
            "openOverlay": {
                "complexType": {
                    "signature": "(name: string, component: HTMLElement, icon?: string, color?: string) => Promise<void>",
                    "parameters": [{
                            "name": "name",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "component",
                            "type": "HTMLElement",
                            "docs": ""
                        }, {
                            "name": "icon",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "color",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Open a overlay inside content area",
                    "tags": [{
                            "name": "deprecated",
                            "text": "Will be removed in 2.0.0. Use slot based approach"
                        }, {
                            "name": "param",
                            "text": "name"
                        }, {
                            "name": "param",
                            "text": "component"
                        }, {
                            "name": "param",
                            "text": "icon"
                        }, {
                            "name": "param",
                            "text": "color"
                        }]
                }
            },
            "closeOverlay": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Close current shown overlay",
                    "tags": [{
                            "name": "deprecated",
                            "text": "Will be removed in 2.0.0. Use slot based approach"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
MapNavigation.defaultTime = 150;
MapNavigation.slowTime = 500;
//# sourceMappingURL=map-navigation.js.map
