import { r as registerInstance, f as forceUpdate, h, H as Host, c as createEvent, F as Fragment, g as getElement } from './index-5cd176b3.js';
import { m as matchBreakpoint } from './breakpoints-d5c2f627.js';
import { D as DateTime_1, I as Info_1 } from './luxon-aa110584.js';
import { O as OnListener } from './listener-79f22b5b.js';

const colCss = ":host{position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px;padding:calc(var(--ix-layout-grid-gutter) * 0.5)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxColStyle0 = colCss;

const Col = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = undefined;
        this.sizeSm = undefined;
        this.sizeMd = undefined;
        this.sizeLg = undefined;
    }
    onResize() {
        forceUpdate(this);
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
            const isMediaQueryActive = breakpoint !== '' ? matchBreakpoint(breakpoint) : true;
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
        return (h(Host, { key: 'c117230044b3e1de13480314392f64373a49f2dc', style: Object.assign({}, this.getColumnSizeStyling()) }, h("slot", { key: '872b553d86cd17f366150cc579f7caeff8eba9d1' })));
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
        registerInstance(this, hostRef);
        this.dateChange = createEvent(this, "dateChange", 7);
        this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
        this.dateSelect = createEvent(this, "dateSelect", 7);
        this.done = createEvent(this, "done", 7);
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
        this.today = DateTime_1.now().toISO();
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
            ? DateTime_1.fromFormat(newValue, this.format)
            : undefined;
        if ((_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.isValid) {
            this.selectedYear = this.currFromDate.year;
            this.selectedMonth = this.currFromDate.month - 1;
        }
    }
    watchToPropHandler(newValue) {
        var _a;
        this.currToDate = newValue
            ? DateTime_1.fromFormat(newValue, this.format)
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
        return DateTime_1.utc(this.selectedYear, this.selectedMonth + 1).daysInMonth;
    }
    getDateTimeNow() {
        return DateTime_1.fromISO(this.today);
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
            ? DateTime_1.fromFormat(this.from, this.format)
            : undefined;
        this.currToDate = this.to
            ? DateTime_1.fromFormat(this.to, this.format)
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
        this.dayNames = this.rotateWeekDayNames(Info_1.weekdays('long', {
            locale: this.locale,
        }), this.weekStartIndex);
        this.monthNames = Info_1.months('long', {
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
        const month = DateTime_1.utc(this.selectedYear, this.selectedMonth + 1);
        const monthStart = month.startOf('month');
        const monthEnd = month.endOf('month');
        let startWeek = monthStart.weekNumber;
        let endWeek = monthEnd.weekNumber;
        let monthStartWeekDayIndex = monthStart.weekday - 1;
        let monthEndWeekDayIndex = monthEnd.weekday - 1;
        if (this.weekStartIndex !== 0) {
            // Find the positions where to start/stop counting the day-numbers based on which day the week starts
            const weekdays = Info_1.weekdays();
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
        const date = DateTime_1.fromJSDate(new Date(this.selectedYear, this.selectedMonth, selectedDay));
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
        const selectedDayObj = DateTime_1.fromJSDate(new Date(this.selectedYear, this.selectedMonth, day));
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
            ? DateTime_1.fromFormat(this.minDate, this.format).year
            : undefined;
        const maxDateYear = this.maxDate
            ? DateTime_1.fromFormat(this.maxDate, this.format).year
            : undefined;
        const isBefore = minDateYear ? year < minDateYear : false;
        const isAfter = maxDateYear ? year > maxDateYear : false;
        return !isBefore && !isAfter;
    }
    isWithinMinMaxMonth(month) {
        const minDateObj = this.minDate
            ? DateTime_1.fromFormat(this.minDate, this.format)
            : undefined;
        const maxDateObj = this.maxDate
            ? DateTime_1.fromFormat(this.maxDate, this.format)
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
            ? DateTime_1.fromFormat(this.minDate, this.format)
            : undefined;
        const _maxDate = this.maxDate
            ? DateTime_1.fromFormat(this.maxDate, this.format)
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
        return (h(Host, { key: '5b6747c0dbf6528e3bf90742097d2e0209142fd5' }, h("ix-date-time-card", { key: 'd332e24012edeb64548ded39f0ce2a3e8f8e7870', corners: this.corners, standaloneAppearance: this.standaloneAppearance }, h("div", { key: '50ed2f6798cc2958d0f84f68d254f36fb5082d62', class: "header", slot: "header" }, h("ix-icon-button", { key: '619533c4c94783d4507e1497fde743ea3c7550d3', onClick: () => this.changeToAdjacentMonth(-1), ghost: true, icon: "chevron-left", variant: "primary", class: "arrows" }), h("div", { key: '3148bd3bd051fc93328b44d1d7a7e16065dba634', class: "selector" }, h("ix-button", { key: 'b09d8cc88e2062b161777104e44fa8f9498b8b20', ghost: true, ref: (ref) => (this.dropdownButtonRef = ref) }, h("span", { key: 'c3370f2ac962a70d669b164e7a6bd7459de4b6f2', class: "fontSize capitalize" }, this.monthNames[this.selectedMonth], " ", this.selectedYear)), h("ix-dropdown", { key: 'd6133ae1820335323ae2babe9b588ac3d16b4b4e', class: "dropdown", trigger: this.dropdownButtonRef, placement: "bottom-start" }, h("div", { key: '8a58e9cfa6fb6e6900ca788316241a0dc8010803', class: "wrapper" }, h("div", { key: '26107292f53cdb1a7ed5c62d4ea59a21b8df5851', class: "overflow", onScroll: () => this.infiniteScrollYears(), ref: (ref) => (this.yearContainerRef = ref) }, this.renderYears()), h("div", { key: '34e699c477a19b235bdf7046129e282f29d8fb61', class: "overflow" }, this.monthNames.map((month, index) => (h("div", { key: month, ref: (ref) => {
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
            }, name: "single-check", size: "16" }), h("div", null, h("span", { class: "capitalize monthMargin" }, `${month} ${this.tempYear}`))))))))), h("ix-icon-button", { key: '34c2a37167375cde6225edc49a8c7b914d1d7588', onClick: () => this.changeToAdjacentMonth(1), ghost: true, icon: "chevron-right", variant: "primary", class: "arrows" })), h("div", { key: 'd1df9bdbd51a3fc776ffd1b47074f411070f9863', class: "grid" }, h("div", { key: 'e303bb7a4b7526396cc4026385e6a501671ac008', class: "calendar-item week-day" }), this.dayNames.map((name) => (h("div", { key: name, class: "calendar-item week-day" }, name.slice(0, 3)))), this.calendar.map((week) => {
            return (h(Fragment, null, h("div", { class: "calendar-item week-number" }, week.weekNumber), week.dayNumbers.map((day) => (h("div", { key: day, id: `day-cell-${day}`, "date-calender-day": true, class: this.getDayClasses(day), onClick: () => this.selectDay(day), onKeyUp: (e) => e.key === 'Enter' && this.selectDay(day), tabIndex: day === this.focusedDay ? 0 : -1, onFocus: () => this.onDayFocus(), onBlur: () => this.onDayBlur() }, day)))));
        })), h("div", { key: '58b7b297f63253238dd66d70bc8cf6420df0c449', class: {
                button: true,
                hidden: !this.range || !this.standaloneAppearance,
            } }, h("ix-button", { key: 'df9f68bcb06ffbb1b9ed0439336eaf5361b606de', onClick: () => this.onDone() }, this.textSelectDate || this.i18nDone)))));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "from": ["watchFromPropHandler"],
        "to": ["watchToPropHandler"],
        "locale": ["onLocaleChange"]
    }; }
};
__decorate([
    OnListener('keydown')
], DatePicker.prototype, "handleKeyUp", null);
DatePicker.style = IxDatePickerStyle0;

const layoutGridCss = ":host{--ix-layout-grid-gutter:24px;display:block;flex:1 1 0%;width:100%;padding-left:calc(var(--ix-layout-grid-gutter) * 0.5);padding-right:calc(var(--ix-layout-grid-gutter) * 0.5)}:host(.no-margin){padding-left:0;padding-right:0}";
const IxLayoutGridStyle0 = layoutGridCss;

const LayoutGrid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.noMargin = false;
        this.gap = '24';
        this.columns = 12;
    }
    render() {
        return (h(Host, { key: 'd3f673eeface55a4cd571acda477794c8735c5e4', class: {
                'no-margin': this.noMargin,
            }, style: {
                '--ix-layout-grid-columns': `${this.columns}`,
                '--ix-layout-grid-gutter': `${this.gap}px`,
            } }, h("slot", { key: 'e70ea397035d14b0eefc589150d1106983599cec' })));
    }
};
LayoutGrid.style = IxLayoutGridStyle0;

const rowCss = ":host{display:flex;flex-wrap:wrap}:host(:not(:first-of-type)){margin-block-start:var(--ix-layout-grid-row-margin, 0)}";
const IxRowStyle0 = rowCss;

const Row = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '2770cfaea562d4645313f6a45760f6a815008845' }, h("slot", { key: '6eeb8750c92b167909e7f0031decf80aef40662c' })));
    }
};
Row.style = IxRowStyle0;

export { Col as ix_col, DatePicker as ix_date_picker, LayoutGrid as ix_layout_grid, Row as ix_row };

//# sourceMappingURL=ix-col_4.entry.js.map