export declare class IxActiveModal<TData = any, TReason = any> {
    private readonly modalData?;
    modalElement: HTMLElement;
    constructor(modalData?: TData | undefined);
    get data(): TData | undefined;
    /**
     * Close the active modal
     *
     * @param reason
     */
    close(reason: TReason): void;
    /**
     * Dismiss the active modal
     *
     * @param reason
     */
    dismiss(reason?: TReason): void;
}
export declare class InternalIxActiveModal<TData = any, TReason = any> extends IxActiveModal<TData, TReason> {
    setModalElement(element: HTMLElement): void;
}
