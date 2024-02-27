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
        return (h(Host, { key: 'ed92a7e8394856c074b51ebed8189e99fe1e29a2', class: {
                disabled: this.disabled,
            } }, h("div", { key: 'b4a23c2bc24a9589b019c5f27db2c66e3becf6ef', class: {
                'event-list-item': true,
                selected: this.selected,
                disabled: this.disabled,
            } }, h("div", { key: '1d04c7f035c233c2d9076626cc5a117404d6a135', class: `indicator ${!((_c = this.itemColor) !== null && _c !== void 0 ? _c : this.color) ? 'indicator-empty' : ''}`, style: {
                'background-color': ((_d = this.itemColor) !== null && _d !== void 0 ? _d : this.color) ? color : 'inherit',
                opacity: `${this.disabled ? 0.4 : 1}`,
            } }), h("div", { key: '930d5297013c14fff5494f70b5679fd63240ccb8', class: "event-list-item-container" }, h("div", { key: 'bf5e074f3beb0ac61df18aa15efd62baa8320aba', class: "event-content" }, h("slot", { key: 'ce0730f3c2cbb9d89a36abe041c6a3e5780434a1' })), this.chevron && (h("ix-icon", { name: 'chevron-right', size: "16", class: "chevron-icon" }))))));
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
