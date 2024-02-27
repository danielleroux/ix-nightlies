/**
 * @since 2.1.0
 * @slot header - Display content at the top of the content page
 */
export declare class Content {
    hostElement: HTMLIxContentElement;
    isContentHeaderSlotted: boolean;
    get contentHeaderSlot(): HTMLSlotElement;
    render(): any;
}
