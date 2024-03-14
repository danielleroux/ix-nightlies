import { __decorate } from "tslib";
/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './../angular-component-lib/utils';
import * as i0 from "@angular/core";
let IxTree = class IxTree {
    constructor(c, r, z) {
        this.z = z;
        this.renderCache = new Map();
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['contextChange', 'nodeRemoved']);
        this.onRemovedSubscription = this.nodeRemoved.subscribe((removedEvent) => {
            const { detail } = removedEvent;
            detail.forEach((removedItemElement) => {
                if (this.renderCache.has(removedItemElement)) {
                    this.renderCache.get(removedItemElement)?.destroy();
                    this.renderCache.delete(removedItemElement);
                }
            });
        });
    }
    set renderItem(template) {
        const itemRenderFunction = this.generateItemRenderer(template);
        this.el.renderItem = itemRenderFunction.bind(this);
    }
    ngOnDestroy() {
        this.onRemovedSubscription?.unsubscribe();
    }
    generateItemRenderer(templateRef) {
        return (_, itemData, __, context, update) => {
            const treeItem = document.createElement('ix-tree-item');
            treeItem.hasChildren = itemData.hasChildren;
            treeItem.context = context[itemData.id];
            const embeddedView = templateRef.createEmbeddedView({
                $implicit: itemData.data,
            });
            const container = embeddedView.rootNodes[0];
            embeddedView.detectChanges();
            update((itemData, context) => {
                treeItem.context = context[itemData.id];
                treeItem.hasChildren = itemData.hasChildren;
                embeddedView.context = {
                    $implicit: itemData.data,
                };
                embeddedView.detectChanges();
            });
            treeItem.appendChild(container);
            this.renderCache.set(treeItem, embeddedView);
            return treeItem;
        };
    }
};
/** @nocollapse */ IxTree.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTree, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxTree.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxTree, selector: "ix-tree", inputs: { context: "context", model: "model", root: "root", renderItem: "renderItem" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxTree = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['context', 'model', 'root'],
    })
], IxTree);
export { IxTree };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTree, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-tree',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['context', 'model', 'root'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { renderItem: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmVlL3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7O0dBT0c7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFJVCxLQUFLLEdBSU4sTUFBTSxlQUFlLENBQUM7QUFRdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7SUF1QjdELE1BQU0sU0FBTixNQUFNO0lBYWpCLFlBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFacEUsZ0JBQVcsR0FBRyxJQUFJLEdBQUcsRUFBcUMsQ0FBQztRQWF6RCxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDMUIsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUNyRCxDQUFDLFlBQWtELEVBQUUsRUFBRTtZQUNyRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDO1lBRWhDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUM7b0JBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7aUJBQzdDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUEzQkQsSUFDSSxVQUFVLENBQUMsUUFBMEI7UUFDdkMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEVBQXdCLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBeUJELFdBQVc7UUFDVCxJQUFJLENBQUMscUJBQXFCLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELG9CQUFvQixDQUFDLFdBQTZCO1FBQ2hELE9BQU8sQ0FDTCxDQUFTLEVBQ1QsUUFBYSxFQUNiLEVBQVMsRUFDVCxPQUFvQixFQUNwQixNQUEwQyxFQUMxQyxFQUFFO1lBQ0YsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN4RCxRQUFRLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFDNUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXhDLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEQsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJO2FBQ3pCLENBQUMsQ0FBQztZQUVILE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRTdCLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRTtnQkFDM0IsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QyxRQUFRLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7Z0JBRTVDLFlBQVksQ0FBQyxPQUFPLEdBQUc7b0JBQ3JCLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSTtpQkFDekIsQ0FBQztnQkFFRixZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFFSCxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUU3QyxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtzSEF4RVksTUFBTTswR0FBTixNQUFNLHVJQUhQLDJCQUEyQjtBQUcxQixNQUFNO0lBVmxCLFFBQVEsQ0FBQztRQUNSLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7S0FDckMsQ0FBQztHQU9XLE1BQU0sQ0F3RWxCO1NBeEVZLE1BQU07MkZBQU4sTUFBTTtrQkFObEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO2lCQUNyQztzSkFLSyxVQUFVO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTaWVtZW5zIEFHXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7XG4gIENvbXBvbmVudHMsXG4gIFRyZWVDb250ZXh0IGFzIElDd1RyZWVUcmVlQ29udGV4dCxcbiAgVHJlZUNvbnRleHQsXG4gIFVwZGF0ZUNhbGxiYWNrLFxufSBmcm9tICdAc2llbWVucy9peCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb3h5Q21wLCBwcm94eU91dHB1dHMgfSBmcm9tICcuLy4uL2FuZ3VsYXItY29tcG9uZW50LWxpYi91dGlscyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJeFRyZWUgZXh0ZW5kcyBPbWl0PENvbXBvbmVudHMuSXhUcmVlLCAncmVuZGVySXRlbSc+IHtcbiAgLyoqXG4gICAqIENvbnRleHQgY2hhbmdlZFxuICAgKi9cbiAgY29udGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PElDd1RyZWVUcmVlQ29udGV4dD4+O1xuICAvKipcbiAgICogRW1pdHMgcmVtb3ZlZCBub2Rlc1xuICAgKi9cbiAgbm9kZVJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+Pjtcbn1cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiB1bmRlZmluZWQsXG4gIGlucHV0czogWydjb250ZXh0JywgJ21vZGVsJywgJ3Jvb3QnXSxcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpeC10cmVlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGlucHV0czogWydjb250ZXh0JywgJ21vZGVsJywgJ3Jvb3QnXSxcbn0pXG5leHBvcnQgY2xhc3MgSXhUcmVlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcmVuZGVyQ2FjaGUgPSBuZXcgTWFwPEhUTUxFbGVtZW50LCBFbWJlZGRlZFZpZXdSZWY8YW55Pj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgcmVuZGVySXRlbSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGNvbnN0IGl0ZW1SZW5kZXJGdW5jdGlvbiA9IHRoaXMuZ2VuZXJhdGVJdGVtUmVuZGVyZXIodGVtcGxhdGUpO1xuICAgICh0aGlzLmVsIGFzIEhUTUxJeFRyZWVFbGVtZW50KS5yZW5kZXJJdGVtID0gaXRlbVJlbmRlckZ1bmN0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuXG4gIG9uUmVtb3ZlZFN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydjb250ZXh0Q2hhbmdlJywgJ25vZGVSZW1vdmVkJ10pO1xuXG4gICAgdGhpcy5vblJlbW92ZWRTdWJzY3JpcHRpb24gPSB0aGlzLm5vZGVSZW1vdmVkLnN1YnNjcmliZShcbiAgICAgIChyZW1vdmVkRXZlbnQ6IEN1c3RvbUV2ZW50PEhUTUxJeFRyZWVJdGVtRWxlbWVudFtdPikgPT4ge1xuICAgICAgICBjb25zdCB7IGRldGFpbCB9ID0gcmVtb3ZlZEV2ZW50O1xuXG4gICAgICAgIGRldGFpbC5mb3JFYWNoKChyZW1vdmVkSXRlbUVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5yZW5kZXJDYWNoZS5oYXMocmVtb3ZlZEl0ZW1FbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDYWNoZS5nZXQocmVtb3ZlZEl0ZW1FbGVtZW50KT8uZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDYWNoZS5kZWxldGUocmVtb3ZlZEl0ZW1FbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uUmVtb3ZlZFN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdlbmVyYXRlSXRlbVJlbmRlcmVyKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIF86IG51bWJlcixcbiAgICAgIGl0ZW1EYXRhOiBhbnksXG4gICAgICBfXzogYW55W10sXG4gICAgICBjb250ZXh0OiBUcmVlQ29udGV4dCxcbiAgICAgIHVwZGF0ZTogKGNhbGxiYWNrOiBVcGRhdGVDYWxsYmFjaykgPT4gdm9pZFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgdHJlZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpeC10cmVlLWl0ZW0nKTtcbiAgICAgIHRyZWVJdGVtLmhhc0NoaWxkcmVuID0gaXRlbURhdGEuaGFzQ2hpbGRyZW47XG4gICAgICB0cmVlSXRlbS5jb250ZXh0ID0gY29udGV4dFtpdGVtRGF0YS5pZF07XG5cbiAgICAgIGNvbnN0IGVtYmVkZGVkVmlldyA9IHRlbXBsYXRlUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh7XG4gICAgICAgICRpbXBsaWNpdDogaXRlbURhdGEuZGF0YSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBlbWJlZGRlZFZpZXcucm9vdE5vZGVzWzBdO1xuICAgICAgZW1iZWRkZWRWaWV3LmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgdXBkYXRlKChpdGVtRGF0YSwgY29udGV4dCkgPT4ge1xuICAgICAgICB0cmVlSXRlbS5jb250ZXh0ID0gY29udGV4dFtpdGVtRGF0YS5pZF07XG4gICAgICAgIHRyZWVJdGVtLmhhc0NoaWxkcmVuID0gaXRlbURhdGEuaGFzQ2hpbGRyZW47XG5cbiAgICAgICAgZW1iZWRkZWRWaWV3LmNvbnRleHQgPSB7XG4gICAgICAgICAgJGltcGxpY2l0OiBpdGVtRGF0YS5kYXRhLFxuICAgICAgICB9O1xuXG4gICAgICAgIGVtYmVkZGVkVmlldy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgICAgdHJlZUl0ZW0uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMucmVuZGVyQ2FjaGUuc2V0KHRyZWVJdGVtLCBlbWJlZGRlZFZpZXcpO1xuXG4gICAgICByZXR1cm4gdHJlZUl0ZW07XG4gICAgfTtcbiAgfVxufVxuIl19