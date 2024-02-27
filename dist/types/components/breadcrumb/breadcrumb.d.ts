import { EventEmitter } from '../../stencil-public-runtime';
export declare class Breadcrumb {
    hostElement: HTMLIxBreadcrumbElement;
    /**
     * Excess items will get hidden inside of dropdown
     */
    visibleItemCount: number;
    /**
     * Items will be accessible through a dropdown
     */
    nextItems: string[];
    onNextItemsChange(): void;
    /**
     * Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)
     */
    ghost: boolean;
    /**
     * Accessibility label for the dropdown button (ellipsis icon) used to access the dropdown list
     * with conditionally hidden previous items
     *
     * @since 2.0.0
     */
    ariaLabelPreviousButton: string;
    /**
     * Crumb item clicked event
     */
    itemClick: EventEmitter<string>;
    /**
     * Next item clicked event
     */
    nextClick: EventEmitter<{
        event: UIEvent;
        item: string;
    }>;
    previousButtonRef: HTMLElement;
    nextButtonRef: HTMLElement;
    items: HTMLIxBreadcrumbItemElement[];
    isPreviousDropdownExpanded: boolean;
    private mutationObserver;
    private previousButtonId;
    private previousDropdownId;
    private onItemClick;
    componentDidLoad(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private onChildMutation;
    private getItems;
    render(): any;
}
