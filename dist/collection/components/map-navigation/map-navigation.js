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
        return (h(Host, { key: '12b000aeaa56f3cb4648cf144fb15c8319a35dc3' }, h("slot", { key: 'c974e3181eb4921f12bc504f40b18f01ba71a505', name: "menu" }), h("div", { key: '5bf009607ed825e66d006cc4a8d4b10e7410e33d', class: "map-nav" }, h("div", { key: 'fba46b9e6554cc5de13b01c1483d36cce1004553', class: "map-nav-sidebar" }, h("div", { key: 'e60eeeed1d26d495fee6211a153eb2e590dd276f', class: "map-nav-header" }, h("ix-application-header", { key: 'b069ea97a85ba6f07fda9f73a8e21063d9c9d001', name: this.applicationName, class: "map-nav-header-brand" }, h("slot", { key: '9e9a897e90537488a3c41b1af7b569cd4a50ba52', slot: "logo", name: "logo" }))), h("div", { key: 'b5fd334d696140158bfd3b2eab7212abd4b2cd56', class: "map-nav-sidebar-content" }, h("div", { key: 'e5ab16284a0b64860e894ec9e182c416e85adbdb', class: "map-nav-sidebar-static-content" }, h("div", { key: 'b75e1c203da83fd26cfac85216776c23d1ef1bee', class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? ('') : (h("ix-icon-button", { icon: 'context-menu', ghost: true, size: "24", variant: "secondary", onClick: (_) => this.contextMenuClick.emit() }))), h("div", { key: 'a24bfbafad8bce92692077ba50d060a914d99865', class: "map-nav-sidebar-user-content" }, h("slot", { key: '71c13468550e734125f11e5a58e7be66aa2069dd', name: "sidebar-content" })))), h("div", { key: '2ac1a049519acf9d5717468c472195d6662732f8', class: "content" }, h("div", { key: '6a86eeb5eae6df6b33cd006575e03001b19dc1db', class: {
                'map-nav-header-content': true,
                'bg-2': true,
                empty: !this.hasContentHeader,
            } }, h("slot", { key: '8938ee92e4faa9d9d49b8c0b0ac91cc85882f4cd', name: "content-header", onSlotchange: (e) => this.checkHasContentHeader(e) })), h("main", { key: '003a1c1bc056ad1f68adeac5d33760ee4768cce6' }, h("slot", { key: 'b7d28455b65b3f6d4a2f260d7c872e09019a3f9c' }), h("slot", { key: 'c628b4546b1301e1b4c966edf2ed87a8699cd2d9', name: "overlay" }))))));
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
