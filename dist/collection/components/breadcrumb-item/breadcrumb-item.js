/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Fragment, h, Host, } from "@stencil/core";
import animejs from "animejs";
import { BaseButton } from "../button/base-button";
import { a11yHostAttributes } from "../utils/a11y";
export class BreadcrumbItem {
    constructor() {
        this.label = undefined;
        this.icon = undefined;
        this.ghost = true;
        this.visible = true;
        this.showChevron = true;
        this.isDropdownTrigger = false;
        this.a11y = undefined;
    }
    componentDidLoad() {
        this.animationFadeIn();
    }
    componentWillLoad() {
        this.a11y = a11yHostAttributes(this.hostElement, [
            'aria-describedby',
            'aria-controls',
            'aria-expanded',
        ]);
    }
    animationFadeIn() {
        animejs({
            targets: this.hostElement,
            duration: 150,
            opacity: [0, 1],
            translateX: ['-100%', '0%'],
            easing: 'linear',
        });
    }
    render() {
        const props = {
            variant: this.ghost ? 'primary' : 'secondary',
            outline: false,
            ghost: this.ghost,
            iconOnly: false,
            iconOval: false,
            disabled: false,
            icon: this.icon,
            iconSize: '16',
            loading: false,
            selected: false,
            type: 'button',
            tabIndex: this.hostElement.tabIndex !== -1 ? this.hostElement.tabIndex : 0,
            extraClasses: {
                'dropdown-trigger': this.isDropdownTrigger,
            },
            ariaAttributes: this.a11y,
        };
        if (!this.visible) {
            return h(Host, { class: 'invisible' });
        }
        return (h(Host, { class: {
                'hide-chevron': !this.showChevron,
            }, onClick: () => this.itemClick.emit(this.label) }, h("li", null, h(BaseButton, Object.assign({}, props, { afterContent: h(Fragment, null, this.showChevron ? (h("ix-icon", { name: 'chevron-right-small', size: "16", class: 'chevron' })) : null) }), this.label, h("slot", null)))));
    }
    static get is() { return "ix-breadcrumb-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["breadcrumb-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["breadcrumb-item.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Breadcrumb label"
                },
                "attribute": "label",
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
                    "text": "Icon to be displayed next ot the label"
                },
                "attribute": "icon",
                "reflect": false
            },
            "ghost": {
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "ghost",
                "reflect": false,
                "defaultValue": "true"
            },
            "visible": {
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "visible",
                "reflect": false,
                "defaultValue": "true"
            },
            "showChevron": {
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "show-chevron",
                "reflect": false,
                "defaultValue": "true"
            },
            "isDropdownTrigger": {
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "is-dropdown-trigger",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "a11y": {}
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=breadcrumb-item.js.map
