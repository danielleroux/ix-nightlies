/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Fragment, h, Host, readTask, } from "@stencil/core";
import { BaseButton } from "../button/base-button";
import { closestElement, hasSlottedElements } from "../utils/shadow-dom";
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
/**
 * @since 2.0.0
 */
export class Avatar {
    constructor() {
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
    static get is() { return "ix-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["avatar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["avatar.css"]
        };
    }
    static get properties() {
        return {
            "image": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Display an avatar image"
                },
                "attribute": "image",
                "reflect": false
            },
            "initials": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Display the initials of the user. Will be overwritten by image"
                },
                "attribute": "initials",
                "reflect": false
            },
            "username": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "If set an info card displaying the username will be placed inside the dropdown.\nNote: Only working if avatar is part of the ix-application-header"
                },
                "attribute": "username",
                "reflect": false
            },
            "extra": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "Optional description text that will be displayed underneath the username.\nNote: Only working if avatar is part of the ix-application-header"
                },
                "attribute": "extra",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isClosestApplicationHeader": {},
            "hasSlottedElements": {}
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=avatar.js.map
