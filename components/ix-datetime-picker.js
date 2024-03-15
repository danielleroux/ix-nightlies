import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$c } from './button.js';
import { d as defineCustomElement$b } from './col.js';
import { d as defineCustomElement$a } from './date-picker.js';
import { d as defineCustomElement$9 } from './date-time-card.js';
import { d as defineCustomElement$8 } from './dropdown.js';
import { d as defineCustomElement$7 } from './icon-button.js';
import { d as defineCustomElement$6 } from './layout-grid.js';
import { d as defineCustomElement$5 } from './row.js';
import { d as defineCustomElement$4 } from './spinner.js';
import { d as defineCustomElement$3 } from './time-picker.js';
import { d as defineCustomElement$2 } from './typography.js';

const datetimePickerCss = ":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .min-width{width:-moz-min-content;width:min-content}:host .no-padding{padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date{left:unset !important}}:host .individual{box-shadow:none;border:none}:host .btn-select-date{position:absolute;bottom:1rem;right:1rem;left:1rem}";
const IxDatetimePickerStyle0 = datetimePickerCss;

const DatetimePicker = /*@__PURE__*/ proxyCustomElement(class DatetimePicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.done = createEvent(this, "done", 7);
        this.timeChange = createEvent(this, "timeChange", 7);
        this.dateChange = createEvent(this, "dateChange", 7);
        this.dateSelect = createEvent(this, "dateSelect", 7);
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
        return (h(Host, { key: '83ee67741b982fbf3a6191c04fa3edbbdb6e6f44' }, h("ix-layout-grid", { key: 'f5f2c66badc930b769638f8f087058b51e44aca7', class: "no-padding" }, h("ix-row", { key: '15361bfa7b0cba0688507273601701160016d69b' }, h("ix-col", { key: 'c4d1d8a41b939e7970277d7a8d9a1c68db7bfa91', class: "no-padding" }, h("ix-date-picker", { key: '77bc6717428ef6fd131cd364b15b5e62a79e8f7f', ref: (ref) => (this.datePickerElement = ref), corners: "left", range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, standaloneAppearance: false, locale: this.locale })), h("ix-col", { key: '52d25a39e84d6e0bc35bfe2159c368d2611570c3', class: "no-padding" }, h("ix-time-picker", { key: 'c19954e799ec9a0f5afb7df35472e58911ea7209', class: "min-width", ref: (ref) => (this.timePickerElement = ref), corners: "right", standaloneAppearance: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, time: this.time }))), h("ix-row", { key: 'cc6b061a09a9e3b8e06d7acd6bfe801dc884cc92' }, h("ix-col", { key: '86d98b8b9d25f0d77707c7104ed3b53efed3fd04' }, h("ix-button", { key: '5e843ec14cc32176420a8304779e7563117af40d', class: "btn-select-date btn-md-width", onClick: () => this.onDone() }, this.textSelectDate || this.i18nDone))))));
    }
    static get style() { return IxDatetimePickerStyle0; }
}, [1, "ix-datetime-picker", {
        "range": [4],
        "showHour": [4, "show-hour"],
        "showMinutes": [4, "show-minutes"],
        "showSeconds": [4, "show-seconds"],
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "dateFormat": [1, "date-format"],
        "timeFormat": [1, "time-format"],
        "from": [1],
        "to": [1],
        "time": [1],
        "showTimeReference": [8, "show-time-reference"],
        "timeReference": [1, "time-reference"],
        "textSelectDate": [1, "text-select-date"],
        "i18nDone": [1, "i18n-done"],
        "weekStartIndex": [2, "week-start-index"],
        "locale": [1],
        "eventDelimiter": [1, "event-delimiter"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-datetime-picker", "ix-button", "ix-col", "ix-date-picker", "ix-date-time-card", "ix-dropdown", "ix-icon-button", "ix-layout-grid", "ix-row", "ix-spinner", "ix-time-picker", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-datetime-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DatetimePicker);
            }
            break;
        case "ix-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ix-col":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ix-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ix-date-time-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ix-layout-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ix-row":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-time-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxDatetimePicker = DatetimePicker;
const defineCustomElement = defineCustomElement$1;

export { IxDatetimePicker, defineCustomElement };

//# sourceMappingURL=ix-datetime-picker.js.map