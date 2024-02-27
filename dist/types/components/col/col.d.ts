import { Breakpoint } from '../utils/breakpoints';
type GridBreakpoint = Breakpoint | '';
export type ColumnSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';
/**
 * @since 2.0.0
 */
export declare class Col {
    static Breakpoints: GridBreakpoint[];
    /**
     * Size of the column
     */
    size?: ColumnSize;
    /**
     * Size of the column for sm screens
     */
    sizeSm?: ColumnSize;
    /**
     * Size of the column for md screens
     */
    sizeMd?: ColumnSize;
    /**
     * Size of the column for lg screens
     */
    sizeLg?: ColumnSize;
    onResize(): void;
    private getSize;
    private getColumnSize;
    private getColumnSizeStyling;
    render(): any;
}
export {};
