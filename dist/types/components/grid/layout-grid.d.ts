/**
 * @since 2.0.0
 */
export declare class LayoutGrid {
    /**
     * The grid will not have any horizontal padding
     */
    noMargin: boolean;
    /**
     * Grid gap
     */
    gap: '8' | '12' | '16' | '24';
    /**
     * Overwrite the default number of columns. Choose between 2 and 12 columns.
     */
    columns: number;
    render(): any;
}
