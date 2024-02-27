'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const baseButton = require('./base-button-03d587f5.js');
const shadowDom = require('./shadow-dom-73f9d553.js');
const makeRef = require('./make-ref-c25629b7.js');

const avatarCss = ":host{display:flex;position:relative;width:-moz-fit-content;width:fit-content}:host .avatar{display:flex;align-items:center}:host .avatar>.avatar-image{height:2rem;width:2rem;min-height:2rem;min-width:2rem;border-radius:100px}:host .avatar>.avatar-initials{display:flex;align-items:center;justify-content:center;height:2rem;width:2rem;min-height:2rem;min-width:2rem;border-radius:100px;background-color:var(--theme-color-component-3);color:var(--theme-color-std-text)}:host .avatar #avatar-path-background{fill:var(--theme-avatar--background)}:host .avatar #avatar-path-person{fill:var(--theme-color-4)}:host .user-info{display:flex;flex-direction:row;position:relative;height:2.5rem;padding:1rem;width:12.75rem;min-width:12.75rem;max-width:12.75rem;gap:1rem}:host .user-info .avatar{width:2rem;pointer-events:none}:host .user-info .user{display:flex;position:relative;flex-direction:column;justify-content:center;max-width:10rem;width:100%;overflow:hidden}:host .user-info .username{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .user-info .extra{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(.avatar-button) button{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem;padding:0px;border-radius:100px !important}:host(.avatar-button) .btn-invisible-primary{border-radius:var(--theme-btn--border-radius)}:host(.avatar-button) .btn-invisible-primary,:host(.avatar-button) .btn-invisible-primary.focus,:host(.avatar-button) .btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host(.avatar-button) .btn-invisible-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host(.avatar-button) .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-invisible-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host(.avatar-button) .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-invisible-primary.selected:not(.disabled):not(:disabled):active,:host(.avatar-button) .btn-invisible-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-primary--background--hover);color:var(--theme-btn-invisible-primary--color--hover)}:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled):active,:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-primary--background--active);color:var(--theme-btn-invisible-primary--color--active)}:host(.avatar-button) li{transform:scale(0.8)}";
const IxAvatarStyle0 = avatarCss;

function DefaultAvatar(props) {
    const { initials } = props;
    if (initials) {
        return index.h("div", { class: 'avatar-initials' }, initials);
    }
    return (index.h("svg", { class: 'avatar-image', xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32" }, index.h("g", { fill: "none", "fill-rule": "evenodd" }, index.h("path", { id: "avatar-path-background", d: "M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163\n          16-16c0-4.243-1.686-8.313-4.686-11.314C24.314 1.686 20.244 0 16 0z" }), index.h("path", { id: "avatar-path-person", d: "M17.897 17.91c3.8-.018 7.358 1.875 9.485 5.046-2.417 3.999-6.734 6.434-11.382\n        6.42-4.648.014-8.965-2.421-11.382-6.42 2.127-3.171 5.685-5.064\n        9.485-5.045h3.794zM15.821 2.129c3.682 0 6.667 2.984 6.667 6.666 0 3.682-2.985\n        6.667-6.667 6.667s-6.667-2.985-6.667-6.667 2.985-6.666 6.667-6.666z" }))));
}
function AvatarImage(props) {
    return (index.h("li", { class: "avatar" }, props.image ? (index.h("img", { src: props.image, class: "avatar-image" })) : (index.h(DefaultAvatar, { initials: props.initials }))));
}
function UserInfo(props) {
    return (index.h(index.Fragment, null, index.h("div", { class: "user-info", onClick: (event) => event.preventDefault() }, index.h(AvatarImage, { image: props.image, initials: props.initials }), index.h("div", { class: "user" }, index.h("div", { class: "username" }, props.userName), props.extra && (index.h("ix-typography", { class: "extra", color: 'soft' }, props.extra))))));
}
const Avatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.image = undefined;
        this.initials = undefined;
        this.username = undefined;
        this.extra = undefined;
        this.isClosestApplicationHeader = false;
        this.hasSlottedElements = false;
    }
    componentWillLoad() {
        const closest = shadowDom.closestElement('ix-application-header', this.hostElement);
        this.isClosestApplicationHeader = closest !== null;
    }
    slottedChanged() {
        this.hasSlottedElements = shadowDom.hasSlottedElements(this.slotElement);
    }
    resolveAvatarTrigger() {
        return new Promise((resolve) => {
            index.readTask(() => resolve(this.hostElement.shadowRoot.querySelector('button')));
        });
    }
    render() {
        if (this.isClosestApplicationHeader) {
            return (index.h(index.Host, { slot: "ix-application-header-avatar", class: 'avatar-button' }, index.h(baseButton.BaseButton, { disabled: false, ghost: true, iconOval: false, icon: undefined, iconOnly: false, loading: false, outline: false, selected: false, type: "button", variant: "primary" }, index.h(AvatarImage, { image: this.image, initials: this.initials })), index.h("ix-dropdown", { trigger: this.resolveAvatarTrigger(), class: "avatar-dropdown" }, this.username && (index.h(index.Fragment, null, index.h(UserInfo, { extra: this.extra, image: this.image, initials: this.initials, userName: this.username }), this.hasSlottedElements && index.h("ix-divider", null))), index.h("slot", { onSlotchange: () => this.slottedChanged(), ref: (ref) => (this.slotElement = ref) }))));
        }
        return (index.h(index.Host, null, index.h(AvatarImage, { image: this.image, initials: this.initials })));
    }
    get hostElement() { return index.getElement(this); }
};
Avatar.style = IxAvatarStyle0;

const menuAvatarItemCss = ":host{display:block;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxMenuAvatarItemStyle0 = menuAvatarItemCss;

const MenuAvatarItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.itemClick = index.createEvent(this, "itemClick", 7);
        this.dropdownItemRef = makeRef.makeRef();
        this.icon = undefined;
        this.label = undefined;
    }
    /** @internal */
    async getDropdownItemElement() {
        return this.dropdownItemRef.waitForCurrent();
    }
    render() {
        return (index.h("ix-dropdown-item", { key: 'c6f72909f3511d9434e4bf0cddac029b4db47b11', ref: this.dropdownItemRef, icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) }));
    }
    get hostElement() { return index.getElement(this); }
};
MenuAvatarItem.style = IxMenuAvatarItemStyle0;

exports.ix_avatar = Avatar;
exports.ix_menu_avatar_item = MenuAvatarItem;

//# sourceMappingURL=ix-avatar_2.cjs.entry.js.map