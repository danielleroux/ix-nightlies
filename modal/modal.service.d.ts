import { ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { ModalConfig } from './modal.config';
import * as i0 from "@angular/core";
export declare class ModalService {
    private appRef;
    private componentFactoryResolver;
    private injector;
    constructor(appRef: ApplicationRef, componentFactoryResolver: ComponentFactoryResolver, injector: Injector);
    open<TData = any, TReason = any>(config: ModalConfig<TData>): Promise<import("@siemens/ix").ModalInstance<TReason>>;
    private createContentByComponentType;
    private createContentByTemplateRef;
    private createModalInstance;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalService>;
}
