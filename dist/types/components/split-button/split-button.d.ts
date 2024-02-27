import { EventEmitter } from '../../stencil-public-runtime';
import { ButtonVariant } from '../button/button';
import { AlignedPlacement } from '../dropdown/placement';
export type SplitButtonVariant = ButtonVariant;
export declare class SplitButton {
    hostElement: HTMLIxSplitButtonElement;
    /**
     * Color variant of button
     */
    variant: SplitButtonVariant;
    /**
     * Button outline variant
     */
    outline: boolean;
    /**
     * Button invisible
     */
    ghost: boolean;
    /**
     * Button label
     */
    label: string;
    /**
     * Button icon
     */
    icon: string;
    /**
     * Icon of the button on the right
     */
    splitIcon: string;
    /**
     * Disabled
     */
    disabled: boolean;
    /**
     * Placement of the dropdown
     */
    placement: AlignedPlacement;
    toggle: boolean;
    /**
     * Button clicked
     */
    buttonClick: EventEmitter<MouseEvent>;
    private triggerElement;
    private dropdownElement;
    private linkTriggerRef;
    componentDidLoad(): void;
    render(): any;
}
