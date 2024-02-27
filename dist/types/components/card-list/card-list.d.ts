import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 1.6.0
 */
export declare class CardList {
    /**
     * Name the card list
     */
    label: string;
    /**
     * Collapse the list
     */
    collapse: boolean;
    /**
     * List style
     */
    listStyle: 'stack' | 'scroll';
    /**
     * Maximal visible cards
     *
     * @internal
     */
    maxVisibleCards: number;
    /**
     * Overwrite the default show all count.
     * */
    showAllCount: number | undefined;
    /**
     * Suppress the overflow handling of child elements
     */
    suppressOverflowHandling: boolean;
    /**
     * i18n Show all button
     */
    i18nShowAll: string;
    /**
     * i18n More cards available
     */
    i18nMoreCards: string;
    /**
     * Fire event when the collapse state is changed by the user
     */
    collapseChanged: EventEmitter<boolean>;
    /**
     * Fire event when the collapse state is changed by the user
     */
    showAllClick: EventEmitter<{
        nativeEvent: MouseEvent;
    }>;
    /**
     * Fire event when the show more card is clicked.
     */
    showMoreCardClick: EventEmitter<{
        nativeEvent: MouseEvent;
    }>;
    hostElement: HTMLIxCardListElement;
    private hasOverflowingElements;
    private numberOfOverflowingElements;
    private numberOfAllChildElements;
    private leftScrollDistance;
    private rightScrollDistance;
    private observer;
    private onCardListVisibilityToggle;
    private onShowAllClick;
    private getListChildren;
    private changeVisibilityOfSlotChildren;
    private registerOverflowHandler;
    private shouldHandleOverflow;
    private get listElement();
    private onCardListScroll;
    private isShowMoreCardVisible;
    private getOpacityFromScrollDistance;
    private computeMaskLayer;
    private detectOverflow;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
