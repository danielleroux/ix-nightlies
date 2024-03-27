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
        return (h(Host, { key: 'd9a05885c16a9b6984950e07ff9ebf7d404804dc' }, h("div", { key: '23dc9da17d089ef38584cfed2280c0b094a7863a', class: "overlay-header" }, h("div", { key: '1215b123fa471e5a608e3104e240b01583e2ed29', class: {
                'color-indicator': true,
                'd-none': ((_a = this.iconColor) !== null && _a !== void 0 ? _a : this.color) === undefined,
            }, style: {
                'background-color': ((_b = this.iconColor) !== null && _b !== void 0 ? _b : this.color)
                    ? `var(--theme-${(_c = this.iconColor) !== null && _c !== void 0 ? _c : this.color})`
                    : '',
            } }), h("div", { key: '5ba269e62e9271623bbe65666148f9430129bc42', class: "overlay-header-content" }, h("ix-icon", { key: '318b2696266aca2ff67de725add75f52c8773f06', size: "32", name: this.icon }), h("span", { key: 'a2a81b0c87b555101eabe1e4737bca7dfb4d28ef', class: "overlay-header-title", title: this.name }, this.name)), h("ix-icon-button", { key: '9e5e0f6c335888e5fcc8ee11a296e539b5143018', class: "overlay-close", ghost: true, icon: 'close', size: "24", onClick: () => this.closeOverlay() })), h("slot", { key: 'c50ecafcc691ac3245fb5baefba097eb40788342' })));
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
