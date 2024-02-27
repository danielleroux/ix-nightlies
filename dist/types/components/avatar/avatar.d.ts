/**
 * @since 2.0.0
 */
export declare class Avatar {
    hostElement: HTMLIxAvatarElement;
    /**
     * Display an avatar image
     *
     */
    image: string;
    /**
     * Display the initials of the user. Will be overwritten by image
     *
     */
    initials: string;
    /**
     * If set an info card displaying the username will be placed inside the dropdown.
     * Note: Only working if avatar is part of the ix-application-header
     *
     * @since 2.1.0
     */
    username: string;
    /**
     * Optional description text that will be displayed underneath the username.
     * Note: Only working if avatar is part of the ix-application-header
     *
     * @since 2.1.0
     */
    extra: string;
    isClosestApplicationHeader: boolean;
    hasSlottedElements: boolean;
    private slotElement;
    componentWillLoad(): void;
    private slottedChanged;
    private resolveAvatarTrigger;
    render(): any;
}
