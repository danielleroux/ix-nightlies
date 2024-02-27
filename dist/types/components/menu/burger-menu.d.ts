/**
 * @internal
 */
export declare class BurgerMenu {
    /**
     * Accessibility label for the burger menu button (MANDATORY)
     */
    ixAriaLabel: string;
    /**
     * Does burger menu button display the expanded or the not expanded state
     */
    expanded: boolean;
    /**
     * Display as pinned
     */
    pinned: boolean;
    render(): any;
}
