import { EventEmitter } from '../../stencil-public-runtime';
export type DateTimeSelectEvent = {
    from: string;
    to: string;
    time: string;
};
export type DateTimeDateChangeEvent = string | Omit<DateTimeSelectEvent, 'time'>;
export declare class DatetimePicker {
    /**
     * If true a date-range can be selected (from/to).
     */
    range: boolean;
    /**
     * Show hour input
     */
    showHour: boolean;
    /**
     * Show minutes input
     */
    showMinutes: boolean;
    /**
     * Show seconds input
     */
    showSeconds: boolean;
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
     * Date format string.
     * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
     *
     * @since 1.1.0
     */
    dateFormat: string;
    /**
     * Time format string.
     * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
     *
     * @since 1.1.0
     */
    timeFormat: string;
    /**
     * The selected starting date. If the picker is not in range mode this is the selected date.
     * Format has to match the `format` property.
     *
     * @since 1.1.0
     */
    from: string | undefined;
    /**
     * The selected end date. If the the picker is not in range mode this property has no impact.
     * Format has to match the `format` property.
     *
     * @since 1.1.0
     */
    to: string | undefined;
    /**
     * Select time with format string
     *
     * @since 1.1.0
     */
    time: string;
    /**
     * Show time reference input
     * Time reference is default aligned with @see {this.timeFormat}
     *
     * @since 1.1.0
     */
    showTimeReference: any;
    /**
     * Set time reference
     */
    timeReference: 'AM' | 'PM';
    /**
     * Text of date select button
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
    /**
     * Default behavior of the done event is to join the two events (date and time) into one combined string output.
     * This combination can be configured over the delimiter
     *
     * @since 1.1.0
     * @deprecated Not used anymore see `done` event
     */
    eventDelimiter: string;
    /**
     * Done event
     *
     * Set `doneEventDelimiter` to null or undefine to get the typed event
     * @deprecated Use `this.dateChange`
     */
    done: EventEmitter<string>;
    /**
     * Time change
     *
     * @since 1.1.0
     */
    timeChange: EventEmitter<string>;
    /**
     * Date change
     *
     * @since 1.1.0
     */
    dateChange: EventEmitter<DateTimeDateChangeEvent>;
    /**
     * Datetime selection event is fired after confirm button is pressed
     *
     * @since 1.1.0
     */
    dateSelect: EventEmitter<DateTimeSelectEvent>;
    private datePickerElement;
    private timePickerElement;
    private onDone;
    private onDateChange;
    private onTimeChange;
    render(): any;
}
