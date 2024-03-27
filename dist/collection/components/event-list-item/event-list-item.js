/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
export class EventListItem {
    constructor() {
        this.color = undefined;
        this.itemColor = undefined;
        this.selected = undefined;
        this.disabled = undefined;
        this.chevron = undefined;
    }
    handleItemClick() {
        this.itemClick.emit();
    }
    render() {
        var _a, _b, _c, _d;
        let color = ((_a = this.itemColor) === null || _a === void 0 ? void 0 : _a.startsWith('--theme'))
            ? `var(${this.itemColor})`
            : `var(--theme-${this.itemColor})`;
        if (this.color) {
            color = ((_b = this.color) === null || _b === void 0 ? void 0 : _b.startsWith('--theme'))
                ? `var(${this.color})`
                : `var(--theme-${this.color})`;
        }
        return (h(Host, { key: '7ff15a330ade789ac7b480301ec299b93fb8de5e', class: {
                disabled: this.disabled,
            } }, h("div", { key: 'ac0e5fea94ce8e932e978be248d63588c8b96709', class: {
                'event-list-item': true,
                selected: this.selected,
                disabled: this.disabled,
            } }, h("div", { key: '14d0a541a98e0d2f0bb30d212c1c809c2581c4ab', class: `indicator ${!((_c = this.itemColor) !== null && _c !== void 0 ? _c : this.color) ? 'indicator-empty' : ''}`, style: {
                'background-color': ((_d = this.itemColor) !== null && _d !== void 0 ? _d : this.color) ? color : 'inherit',
                opacity: `${this.disabled ? 0.4 : 1}`,
            } }), h("div", { key: '282b849176585ca66412e826f111ba9bff60e48d', class: "event-list-item-container" }, h("div", { key: '8802f01a6419d92d39c411fb7721659e92ae59fd', class: "event-content" }, h("slot", { key: '64db0fea1610356e0b7ff986f3ba71f801532d55' })), this.chevron && (h("ix-icon", { name: 'chevron-right', size: "16", class: "chevron-icon" }))))));
    }
    static get is() { return "ix-event-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["event-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["event-list-item.css"]
        };
    }
    static get properties() {
        return {
            "color": {
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
                            "name": "link",
                            "text": "https://ix.siemens.io/docs/theming/colors/"
                        }, {
                            "name": "deprecated",
                            "text": "since 2.1.0 use `item-color`"
                        }],
                    "text": "Color of the status indicator.\nYou can find a list of all available colors in our documentation.\nExample values are `--theme-color-alarm` or `color-alarm`"
                },
                "attribute": "color",
                "reflect": false
            },
            "itemColor": {
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
                            "name": "link",
                            "text": "https://ix.siemens.io/docs/theming/colors/"
                        }],
                    "text": "Color of the status indicator.\nYou can find a list of all available colors in our documentation.\nExample values are `--theme-color-alarm` or `color-alarm`"
                },
                "attribute": "item-color",
                "reflect": false
            },
            "selected": {
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
                    "text": "Show event list item as selected"
                },
                "attribute": "selected",
                "reflect": false
            },
            "disabled": {
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
                    "text": "Disable event list item"
                },
                "attribute": "disabled",
                "reflect": false
            },
            "chevron": {
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
                    "text": "Show chevron on right side of the event list item"
                },
                "attribute": "chevron",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "itemClick",
                "name": "itemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event list item click"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleItemClick",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=event-list-item.js.map
