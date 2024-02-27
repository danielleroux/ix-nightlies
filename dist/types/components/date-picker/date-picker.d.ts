import { EventEmitter } from '../../stencil-public-runtime';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';
import { DateTime } from 'luxon';
export type DateChangeEvent = {
    from: string;
    to: string;
};
export type DateTimeCorners = DateTimeCardCorners;
export declare class DatePicker {
    hostElement: HTMLIxDatePickerElement;
    /**
     * Date format string.
     * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
     */
    format: string;
    /**
     * If true a date-range can be selected (from/to).
     */
    range: boolean;
    /**
     * Corner style
     */
    corners: DateTimeCardCorners;
    /**
     * The selected starting date. If the date-picker-rework is not in range mode this is the selected date.
     * Format has to match the `format` property.
     *
     * @since 1.1.0
     */
    from: string | undefined;
    watchFromPropHandler(newValue: string): void;
    /**
     * The selected end date. If the the date-picker-rework is not in range mode this property has no impact.
     * Format has to match the `format` property.
     *
     * @since 1.1.0
     */
    to: string | undefined;
    watchToPropHandler(newValue: string): void;
    /**
     * The earliest date that can be selected by the date picker.
     * If not set there will be no restriction.
     *
     * @since 1.1.0
     */
    minDate: string;
    /**
     * The latest date that can be selected by the date picker.
     * If not set there will be no restriction.
     *
     * @since 1.1.0
     */
    maxDate: string;
    /**
     * Text of the button that confirms date selection.
     *
     * @since 1.1.0
     * @deprecated since 2.1.0. Use `i18nDone`
     */
    textSelectDate: string;
    /**
     * Text of date select button
     *
     * @since 2.1.0
     */
    i18nDone: string;
    /**
     * The index of which day to start the week on, based on the Locale#weekdays array.
     * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
     *
     * @since 2.1.0
     */
    weekStartIndex: number;
    /**
     * Format of time string
     * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
     *
     * @since 2.1.0
     */
    locale: string;
    onLocaleChange(): void;
    /**
     * @deprecated Not supported since 2.0.0.
     */
    individual: boolean;
    /**
     * Default behavior of the done event is to join the two events (date and time) into one combined string output.
     * This combination can be configured over the delimiter
     *
     * @since 1.1.0
     * @deprecated Not used anymore see `this.dateChange`
     */
    eventDelimiter: string;
    /** @internal */
    standaloneAppearance: boolean;
    /** @internal */
    today: string;
    /**
     * Triggers if the date selection changes.
     * Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
     *
     * @since 2.1.0
     */
    dateChange: EventEmitter<DateChangeEvent>;
    /**
     * Triggers if the date selection changes.
     * Only triggered if date-picker-rework is in range mode.
     *
     * @since 2.1.0
     */
    dateRangeChange: EventEmitter<DateChangeEvent>;
    /**
     * Date selection confirmed via button action
     *
     * @since 1.1.0
     */
    dateSelect: EventEmitter<DateChangeEvent>;
    /**
     * Date selection confirmed via button action
     *
     * @deprecated NOT getting dispatched after 2.0.0. Use `dateSelect`.
     */
    done: EventEmitter<string>;
    /**
     * Get the currently selected date-range.
     */
    getCurrentDate(): Promise<{
        from: string;
        to: string;
    }>;
    currFromDate: DateTime;
    currToDate: DateTime;
    selectedYear: number;
    tempYear: number;
    startYear: number;
    endYear: number;
    selectedMonth: number;
    tempMonth: number;
    dropdownButtonRef: HTMLElement;
    yearContainerRef: HTMLElement;
    dayNames: string[];
    monthNames: string[];
    firstMonthRef: HTMLElement;
    focusedDay: number;
    focusedDayElem: HTMLElement;
    private isDayFocus;
    private monthChangedFromFocus;
    private readonly DAYS_IN_WEEK;
    private calendar;
    handleKeyUp(event: KeyboardEvent): void;
    private getDaysInCurrentMonth;
    private getDateTimeNow;
    onDayBlur(): void;
    onDayFocus(): void;
    componentWillLoad(): void;
    componentWillRender(): void;
    componentDidRender(): void;
    private setTranslations;
    /**
     * Rotate the WeekdayNames array.
     * Based on the position that should be the new 0-index.
     */
    private rotateWeekDayNames;
    private onDone;
    private calculateCalendar;
    private selectTempYear;
    private focusMonth;
    private infiniteScrollYears;
    private selectMonth;
    private changeToAdjacentMonth;
    private selectDay;
    private onDateChange;
    private getDayClasses;
    private isWithinMinMaxYear;
    private isWithinMinMaxMonth;
    private isWithinMinMaxDate;
    private renderYears;
    render(): any;
}
