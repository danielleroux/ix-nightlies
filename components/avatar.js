import { proxyCustomElement, HTMLElement, readTask, h, Host, Fragment } from '@stencil/core/internal/client';
import { B as BaseButton } from './base-button.js';
import { a as closestElement, h as hasSlottedElements } from './shadow-dom.js';
import { d as defineCustomElement$4 } from './divider.js';
import { d as defineCustomElement$3 } from './dropdown.js';
import { d as defineCustomElement$2 } from './spinner.js';
import { d as defineCustomElement$1 } from './typography.js';

const avatarCss = ":host{display:flex;position:relative;width:-moz-fit-content;width:fit-content}:host .avatar{display:flex;align-items:center}:host .avatar>.avatar-image{height:2rem;width:2rem;min-height:2rem;min-width:2rem;border-radius:100px}:host .avatar>.avatar-initials{display:flex;align-items:center;justify-content:center;height:2rem;width:2rem;min-height:2rem;min-width:2rem;border-radius:100px;background-color:var(--theme-avatar--background);color:var(--theme-avatar--color)}:host .avatar #avatar-path-background{fill:var(--theme-avatar--background)}:host .avatar #avatar-path-person{fill:var(--theme-avatar--color)}:host .user-info{display:flex;flex-direction:row;position:relative;height:2.5rem;padding:1rem;width:12.75rem;min-width:12.75rem;max-width:12.75rem;gap:1rem}:host .user-info .avatar{width:2rem;pointer-events:none}:host .user-info .user{display:flex;position:relative;flex-direction:column;justify-content:center;max-width:10rem;width:100%;overflow:hidden}:host .user-info .username{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .user-info .extra{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(.avatar-button) button{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem;padding:0px;border-radius:100px !important}:host(.avatar-button) .btn-invisible-primary{border-radius:var(--theme-btn--border-radius)}:host(.avatar-button) .btn-invisible-primary,:host(.avatar-button) .btn-invisible-primary.focus,:host(.avatar-button) .btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host(.avatar-button) .btn-invisible-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host(.avatar-button) .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-invisible-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host(.avatar-button) .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-invisible-primary.selected:not(.disabled):not(:disabled):active,:host(.avatar-button) .btn-invisible-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-primary--background--hover);color:var(--theme-btn-invisible-primary--color--hover)}:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled):active,:host(.avatar-button) .btn-invisible-primary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-primary--background--active);color:var(--theme-btn-invisible-primary--color--active)}:host(.avatar-button) li{transform:scale(0.8)}";
const IxAvatarStyle0 = avatarCss;

function DefaultAvatar(props) {
    const { initials } = props;
    if (initials) {
        return h("div", { class: 'avatar-initials' }, initials);
    }
    return (h("svg", { class: 'avatar-image', xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32" }, h("g", { fill: "none", "fill-rule": "evenodd" }, h("path", { id: "avatar-path-background", d: "M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163\n          16-16c0-4.243-1.686-8.313-4.686-11.314C24.314 1.686 20.244 0 16 0z" }), h("path", { id: "avatar-path-person", d: "M17.897 17.91c3.8-.018 7.358 1.875 9.485 5.046-2.417 3.999-6.734 6.434-11.382\n        6.42-4.648.014-8.965-2.421-11.382-6.42 2.127-3.171 5.685-5.064\n        9.485-5.045h3.794zM15.821 2.129c3.682 0 6.667 2.984 6.667 6.666 0 3.682-2.985\n        6.667-6.667 6.667s-6.667-2.985-6.667-6.667 2.985-6.666 6.667-6.666z" }))));
}
function AvatarImage(props) {
    return (h("li", { class: "avatar" }, props.image ? (h("img", { src: props.image, class: "avatar-image" })) : (h(DefaultAvatar, { initials: props.initials }))));
}
function UserInfo(props) {
    return (h(Fragment, null, h("div", { class: "user-info", onClick: (event) => event.preventDefault() }, h(AvatarImage, { image: props.image, initials: props.initials }), h("div", { class: "user" }, h("div", { class: "username" }, props.userName), props.extra && (h("ix-typography", { class: "extra", color: 'soft' }, props.extra))))));
}
const Avatar = /*@__PURE__*/ proxyCustomElement(class Avatar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.image = undefined;
        this.initials = undefined;
        this.username = undefined;
        this.extra = undefined;
        this.isClosestApplicationHeader = false;
        this.hasSlottedElements = false;
    }
    componentWillLoad() {
        const closest = closestElement('ix-application-header', this.hostElement);
        this.isClosestApplicationHeader = closest !== null;
    }
    slottedChanged() {
        this.hasSlottedElements = hasSlottedElements(this.slotElement);
    }
    resolveAvatarTrigger() {
        return new Promise((resolve) => {
            readTask(() => resolve(this.hostElement.shadowRoot.querySelector('button')));
        });
    }
    render() {
        if (this.isClosestApplicationHeader) {
            return (h(Host, { slot: "ix-application-header-avatar", class: 'avatar-button' }, h(BaseButton, { disabled: false, ghost: true, iconOval: false, icon: undefined, iconOnly: false, loading: false, outline: false, selected: false, type: "button", variant: "primary" }, h(AvatarImage, { image: this.image, initials: this.initials })), h("ix-dropdown", { trigger: this.resolveAvatarTrigger(), class: "avatar-dropdown" }, this.username && (h(Fragment, null, h(UserInfo, { extra: this.extra, image: this.image, initials: this.initials, userName: this.username }), this.hasSlottedElements && h("ix-divider", null))), h("slot", { onSlotchange: () => this.slottedChanged(), ref: (ref) => (this.slotElement = ref) }))));
        }
        return (h(Host, null, h(AvatarImage, { image: this.image, initials: this.initials })));
    }
    get hostElement() { return this; }
    static get style() { return IxAvatarStyle0; }
}, [1, "ix-avatar", {
        "image": [1],
        "initials": [1],
        "username": [1],
        "extra": [1],
        "isClosestApplicationHeader": [32],
        "hasSlottedElements": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-avatar", "ix-divider", "ix-dropdown", "ix-spinner", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-avatar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Avatar);
            }
            break;
        case "ix-divider":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Avatar as A, defineCustomElement as d };

//# sourceMappingURL=avatar.js.map