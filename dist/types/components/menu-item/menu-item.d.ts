/**
 * @slot menu-item-label Custom label
 */
export declare class MenuItem {
    /**
     * Move the Tab to a top position.
     */
    home: boolean;
    /**
     * Caution: this is no longer working. Please use slot="bottom" instead.
     *
     * Place tab on bottom
     */
    bottom: boolean;
    /**
     * Name of the icon you want to display. Icon names can be resolved from the documentation @link https://ix.siemens.io/docs/icon-library/icons
     *
     * @deprecated since 2.0.0 use `icon` property. Will be removed in 3.0.0
     */
    tabIcon: string;
    /**
     * Name of the icon you want to display. Icon names can be resolved from the documentation @link https://ix.siemens.io/docs/icon-library/icons
     */
    icon: string;
    /**
     * Show notification count on tab
     */
    notifications: number;
    /**
     * State to display active
     */
    active: boolean;
    /**
     * Disable tab and remove event handlers
     */
    disabled: boolean;
    hostElement: HTMLIxMenuItemElement;
    title: string;
    private observer;
    private isHostedInsideCategory;
    componentWillLoad(): void;
    componentWillRender(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    onIconChange(): void;
    onTabIconChange(): void;
    render(): any;
}
