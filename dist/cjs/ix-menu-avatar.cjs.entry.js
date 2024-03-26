'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');
const shadowDom = require('./shadow-dom-73f9d553.js');

const menuAvatarCss = ":host{display:block;position:relative;margin-bottom:0.5rem;margin-right:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:2.5rem;width:100%;max-height:2.5rem;padding-left:0.25rem;margin-left:0.41rem;margin-right:0.35rem;transition:0.15s;border-radius:1.25rem}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}:host .avatar .avatar-name .text-default-single{color:var(--theme-nav-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}:host .avatar:focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const IxMenuAvatarStyle0 = menuAvatarCss;

const MenuAvatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.logoutClick = index.createEvent(this, "logoutClick", 7);
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
        const elements = shadowDom.getSlottedElements(slot);
        this.showContextMenu = elements.length !== 0;
    }
    render() {
        return (index.h(index.Host, { key: '658e27fb6385bda64d9d7f68f77eb70a4c65ba6a', slot: "ix-menu-avatar" }, index.h("button", { key: '42024cf4bd2c5d350b9369ebeba474a62f006639', class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, index.h("ix-avatar", { key: 'a4e855427e1fe55b6d866895587b53cda99b3b3b', image: this.image, initials: this.initials }), index.h("div", { key: 'c41428278d3309934761759d5f1f3587e2bff850', class: "avatar-name" }, index.h("span", { key: '9504c5acb6d1903068897e3a151116428f5e05da', class: "text-default-single", title: this.top }, this.top), index.h("span", { key: '423bfa9d792d7c0c92500cb961c21d15f9d2a0cd', class: "text-default-single", title: this.bottom }, this.bottom))), index.h("ix-dropdown", { key: 'cf520e8c7e940c05bb7ff850ba86d137ca606ab5', trigger: this.hostElement, placement: 'right-start', hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
                mainAxis: 16,
            } }, index.h("slot", { key: '4fcfea4ec3e971d4d29fedd00d556405fdb77209', onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? (index.h("ix-menu-avatar-item", { label: this.i18nLogout, icon: 'log-out', onClick: (e) => {
                this.logoutClick.emit(e);
            } })) : null)));
    }
    get hostElement() { return index.getElement(this); }
};
MenuAvatar.style = IxMenuAvatarStyle0;

exports.ix_menu_avatar = MenuAvatar;

//# sourceMappingURL=ix-menu-avatar.cjs.entry.js.map