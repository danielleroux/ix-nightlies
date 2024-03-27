'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const shadowDom = require('./shadow-dom-73f9d553.js');

const groupContextMenuCss = ":host{display:block;position:relative;height:2rem;width:2rem;margin-block-start:0.3125rem;margin-inline-end:0.3125rem;margin-inline-start:auto}:host .hide{visibility:collapse}";
const IxGroupContextMenuStyle0 = groupContextMenuCss;

const GroupContextMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showContextMenu = false;
    }
    getTrigger() {
        return this.hostElement;
    }
    configureDropdown(dropdownElement, triggerElement) {
        dropdownElement.positioningStrategy = 'fixed';
        dropdownElement.trigger = triggerElement;
    }
    onSlotChange() {
        const slot = this.hostElement.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const elements = shadowDom.getSlottedElements(slot);
        this.showContextMenu = elements.length !== 0;
        const dropdownElement = elements.find((elm) => elm.tagName === 'IX-DROPDOWN');
        const triggerElement = this.getTrigger();
        if (!triggerElement) {
            return;
        }
        if (!dropdownElement) {
            return;
        }
        this.configureDropdown(dropdownElement, triggerElement);
    }
    render() {
        return (index.h(index.Host, { key: 'f709297153c95aae9ae99750d6eef9bb93b6e93b' }, index.h("ix-icon-button", { key: 'da299782cd2d0fbf3da4ffebedbd69f3a5f24bf9', class: { hide: !this.showContextMenu }, size: "24", ghost: true, icon: 'context-menu' }), index.h("slot", { key: '8557ba5e78f8098a9defdf3f966e83046522c2ae', onSlotchange: () => this.onSlotChange() })));
    }
    get hostElement() { return index.getElement(this); }
};
GroupContextMenu.style = IxGroupContextMenuStyle0;

const groupItemCss = ":host{display:flex;min-height:2.25rem;height:2.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host>button{display:flex;height:100%;width:100%;align-items:center;justify-content:flex-start;position:relative;outline:none;background-color:var(--theme-group-item--background);border:1px solid transparent;color:var(--theme-color-std-text);padding-left:2.5rem}:host>button:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host ix-icon{margin-right:0.25rem;margin-top:-0.125rem}:host .group-entry-selection-indicator{position:absolute;left:-1px;height:calc(100% + 2px);width:0.25rem}:host .group-entry-text{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-entry-text-secondary{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--theme-color-soft-text)}:host .group-entry-text-secondary,:host .group-entry-text-secondary span{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected){border-top-width:0.062rem !important;background-color:var(--theme-color-ghost--selected)}:host(.selected) .group-entry-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host(:not(.suppress-selection):hover){background-color:var(--theme-color-ghost--selected-hover);border-color:var(--theme-group-item--border-color--hover)}:host(:not(.suppress-selection).selected:hover){background-color:var(--theme-color-ghost--selected-hover)}:host(:not(.suppress-selection):active){background-color:var(--theme-color-ghost--selected-active);border-color:var(--theme-group-item--border-color--active)}:host(:not(.suppress-selection).selected:active){background-color:var(--theme-color-ghost--selected-active)}";
const IxGroupItemStyle0 = groupItemCss;

const GroupItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.selectedChanged = index.createEvent(this, "selectedChanged", 7);
        this.icon = undefined;
        this.text = undefined;
        this.secondaryText = undefined;
        this.suppressSelection = false;
        this.selected = undefined;
        this.focusable = true;
        this.index = undefined;
    }
    clickListen() {
        if (this.suppressSelection) {
            return;
        }
        this.selectedChanged.emit(this.hostElement);
    }
    render() {
        return (index.h(index.Host, { key: '510249c40eb513c0cad7ad186f94311e86b99c1c', class: {
                selected: this.selected && !this.suppressSelection,
                'suppress-selection': this.suppressSelection,
            } }, index.h("button", { key: '58314b961969fc828b490a251eb3fc991b332356', tabindex: this.focusable ? 0 : -1 }, index.h("div", { key: '3b643550562e7368c87e4b6443a51902f63da7d5', class: "group-entry-selection-indicator" }), this.icon ? index.h("ix-icon", { size: "16", name: this.icon }) : null, this.text ? (index.h("span", { class: "group-entry-text" }, index.h("span", { title: this.text }, this.text))) : null, this.secondaryText ? (index.h("span", { class: "group-entry-text-secondary" }, index.h("span", { title: this.secondaryText }, this.secondaryText))) : null, index.h("slot", { key: '1314f12170969fd85675165af10b1bff1048f8a5' }))));
    }
    get hostElement() { return index.getElement(this); }
};
GroupItem.style = IxGroupItemStyle0;

exports.ix_group_context_menu = GroupContextMenu;
exports.ix_group_item = GroupItem;

//# sourceMappingURL=ix-group-context-menu_2.cjs.entry.js.map