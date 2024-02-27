import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-5cd176b3.js';

const tabItemCss = "@charset \"UTF-8\";:host{position:relative;display:flex;align-items:center;justify-content:center;padding:10px 1.5rem;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--theme-tab--background);color:var(--theme-tab--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ::after{content:\"\";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0}:host .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}:host .text span,:host .text span::before{pointer-events:none}:host .circle{display:flex;justify-content:center;align-items:center;height:3rem;width:3rem;background-color:var(--theme-animated-tab-indicator--background);border-radius:50%;border:2px solid var(--theme-animated-tab-circle--border-color);color:var(--theme-an…icon--color);cursor:pointer}:host .circle.selected:not(.disabled){background-color:var(--theme-animated-tab-circle--background--selected);color:var(--theme-animated-tab-icon--color--selected);border-color:var(--theme-animated-tab-circle--border-color--selected)}:host .circle.selected:not(.disabled):hover{background-color:var(--theme-animated-tab-circle--background--selected)}:host .circle:hover{background-color:var(--theme-animated-tab-circle--background--hover)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle.disabled{background-color:var(--theme-animated-tab-circle--background--disabled);border-color:var(--theme-animated-tab-circle--border-color--disabled)}:host .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--theme-pill-outline--background);border:1px solid var(--theme-tab-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:14px;color:var(--theme-pill-outline--color);cursor:pointer}:host .counter.selected{border-color:var(--theme-tab-pill--border-color--selected)}:host .counter.selected::after{display:none}:host .counter.disabled{border-color:var(--theme-tab-pill--border-color--disabled)}:host .counter::after{display:none}:host .hidden{display:none}:host(.circle){height:72px}:host(.top) ::after{top:0}:host(.bottom) ::after{bottom:0}:host(.stretched){flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(:hover:not(.circle)){background-color:var(--theme-tab--background--hover);color:var(--theme-tab-color-hover);cursor:pointer}:host(:hover:not(.circle)) ::after{background-color:var(--theme-tab-indicator--background--hover)}:host(:active:not(.circle)){background-color:var(--theme-tab--background--active);color:var(--theme-tab-color--active)}:host(:active:not(.circle)) ::after{background-color:var(--theme-tab-indicator--background--active)}:host(:focus-visible){outline:0px solid var(--focus--border-color)}:host(:focus-visible) .circle{outline:1px solid var(--focus--border-color)}:host(:focus-visible:not(.circle)){outline:1px solid var(--focus--border-color)}:host(.disabled){pointer-events:none;color:var(--theme-tab--color--disabled);background-color:var(--theme-tab--background--disabled)}:host(.disabled) ::after{background-color:var(--theme-tab-indicator--background--disabled)}:host(.selected:not(.disabled)){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}:host(.selected:not(.disabled)) ::after{background-color:var(--theme-tab-indicator--background--selected)}:host(.icon){padding:1.5rem 0.5rem}:host(.small-tab){height:32px;padding:1rem}:host(.small-tab.icon){padding:1rem 0.25rem}";
const IxTabItemStyle0 = tabItemCss;

const TabItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabClick = createEvent(this, "tabClick", 7);
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
};
TabItem.style = IxTabItemStyle0;

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Prevents angular from change detection when requesting an animation frame
 *
 * Credits goes to:
 * https://github.com/ionic-team/ionic-framework/blob/main/core/src/utils/helpers.ts
 */
const requestAnimationFrameNoNgZone = (callback) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(callback);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(callback);
    }
    return setTimeout(callback);
};

const tabsCss = ":host{width:auto;display:flex;align-items:center;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tab-items{overflow:hidden;scroll-behavior:smooth;width:100%}:host .tab-items .items-content{display:flex;align-items:center}:host .arrow{position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-invisible-primary--color);background-color:var(--theme-btn-invisible-primary--background);z-index:2}:host .arrow:hover{color:var(--theme-btn-invisible-primary--color--hover);background-color:var(--theme-btn-invisible-primary--background--hover)}:host .arrow:active{color:var(--theme-btn-invisible-primary--color--active);background-color:var(--theme-btn-invisible-primary--background--active)}:host .arrow.right{left:auto;right:0}:host .overflow-shadow{display:block;position:relative;height:100%;width:100%;pointer-events:all}:host .overflow-shadow.shadow-left{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px);mask-image:linear-gradient(90deg, transparent 0px, black 45px)}:host .overflow-shadow.shadow-right{-webkit-mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%)}:host .overflow-shadow.shadow-both{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%)}";
const IxTabsStyle0 = tabsCss;

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectedChange = createEvent(this, "selectedChange", 7);
        this.windowStartSize = window.innerWidth;
        this.clickAction = {
            timeout: null,
            isClick: true,
        };
        this.small = false;
        this.rounded = false;
        this.selected = 0;
        this.layout = 'auto';
        this.placement = 'bottom';
        this.totalItems = 0;
        this.currentScrollAmount = 0;
        this.scrollAmount = 100;
        this.scrollActionAmount = 0;
    }
    get arrowLeftElement() {
        return this.hostElement.shadowRoot.querySelector('[data-arrow-left]');
    }
    get arrowRightElement() {
        return this.hostElement.shadowRoot.querySelector('[data-arrow-right]');
    }
    onWindowResize() {
        this.totalItems = 0;
        this.totalItems = this.getTabs().length;
        if (this.windowStartSize === 0)
            return (this.windowStartSize = window.innerWidth);
        this.move(this.windowStartSize - window.innerWidth);
        this.windowStartSize = window.innerWidth;
    }
    getTabs() {
        return Array.from(this.hostElement.querySelectorAll('ix-tab-item'));
    }
    getTab(tabIndex) {
        return this.getTabs()[tabIndex];
    }
    getTabsWrapper() {
        return this.hostElement.shadowRoot.querySelector('.items-content');
    }
    showArrows() {
        try {
            const tabWrapper = this.getTabsWrapper();
            return (tabWrapper.scrollWidth >
                Math.ceil(tabWrapper.getBoundingClientRect().width) &&
                this.layout === 'auto');
        }
        catch (error) {
            return false;
        }
    }
    showPreviousArrow() {
        try {
            return this.showArrows() && this.scrollActionAmount < 0;
        }
        catch (error) {
            return false;
        }
    }
    showNextArrow() {
        try {
            const tabWrapper = this.getTabsWrapper();
            const tabWrapperRect = tabWrapper.getBoundingClientRect();
            return (this.showArrows() &&
                this.scrollActionAmount >
                    (tabWrapper.scrollWidth - tabWrapperRect.width) * -1);
        }
        catch (error) {
            return false;
        }
    }
    getArrowStyle(condition) {
        return {
            opacity: condition ? '1' : '0',
            zIndex: condition ? '1' : '-1',
        };
    }
    move(amount, click = false) {
        const tabWrapper = this.getTabsWrapper();
        const maxScrollWidth = (tabWrapper.scrollWidth - tabWrapper.getBoundingClientRect().width) * -1;
        amount = this.currentScrollAmount + amount;
        amount = amount > 0 ? 0 : amount < maxScrollWidth ? maxScrollWidth : amount;
        const styles = [
            `transform: translateX(${amount}px);`,
            click ? 'transition: all ease-in-out 400ms;' : '',
        ].join('');
        tabWrapper.setAttribute('style', styles);
        if (click)
            this.currentScrollAmount = this.scrollActionAmount = amount;
        else
            this.scrollActionAmount = amount;
    }
    moveTabToView(tabIndex) {
        if (!this.showArrows())
            return;
        const tab = this.getTab(tabIndex).getBoundingClientRect();
        const amount = tab.x * -1;
        this.move(amount, true);
    }
    setSelected(index) {
        this.selected = index;
    }
    clickTab(index) {
        if (this.dragStop()) {
            return;
        }
        const { defaultPrevented } = this.selectedChange.emit(index);
        if (defaultPrevented) {
            return;
        }
        this.setSelected(index);
        this.moveTabToView(index);
    }
    dragStart(element, event) {
        if (!this.showArrows())
            return;
        if (event.button > 0)
            return;
        this.clickAction.timeout =
            this.clickAction.timeout === null
                ? setTimeout(() => (this.clickAction.isClick = false), 300)
                : null;
        const tabPositionX = parseFloat(window.getComputedStyle(element).left);
        const mousedownPositionX = event.clientX;
        const move = (event) => this.dragMove(event, tabPositionX, mousedownPositionX);
        window.addEventListener('mouseup', () => {
            window.removeEventListener('mousemove', move, false);
            this.dragStop();
        });
        window.addEventListener('mousemove', move, false);
    }
    dragMove(event, tabX, mousedownX) {
        this.move(event.clientX + tabX - mousedownX);
    }
    dragStop() {
        clearTimeout(this.clickAction.timeout);
        this.clickAction.timeout = null;
        if (this.clickAction.isClick)
            return false;
        this.currentScrollAmount = this.scrollActionAmount;
        this.clickAction.isClick = true;
        return true;
    }
    componentWillLoad() {
        const tabs = this.getTabs();
        tabs.map((element, index) => {
            if (this.small)
                element.setAttribute('small', 'true');
            if (this.rounded)
                element.setAttribute('rounded', 'true');
            element.setAttribute('layout', this.layout);
            element.setAttribute('selected', index === this.selected ? 'true' : 'false');
            element.setAttribute('placement', this.placement);
        });
    }
    componentDidRender() {
        const tabs = this.getTabs();
        this.totalItems = tabs.length;
        tabs.map((element, index) => {
            element.setAttribute('selected', index === this.selected ? 'true' : 'false');
        });
    }
    componentWillRender() {
        requestAnimationFrameNoNgZone(() => {
            const showNextArrow = this.showNextArrow();
            const previousArrow = this.showPreviousArrow();
            Object.assign(this.arrowLeftElement.style, this.getArrowStyle(previousArrow));
            Object.assign(this.arrowRightElement.style, this.getArrowStyle(showNextArrow));
        });
    }
    componentDidLoad() {
        const tabs = this.getTabs();
        tabs.forEach((element) => {
            element.addEventListener('mousedown', (event) => this.dragStart(element, event));
        });
    }
    onTabClick(event) {
        if (event.defaultPrevented) {
            return;
        }
        const target = event.target;
        const tabs = this.getTabs();
        tabs.forEach((tab, index) => {
            if (!tab.disabled && tab === target) {
                this.clickTab(index);
            }
        });
    }
    render() {
        return (h(Host, { key: '44c009492a3faabd3dc4266f6a4070037f590caa' }, h("div", { key: 'c002c0b7c606bf6dd37738f2c8b233ed0556ae24', class: "arrow", "data-arrow-left": true, onClick: () => this.move(this.scrollAmount, true) }, h("ix-icon", { key: '30291a5baf33ad74ca4d4cdd52aa3de6fdaac6f5', name: 'chevron-left-small' })), h("div", { key: 'fd0842c04c463afb21e29bfb64a32189550204f0', class: {
                'tab-items': true,
                'overflow-shadow': true,
                'shadow-left': this.showPreviousArrow(),
                'shadow-right': this.showNextArrow(),
                'shadow-both': this.showNextArrow() && this.showPreviousArrow(),
            } }, h("div", { key: 'b62dda398149a5eef215992b4a9ce5e297fa803f', class: "items-content" }, h("slot", { key: '0383abae773ba6f7f5b4ebd9e76b4a20c9a18732' }))), h("div", { key: '7ef4269bac60f31a97ae5affa4574bbab4ba2726', class: "arrow right", "data-arrow-right": true, onClick: () => this.move(-this.scrollAmount, true) }, h("ix-icon", { key: '9071de44d99c4650f6ad432b40ca6592e4fa9045', name: 'chevron-right-small' }))));
    }
    get hostElement() { return getElement(this); }
};
Tabs.style = IxTabsStyle0;

export { TabItem as ix_tab_item, Tabs as ix_tabs };

//# sourceMappingURL=ix-tab-item_2.entry.js.map