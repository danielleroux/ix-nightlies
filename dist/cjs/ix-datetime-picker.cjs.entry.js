'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const datetimePickerCss = ":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .min-width{width:-moz-min-content;width:min-content}:host .no-padding{padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date{left:unset !important}}:host .individual{box-shadow:none;border:none}:host .btn-select-date{position:absolute;bottom:1rem;right:1rem;left:1rem}";
const IxDatetimePickerStyle0 = datetimePickerCss;

const DatetimePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.done = index.createEvent(this, "done", 7);
        this.timeChange = index.createEvent(this, "timeChange", 7);
        this.dateChange = index.createEvent(this, "dateChange", 7);
        this.dateSelect = index.createEvent(this, "dateSelect", 7);
        this.range = true;
        this.showHour = true;
        this.showMinutes = true;
        this.showSeconds = true;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.dateFormat = 'yyyy/LL/dd';
        this.timeFormat = 'HH:mm:ss';
        this.from = undefined;
        this.to = undefined;
        this.time = undefined;
        this.showTimeReference = undefined;
        this.timeReference = undefined;
        this.textSelectDate = undefined;
        this.i18nDone = 'Done';
        this.weekStartIndex = 0;
        this.locale = undefined;
        this.eventDelimiter = ' - ';
    }
    async onDone() {
        var _a;
        const date = await this.datePickerElement.getCurrentDate();
        const time = await this.timePickerElement.getCurrentTime();
        this.dateSelect.emit({
            from: date.from,
            to: date.to,
            time: time,
        });
        this.done.emit([date.from, (_a = date.to) !== null && _a !== void 0 ? _a : '', time].join(this.eventDelimiter));
    }
    async onDateChange(event) {
        event.preventDefault();
        event.stopPropagation();
        const { detail: date } = event;
        this.dateChange.emit(date);
    }
    async onTimeChange(event) {
        event.preventDefault();
        event.stopPropagation();
        const { detail: time } = event;
        this.timeChange.emit(time);
    }
    render() {
        return (index.h(index.Host, { key: '7aa5e453963c62a4c168f2897f5408363f5c3d20' }, index.h("ix-layout-grid", { key: '5f47e5e23adb80a89591a1a2aeaa59531b963f1c', class: "no-padding" }, index.h("ix-row", { key: '8bd9fc26a2ccfae88142350ca76a0ef203ffaaa9' }, index.h("ix-col", { key: 'f2dc175c68cfaa2659680ca0c57af20f727aee2b', class: "no-padding" }, index.h("ix-date-picker", { key: 'a8712aad46e1c4f642ad0d0f1c1da865c1b111b1', ref: (ref) => (this.datePickerElement = ref), corners: "left", range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, standaloneAppearance: false, locale: this.locale })), index.h("ix-col", { key: 'ad944278fd9b15feeec3f3cb87b159c02a9e3ea1', class: "no-padding" }, index.h("ix-time-picker", { key: 'aea360fe3436838190a32722498b4085a7cc2014', class: "min-width", ref: (ref) => (this.timePickerElement = ref), corners: "right", standaloneAppearance: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, time: this.time }))), index.h("ix-row", { key: 'cdfc9c5611a06d928503e1c97a32eabca8db1c91' }, index.h("ix-col", { key: 'f1d139a978e450241f14a6907f708404c44f2596' }, index.h("ix-button", { key: 'd79116b7084cffcde9705908d0ed174fc988f829', class: "btn-select-date btn-md-width", onClick: () => this.onDone() }, this.textSelectDate || this.i18nDone))))));
    }
};
DatetimePicker.style = IxDatetimePickerStyle0;

exports.ix_datetime_picker = DatetimePicker;

//# sourceMappingURL=ix-datetime-picker.cjs.entry.js.map