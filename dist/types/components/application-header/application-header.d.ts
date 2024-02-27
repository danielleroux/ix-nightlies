import { ApplicationLayoutContext } from '../utils/application-layout/context';
import { Breakpoint } from '../utils/breakpoints';
import { ContextType } from '../utils/context';
/**
 * @slot logo - Location of the logo
 */
export declare class ApplicationHeader {
    hostElement: HTMLIxApplicationHeaderElement;
    /**
     * Application name
     */
    name: string;
    breakpoint: Breakpoint;
    menuExpanded: boolean;
    suppressResponsive: boolean;
    hasSlottedElements: boolean;
    private menuDisposable?;
    private modeDisposable?;
    private callbackUpdateAppSwitchModal?;
    applicationLayoutContext: ContextType<typeof ApplicationLayoutContext>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private isLogoSlotted;
    private attachSiemensLogoIfLoaded;
    private onMenuClick;
    private resolveContextMenuButton;
    private tryUpdateAppSwitch;
    private showAppSwitch;
    private updateIsSlottedContent;
    render(): any;
}
