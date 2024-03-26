import { ShowToastResult } from './toast-container';
export type ToastType = 'info' | 'success' | 'error' | 'warning';
export type ToastPosition = 'bottom-right' | 'top-right';
export interface ToastConfig {
    title?: string;
    message: string | HTMLElement;
    type?: ToastType;
    autoClose?: boolean;
    autoCloseDelay?: number;
    icon?: string;
    iconColor?: string;
}
export declare function getToastContainer(): HTMLIxToastContainerElement;
export declare function setToastPosition(position: ToastPosition): void;
declare function toast(config: ToastConfig): Promise<ShowToastResult>;
declare namespace toast {
    var info: (config: ToastConfig) => Promise<ShowToastResult>;
    var error: (config: ToastConfig) => Promise<ShowToastResult>;
    var success: (config: ToastConfig) => Promise<ShowToastResult>;
    var warning: (config: ToastConfig) => Promise<ShowToastResult>;
}
export { toast };
