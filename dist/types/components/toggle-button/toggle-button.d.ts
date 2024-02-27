import { EventEmitter } from '../../stencil-public-runtime';
import { ButtonVariant } from '../button/button';
/**
 * @since 2.0.0
 */
export declare class ToggleButton {
    /**
     * Button variant.
     * Important: Variant 'primary' can only be combined with either outline or ghost.
     */
    variant: ButtonVariant;
    /**
     * Outline button
     */
    outline: boolean;
    /**
     * Button with no background or outline
     */
    ghost: boolean;
    /**
     * Disable the button
     */
    disabled: boolean;
    /**
     * Loading button
     */
    loading: boolean;
    /**
     * Icon name
     */
    icon: string;
    /**
     * Show button as pressed
     */
    pressed: boolean;
    /**
     * Pressed change event
     */
    pressedChange: EventEmitter<boolean>;
    private isIllegalToggleButtonConfig;
    private logIllegalConfig;
    onVariantChange(): void;
    onGhostChange(): void;
    onOutlineChange(): void;
    componentDidLoad(): void;
    private dispatchPressedChange;
    render(): any;
}
