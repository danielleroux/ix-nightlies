export declare class Spinner {
    hostElement: HTMLIxSpinnerElement;
    /**
     * Variant of spinner
     */
    variant: 'primary' | 'secondary';
    /**
     * Size of spinner
     */
    size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    /**
     * @internal
     */
    hideTrack: boolean;
    render(): any;
}
