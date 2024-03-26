/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class MenuAboutNews {
    constructor() {
        this.show = false;
        this.label = undefined;
        this.i18nShowMore = 'Show more';
        this.aboutItemLabel = undefined;
        this.offsetBottom = 0;
        this.expanded = false;
    }
    render() {
        return (h(Host, { key: '96d424d34a1a660200da006c7e00732871be3864', class: {
                expanded: this.expanded,
                show: !this.show,
            } }, h("div", { key: 'de1e583eaf521a4c09fd2319a170f7450901bf3a', class: "banner-container" }, h("ix-icon", { key: 'f132c4275fcc0dfc926ca416d366c6cba0f65e24', color: "color-inv-contrast-text", name: 'shout', size: "32" }), h("svg", { key: 'c6a66eab455135e55ea0623e75fb8c9a7d7ab921', viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: 'd7373ab9e7784faee3308be7792bead6bea418d4', points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: 'ac563f6a0828c72376a7bac6ad1e00a44f324e6e', class: "cui-popover-news-header" }, h("ix-typography", { key: '6aceab1232844f6af7f7fb024f3d6a2810df7285', variant: "default-title-single" }, this.label)), h("ix-icon-button", { key: '1ac11020750a1c5753d06b1af8cd6583a7dba381', size: "24", icon: 'close', ghost: true, onClick: () => {
                this.show = false;
                this.closePopover.emit();
            } }), h("div", { key: '4d599b682868f47e16762e7e30383aa01b96ce2d', class: "slot-container" }, h("slot", { key: '3ddafdf4636c32e7a785338cea83f893b796177d' })), this.aboutItemLabel ? (h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
                this.show = false;
                this.showMore.emit(e);
            } }, this.i18nShowMore))) : null, h("div", { key: 'a21ff21ba788aaa5186bd0ed4e281a9d7ad70911', id: "arrow" })));
    }
    static get is() { return "ix-menu-about-news"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-about-news.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-about-news.css"]
        };
    }
    static get properties() {
        return {
            "show": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show about news"
                },
                "attribute": "show",
                "reflect": true,
                "defaultValue": "false"
            },
            "label": {
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
                    "text": "Title of the about news"
                },
                "attribute": "label",
                "reflect": false
            },
            "i18nShowMore": {
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
                    "text": ""
                },
                "attribute": "i-1-8n-show-more",
                "reflect": false,
                "defaultValue": "'Show more'"
            },
            "aboutItemLabel": {
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
                    "text": "Subtitle of the about news"
                },
                "attribute": "about-item-label",
                "reflect": false
            },
            "offsetBottom": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Bottom offset"
                },
                "attribute": "offset-bottom",
                "reflect": false,
                "defaultValue": "0"
            },
            "expanded": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Internal"
                },
                "attribute": "expanded",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "showMore",
                "name": "showMore",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Show More button is pressed"
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }, {
                "method": "closePopover",
                "name": "closePopover",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Popover closed"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=menu-about-news.js.map
