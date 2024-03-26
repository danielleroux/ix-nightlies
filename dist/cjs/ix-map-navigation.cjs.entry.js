'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');
const anime_es = require('./anime.es-e2814360.js');
const context = require('./context-98f4a0b3.js');
require('./typed-event-8032c0c0.js');

const mapNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .map-nav{display:flex;margin-left:3.25rem;position:relative;height:100%;flex-grow:1;overflow:hidden}:host .map-nav-sidebar{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}:host .map-nav-sidebar-content{align-items:center;position:relative;overflow:auto;height:100%;width:100%}:host .map-nav-sidebar-content .map-nav-sidebar-static-content{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}:host .map-nav-header{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}:host .map-nav-header .map-nav-header-brand{background-color:var(--theme-map-navigation-background);display:flex;align-items:center;height:100%;width:100%;padding:0 1rem;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}:host .map-nav-header .map-nav-header-brand button{margin-left:1rem}:host .map-nav-header-content{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}:host .map-nav-header-content.empty{height:0}:host .map-nav-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}:host .content{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}:host ::slotted(ix-menu){position:absolute}";
const IxMapNavigationStyle0 = mapNavigationCss;

const MapNavigation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.navigationToggled = index.createEvent(this, "navigationToggled", 7);
        this.contextMenuClick = index.createEvent(this, "contextMenuClick", 7);
        this.applicationName = undefined;
        this.navigationTitle = undefined;
        this.hideContextMenu = true;
        this.isSidebarOpen = true;
        this.hasContentHeader = false;
    }
    get menu() {
        return this.hostElement.querySelector('ix-menu');
    }
    get menuOverlay() {
        return this.hostElement.querySelector('ix-menu-overlay');
    }
    get mapNavMenu() {
        return this.hostElement.shadowRoot.querySelector('.map-nav-menu');
    }
    get sidebar() {
        return this.hostElement.shadowRoot.querySelector('.map-nav-sidebar');
    }
    get overlay() {
        return this.hostElement.shadowRoot.querySelector('#overlay');
    }
    componentDidRender() {
        this.appendMenu();
        this.closeOverlay();
    }
    componentWillLoad() {
        context.useContextProvider(this.hostElement, context.ApplicationLayoutContext, {
            hideHeader: false,
            host: 'map-navigation',
        });
    }
    appendMenu() {
        this.menu.addEventListener('mapExpandChange', (event) => {
            const state = !event.detail;
            this.toggleSidebar(state);
        });
        this.menu.enableMapExpand = true;
    }
    /**
     * Change the visibility of the sidebar
     *
     * @param show new visibility state
     * @since 1.6.0
     */
    async toggleSidebar(show) {
        if (show !== undefined) {
            this.isSidebarOpen = show;
        }
        else {
            this.isSidebarOpen = !this.isSidebarOpen;
        }
        if (this.isSidebarOpen) {
            this.openSidebar();
        }
        else {
            this.closeSidebar();
        }
        this.navigationToggled.emit(this.isSidebarOpen);
        this.menu.toggleMapExpand(this.isSidebarOpen);
    }
    closeSidebar() {
        anime_es.anime({
            targets: this.sidebar,
            duration: MapNavigation.defaultTime,
            marginLeft: [0, '-29.75rem'],
            opacity: [1, 0],
            easing: 'easeInSine',
            complete: () => {
                this.sidebar.classList.add('d-none');
            },
        });
    }
    openSidebar() {
        anime_es.anime({
            targets: this.sidebar,
            duration: MapNavigation.defaultTime,
            marginLeft: ['-29.75rem', 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            begin: () => {
                this.sidebar.classList.remove('d-none');
            },
        });
    }
    /**
     * Open a overlay inside content area
     * @deprecated Will be removed in 2.0.0. Use slot based approach
     *
     * @param name
     * @param component
     * @param icon
     * @param color
     */
    async openOverlay(name, component, icon, color) {
        anime_es.anime({
            targets: this.overlay,
            duration: MapNavigation.slowTime,
            backdropFilter: [0, 'blur(1rem)'],
            translateX: ['-4rem', 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            begin: () => {
                this.overlay.classList.remove('d-none');
            },
        });
        const overlayInstance = document.createElement('ix-map-navigation-overlay');
        overlayInstance.setAttribute('color', color);
        overlayInstance.setAttribute('name', name);
        overlayInstance.setAttribute('icon', icon);
        overlayInstance.setAttribute('slot', 'overlay');
        overlayInstance.addEventListener('closeClick', () => this.closeOverlay());
        overlayInstance.appendChild(component);
        this.hostElement.appendChild(overlayInstance);
    }
    /**
     * Close current shown overlay
     * @deprecated Will be removed in 2.0.0. Use slot based approach
     */
    async closeOverlay() {
        anime_es.anime({
            targets: this.overlay,
            duration: MapNavigation.slowTime,
            backdropFilter: ['blur(1rem)', 0],
            translateX: [0, '-4rem'],
            opacity: [1, 0],
            easing: 'easeInSine',
            complete: () => {
                var _a;
                if (!this.overlay) {
                    return;
                }
                (_a = this.overlay.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
                this.overlay.classList.add('d-none');
            },
        });
    }
    checkHasContentHeader(e) {
        const nodes = e.currentTarget.assignedNodes({
            flatten: true,
        });
        this.hasContentHeader = (nodes === null || nodes === void 0 ? void 0 : nodes.length) !== 0;
    }
    render() {
        return (index.h(index.Host, { key: '244fd091e3b6814c593e5cc54886671eeaeecfe3' }, index.h("slot", { key: 'b6cf5fdfa20699b30fabac6dc5933c51866e0835', name: "menu" }), index.h("div", { key: 'c02eed1b6f43a9f2ffaaec8a133c4bbb229e3c41', class: "map-nav" }, index.h("div", { key: '901f449cc3ec6813313a2b2d0cd2974b0ebd37c9', class: "map-nav-sidebar" }, index.h("div", { key: '5e74233c5bfb1fdbd2a32bf0d706d9bfdd3781a8', class: "map-nav-header" }, index.h("ix-application-header", { key: '5d422469d549d938c88378b06425ed72de2288fe', name: this.applicationName, class: "map-nav-header-brand" }, index.h("slot", { key: '8d9f573c182a4f39fbe74c58baacfa769d28ded4', slot: "logo", name: "logo" }))), index.h("div", { key: 'af61413881ce9980e3e60f8a1d57dbc675a1b71c', class: "map-nav-sidebar-content" }, index.h("div", { key: '733e8151bc560a0341dd7fba7bcda2d5f4640167', class: "map-nav-sidebar-static-content" }, index.h("div", { key: '3f71a9a291e1be972fb4d958885f760324f87e0c', class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? ('') : (index.h("ix-icon-button", { icon: 'context-menu', ghost: true, size: "24", variant: "secondary", onClick: (_) => this.contextMenuClick.emit() }))), index.h("div", { key: 'bd230aae2e9672c6703de412a7548954c5baac82', class: "map-nav-sidebar-user-content" }, index.h("slot", { key: 'a2fae9ddb2264ba0b3ede780166b007059c41dc4', name: "sidebar-content" })))), index.h("div", { key: 'bb9f7339322efc8dfa2959bc6f715fccc6275cea', class: "content" }, index.h("div", { key: '107b486cf9e77f87fd5622f4ff90f603ba837448', class: {
                'map-nav-header-content': true,
                'bg-2': true,
                empty: !this.hasContentHeader,
            } }, index.h("slot", { key: '492c5b21d17a86e805319577eaeb1f4d43a4dfda', name: "content-header", onSlotchange: (e) => this.checkHasContentHeader(e) })), index.h("main", { key: '0f0512e22adee0c88888db6adc9b9949e9fbaa2e' }, index.h("slot", { key: '3b69f18bb5f1301c9eaed103a65a185c1aadae5b' }), index.h("slot", { key: '9463e7a7f6ef650560ed5970d035a0eb1331a517', name: "overlay" }))))));
    }
    get hostElement() { return index.getElement(this); }
};
MapNavigation.defaultTime = 150;
MapNavigation.slowTime = 500;
MapNavigation.style = IxMapNavigationStyle0;

exports.ix_map_navigation = MapNavigation;

//# sourceMappingURL=ix-map-navigation.cjs.entry.js.map