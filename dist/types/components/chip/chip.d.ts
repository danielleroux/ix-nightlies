import { EventEmitter } from '../../stencil-public-runtime';
export declare class Chip {
    el: HTMLIxChipElement;
    /**
     * Chip variant
     */
    variant: 'primary' | 'alarm' | 'critical' | 'warning' | 'info' | 'neutral' | 'success' | 'custom';
    /**
     * Determines if the chip is interactive. If false no user input (e.g. mouse states, keyboard navigation)
     * will be possible and also the close button will not be present.
     */
    active: boolean;
    /**
     * Show close icon
     */
    closable: boolean;
    /**
     * Show icon
     */
    icon: string;
    /**
     * Custom background color.
     * Only has an effect on chips with `variant='custom'`
     */
    background: string | undefined;
    /**
     * Custom font and icon color.
     * Only has an effect on chips with `variant='custom'`
     *
     * @deprecated since 2.1.0 use `chip-color`
     */
    color: string | undefined;
    /**
     * Custom font and icon color.
     * Only has an effect on chips with `variant='custom'`
     */
    chipColor: string | undefined;
    /**
     * Show chip with outline style
     */
    outline: boolean;
    /**
     * Fire event if close button is clicked
     *
     * @since 1.5.0
     */
    closeChip: EventEmitter;
    private getCloseButton;
    render(): any;
}
