var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { arrow, autoUpdate, computePosition, flip, offset, shift, } from "@floating-ui/dom";
import { h, Host, } from "@stencil/core";
import { OnListener } from "../utils/listener";
const numberToPixel = (value) => (value != null ? `${value}px` : '');
/**
 * @slot title-icon - Icon of tooltip title
 * @slot title-content - Content of tooltip title
 *
 * @since 1.4.0
 */
export class Tooltip {
    constructor() {
        this.onEnterElementBind = this.onTooltipShow.bind(this);
        this.onLeaveElementBind = this.onTooltipHide.bind(this);
        this.tooltipCloseTimeInMS = 50;
        this.for = undefined;
        this.titleContent = undefined;
        this.interactive = false;
        this.placement = 'top';
        this.animationFrame = false;
        this.visible = false;
    }
    get arrowElement() {
        return this.hostElement.shadowRoot.querySelector('.arrow');
    }
    destroyAutoUpdate() {
        if (this.disposeAutoUpdate !== undefined) {
            this.disposeAutoUpdate();
        }
    }
    onTooltipShow(e) {
        this.showTooltip(e.target);
    }
    onTooltipHide() {
        this.hideTooltip();
    }
    /** @internal */
    async showTooltip(anchorElement) {
        clearTimeout(this.hideTooltipTimeout);
        await this.computeTooltipPosition(anchorElement);
        this.visible = true;
    }
    /** @internal */
    async hideTooltip() {
        this.hideTooltipTimeout = setTimeout(() => {
            this.visible = false;
        }, this.tooltipCloseTimeInMS);
        this.destroyAutoUpdate();
    }
    computeArrowPosition({ placement, middlewareData, }) {
        let { x, y } = middlewareData.arrow;
        if (placement.startsWith('top')) {
            return {
                left: numberToPixel(x),
                top: numberToPixel(y),
            };
        }
        if (placement.startsWith('right')) {
            return {
                left: numberToPixel(-4),
                top: numberToPixel(y),
            };
        }
        if (placement.startsWith('bottom')) {
            return {
                left: numberToPixel(x),
                top: numberToPixel(-4),
            };
        }
        if (placement.startsWith('left')) {
            return {
                right: numberToPixel(-4),
                top: numberToPixel(y),
            };
        }
    }
    async computeTooltipPosition(target) {
        if (!target) {
            return;
        }
        return new Promise((resolve) => {
            this.disposeAutoUpdate = autoUpdate(target, this.hostElement, async () => {
                setTimeout(async () => {
                    const computeResponse = await computePosition(target, this.hostElement, {
                        strategy: 'fixed',
                        placement: this.placement,
                        middleware: [
                            shift(),
                            offset(8),
                            arrow({
                                element: this.arrowElement,
                            }),
                            flip({
                                fallbackStrategy: 'initialPlacement',
                                padding: 10,
                            }),
                        ],
                    });
                    if (computeResponse.middlewareData.arrow) {
                        const arrowPosition = this.computeArrowPosition(computeResponse);
                        Object.assign(this.arrowElement.style, arrowPosition);
                    }
                    const { x, y } = computeResponse;
                    Object.assign(this.hostElement.style, {
                        left: x !== null ? `${x}px` : '',
                        top: y !== null ? `${y}px` : '',
                    });
                    resolve();
                });
            }, {
                ancestorResize: true,
                ancestorScroll: true,
                elementResize: true,
                animationFrame: this.animationFrame,
            });
        });
    }
    clearHideTimeout() {
        if (this.interactive) {
            clearTimeout(this.hideTooltipTimeout);
        }
    }
    queryAnchorElements() {
        return Array.from(document.querySelectorAll(this.for));
    }
    registerTriggerListener() {
        const triggerElementList = this.queryAnchorElements();
        if (this.disposeListener) {
            this.disposeListener();
        }
        triggerElementList.forEach((element) => {
            element.addEventListener('mouseenter', this.onEnterElementBind);
            element.addEventListener('mouseleave', this.onLeaveElementBind);
            element.addEventListener('focusin', this.onEnterElementBind);
            element.addEventListener('focusout', this.onLeaveElementBind);
            this.disposeListener = () => {
                element.removeEventListener('mouseenter', this.onEnterElementBind);
                element.removeEventListener('mouseleave', this.onLeaveElementBind);
                element.removeEventListener('focusin', this.onEnterElementBind);
                element.removeEventListener('focusout', this.onLeaveElementBind);
            };
        });
    }
    registerTooltipListener() {
        const { hostElement } = this;
        hostElement.addEventListener('mouseenter', () => this.clearHideTimeout());
        hostElement.addEventListener('focusin', () => this.clearHideTimeout());
        hostElement.addEventListener('mouseleave', () => this.onTooltipHide());
        hostElement.addEventListener('focusout', () => this.onTooltipHide());
    }
    async onKeydown(event) {
        if (event.code === 'Escape') {
            this.onTooltipHide();
        }
    }
    componentWillLoad() {
        this.registerTriggerListener();
    }
    componentDidLoad() {
        if (this.interactive) {
            this.tooltipCloseTimeInMS = 150;
        }
        this.observer = new MutationObserver(() => {
            this.registerTriggerListener();
        });
        this.observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['data-ix-tooltip'],
            childList: true,
            subtree: true,
        });
        this.registerTooltipListener();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.destroyAutoUpdate();
    }
    render() {
        const tooltipContentClass = {
            'tooltip-content': true,
        };
        return (h(Host, { key: 'c297ba0961f7dc7ad8823f4f9a5022cb10ed7a77', class: {
                visible: this.visible,
            }, role: "tooltip" }, h("div", { key: '21bf5211c142329a9475ef37fb5d2b5f5e4f5f19', class: 'tooltip-title' }, h("slot", { key: '8e4b3e91a0a161efa871a717a3d4871cb08224d2', name: "title-icon" }), h("ix-typography", { key: '7715a464de0154206a72f3a9ed97247eb5e4954c', variant: "default-title" }, this.titleContent, h("slot", { key: '16cc59a0d2a7aa11ab584be7738084b811d2320d', name: "title-content" }))), h("div", { key: '4390c36d7d326a7a0ffd8e0a7f2308c6bdacd02b', class: tooltipContentClass }, h("slot", { key: 'b21343921ee51073ad3c7e26f1ace94f46ec29e3' })), h("div", { key: '4e578ce3e101c8b479a7c334a81dafde3dc105a5', class: "arrow" })));
    }
    static get is() { return "ix-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tooltip.css"]
        };
    }
    static get properties() {
        return {
            "for": {
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
                    "text": "CSS selector for hover trigger element e.g. `for=\"[data-my-custom-select]\"`"
                },
                "attribute": "for",
                "reflect": false
            },
            "titleContent": {
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
                    "text": "Title of the tooltip"
                },
                "attribute": "title-content",
                "reflect": false
            },
            "interactive": {
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
                    "text": "Define if the user can access the tooltip via mouse."
                },
                "attribute": "interactive",
                "reflect": false,
                "defaultValue": "false"
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'top' | 'right' | 'bottom' | 'left'",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.5.0"
                        }],
                    "text": "Initial placement of the tooltip. If the placement don\"t have enough space,\nthe tooltip will placed on another location."
                },
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'top'"
            },
            "animationFrame": {
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
                "attribute": "animation-frame",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "visible": {}
        };
    }
    static get methods() {
        return {
            "showTooltip": {
                "complexType": {
                    "signature": "(anchorElement: any) => Promise<void>",
                    "parameters": [{
                            "name": "anchorElement",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }]
                }
            },
            "hideTooltip": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }]
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
__decorate([
    OnListener('keydown', (self) => self.visible)
], Tooltip.prototype, "onKeydown", null);
//# sourceMappingURL=tooltip.js.map
