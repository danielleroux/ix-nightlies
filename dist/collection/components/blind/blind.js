/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Fragment, h, Host, } from "@stencil/core";
import anime from "animejs";
import { a11yBoolean } from "../utils/a11y";
let sequentialInstanceId = 0;
export class Blind {
    constructor() {
        this.blindId = ++sequentialInstanceId;
        this.collapsed = false;
        this.label = undefined;
        this.sublabel = undefined;
        this.icon = undefined;
        this.variant = 'insight';
    }
    onHeaderClick() {
        this.collapsed = !this.collapsed;
        this.collapsedChange.emit(this.collapsed);
    }
    componentDidLoad() {
        this.animateCollapse(this.collapsed);
    }
    get content() {
        return this.hostElement.shadowRoot.querySelector('.blind-content');
    }
    animation(isCollapsed) {
        this.animateCollapse(isCollapsed);
    }
    animateCollapse(isCollapsed) {
        if (isCollapsed) {
            this.rotateChevronRight();
        }
        else {
            this.rotateChevronDown();
        }
    }
    rotateChevronDown() {
        anime({
            targets: this.chevronRef,
            duration: 150,
            easing: 'easeInOutSine',
            rotateZ: 90,
        });
        anime({
            targets: this.content,
            duration: 150,
            easing: 'easeInOutSine',
            opacity: 1,
        });
    }
    rotateChevronRight() {
        anime({
            targets: this.chevronRef,
            duration: 150,
            easing: 'easeInOutSine',
            rotateZ: 0,
        });
        anime({
            targets: this.content,
            duration: 150,
            easing: 'easeInOutSine',
            opacity: 0,
        });
    }
    render() {
        return (h(Host, { key: 'fa737e290302d9121790574a4a88738a0be492a6', class: {
                [`blind-${this.variant}`]: true,
            } }, h("div", { key: 'a30152172426864588f8482a8f94f437948c74a4', class: 'blind-header-wrapper' }, h("button", { key: '2d4c31d29ae45a44cb4da28d4671eec4e4293ffe', class: {
                'blind-header': true,
                [`blind-${this.variant}`]: true,
                closed: this.collapsed,
            }, type: "button", "aria-labelledby": `ix-blind-header-title-${this.blindId}`, "aria-controls": `ix-blind-content-section-${this.blindId}`, "aria-expanded": a11yBoolean(!this.collapsed), onClick: () => this.onHeaderClick() }, h("slot", { key: '6b43c8e46273edbe85478df6417d0e4814bb96d8', name: "custom-header" })), h("div", { key: 'a8365629f6a68d360959bd5d12cbb56989c1584a', class: 'blind-header-content' }, h("ix-icon", { key: '3f326906e7318a857ca360c3cdbc1e05d7f10d3d', class: "collapse-icon", name: 'chevron-right-small', color: this.variant === 'insight' || this.variant === 'outline'
                ? 'color-primary'
                : `color-${this.variant}--contrast`, ref: (ref) => (this.chevronRef = ref) }), h("div", { key: '3fd27a4637f4ce37a0d430b2c7b0a0f12fa12539', class: "blind-header-title", id: `ix-blind-header-title-${this.blindId}` }, this.label !== undefined ? (h(Fragment, null, this.icon && (h("ix-icon", { class: "blind-header-title-icon", name: this.icon, color: this.variant === 'insight' || this.variant === 'outline'
                ? 'color-std-text'
                : `color-${this.variant}--contrast` })), h("div", { class: 'blind-header-title-row' }, h("div", { class: "blind-header-title-col" }, h("ix-typography", { title: this.label, format: "label-lg", bold: true }, h("div", { class: "blind-header-title-label", title: this.label }, this.label))), this.sublabel && (h("div", { class: "blind-header-title-col" }, h("ix-typography", { title: this.sublabel }, h("div", { class: "blind-header-title-sublabel" }, this.sublabel))))), h("div", { class: "header-actions" }, h("slot", { name: "header-actions" })))) : null))), h("section", { key: '8702342c9b1a0c7bf81e753cdc9b88b76addacb3', id: `ix-blind-content-section-${this.blindId}`, "aria-labelledby": `ix-blind-header-title-${this.blindId}` }, h("div", { key: 'a362c9a6be61160391054fa0cbcb558c0e275a7f', class: {
                'blind-content': true,
                hide: this.collapsed,
            } }, !this.collapsed ? h("slot", null) : null))));
    }
    static get is() { return "ix-blind"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["blind.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["blind.css"]
        };
    }
    static get properties() {
        return {
            "collapsed": {
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
                    "text": "Collapsed state"
                },
                "attribute": "collapsed",
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
                    "text": "Label of blind"
                },
                "attribute": "label",
                "reflect": false
            },
            "sublabel": {
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
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "Secondary label inside blind header"
                },
                "attribute": "sublabel",
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
                    "tags": [{
                            "name": "since",
                            "text": "1.5.0"
                        }],
                    "text": "Optional icon to be displayed next to the header label"
                },
                "attribute": "icon",
                "reflect": false
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BlindVariant",
                    "resolved": "\"alarm\" | \"critical\" | \"info\" | \"insight\" | \"neutral\" | \"notification\" | \"outline\" | \"primary\" | \"success\" | \"warning\"",
                    "references": {
                        "BlindVariant": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/blind/blind.tsx",
                            "id": "src/components/blind/blind.tsx::BlindVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "Blind variant"
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'insight'"
            }
        };
    }
    static get events() {
        return [{
                "method": "collapsedChange",
                "name": "collapsedChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Collapsed state changed"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "collapsed",
                "methodName": "animation"
            }];
    }
}
//# sourceMappingURL=blind.js.map
