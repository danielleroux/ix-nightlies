/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import { requestAnimationFrameNoNgZone } from "../utils/requestAnimationFrame";
export class Tabs {
    constructor() {
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
    static get is() { return "ix-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tabs.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tabs.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Set tab items to small size"
                },
                "attribute": "small",
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
                    "text": "Set rounded tabs"
                },
                "attribute": "rounded",
                "reflect": false,
                "defaultValue": "false"
            },
            "selected": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set default selected tab by index"
                },
                "attribute": "selected",
                "reflect": false,
                "defaultValue": "0"
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
                    "text": "Set placement style"
                },
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'bottom'"
            }
        };
    }
    static get states() {
        return {
            "totalItems": {},
            "currentScrollAmount": {},
            "scrollAmount": {},
            "scrollActionAmount": {}
        };
    }
    static get events() {
        return [{
                "method": "selectedChange",
                "name": "selectedChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "`selected` property changed"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "onWindowResize",
                "target": "window",
                "capture": false,
                "passive": true
            }, {
                "name": "tabClick",
                "method": "onTabClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=tabs.js.map
