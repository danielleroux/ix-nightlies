/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { dismissModal } from "../../utils/modal";
function ApplicationItem(props) {
    function isExternal(target) {
        if (target !== '_blank' &&
            target !== '_parent' &&
            target !== '_self' &&
            target !== '_top') {
            // Check if its one of the target keywords
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a?retiredLocale=de#target
            return true;
        }
        if (target === '_blank') {
            return true;
        }
        return false;
    }
    return (h("button", { class: {
            AppEntry: true,
            Selected: props.selected,
        }, onClick: () => {
            dismissModal(props.host);
            window.open(props.url, props.target);
        } }, h("div", null, h("img", { class: "AppIcon", src: props.iconSrc })), h("div", { class: "AppName" }, h("ix-typography", { format: "h4" }, props.name, isExternal(props.target) && (h("ix-icon", { size: "12", name: "open-external", color: "color-soft-text" }))), h("ix-typography", { format: "label-sm", color: "soft" }, props.description))));
}
/** @internal */
export class ApplicationSwitchModal {
    constructor() {
        this.config = undefined;
    }
    componentWillLoad() {
        if (!this.config) {
            throw Error('ApplicationConfig not provided');
        }
    }
    render() {
        var _a, _b, _c, _d;
        return (h(Host, { key: '5d6291e4a6172e0cff21c7871e41e4859c6c6e0f' }, h("ix-modal-header", { key: '8b20c113bdfcbe1ba507d424382c36391d197171', icon: "apps" }, ((_a = this.config) === null || _a === void 0 ? void 0 : _a.i18nAppSwitch) || 'Switch to application'), h("ix-modal-content", { key: '4f919cdf34694c21948af2a3a5b2044a05a2b883', class: "content" }, h("div", { key: '0daf620107484d477b06fc98f4aee721e87bbd53', class: "content-apps" }, (!this.config || ((_b = this.config) === null || _b === void 0 ? void 0 : _b.apps.length) === 0) && (h("div", { class: "loading" }, h("ix-spinner", { size: "medium", variant: "primary" }), h("span", null, ((_c = this.config) === null || _c === void 0 ? void 0 : _c.i18nLoadingApps) ||
            'Loading available applications...'))), (_d = this.config) === null || _d === void 0 ? void 0 :
            _d.apps.map((appEntry) => {
                var _a;
                return (h(ApplicationItem, { host: this.hostElement, name: appEntry.name, description: appEntry.description, iconSrc: appEntry.iconSrc, target: appEntry.target, url: appEntry.url, selected: appEntry.id === ((_a = this.config) === null || _a === void 0 ? void 0 : _a.currentAppId) }));
            })))));
    }
    static get is() { return "ix-application-switch-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["application-switch-modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["application-switch-modal.css"]
        };
    }
    static get properties() {
        return {
            "config": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AppSwitchConfiguration",
                    "resolved": "{ currentAppId: string; apps: { id: string; name: string; description: string; url: string; target: AppSwitchConfigurationTarget; iconSrc: string; }[]; i18nAppSwitch?: string; i18nLoadingApps?: string; }",
                    "references": {
                        "AppSwitchConfiguration": {
                            "location": "import",
                            "path": "../../utils/application-layout/context",
                            "id": "src/components/utils/application-layout/context.ts::AppSwitchConfiguration"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=application-switch-modal.js.map
