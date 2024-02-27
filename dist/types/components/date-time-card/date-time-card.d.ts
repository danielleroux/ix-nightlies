export type DateTimeCardCorners = 'rounded' | 'left' | 'right' | 'straight';
/**
 * @internal
 */
export declare class DateTimeCard {
    /** @internal */
    standaloneAppearance: any;
    /**
     * set styles
     */
    individual: boolean;
    /**
     * Set corners style
     */
    corners: DateTimeCardCorners;
    private cardClasses;
    render(): any;
}
