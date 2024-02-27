import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0.0
 */
export declare class ModalHeader {
    hostElement: HTMLIxModalHeaderElement;
    /**
     * Hide the close button
     */
    hideClose: boolean;
    /**
     * Icon of the Header
     */
    icon: string;
    onIconChange(icon: string): void;
    /**
     * Icon color
     */
    iconColor: string;
    /**
     * Emits when close icon is clicked and closes the modal
     * Can be prevented, in which case only the event is triggered, and the modal remains open
     */
    closeClick: EventEmitter<MouseEvent>;
    private parentDialog;
    componentDidLoad(): void;
    private onCloseClick;
    render(): any;
}
