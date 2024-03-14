import React from 'react';
export interface ModalRef {
    close: <T = any>(result: T) => void;
    dismiss: <T = any>(result?: T) => void;
    modalElement: HTMLIxModalElement | null;
}
export declare const Modal: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
} & React.RefAttributes<ModalRef>>;
