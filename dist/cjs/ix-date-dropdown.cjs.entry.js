'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const luxon = require('./luxon-702fbf4c.js');

const dateDropdownCss = ":host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}@media (max-width: 48em){:host .min-width{width:-moz-min-content;width:min-content}}@media (min-width: 48em){:host .border-right{border-right:var(--theme-x-weak-bdr-2)}}:host ix-button{width:100%}:host .max-height{max-height:-moz-max-content;max-height:max-content}:host .no-margin{margin:0;padding:0}:host .pull-right{float:right;padding:0.25rem 1rem}";
const IxDateDropdownStyle0 = dateDropdownCss;

const DateDropdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateRangeChange = index.createEvent(this, "dateRangeChange", 7);
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
        this.today = luxon.DateTime_1.now().toISO();
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
        return (index.h(index.Host, { key: '587a80ff64848ac3072ae04a27573f83e1e11fd8' }, index.h("ix-button", { key: '54dce5bf9e30572642386c16c7f18e69e55f3fd1', "data-date-dropdown-trigger": true, variant: "primary", icon: "history", ref: (ref) => (this.triggerRef = ref) }, this.getButtonLabel()), index.h("ix-dropdown", { key: '4292a46172362908d80a49874b0e4a62ae0461e9', "data-date-dropdown": true, class: "min-width max-height", trigger: this.triggerRef, "close-behavior": "outside", placement: "bottom-start", onShowChanged: ({ detail: show }) => {
                if (!show &&
                    this.selectedDateRangeId === 'custom' &&
                    this.datePickerTouched) {
                    this.onDateSelect(this.currentRangeValue);
                }
            } }, index.h("ix-layout-grid", { key: '9d92b3fd14fb2546fe9f6b588e048ad9048ed99e', "no-margin": "true" }, index.h("ix-row", { key: 'ea35e1f9c8df2f1bed99dff82ffcf57206864d47' }, ((_a = this.dateRangeOptions) === null || _a === void 0 ? void 0 : _a.length) > 1 && (index.h("ix-col", { class: {
                'no-margin': true,
                'border-right': this.selectedDateRangeId === 'custom',
            } }, this.dateRangeOptions.map((dateRangeOption) => (index.h("ix-dropdown-item", { label: dateRangeOption.label, onClick: () => this.onRangeListSelect(dateRangeOption.id), checked: this.selectedDateRangeId === dateRangeOption.id }))), index.h("div", { hidden: !this.customRangeAllowed }, index.h("ix-dropdown-item", { label: this.i18nCustomItem, checked: this.selectedDateRangeId === 'custom', onClick: () => this.onRangeListSelect('custom') })))), index.h("ix-col", { key: '39d788b4f948826461facbf8f0510d871416a2a3', class: "no-margin" }, this.selectedDateRangeId === 'custom' && (index.h(index.Fragment, null, index.h("ix-date-picker", { standaloneAppearance: false, onDateChange: (e) => {
                e.stopPropagation();
                this.currentRangeValue = Object.assign(Object.assign({}, e.detail), { id: 'custom' });
                this.datePickerTouched = true;
            }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, range: this.range, from: this.from || ((_b = this.currentRangeValue) === null || _b === void 0 ? void 0 : _b.from), to: this.to || ((_c = this.currentRangeValue) === null || _c === void 0 ? void 0 : _c.to), minDate: this.minDate, maxDate: this.maxDate, today: this.today }), index.h("div", { class: "pull-right" }, index.h("ix-button", { onClick: () => {
                this.onDateSelect(this.currentRangeValue);
            } }, this.i18nDone))))))))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "dateRangeId": ["onDateRangeIdChange"],
        "to": ["onDateRangeIdChange"],
        "from": ["onDateRangeIdChange"],
        "dateRangeOptions": ["onDateRangeOptionsChange"]
    }; }
};
DateDropdown.style = IxDateDropdownStyle0;

exports.ix_date_dropdown = DateDropdown;

//# sourceMappingURL=ix-date-dropdown.cjs.entry.js.map