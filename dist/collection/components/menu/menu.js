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
        return (h(Host, { key: 'dc5f861c533377667d90c4447fa69883ccd25a9c', class: {
                expanded: this.expand,
                [`breakpoint-${this.breakpoint}`]: true,
            }, slot: "menu" }, h("aside", { key: '3f7c3f0fdc2c34b7443270453ae02f9fc80b69d4', class: {
                menu: true,
                expanded: this.expand,
            }, onClick: () => {
                this.resetActiveTab();
            } }, h("div", { key: '67dae20d4923d6c3dcd55554156bce973819e0b4', class: 'menu-buttons' }, h("ix-burger-menu", { key: '909f53239aad6af9171204fc709806399ffb64f2', onClick: async () => this.toggleMenu(), expanded: this.expand, ixAriaLabel: this.i18nExpandSidebar, pinned: this.showPinned, class: {
                'burger-menu': true,
            } }), this.breakpoint === 'sm' &&
            this.applicationLayoutContext.appSwitchConfig && (h("ix-icon-button", { onClick: () => showAppSwitch(this.applicationLayoutContext.appSwitchConfig), icon: "apps", ghost: true, class: "app-switch" }))), h("div", { key: '2dced6457117ed28c2779da6da36b530c617d456', class: "menu-avatar" }, h("slot", { key: 'b980dd0ce062fad908d2abd77eac8d12dd113fe6', name: "ix-menu-avatar" })), h("div", { key: '5b46b35286c6d96abf3f0f0c997e7d9a9062ce09', id: "menu-tabs", style: {
                display: 'contents',
            }, onClick: (e) => this.onMenuItemsClick(e) }, h("div", { key: '6617a6f08eb96e86057b44f6016b4c4b5dc0d0b0', class: "tabs-top" }, h("slot", { key: 'fa41c0f63f37039d4f875f12379de9dd24fc7263', name: "home" })), h("div", { key: 'a3fdc5c413445908968fbb94cba60ab02c36635e', class: "tabs-shadow-container" }, h("div", { key: 'ac36763e0edf52dc07374aa5bb72e11b4f75d5cb', class: {
                'tabs--shadow': true,
                'tabs--shadow-top': true,
                'tabs--shadow--show': this.itemsScrollShadowTop,
            } }), h("div", { key: 'f4807e4294f0ece412ef094f7c637dfbceb6c231', class: "tabs", onScroll: () => this.handleOverflowIndicator() }, this.breakpoint !== 'sm' || !this.isHiddenFromViewport() ? (h("slot", null)) : null), h("div", { key: '1fa092109e0fced31873eca5bdf76cff0122e5ab', class: {
                'tabs--shadow': true,
                'tabs--shadow-bottom': true,
                'tabs--shadow--show': this.itemsScrollShadowBottom,
            } }))), h("div", { key: '7340e00be5bffcd3ea91b6cadef350bff4b2f771', class: "bottom-tab-divider" }), this.settings ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "settings", class: {
                'internal-tab': true,
                'bottom-tab': true,
                active: this.showSettings,
            }, icon: 'cogwheel', onClick: async () => this.toggleSettings(!this.showSettings) }, this.i18nSettings)) : null, h("div", { key: 'f3c245f82072f5737581f59753c32d5a7486b0f2', onClick: (e) => this.onMenuItemsClick(e) }, h("slot", { key: '53625e79d26d534ec1cd16a51e270650ae185900', name: "bottom" })), h("div", { key: 'af9c50af4a7a89d877faf6acd5a97884f05a7403', id: "popover-area" }), this.about ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "aboutAndLegal", class: {
                'internal-tab': true,
                'bottom-tab': true,
                active: this.showAbout,
            }, icon: 'info', onClick: async () => this.toggleAbout(!this.showAbout) }, this.i18nLegal)) : null, this.enableToggleTheme ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "toggleTheme", onClick: () => themeSwitcher.toggleMode(), class: "internal-tab bottom-tab", icon: 'light-dark' }, this.i18nToggleTheme)) : null, this.enableMapExpand || ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.sidebar) ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "menu-collapse", onClick: () => this.sidebarToggle(), class: "internal-tab bottom-tab", icon: `${this.getCollapseIcon()}` }, this.getCollapseText())) : null), h("div", { key: 'cc7443de9d327194cc7aff083033111642440efc', class: {
                'menu-overlay': true,
                visible: this.isOverlayVisible(),
                expanded: this.expand,
            }, onTransitionEnd: () => {
                this.isTransitionDisabled = true;
                this.checkTransition();
            } }, h("div", { key: '5a166f1447115082d0578b42768b9bf79f8df406', class: 'menu-overlay-container' }, this.showSettings ? h("slot", { name: "ix-menu-settings" }) : null), h("div", { key: '0f29a9bbb6a2acc42744818a1813329220ce5c54', class: 'menu-overlay-container' }, this.showAbout ? h("slot", { name: "ix-menu-about" }) : null))));
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
