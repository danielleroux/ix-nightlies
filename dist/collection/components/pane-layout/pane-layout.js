/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { forceUpdate, h, Host, } from "@stencil/core";
import { applicationLayoutService } from "../utils/application-layout";
import { matchBreakpoint } from "../utils/breakpoints";
/**
 * @since 2.1.0
 */
export class Panes {
    constructor() {
        this.panes = [];
        this.layout = 'full-vertical';
        this.variant = 'inline';
        this.borderless = false;
        this.isMobile = false;
        this.paneElements = 0;
    }
    get currentPanes() {
        return this.hostElement.querySelectorAll('ix-pane');
    }
    componentWillLoad() {
        this.paneElements = this.currentPanes.length;
        this.observer = new MutationObserver((mutations) => {
            var _a, _b;
            if (((_a = mutations[0].addedNodes.item(0)) === null || _a === void 0 ? void 0 : _a.nodeName) === 'IX-PANE') {
                this.paneElements += 1;
            }
            else if (((_b = mutations[0].removedNodes.item(0)) === null || _b === void 0 ? void 0 : _b.nodeName) === 'IX-PANE') {
                this.paneElements -= 1;
            }
        });
        this.observer.observe(this.hostElement, {
            childList: true,
        });
        this.isMobile = matchBreakpoint('sm');
        applicationLayoutService.onChange.on(() => {
            this.isMobile = matchBreakpoint('sm');
        });
    }
    componentDidLoad() {
        this.setPanes(this.currentPanes);
    }
    disconnectedCallback() {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    setPaneVariant(pane) {
        if (!pane.ignoreLayoutSettings) {
            pane.variant = this.variant;
        }
    }
    setPaneBorder(pane) {
        if (!pane.ignoreLayoutSettings) {
            if (this.borderless) {
                pane.borderless = true;
            }
            else {
                const hasVisibleLeftPane = !!this.panes.find((pane) => pane.slot === 'left' && !pane.hideOnCollapse);
                if (pane.variant === 'floating' &&
                    this.layout === 'full-vertical' &&
                    hasVisibleLeftPane &&
                    (pane.composition === 'top' || pane.composition === 'bottom')) {
                    pane.borderless = true;
                }
                else {
                    pane.borderless = false;
                }
            }
        }
    }
    setPaneZIndex(pane) {
        const isTop = pane.slot === 'top';
        const isBottom = pane.slot === 'bottom';
        const isLeft = pane.slot === 'left';
        const isRight = pane.slot === 'right';
        let zIndex = 1;
        if (this.isMobile) {
            if (isBottom || isTop) {
                zIndex = 3;
            }
        }
        else {
            if (this.layout === 'full-vertical') {
                if (isLeft || isRight) {
                    zIndex = 3;
                }
            }
            else {
                if (isBottom || isTop) {
                    zIndex = 3;
                }
            }
        }
        pane.style.zIndex = zIndex.toString();
    }
    setPanes(panes) {
        this.panes = [];
        panes.forEach((pane) => {
            this.panes.push({
                slot: pane.slot,
                hideOnCollapse: pane.hideOnCollapse,
                floating: pane.variant === 'floating',
            });
        });
    }
    closeFloatingPanes() {
        this.currentPanes.forEach((pane) => {
            if (pane.expanded && pane.variant === 'floating') {
                pane.expanded = false;
            }
        });
    }
    configurePanes() {
        let topCount = 0;
        let bottomCount = 0;
        let leftCount = 0;
        let rightCount = 0;
        this.currentPanes.forEach((pane) => {
            const isTop = pane.slot === 'top';
            const isBottom = pane.slot === 'bottom';
            const isLeft = pane.slot === 'left';
            const isRight = pane.slot === 'right';
            if (isLeft) {
                if (leftCount) {
                    pane.slot = undefined;
                    return;
                }
                leftCount++;
            }
            else if (isRight) {
                if (rightCount) {
                    pane.slot = undefined;
                    return;
                }
                rightCount++;
            }
            else if (isTop) {
                if (topCount) {
                    pane.slot = undefined;
                    return;
                }
                topCount++;
            }
            else if (isBottom) {
                if (bottomCount) {
                    pane.slot = undefined;
                    return;
                }
                bottomCount++;
            }
            else {
                pane.slot = undefined;
                return;
            }
            this.setPaneVariant(pane);
            this.setPaneBorder(pane);
            this.setPaneZIndex(pane);
        });
        this.setPanes(this.currentPanes);
        forceUpdate(this.hostElement);
    }
    onSlotChanged() {
        this.configurePanes();
    }
    onCollapsibleChanged(event) {
        const { slot, hideOnCollapse } = event.detail;
        this.panes.forEach((currentSlot) => {
            if (currentSlot.slot === slot) {
                currentSlot.hideOnCollapse = hideOnCollapse;
            }
        });
        forceUpdate(this.hostElement);
    }
    onVariantChanged(event) {
        const { slot, variant } = event.detail;
        this.panes.forEach((currentSlot) => {
            if (currentSlot.slot === slot) {
                currentSlot.floating = variant === 'floating';
            }
        });
        forceUpdate(this.hostElement);
    }
    onPaneElementsChange() {
        this.configurePanes();
    }
    onVariableChange() {
        this.currentPanes.forEach((pane) => {
            this.setPaneVariant(pane);
            this.setPaneBorder(pane);
        });
        this.setPanes(this.currentPanes);
        forceUpdate(this.hostElement);
    }
    onBorderChange() {
        this.currentPanes.forEach((pane) => {
            this.setPaneBorder(pane);
        });
    }
    onLayoutChange() {
        this.currentPanes.forEach((pane) => {
            this.setPaneBorder(pane);
            this.setPaneZIndex(pane);
        });
    }
    onMobileChange() {
        this.currentPanes.forEach((pane) => {
            this.setPaneZIndex(pane);
        });
    }
    hasPadding(composition) {
        const pane = this.panes.find((pane) => pane.slot === composition);
        return pane ? !pane.hideOnCollapse && pane.floating : false;
    }
    hasPaddingMobile(composition) {
        const pane = this.panes.find((pane) => pane.slot === composition);
        return pane && !pane.hideOnCollapse;
    }
    slotExists(composition) {
        const pane = this.panes.find((pane) => pane.slot === composition);
        return !!pane;
    }
    isFloating(composition) {
        const pane = this.panes.find((pane) => pane.slot === composition);
        return pane ? pane.floating : false;
    }
    render() {
        return (h(Host, { key: 'a912976c2f78c0b4e7d88c52d543e1474e53e802' }, !this.isMobile ? (this.layout == 'full-vertical' ? (h("div", { class: "side-panes-wrapper" }, h("div", { class: {
                row: true,
                'padding-left': this.hasPadding('left'),
                'padding-right': this.hasPadding('right'),
            } }, h("div", { key: "left", class: { 'absolute-left': this.isFloating('left') } }, h("slot", { name: "left" })), h("div", { class: {
                col: true,
                'padding-top': this.hasPadding('top'),
                'padding-bottom': this.hasPadding('bottom'),
            } }, h("div", { key: "top", class: { 'absolute-top': this.isFloating('top') } }, h("slot", { name: "top" })), h("div", { key: "content", class: "content", onClick: () => this.closeFloatingPanes() }, h("slot", { name: "content" })), h("div", { key: "bottom", class: { 'absolute-bottom': this.isFloating('bottom') } }, h("slot", { name: "bottom" }))), h("div", { key: "right", class: { 'absolute-right': this.isFloating('right') } }, h("slot", { name: "right" }))))) : (h("div", { class: "side-panes-wrapper" }, h("div", { class: {
                col: true,
                'padding-top': this.hasPadding('top'),
                'padding-bottom': this.hasPadding('bottom'),
            } }, h("div", { key: "top", class: { 'absolute-top': this.isFloating('top') } }, h("slot", { name: "top" })), h("div", { class: {
                row: true,
                'padding-left': this.hasPadding('left'),
                'padding-right': this.hasPadding('right'),
            } }, h("div", { key: "left", class: { 'absolute-left': this.isFloating('left') } }, h("slot", { name: "left" })), h("div", { key: "content", class: "content", onClick: () => this.closeFloatingPanes() }, h("slot", { name: "content" })), h("div", { key: "right", class: { 'absolute-right': this.isFloating('right') } }, h("slot", { name: "right" }))), h("div", { key: "bottom", class: { 'absolute-bottom': this.isFloating('bottom') } }, h("slot", { name: "bottom" })))))) : (h("div", { class: "col" }, h("div", { key: "top", style: {
                minHeight: this.hasPaddingMobile('top') ? '48px' : '0',
                display: this.slotExists('top') ? 'block' : 'none',
            } }, h("slot", { name: "top" })), h("div", { key: "left", style: {
                minHeight: this.hasPaddingMobile('left') ? '48px' : '0',
                display: this.slotExists('left') ? 'block' : 'none',
            } }, h("slot", { name: "left" })), h("div", { key: "content", class: "content", onClick: () => this.closeFloatingPanes() }, h("slot", { name: "content" })), h("div", { key: "right", style: {
                minHeight: this.hasPaddingMobile('right') ? '48px' : '0',
                display: this.slotExists('right') ? 'block' : 'none',
            } }, h("slot", { name: "right" })), h("div", { key: "bottom", style: {
                minHeight: this.hasPaddingMobile('bottom') ? '48px' : '0',
                display: this.slotExists('bottom') ? 'block' : 'none',
            } }, h("slot", { name: "bottom" }))))));
    }
    static get is() { return "ix-pane-layout"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["pane-layout.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pane-layout.css"]
        };
    }
    static get properties() {
        return {
            "layout": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'full-vertical' | 'full-horizontal'",
                    "resolved": "\"full-horizontal\" | \"full-vertical\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Choose the layout of the panes.\nWhen set to 'full-vertical' the vertical panes (left, right) will get the full height.\nWhen set to 'full-horizontal' the horizontal panes (top, bottom) will get the full width."
                },
                "attribute": "layout",
                "reflect": false,
                "defaultValue": "'full-vertical'"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'floating' | 'inline'",
                    "resolved": "\"floating\" | \"inline\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the default variant for all panes in the layout"
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'inline'"
            },
            "borderless": {
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
                    "text": "Set the default border state for all panes in the layout"
                },
                "attribute": "borderless",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isMobile": {},
            "paneElements": {}
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "paneElements",
                "methodName": "onPaneElementsChange"
            }, {
                "propName": "variant",
                "methodName": "onVariableChange"
            }, {
                "propName": "borderless",
                "methodName": "onBorderChange"
            }, {
                "propName": "layout",
                "methodName": "onLayoutChange"
            }, {
                "propName": "isMobile",
                "methodName": "onMobileChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "slotChanged",
                "method": "onSlotChanged",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "hideOnCollapseChanged",
                "method": "onCollapsibleChanged",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "variantChanged",
                "method": "onVariantChanged",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=pane-layout.js.map
