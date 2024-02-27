import { EventEmitter } from '../../stencil-public-runtime';
import { ButtonVariant } from '../button/button';
/**
 * @since 2.0.0
 */
export declare class IconToggleButton {
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
     * Icon name
     */
    icon: string;
    /**
     * Show button as pressed
     */
    pressed: boolean;
    /**
     * Size of icon in button
     */
    size: '24' | '16' | '12';
    /**
     * Disable the button
     */
    disabled: boolean;
    /**
     * Loading button
     */
    loading: boolean;
    /**
     * Pressed change event
     */
    pressedChange: EventEmitter<boolean>;
    hostElement: HTMLIxIconToggleButtonElement;
    private isIllegalToggleButtonConfig;
    private logIllegalConfig;
    onVariantChange(): void;
    onGhostChange(): void;
    onOutlineChange(): void;
    componentDidLoad(): void;
    private dispatchPressedChange;
    private getIconSizeClass;
    render(): any;
}
