'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const index$1 = require('./index-c4629a8d.js');
const service = require('./service-a42add5f.js');
const context = require('./context-98f4a0b3.js');
const menuService = require('./menu-service-9590f3fb.js');
const shadowDom = require('./shadow-dom-73f9d553.js');
require('./animation-99234008.js');
require('./modal-828cb80a.js');
require('./typed-event-8032c0c0.js');
require('./breakpoints-5d1583fb.js');

const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;min-height:2.75rem;padding:0 1rem 0 0.625rem;color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .app-switch{margin-right:1rem}:host .name{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap;max-width:50%;margin-left:1.5rem;margin-right:2.5rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color);margin-left:0.375rem}:host .content{display:flex;position:relative;flex-direction:row;margin-left:auto;margin-right:0px}:host .dropdown{overflow:visible}:host .dropdown-content{padding:1rem}:host .context-menu{display:none}:host .context-menu.context-menu-visible{display:block}@media only screen and (max-width: 48em){:host .logo{display:none}}:host ::slotted(ix-avatar){margin-left:1rem}:host(.breakpoint-sm){padding-left:0.5rem}:host(.breakpoint-sm) .logo{margin-left:0.5rem}";
const IxApplicationHeaderStyle0 = applicationHeaderCss;

const ApplicationHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.name = undefined;
        this.breakpoint = 'lg';
        this.menuExpanded = false;
        this.suppressResponsive = false;
        this.hasSlottedElements = false;
        this.applicationLayoutContext = undefined;
    }
    componentWillLoad() {
        context.useContextConsumer(this.hostElement, context.ApplicationLayoutContext, (ctx) => {
            if ((ctx === null || ctx === void 0 ? void 0 : ctx.host) === 'map-navigation') {
                this.suppressResponsive = true;
                this.breakpoint = 'md';
                return;
            }
            this.breakpoint = service.applicationLayoutService.breakpoint;
            this.applicationLayoutContext = ctx;
            this.tryUpdateAppSwitch();
        }, true);
        this.menuDisposable = menuService.menuController.expandChange.on((show) => {
            this.menuExpanded = show;
        });
        this.modeDisposable = service.applicationLayoutService.onChange.on((mode) => {
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
        menuService.menuController.toggle();
    }
    resolveContextMenuButton() {
        return new Promise((resolve) => index.readTask(() => resolve(this.hostElement.shadowRoot.querySelector('[data-context-menu]'))));
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
        this.callbackUpdateAppSwitchModal = await index$1.showAppSwitch((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig);
    }
    updateIsSlottedContent() {
        const slotElement = this.hostElement.shadowRoot.querySelector('.content slot');
        this.hasSlottedElements = shadowDom.hasSlottedElements(slotElement);
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: 'b572496c016318e8a9d6e6e8db7b9de61abb3861', class: { [`breakpoint-${this.breakpoint}`]: true }, slot: "application-header" }, this.breakpoint === 'sm' && this.suppressResponsive === false && (index.h("ix-burger-menu", { onClick: () => this.onMenuClick(), expanded: this.menuExpanded })), ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig) &&
            this.breakpoint !== 'sm' &&
            this.suppressResponsive === false && (index.h("ix-icon-button", { onClick: () => this.showAppSwitch(), icon: "apps", ghost: true, class: "app-switch" })), index.h("div", { key: '6882fe0ae0d6653ef42c0e58dc65fb92d03ab4ea', class: "logo" }, index.h("slot", { key: '77d7b96f98d629e08dc5bc3e4338b703bbe1e2a6', name: "logo" })), index.h("div", { key: '84e0f79f501266f0d0b220f87aaa4a7aab8dc659', class: "name" }, this.name), index.h("div", { key: '2fae6ae95a4696765a3421ccc002e3e9efa6fbd6', class: "content" }, this.breakpoint === 'sm' ? (index.h(index.Fragment, null, index.h("ix-icon-button", { class: {
                ['context-menu']: true,
                ['context-menu-visible']: this.hasSlottedElements,
            }, "data-context-menu": true, icon: "more-menu", ghost: true }), index.h("ix-dropdown", { "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton() }, index.h("div", { class: "dropdown-content" }, index.h("slot", { onSlotchange: () => this.updateIsSlottedContent() }))))) : (index.h("slot", { onSlotchange: () => this.updateIsSlottedContent() })), index.h("slot", { key: 'd9f22375761d77beb0fc038195c06d0e23297d31', name: "ix-application-header-avatar" }))));
    }
    get hostElement() { return index.getElement(this); }
};
ApplicationHeader.style = IxApplicationHeaderStyle0;

exports.ix_application_header = ApplicationHeader;

//# sourceMappingURL=ix-application-header.cjs.entry.js.map