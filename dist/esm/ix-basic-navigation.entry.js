import { r as registerInstance, h, H as Host, g as getElement } from './index-f18c5ad1.js';
import { u as useContextProvider, A as ApplicationLayoutContext } from './context-c9078420.js';
import { a as applicationLayoutService } from './service-02cc9011.js';
import { m as menuController } from './menu-service-0a72c2d0.js';
import './typed-event-ad6484c5.js';
import './breakpoints-d5c2f627.js';

const basicNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .content{display:flex;height:100%;width:100%;position:relative;margin-left:3.25rem;overflow:auto}:host .navigation-content{display:flex;position:relative;flex-direction:row;height:calc(100% - 2.75rem);width:100%}:host(.hide-header) .navigation-content,:host(.hide-header) .content{height:100%}:host(.breakpoint-lg) .content{margin-left:0rem}:host(.breakpoint-sm) .content{margin-left:0px;width:100%}";
const IxBasicNavigationStyle0 = basicNavigationCss;

const BasicNavigation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "hideHeader": ["onHideHeaderChange"],
        "breakpoints": ["onBreakpointsChange"]
    }; }
};
BasicNavigation.style = IxBasicNavigationStyle0;

export { BasicNavigation as ix_basic_navigation };

//# sourceMappingURL=ix-basic-navigation.entry.js.map