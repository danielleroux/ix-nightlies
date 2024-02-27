import { EventEmitter } from '../../stencil-public-runtime';
export declare class MapNavigation {
    private static readonly defaultTime;
    private static readonly slowTime;
    hostElement: HTMLIxMapNavigationElement;
    /**
     * Application name
     */
    applicationName: string;
    /**
     * Navigation title
     */
    navigationTitle: string;
    /**
     * Hide the sidebar context menu button when set to true
     */
    hideContextMenu: boolean;
    /**
     * Navigation toggled
     */
    navigationToggled: EventEmitter<boolean>;
    /**
     * Context menu clicked
     */
    contextMenuClick: EventEmitter<void>;
    isSidebarOpen: boolean;
    hasContentHeader: boolean;
    get menu(): HTMLIxMenuElement;
    get menuOverlay(): Element;
    get mapNavMenu(): Element;
    get sidebar(): Element;
    get overlay(): Element;
    componentDidRender(): void;
    componentWillLoad(): void;
    private appendMenu;
    /**
     * Change the visibility of the sidebar
     *
     * @param show new visibility state
     * @since 1.6.0
     */
    toggleSidebar(show?: boolean): Promise<void>;
    private closeSidebar;
    private openSidebar;
    /**
     * Open a overlay inside content area
     * @deprecated Will be removed in 2.0.0. Use slot based approach
     *
     * @param name
     * @param component
     * @param icon
     * @param color
     */
    openOverlay(name: string, component: HTMLElement, icon?: string, color?: string): Promise<void>;
    /**
     * Close current shown overlay
     * @deprecated Will be removed in 2.0.0. Use slot based approach
     */
    closeOverlay(): Promise<void>;
    private checkHasContentHeader;
    render(): any;
}
