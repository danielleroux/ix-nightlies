import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 1.5.0
 */
export declare class Pagination {
    private readonly baseButtonConfig;
    private readonly maxCountPages;
    hostElement: HTMLIxPaginationElement;
    /**
     * Advanced mode
     */
    advanced: boolean;
    /**
     * Number of items shown at once.
     * Can only be changed in advaced mode.
     */
    itemCount: number;
    /**
     * Show item count in advanced mode
     */
    showItemCount: boolean;
    /**
     * Total number of pages
     */
    count: number;
    /**
     * Zero based index of currently selected page
     */
    selectedPage: number;
    /**
     * i18n
     */
    i18nPage: string;
    /**
     * i18n
     */
    i18nOf: string;
    /**
    /**
     * i18n
     */
    i18nItems: string;
    /**
     * Page selection event
     */
    pageSelected: EventEmitter<number>;
    /**
     * Item count change event
     */
    itemCountChanged: EventEmitter<number>;
    private selectPage;
    private increase;
    private decrease;
    private getPageButton;
    private renderPageButtons;
    render(): any;
}
