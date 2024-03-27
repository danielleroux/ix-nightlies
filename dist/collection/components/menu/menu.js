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
import { ApplicationSidebarToggleEvent } from "../application-sidebar/events";
import { showAppSwitch } from "../utils/app-switch";
import { ApplicationLayoutContext } from "../utils/application-layout/context";
import { applicationLayoutService } from "../utils/application-layout/service";
import { useContextConsumer } from "../utils/context";
import { menuController } from "../utils/menu-service/menu-service";
import { convertToRemString } from "../utils/rwd.util";
import { themeSwitcher } from "../utils/theme-switcher";
export class Menu {
    constructor() {
        this.isTransitionDisabled = false;
        // FBC IAM workaround #488
        this.isVisible = (elm) => {
            var _a, _b;
            return (elm.style.display !== 'none' &&
                ((_b = (_a = elm.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.style.display) !== 'none');
        };
        this.showSettings = false;
        this.showAbout = false;
        this.enableToggleTheme = false;
        this.enableSettings = true;
        this.enableMapExpand = false;
        this.applicationName = undefined;
        this.applicationDescription = '';
        this.maxVisibleMenuItems = 9;
        this.i18nExpandSidebar = 'Expand sidebar';
        this.expand = false;
        this.pinned = false;
        this.i18nLegal = 'About & legal information';
        this.i18nSettings = 'Settings';
        this.i18nToggleTheme = 'Toggle theme';
        this.i18nExpand = ' Expand';
        this.i18nCollapse = 'Collapse';
        this.showPinned = false;
        this.mapExpand = true;
        this.activeTab = undefined;
        this.breakpoint = 'lg';
        this.itemsScrollShadowTop = false;
        this.itemsScrollShadowBottom = false;
        this.applicationLayoutContext = undefined;
    }
    pinnedChange(newPinned) {
        var _a;
        if (((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.host) === 'map-navigation') {
            console.warn('ix-map-navigation does not support pinning of the menu');
            return;
        }
        this.setPinned(this.pinned);
        if (newPinned) {
            applicationLayoutService.disableBreakpointDetection();
            applicationLayoutService.setBreakpoint('lg');
            return;
        }
        applicationLayoutService.enableBreakpointDetection();
    }
    get popoverArea() {
        return this.hostElement.shadowRoot.querySelector('#popover-area');
    }
    get menu() {
        return this.hostElement.shadowRoot.querySelector('.menu');
    }
    get menuItemsContainer() {
        return this.menu.querySelector('.tabs');
    }
    get overlayContainer() {
        return this.hostElement.shadowRoot.querySelector('.menu-overlay');
    }
    get menuItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-menu-item:not(.internal-tab):not(.home-tab):not(.bottom-tab):not([slot="bottom"])')).filter(this.isVisible);
    }
    get menuBottomItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-menu-item.bottom-tab:not(.internal-tab):not(.home-tab)')).filter(this.isVisible);
    }
    get homeTab() {
        return this.hostElement.querySelector('ix-menu-item.home-tab');
    }
    get moreItemsDropdown() {
        return this.hostElement.shadowRoot.querySelector('.internal-tab ix-dropdown');
    }
    get isMoreItemsDropdownEmpty() {
        return (this.hostElement.shadowRoot.querySelectorAll('.internal-tab ix-dropdown .appended').length === 0);
    }
    get moreItemsDropdownItems() {
        return this.hostElement.shadowRoot.querySelectorAll('.internal-tab ix-dropdown ix-menu-item');
    }
    get activeMoreTabContainer() {
        return this.hostElement.shadowRoot.querySelector('.active-more-tab');
    }
    get activeMoreTab() {
        return this.hostElement.shadowRoot.querySelector('.active-more-tab ix-menu-item');
    }
    get aboutPopoverContainer() {
        return this.hostElement.querySelector('.about-news');
    }
    get aboutNewsPopover() {
        var _a;
        return ((_a = document.querySelector('ix-menu-about-news')) !== null && _a !== void 0 ? _a : this.hostElement.querySelector('ix-menu-about-news'));
    }
    get aboutTab() {
        return this.hostElement.shadowRoot.querySelector('#aboutAndLegal');
    }
    get about() {
        return this.hostElement.querySelector('ix-menu-about');
    }
    get settings() {
        return this.hostElement.querySelector('ix-menu-settings');
    }
    get isSettingsEmpty() {
        return (Array.from(this.hostElement.shadowRoot.querySelectorAll('ix-menu-settings-item')).length === 0);
    }
    get tabsContainer() {
        return this.hostElement;
    }
    componentDidLoad() {
        requestAnimationFrame(() => {
            this.handleOverflowIndicator();
        });
        if (this.pinned) {
            this.pinnedChange(this.pinned);
        }
    }
    componentWillLoad() {
        useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
            this.applicationLayoutContext = ctx;
            if (ctx.hideHeader === true) {
                this.onBreakpointChange('md');
                return;
            }
            this.onBreakpointChange(applicationLayoutService.breakpoint);
        }, true);
        menuController.register(this.hostElement);
        applicationLayoutService.onChange.on((breakpoint) => this.onBreakpointChange(breakpoint));
        this.onBreakpointChange(applicationLayoutService.breakpoint);
    }
    componentWillRender() {
        this.appendTabs();
    }
    componentDidRender() {
        this.appendFragments();
    }
    setPinned(pinned) {
        this.showPinned = pinned;
        menuController.setIsPinned(pinned);
    }
    onBreakpointChange(mode) {
        var _a;
        if (!this.applicationLayoutContext && mode === 'sm') {
            return;
        }
        if (((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.host) === 'map-navigation') {
            this.breakpoint = 'md';
            return;
        }
        if (!this.applicationLayoutContext) {
            return;
        }
        if (this.applicationLayoutContext.hideHeader && mode === 'sm') {
            return;
        }
        this.breakpoint = mode;
        if (this.breakpoint === 'lg') {
            this.setPinned(true);
            this.toggleMenu(true);
            return;
        }
        this.setPinned(false);
        this.toggleMenu(false);
    }
    appendFragments() {
        this.appendAboutNewsPopover();
    }
    resetActiveTab() {
        this.activeTab = null;
    }
    appendTabs() {
        this.activeTab = null;
    }
    getAboutPopoverVerticalPosition() {
        const heightArrow = 12;
        const offsetArrow = 6;
        const rectAbout = this.aboutTab.getBoundingClientRect();
        const offset = window.innerHeight -
            (rectAbout.bottom - rectAbout.height / 2 + heightArrow / 2 + offsetArrow);
        return convertToRemString(offset);
    }
    appendAboutNewsPopover() {
        var _a;
        if (!this.aboutNewsPopover) {
            return;
        }
        this.aboutNewsPopover.style.bottom = this.getAboutPopoverVerticalPosition();
        if (!((_a = this.popoverArea) === null || _a === void 0 ? void 0 : _a.contains(this.aboutNewsPopover))) {
            const showMore = () => {
                var _a;
                if (((_a = this.aboutNewsPopover) === null || _a === void 0 ? void 0 : _a.aboutItemLabel) && this.about) {
                    this.about.activeTabLabel = this.aboutNewsPopover.aboutItemLabel;
                    this.toggleAbout(true);
                }
            };
            this.aboutNewsPopover.addEventListener('showMore', showMore.bind(this));
            document.body.appendChild(this.aboutNewsPopover);
        }
    }
    /**
     * Toggle map sidebar expand
     * @param show
     */
    async toggleMapExpand(show) {
        if (show !== undefined) {
            this.mapExpand = show;
        }
        else {
            this.mapExpand = !this.mapExpand;
        }
    }
    /**
     * Toggle menu
     * @param show
     */
    async toggleMenu(show) {
        if (show !== undefined) {
            this.expand = show;
        }
        else {
            this.expand = !this.expand;
        }
        if (this.aboutNewsPopover) {
            this.aboutNewsPopover.expanded = this.expand;
        }
        this.expandChange.emit(this.expand);
        this.isTransitionDisabled = false;
        this.checkTransition();
        if (this.breakpoint == 'sm' && this.expand) {
            setTimeout(() => {
                this.handleOverflowIndicator();
            }, 100);
        }
    }
    /**
     * Disable transition of overlay while menu animation is running.
     */
    checkTransition() {
        const container = this.overlayContainer;
        if (!container) {
            return;
        }
        if (this.isTransitionDisabled) {
            container.style.transitionProperty = 'left';
        }
        else {
            container.style.transitionProperty = 'all';
        }
    }
    isOverlayVisible() {
        return this.showAbout || this.showSettings;
    }
    /**
     * Toggle Settings tabs
     * @param show
     */
    async toggleSettings(show) {
        if (!this.settings) {
            return;
        }
        if (!this.isOverlayVisible()) {
            this.animateOverlayFadeIn();
        }
        if (show) {
            this.resetOverlay();
            this.showSettings = show;
            this.settings.show = this.showSettings;
        }
        else {
            this.onOverlayClose();
        }
    }
    /**
     * Toggle About tabs
     * @param show
     */
    async toggleAbout(show) {
        if (!this.about) {
            return;
        }
        if (!this.isOverlayVisible()) {
            this.animateOverlayFadeIn();
        }
        if (show) {
            this.resetOverlay();
            this.showAbout = show;
            this.about.show = this.showAbout;
        }
        else {
            this.onOverlayClose();
        }
    }
    resetOverlay() {
        this.showSettings = false;
        this.showAbout = false;
        if (this.settings) {
            this.settings.show = false;
        }
        if (this.about) {
            this.about.show = false;
        }
    }
    getCollapseText() {
        return this.mapExpand ? this.i18nCollapse : this.i18nExpand;
    }
    getCollapseIcon() {
        return this.mapExpand ? 'navigation-left' : 'navigation-right';
    }
    isMenuItemClicked(event) {
        if (event.target instanceof HTMLElement) {
            return event.target.tagName === 'IX-MENU-ITEM';
        }
        return false;
    }
    handleOverflowIndicator() {
        const { clientHeight, scrollTop, scrollHeight } = this.menuItemsContainer;
        this.itemsScrollShadowTop = scrollTop > 0;
        this.itemsScrollShadowBottom =
            Math.round(scrollTop + clientHeight) < scrollHeight;
    }
    onOverlayClose() {
        this.animateOverlayFadeOut(() => {
            this.resetOverlay();
        });
    }
    animateOverlayFadeIn() {
        requestAnimationFrame(() => {
            anime({
                targets: this.overlayContainer,
                duration: 300,
                backdropFilter: [0, 'blur(1rem)'],
                translateX: ['-4rem', 0],
                opacity: [0, 1],
                easing: 'easeInSine',
                begin: () => {
                    if (this.showPinned) {
                        return;
                    }
                    this.toggleMenu(false);
                },
            });
        });
    }
    animateOverlayFadeOut(onComplete) {
        requestAnimationFrame(() => {
            anime({
                targets: this.overlayContainer,
                duration: 300,
                backdropFilter: ['blur(1rem)', 0],
                translateX: [0, '-4rem'],
                opacity: [1, 0],
                easing: 'easeInSine',
                complete: () => onComplete(),
            });
        });
    }
    onMenuItemsClick(event) {
        if (this.isMenuItemClicked(event)) {
            if (!this.showPinned) {
                this.toggleMenu(false);
            }
            this.onOverlayClose();
        }
    }
    isHiddenFromViewport() {
        return this.breakpoint === 'sm' && this.expand === false;
    }
    sidebarToggle() {
        this.mapExpandChange.emit(this.mapExpand);
        this.hostElement.dispatchEvent(new ApplicationSidebarToggleEvent(this.mapExpand));
    }
    render() {
        var _a;
        return (h(Host, { key: '6bbe3534c429ff115d26a2d87a97e978c24b8d26', class: {
                expanded: this.expand,
                [`breakpoint-${this.breakpoint}`]: true,
            }, slot: "menu" }, h("aside", { key: 'b85b49de3f33933ca7c750f817ca4c79653c9c11', class: {
                menu: true,
                expanded: this.expand,
            }, onClick: () => {
                this.resetActiveTab();
            } }, h("div", { key: 'c2ca6439d31df735b39a4d395647144931bcc4da', class: { 'menu-buttons': this.breakpoint != 'sm' } }, h("ix-burger-menu", { key: '819540e8418bd625c6a0fd00d740bcb3a89ba35f', onClick: async () => this.toggleMenu(), expanded: this.expand, ixAriaLabel: this.i18nExpandSidebar, pinned: this.showPinned, class: {
                'burger-menu': true,
            } }), this.breakpoint === 'sm' &&
            this.applicationLayoutContext.appSwitchConfig && (h("ix-icon-button", { onClick: () => showAppSwitch(this.applicationLayoutContext.appSwitchConfig), icon: "apps", ghost: true, class: "app-switch" }))), h("div", { key: '85fec10a6bf7bf7c9de2b3128ac24b1ac33094e0', id: "menu-tabs", style: {
                display: 'contents',
            }, onClick: (e) => this.onMenuItemsClick(e) }, h("div", { key: '94e641a1c107d9441252b018ef46125d3df90d78', class: "tabs-shadow-container" }, h("div", { key: '177354c52ce892e4b1de1f4f8a0d85a640b5bc3f', class: {
                'tabs--shadow': true,
                'tabs--shadow-top': true,
                'tabs--shadow--show': this.itemsScrollShadowTop,
            } }), h("div", { key: '2e94b7b0486d81144fad8be92d1f5b75cab1e069', class: {
                tabs: true,
                'show-scrollbar': this.expand,
            }, onScroll: () => this.handleOverflowIndicator() }, h("div", { key: '117a20c0f22f7847bfe1b67ae5e09b6adcfbc95e', class: "menu-avatar" }, h("slot", { key: 'd556d078eec85c5f337d9618a99b390b8f12cee2', name: "ix-menu-avatar" })), h("slot", { key: 'f4f42bd6794a47befd452b55c95ef3f2e3d5cab8', name: "home" }), this.breakpoint !== 'sm' || !this.isHiddenFromViewport() ? (h("slot", null)) : null), h("div", { key: 'abeb3e30bc2f3d635c268df2c174683a3556ebdc', class: {
                'tabs--shadow': true,
                'tabs--shadow-bottom': true,
                'tabs--shadow--show': this.itemsScrollShadowBottom,
            } }))), h("div", { key: 'b4bcff0a79472046db3076697de119830fdbb04c', class: "bottom-tab-divider" }), this.settings ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "settings", class: {
                'internal-tab': true,
                'bottom-tab': true,
                active: this.showSettings,
            }, icon: 'cogwheel', onClick: async () => this.toggleSettings(!this.showSettings) }, this.i18nSettings)) : null, h("div", { key: 'e130173a85315d316a83f68d3743948565e9f9d9', onClick: (e) => this.onMenuItemsClick(e) }, h("slot", { key: '5880ef09aed860a1d48e4c27f09e30ef0c1191dd', name: "bottom" })), h("div", { key: 'ed947911deed31140db9e5600929b215ecacc48c', id: "popover-area" }), this.about ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "aboutAndLegal", class: {
                'internal-tab': true,
                'bottom-tab': true,
                active: this.showAbout,
            }, icon: 'info', onClick: async () => this.toggleAbout(!this.showAbout) }, this.i18nLegal)) : null, this.enableToggleTheme ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "toggleTheme", onClick: () => themeSwitcher.toggleMode(), class: "internal-tab bottom-tab", icon: 'light-dark' }, this.i18nToggleTheme)) : null, this.enableMapExpand || ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.sidebar) ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "menu-collapse", onClick: () => this.sidebarToggle(), class: "internal-tab bottom-tab", icon: `${this.getCollapseIcon()}` }, this.getCollapseText())) : null), h("div", { key: '099b13a33e86103b32ffc1c01a17bd063cce26e8', class: {
                'menu-overlay': true,
                visible: this.isOverlayVisible(),
                expanded: this.expand,
            }, onTransitionEnd: () => {
                this.isTransitionDisabled = true;
                this.checkTransition();
            } }, h("div", { key: '5f7f9b19ecec0233ff58b44a7e55bac28934593b', class: 'menu-overlay-container' }, this.showSettings ? h("slot", { name: "ix-menu-settings" }) : null), h("div", { key: '6a44cd72bb8c6e010dba5c26b81c8c6adbcaca48', class: 'menu-overlay-container' }, this.showAbout ? h("slot", { name: "ix-menu-about" }) : null))));
    }
    static get is() { return "ix-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu.css"]
        };
    }
    static get properties() {
        return {
            "showSettings": {
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
                    "text": "Is settings tab visible"
                },
                "attribute": "show-settings",
                "reflect": false,
                "defaultValue": "false"
            },
            "showAbout": {
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
                    "text": "Is about tab visible"
                },
                "attribute": "show-about",
                "reflect": false,
                "defaultValue": "false"
            },
            "enableToggleTheme": {
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
                    "text": "Show toggle between light and dark variant. Only if the provided theme have implemented both!"
                },
                "attribute": "enable-toggle-theme",
                "reflect": false,
                "defaultValue": "false"
            },
            "enableSettings": {
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
                    "text": "Is settings tab is visible"
                },
                "attribute": "enable-settings",
                "reflect": false,
                "defaultValue": "true"
            },
            "enableMapExpand": {
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
                    "text": "Internal"
                },
                "attribute": "enable-map-expand",
                "reflect": false,
                "defaultValue": "false"
            },
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
                    "text": "Should only be set if you use ix-menu standalone"
                },
                "attribute": "application-name",
                "reflect": false
            },
            "applicationDescription": {
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
                    "text": "Should only be set if you use ix-menu standalone"
                },
                "attribute": "application-description",
                "reflect": false,
                "defaultValue": "''"
            },
            "maxVisibleMenuItems": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "- Has no effect on component. Will get removed with next major release (v3)"
                        }],
                    "text": "Maximum number of menu items to show in case enough vertical space is available.\nExtra menu items will be collapsed to 'show more' menu item."
                },
                "attribute": "max-visible-menu-items",
                "reflect": false,
                "defaultValue": "9"
            },
            "i18nExpandSidebar": {
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
                    "text": "Accessibility i18n label for the burger menu of the sidebar"
                },
                "attribute": "i-1-8n-expand-sidebar",
                "reflect": false,
                "defaultValue": "'Expand sidebar'"
            },
            "expand": {
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
                    "text": ""
                },
                "attribute": "expand",
                "reflect": true,
                "defaultValue": "false"
            },
            "pinned": {
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
                    "text": "Menu stays pinned to the left"
                },
                "attribute": "pinned",
                "reflect": false,
                "defaultValue": "false"
            },
            "i18nLegal": {
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
                "attribute": "i-1-8n-legal",
                "reflect": false,
                "defaultValue": "'About & legal information'"
            },
            "i18nSettings": {
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
                "attribute": "i-1-8n-settings",
                "reflect": false,
                "defaultValue": "'Settings'"
            },
            "i18nToggleTheme": {
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
                "attribute": "i-1-8n-toggle-theme",
                "reflect": false,
                "defaultValue": "'Toggle theme'"
            },
            "i18nExpand": {
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
                "attribute": "i-1-8n-expand",
                "reflect": false,
                "defaultValue": "' Expand'"
            },
            "i18nCollapse": {
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
                "attribute": "i-1-8n-collapse",
                "reflect": false,
                "defaultValue": "'Collapse'"
            }
        };
    }
    static get states() {
        return {
            "showPinned": {},
            "mapExpand": {},
            "activeTab": {},
            "breakpoint": {},
            "itemsScrollShadowTop": {},
            "itemsScrollShadowBottom": {},
            "applicationLayoutContext": {}
        };
    }
    static get events() {
        return [{
                "method": "expandChange",
                "name": "expandChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Menu expanded"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "mapExpandChange",
                "name": "mapExpandChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Map Sidebar expanded"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggleMapExpand": {
                "complexType": {
                    "signature": "(show?: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "show",
                            "type": "boolean",
                            "docs": ""
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
                    "text": "Toggle map sidebar expand",
                    "tags": [{
                            "name": "param",
                            "text": "show"
                        }]
                }
            },
            "toggleMenu": {
                "complexType": {
                    "signature": "(show?: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "show",
                            "type": "boolean",
                            "docs": ""
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
                    "text": "Toggle menu",
                    "tags": [{
                            "name": "param",
                            "text": "show"
                        }]
                }
            },
            "toggleSettings": {
                "complexType": {
                    "signature": "(show: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "show",
                            "type": "boolean",
                            "docs": ""
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
                    "text": "Toggle Settings tabs",
                    "tags": [{
                            "name": "param",
                            "text": "show"
                        }]
                }
            },
            "toggleAbout": {
                "complexType": {
                    "signature": "(show: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "show",
                            "type": "boolean",
                            "docs": ""
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
                    "text": "Toggle About tabs",
                    "tags": [{
                            "name": "param",
                            "text": "show"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "pinned",
                "methodName": "pinnedChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "handleOverflowIndicator",
                "target": "window",
                "capture": false,
                "passive": true
            }, {
                "name": "close",
                "method": "onOverlayClose",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=menu.js.map
