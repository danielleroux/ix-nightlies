import { EventEmitter } from '../../stencil-public-runtime';
export type TabClickDetail = {
    nativeEvent: MouseEvent;
};
export declare class TabItem {
    /**
     * Set selected tab
     */
    selected: boolean;
    /**
     * Set disabled tab
     */
    disabled: boolean;
    /**
     * Set small size tab
     */
    small: boolean;
    /**
     * Set icon only tab
     */
    icon: boolean;
    /**
     * Set rounded tab
     */
    rounded: boolean;
    /**
     * Set counter value
     */
    counter: number;
    /**
     * Set layout width style
     */
    layout: 'auto' | 'stretched';
    /**
     * Set selected placement
     */
    placement: 'bottom' | 'top';
    /**
     * On tab click
     *
     * @since 2.0.0
     */
    tabClick: EventEmitter<TabClickDetail>;
    private tabItemClasses;
    render(): any;
}
