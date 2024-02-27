/**
 * @since 2.1.0
 */
export declare class Panes {
    hostElement: HTMLIxPaneLayoutElement;
    /**
     * Choose the layout of the panes.
     * When set to 'full-vertical' the vertical panes (left, right) will get the full height.
     * When set to 'full-horizontal' the horizontal panes (top, bottom) will get the full width.
     */
    layout: 'full-vertical' | 'full-horizontal';
    /**
     * Set the default variant for all panes in the layout
     */
    variant: 'floating' | 'inline';
    /**
     * Set the default border state for all panes in the layout
     */
    borderless: boolean;
    private isMobile;
    private paneElements;
    private panes;
    private observer;
    get currentPanes(): NodeListOf<HTMLIxPaneElement>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private setPaneVariant;
    private setPaneBorder;
    private setPaneZIndex;
    private setPanes;
    private closeFloatingPanes;
    private configurePanes;
    onSlotChanged(): void;
    onCollapsibleChanged(event: CustomEvent): void;
    onVariantChanged(event: CustomEvent): void;
    onPaneElementsChange(): void;
    onVariableChange(): void;
    onBorderChange(): void;
    onLayoutChange(): void;
    onMobileChange(): void;
    private hasPadding;
    private hasPaddingMobile;
    private slotExists;
    private isFloating;
    render(): any;
}
