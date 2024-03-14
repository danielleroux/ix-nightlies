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
        return (h(Host, { key: '898cc2c7a58c5f72409315bbf6a76712d6f68107', class: {
                expanded: this.expanded,
                show: !this.show,
            } }, h("div", { key: 'ba59ad360a74c8292333cef460451fea2958ef55', class: "banner-container" }, h("ix-icon", { key: 'c793669e809f38c806a85fe3ad65c7b540a1a083', color: "color-inv-contrast-text", name: 'shout', size: "32" }), h("svg", { key: '2be02100b53ce3b0821b471b0caf1709e055e596', viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: '85707c452b6daafc049c0e402acb25ca3a6f4e8a', points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: '79718e6e4beb576c30bcbeda44b6cd9bed4b0a0f', class: "cui-popover-news-header" }, h("ix-typography", { key: '90ab8d14cbf596760fe9460f35e769d66edde38b', variant: "default-title-single" }, this.label)), h("ix-icon-button", { key: '5b539527337b9fd8d6bb10b4997ad6d50fa33339', size: "24", icon: 'close-small', ghost: true, onClick: () => {
                this.show = false;
                this.closePopover.emit();
            } }), h("div", { key: 'd3c397f5ececa4f330089070e23ad04799fb3f11', class: "slot-container" }, h("slot", { key: '359fb32ce27b4c1cde5f993a9f7f4c686a47ea27' })), this.aboutItemLabel ? (h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
                this.show = false;
                this.showMore.emit(e);
            } }, this.i18nShowMore))) : null, h("div", { key: '89fa2c2b881f0df4e998435ffc207d2439368cac', id: "arrow" })));
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
