import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { c as createMutationObserver } from './mutation-observer.js';
import { h as hasSlottedElements } from './shadow-dom.js';
import { d as defineCustomElement$5 } from './group-context-menu.js';
import { d as defineCustomElement$4 } from './group-item.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './spinner.js';

const groupCss = ":host{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;position:relative;max-width:19.75rem;border-color:var(--theme-group-item--border-color)}:host .group-header{height:4rem;min-height:4rem;max-height:4rem;border-radius:var(--theme-group--border-radius) var(--theme-group--border-radius) 0 0;display:flex;background-color:var(--theme-group-item--background);color:var(--theme-group-header--color);cursor:pointer}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-group-item--background--hover)}:host .group-header:not(.disabled):not(:disabled):hover.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):active,:host .group-header:not(.disabled):not(:disabled).active{background-color:var(--theme-group-item--background--active)}:host .group-header:not(.disabled):not(:disabled):active.selected,:host .group-header:not(.disabled):not(:disabled).active.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled):focus-visible{border:1px solid var(--theme-color-focus-bdr);border-radius:var(--theme-default-border-radius) var(--theme-default-border-radius) 0px 0px;outline:none}:host .group-header.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header.selected .group-header-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header .group-header-selection-indicator{background-color:var(--theme-color-input--focus)}:host .group-header .group-header-selection-indicator.group-header-selection-indicator-item-selected{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header-clickable{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;width:100%;min-width:0}:host .group-header-selection-indicator{width:0.25rem;border-top-left-radius:var(--theme-group--border-radius)}:host .group-header-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;flex-basis:0;padding:0.5rem;padding-left:0}:host .group-header-content .group-header-props-container{width:100%}:host .group-header-content .group-header-title{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}:host .group-header-content .group-header-title>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;padding-right:0}:host .group-header-content .group-subheader{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color)}:host .expand-icon{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}:host .btn-expand-header{margin:0.5rem;margin-inline-end:0.25rem;min-width:1.5rem}:host .group-content{display:flex;flex-direction:column;gap:1px;margin-top:1px}:host .footer{visibility:collapse;height:auto;min-height:0}:host .footer-visible{visibility:visible}:host .hidden{display:none}";
const IxGroupStyle0 = groupCss;

const Group = /*@__PURE__*/ proxyCustomElement(class Group extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.selectGroup = createEvent(this, "selectGroup", 7);
        this.selectItem = createEvent(this, "selectItem", 7);
        this.collapsedChanged = createEvent(this, "collapsedChanged", 7);
        this.suppressHeaderSelection = false;
        this.header = undefined;
        this.subHeader = undefined;
        this.collapsed = true;
        this.selected = undefined;
        this.index = undefined;
        this.expandOnHeaderClick = false;
        this.itemSelected = false;
        this.dropdownTriggerRef = undefined;
        this.slotSize = this.groupItems.length;
        this.footerVisible = false;
    }
    get dropdownItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-group-dropdown-item'));
    }
    get groupItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-group-item:not(.footer)'));
    }
    get groupContent() {
        return this.hostElement.shadowRoot.querySelector('.group-content');
    }
    onExpandClick(event) {
        this.collapsed = !this.collapsed;
        this.collapsedChanged.emit(this.collapsed);
        event.stopPropagation();
    }
    onHeaderClick(event) {
        this.setGroupSelection(!this.selected);
        if (this.suppressHeaderSelection) {
            this.onExpandClick(event);
        }
    }
    onItemClick(index) {
        if (index === this.index) {
            this.index = undefined;
            this.selectItem.emit(undefined);
        }
        else {
            this.index = index;
            this.selectItem.emit(index);
        }
        if (this.index >= 0) {
            this.itemSelected = true;
        }
        else
            this.itemSelected = false;
        this.setGroupSelection(false);
    }
    setGroupSelection(selection) {
        if (!this.suppressHeaderSelection) {
            this.selected = selection;
            this.selectGroup.emit(this.selected);
        }
    }
    onSlotChange() {
        const slot = this.hostElement.shadowRoot.querySelector('slot[name="footer"]');
        if (slot) {
            this.footerVisible = hasSlottedElements(slot);
        }
    }
    componentWillRender() {
        this.groupItems.forEach((item, index) => {
            if (this.selected === true) {
                item.selected = false;
                this.index = undefined;
                this.itemSelected = false;
                return;
            }
            item.selected = index === this.index;
            item.index = index;
        });
    }
    componentDidLoad() {
        this.observer = createMutationObserver(() => {
            this.slotSize = this.groupItems.length;
        });
        this.observer.observe(this.groupContent, {
            childList: true,
        });
        this.groupContent.addEventListener('selectedChanged', (evt) => {
            this.onItemClick(evt.detail.index);
        });
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    render() {
        return (h(Host, { key: '19b497d7ad3c1aa2d71d812dbfd1089c1b50b2e3' }, h("div", { key: '03e0872848ed47560ce24a00a4825f2cb68f2664', class: {
                'group-header': true,
                expand: !this.collapsed,
                selected: this.selected,
            }, tabindex: "0" }, h("div", { key: '41e2c2452cc5eacbfdd6618d5b8355f41cc8327f', class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: '8674eb2d919f66bffff898c3a454e7ef3ef3754f', class: {
                'group-header-selection-indicator': true,
                'group-header-selection-indicator-item-selected': this.itemSelected,
            } }), h("div", { key: '19cac9b33c1cb86ae1c12850a812e0543ac1b0c1', class: "btn-expand-header" }, h("ix-icon", { key: 'eafb3888f8f934c832c2d7747eeae80646805b87', class: {
                hidden: this.slotSize === 0,
            }, name: this.collapsed ? 'chevron-right-small' : 'chevron-down-small', onClick: (e) => this.onExpandClick(e) })), h("div", { key: 'b319b2d6278a1d5e4954e9ffc96c67fd15b6a5f3', class: "group-header-content" }, this.header ? (h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader))) : null, h("slot", { key: 'a08d5753ca3d1a04769c79d8dfb9c40689f3f158', name: "header" }))), h("ix-group-context-menu", { key: '0c6452e80a02b4e1dfb1cb64195b498b399941e4' }, h("slot", { key: '4e83e0aec7a0a07316bce599fb67137f37227323', name: "dropdown" }))), h("div", { key: 'b72a5a7808c759ec319baa90e3961df273569e09', class: {
                'group-content': true,
            } }, !this.collapsed ? (h(Fragment, null, h("slot", null), h("ix-group-item", { suppressSelection: true, focusable: false, class: {
                footer: true,
                'footer-visible': this.footerVisible,
            } }, h("slot", { name: "footer", onSlotchange: () => this.onSlotChange() })))) : null)));
    }
    get hostElement() { return this; }
    static get style() { return IxGroupStyle0; }
}, [1, "ix-group", {
        "suppressHeaderSelection": [4, "suppress-header-selection"],
        "header": [1],
        "subHeader": [1, "sub-header"],
        "collapsed": [1540],
        "selected": [1540],
        "index": [1538],
        "expandOnHeaderClick": [4, "expand-on-header-click"],
        "itemSelected": [32],
        "dropdownTriggerRef": [32],
        "slotSize": [32],
        "footerVisible": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-group", "ix-group-context-menu", "ix-group-item", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Group);
            }
            break;
        case "ix-group-context-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-group-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxGroup = Group;
const defineCustomElement = defineCustomElement$1;

export { IxGroup, defineCustomElement };

//# sourceMappingURL=ix-group.js.map