import { IxModalSize } from '../../modal/modal';
import { TypedEvent } from '../typed-event';
export declare function setA11yAttributes(element: HTMLElement, config: ModalConfig): void;
export interface ModalConfig<TReason = any, CONTENT = any> {
    animation?: boolean;
    ariaDescribedby?: string;
    ariaLabelledby?: string;
    backdrop?: boolean;
    closeOnBackdropClick?: boolean;
    beforeDismiss?: (reason?: TReason) => boolean | Promise<boolean>;
    centered?: boolean;
    container?: string | HTMLElement;
    content: CONTENT | string;
    keyboard?: boolean;
    size?: IxModalSize;
    title?: string;
}
export interface ModalInstance<TReason = any> {
    htmlElement: HTMLIxModalElement;
    onClose: TypedEvent<TReason>;
    onDismiss: TypedEvent<TReason>;
}
export declare function closeModal<TClose = any>(element: Element, closeResult: TClose): void;
export declare function dismissModal(element: Element, dismissResult?: any): void;
export declare function showModal<T>(config: ModalConfig<T>): Promise<ModalInstance<T>>;
