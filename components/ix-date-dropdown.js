import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { D as DateTime_1 } from './luxon.js';
import { d as defineCustomElement$b } from './button.js';
import { d as defineCustomElement$a } from './col.js';
import { d as defineCustomElement$9 } from './date-picker.js';
import { d as defineCustomElement$8 } from './date-time-card.js';
import { d as defineCustomElement$7 } from './dropdown.js';
import { d as defineCustomElement$6 } from './dropdown-item.js';
import { d as defineCustomElement$5 } from './icon-button.js';
import { d as defineCustomElement$4 } from './layout-grid.js';
import { d as defineCustomElement$3 } from './row.js';
import { d as defineCustomElement$2 } from './spinner.js';

const dateDropdownCss = ":host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}@media (max-width: 48em){:host .min-width{width:-moz-min-content;width:min-content}}@media (min-width: 48em){:host .border-right{border-right:var(--theme-x-weak-bdr-2)}}:host ix-button{width:100%}:host .max-height{max-height:-moz-max-content;max-height:max-content}:host .no-margin{margin:0;padding:0}:host .pull-right{float:right;padding:0.25rem 1rem}";
const IxDateDropdownStyle0 = dateDropdownCss;

const DateDropdown = /*@__PURE__*/ proxyCustomElement(class DateDropdown extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
        this.datePickerTouched = false;
        this.format = 'yyyy/LL/dd';
        this.range = true;
        this.from = undefined;
        this.to = undefined;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.dateRangeId = 'custom';
        this.customRangeAllowed = true;
        this.dateRangeOptions = [];
        this.i18nCustomItem = 'Custom...';
        this.i18nDone = 'Done';
        this.i18nNoRange = 'No range set';
        this.today = DateTime_1.now().toISO();
        this.selectedDateRangeId = undefined;
        this.currentRangeValue = undefined;
        this.triggerRef = undefined;
    }
    onDateRangeIdChange() {
        this.onRangeListSelect(this.dateRangeId);
        this.onDateSelect({
            from: this.currentRangeValue.from,
            to: this.currentRangeValue.to,
            id: this.currentRangeValue.id,
        });
    }
    onDateRangeOptionsChange() {
        this.initialize();
        this.onDateRangeIdChange();
    }
    componentWillLoad() {
        this.initialize();
        this.setDateRangeSelection(this.dateRangeId);
    }
    /**
     * Retrieves the currently selected date range from the component.
     * This method returns the selected date range as a `DateChangeEvent` object.
     */
    async getDateRange() {
        return this.currentRangeValue;
    }
    initialize() {
        const isCustomRange = this.dateRangeId === 'custom' ||
            (!this.dateRangeId && !!this.from && !!this.to);
        if (isCustomRange && this.customRangeAllowed) {
            this.selectedDateRangeId = 'custom';
            this.currentRangeValue = {
                id: this.selectedDateRangeId,
                from: this.from,
                to: this.to,
            };
            return;
        }
        const isValidConfiguration = !isCustomRange && !this.from;
        if (!isValidConfiguration) {
            console.warn('"from" and "range-date-id" is provided this is an invalid combination. Using "custom".');
            this.selectedDateRangeId = 'custom';
            this.currentRangeValue = {
                id: this.selectedDateRangeId,
                from: this.from,
                to: this.to,
            };
            return;
        }
    }
    onDateSelect(rangeValue, preserveDropdown = true) {
        this.dateRangeChange.emit(rangeValue);
        if (preserveDropdown) {
            this.closeDropdown();
        }
        this.datePickerTouched = false;
    }
    onRangeListSelect(id) {
        if (this.setDateRangeSelection(id)) {
            this.onDateSelect(this.currentRangeValue);
        }
    }
    setDateRangeSelection(id) {
        this.selectedDateRangeId = id;
        const option = this.dateRangeOptions.find((range) => range.id === id);
        if (option) {
            this.currentRangeValue = option;
        }
        return option;
    }
    closeDropdown() {
        this.hostElement.shadowRoot.querySelector('ix-dropdown').show = false;
    }
    getButtonLabel() {
        var _a, _b;
        if (this.selectedDateRangeId === 'custom' && ((_a = this.currentRangeValue) === null || _a === void 0 ? void 0 : _a.from)) {
            let range = this.currentRangeValue.from;
            if (this.currentRangeValue.to) {
                range += ` - ${this.currentRangeValue.to}`;
            }
            return range;
        }
        if (!this.selectedDateRangeId) {
            return this.i18nNoRange;
        }
        if (!this.dateRangeOptions || ((_b = this.dateRangeOptions) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            return this.i18nNoRange;
        }
        const option = this.dateRangeOptions.find((option) => option.id === this.selectedDateRangeId);
        if (!option) {
            console.error(`Cannot find range option with id ${this.selectedDateRangeId}`);
            return this.i18nNoRange;
        }
        return option.label;
    }
    render() {
        var _a, _b, _c;
        return (h(Host, { key: '587a80ff64848ac3072ae04a27573f83e1e11fd8' }, h("ix-button", { key: '54dce5bf9e30572642386c16c7f18e69e55f3fd1', "data-date-dropdown-trigger": true, variant: "primary", icon: "history", ref: (ref) => (this.triggerRef = ref) }, this.getButtonLabel()), h("ix-dropdown", { key: '4292a46172362908d80a49874b0e4a62ae0461e9', "data-date-dropdown": true, class: "min-width max-height", trigger: this.triggerRef, "close-behavior": "outside", placement: "bottom-start", onShowChanged: ({ detail: show }) => {
                if (!show &&
                    this.selectedDateRangeId === 'custom' &&
                    this.datePickerTouched) {
                    this.onDateSelect(this.currentRangeValue);
                }
            } }, h("ix-layout-grid", { key: '9d92b3fd14fb2546fe9f6b588e048ad9048ed99e', "no-margin": "true" }, h("ix-row", { key: 'ea35e1f9c8df2f1bed99dff82ffcf57206864d47' }, ((_a = this.dateRangeOptions) === null || _a === void 0 ? void 0 : _a.length) > 1 && (h("ix-col", { class: {
                'no-margin': true,
                'border-right': this.selectedDateRangeId === 'custom',
            } }, this.dateRangeOptions.map((dateRangeOption) => (h("ix-dropdown-item", { label: dateRangeOption.label, onClick: () => this.onRangeListSelect(dateRangeOption.id), checked: this.selectedDateRangeId === dateRangeOption.id }))), h("div", { hidden: !this.customRangeAllowed }, h("ix-dropdown-item", { label: this.i18nCustomItem, checked: this.selectedDateRangeId === 'custom', onClick: () => this.onRangeListSelect('custom') })))), h("ix-col", { key: '39d788b4f948826461facbf8f0510d871416a2a3', class: "no-margin" }, this.selectedDateRangeId === 'custom' && (h(Fragment, null, h("ix-date-picker", { standaloneAppearance: false, onDateChange: (e) => {
                e.stopPropagation();
                this.currentRangeValue = Object.assign(Object.assign({}, e.detail), { id: 'custom' });
                this.datePickerTouched = true;
            }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, range: this.range, from: this.from || ((_b = this.currentRangeValue) === null || _b === void 0 ? void 0 : _b.from), to: this.to || ((_c = this.currentRangeValue) === null || _c === void 0 ? void 0 : _c.to), minDate: this.minDate, maxDate: this.maxDate, today: this.today }), h("div", { class: "pull-right" }, h("ix-button", { onClick: () => {
                this.onDateSelect(this.currentRangeValue);
            } }, this.i18nDone))))))))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "dateRangeId": ["onDateRangeIdChange"],
        "to": ["onDateRangeIdChange"],
        "from": ["onDateRangeIdChange"],
        "dateRangeOptions": ["onDateRangeOptionsChange"]
    }; }
    static get style() { return IxDateDropdownStyle0; }
}, [1, "ix-date-dropdown", {
        "format": [1],
        "range": [4],
        "from": [1],
        "to": [1],
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "dateRangeId": [1, "date-range-id"],
        "customRangeAllowed": [4, "custom-range-allowed"],
        "dateRangeOptions": [16],
        "i18nCustomItem": [1, "i18n-custom-item"],
        "i18nDone": [1, "i18n-done"],
        "i18nNoRange": [1, "i18n-no-range"],
        "today": [1],
        "selectedDateRangeId": [32],
        "currentRangeValue": [32],
        "triggerRef": [32],
        "getDateRange": [64]
    }, undefined, {
        "dateRangeId": ["onDateRangeIdChange"],
        "to": ["onDateRangeIdChange"],
        "from": ["onDateRangeIdChange"],
        "dateRangeOptions": ["onDateRangeOptionsChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-date-dropdown", "ix-button", "ix-col", "ix-date-picker", "ix-date-time-card", "ix-dropdown", "ix-dropdown-item", "ix-icon-button", "ix-layout-grid", "ix-row", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-date-dropdown":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DateDropdown);
            }
            break;
        case "ix-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ix-col":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ix-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ix-date-time-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ix-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-layout-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-row":
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

const IxDateDropdown = DateDropdown;
const defineCustomElement = defineCustomElement$1;

export { IxDateDropdown, defineCustomElement };

//# sourceMappingURL=ix-date-dropdown.js.map