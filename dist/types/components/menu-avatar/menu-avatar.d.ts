import { EventEmitter } from '../../stencil-public-runtime';
export declare class MenuAvatar {
    hostElement: HTMLIxMenuAvatarElement;
    /**
     * First line of text
     */
    top: string;
    /**
     * Second line of text
     */
    bottom: string;
    /**
     * Display a avatar image
     *
     * @since 1.4.0
     */
    image: string;
    /**
     * Display the initials of the user. Will be overwritten by image
     *
     * @since 1.4.0
     */
    initials: string;
    /**
     * Use for translation
     */
    i18nLogout: string;
    /**
     *  Control the visibility of the logout button
     *  @since 2.1.0
     */
    showLogoutButton: boolean;
    /**
     * Control the visibility of the dropdown menu
     * @since 2.1.0
     */
    showContextMenu: boolean;
    /**
     * Logout click
     */
    logoutClick: EventEmitter;
    private avatarElementId;
    onSlotChange(): void;
    render(): any;
}
