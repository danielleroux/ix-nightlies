'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const context = require('./context-98f4a0b3.js');
const service = require('./service-a42add5f.js');
const menuService = require('./menu-service-9590f3fb.js');
const shadowDom = require('./shadow-dom-73f9d553.js');
const themeSwitcher = require('./theme-switcher-2d2bde85.js');
require('./typed-event-8032c0c0.js');
require('./breakpoints-5d1583fb.js');

const applicationCss = ":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host main{display:block;position:relative;height:100%;width:100%;overflow:hidden}:host(.breakpoint-md){--ix-application-menu-margin-left:3.25rem}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+main{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+main{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:0}";
const IxApplicationStyle0 = applicationCss;

const Application = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            service.applicationLayoutService.enableBreakpointDetection();
            return;
        }
        service.applicationLayoutService.disableBreakpointDetection();
        service.applicationLayoutService.setBreakpoint(newMode);
    }
    onBreakpointsChange(breakpoints) {
        service.applicationLayoutService.setBreakpoints(breakpoints);
    }
    get menu() {
        return this.hostElement.querySelector('ix-menu');
    }
    get applicationSidebarSlot() {
        return this.hostElement.shadowRoot.querySelector('.application-sidebar slot');
    }
    onContentClick() {
        var _a;
        if (menuService.menuController.isPinned) {
            return;
        }
        (_a = this.menu) === null || _a === void 0 ? void 0 : _a.toggleMenu(false);
    }
    componentWillLoad() {
        service.applicationLayoutService.setBreakpoints(this.breakpoints);
        this.contextProvider = context.useContextProvider(this.hostElement, context.ApplicationLayoutContext, {
            hideHeader: false,
            host: 'basic-navigation',
            sidebar: this.applicationSidebarSlotted,
            appSwitchConfig: this.appSwitchConfig,
        });
        this.modeDisposable = service.applicationLayoutService.onChange.on((mode) => {
            this.breakpoint = mode;
        });
        this.breakpoint = service.applicationLayoutService.breakpoint;
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
                themeSwitcher.themeSwitcher.setVariant();
            }
            return;
        }
        if (themeSwitcher.themeSwitcher.hasVariantSuffix(this.theme)) {
            themeSwitcher.themeSwitcher.setTheme(`theme-${this.theme}`);
            return;
        }
        themeSwitcher.themeSwitcher.setTheme(`theme-${this.theme}-dark`, this.themeSystemAppearance);
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
        return (index.h(index.Host, { key: 'c617c1c5634cc4e151ad45bfec3be602619df7bb', "data-role": "", class: {
                [`breakpoint-${this.breakpoint}`]: true,
            } }, index.h("slot", { key: '7dd298629e5d825957cc5caf15be3726e0487374', name: "application-header" }), index.h("div", { key: '41da1f0707c6f6723e33a50f4c45cda28bed9e77', class: "application" }, index.h("slot", { key: '7d2b838c6193af2fc357befb1c15cd6870d85841', name: "menu" }), index.h("aside", { key: '73ce757bc32176170b51cf95013b13f5594c0eb2', class: {
                'application-sidebar': true,
                slotted: this.applicationSidebarSlotted,
            }, onClick: () => this.onContentClick() }, index.h("slot", { key: '8361978e6d5cdccae60544290253175e27e00b54', name: "application-sidebar", onSlotchange: () => (this.applicationSidebarSlotted = shadowDom.hasSlottedElements(this.applicationSidebarSlot)) })), index.h("main", { key: 'cbce05cd33d05f8f6a4e7cf7e7f8582e560da0d6', class: "content", onClick: () => this.onContentClick() }, index.h("slot", { key: 'd3a7f19add2a6cf2f976c9be1b8688fa5e997e48' })))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "breakpoints": ["onBreakpointsChange"],
        "theme": ["changeTheme"],
        "themeSystemAppearance": ["changeTheme"],
        "appSwitchConfig": ["onApplicationSidebarChange"],
        "applicationSidebarSlotted": ["onApplicationSidebarChange"]
    }; }
};
Application.style = IxApplicationStyle0;

exports.ix_application = Application;

//# sourceMappingURL=ix-application.cjs.entry.js.map