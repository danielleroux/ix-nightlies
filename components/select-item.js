import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './dropdown-item.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class IxSelectItemLabelChangeEvent extends CustomEvent {
    constructor(detail) {
        super('ix-select-item:labelChange', {
            bubbles: true,
            detail,
        });
    }
}

const selectItemCss = ":host{display:block;position:relative}:host>ix-dropdown-item{width:100%}:host ix-dropdown-item{color:var(--theme-color-std-text)}:host .select-item-checked{background-color:var(--theme-select-list-item--background--selected);--ix-dropdown-item-checked-color:var(--theme-color-std-text)}:host(.d-none){display:none}";
const IxSelectItemStyle0 = selectItemCss;

const SelectItem = /*@__PURE__*/ proxyCustomElement(class SelectItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.itemClick = createEvent(this, "itemClick", 7);
        this.label = undefined;
        this.value = undefined;
        this.selected = false;
        this.hover = false;
    }
    /**
     * @internal
     * @param event
     */
    async onItemClick(event) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        this.itemClick.emit(this.value);
    }
    componentDidRender() {
        if (!this.value) {
            throw Error('ix-select-item must have a `value` property');
        }
    }
    labelChange(newValue, oldValue) {
        this.hostElement.dispatchEvent(new IxSelectItemLabelChangeEvent({
            newValue: newValue,
            oldValue: oldValue,
        }));
    }
    render() {
        return (h(Host, { key: 'a45d19640efdebd696aa093cc723c5a9e2b2b40f' }, h("ix-dropdown-item", { key: 'db1c54dda8b6664abbd84057b05b91514e3854d7', class: {
                'select-item-checked': this.selected,
            }, checked: this.selected, label: this.label ? this.label : this.value, onItemClick: (e) => this.onItemClick(e) })));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "label": ["labelChange"]
    }; }
    static get style() { return IxSelectItemStyle0; }
}, [1, "ix-select-item", {
        "label": [513],
        "value": [520],
        "selected": [4],
        "hover": [4],
        "onItemClick": [64]
    }, undefined, {
        "label": ["labelChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-select-item", "ix-dropdown-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-select-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SelectItem);
            }
            break;
        case "ix-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { SelectItem as S, defineCustomElement as d };

//# sourceMappingURL=select-item.js.map