'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const service = require('./service-a42add5f.js');
const breakpoints = require('./breakpoints-5d1583fb.js');
require('./typed-event-8032c0c0.js');

const paneLayoutCss = ":host{display:flex;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .side-panes-wrapper{height:100%;width:100%}:host .row{height:100%;width:100%;overflow:hidden;display:flex;flex-direction:row;justify-content:space-between;position:relative}:host .col{height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;position:relative}:host .content{width:100%;height:100%;overflow:auto}:host .absolute-top{width:100%;position:absolute;top:0}:host .absolute-bottom{width:100%;position:absolute;bottom:0}:host .absolute-left{height:100%;position:absolute;left:0}:host .absolute-right{height:100%;position:absolute;right:0}:host .padding-top{padding-top:2.5rem}:host .padding-bottom{padding-bottom:2.5rem}:host .padding-left{padding-left:2.5rem}:host .padding-right{padding-right:2.5rem}";
const IxPaneLayoutStyle0 = paneLayoutCss;

const Panes = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.isMobile = breakpoints.matchBreakpoint('sm');
        service.applicationLayoutService.onChange.on(() => {
            this.isMobile = breakpoints.matchBreakpoint('sm');
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
        index.forceUpdate(this.hostElement);
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
        index.forceUpdate(this.hostElement);
    }
    onVariantChanged(event) {
        const { slot, variant } = event.detail;
        this.panes.forEach((currentSlot) => {
            if (currentSlot.slot === slot) {
                currentSlot.floating = variant === 'floating';
            }
        });
        index.forceUpdate(this.hostElement);
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
        index.forceUpdate(this.hostElement);
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
        return (index.h(index.Host, { key: 'd0c4c123e23837ab5f557bc21269defbed5e7221' }, !this.isMobile ? (this.layout == 'full-vertical' ? (index.h("div", { class: "side-panes-wrapper" }, index.h("div", { class: {
                row: true,
                'padding-left': this.hasPadding('left'),
                'padding-right': this.hasPadding('right'),
            } }, index.h("div", { key: "left", class: { 'absolute-left': this.isFloating('left') } }, index.h("slot", { name: "left" })), index.h("div", { class: {
                col: true,
                'padding-top': this.hasPadding('top'),
                'padding-bottom': this.hasPadding('bottom'),
            } }, index.h("div", { key: "top", class: { 'absolute-top': this.isFloating('top') } }, index.h("slot", { name: "top" })), index.h("div", { key: "content", class: "content", onClick: () => this.closeFloatingPanes() }, index.h("slot", { name: "content" })), index.h("div", { key: "bottom", class: { 'absolute-bottom': this.isFloating('bottom') } }, index.h("slot", { name: "bottom" }))), index.h("div", { key: "right", class: { 'absolute-right': this.isFloating('right') } }, index.h("slot", { name: "right" }))))) : (index.h("div", { class: "side-panes-wrapper" }, index.h("div", { class: {
                col: true,
                'padding-top': this.hasPadding('top'),
                'padding-bottom': this.hasPadding('bottom'),
            } }, index.h("div", { key: "top", class: { 'absolute-top': this.isFloating('top') } }, index.h("slot", { name: "top" })), index.h("div", { class: {
                row: true,
                'padding-left': this.hasPadding('left'),
                'padding-right': this.hasPadding('right'),
            } }, index.h("div", { key: "left", class: { 'absolute-left': this.isFloating('left') } }, index.h("slot", { name: "left" })), index.h("div", { key: "content", class: "content", onClick: () => this.closeFloatingPanes() }, index.h("slot", { name: "content" })), index.h("div", { key: "right", class: { 'absolute-right': this.isFloating('right') } }, index.h("slot", { name: "right" }))), index.h("div", { key: "bottom", class: { 'absolute-bottom': this.isFloating('bottom') } }, index.h("slot", { name: "bottom" })))))) : (index.h("div", { class: "col" }, index.h("div", { key: "top", style: {
                minHeight: this.hasPaddingMobile('top') ? '48px' : '0',
                display: this.slotExists('top') ? 'block' : 'none',
            } }, index.h("slot", { name: "top" })), index.h("div", { key: "left", style: {
                minHeight: this.hasPaddingMobile('left') ? '48px' : '0',
                display: this.slotExists('left') ? 'block' : 'none',
            } }, index.h("slot", { name: "left" })), index.h("div", { key: "content", class: "content", onClick: () => this.closeFloatingPanes() }, index.h("slot", { name: "content" })), index.h("div", { key: "right", style: {
                minHeight: this.hasPaddingMobile('right') ? '48px' : '0',
                display: this.slotExists('right') ? 'block' : 'none',
            } }, index.h("slot", { name: "right" })), index.h("div", { key: "bottom", style: {
                minHeight: this.hasPaddingMobile('bottom') ? '48px' : '0',
                display: this.slotExists('bottom') ? 'block' : 'none',
            } }, index.h("slot", { name: "bottom" }))))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "paneElements": ["onPaneElementsChange"],
        "variant": ["onVariableChange"],
        "borderless": ["onBorderChange"],
        "layout": ["onLayoutChange"],
        "isMobile": ["onMobileChange"]
    }; }
};
Panes.style = IxPaneLayoutStyle0;

exports.ix_pane_layout = Panes;

//# sourceMappingURL=ix-pane-layout.cjs.entry.js.map