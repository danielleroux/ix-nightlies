/// <reference types="react" />
import { ModalConfig as IxModalConfig } from '@siemens/ix';
export * from './modal';
export type ModalConfig = {
    content: React.ReactNode | string;
};
export declare function showModal(config: Omit<IxModalConfig, 'content'> & ModalConfig): Promise<import("@siemens/ix").ModalInstance<any>>;
