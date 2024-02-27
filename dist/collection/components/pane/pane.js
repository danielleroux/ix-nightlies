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
import Animation from "../utils/animation";
import { applicationLayoutService } from "../utils/application-layout";
import { matchBreakpoint } from "../utils/breakpoints";
/**
 * @since 2.1.0
 */
export class Pane {
    constructor() {
        this.validPositions = ['top', 'left', 'bottom', 'right'];
        this.collapsedPane = '40px';
        this.collapsedPaneMobile = '48px';
        this.animations = new Map();
        this.animationCounter = 0;
        this.heading = undefined;
        this.variant = 'inline';
        this.hideOnCollapse = false;
        this.size = '240px';
        this.borderless = false;
        this.expanded = false;
        this.composition = 'top';
        this.icon = undefined;
        this.ignoreLayoutSettings = false;
        this.isMobile = false;
        this.expandIcon = '';
        this.showContent = false;
        this.minimizeIcon = '';
        this.floating = false;
        this.parentWidthPx = 0;
        this.parentHeightPx = 0;
    }
    get currentSlot() {
        return this.hostElement.getAttribute('slot');
    }
    get isBottomTopPane() {
        return this.composition === 'bottom' || this.composition === 'top';
    }
    get isLeftRightPane() {
        return this.composition === 'left' || this.composition === 'right';
    }
    get isMobileTop() {
        return this.composition === 'top' || this.composition === 'left';
    }
    componentWillLoad() {
        this.setIcons();
        this.floating = this.variant === 'floating';
        if (this.expanded) {
            this.onParentSizeChange();
        }
        this.isMobile = matchBreakpoint('sm');
        applicationLayoutService.onChange.on(() => {
            this.isMobile = matchBreakpoint('sm');
        });
        this.setPosition(this.currentSlot);
        this.mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' &&
                    mutation.attributeName === 'slot') {
                    const newSlot = this.currentSlot;
                    const oldSlot = mutation.oldValue;
                    if (newSlot !== oldSlot) {
                        this.slotChanged.emit({
                            slot: oldSlot,
                            newSlot: newSlot,
                        });
                        this.setPosition(newSlot);
                    }
                }
            });
        });
        this.mutationObserver.observe(this.hostElement, {
            attributes: true,
            attributeOldValue: true,
        });
        const parentElement = this.hostElement.parentElement;
        this.resizeObserver = new ResizeObserver((entries) => {
            this.parentWidthPx = entries[0].borderBoxSize[0].inlineSize;
            this.parentHeightPx = entries[0].borderBoxSize[0].blockSize;
        });
        if (parentElement)
            this.resizeObserver.observe(parentElement);
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    }
    setPosition(value) {
        if (this.validPositions.includes(value)) {
            this.composition = value;
        }
    }
    getExpandPaneSize() {
        let expandPaneSize;
        if (this.isBottomTopPane) {
            if (this.size.includes('px')) {
                const referenceValue = Math.round(this.parentHeightPx / 2);
                const currentValue = Number(this.size.replace('px', ''));
                if (referenceValue && referenceValue < currentValue) {
                    expandPaneSize = `${referenceValue}px`;
                }
                else {
                    expandPaneSize = `${currentValue}px`;
                }
            }
            else {
                if (this.size === '50%') {
                    expandPaneSize = `${Math.round(this.parentHeightPx / 2)}px`;
                }
                else {
                    expandPaneSize = `${Math.round(this.parentHeightPx / 3)}px`;
                }
            }
        }
        else {
            if (this.size.includes('px')) {
                const referenceValue = Math.round(this.parentWidthPx / 2);
                const currentValue = Number(this.size.replace('px', ''));
                if (referenceValue && referenceValue < currentValue) {
                    expandPaneSize = `${referenceValue}px`;
                }
                else {
                    expandPaneSize = `${currentValue}px`;
                }
            }
            else {
                if (this.size === '50%') {
                    expandPaneSize = `${Math.round(this.parentWidthPx / 2)}px`;
                }
                else {
                    expandPaneSize = `${Math.round(this.parentWidthPx / 3)}px`;
                }
            }
        }
        return expandPaneSize;
    }
    setIcons() {
        const { expandIcon, minimizeIcon } = this.getIconNames();
        this.expandIcon = expandIcon;
        this.minimizeIcon = minimizeIcon;
    }
    getIconNames() {
        let expandIcon = '';
        let minimizeIcon = '';
        switch (this.composition) {
            case 'left':
                expandIcon = this.isMobile
                    ? 'double-chevron-up'
                    : 'double-chevron-left';
                minimizeIcon = this.isMobile
                    ? 'double-chevron-down'
                    : 'double-chevron-right';
                break;
            case 'right':
                expandIcon = this.isMobile
                    ? 'double-chevron-down'
                    : 'double-chevron-right';
                minimizeIcon = this.isMobile
                    ? 'double-chevron-up'
                    : 'double-chevron-left';
                break;
            case 'bottom':
                expandIcon = 'double-chevron-down';
                minimizeIcon = 'double-chevron-up';
                break;
            case 'top':
                expandIcon = 'double-chevron-up';
                minimizeIcon = 'double-chevron-down';
                break;
        }
        return { expandIcon, minimizeIcon };
    }
    getKey() {
        return (this.animationCounter++).toString();
    }
    animateVerticalFadeIn(size) {
        let key = this.getKey();
        let animation = anime({
            targets: this.hostElement,
            duration: Animation.mediumTime,
            width: size,
            easing: 'easeInOutSine',
            delay: 0,
            begin: () => {
                if (!this.expanded) {
                    this.showContent = false;
                    this.animateVerticalPadding('0px');
                }
                else {
                    this.animateVerticalPadding('8px');
                }
            },
            complete: () => {
                if (this.expanded) {
                    this.showContent = true;
                }
                this.animations.delete(key);
            },
        });
        this.animations.set(key, animation);
    }
    animateHorizontalFadeIn(size) {
        let key = this.getKey();
        let animation = anime({
            targets: this.hostElement,
            duration: Animation.mediumTime,
            height: size,
            easing: 'easeInOutSine',
            delay: 0,
            begin: () => {
                if (!this.expanded) {
                    this.showContent = false;
                    if (!this.isMobile)
                        this.animateHorizontalPadding('0px');
                }
                else {
                    if (!this.isMobile)
                        this.animateHorizontalPadding('8px');
                }
            },
            complete: () => {
                if (this.expanded) {
                    this.showContent = true;
                }
                this.animations.delete(key);
            },
        });
        this.animations.set(key, animation);
    }
    removePadding() {
        anime({
            targets: this.hostElement.shadowRoot.querySelector('#title-div'),
            duration: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            delay: 0,
        });
    }
    animateHorizontalPadding(size, duration = Animation.mediumTime) {
        let key = this.getKey();
        let animation = anime({
            targets: this.hostElement.shadowRoot.querySelector('#title-div'),
            duration: duration,
            paddingTop: size,
            paddingBottom: size,
            easing: 'easeInOutSine',
            delay: 0,
            complete: () => {
                this.animations.delete(key);
            },
        });
        this.animations.set(key, animation);
    }
    animateVerticalPadding(size, duration = Animation.mediumTime) {
        let key = this.getKey();
        let animation = anime({
            targets: this.hostElement.shadowRoot.querySelector('#title-div'),
            duration: duration,
            paddingLeft: size,
            paddingRight: size,
            easing: 'easeInOutSine',
            delay: 0,
            complete: () => {
                this.animations.delete(key);
            },
        });
        this.animations.set(key, animation);
    }
    clearAnimations() {
        this.animations.forEach((animation) => animation.pause());
        this.animations.clear();
        this.animationCounter = 0;
    }
    onMobileChange() {
        this.setIcons();
        this.hostElement.style.removeProperty('width');
        this.hostElement.style.removeProperty('height');
        this.hostElement.style.removeProperty('min-height');
        this.onParentSizeChange();
    }
    onPositionChange() {
        this.setIcons();
        this.hostElement.style.removeProperty('width');
        this.hostElement.style.removeProperty('height');
        this.onParentSizeChange();
    }
    onHideOnCollapseChange(value) {
        this.onParentSizeChange();
        this.hideOnCollapseChanged.emit({
            slot: this.currentSlot,
            hideOnCollapse: value,
        });
    }
    onVariantChange(value) {
        this.floating = value === 'floating';
        this.variantChanged.emit({
            slot: this.currentSlot,
            variant: value,
        });
    }
    onBorderlessChange(value) {
        this.borderlessChanged.emit({
            slot: this.currentSlot,
            borderless: value,
        });
    }
    onExpandedChange() {
        this.onSizeChange();
        this.expandedChanged.emit({
            slot: this.currentSlot,
            expanded: this.expanded,
        });
    }
    onParentSizeChange() {
        this.clearAnimations();
        this.removePadding();
        if (this.expanded) {
            if (this.isMobile) {
                this.hostElement.style.height = '100%';
            }
            else {
                const expandPaneSize = this.getExpandPaneSize();
                if (this.isBottomTopPane) {
                    this.hostElement.style.height = expandPaneSize;
                    this.animateHorizontalPadding('8px', 0);
                }
                else {
                    this.hostElement.style.width = expandPaneSize;
                    this.animateVerticalPadding('8px', 0);
                }
            }
            this.showContent = true;
        }
        else {
            this.showContent = false;
            if (this.isMobile) {
                this.hostElement.style.height = this.hideOnCollapse
                    ? '0'
                    : this.collapsedPaneMobile;
            }
            else {
                if (this.isBottomTopPane) {
                    this.hostElement.style.height = this.hideOnCollapse
                        ? '0'
                        : this.collapsedPane;
                }
                else {
                    this.hostElement.style.width = this.hideOnCollapse
                        ? '0'
                        : this.collapsedPane;
                }
            }
        }
    }
    onSizeChange() {
        if (this.expanded) {
            if (this.isMobile) {
                this.hostElement.style.minHeight = this.hideOnCollapse
                    ? '0'
                    : this.collapsedPaneMobile;
                this.animateHorizontalFadeIn('100%');
            }
            else {
                const expandPaneSize = this.getExpandPaneSize();
                if (this.isBottomTopPane) {
                    this.hostElement.style.height = this.hideOnCollapse
                        ? '0'
                        : this.collapsedPane;
                    this.animateHorizontalFadeIn(expandPaneSize);
                }
                else {
                    this.hostElement.style.width = this.hideOnCollapse
                        ? '0'
                        : this.collapsedPane;
                    this.animateVerticalFadeIn(expandPaneSize);
                }
            }
        }
        else {
            this.showContent = false;
            if (this.isMobile) {
                this.hostElement.style.height = this.collapsedPaneMobile;
            }
            else {
                if (this.isBottomTopPane) {
                    this.animateHorizontalFadeIn(this.collapsedPane);
                }
                else {
                    this.animateVerticalFadeIn(this.collapsedPane);
                }
            }
        }
    }
    render() {
        return (h(Host, { key: 'dcfd2ad6f43b2a38d9a9006a0b4ae81713fe8f85', class: {
                'inline-color': !this.floating,
                'mobile-overlay': this.expanded && this.isMobile,
                'top-expanded': this.expanded && this.isMobileTop && this.isMobile,
                'bottom-expanded': this.expanded && !this.isMobileTop && this.isMobile,
                'top-bottom-pane': this.isBottomTopPane && !this.isMobile,
                'left-right-pane': this.isLeftRightPane && !this.isMobile,
                [`${this.composition}-pane-border`]: !this.borderless && !this.isMobile && !this.floating,
                'nav-left-border': !this.borderless &&
                    !this.isMobile &&
                    this.composition !== 'right' &&
                    this.floating,
                'mobile-border-top': !this.borderless &&
                    this.isMobileTop &&
                    this.isMobile &&
                    !this.expanded &&
                    !this.floating,
                'mobile-border-bottom': !this.borderless &&
                    !this.isMobileTop &&
                    this.isMobile &&
                    !this.expanded &&
                    !this.floating,
                'box-shadow': this.floating,
                'aria-expanded': this.expanded,
                'not-visible': this.hideOnCollapse && !this.expanded,
            } }, h("aside", { key: 'baf35c3d485501ed02cbaa256414b609fe8e3bb4', class: {
                'top-bottom-pane': this.isBottomTopPane && !this.isMobile,
                'left-right-pane': this.isLeftRightPane && !this.isMobile,
                'mobile-pane': this.isMobile,
                expanded: this.expanded,
            } }, h("div", { key: 'ea1a9f69a3b5e854fb008498c721289b40a6ef08', id: "title-div", class: {
                title: !this.isMobile && !this.hideOnCollapse && !this.showContent,
                'title-finished': !this.isMobile && !this.hideOnCollapse && this.showContent,
                'title-expanded': !this.isMobile && !this.hideOnCollapse && this.expanded,
                'title-hide-on-collapse': !this.isMobile && this.hideOnCollapse,
                'title-mobile': this.isMobile,
                'header-gap': !this.isMobile && !this.hideOnCollapse,
            } }, h("ix-icon-button", { key: 'dd0e96827adb6aca47cf37c29a176518295b4e2e', class: "title-icon", size: "24", icon: this.expanded
                ? this.isMobile || this.hideOnCollapse
                    ? 'close'
                    : this.expandIcon
                : this.minimizeIcon, ghost: true, onClick: () => {
                this.expanded = !this.expanded;
            }, "aria-controls": this.composition + 'ToggleButton' }), h("span", { key: '505a1c739875d56efe54e541090e5f830ca58c0b', class: {
                'title-text': true,
                rotate: !this.expanded && !this.isMobile && this.isLeftRightPane,
            } }, this.icon ? (h("ix-icon", { size: "24", name: this.icon })) : null, h("div", { key: '7c24ad3f13dd01c196625573c5ecae39d26367fa', class: "title-text-overflow" }, h("ix-typography", { key: '31376f418257fdeb93d32948c8166cabc29f4a39', format: "h4" }, this.heading)))), h("div", { key: '95402763b829936c555a26f80e3538dd1f6d542b', class: "side-pane-content", hidden: !this.showContent }, h("slot", { key: '840ffb14d5b70ac9c615f1e12ca8fbf05e0bc3d4' })))));
    }
    static get is() { return "ix-pane"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["pane.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pane.css"]
        };
    }
    static get properties() {
        return {
            "heading": {
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
                    "text": "Title of the side panel"
                },
                "attribute": "heading",
                "reflect": false
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
                    "text": "Variant of the side pane.\nDefaults to the variant attribute of the pane layout. If used standalone it defaults to inline."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'inline'"
            },
            "hideOnCollapse": {
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
                    "text": "Define if the pane should have a collapsed state"
                },
                "attribute": "hide-on-collapse",
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| '240px'\n    | '320px'\n    | '360px'\n    | '480px'\n    | '600px'\n    | '33%'\n    | '50%'",
                    "resolved": "\"240px\" | \"320px\" | \"33%\" | \"360px\" | \"480px\" | \"50%\" | \"600px\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The maximum size of the sidebar, when it is expanded"
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'240px'"
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
                    "text": "Toggle the border of the pane.\nDefaults to the borderless attribute of the pane layout. If used standalone it defaults to false."
                },
                "attribute": "borderless",
                "reflect": false,
                "defaultValue": "false"
            },
            "expanded": {
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
                    "text": "State of the pane"
                },
                "attribute": "expanded",
                "reflect": false,
                "defaultValue": "false"
            },
            "composition": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "Composition",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {
                        "Composition": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/pane/pane.tsx",
                            "id": "src/components/pane/pane.tsx::Composition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Defines the position of the pane inside it's container.\nInside a pane layout this property will automatically be set to the name of slot the pane is assigned to."
                },
                "attribute": "composition",
                "reflect": false,
                "defaultValue": "'top'"
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
                    "text": "Name of the icon"
                },
                "attribute": "icon",
                "reflect": false
            },
            "ignoreLayoutSettings": {
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
                            "text": "Prevents overwriting of the variant and borderless property when used inside layout"
                        }],
                    "text": ""
                },
                "attribute": "ignore-layout-settings",
                "reflect": false,
                "defaultValue": "false"
            },
            "isMobile": {
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "is-mobile",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "expandIcon": {},
            "showContent": {},
            "minimizeIcon": {},
            "floating": {},
            "parentWidthPx": {},
            "parentHeightPx": {}
        };
    }
    static get events() {
        return [{
                "method": "expandedChanged",
                "name": "expandedChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is triggered when the pane either expands or contracts"
                },
                "complexType": {
                    "original": "ExpandedChangedEvent",
                    "resolved": "{ slot: string; expanded: boolean; }",
                    "references": {
                        "ExpandedChangedEvent": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/pane/pane.tsx",
                            "id": "src/components/pane/pane.tsx::ExpandedChangedEvent"
                        }
                    }
                }
            }, {
                "method": "variantChanged",
                "name": "variantChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is triggered when the variant of the pane is changed"
                },
                "complexType": {
                    "original": "VariantChangedEvent",
                    "resolved": "{ slot: string; variant: \"floating\" | \"inline\"; }",
                    "references": {
                        "VariantChangedEvent": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/pane/pane.tsx",
                            "id": "src/components/pane/pane.tsx::VariantChangedEvent"
                        }
                    }
                }
            }, {
                "method": "borderlessChanged",
                "name": "borderlessChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is triggered when the variant of the pane is changed"
                },
                "complexType": {
                    "original": "BorderlessChangedEvent",
                    "resolved": "{ slot: string; borderless: boolean; }",
                    "references": {
                        "BorderlessChangedEvent": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/pane/pane.tsx",
                            "id": "src/components/pane/pane.tsx::BorderlessChangedEvent"
                        }
                    }
                }
            }, {
                "method": "hideOnCollapseChanged",
                "name": "hideOnCollapseChanged",
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
                    "original": "HideOnCollapseChangedEvent",
                    "resolved": "{ slot: string; hideOnCollapse: boolean; }",
                    "references": {
                        "HideOnCollapseChangedEvent": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/pane/pane.tsx",
                            "id": "src/components/pane/pane.tsx::HideOnCollapseChangedEvent"
                        }
                    }
                }
            }, {
                "method": "slotChanged",
                "name": "slotChanged",
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
                    "original": "SlotChangedEvent",
                    "resolved": "{ slot: string; newSlot: string; }",
                    "references": {
                        "SlotChangedEvent": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/pane/pane.tsx",
                            "id": "src/components/pane/pane.tsx::SlotChangedEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "isMobile",
                "methodName": "onMobileChange"
            }, {
                "propName": "composition",
                "methodName": "onPositionChange"
            }, {
                "propName": "hideOnCollapse",
                "methodName": "onHideOnCollapseChange"
            }, {
                "propName": "variant",
                "methodName": "onVariantChange"
            }, {
                "propName": "borderless",
                "methodName": "onBorderlessChange"
            }, {
                "propName": "expanded",
                "methodName": "onExpandedChange"
            }, {
                "propName": "parentHeightPx",
                "methodName": "onParentSizeChange"
            }, {
                "propName": "parentWidthPx",
                "methodName": "onParentSizeChange"
            }, {
                "propName": "size",
                "methodName": "onSizeChange"
            }];
    }
}
//# sourceMappingURL=pane.js.map
