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
        return (h(Host, { key: '68c7b89c941490a9f993ff438f467b85728c2ec9', class: {
                expanded: this.expanded,
                show: !this.show,
            } }, h("div", { key: 'a283d2f9dec7a45df431e66fb78acc253809445d', class: "banner-container" }, h("ix-icon", { key: '44719bde7dd4cc7c25c5b533505015c438f59d69', color: "color-inv-contrast-text", name: 'shout', size: "32" }), h("svg", { key: '0b7609be92104e596fe316d3184f48edd4ce1759', viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: 'c8bf079e3fc6c3e5ec466fdb4897629dd05aeda5', points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: 'f536fbadf821b348be5ba8dfea2a81aff3c35a15', class: "cui-popover-news-header" }, h("ix-typography", { key: '5dbeea3eb20c7a75b58ae63742b873d1fb0d8d4b', variant: "default-title-single" }, this.label)), h("ix-icon-button", { key: '92f0c19b02a5ba817e30470173ff2da32cb7e480', size: "24", icon: 'close', ghost: true, onClick: () => {
                this.show = false;
                this.closePopover.emit();
            } }), h("div", { key: '119629121face82d958eb2772984957cd9633203', class: "slot-container" }, h("slot", { key: '555e772c3aabdbd8be5c1e7e6e7db7b8e330e16c' })), this.aboutItemLabel ? (h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
                this.show = false;
                this.showMore.emit(e);
            } }, this.i18nShowMore))) : null, h("div", { key: '02ebd212775eee2c01d93854502617ae05b03be5', id: "arrow" })));
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
