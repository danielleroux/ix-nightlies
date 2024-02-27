export type KeyValueLabelPosition = 'top' | 'left';
/**
 * @slot custom-value - Optional custom value at key value instead of text value
 *
 * @since 1.6.0
 */
export declare class KeyValue {
    /**
     * Optional key value icon
     */
    icon: string;
    /**
     * Key value label
     */
    label: string;
    /**
     * Optional key value label position - 'top' or 'left'
     */
    labelPosition: KeyValueLabelPosition;
    /**
     * Optional key value text value
     */
    value: string;
    render(): any;
}
