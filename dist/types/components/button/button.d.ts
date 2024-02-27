export type ButtonVariant = 'primary' | 'secondary';
export declare class Button {
    /**
     * Button variant
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
     * Icon name
     */
    icon: string;
    /** @internal */
    alignment: 'center' | 'start';
    /** @internal */
    iconSize: '12' | '16' | '24';
    hostElement: HTMLIxButtonElement;
    /**
     * Temp. workaround until stencil issue is fixed (https://github.com/ionic-team/stencil/issues/2284)
     */
    submitButtonElement: HTMLButtonElement;
    componentDidLoad(): void;
    dispatchFormEvents(): void;
    render(): any;
}
