import { Breakpoint } from '../utils/breakpoints';
export declare class BasicNavigation {
    hostElement: HTMLIxBasicNavigationElement;
    /**
     * Application name
     */
    applicationName: string;
    /**
     * Hide application header. Will disable responsive feature of basic navigation.
     */
    hideHeader: boolean;
    onHideHeaderChange(): void;
    /**
     * Change the responsive layout of the menu structure
     */
    forceBreakpoint: Breakpoint | undefined;
    forceLayoutChange(newMode: Breakpoint | undefined): void;
    /**
     * Supported layouts e.g ['sm', 'md']
     */
    breakpoints: Breakpoint[];
    onBreakpointsChange(breakpoints: Breakpoint[]): void;
    breakpoint: Breakpoint;
    get menu(): HTMLIxMenuElement | null;
    private modeDisposable;
    private contextProvider;
    private onContentClick;
    componentWillLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    render(): any;
}
