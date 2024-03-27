/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Fragment, h, Host, readTask, } from "@stencil/core";
import { showAppSwitch } from "../utils/app-switch";
import { applicationLayoutService } from "../utils/application-layout";
import { ApplicationLayoutContext, } from "../utils/application-layout/context";
import { useContextConsumer } from "../utils/context";
import { menuController } from "../utils/menu-service/menu-service";
import { hasSlottedElements } from "../utils/shadow-dom";
/**
 * @slot logo - Location of the logo
 */
export class ApplicationHeader {
    constructor() {
        this.name = undefined;
        this.breakpoint = 'lg';
        this.menuExpanded = false;
        this.suppressResponsive = false;
        this.hasSlottedElements = false;
        this.applicationLayoutContext = undefined;
    }
    componentWillLoad() {
        useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
            if ((ctx === null || ctx === void 0 ? void 0 : ctx.host) === 'map-navigation') {
                this.suppressResponsive = true;
                this.breakpoint = 'md';
                return;
            }
            this.breakpoint = applicationLayoutService.breakpoint;
            this.applicationLayoutContext = ctx;
            this.tryUpdateAppSwitch();
        }, true);
        this.menuDisposable = menuController.expandChange.on((show) => {
            this.menuExpanded = show;
        });
        this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
            if (this.suppressResponsive) {
                this.breakpoint = 'md';
                return;
            }
            this.breakpoint = mode;
        });
        this.updateIsSlottedContent();
    }
    componentDidLoad() {
        this.attachSiemensLogoIfLoaded();
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.menuDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
        (_b = this.modeDisposable) === null || _b === void 0 ? void 0 : _b.dispose();
    }
    isLogoSlotted() {
        const slotElement = this.hostElement.shadowRoot.querySelector('slot[name="logo"]');
        const nodes = slotElement.assignedNodes({
            flatten: true,
        });
        return nodes.length !== 0;
    }
    async attachSiemensLogoIfLoaded() {
        await window.customElements.whenDefined('ix-siemens-logo');
        const logoElement = document.createElement('ix-siemens-logo');
        if (!this.isLogoSlotted()) {
            this.hostElement.shadowRoot
                .querySelector('.logo')
                .appendChild(logoElement);
        }
    }
    async onMenuClick() {
        menuController.toggle();
    }
    resolveContextMenuButton() {
        return new Promise((resolve) => readTask(() => resolve(this.hostElement.shadowRoot.querySelector('[data-context-menu]'))));
    }
    tryUpdateAppSwitch() {
        var _a;
        if (!this.callbackUpdateAppSwitchModal) {
            return;
        }
        this.callbackUpdateAppSwitchModal((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig);
    }
    async showAppSwitch() {
        var _a;
        this.callbackUpdateAppSwitchModal = await showAppSwitch((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig);
    }
    updateIsSlottedContent() {
        const slotElement = this.hostElement.shadowRoot.querySelector('.content slot');
        this.hasSlottedElements = hasSlottedElements(slotElement);
    }
    render() {
        var _a;
        return (h(Host, { key: '11fe4da5b20f95626a57b5c101946be0204ff8e8', class: { [`breakpoint-${this.breakpoint}`]: true }, slot: "application-header" }, this.breakpoint === 'sm' && this.suppressResponsive === false && (h("ix-burger-menu", { onClick: () => this.onMenuClick(), expanded: this.menuExpanded })), ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig) &&
            this.breakpoint !== 'sm' &&
            this.suppressResponsive === false && (h("ix-icon-button", { onClick: () => this.showAppSwitch(), icon: "apps", ghost: true, class: "app-switch" })), h("div", { key: 'c7089fcb0db6964339cf52a3cffec6dc683693b7', class: "logo" }, h("slot", { key: 'ca77339363ce8dcbc29af795761cc5a7998a60af', name: "logo" })), h("div", { key: 'cf65b627df7f691e5ebb7913c44d7e2d07bcd8d9', class: "name" }, this.name), h("div", { key: '9ff3171ee0cce4c98e7e17d391826c32117dbbb1', class: "content" }, this.breakpoint === 'sm' ? (h(Fragment, null, h("ix-icon-button", { class: {
                ['context-menu']: true,
                ['context-menu-visible']: this.hasSlottedElements,
            }, "data-context-menu": true, icon: "more-menu", ghost: true }), h("ix-dropdown", { "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton() }, h("div", { class: "dropdown-content" }, h("slot", { onSlotchange: () => this.updateIsSlottedContent() }))))) : (h("slot", { onSlotchange: () => this.updateIsSlottedContent() })), h("slot", { key: '8550b24328610d5669b8289ecbc2102499b1f4d7', name: "ix-application-header-avatar" }))));
    }
    static get is() { return "ix-application-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["application-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["application-header.css"]
        };
    }
    static get properties() {
        return {
            "name": {
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
                "attribute": "name",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "breakpoint": {},
            "menuExpanded": {},
            "suppressResponsive": {},
            "hasSlottedElements": {},
            "applicationLayoutContext": {}
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=application-header.js.map
