import { AppSwitchConfiguration } from '../utils/application-layout/context';
import { Breakpoint } from '../utils/breakpoints';
import { IxTheme } from '../utils/theme-switcher';
/**
 * @since 2.1.0
 */
export declare class Application {
    hostElement: HTMLIxApplicationElement;
    /**
     * Application theme
     */
    theme: IxTheme;
    /**
     * Use the system appearance dark or light
     */
    themeSystemAppearance: boolean;
    /**
     * Change the responsive layout of the menu structure
     */
    forceBreakpoint: Breakpoint | undefined;
    forceLayoutChange(newMode: Breakpoint | undefined): void;
    /**
     * Supported layouts
     */
    breakpoints: Breakpoint[];
    onBreakpointsChange(breakpoints: Breakpoint[]): void;
    /**
     * Define application switch configuration
     */
    appSwitchConfig: AppSwitchConfiguration;
    breakpoint: Breakpoint;
    applicationSidebarSlotted: boolean;
    private contextProvider;
    get menu(): HTMLIxMenuElement | null;
    get applicationSidebarSlot(): HTMLSlotElement;
    private modeDisposable;
    private onContentClick;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private changeTheme;
    onApplicationSidebarChange(): void;
    render(): any;
}
