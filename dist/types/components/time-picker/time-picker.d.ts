import { EventEmitter } from '../../stencil-public-runtime';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';
export type TimePickerCorners = DateTimeCardCorners;
export declare class TimePicker {
    /**
     * Format of time string
     * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
     *
     * @since 1.1.0
     */
    format: string;
    /**
     * Corner style
     */
    corners: TimePickerCorners;
    /**
     * Controls the visual presentation and styling of the component when it is displayed as a standalone element
     */
    standaloneAppearance: boolean;
    /**
     * @deprecated Not supported since 2.0.0.
     */
    individual: boolean;
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
     * Select time with format string
     * Format has to match the `format` property.
     *
     * @since 1.1.0
     */
    time: string;
    watchTimePropHandler(newValue: string): void;
    /**
     * Show time reference input
     *
     * @since 1.1.0 time reference is default aligned with format tt
     * @deprecated Since 2.0.0 time reference will be displayed depending on format.
     */
    showTimeReference?: boolean;
    /**
     * Set time reference
     */
    timeReference: 'AM' | 'PM' | undefined;
    /**
     * Text of date select button
     *
     * @since 1.1.0
     */
    textSelectTime: string;
    /**
     * Text for top label
     *
     * @since 2.1.0
     */
    textTime: string;
    /**
     * Time event
     */
    timeSelect: EventEmitter<string>;
    /**
     * Time event
     * @deprecated Will be removed in 3.0.0. Use `time-select` event.
     */
    done: EventEmitter<string>;
    /**
     * Time change event
     */
    timeChange: EventEmitter<string>;
    private _time;
    private _timeRef;
    private _formattedTime;
    componentWillLoad(): void;
    formatTime(): void;
    onInternalTimeChange(): void;
    timeUpdate(unit: 'hour' | 'minute' | 'second', value: number): number;
    changeTimeReference(): void;
    /**
     * Get the current time based on the wanted format
     */
    getCurrentTime(): Promise<string>;
    render(): any;
}
