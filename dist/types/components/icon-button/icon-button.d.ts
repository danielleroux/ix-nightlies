import { ButtonVariant } from '../button/button';
export type IconButtonVariant = ButtonVariant;
export declare class IconButton {
    hostElement: HTMLIxIconButtonElement;
    /**
     * Accessibility label for the icon button
     * Will be set as aria-label on the nested HTML button element
     *
     * @since 2.1.0
     */
    a11yLabel: string;
    /**
     * Variant of button
     */
    variant: IconButtonVariant;
    /**
     * Button outline
     */
    outline: boolean;
    /**
     * Button invisible
     */
    ghost: boolean;
    /**
     * Button in oval shape
     */
    oval: boolean;
    /**
     * Icon name
     */
    icon: string;
    /**
     * Size of icon in button
     *
     * @deprecated Only size 32 will be removed in 3.0.0
     */
    size: '32' | '24' | '16' | '12';
    /**
     * Color of icon in  button
     *
     * @deprecated since 2.1.0 use `icon-color`
     */
    color: string;
    /**
     * Color of icon in  button
     */
    iconColor: string;
    /**
     * Disabled
     */
    disabled: boolean;
    /**
     * Type of the button
     */
    type: 'button' | 'submit';
    /**
     * Loading button
     *
     * @since 2.0.0
     */
    loading: boolean;
    /**
     * Temp. workaround until stencil issue is fixed (https://github.com/ionic-team/stencil/issues/2284)
     */
    submitButtonElement: HTMLButtonElement;
    componentDidLoad(): void;
    dispatchFormEvents(): void;
    private getIconSizeClass;
    render(): any;
}
