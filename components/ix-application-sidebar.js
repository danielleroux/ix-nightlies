import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as anime } from './anime.es.js';
import { A as Animation } from './animation.js';

const applicationSidebarCss = ":host{display:block;position:relative;width:22rem;height:100%;padding:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.visible){border-right:2px solid var(--theme-color-soft-bdr);padding:1.5rem 0.5rem 0}";
const IxApplicationSidebarStyle0 = applicationSidebarCss;

const ApplicationSidebar = /*@__PURE__*/ proxyCustomElement(class ApplicationSidebar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.visible = true;
    }
    listenToggleEvent() {
        const visibility = !this.visible;
        const animation = {
            targets: this.hostElement,
            width: visibility ? ['0', '22rem'] : ['22rem', '0'],
            opacity: visibility ? [0, 1] : [1, 0],
            easing: 'easeInSine',
            duration: Animation.defaultTime,
        };
        const changeVisibility = () => {
            this.visible = visibility;
        };
        if (visibility) {
            animation.begin = changeVisibility.bind(this);
        }
        else {
            animation.complete = changeVisibility.bind(this);
        }
        anime(animation);
    }
    render() {
        return (h(Host, { key: '1e853788170278477ab1cce920f87bd2f3727c91', slot: "application-sidebar", class: {
                visible: this.visible,
            } }, this.visible ? h("slot", null) : null));
    }
    get hostElement() { return this; }
    static get style() { return IxApplicationSidebarStyle0; }
}, [1, "ix-application-sidebar", {
        "visible": [32]
    }, [[8, "application-sidebar-toggle", "listenToggleEvent"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-application-sidebar"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-application-sidebar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ApplicationSidebar);
            }
            break;
    } });
}

const IxApplicationSidebar = ApplicationSidebar;
const defineCustomElement = defineCustomElement$1;

export { IxApplicationSidebar, defineCustomElement };

//# sourceMappingURL=ix-application-sidebar.js.map