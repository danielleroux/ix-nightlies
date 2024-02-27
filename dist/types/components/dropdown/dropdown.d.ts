import { EventEmitter } from '../../stencil-public-runtime';
import { ComponentInterface } from '../../stencil-public-runtime';
import { CloseBehavior, DropdownInterface } from './dropdown-controller';
import { AlignedPlacement } from './placement';
export declare class Dropdown implements ComponentInterface, DropdownInterface {
    hostElement: HTMLIxDropdownElement;
    /**
     * Suppress the automatic placement of the dropdown.
     *
     * @since 2.0.0
     */
    suppressAutomaticPlacement: boolean;
    /**
     * Show dropdown
     */
    show: boolean;
    /**
     * Define an element that triggers the dropdown.
     * A trigger can either be a string that will be interpreted as id attribute or a DOM element.
     */
    trigger: string | HTMLElement | Promise<HTMLElement>;
    /**
     * Define an anchor element
     */
    anchor: string | HTMLElement;
    /**
     * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
     * If the dropdown is a child of another one, it will be closed with the parent, regardless of its own close behavior.
     */
    closeBehavior: CloseBehavior;
    /**
     * Placement of the dropdown
     */
    placement: AlignedPlacement;
    /**
     * Position strategy
     */
    positioningStrategy: 'absolute' | 'fixed';
    /**
     * An optional header shown at the top of the dropdown
     */
    header?: string;
    /**
     * Move dropdown along main axis of alignment
     *
     * @internal
     */
    offset: {
        mainAxis?: number;
        crossAxis?: number;
        alignmentAxis?: number;
    };
    /**
     * @internal
     */
    overwriteDropdownStyle: (delegate: {
        dropdownRef: HTMLElement;
        triggerRef?: HTMLElement;
    }) => Promise<Partial<CSSStyleDeclaration>>;
    /**
     * @internal
     * If initialisation of this dropdown is expected to be defered submenu discovery will have to be re-run globally by the controller.
     * This property indicates the need for that to the controller.
     */
    discoverAllSubmenus: boolean;
    /**
     * Fire event after visibility of dropdown has changed
     */
    showChanged: EventEmitter<boolean>;
    private autoUpdateCleanup;
    private triggerElement?;
    private anchorElement?;
    private dropdownRef;
    private localUId;
    private assignedSubmenu;
    connectedCallback(): void;
    cacheSubmenuId(event: CustomEvent<string>): void;
    disconnectedCallback(): void;
    getAssignedSubmenuIds(): string[];
    isPresent(): boolean;
    present(): void;
    dismiss(): void;
    getId(): string;
    willDismiss(): boolean;
    willPresent(): boolean;
    get dropdownItems(): HTMLIxDropdownItemElement[];
    get slotElement(): HTMLSlotElement;
    private disposeListener?;
    private addEventListenersFor;
    /** @internal */
    discoverSubmenu(): Promise<void>;
    private registerListener;
    private resolveElement;
    private checkForSubmenuAnchor;
    private findElement;
    changedShow(newShow: boolean): Promise<void>;
    changedTrigger(newTriggerValue: string | HTMLElement | Promise<HTMLElement>): void;
    private isAnchorSubmenu;
    private applyDropdownPosition;
    componentDidLoad(): Promise<void>;
    componentDidRender(): Promise<void>;
    private isTriggerElement;
    private onDropdownClick;
    /**
     * Update position of dropdown
     */
    updatePosition(): Promise<void>;
    render(): any;
}
