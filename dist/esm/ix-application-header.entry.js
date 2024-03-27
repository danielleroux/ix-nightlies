import { r as registerInstance, a as readTask, h, F as Fragment, H as Host, g as getElement } from './index-5cd176b3.js';
import { s as showAppSwitch } from './index-76b9c8de.js';
import { a as applicationLayoutService } from './service-02cc9011.js';
import { a as useContextConsumer, A as ApplicationLayoutContext } from './context-c9078420.js';
import { m as menuController } from './menu-service-0a72c2d0.js';
import { h as hasSlottedElements } from './shadow-dom-60e9243d.js';
import './animation-4a73b1c3.js';
import './modal-54740f80.js';
import './typed-event-ad6484c5.js';
import './breakpoints-d5c2f627.js';

const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;min-height:2.75rem;padding:0 1rem 0 0.625rem;color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .app-switch{margin-right:1rem}:host .name{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap;max-width:50%;margin-left:1.5rem;margin-right:2.5rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color);margin-left:0.375rem}:host .content{display:flex;position:relative;flex-direction:row;margin-left:auto;margin-right:0px}:host .dropdown{overflow:visible}:host .dropdown-content{padding:1rem}:host .context-menu{display:none}:host .context-menu.context-menu-visible{display:block}@media only screen and (max-width: 48em){:host .logo{display:none}}:host ::slotted(ix-avatar){margin-left:1rem}:host(.breakpoint-sm){padding-left:0.5rem}:host(.breakpoint-sm) .logo{margin-left:0.5rem}";
const IxApplicationHeaderStyle0 = applicationHeaderCss;

const ApplicationHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '5434362f681c6d6d67b1eaf5e5ebc993e578f8e9', class: { [`breakpoint-${this.breakpoint}`]: true }, slot: "application-header" }, this.breakpoint === 'sm' && this.suppressResponsive === false && (h("ix-burger-menu", { onClick: () => this.onMenuClick(), expanded: this.menuExpanded })), ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig) &&
            this.breakpoint !== 'sm' &&
            this.suppressResponsive === false && (h("ix-icon-button", { onClick: () => this.showAppSwitch(), icon: "apps", ghost: true, class: "app-switch" })), h("div", { key: '2a40f871e8359d2ad378546773c8ec1b583d1684', class: "logo" }, h("slot", { key: 'd53fb161f6accdbdd92c7455e0a81faab242054d', name: "logo" })), h("div", { key: '1244da8ee7ddbec82df90f6204948939dc67079c', class: "name" }, this.name), h("div", { key: '7a1256fba0480dba4e42da20f55c268b88422a99', class: "content" }, this.breakpoint === 'sm' ? (h(Fragment, null, h("ix-icon-button", { class: {
                ['context-menu']: true,
                ['context-menu-visible']: this.hasSlottedElements,
            }, "data-context-menu": true, icon: "more-menu", ghost: true }), h("ix-dropdown", { "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton() }, h("div", { class: "dropdown-content" }, h("slot", { onSlotchange: () => this.updateIsSlottedContent() }))))) : (h("slot", { onSlotchange: () => this.updateIsSlottedContent() })), h("slot", { key: '6732e9899c977bdd6301b75efce7687ca5a0bf4c', name: "ix-application-header-avatar" }))));
    }
    get hostElement() { return getElement(this); }
};
ApplicationHeader.style = IxApplicationHeaderStyle0;

export { ApplicationHeader as ix_application_header };

//# sourceMappingURL=ix-application-header.entry.js.map