/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { ApplicationLayoutContext } from "../utils/application-layout/context";
import { applicationLayoutService } from "../utils/application-layout/service";
import { useContextProvider } from "../utils/context";
import { menuController } from "../utils/menu-service/menu-service";
export class BasicNavigation {
    constructor() {
        this.applicationName = undefined;
        this.hideHeader = false;
        this.forceBreakpoint = undefined;
        this.breakpoints = ['sm', 'md', 'lg'];
        this.breakpoint = 'lg';
    }
    onHideHeaderChange() {
        var _a;
        (_a = this.contextProvider) === null || _a === void 0 ? void 0 : _a.emit({
            hideHeader: this.hideHeader,
            host: 'basic-navigation',
        });
        this.breakpoint = applicationLayoutService.breakpoint;
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
            hideHeader: this.hideHeader,
            host: 'basic-navigation',
        });
        this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
            this.breakpoint = mode;
        });
        this.breakpoint = applicationLayoutService.breakpoint;
        if (this.forceBreakpoint) {
            this.forceLayoutChange(this.forceBreakpoint);
        }
    }
    componentDidRender() {
        if (this.menu) {
            this.menu.applicationName = this.applicationName;
        }
    }
    disconnectedCallback() {
        var _a;
        (_a = this.modeDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
    }
    render() {
        return (h(Host, { key: '35083d5a514a69bc03be9de1a1c2641d9ed187ad', "data-role": "", class: {
                'hide-header': this.hideHeader,
                [`breakpoint-${this.breakpoint}`]: true,
            } }, !this.hideHeader ? (h("ix-application-header", { name: this.applicationName }, h("slot", { name: "logo", slot: "logo" }))) : null, h("div", { key: 'e9ff6a0ea8655afccc66259da206632e035b52a2', class: "navigation-content" }, h("slot", { key: '0809719c5650e73c7d801dbd588dacfe4e24e8cb', name: "menu" }), h("div", { key: '3a56100cd7300c1b7b6e8076b7f5dd5f2c5ae3f4', class: "content", onClick: () => this.onContentClick() }, h("slot", { key: '8b14107e0aeee94534cfdf6cd1cf971f1dadb814' })))));
    }
    static get is() { return "ix-basic-navigation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["basic-navigation.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["basic-navigation.css"]
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
            "hideHeader": {
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
                    "text": "Hide application header. Will disable responsive feature of basic navigation."
                },
                "attribute": "hide-header",
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
                    "text": "Supported layouts e.g ['sm', 'md']"
                },
                "defaultValue": "['sm', 'md', 'lg']"
            }
        };
    }
    static get states() {
        return {
            "breakpoint": {}
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "hideHeader",
                "methodName": "onHideHeaderChange"
            }, {
                "propName": "breakpoints",
                "methodName": "onBreakpointsChange"
            }];
    }
}
//# sourceMappingURL=basic-navigation.js.map
