import { TemplateRef, Type } from '@angular/core';
import { ModalConfig as IxModalConfig } from '@siemens/ix';
export declare type ModalConfig<TDATA = any> = Omit<IxModalConfig, 'content'> & {
    content: TemplateRef<unknown> | Type<unknown>;
    data?: TDATA;
};
