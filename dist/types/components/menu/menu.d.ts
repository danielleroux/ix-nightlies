import { EventEmitter } from '../../stencil-public-runtime';
import { ApplicationLayoutContext } from '../utils/application-layout/context';
import { Breakpoint } from '../utils/breakpoints';
import { ContextType } from '../utils/context';
export declare class Menu {
    hostElement: HTMLIxMenuElement;
    /**
     * Is settings tab visible
     */
    showSettings: boolean;
    /**
     * Is about tab visible
     */
    showAbout: boolean;
    /**
     * Show toggle between light and dark variant. Only if the provided theme have implemented both!
     */
    enableToggleTheme: boolean;
    /**
     * Is settings tab is visible
     */
    enableSettings: boolean;
    /**
     * Internal
     */
    enableMapExpand: boolean;
    /**
     * Should only be set if you use ix-menu standalone
     */
    applicationName: string;
    /**
     * Should only be set if you use ix-menu standalone
     */
    applicationDescription: string;
    /**
     * Maximum number of menu items to show in case enough vertical space is available.
     * Extra menu items will be collapsed to 'show more' menu item.
     *
     * @deprecated - Has no effect on component. Will get removed with next major release (v3)
     */
    maxVisibleMenuItems: number;
    /**
     * Accessibility i18n label for the burger menu of the sidebar
     */
    i18nExpandSidebar: string;
    /**
     *  Toggle the expand state of the menu
     */
    expand: boolean;
    /**
     *  If set the menu will be expanded initially. This will only take effect at the breakpoint 'lg'.
     */
    startExpanded: boolean;
    /**
     * Menu stays pinned to the left
     */
    pinned: boolean;
    pinnedChange(newPinned: boolean): void;
    /**
     */
    i18nLegal: string;
    /**
     */
    i18nSettings: string;
    /**
     */
    i18nToggleTheme: string;
    /**
     */
    i18nExpand: string;
    /**
     */
    i18nCollapse: string;
    /**
     * Menu expanded
     */
    expandChange: EventEmitter<boolean>;
    /**
     * Map Sidebar expanded
     */
    mapExpandChange: EventEmitter<boolean>;
    showPinned: boolean;
    mapExpand: boolean;
    activeTab: HTMLIxMenuItemElement | null;
    breakpoint: Breakpoint;
    itemsScrollShadowTop: boolean;
    itemsScrollShadowBottom: boolean;
    applicationLayoutContext: ContextType<typeof ApplicationLayoutContext>;
    private isTransitionDisabled;
    private readonly isVisible;
    get popoverArea(): Element;
    get menu(): Element;
    get menuItemsContainer(): HTMLDivElement;
    get overlayContainer(): HTMLDivElement;
    get menuItems(): Element[];
    get menuBottomItems(): Element[];
    get homeTab(): Element;
    get moreItemsDropdown(): HTMLElement;
    get isMoreItemsDropdownEmpty(): boolean;
    get moreItemsDropdownItems(): NodeListOf<Element>;
    get activeMoreTabContainer(): Element;
    get activeMoreTab(): Element;
    get aboutPopoverContainer(): HTMLElement;
    get aboutNewsPopover(): HTMLIxMenuAboutNewsElement;
    get aboutTab(): HTMLElement;
    get about(): HTMLIxMenuAboutElement | null;
    get settings(): HTMLIxMenuSettingsElement | null;
    get isSettingsEmpty(): boolean;
    get tabsContainer(): HTMLIxMenuElement;
    componentDidLoad(): void;
    componentWillLoad(): void;
    componentWillRender(): void;
    componentDidRender(): void;
    private setPinned;
    private onBreakpointChange;
    private appendFragments;
    private resetActiveTab;
    private appendTabs;
    private getAboutPopoverVerticalPosition;
    private appendAboutNewsPopover;
    /**
     * Toggle map sidebar expand
     * @param show
     */
    toggleMapExpand(show?: boolean): Promise<void>;
    /**
     * Toggle menu
     * @param show
     */
    toggleMenu(show?: boolean): Promise<void>;
    /**
     * Disable transition of overlay while menu animation is running.
     */
    private checkTransition;
    private isOverlayVisible;
    /**
     * Toggle Settings tabs
     * @param show
     */
    toggleSettings(show: boolean): Promise<void>;
    /**
     * Toggle About tabs
     * @param show
     */
    toggleAbout(show: boolean): Promise<void>;
    private resetOverlay;
    private getCollapseText;
    private getCollapseIcon;
    private isMenuItemClicked;
    private handleOverflowIndicator;
    onOverlayClose(): void;
    private animateOverlayFadeIn;
    private animateOverlayFadeOut;
    private onMenuItemsClick;
    private isHiddenFromViewport;
    private sidebarToggle;
    render(): any;
}
