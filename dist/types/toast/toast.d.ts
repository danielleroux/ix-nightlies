/// <reference types="react" />
import { ToastConfig as IxToastConfig } from '@siemens/ix';
export type ToastConfig = {
    message: string | React.ReactNode;
};
export declare function showToast(config: Omit<IxToastConfig, 'message'> & ToastConfig): Promise<import("@siemens/ix").ShowToastResult>;
