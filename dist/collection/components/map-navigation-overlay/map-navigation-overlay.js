/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import anime from "animejs";
export class MapNavigationOverlay {
    constructor() {
        this.name = undefined;
        this.icon = undefined;
        this.color = undefined;
        this.iconColor = undefined;
    }
    componentWillLoad() {
        anime({
            targets: this.hostElement,
            duration: MapNavigationOverlay.slowTime,
            backdropFilter: [0, 'blur(1rem)'],
            translateX: ['-4rem', 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            begin: () => {
                this.hostElement.classList.remove('d-none');
            },
        });
    }
    closeOverlay() {
        anime({
            targets: this.hostElement,
            duration: MapNavigationOverlay.slowTime,
            backdropFilter: ['blur(1rem)', 0],
            translateX: [0, '-4rem'],
            opacity: [1, 0],
            easing: 'easeInSine',
            complete: () => {
                this.closeClick.emit();
                this.hostElement.classList.add('d-none');
            },
        });
    }
    render() {
        var _a, _b, _c;
        return (h(Host, { key: 'e032148cd238a6e03703b12098550b0af3d59116' }, h("div", { key: '99a192f95c70611b60bdb0dc6ea2626e77c04603', class: "overlay-header" }, h("div", { key: '805208183f5c68841625778424618609a681bb2d', class: {
                'color-indicator': true,
                'd-none': ((_a = this.iconColor) !== null && _a !== void 0 ? _a : this.color) === undefined,
            }, style: {
                'background-color': ((_b = this.iconColor) !== null && _b !== void 0 ? _b : this.color)
                    ? `var(--theme-${(_c = this.iconColor) !== null && _c !== void 0 ? _c : this.color})`
                    : '',
            } }), h("div", { key: '657730e6f7ee8de1dc6f81832e203dc08ff4fc4c', class: "overlay-header-content" }, h("ix-icon", { key: 'aa4b879448b68d7a98c663c1a1687886ec1ff319', size: "32", name: this.icon }), h("span", { key: '54c28bb988123955edb26f656af30a808b75e5d3', class: "overlay-header-title", title: this.name }, this.name)), h("ix-icon-button", { key: '86975e3e49b5f691c05631fa6b0726987cd136d4', class: "overlay-close", ghost: true, icon: 'close', size: "24", onClick: () => this.closeOverlay() })), h("slot", { key: 'fa0eb00b9acfe52af042b580c69b8cd444b35acc' })));
    }
    static get is() { return "ix-map-navigation-overlay"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["map-navigation-overlay.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["map-navigation-overlay.css"]
        };
    }
    static get properties() {
        return {
            "name": {
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
                    "text": "Title of overlay"
                },
                "attribute": "name",
                "reflect": false
            },
            "icon": {
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
                    "text": "Icon of overlay"
                },
                "attribute": "icon",
                "reflect": false
            },
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
                            "name": "deprecated",
                            "text": "since 2.1.0. Use `icon-color`"
                        }],
                    "text": "Color of icon"
                },
                "attribute": "color",
                "reflect": false
            },
            "iconColor": {
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
                    "text": "Color of icon"
                },
                "attribute": "icon-color",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "closeClick",
                "name": "closeClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event closed"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
MapNavigationOverlay.slowTime = 500;
//# sourceMappingURL=map-navigation-overlay.js.map
