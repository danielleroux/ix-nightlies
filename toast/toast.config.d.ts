import { TemplateRef } from '@angular/core';
import { ToastConfig as IxToastConfig } from '@siemens/ix';
export declare type ToastConfig = Omit<IxToastConfig, 'message'> & {
    message: string | TemplateRef<any>;
};
