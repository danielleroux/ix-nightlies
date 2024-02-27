/**
 * @since 2.0.0
 */
export declare class LinkButton {
    /**
     * Disable the link button
     */
    disabled: boolean;
    /**
     * Url for the link button
     */
    url: string;
    /**
     * Specifies where to open the link
     *
     * https://www.w3schools.com/html/html_links.asp
     */
    target: '_self' | '_blank' | '_parent' | '_top';
    render(): any;
}
