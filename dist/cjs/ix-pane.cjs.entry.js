'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const anime_es = require('./anime.es-e2814360.js');
const animation = require('./animation-99234008.js');
const service = require('./service-a42add5f.js');
const breakpoints = require('./breakpoints-5d1583fb.js');
require('./typed-event-8032c0c0.js');

const paneCss = ":host{background-color:var(--theme-color-2);display:flex;position:relative;overflow:hidden;box-sizing:border-box}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host aside{width:100%;height:100%}:host .title-text{display:flex;align-items:center;gap:var(--theme-space-1);overflow:hidden}:host .title-text .title-text-overflow{width:100%;height:100%;display:contents}:host .title-text .title-text-overflow *{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .header-gap{gap:var(--theme-space-1)}:host .top-bottom-pane{display:flex;flex-direction:column;flex-grow:1}:host .top-bottom-pane .title{display:flex;flex-direction:row;align-items:center;margin:var(--theme-space--1) var(--theme-space-2) var(--theme-space--1) var(--theme-space-2)}:host .top-bottom-pane .title-finished{padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .top-bottom-pane .title-expanded{display:flex;flex-direction:row}:host .top-bottom-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane{display:flex;flex-grow:1}:host .left-right-pane .title{display:flex;flex-direction:column;align-items:center;margin:var(--theme-space-2) var(--theme-space--1) var(--theme-space-2) var(--theme-space--1)}:host .left-right-pane .title .title-text{flex-direction:row-reverse;justify-content:start;flex-direction:row}:host .left-right-pane .title .rotate{writing-mode:vertical-lr;text-orientation:mixed;transform:rotate(180deg);flex-direction:row-reverse}:host .left-right-pane .title-finished{padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane .title-expanded{display:flex;flex-direction:row}:host .left-right-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane.expanded{flex-direction:column}:host .mobile-pane{display:flex;flex-direction:column;flex-grow:1}:host .mobile-pane .title-mobile{display:flex;flex-direction:row-reverse;justify-content:space-between;margin:var(--theme-space-1) var(--theme-space-2)}:host .side-pane-content{padding:var(--theme-space-1) var(--theme-space-2);overflow:auto;height:100%;width:100%}:host(.not-visible){display:none}:host(.inline-color){background-color:var(--theme-color-1)}:host(.box-shadow){box-shadow:0 0 1rem black}:host(.nav-left-border){border-left:var(--theme-app-header--border-width) solid var(--theme-color-weak-bdr)}:host(.left-pane-border){border-right:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.right-pane-border){border-left:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.top-pane-border){border-bottom:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.bottom-pane-border){border-top:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.mobile-overlay){width:100%;position:absolute;z-index:100 !important}:host(.mobile-overlay) .side-pane-content{height:calc(100% - 2.5rem)}:host(.mobile-border-top){border-bottom:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.mobile-border-bottom){border-top:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.top-expanded){top:0}:host(.bottom-expanded){bottom:0}:host(.left-right-pane){height:100%}:host(.top-bottom-pane){width:100%}";
const IxPaneStyle0 = paneCss;

const Pane = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.expandedChanged = index.createEvent(this, "expandedChanged", 7);
        this.variantChanged = index.createEvent(this, "variantChanged", 7);
        this.borderlessChanged = index.createEvent(this, "borderlessChanged", 7);
        this.hideOnCollapseChanged = index.createEvent(this, "hideOnCollapseChanged", 7);
        this.slotChanged = index.createEvent(this, "slotChanged", 7);
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
        this.isMobile = breakpoints.matchBreakpoint('sm');
        service.applicationLayoutService.onChange.on(() => {
            this.isMobile = breakpoints.matchBreakpoint('sm');
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
        let animation$1 = anime_es.anime({
            targets: this.hostElement,
            duration: animation.Animation.mediumTime,
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
        this.animations.set(key, animation$1);
    }
    animateHorizontalFadeIn(size) {
        let key = this.getKey();
        let animation$1 = anime_es.anime({
            targets: this.hostElement,
            duration: animation.Animation.mediumTime,
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
        this.animations.set(key, animation$1);
    }
    removePadding() {
        anime_es.anime({
            targets: this.hostElement.shadowRoot.querySelector('#title-div'),
            duration: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            delay: 0,
        });
    }
    animateHorizontalPadding(size, duration = animation.Animation.mediumTime) {
        let key = this.getKey();
        let animation = anime_es.anime({
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
    animateVerticalPadding(size, duration = animation.Animation.mediumTime) {
        let key = this.getKey();
        let animation = anime_es.anime({
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
        return (index.h(index.Host, { key: '1704a13dbb106afcd4f84ce82b9511bf3ef3de20', class: {
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
            } }, index.h("aside", { key: '936922a6c519bf2fbf7f5584fbb01e50c82c9422', class: {
                'top-bottom-pane': this.isBottomTopPane && !this.isMobile,
                'left-right-pane': this.isLeftRightPane && !this.isMobile,
                'mobile-pane': this.isMobile,
                expanded: this.expanded,
            } }, index.h("div", { key: '5064e26b9c5b3770c6c5e4d37c9fc7cc0e166821', id: "title-div", class: {
                title: !this.isMobile && !this.hideOnCollapse && !this.showContent,
                'title-finished': !this.isMobile && !this.hideOnCollapse && this.showContent,
                'title-expanded': !this.isMobile && !this.hideOnCollapse && this.expanded,
                'title-hide-on-collapse': !this.isMobile && this.hideOnCollapse,
                'title-mobile': this.isMobile,
                'header-gap': !this.isMobile && !this.hideOnCollapse,
            } }, index.h("ix-icon-button", { key: '7ccba907c951d00bada385fc264d251e1adb402b', class: "title-icon", size: "24", icon: this.expanded
                ? this.isMobile || this.hideOnCollapse
                    ? 'close'
                    : this.expandIcon
                : this.minimizeIcon, ghost: true, onClick: () => {
                this.expanded = !this.expanded;
            }, "aria-controls": this.composition + 'ToggleButton' }), index.h("span", { key: '5b4406bf16ddd92d8888d49c4a18b1d857ea8f61', class: {
                'title-text': true,
                rotate: !this.expanded && !this.isMobile && this.isLeftRightPane,
            } }, this.icon ? (index.h("ix-icon", { size: "24", name: this.icon })) : null, index.h("div", { key: 'daefc0b1860d28ce81e52eeb884eec679416a54f', class: "title-text-overflow" }, index.h("ix-typography", { key: '8a4deef3b02fbef4b918f98dd8d12fac4f29ee29', format: "h4" }, this.heading)))), index.h("div", { key: '7188486819256d46e21b298f898661e91fce44de', class: "side-pane-content", hidden: !this.showContent }, index.h("slot", { key: '45eb450896e2b6ec2833913a52094cc4cd3a1a41' })))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "isMobile": ["onMobileChange"],
        "composition": ["onPositionChange"],
        "hideOnCollapse": ["onHideOnCollapseChange"],
        "variant": ["onVariantChange"],
        "borderless": ["onBorderlessChange"],
        "expanded": ["onExpandedChange"],
        "parentHeightPx": ["onParentSizeChange"],
        "parentWidthPx": ["onParentSizeChange"],
        "size": ["onSizeChange"]
    }; }
};
Pane.style = IxPaneStyle0;

exports.ix_pane = Pane;

//# sourceMappingURL=ix-pane.cjs.entry.js.map