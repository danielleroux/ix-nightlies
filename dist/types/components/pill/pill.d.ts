export declare class Pill {
    el: HTMLIxPillElement;
    /**
     * Pill variant
     */
    variant: 'primary' | 'alarm' | 'critical' | 'warning' | 'info' | 'neutral' | 'success' | 'custom';
    /**
     * Show pill as outline
     */
    outline: boolean;
    /**
     * Show icon
     */
    icon: string | undefined;
    /**
     * Custom color for pill. Only working for `variant='custom'`
     */
    background: string | undefined;
    /**
     * Custom font color for pill. Only working for `variant='custom'`
     *
     * @deprecated since 2.1.0 use `pill-color`
     */
    color: string | undefined;
    /**
     * Custom font color for pill. Only working for `variant='custom'`
     */
    pillColor: string | undefined;
    /**
     * Align pill content left
     */
    alignLeft: boolean;
    render(): any;
}
