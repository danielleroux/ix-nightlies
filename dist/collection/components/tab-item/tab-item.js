/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class TabItem {
    constructor() {
        this.selected = false;
        this.disabled = false;
        this.small = false;
        this.icon = false;
        this.rounded = false;
        this.counter = undefined;
        this.layout = 'auto';
        this.placement = 'bottom';
    }
    tabItemClasses(props) {
        return {
            selected: props.selected,
            disabled: props.disabled,
            'small-tab': props.small,
            icon: props.small,
            stretched: props.layout === 'stretched',
            bottom: props.placement === 'bottom',
            top: props.placement === 'top',
            circle: props.circle,
        };
    }
    render() {
        return (h(Host, { key: '62eea432a4d9c19db812f736ec3d08e03d411b48', class: this.tabItemClasses({
                selected: this.selected,
                disabled: this.disabled,
                small: this.small,
                icon: this.icon,
                layout: this.layout,
                placement: this.placement,
                circle: this.rounded,
            }), tabIndex: 0, onClick: (event) => {
                const clientEvent = this.tabClick.emit({
                    nativeEvent: event,
                });
                if (clientEvent.defaultPrevented) {
                    event.stopPropagation();
                }
            } }, h("div", { key: '31f7dd998cfe6b2f72a57a4738d87d70b4e13383', class: {
                circle: this.rounded,
                text: !this.rounded,
                selected: this.selected,
                disabled: this.disabled,
            } }, h("slot", { key: '591b96b26a84f459d81d46645aa1db78748725bb' })), h("div", { key: '70ddcd21e4f76f4549e6c830640acdb7e33e3150', class: {
                counter: true,
                selected: this.selected,
                hidden: !(this.rounded && this.counter !== undefined),
                disabled: this.disabled,
            } }, this.counter)));
    }
    static get is() { return "ix-tab-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tab-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tab-item.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Set selected tab"
                },
                "attribute": "selected",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Set disabled tab"
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "small": {
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
                    "text": "Set small size tab"
                },
                "attribute": "small",
                "reflect": false,
                "defaultValue": "false"
            },
            "icon": {
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
                    "text": "Set icon only tab"
                },
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "false"
            },
            "rounded": {
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
                    "text": "Set rounded tab"
                },
                "attribute": "rounded",
                "reflect": false,
                "defaultValue": "false"
            },
            "counter": {
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
                    "text": "Set counter value"
                },
                "attribute": "counter",
                "reflect": false
            },
            "layout": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'auto' | 'stretched'",
                    "resolved": "\"auto\" | \"stretched\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set layout width style"
                },
                "attribute": "layout",
                "reflect": false,
                "defaultValue": "'auto'"
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'bottom' | 'top'",
                    "resolved": "\"bottom\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set selected placement"
                },
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'bottom'"
            }
        };
    }
    static get events() {
        return [{
                "method": "tabClick",
                "name": "tabClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "On tab click"
                },
                "complexType": {
                    "original": "TabClickDetail",
                    "resolved": "{ nativeEvent: MouseEvent; }",
                    "references": {
                        "TabClickDetail": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/tab-item/tab-item.tsx",
                            "id": "src/components/tab-item/tab-item.tsx::TabClickDetail"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=tab-item.js.map
