'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const breakpoints = require('./breakpoints-5d1583fb.js');
const luxon = require('./luxon-702fbf4c.js');
const listener = require('./listener-8ba20080.js');

const colCss = ":host{position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px;padding:calc(var(--ix-layout-grid-gutter) * 0.5)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxColStyle0 = colCss;

const Col = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = undefined;
        this.sizeSm = undefined;
        this.sizeMd = undefined;
        this.sizeLg = undefined;
    }
    onResize() {
        index.forceUpdate(this);
    }
    getSize(breakpoint) {
        if (breakpoint === '') {
            return this.size;
        }
        if (breakpoint === 'sm') {
            return this.sizeSm;
        }
        if (breakpoint === 'md') {
            return this.sizeMd;
        }
        if (breakpoint === 'lg') {
            return this.sizeLg;
        }
    }
    getColumnSize() {
        let size;
        Col.Breakpoints.forEach((breakpoint) => {
            const isMediaQueryActive = breakpoint !== '' ? breakpoints.matchBreakpoint(breakpoint) : true;
            if (!isMediaQueryActive) {
                return;
            }
            const currentSize = this.getSize(breakpoint);
            if (currentSize) {
                size = currentSize;
            }
        });
        return size;
    }
    getColumnSizeStyling() {
        const size = this.getColumnSize();
        if (!size) {
            return;
        }
        if (size === 'auto') {
            return {
                flex: '0 0 auto',
                width: 'auto',
                'max-width': 'auto',
            };
        }
        const colSize = `calc(calc(${size} / var(--ix-layout-grid-columns)) * 100%)`;
        return {
            flex: `0 0 ${colSize}`,
            width: `${colSize}`,
            'max-width': `${colSize}`,
        };
    }
    render() {
        return (index.h(index.Host, { key: 'c117230044b3e1de13480314392f64373a49f2dc', style: Object.assign({}, this.getColumnSizeStyling()) }, index.h("slot", { key: '872b553d86cd17f366150cc579f7caeff8eba9d1' })));
    }
};
Col.Breakpoints = ['', 'sm', 'md', 'lg'];
Col.style = IxColStyle0;

const datePickerCss = ":host{display:block;position:relative;width:22rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .header{display:flex;align-items:center;justify-content:space-between}:host .disabled-item{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default}:host .selector{flex-basis:100%;display:flex;align-items:center;justify-content:center;padding:0.25rem 1rem}:host .selector .dropdown{color:var(--theme-menu-item--color);font-size:14px;line-height:20px}:host .selector .fontSize{font-size:16px}:host .selector .capitalize{text-transform:capitalize}:host .selector .month-dropdown-item{margin-left:4px;margin-right:4px}:host .selector .month-dropdown-item:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .selector .arrowYear{display:flex;position:relative;padding:0.75rem 2rem;align-items:center;cursor:pointer}:host .selector .arrowYear:hover{background-color:var(--theme-select-list-item--background--hover)}:host .selector .arrowYear.selected{background-color:var(--theme-select-list-item--background--selected)}:host .selector .arrowYear .arrowPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 6px)}:host .selector .arrowYear .checkPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 8px)}:host .selector .arrowYear .monthMargin{margin-left:10px}:host .wrapper{display:flex}:host .wrapper .overflow{overflow-y:scroll;max-height:250px}:host .grid{display:grid;grid-template-columns:repeat(8, 40px);grid-template-rows:repeat(7, 40px);align-items:center;justify-items:center;justify-content:center;color:var(--theme-datepicker-today--color)}:host .grid .calendar-item{position:relative;display:flex;justify-content:center;align-items:center;background-color:var(--theme-datepicker-day--background);border:1px solid var(--theme-datepicker-day--background);width:40px;height:40px;cursor:pointer}:host .grid .calendar-item:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .grid .calendar-item.today{border:1px solid var(--theme-datepicker-today--border-color)}:host .grid .calendar-item.today:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item.today:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.today.selected{box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.today.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.today.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);border:1px solid var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.today.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range);border:1px solid var(--theme-datepicker-today--border-color--range);box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.range:hover{background-color:var(--theme-datepicker-day--background--range-hover);border:1px solid var(--theme-datepicker-today--border-color--range-hover)}:host .grid .calendar-item.today.range:active{background-color:var(--theme-datepicker-day--background--range-active);border:1px solid var(--theme-datepicker-today--border-color--range-active)}:host .grid .calendar-item.today.range.disabled{background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled);border:1px solid var(--theme-datepicker-today--border-color--range-disabled)}:host .grid .calendar-item.today.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default}:host .grid .calendar-item:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.selected{background-color:var(--theme-datepicker-day--background--selected);color:var(--theme-datepicker-day--color--selected);border:1px solid var(--theme-datepicker-day--background--selected)}:host .grid .calendar-item.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range)}:host .grid .calendar-item.range:hover{background-color:var(--theme-datepicker-day--background--range-hover)}:host .grid .calendar-item.range:active{background-color:var(--theme-datepicker-day--background--range-active)}:host .grid .calendar-item.range.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled)}:host .grid .calendar-item.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled)}:host .grid .calendar-item.week-day{color:var(--theme-datepicker-weekday--color);font-size:12px;line-height:20px;border:none;background:none;cursor:initial}:host .grid .calendar-item.empty-day{border:none;background:none;cursor:initial}:host .grid .calendar-item.week-number{font-size:10px;line-height:14px;color:var(--theme-datepicker-weekday--color);border:none;background:none;cursor:initial}:host .grid .calendar-item:focus-visible{background-color:var(--theme-datepicker-day--background--selected);border:inset 1px solid var(--theme-datepicker-day--border-color--selected);color:var(--theme-datepicker-day--color--selected);font-size:14px;line-height:20px;letter-spacing:0}:host .button{display:flex;justify-content:flex-end}:host .hidden{display:none}";
const IxDatePickerStyle0 = datePickerCss;

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const DatePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateChange = index.createEvent(this, "dateChange", 7);
        this.dateRangeChange = index.createEvent(this, "dateRangeChange", 7);
        this.dateSelect = index.createEvent(this, "dateSelect", 7);
        this.done = index.createEvent(this, "done", 7);
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
        this.today = luxon.DateTime_1.now().toISO();
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
            ? luxon.DateTime_1.fromFormat(newValue, this.format)
            : undefined;
        if ((_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.isValid) {
            this.selectedYear = this.currFromDate.year;
            this.selectedMonth = this.currFromDate.month - 1;
        }
    }
    watchToPropHandler(newValue) {
        var _a;
        this.currToDate = newValue
            ? luxon.DateTime_1.fromFormat(newValue, this.format)
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
        return luxon.DateTime_1.utc(this.selectedYear, this.selectedMonth + 1).daysInMonth;
    }
    getDateTimeNow() {
        return luxon.DateTime_1.fromISO(this.today);
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
            ? luxon.DateTime_1.fromFormat(this.from, this.format)
            : undefined;
        this.currToDate = this.to
            ? luxon.DateTime_1.fromFormat(this.to, this.format)
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
        this.dayNames = this.rotateWeekDayNames(luxon.Info_1.weekdays('long', {
            locale: this.locale,
        }), this.weekStartIndex);
        this.monthNames = luxon.Info_1.months('long', {
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
        const month = luxon.DateTime_1.utc(this.selectedYear, this.selectedMonth + 1);
        const monthStart = month.startOf('month');
        const monthEnd = month.endOf('month');
        let startWeek = monthStart.weekNumber;
        let endWeek = monthEnd.weekNumber;
        let monthStartWeekDayIndex = monthStart.weekday - 1;
        let monthEndWeekDayIndex = monthEnd.weekday - 1;
        if (this.weekStartIndex !== 0) {
            // Find the positions where to start/stop counting the day-numbers based on which day the week starts
            const weekdays = luxon.Info_1.weekdays();
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
        const date = luxon.DateTime_1.fromJSDate(new Date(this.selectedYear, this.selectedMonth, selectedDay));
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
        const selectedDayObj = luxon.DateTime_1.fromJSDate(new Date(this.selectedYear, this.selectedMonth, day));
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
            ? luxon.DateTime_1.fromFormat(this.minDate, this.format).year
            : undefined;
        const maxDateYear = this.maxDate
            ? luxon.DateTime_1.fromFormat(this.maxDate, this.format).year
            : undefined;
        const isBefore = minDateYear ? year < minDateYear : false;
        const isAfter = maxDateYear ? year > maxDateYear : false;
        return !isBefore && !isAfter;
    }
    isWithinMinMaxMonth(month) {
        const minDateObj = this.minDate
            ? luxon.DateTime_1.fromFormat(this.minDate, this.format)
            : undefined;
        const maxDateObj = this.maxDate
            ? luxon.DateTime_1.fromFormat(this.maxDate, this.format)
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
            ? luxon.DateTime_1.fromFormat(this.minDate, this.format)
            : undefined;
        const _maxDate = this.maxDate
            ? luxon.DateTime_1.fromFormat(this.maxDate, this.format)
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
            rows.push(index.h("div", { key: year, class: {
                    arrowYear: true,
                    'month-dropdown-item': true,
                    'disabled-item': !this.isWithinMinMaxYear(year),
                }, onClick: (event) => this.selectTempYear(event, year), onKeyUp: (event) => {
                    if (event.key === 'Enter') {
                        this.selectTempYear(null, year);
                        this.focusMonth();
                    }
                }, tabIndex: 0 }, index.h("ix-icon", { class: {
                    hidden: this.tempYear !== year,
                    arrowPosition: true,
                }, name: "chevron-right", size: "12" }), index.h("div", { style: { 'min-width': 'max-content' } }, `${year}`)));
        }
        return rows;
    }
    render() {
        return (index.h(index.Host, { key: '2c5ad0c39f7cf3d7aa3f011b07ac702dda92feec' }, index.h("ix-date-time-card", { key: '0b5ae54b95fe9413e0371fda97ee969d86545e88', corners: this.corners, standaloneAppearance: this.standaloneAppearance }, index.h("div", { key: 'c478e154a404d446e08f92b976a8d0a0a609478b', class: "header", slot: "header" }, index.h("ix-icon-button", { key: 'bf132d6fe6b30dbbb20fabdff58f87dcfbfe968c', onClick: () => this.changeToAdjacentMonth(-1), ghost: true, icon: "chevron-left", variant: "primary", class: "arrows" }), index.h("div", { key: 'c0d285050b60f64a03e1e45d74a7d126ae641f47', class: "selector" }, index.h("ix-button", { key: '0018693b7e6b499e6ba6e11f4249b09655aadace', ghost: true, ref: (ref) => (this.dropdownButtonRef = ref) }, index.h("span", { key: '2a3b593d336151ac8a827317e8c5803f7b100f77', class: "fontSize capitalize" }, this.monthNames[this.selectedMonth], " ", this.selectedYear)), index.h("ix-dropdown", { key: '48f2c219caeaad751520d8a13da2ba8bbe159964', class: "dropdown", trigger: this.dropdownButtonRef, placement: "bottom-start" }, index.h("div", { key: '04cff2f94fc1334ef85dfb9ff6216b8ad408ea60', class: "wrapper" }, index.h("div", { key: '0f7e2f3461291f4fba9bfb20ff9c7be741a91185', class: "overflow", onScroll: () => this.infiniteScrollYears(), ref: (ref) => (this.yearContainerRef = ref) }, this.renderYears()), index.h("div", { key: '7822b1929014167197d57d03514a9c95859d1e60', class: "overflow" }, this.monthNames.map((month, index$1) => (index.h("div", { key: month, ref: (ref) => {
                if (month === this.monthNames[0]) {
                    this.firstMonthRef = ref;
                }
            }, class: {
                arrowYear: true,
                'month-dropdown-item': true,
                selected: this.tempYear === this.selectedYear &&
                    this.tempMonth === index$1,
                'disabled-item': !this.isWithinMinMaxMonth(index$1),
            }, onClick: () => this.selectMonth(index$1), onKeyUp: (event) => event.key === 'Enter' && this.selectMonth(index$1), tabIndex: 0 }, index.h("ix-icon", { class: {
                hidden: this.tempYear !== this.selectedYear ||
                    this.tempMonth !== index$1,
                checkPosition: true,
            }, name: "single-check", size: "16" }), index.h("div", null, index.h("span", { class: "capitalize monthMargin" }, `${month} ${this.tempYear}`))))))))), index.h("ix-icon-button", { key: 'f5c953e74f7439cd70066cc9b6787d9b9fbeaa5d', onClick: () => this.changeToAdjacentMonth(1), ghost: true, icon: "chevron-right", variant: "primary", class: "arrows" })), index.h("div", { key: 'd7f3fc09add9a2fc9e8a064a6aafb3ac32d92a2c', class: "grid" }, index.h("div", { key: 'e58f89a1f9a1a4a2558f82f9d6b0b6b4966a008d', class: "calendar-item week-day" }), this.dayNames.map((name) => (index.h("div", { key: name, class: "calendar-item week-day" }, name.slice(0, 3)))), this.calendar.map((week) => {
            return (index.h(index.Fragment, null, index.h("div", { class: "calendar-item week-number" }, week.weekNumber), week.dayNumbers.map((day) => (index.h("div", { key: day, id: `day-cell-${day}`, "date-calender-day": true, class: this.getDayClasses(day), onClick: () => this.selectDay(day), onKeyUp: (e) => e.key === 'Enter' && this.selectDay(day), tabIndex: day === this.focusedDay ? 0 : -1, onFocus: () => this.onDayFocus(), onBlur: () => this.onDayBlur() }, day)))));
        })), index.h("div", { key: '1bf25be4a2a5872bf374130155efaddc35c55f23', class: {
                button: true,
                hidden: !this.range || !this.standaloneAppearance,
            } }, index.h("ix-button", { key: '38fcb3335664b6c2a4c10d6379e0717cffae163d', onClick: () => this.onDone() }, this.textSelectDate || this.i18nDone)))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "from": ["watchFromPropHandler"],
        "to": ["watchToPropHandler"],
        "locale": ["onLocaleChange"]
    }; }
};
__decorate([
    listener.OnListener('keydown')
], DatePicker.prototype, "handleKeyUp", null);
DatePicker.style = IxDatePickerStyle0;

const layoutGridCss = ":host{--ix-layout-grid-gutter:24px;display:block;flex:1 1 0%;width:100%;padding-left:calc(var(--ix-layout-grid-gutter) * 0.5);padding-right:calc(var(--ix-layout-grid-gutter) * 0.5)}:host(.no-margin){padding-left:0;padding-right:0}";
const IxLayoutGridStyle0 = layoutGridCss;

const LayoutGrid = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.noMargin = false;
        this.gap = '24';
        this.columns = 12;
    }
    render() {
        return (index.h(index.Host, { key: '89d8863758f2044ad0d68491e852c5c23270ac77', class: {
                'no-margin': this.noMargin,
            }, style: {
                '--ix-layout-grid-columns': `${this.columns}`,
                '--ix-layout-grid-gutter': `${this.gap}px`,
            } }, index.h("slot", { key: '3b84d5e1a028c22943acbb845aedae43c2c33fb3' })));
    }
};
LayoutGrid.style = IxLayoutGridStyle0;

const rowCss = ":host{display:flex;flex-wrap:wrap}:host(:not(:first-of-type)){margin-block-start:var(--ix-layout-grid-row-margin, 0)}";
const IxRowStyle0 = rowCss;

const Row = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ae640297aa02dba7d4ca3f43f929ba9149889a3d' }, index.h("slot", { key: '38c1e1ee0c51c93c79e1f1a8e8c6a95e08760f24' })));
    }
};
Row.style = IxRowStyle0;

exports.ix_col = Col;
exports.ix_date_picker = DatePicker;
exports.ix_layout_grid = LayoutGrid;
exports.ix_row = Row;

//# sourceMappingURL=ix-col_4.cjs.entry.js.map