/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { ApplicationLayoutContext, } from "../utils/application-layout/context";
import { applicationLayoutService } from "../utils/application-layout/service";
import { useContextProvider } from "../utils/context";
import { menuController } from "../utils/menu-service/menu-service";
import { hasSlottedElements } from "../utils/shadow-dom";
import { themeSwitcher } from "../utils/theme-switcher";
/**
 * @since 2.1.0
 */
export class Application {
    constructor() {
        this.theme = undefined;
        this.themeSystemAppearance = false;
        this.forceBreakpoint = undefined;
        this.breakpoints = ['sm', 'md', 'lg'];
        this.appSwitchConfig = undefined;
        this.breakpoint = 'lg';
        this.applicationSidebarSlotted = false;
    }
    forceLayoutChange(newMode) {
        if (!newMode) {
            applicationLayoutService.enableBreakpointDetection();
            return;
        }
        applicationLayoutService.disableBreakpointDetection();
        applicationLayoutService.setBreakpoint(newMode);
    }
    onBreakpointsChange(breakpoints) {
        applicationLayoutService.setBreakpoints(breakpoints);
    }
    get menu() {
        return this.hostElement.querySelector('ix-menu');
    }
    get applicationSidebarSlot() {
        return this.hostElement.shadowRoot.querySelector('.application-sidebar slot');
    }
    onContentClick() {
        var _a;
        if (menuController.isPinned) {
            return;
        }
        (_a = this.menu) === null || _a === void 0 ? void 0 : _a.toggleMenu(false);
    }
    componentWillLoad() {
        applicationLayoutService.setBreakpoints(this.breakpoints);
        this.contextProvider = useContextProvider(this.hostElement, ApplicationLayoutContext, {
            hideHeader: false,
            host: 'basic-navigation',
            sidebar: this.applicationSidebarSlotted,
            appSwitchConfig: this.appSwitchConfig,
        });
        this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
            this.breakpoint = mode;
        });
        this.breakpoint = applicationLayoutService.breakpoint;
        if (this.forceBreakpoint) {
            this.forceLayoutChange(this.forceBreakpoint);
        }
        this.changeTheme();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.modeDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
    }
    changeTheme() {
        if (!this.theme) {
            if (this.themeSystemAppearance) {
                themeSwitcher.setVariant();
            }
            return;
        }
        if (themeSwitcher.hasVariantSuffix(this.theme)) {
            themeSwitcher.setTheme(`theme-${this.theme}`);
            return;
        }
        themeSwitcher.setTheme(`theme-${this.theme}-dark`, this.themeSystemAppearance);
    }
    onApplicationSidebarChange() {
        this.contextProvider.emit({
            hideHeader: false,
            host: 'basic-navigation',
            sidebar: this.applicationSidebarSlotted,
            appSwitchConfig: this.appSwitchConfig,
        });
    }
    render() {
        return (h(Host, { key: '5611ad541df7672a749f3042f7accf1bc0f4fea3', "data-role": "", class: {
                [`breakpoint-${this.breakpoint}`]: true,
            } }, h("slot", { key: 'b8600e40c99555bae7055b6a4894df57a7d49026', name: "application-header" }), h("div", { key: 'ad71a6e9d05034a173b16075b4343b5244c40e98', class: "application" }, h("slot", { key: '6ae1d4a193cc858529efbb0a06421ecf5437224a', name: "menu" }), h("aside", { key: '06a2517aae4b8e0edc4ede14f03b87e9960a39a3', class: {
                'application-sidebar': true,
                slotted: this.applicationSidebarSlotted,
            }, onClick: () => this.onContentClick() }, h("slot", { key: '77d253b74578d2392718dcb26ed16c52a60e93ae', name: "application-sidebar", onSlotchange: () => (this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot)) })), h("main", { key: '34861c56227c6adce9503099d2b1a7a66bfbafa6', class: "content", onClick: () => this.onContentClick() }, h("slot", { key: '55b324f84d53c0a8a2a49cdcf49b940131ec7ea9' })))));
    }
    static get is() { return "ix-application"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["application.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["application.css"]
        };
    }
    static get properties() {
        return {
            "theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IxTheme",
                    "resolved": "\"classic\" | \"classic-dark\" | \"classic-light\" | string & {}",
                    "references": {
                        "IxTheme": {
                            "location": "import",
                            "path": "../utils/theme-switcher",
                            "id": "src/components/utils/theme-switcher.ts::IxTheme"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Application theme"
                },
                "attribute": "theme",
                "reflect": false
            },
            "themeSystemAppearance": {
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
                    "text": "Use the system appearance dark or light"
                },
                "attribute": "theme-system-appearance",
                "reflect": false,
                "defaultValue": "false"
            },
            "forceBreakpoint": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Breakpoint | undefined",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "Breakpoint": {
                            "location": "import",
                            "path": "../utils/breakpoints",
                            "id": "src/components/utils/breakpoints.ts::Breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Change the responsive layout of the menu structure"
                },
                "attribute": "force-breakpoint",
                "reflect": false
            },
            "breakpoints": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Breakpoint[]",
                    "resolved": "(\"sm\" | \"md\" | \"lg\")[]",
                    "references": {
                        "Breakpoint": {
                            "location": "import",
                            "path": "../utils/breakpoints",
                            "id": "src/components/utils/breakpoints.ts::Breakpoint"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Supported layouts"
                },
                "defaultValue": "['sm', 'md', 'lg']"
            },
            "appSwitchConfig": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AppSwitchConfiguration",
                    "resolved": "{ currentAppId: string; apps: { id: string; name: string; description: string; url: string; target: AppSwitchConfigurationTarget; iconSrc: string; }[]; i18nAppSwitch?: string; i18nLoadingApps?: string; }",
                    "references": {
                        "AppSwitchConfiguration": {
                            "location": "import",
                            "path": "../utils/application-layout/context",
                            "id": "src/components/utils/application-layout/context.ts::AppSwitchConfiguration"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define application switch configuration"
                }
            }
        };
    }
    static get states() {
        return {
            "breakpoint": {},
            "applicationSidebarSlotted": {}
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "breakpoints",
                "methodName": "onBreakpointsChange"
            }, {
                "propName": "theme",
                "methodName": "changeTheme"
            }, {
                "propName": "themeSystemAppearance",
                "methodName": "changeTheme"
            }, {
                "propName": "appSwitchConfig",
                "methodName": "onApplicationSidebarChange"
            }, {
                "propName": "applicationSidebarSlotted",
                "methodName": "onApplicationSidebarChange"
            }];
    }
}
//# sourceMappingURL=application.js.map
