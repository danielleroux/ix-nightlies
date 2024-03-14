import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as getSlottedElements } from './shadow-dom.js';
import { d as defineCustomElement$8 } from './avatar.js';
import { d as defineCustomElement$7 } from './divider.js';
import { d as defineCustomElement$6 } from './dropdown.js';
import { d as defineCustomElement$5 } from './dropdown-item.js';
import { d as defineCustomElement$4 } from './menu-avatar-item.js';
import { d as defineCustomElement$3 } from './spinner.js';
import { d as defineCustomElement$2 } from './typography.js';

const menuAvatarCss = ":host{display:block;position:relative;margin-bottom:0.5rem;margin-right:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:2.5rem;width:100%;max-height:2.5rem;padding-left:0.25rem;margin-left:0.41rem;margin-right:0.35rem;transition:0.15s;border-radius:1.25rem}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}:host .avatar .avatar-name .text-default-single{color:var(--theme-nav-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}:host .avatar:focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const IxMenuAvatarStyle0 = menuAvatarCss;

const MenuAvatar = /*@__PURE__*/ proxyCustomElement(class MenuAvatar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.logoutClick = createEvent(this, "logoutClick", 7);
        this.avatarElementId = 'ix-menu-avatar-id';
        this.top = undefined;
        this.bottom = undefined;
        this.image = undefined;
        this.initials = undefined;
        this.i18nLogout = 'Logout';
        this.showLogoutButton = true;
        this.showContextMenu = false;
    }
    onSlotChange() {
        const slot = this.hostElement.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const elements = getSlottedElements(slot);
        this.showContextMenu = elements.length !== 0;
    }
    render() {
        return (h(Host, { key: '80205449f8a227f1150d29869bb751972c00e5ba', slot: "ix-menu-avatar" }, h("button", { key: '8c6f819b552bc4252922363b3cb5572df452d113', class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: 'ad2c39144858f3bab508f3e669b74b6eca33a6b8', image: this.image, initials: this.initials }), h("div", { key: '3d460c2a1cdd5b2b1027287eaacc706ec0dbef00', class: "avatar-name" }, h("span", { key: '0b012eb24167bde33735ffb8c7543f1a90d51691', class: "text-default-single", title: this.top }, this.top), h("span", { key: 'a46ec1197af4d303f8eba3de258c9351814702dc', class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: 'f832a8b3a424393be121cf24de5d3e56aad0c9cd', trigger: this.hostElement, placement: 'right-start', hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
                mainAxis: 16,
            } }, h("slot", { key: 'a86dd3bf4ffc579d0a0472b00a060c3be392758b', onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? (h("ix-menu-avatar-item", { label: this.i18nLogout, icon: 'log-out', onClick: (e) => {
                this.logoutClick.emit(e);
            } })) : null)));
    }
    get hostElement() { return this; }
    static get style() { return IxMenuAvatarStyle0; }
}, [1, "ix-menu-avatar", {
        "top": [1],
        "bottom": [1],
        "image": [1],
        "initials": [1],
        "i18nLogout": [1, "i-1-8n-logout"],
        "showLogoutButton": [4, "show-logout-button"],
        "showContextMenu": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-menu-avatar", "ix-avatar", "ix-divider", "ix-dropdown", "ix-dropdown-item", "ix-menu-avatar-item", "ix-spinner", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-menu-avatar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuAvatar);
            }
            break;
        case "ix-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ix-divider":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ix-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-menu-avatar-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxMenuAvatar = MenuAvatar;
const defineCustomElement = defineCustomElement$1;

export { IxMenuAvatar, defineCustomElement };

//# sourceMappingURL=ix-menu-avatar.js.map