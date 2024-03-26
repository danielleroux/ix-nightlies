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
        return (h(Host, { key: '21cad02c3caf60f881d8baf67e05d817619df6ec', "data-role": "", class: {
                'hide-header': this.hideHeader,
                [`breakpoint-${this.breakpoint}`]: true,
            } }, !this.hideHeader ? (h("ix-application-header", { name: this.applicationName }, h("slot", { name: "logo", slot: "logo" }))) : null, h("div", { key: '2a0bfb2e408fc28692225c97b2849bf00cdb669f', class: "navigation-content" }, h("slot", { key: 'ded9a0abd626e3d93d91d2914b0e192003ea724a', name: "menu" }), h("div", { key: '4cc27443f9eab9f2347895e4b0b7d87fc9a95d9c', class: "content", onClick: () => this.onContentClick() }, h("slot", { key: '322d7046c54181898aca7bbe4104a8c4eb976d8f' })))));
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
