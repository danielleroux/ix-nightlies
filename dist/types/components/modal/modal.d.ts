import { EventEmitter } from '../../stencil-public-runtime';
export type IxModalFixedSize = '360' | '480' | '600' | '720' | '840';
export type IxModalDynamicSize = 'full-width' | 'full-screen';
export type IxModalSize = IxModalFixedSize | IxModalDynamicSize;
export declare class Modal {
    private ariaAttributes;
    hostElement: HTMLIxModalElement;
    /**
     * Modal size
     *
     * @since 2.0.0
     */
    size: IxModalSize;
    /**
     * Should the modal be animated
     */
    animation: boolean;
    /**
     * Show a backdrop behind the modal dialog
     */
    backdrop: boolean;
    /**
     * Dismiss modal on backdrop click
     *
     * @since 2.0.0
     */
    closeOnBackdropClick: boolean;
    /**
     * Is called before the modal is dismissed.
     *
     * - Return `true` to proceed in dismissing the modal
     * - Return `false` to abort in dismissing the modal
     */
    beforeDismiss: (reason?: any) => boolean | Promise<boolean>;
    /**
     * Centered modal
     */
    centered: boolean;
    /**
     * Use ESC to dismiss the modal
     * @deprecated - Use closeOnEscape instead
     */
    keyboard: boolean;
    /**
     * If set to true the modal can be closed by pressing the Escape key
     */
    closeOnEscape: boolean;
    /**
     * Dialog close
     */
    dialogClose: EventEmitter;
    /**
     * Dialog cancel
     */
    dialogDismiss: EventEmitter;
    modalVisible: boolean;
    onKey(e: KeyboardEvent): void;
    get dialog(): HTMLDialogElement;
    private slideInModal;
    private slideOutModal;
    private onModalClick;
    /**
     * Show the dialog
     */
    showModal(): Promise<void>;
    /**
     * Dismiss the dialog
     */
    dismissModal<T = any>(reason?: T): Promise<void>;
    /**
     * Close the dialog
     */
    closeModal<T = any>(reason: T): Promise<void>;
    componentDidLoad(): void;
    componentWillLoad(): void;
    render(): any;
}
