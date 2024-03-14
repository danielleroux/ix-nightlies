/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Fragment, h, Host, } from "@stencil/core";
import { DateTime, Info } from "luxon";
import { OnListener } from "../utils/listener";
export class DatePicker {
    constructor() {
        this.DAYS_IN_WEEK = 7;
        this.format = 'yyyy/LL/dd';
        this.range = true;
        this.corners = 'rounded';
        this.from = undefined;
        this.to = undefined;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.textSelectDate = undefined;
        this.i18nDone = 'Done';
        this.weekStartIndex = 0;
        this.locale = undefined;
        this.individual = true;
        this.eventDelimiter = ' - ';
        this.standaloneAppearance = true;
        this.today = DateTime.now().toISO();
        this.currFromDate = undefined;
        this.currToDate = undefined;
        this.selectedYear = undefined;
        this.tempYear = undefined;
        this.startYear = undefined;
        this.endYear = undefined;
        this.selectedMonth = undefined;
        this.tempMonth = undefined;
        this.dropdownButtonRef = undefined;
        this.yearContainerRef = undefined;
        this.dayNames = undefined;
        this.monthNames = undefined;
        this.firstMonthRef = undefined;
        this.focusedDay = 1;
        this.focusedDayElem = undefined;
    }
    watchFromPropHandler(newValue) {
        var _a;
        this.currFromDate = newValue
            ? DateTime.fromFormat(newValue, this.format)
            : undefined;
        if ((_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.isValid) {
            this.selectedYear = this.currFromDate.year;
            this.selectedMonth = this.currFromDate.month - 1;
        }
    }
    watchToPropHandler(newValue) {
        var _a;
        this.currToDate = newValue
            ? DateTime.fromFormat(newValue, this.format)
            : undefined;
        if ((_a = this.currToDate) === null || _a === void 0 ? void 0 : _a.isValid) {
            this.selectedYear = this.currToDate.year;
            this.selectedMonth = this.currToDate.month - 1;
        }
    }
    onLocaleChange() {
        this.setTranslations();
    }
    /**
     * Get the currently selected date-range.
     */
    async getCurrentDate() {
        var _a, _b, _c, _d;
        const _from = ((_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.isValid)
            ? (_b = this.currFromDate) === null || _b === void 0 ? void 0 : _b.toFormat(this.format)
            : undefined;
        const _to = ((_c = this.currToDate) === null || _c === void 0 ? void 0 : _c.isValid)
            ? (_d = this.currToDate) === null || _d === void 0 ? void 0 : _d.toFormat(this.format)
            : undefined;
        if (this.range) {
            return {
                from: _from,
                to: _to,
            };
        }
        return {
            from: _from,
            to: undefined,
        };
    }
    handleKeyUp(event) {
        if (!this.isDayFocus) {
            return;
        }
        let _focusedDay = this.focusedDay;
        switch (event.key) {
            case 'ArrowLeft':
                _focusedDay--;
                break;
            case 'ArrowRight':
                _focusedDay++;
                break;
            case 'ArrowUp':
                _focusedDay = _focusedDay - 7;
                break;
            case 'ArrowDown':
                _focusedDay = _focusedDay + 7;
                break;
            default:
                return;
        }
        if (_focusedDay > this.getDaysInCurrentMonth()) {
            _focusedDay = _focusedDay - this.getDaysInCurrentMonth();
            this.changeToAdjacentMonth(1);
            this.monthChangedFromFocus = true;
        }
        else if (_focusedDay < 1) {
            this.changeToAdjacentMonth(-1);
            _focusedDay = _focusedDay + this.getDaysInCurrentMonth();
            this.monthChangedFromFocus = true;
        }
        this.focusedDay = _focusedDay;
    }
    getDaysInCurrentMonth() {
        return DateTime.utc(this.selectedYear, this.selectedMonth + 1).daysInMonth;
    }
    getDateTimeNow() {
        return DateTime.fromISO(this.today);
    }
    onDayBlur() {
        this.isDayFocus = false;
    }
    onDayFocus() {
        this.isDayFocus = true;
    }
    componentWillLoad() {
        var _a, _b, _c, _d;
        this.setTranslations();
        this.currFromDate = this.from
            ? DateTime.fromFormat(this.from, this.format)
            : undefined;
        this.currToDate = this.to
            ? DateTime.fromFormat(this.to, this.format)
            : undefined;
        const year = (_b = (_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.year) !== null && _b !== void 0 ? _b : this.getDateTimeNow().year;
        this.startYear = year - 5;
        this.endYear = year + 5;
        this.selectedMonth =
            ((_d = (_c = this.currFromDate) === null || _c === void 0 ? void 0 : _c.month) !== null && _d !== void 0 ? _d : this.getDateTimeNow().month) - 1;
        this.selectedYear = year;
        this.tempMonth = this.selectedMonth;
        this.tempYear = this.selectedYear;
    }
    componentWillRender() {
        this.calculateCalendar();
    }
    componentDidRender() {
        if (!this.monthChangedFromFocus && !this.isDayFocus) {
            return;
        }
        const dayElem = this.hostElement.shadowRoot.querySelector(`[id=day-cell-${this.focusedDay}]`);
        dayElem.focus();
    }
    setTranslations() {
        this.dayNames = this.rotateWeekDayNames(Info.weekdays('long', {
            locale: this.locale,
        }), this.weekStartIndex);
        this.monthNames = Info.months('long', {
            locale: this.locale,
        });
    }
    /**
     * Rotate the WeekdayNames array.
     * Based on the position that should be the new 0-index.
     */
    rotateWeekDayNames(weekdays, index) {
        const clone = [...weekdays];
        if (index === 0) {
            return clone;
        }
        index = -index;
        const len = weekdays.length;
        clone.push(...clone.splice(0, ((-index % len) + len) % len));
        return clone;
    }
    async onDone() {
        const date = await this.getCurrentDate();
        this.dateSelect.emit(date);
    }
    calculateCalendar() {
        const calendar = [];
        const month = DateTime.utc(this.selectedYear, this.selectedMonth + 1);
        const monthStart = month.startOf('month');
        const monthEnd = month.endOf('month');
        let startWeek = monthStart.weekNumber;
        let endWeek = monthEnd.weekNumber;
        let monthStartWeekDayIndex = monthStart.weekday - 1;
        let monthEndWeekDayIndex = monthEnd.weekday - 1;
        if (this.weekStartIndex !== 0) {
            // Find the positions where to start/stop counting the day-numbers based on which day the week starts
            const weekdays = Info.weekdays();
            const monthStartWeekDayName = weekdays[monthStart.weekday];
            monthStartWeekDayIndex = this.dayNames.findIndex((d) => d === monthStartWeekDayName);
            const monthEndWeekDayName = weekdays[monthEnd.weekday];
            monthEndWeekDayIndex = this.dayNames.findIndex((d) => d === monthEndWeekDayName);
        }
        let correctLastWeek = false;
        if (endWeek === 1) {
            endWeek = monthEnd.weeksInWeekYear + 1;
            correctLastWeek = true;
        }
        let correctFirstWeek = false;
        if (startWeek === monthStart.weeksInWeekYear) {
            startWeek = 1;
            endWeek++;
            correctFirstWeek = true;
        }
        let currDayNumber = 1;
        for (let weekIndex = startWeek; weekIndex <= endWeek && currDayNumber <= 31; weekIndex++) {
            const daysArr = [];
            for (let j = 0; j < this.DAYS_IN_WEEK && currDayNumber <= 31; j++) {
                // Display empty cells until the calender starts/has ended
                if ((weekIndex === startWeek && j < monthStartWeekDayIndex) ||
                    (weekIndex === endWeek && j > monthEndWeekDayIndex)) {
                    daysArr.push(undefined);
                }
                else {
                    daysArr.push(currDayNumber++);
                }
            }
            if (correctFirstWeek || correctLastWeek) {
                if (weekIndex === 1) {
                    calendar.push({
                        weekNumber: monthStart.weeksInWeekYear,
                        dayNumbers: daysArr,
                    });
                }
                else if (weekIndex === monthEnd.weekNumber) {
                    calendar.push({
                        weekNumber: 1,
                        dayNumbers: daysArr,
                    });
                }
                else {
                    calendar.push({
                        weekNumber: weekIndex - 1,
                        dayNumbers: daysArr,
                    });
                }
                continue;
            }
            calendar.push({
                weekNumber: weekIndex,
                dayNumbers: daysArr,
            });
        }
        this.calendar = calendar;
    }
    selectTempYear(event, year) {
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        this.tempYear = year;
    }
    focusMonth() {
        this.firstMonthRef.focus();
    }
    infiniteScrollYears() {
        const scroll = this.yearContainerRef.scrollTop;
        const maxScroll = this.yearContainerRef.scrollHeight;
        const atTop = scroll === 0;
        const atBottom = Math.round(scroll + this.yearContainerRef.offsetHeight) >= maxScroll;
        const limit = 200;
        if (this.endYear - this.startYear > limit)
            return;
        if (atTop) {
            const first = this.yearContainerRef.firstElementChild;
            this.startYear -= 5;
            this.yearContainerRef.scrollTo(0, first.offsetTop);
            return;
        }
        if (atBottom) {
            const last = this.yearContainerRef.lastElementChild;
            this.endYear += 5;
            this.yearContainerRef.scrollTo(0, last.offsetTop);
        }
    }
    selectMonth(month) {
        this.selectedMonth = month;
        this.selectedYear = this.tempYear;
        this.tempMonth = month;
        this.hostElement.shadowRoot.querySelector('ix-dropdown').show = false;
    }
    changeToAdjacentMonth(number) {
        if (this.selectedMonth + number < 0) {
            this.selectedYear--;
            this.selectedMonth = 11;
        }
        else if (this.selectedMonth + number > 11) {
            this.selectedYear++;
            this.selectedMonth = 0;
        }
        else {
            this.selectedMonth += number;
        }
    }
    selectDay(selectedDay) {
        const date = DateTime.fromJSDate(new Date(this.selectedYear, this.selectedMonth, selectedDay));
        if (!this.range || this.currFromDate === undefined) {
            this.currFromDate = date;
            this.onDateChange();
            return;
        }
        // Reset the range selection
        if (this.currToDate !== undefined) {
            this.currFromDate = date;
            this.currToDate = undefined;
            this.onDateChange();
            return;
        }
        // Swap from/to if the second date is before the current date
        if (date < this.currFromDate) {
            this.currToDate = this.currFromDate;
            this.currFromDate = date;
            this.onDateChange();
            return;
        }
        // Set the range normally
        this.currToDate = date;
        this.onDateChange();
    }
    onDateChange() {
        this.getCurrentDate().then((date) => {
            this.dateChange.emit(date);
            if (this.range) {
                this.dateRangeChange.emit(date);
            }
        });
    }
    getDayClasses(day) {
        var _a, _b, _c, _d;
        if (!day) {
            return;
        }
        const todayObj = this.getDateTimeNow();
        const selectedDayObj = DateTime.fromJSDate(new Date(this.selectedYear, this.selectedMonth, day));
        return {
            'calendar-item': true,
            'empty-day': day === undefined,
            today: todayObj.hasSame(selectedDayObj, 'day'),
            selected: ((_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.hasSame(selectedDayObj, 'day')) ||
                ((_b = this.currToDate) === null || _b === void 0 ? void 0 : _b.hasSame(selectedDayObj, 'day')),
            range: selectedDayObj.startOf('day') > ((_c = this.currFromDate) === null || _c === void 0 ? void 0 : _c.startOf('day')) &&
                this.currToDate !== undefined &&
                selectedDayObj.startOf('day') < ((_d = this.currToDate) === null || _d === void 0 ? void 0 : _d.startOf('day')),
            disabled: !this.isWithinMinMaxDate(selectedDayObj),
        };
    }
    isWithinMinMaxYear(year) {
        const minDateYear = this.minDate
            ? DateTime.fromFormat(this.minDate, this.format).year
            : undefined;
        const maxDateYear = this.maxDate
            ? DateTime.fromFormat(this.maxDate, this.format).year
            : undefined;
        const isBefore = minDateYear ? year < minDateYear : false;
        const isAfter = maxDateYear ? year > maxDateYear : false;
        return !isBefore && !isAfter;
    }
    isWithinMinMaxMonth(month) {
        const minDateObj = this.minDate
            ? DateTime.fromFormat(this.minDate, this.format)
            : undefined;
        const maxDateObj = this.maxDate
            ? DateTime.fromFormat(this.maxDate, this.format)
            : undefined;
        const minDateMonth = minDateObj === null || minDateObj === void 0 ? void 0 : minDateObj.month;
        const maxDateMonth = maxDateObj === null || maxDateObj === void 0 ? void 0 : maxDateObj.month;
        const isBefore = minDateMonth
            ? this.tempYear === minDateObj.year && month < minDateMonth
            : false;
        const isAfter = maxDateMonth
            ? this.tempYear === maxDateObj.year && month > maxDateMonth
            : false;
        return !isBefore && !isAfter;
    }
    isWithinMinMaxDate(date) {
        const _minDate = this.minDate
            ? DateTime.fromFormat(this.minDate, this.format)
            : undefined;
        const _maxDate = this.maxDate
            ? DateTime.fromFormat(this.maxDate, this.format)
            : undefined;
        const isBefore = _minDate
            ? date.startOf('day') < _minDate.startOf('day')
            : false;
        const isAfter = _maxDate
            ? date.startOf('day') > _maxDate.startOf('day')
            : false;
        return !isBefore && !isAfter;
    }
    renderYears() {
        const rows = [];
        for (let year = this.startYear; year <= this.endYear; year++) {
            rows.push(h("div", { key: year, class: {
                    arrowYear: true,
                    'month-dropdown-item': true,
                    'disabled-item': !this.isWithinMinMaxYear(year),
                }, onClick: (event) => this.selectTempYear(event, year), onKeyUp: (event) => {
                    if (event.key === 'Enter') {
                        this.selectTempYear(null, year);
                        this.focusMonth();
                    }
                }, tabIndex: 0 }, h("ix-icon", { class: {
                    hidden: this.tempYear !== year,
                    arrowPosition: true,
                }, name: "chevron-right", size: "12" }), h("div", { style: { 'min-width': 'max-content' } }, `${year}`)));
        }
        return rows;
    }
    render() {
        return (h(Host, { key: '2c5ad0c39f7cf3d7aa3f011b07ac702dda92feec' }, h("ix-date-time-card", { key: '0b5ae54b95fe9413e0371fda97ee969d86545e88', corners: this.corners, standaloneAppearance: this.standaloneAppearance }, h("div", { key: 'c478e154a404d446e08f92b976a8d0a0a609478b', class: "header", slot: "header" }, h("ix-icon-button", { key: 'bf132d6fe6b30dbbb20fabdff58f87dcfbfe968c', onClick: () => this.changeToAdjacentMonth(-1), ghost: true, icon: "chevron-left", variant: "primary", class: "arrows" }), h("div", { key: 'c0d285050b60f64a03e1e45d74a7d126ae641f47', class: "selector" }, h("ix-button", { key: '0018693b7e6b499e6ba6e11f4249b09655aadace', ghost: true, ref: (ref) => (this.dropdownButtonRef = ref) }, h("span", { key: '2a3b593d336151ac8a827317e8c5803f7b100f77', class: "fontSize capitalize" }, this.monthNames[this.selectedMonth], " ", this.selectedYear)), h("ix-dropdown", { key: '48f2c219caeaad751520d8a13da2ba8bbe159964', class: "dropdown", trigger: this.dropdownButtonRef, placement: "bottom-start" }, h("div", { key: '04cff2f94fc1334ef85dfb9ff6216b8ad408ea60', class: "wrapper" }, h("div", { key: '0f7e2f3461291f4fba9bfb20ff9c7be741a91185', class: "overflow", onScroll: () => this.infiniteScrollYears(), ref: (ref) => (this.yearContainerRef = ref) }, this.renderYears()), h("div", { key: '7822b1929014167197d57d03514a9c95859d1e60', class: "overflow" }, this.monthNames.map((month, index) => (h("div", { key: month, ref: (ref) => {
                if (month === this.monthNames[0]) {
                    this.firstMonthRef = ref;
                }
            }, class: {
                arrowYear: true,
                'month-dropdown-item': true,
                selected: this.tempYear === this.selectedYear &&
                    this.tempMonth === index,
                'disabled-item': !this.isWithinMinMaxMonth(index),
            }, onClick: () => this.selectMonth(index), onKeyUp: (event) => event.key === 'Enter' && this.selectMonth(index), tabIndex: 0 }, h("ix-icon", { class: {
                hidden: this.tempYear !== this.selectedYear ||
                    this.tempMonth !== index,
                checkPosition: true,
            }, name: "single-check", size: "16" }), h("div", null, h("span", { class: "capitalize monthMargin" }, `${month} ${this.tempYear}`))))))))), h("ix-icon-button", { key: 'f5c953e74f7439cd70066cc9b6787d9b9fbeaa5d', onClick: () => this.changeToAdjacentMonth(1), ghost: true, icon: "chevron-right", variant: "primary", class: "arrows" })), h("div", { key: 'd7f3fc09add9a2fc9e8a064a6aafb3ac32d92a2c', class: "grid" }, h("div", { key: 'e58f89a1f9a1a4a2558f82f9d6b0b6b4966a008d', class: "calendar-item week-day" }), this.dayNames.map((name) => (h("div", { key: name, class: "calendar-item week-day" }, name.slice(0, 3)))), this.calendar.map((week) => {
            return (h(Fragment, null, h("div", { class: "calendar-item week-number" }, week.weekNumber), week.dayNumbers.map((day) => (h("div", { key: day, id: `day-cell-${day}`, "date-calender-day": true, class: this.getDayClasses(day), onClick: () => this.selectDay(day), onKeyUp: (e) => e.key === 'Enter' && this.selectDay(day), tabIndex: day === this.focusedDay ? 0 : -1, onFocus: () => this.onDayFocus(), onBlur: () => this.onDayBlur() }, day)))));
        })), h("div", { key: '1bf25be4a2a5872bf374130155efaddc35c55f23', class: {
                button: true,
                hidden: !this.range || !this.standaloneAppearance,
            } }, h("ix-button", { key: '38fcb3335664b6c2a4c10d6379e0717cffae163d', onClick: () => this.onDone() }, this.textSelectDate || this.i18nDone)))));
    }
    static get is() { return "ix-date-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["date-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["date-picker.css"]
        };
    }
    static get properties() {
        return {
            "format": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Date format string.\nSee {@link \"https://moment.github.io/luxon/#/formatting?id=table-of-tokens\"} for all available tokens."
                },
                "attribute": "format",
                "reflect": false,
                "defaultValue": "'yyyy/LL/dd'"
            },
            "range": {
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
                    "text": "If true a date-range can be selected (from/to)."
                },
                "attribute": "range",
                "reflect": false,
                "defaultValue": "true"
            },
            "corners": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DateTimeCardCorners",
                    "resolved": "\"left\" | \"right\" | \"rounded\" | \"straight\"",
                    "references": {
                        "DateTimeCardCorners": {
                            "location": "import",
                            "path": "../date-time-card/date-time-card",
                            "id": "src/components/date-time-card/date-time-card.tsx::DateTimeCardCorners"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Corner style"
                },
                "attribute": "corners",
                "reflect": false,
                "defaultValue": "'rounded'"
            },
            "from": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "The selected starting date. If the date-picker-rework is not in range mode this is the selected date.\nFormat has to match the `format` property."
                },
                "attribute": "from",
                "reflect": false
            },
            "to": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "The selected end date. If the the date-picker-rework is not in range mode this property has no impact.\nFormat has to match the `format` property."
                },
                "attribute": "to",
                "reflect": false
            },
            "minDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "The earliest date that can be selected by the date picker.\nIf not set there will be no restriction."
                },
                "attribute": "min-date",
                "reflect": false
            },
            "maxDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "The latest date that can be selected by the date picker.\nIf not set there will be no restriction."
                },
                "attribute": "max-date",
                "reflect": false
            },
            "textSelectDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }, {
                            "name": "deprecated",
                            "text": "since 2.1.0. Use `i18nDone`"
                        }],
                    "text": "Text of the button that confirms date selection."
                },
                "attribute": "text-select-date",
                "reflect": false
            },
            "i18nDone": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "Text of date select button"
                },
                "attribute": "i18n-done",
                "reflect": false,
                "defaultValue": "'Done'"
            },
            "weekStartIndex": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "The index of which day to start the week on, based on the Locale#weekdays array.\nE.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday."
                },
                "attribute": "week-start-index",
                "reflect": false,
                "defaultValue": "0"
            },
            "locale": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "Format of time string\nSee {@link \"https://moment.github.io/luxon/#/formatting?id=table-of-tokens\"} for all available tokens."
                },
                "attribute": "locale",
                "reflect": false,
                "defaultValue": "undefined"
            },
            "individual": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Not supported since 2.0.0."
                        }],
                    "text": ""
                },
                "attribute": "individual",
                "reflect": false,
                "defaultValue": "true"
            },
            "eventDelimiter": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }, {
                            "name": "deprecated",
                            "text": "Not used anymore see `this.dateChange`"
                        }],
                    "text": "Default behavior of the done event is to join the two events (date and time) into one combined string output.\nThis combination can be configured over the delimiter"
                },
                "attribute": "event-delimiter",
                "reflect": false,
                "defaultValue": "' - '"
            },
            "standaloneAppearance": {
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
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "standalone-appearance",
                "reflect": false,
                "defaultValue": "true"
            },
            "today": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "today",
                "reflect": false,
                "defaultValue": "DateTime.now().toISO()"
            }
        };
    }
    static get states() {
        return {
            "currFromDate": {},
            "currToDate": {},
            "selectedYear": {},
            "tempYear": {},
            "startYear": {},
            "endYear": {},
            "selectedMonth": {},
            "tempMonth": {},
            "dropdownButtonRef": {},
            "yearContainerRef": {},
            "dayNames": {},
            "monthNames": {},
            "firstMonthRef": {},
            "focusedDay": {},
            "focusedDayElem": {}
        };
    }
    static get events() {
        return [{
                "method": "dateChange",
                "name": "dateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "Triggers if the date selection changes.\nNote: Since 2.0.0 `dateChange` does not dispatch detail property as `string`"
                },
                "complexType": {
                    "original": "DateChangeEvent",
                    "resolved": "{ from: string; to: string; }",
                    "references": {
                        "DateChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/date-picker/date-picker.tsx",
                            "id": "src/components/date-picker/date-picker.tsx::DateChangeEvent"
                        }
                    }
                }
            }, {
                "method": "dateRangeChange",
                "name": "dateRangeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "Triggers if the date selection changes.\nOnly triggered if date-picker-rework is in range mode."
                },
                "complexType": {
                    "original": "DateChangeEvent",
                    "resolved": "{ from: string; to: string; }",
                    "references": {
                        "DateChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/date-picker/date-picker.tsx",
                            "id": "src/components/date-picker/date-picker.tsx::DateChangeEvent"
                        }
                    }
                }
            }, {
                "method": "dateSelect",
                "name": "dateSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "Date selection confirmed via button action"
                },
                "complexType": {
                    "original": "DateChangeEvent",
                    "resolved": "{ from: string; to: string; }",
                    "references": {
                        "DateChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/date-picker/date-picker.tsx",
                            "id": "src/components/date-picker/date-picker.tsx::DateChangeEvent"
                        }
                    }
                }
            }, {
                "method": "done",
                "name": "done",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "NOT getting dispatched after 2.0.0. Use `dateSelect`."
                        }],
                    "text": "Date selection confirmed via button action"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "getCurrentDate": {
                "complexType": {
                    "signature": "() => Promise<{ from: string; to: string; }>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<{ from: string; to: string; }>"
                },
                "docs": {
                    "text": "Get the currently selected date-range.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "from",
                "methodName": "watchFromPropHandler"
            }, {
                "propName": "to",
                "methodName": "watchToPropHandler"
            }, {
                "propName": "locale",
                "methodName": "onLocaleChange"
            }];
    }
}
__decorate([
    OnListener('keydown')
], DatePicker.prototype, "handleKeyUp", null);
//# sourceMappingURL=date-picker.js.map
