import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-5cd176b3.js';
import { g as getSlottedElements } from './shadow-dom-60e9243d.js';

const menuAvatarCss = ":host{display:block;position:relative;margin-bottom:0.5rem;margin-right:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:2.5rem;width:100%;max-height:2.5rem;padding-left:0.25rem;margin-left:0.41rem;margin-right:0.35rem;transition:0.15s;border-radius:1.25rem}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}:host .avatar .avatar-name .text-default-single{color:var(--theme-nav-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}:host .avatar:focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const IxMenuAvatarStyle0 = menuAvatarCss;

const MenuAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '9e441960de041793fa2dfcb01ee9eba0dfaee7b1', slot: "ix-menu-avatar" }, h("button", { key: '71b655be0b85714accc737a03003cee112a811d6', class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: '1a5478003d44c00a2143e894f4f72eb97803d0eb', image: this.image, initials: this.initials }), h("div", { key: '6e71d678965e7a668b8a77a6e677d48e3eaca96a', class: "avatar-name" }, h("span", { key: 'd70dea64cda4ccea61c88390280d14a4638ccf4d', class: "text-default-single", title: this.top }, this.top), h("span", { key: '43e22d6443af2105d6066cedb488d3053464782a', class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: 'fb3f385aebe317672664739930696481ad1d275f', trigger: this.hostElement, placement: 'right-start', hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
                mainAxis: 16,
            } }, h("slot", { key: '4d7ec8a3ea4abe5214d1b5d8e87ca111fa40a9f3', onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? (h("ix-menu-avatar-item", { label: this.i18nLogout, icon: 'log-out', onClick: (e) => {
                this.logoutClick.emit(e);
            } })) : null)));
    }
    get hostElement() { return getElement(this); }
};
MenuAvatar.style = IxMenuAvatarStyle0;

export { MenuAvatar as ix_menu_avatar };

//# sourceMappingURL=ix-menu-avatar.entry.js.map