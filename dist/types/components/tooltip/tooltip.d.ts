/**
 * @slot title-icon - Icon of tooltip title
 * @slot title-content - Content of tooltip title
 *
 * @since 1.4.0
 */
export declare class Tooltip {
    /**
     * CSS selector for hover trigger element e.g. `for="[data-my-custom-select]"`
     */
    for: string;
    /**
     * Title of the tooltip
     */
    titleContent: string;
    /**
     * Define if the user can access the tooltip via mouse.
     */
    interactive: boolean;
    /**
     * Initial placement of the tooltip. If the placement don"t have enough space,
     * the tooltip will placed on another location.
     *
     * @since 1.5.0
     */
    placement: 'top' | 'right' | 'bottom' | 'left';
    /** @internal */
    animationFrame: boolean;
    visible: boolean;
    hostElement: HTMLIxTooltipElement;
    private observer;
    private hideTooltipTimeout;
    private onEnterElementBind;
    private onLeaveElementBind;
    private disposeAutoUpdate?;
    private tooltipCloseTimeInMS;
    private disposeListener;
    private get arrowElement();
    private destroyAutoUpdate;
    private onTooltipShow;
    private onTooltipHide;
    /** @internal */
    showTooltip(anchorElement: any): Promise<void>;
    /** @internal */
    hideTooltip(): Promise<void>;
    private computeArrowPosition;
    private computeTooltipPosition;
    private clearHideTimeout;
    private queryAnchorElements;
    private registerTriggerListener;
    private registerTooltipListener;
    onKeydown(event: KeyboardEvent): Promise<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
