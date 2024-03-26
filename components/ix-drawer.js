import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as anime } from './anime.es.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './spinner.js';

const drawerCss = ":host{top:0;right:0;box-shadow:var(--theme-box-shadow-level-3);visibility:hidden;display:flex;position:absolute;flex-flow:column nowrap;justify-content:flex-start;align-items:center;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;transition:all 300ms ease-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toggle{z-index:100;visibility:visible}:host .drawer-container.full-height{min-height:100%}:host .header{display:flex;position:relative;align-items:center;justify-content:flex-end;padding:0.5rem;width:100%;order:1}:host .header .header-content{flex-grow:1;margin-right:1rem}:host .content{position:relative;flex:1;flex-grow:1;order:2;height:100%;width:100%;overflow-y:auto}:host(.toggle){visibility:visible}";
const IxDrawerStyle0 = drawerCss;

const Drawer = /*@__PURE__*/ proxyCustomElement(class Drawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.open = createEvent(this, "open", 7);
        this.drawerClose = createEvent(this, "drawerClose", 7);
        this.callback = this.clickedOutside.bind(this);
        this.show = false;
        this.closeOnClickOutside = true;
        this.fullHeight = false;
        this.minWidth = 16;
        this.maxWidth = 28;
        this.width = this.minWidth;
    }
    onShowChanged(newValue) {
        this.show = newValue !== undefined ? newValue : !this.show;
        this.toggleDrawer(this.show);
    }
    /**
     * Toggle or define show state of drawer
     * @param show Overwrite toggle state with boolean
     */
    async toggleDrawer(show) {
        this.show = show !== undefined ? show : !this.show;
        if (show) {
            this.open.emit();
            this.slideInRight(this.divElement);
            setTimeout(() => {
                window.addEventListener('mousedown', this.callback);
            }, 300);
        }
        else {
            this.drawerClose.emit();
            this.slideOutRight(this.divElement);
            window.removeEventListener('mousedown', this.callback);
        }
        return Promise.resolve();
    }
    onCloseClicked() {
        this.show = false;
    }
    clickedOutside(evt) {
        if (!this.closeOnClickOutside) {
            return;
        }
        const target = evt.target;
        const closestElement = target.closest('#div-container');
        const btn = target.closest('#drawer-btn');
        if (evt.target.type !== 'button' &&
            closestElement !== this.divElement &&
            target !== btn) {
            this.show = false;
        }
    }
    slideOutRight(el) {
        anime({
            targets: el,
            duration: Drawer.duration,
            translateX: [0, '16rem'],
            opacity: [1, 0],
            easing: 'easeInSine',
            complete: () => {
                el.classList.add('d-none');
            },
        });
    }
    slideInRight(el) {
        anime({
            targets: el,
            duration: Drawer.duration,
            translateX: ['16rem', 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            begin: () => {
                el.classList.remove('d-none');
            },
        });
    }
    componentDidLoad() {
        this.onShowChanged(this.show);
    }
    render() {
        return (h(Host, { key: 'b3c7dc1cf3b78a9453ef253d0711d85a946810a0', class: {
                'drawer-container': true,
                toggle: this.show,
                'full-height': this.fullHeight,
                'd-none': true,
            }, style: {
                width: this.width === 'auto' ? this.width : `${this.width}rem`,
                'min-width': `${this.minWidth}rem`,
                'max-width': `${this.maxWidth}rem`,
            }, ref: (el) => (this.divElement = el), "data-testid": "container", id: "div-container" }, h("div", { key: '88c9db3e87ac42a357b21c015d83f036847fd6c6', class: "header" }, h("div", { key: '0b2f799de0e7462a992772000b87b3196aa1ea93', class: "header-content" }, h("slot", { key: '2056724b98d81c47584576726d141055260cde03', name: "header" })), h("ix-icon-button", { key: '00d02acb8a3427ccc0a2b99c19b9508226007f5d', class: "close-button", icon: 'close', size: "24", ghost: true, onClick: () => this.onCloseClicked(), "data-testid": "close-button" })), h("div", { key: 'deb6ded98e959d27a1d802366a64b8f80cf2187e', class: "content" }, h("slot", { key: '30c936d368f1892077409993840424e436a9cc6b' }))));
    }
    static get watchers() { return {
        "show": ["onShowChanged"]
    }; }
    static get style() { return IxDrawerStyle0; }
}, [1, "ix-drawer", {
        "show": [1028],
        "closeOnClickOutside": [4, "close-on-click-outside"],
        "fullHeight": [4, "full-height"],
        "minWidth": [2, "min-width"],
        "maxWidth": [2, "max-width"],
        "width": [8],
        "toggleDrawer": [64]
    }, undefined, {
        "show": ["onShowChanged"]
    }]);
Drawer.duration = 300;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-drawer", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Drawer);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxDrawer = Drawer;
const defineCustomElement = defineCustomElement$1;

export { IxDrawer, defineCustomElement };

//# sourceMappingURL=ix-drawer.js.map