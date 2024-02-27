/**
 * @since 2.0.0
 */
export declare class MenuCategory {
    hostElement: HTMLIxMenuCategoryElement;
    /**
     * Display name of the category
     */
    label: string;
    /**
     * Icon of the category
     */
    icon: string;
    /**
     * Show notification count on the category
     */
    notifications: number;
    menuExpand: boolean;
    showItems: boolean;
    showDropdown: boolean;
    nestedItems: HTMLIxMenuItemElement[];
    private observer;
    private menuItemsContainer;
    private ixMenu;
    private isNestedItemActive;
    private getNestedItems;
    private getNestedItemsHeight;
    private onExpandCategory;
    private animateFadeOut;
    private animateFadeIn;
    private onCategoryClicked;
    private onNestedItemsChanged;
    private isCategoryItemListVisible;
    componentWillLoad(): void;
    componentDidLoad(): void;
    clearMenuItemStyles(): void;
    disconnectedCallback(): void;
    render(): any;
}
