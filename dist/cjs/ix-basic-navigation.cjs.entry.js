'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const context = require('./context-98f4a0b3.js');
const service = require('./service-a42add5f.js');
const menuService = require('./menu-service-9590f3fb.js');
require('./typed-event-8032c0c0.js');
require('./breakpoints-5d1583fb.js');

const basicNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .content{display:flex;height:100%;width:100%;position:relative;margin-left:3.25rem;overflow:auto}:host .navigation-content{display:flex;position:relative;flex-direction:row;height:calc(100% - 2.75rem);width:100%}:host(.hide-header) .navigation-content,:host(.hide-header) .content{height:100%}:host(.breakpoint-lg) .content{margin-left:0rem}:host(.breakpoint-sm) .content{margin-left:0px;width:100%}";
const IxBasicNavigationStyle0 = basicNavigationCss;

const BasicNavigation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.breakpoint = service.applicationLayoutService.breakpoint;
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
            hideHeader: this.hideHeader,
            host: 'basic-navigation',
        });
        this.modeDisposable = service.applicationLayoutService.onChange.on((mode) => {
            this.breakpoint = mode;
        });
        this.breakpoint = service.applicationLayoutService.breakpoint;
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
        return (index.h(index.Host, { key: '35083d5a514a69bc03be9de1a1c2641d9ed187ad', "data-role": "", class: {
                'hide-header': this.hideHeader,
                [`breakpoint-${this.breakpoint}`]: true,
            } }, !this.hideHeader ? (index.h("ix-application-header", { name: this.applicationName }, index.h("slot", { name: "logo", slot: "logo" }))) : null, index.h("div", { key: 'e9ff6a0ea8655afccc66259da206632e035b52a2', class: "navigation-content" }, index.h("slot", { key: '0809719c5650e73c7d801dbd588dacfe4e24e8cb', name: "menu" }), index.h("div", { key: '3a56100cd7300c1b7b6e8076b7f5dd5f2c5ae3f4', class: "content", onClick: () => this.onContentClick() }, index.h("slot", { key: '8b14107e0aeee94534cfdf6cd1cf971f1dadb814' })))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "hideHeader": ["onHideHeaderChange"],
        "breakpoints": ["onBreakpointsChange"]
    }; }
};
BasicNavigation.style = IxBasicNavigationStyle0;

exports.ix_basic_navigation = BasicNavigation;

//# sourceMappingURL=ix-basic-navigation.cjs.entry.js.map