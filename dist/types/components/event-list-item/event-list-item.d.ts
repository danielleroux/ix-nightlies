import { EventEmitter } from '../../stencil-public-runtime';
export declare class EventListItem {
    /**
     * Color of the status indicator.
     * You can find a list of all available colors in our documentation.
     * Example values are `--theme-color-alarm` or `color-alarm`
     *
     * @link https://ix.siemens.io/docs/theming/colors/
     *
     * @deprecated since 2.1.0 use `item-color`
     */
    color: string;
    /**
     * Color of the status indicator.
     * You can find a list of all available colors in our documentation.
     * Example values are `--theme-color-alarm` or `color-alarm`
     *
     * @link https://ix.siemens.io/docs/theming/colors/
     */
    itemColor: string;
    /**
     * Show event list item as selected
     */
    selected: boolean;
    /**
     * Disable event list item
     */
    disabled: boolean;
    /**
     * Show chevron on right side of the event list item
     */
    chevron: boolean;
    /**
     * Event list item click
     */
    itemClick: EventEmitter;
    handleItemClick(): void;
    render(): any;
}
