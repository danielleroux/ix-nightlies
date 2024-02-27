export type DateDropdownOption = {
    id: string;
    label: string;
    from: string;
    to: string;
};
export type DateRangeChangeEvent = {
    id: string;
    from: string;
    to: string;
};
/**
 * @since 2.1.0
 */
export declare class DateDropdown {
    hostElement: HTMLIxDateDropdownElement;
    /**
     * Date format string.
     * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
     */
    format: string;
    /**
     * If true a range of dates can be selected.
     */
    range: boolean;
    /**
     * Picker date. If the picker is in range mode this property is the start date.
     * If set to `null` no default start date will be pre-selected.
     *
     * Format is based on `format`
     */
    from: string;
    /**
     * Picker date. If the picker is in range mode this property is the end date.
     * If the picker is not in range mode leave this value `null`
     *
     * Format is based on `format`
     */
    to: string;
    /**
     * The earliest date that can be selected by the date picker.
     * If not set there will be no restriction.
     */
    minDate: string;
    /**
     * The latest date that can be selected by the date picker.
     * If not set there will be no restriction.
     */
    maxDate: string;
    /**
     * Used to set the initial select date range as well as the button name,
     * if not set or no according date range label is found, nothing will be selected
     */
    dateRangeId: string;
    onDateRangeIdChange(): void;
    /**
     * Controls whether the user is allowed to pick custom date ranges in the component.
     * When set to 'true', the user can select a custom date range using the date picker.
     * When set to 'false', only predefined time date ranges are available for selection.
     */
    customRangeAllowed: boolean;
    /**
     * An array of predefined date range options for the date picker.
     * Each option is an object with a label describing the range and a function
     * that returns the start and end dates of the range as a DateRangeOption object.
     *
     * Example format:
     *   {
     *     id: 'some unique id',
     *     label: 'Name of the range',
     *     from: undefined, to: '2023/03/29'
     *   },
     *   // ... other predefined date range options ...
     */
    dateRangeOptions: DateDropdownOption[];
    onDateRangeOptionsChange(): void;
    /**
     * Text for custom dropdown item. Will be used for translation.
     */
    i18nCustomItem: string;
    /**
     * Text for the done button. Will be used for translation.
     */
    i18nDone: string;
    /**
     * Text for the done button. Will be used for translation.
     */
    i18nNoRange: string;
    /** @internal */
    today: string;
    /**
     * EventEmitter for date range change events.
     *
     * This event is emitted when the date range changes within the component.
     * The event payload contains information about the selected date range.
     */
    private dateRangeChange;
    private selectedDateRangeId;
    private currentRangeValue;
    private triggerRef;
    private datePickerTouched;
    componentWillLoad(): void;
    /**
     * Retrieves the currently selected date range from the component.
     * This method returns the selected date range as a `DateChangeEvent` object.
     */
    getDateRange(): Promise<DateRangeChangeEvent>;
    private initialize;
    private onDateSelect;
    private onRangeListSelect;
    private setDateRangeSelection;
    private closeDropdown;
    private getButtonLabel;
    render(): any;
}
