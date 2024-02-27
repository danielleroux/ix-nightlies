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
        return (h(Host, { key: 'a1c017b715ad8ccf9a92d9916c3042a03f7dda59', class: {
                expanded: this.expanded,
                show: !this.show,
            } }, h("div", { key: '5be94b8dafd6a51d2beeac0e63d503ce775d0aeb', class: "banner-container" }, h("ix-icon", { key: '9906bf5c737f5768a704608d78dc4ef3fcfc3471', color: "color-inv-contrast-text", name: 'shout', size: "32" }), h("svg", { key: '449860e7ff5e378ecfdc2c9304d36fa597514f77', viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: '40078649c2ddb2c6dc3f7c5bce8acc271e10bfc8', points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: '2c1c244f9a687ac2ae257efb7322d8e9b9dfc4ac', class: "cui-popover-news-header" }, h("ix-typography", { key: '0a173a30237a326229c0fb40130d007fe472df6c', variant: "default-title-single" }, this.label)), h("ix-icon-button", { key: '7fe6f43fd87f7cbca8649d5b297e175c810f26f1', size: "24", icon: 'close-small', ghost: true, onClick: () => {
                this.show = false;
                this.closePopover.emit();
            } }), h("div", { key: '1cd1fce4fc77fbabd5fc5d116ac4b9be08f7521b', class: "slot-container" }, h("slot", { key: 'e11b7bf3c183ac43ff1c97b2ebc6a38c3eda51c1' })), this.aboutItemLabel ? (h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
                this.show = false;
                this.showMore.emit(e);
            } }, this.i18nShowMore))) : null, h("div", { key: 'e981d5b6e747fe2d53b6b44a4776f7aeb61593dc', id: "arrow" })));
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
