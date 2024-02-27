import { EventEmitter } from '../../stencil-public-runtime';
export type Composition = 'top' | 'left' | 'bottom' | 'right';
export type ExpandedChangedEvent = {
    slot: string;
    expanded: boolean;
};
export type SlotChangedEvent = {
    slot: string;
    newSlot: string;
};
export type HideOnCollapseChangedEvent = {
    slot: string;
    hideOnCollapse: boolean;
};
export type VariantChangedEvent = {
    slot: string;
    variant: 'floating' | 'inline';
};
export type BorderlessChangedEvent = {
    slot: string;
    borderless: boolean;
};
/**
 * @since 2.1.0
 */
export declare class Pane {
    hostElement: HTMLIxPaneElement;
    /**
     * Title of the side panel
     */
    heading: string;
    /**
     * Variant of the side pane.
     * Defaults to the variant attribute of the pane layout. If used standalone it defaults to inline.
     */
    variant: 'floating' | 'inline';
    /**
     * Define if the pane should have a collapsed state
     */
    hideOnCollapse: boolean;
    /**
     * The maximum size of the sidebar, when it is expanded
     */
    size: '240px' | '320px' | '360px' | '480px' | '600px' | '33%' | '50%';
    /**
     * Toggle the border of the pane.
     * Defaults to the borderless attribute of the pane layout. If used standalone it defaults to false.
     */
    borderless: boolean;
    /**
     * State of the pane
     */
    expanded: boolean;
    /**
     * Defines the position of the pane inside it's container.
     * Inside a pane layout this property will automatically be set to the name of slot the pane is assigned to.
     */
    composition: Composition;
    /**
     * Name of the icon
     */
    icon: string;
    /**
     * @internal
     * Prevents overwriting of the variant and borderless property when used inside layout
     */
    ignoreLayoutSettings: boolean;
    /**
     * @internal
     */
    isMobile: boolean;
    /**
     * This event is triggered when the pane either expands or contracts
     */
    expandedChanged: EventEmitter<ExpandedChangedEvent>;
    /**
     * This event is triggered when the variant of the pane is changed
     */
    variantChanged: EventEmitter<VariantChangedEvent>;
    /**
     * This event is triggered when the variant of the pane is changed
     */
    borderlessChanged: EventEmitter<BorderlessChangedEvent>;
    /**
     * @internal
     */
    hideOnCollapseChanged: EventEmitter<HideOnCollapseChangedEvent>;
    /**
     * @internal
     */
    slotChanged: EventEmitter<SlotChangedEvent>;
    private expandIcon;
    private showContent;
    private minimizeIcon;
    private floating;
    private parentWidthPx;
    private parentHeightPx;
    private validPositions;
    private collapsedPane;
    private collapsedPaneMobile;
    private animations;
    private animationCounter;
    private mutationObserver;
    private resizeObserver;
    get currentSlot(): string;
    get isBottomTopPane(): boolean;
    get isLeftRightPane(): boolean;
    get isMobileTop(): boolean;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private setPosition;
    private getExpandPaneSize;
    private setIcons;
    private getIconNames;
    private getKey;
    private animateVerticalFadeIn;
    private animateHorizontalFadeIn;
    private removePadding;
    private animateHorizontalPadding;
    private animateVerticalPadding;
    private clearAnimations;
    onMobileChange(): void;
    onPositionChange(): void;
    onHideOnCollapseChange(value: boolean): void;
    onVariantChange(value: 'inline' | 'floating'): void;
    onBorderlessChange(value: boolean): void;
    onExpandedChange(): void;
    onParentSizeChange(): void;
    onSizeChange(): void;
    render(): any;
}
