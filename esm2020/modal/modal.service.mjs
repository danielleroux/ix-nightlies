/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ElementRef, Injectable, Injector, Type, } from '@angular/core';
import { closeModal, dismissModal, showModal } from '@siemens/ix';
import { InternalIxActiveModal, IxActiveModal } from './modal-ref';
import * as i0 from "@angular/core";
export class ModalService {
    constructor(appRef, componentFactoryResolver, injector) {
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    async open(config) {
        const context = {
            close: null,
            dismiss: null,
            data: config.data,
        };
        if (config.content instanceof Type) {
            return this.createContentByComponentType(config.content, config, context);
        }
        const modalInstance = await this.createContentByTemplateRef(config.content, config, context);
        return modalInstance;
    }
    async createContentByComponentType(componentType, config, context) {
        const activeModal = new InternalIxActiveModal(context.data);
        const modalFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        const modalInjector = Injector.create({
            providers: [
                {
                    provide: IxActiveModal,
                    useValue: activeModal,
                },
            ],
            parent: this.injector,
        });
        const instance = modalFactory.create(modalInjector);
        this.appRef.attachView(instance.hostView);
        const element = instance.injector.get(ElementRef);
        const modalInstance = await this.createModalInstance(context, element.nativeElement, instance.hostView, config);
        activeModal.setModalElement(modalInstance.htmlElement);
        return modalInstance;
    }
    async createContentByTemplateRef(templateRef, config, context) {
        const embeddedView = templateRef.createEmbeddedView({
            $implicit: context,
        });
        this.appRef.attachView(embeddedView);
        return await this.createModalInstance(context, embeddedView.rootNodes[0], embeddedView, config);
    }
    async createModalInstance(context, htmlElement, viewRef, config) {
        context.close = (result) => {
            closeModal(htmlElement, result);
        };
        context.dismiss = (result) => {
            dismissModal(htmlElement, result);
        };
        viewRef.detectChanges();
        const modalInstance = await showModal({
            ...config,
            content: htmlElement,
        });
        modalInstance.onClose.once(() => {
            viewRef.destroy();
        });
        modalInstance.onDismiss.once(() => {
            viewRef.destroy();
        });
        return modalInstance;
    }
}
/** @nocollapse */ ModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ModalService, deps: [{ token: i0.ApplicationRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ ModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ModalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RhbC9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0dBT0c7QUFFSCxPQUFPLEVBR0wsVUFBVSxFQUNWLFVBQVUsRUFDVixRQUFRLEVBRVIsSUFBSSxHQUVMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQVluRSxNQUFNLE9BQU8sWUFBWTtJQUN2QixZQUNVLE1BQXNCLEVBQ3RCLHdCQUFrRCxFQUNsRCxRQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGFBQVEsR0FBUixRQUFRLENBQVU7SUFDekIsQ0FBQztJQUVKLEtBQUssQ0FBQyxJQUFJLENBQTZCLE1BQTBCO1FBQy9ELE1BQU0sT0FBTyxHQUF3QjtZQUNuQyxLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1NBQ2xCLENBQUM7UUFFRixJQUFJLE1BQU0sQ0FBQyxPQUFPLFlBQVksSUFBSSxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUN0QyxNQUFNLENBQUMsT0FBTyxFQUNkLE1BQU0sRUFDTixPQUFPLENBQ1IsQ0FBQztTQUNIO1FBRUQsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQ3pELE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxFQUNOLE9BQU8sQ0FDUixDQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVPLEtBQUssQ0FBQyw0QkFBNEIsQ0FDeEMsYUFBNEIsRUFDNUIsTUFBMEIsRUFDMUIsT0FBNEI7UUFFNUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxxQkFBcUIsQ0FBUSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkUsTUFBTSxZQUFZLEdBQ2hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV2RSxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbEQsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQ2xELE9BQU8sRUFDUCxPQUFPLENBQUMsYUFBYSxFQUNyQixRQUFRLENBQUMsUUFBUSxFQUNqQixNQUFNLENBQ1AsQ0FBQztRQUVGLFdBQVcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxLQUFLLENBQUMsMEJBQTBCLENBQ3RDLFdBQWlDLEVBQ2pDLE1BQTBCLEVBQzFCLE9BQTRCO1FBRTVCLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztZQUNsRCxTQUFTLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVyQyxPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUNuQyxPQUFPLEVBQ1AsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDekIsWUFBWSxFQUNaLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUVPLEtBQUssQ0FBQyxtQkFBbUIsQ0FDL0IsT0FBNEIsRUFDNUIsV0FBd0IsRUFDeEIsT0FBZ0IsRUFDaEIsTUFBMEI7UUFFMUIsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzlCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDO1FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQVksRUFBRSxFQUFFO1lBQ2pDLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO1FBRUYsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXhCLE1BQU0sYUFBYSxHQUFHLE1BQU0sU0FBUyxDQUFVO1lBQzdDLEdBQUcsTUFBTTtZQUNULE9BQU8sRUFBRSxXQUFXO1NBQ3JCLENBQUMsQ0FBQztRQUVILGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM5QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7NEhBcEhVLFlBQVk7Z0lBQVosWUFBWSxjQUZYLE1BQU07MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTaWVtZW5zIEFHXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld1JlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjbG9zZU1vZGFsLCBkaXNtaXNzTW9kYWwsIHNob3dNb2RhbCB9IGZyb20gJ0BzaWVtZW5zL2l4JztcbmltcG9ydCB7IEludGVybmFsSXhBY3RpdmVNb2RhbCwgSXhBY3RpdmVNb2RhbCB9IGZyb20gJy4vbW9kYWwtcmVmJztcbmltcG9ydCB7IE1vZGFsQ29uZmlnIH0gZnJvbSAnLi9tb2RhbC5jb25maWcnO1xuXG50eXBlIE1vZGFsQ29udGV4dDxUPiA9IHtcbiAgY2xvc2U6ICgocmVzdWx0OiBhbnkpID0+IHZvaWQpIHwgbnVsbDtcbiAgZGlzbWlzczogKChyZXN1bHQ/OiBhbnkpID0+IHZvaWQpIHwgbnVsbDtcbiAgZGF0YT86IFQ7XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGFzeW5jIG9wZW48VERhdGEgPSBhbnksIFRSZWFzb24gPSBhbnk+KGNvbmZpZzogTW9kYWxDb25maWc8VERhdGE+KSB7XG4gICAgY29uc3QgY29udGV4dDogTW9kYWxDb250ZXh0PFREYXRhPiA9IHtcbiAgICAgIGNsb3NlOiBudWxsLFxuICAgICAgZGlzbWlzczogbnVsbCxcbiAgICAgIGRhdGE6IGNvbmZpZy5kYXRhLFxuICAgIH07XG5cbiAgICBpZiAoY29uZmlnLmNvbnRlbnQgaW5zdGFuY2VvZiBUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDb250ZW50QnlDb21wb25lbnRUeXBlPFREYXRhLCBUUmVhc29uPihcbiAgICAgICAgY29uZmlnLmNvbnRlbnQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb2RhbEluc3RhbmNlID0gYXdhaXQgdGhpcy5jcmVhdGVDb250ZW50QnlUZW1wbGF0ZVJlZjxURGF0YSwgVFJlYXNvbj4oXG4gICAgICBjb25maWcuY29udGVudCxcbiAgICAgIGNvbmZpZyxcbiAgICAgIGNvbnRleHRcbiAgICApO1xuXG4gICAgcmV0dXJuIG1vZGFsSW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0ZUNvbnRlbnRCeUNvbXBvbmVudFR5cGU8VERhdGEgPSBhbnksIFRSZWFzb24gPSBhbnk+KFxuICAgIGNvbXBvbmVudFR5cGU6IFR5cGU8dW5rbm93bj4sXG4gICAgY29uZmlnOiBNb2RhbENvbmZpZzxURGF0YT4sXG4gICAgY29udGV4dDogTW9kYWxDb250ZXh0PFREYXRhPlxuICApIHtcbiAgICBjb25zdCBhY3RpdmVNb2RhbCA9IG5ldyBJbnRlcm5hbEl4QWN0aXZlTW9kYWw8VERhdGE+KGNvbnRleHQuZGF0YSk7XG5cbiAgICBjb25zdCBtb2RhbEZhY3RvcnkgPVxuICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSk7XG5cbiAgICBjb25zdCBtb2RhbEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSXhBY3RpdmVNb2RhbCxcbiAgICAgICAgICB1c2VWYWx1ZTogYWN0aXZlTW9kYWwsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBtb2RhbEZhY3RvcnkuY3JlYXRlKG1vZGFsSW5qZWN0b3IpO1xuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoaW5zdGFuY2UuaG9zdFZpZXcpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGluc3RhbmNlLmluamVjdG9yLmdldChFbGVtZW50UmVmKTtcblxuICAgIGNvbnN0IG1vZGFsSW5zdGFuY2UgPSBhd2FpdCB0aGlzLmNyZWF0ZU1vZGFsSW5zdGFuY2U8VERhdGEsIFRSZWFzb24+KFxuICAgICAgY29udGV4dCxcbiAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgIGluc3RhbmNlLmhvc3RWaWV3LFxuICAgICAgY29uZmlnXG4gICAgKTtcblxuICAgIGFjdGl2ZU1vZGFsLnNldE1vZGFsRWxlbWVudChtb2RhbEluc3RhbmNlLmh0bWxFbGVtZW50KTtcblxuICAgIHJldHVybiBtb2RhbEluc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGVDb250ZW50QnlUZW1wbGF0ZVJlZjxURGF0YSA9IGFueSwgVFJlYXNvbiA9IGFueT4oXG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHVua25vd24+LFxuICAgIGNvbmZpZzogTW9kYWxDb25maWc8VERhdGE+LFxuICAgIGNvbnRleHQ6IE1vZGFsQ29udGV4dDxURGF0YT5cbiAgKSB7XG4gICAgY29uc3QgZW1iZWRkZWRWaWV3ID0gdGVtcGxhdGVSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHtcbiAgICAgICRpbXBsaWNpdDogY29udGV4dCxcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoZW1iZWRkZWRWaWV3KTtcblxuICAgIHJldHVybiBhd2FpdCB0aGlzLmNyZWF0ZU1vZGFsSW5zdGFuY2U8VERhdGEsIFRSZWFzb24+KFxuICAgICAgY29udGV4dCxcbiAgICAgIGVtYmVkZGVkVmlldy5yb290Tm9kZXNbMF0sXG4gICAgICBlbWJlZGRlZFZpZXcsXG4gICAgICBjb25maWdcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGVNb2RhbEluc3RhbmNlPFREYXRhID0gYW55LCBUUmVhc29uID0gYW55PihcbiAgICBjb250ZXh0OiBNb2RhbENvbnRleHQ8VERhdGE+LFxuICAgIGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICB2aWV3UmVmOiBWaWV3UmVmLFxuICAgIGNvbmZpZzogTW9kYWxDb25maWc8VERhdGE+XG4gICkge1xuICAgIGNvbnRleHQuY2xvc2UgPSAocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGNsb3NlTW9kYWwoaHRtbEVsZW1lbnQsIHJlc3VsdCk7XG4gICAgfTtcblxuICAgIGNvbnRleHQuZGlzbWlzcyA9IChyZXN1bHQ/OiBhbnkpID0+IHtcbiAgICAgIGRpc21pc3NNb2RhbChodG1sRWxlbWVudCwgcmVzdWx0KTtcbiAgICB9O1xuXG4gICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICBjb25zdCBtb2RhbEluc3RhbmNlID0gYXdhaXQgc2hvd01vZGFsPFRSZWFzb24+KHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIGNvbnRlbnQ6IGh0bWxFbGVtZW50LFxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5vbkNsb3NlLm9uY2UoKCkgPT4ge1xuICAgICAgdmlld1JlZi5kZXN0cm95KCk7XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLm9uRGlzbWlzcy5vbmNlKCgpID0+IHtcbiAgICAgIHZpZXdSZWYuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBtb2RhbEluc3RhbmNlO1xuICB9XG59XG4iXX0=