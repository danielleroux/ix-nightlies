import { ButtonVariant } from '../button/button';
import { AlignedPlacement } from '../dropdown/placement';
export type DropdownButtonVariant = ButtonVariant;
/**
 * @since 1.3.0
 */
export declare class DropdownButton {
    hostElement: HTMLIxDropdownButtonElement;
    /**
     * Button variant
     */
    variant: DropdownButtonVariant;
    /**
     * Outline button
     */
    outline: boolean;
    /**
     * Button with no background or outline
     */
    ghost: boolean;
    /**
     * Disable button
     */
    disabled: boolean;
    /**
     * Set label
     */
    label: string;
    /**
     * Button icon
     */
    icon: string;
    /**
     * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
     * @since 2.1.0
     */
    closeBehavior: 'inside' | 'outside' | 'both' | boolean;
    /**
     * Placement of the dropdown
     *
     * @since 2.0.0
     */
    placement: AlignedPlacement;
    dropdownAnchor: HTMLElement;
    private getTriangle;
    render(): any;
}
