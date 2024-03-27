import { r as registerInstance, h, H as Host, g as getElement } from './index-f18c5ad1.js';
import { u as useContextProvider, A as ApplicationLayoutContext } from './context-c9078420.js';
import { a as applicationLayoutService } from './service-02cc9011.js';
import { m as menuController } from './menu-service-0a72c2d0.js';
import { h as hasSlottedElements } from './shadow-dom-60e9243d.js';
import { t as themeSwitcher } from './theme-switcher-b10fb4da.js';
import './typed-event-ad6484c5.js';
import './breakpoints-d5c2f627.js';

const applicationCss = ":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host main{display:block;position:relative;height:100%;width:100%;overflow:hidden}:host(.breakpoint-md){--ix-application-menu-margin-left:3.25rem}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+main{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+main{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:0}";
const IxApplicationStyle0 = applicationCss;

const Application = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'f45b2c2247fe718f44c5e11e9acae2634188b414', "data-role": "", class: {
                [`breakpoint-${this.breakpoint}`]: true,
            } }, h("slot", { key: 'fcfc89b0bd0e7291513022307aca11f9c899b1ad', name: "application-header" }), h("div", { key: 'b3d98c273fb4544d8c8881510c6a62b487e3fc1a', class: "application" }, h("slot", { key: '971162431f68521d41f0ed7b0e5cf196155906a9', name: "menu" }), h("aside", { key: '19e66651825dc579c23cf800f2de37c6a0f98024', class: {
                'application-sidebar': true,
                slotted: this.applicationSidebarSlotted,
            }, onClick: () => this.onContentClick() }, h("slot", { key: '8388140b31403568b29ecb395a82e07957bb8d02', name: "application-sidebar", onSlotchange: () => (this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot)) })), h("main", { key: '43c7333469f50a46983332da603769d2c261faff', class: "content", onClick: () => this.onContentClick() }, h("slot", { key: '46cb342f9f3904bf0a30567edb0c6e9d2b86afee' })))));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "breakpoints": ["onBreakpointsChange"],
        "theme": ["changeTheme"],
        "themeSystemAppearance": ["changeTheme"],
        "appSwitchConfig": ["onApplicationSidebarChange"],
        "applicationSidebarSlotted": ["onApplicationSidebarChange"]
    }; }
};
Application.style = IxApplicationStyle0;

export { Application as ix_application };

//# sourceMappingURL=ix-application.entry.js.map