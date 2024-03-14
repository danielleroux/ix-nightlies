/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Injectable } from '@angular/core';
import { getToastContainer, toast, } from '@siemens/ix';
import * as i0 from "@angular/core";
export class ToastService {
    setPosition(position) {
        getToastContainer().position = position;
    }
    getPosition() {
        return getToastContainer().position;
    }
    async show(config) {
        if (typeof config.message === 'string') {
            return toast(config);
        }
        const context = {
            close: null,
        };
        const embeddedView = config.message.createEmbeddedView({
            $implicit: context,
        });
        const node = embeddedView.rootNodes[0];
        const instance = await toast({
            ...config,
            message: node,
        });
        context.close = () => {
            instance.close();
        };
        embeddedView.detectChanges();
        instance.onClose.once(() => {
            embeddedView.destroy();
        });
        return instance;
    }
}
/** @nocollapse */ ToastService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ ToastService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ToastService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdC90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0dBT0c7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsS0FBSyxHQUVOLE1BQU0sYUFBYSxDQUFDOztBQU1yQixNQUFNLE9BQU8sWUFBWTtJQUN2QixXQUFXLENBQUMsUUFBc0M7UUFDaEQsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUN0QyxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFtQjtRQUM1QixJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDdEMsT0FBTyxLQUFLLENBQUMsTUFBdUIsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsTUFBTSxPQUFPLEdBRVQ7WUFDRixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7UUFFRixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQ3JELFNBQVMsRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFnQixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDO1lBQzNCLEdBQUcsTUFBTTtZQUNULE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDbkIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQztRQUVGLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU3QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDekIsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7NEhBekNVLFlBQVk7Z0lBQVosWUFBWSxjQUZYLE1BQU07MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTaWVtZW5zIEFHXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldFRvYXN0Q29udGFpbmVyLFxuICB0b2FzdCxcbiAgVG9hc3RDb25maWcgYXMgSXhUb2FzdENvbmZpZyxcbn0gZnJvbSAnQHNpZW1lbnMvaXgnO1xuaW1wb3J0IHsgVG9hc3RDb25maWcgfSBmcm9tICcuL3RvYXN0LmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuICBzZXRQb3NpdGlvbihwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcgfCAndG9wLXJpZ2h0Jykge1xuICAgIGdldFRvYXN0Q29udGFpbmVyKCkucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiBnZXRUb2FzdENvbnRhaW5lcigpLnBvc2l0aW9uO1xuICB9XG5cbiAgYXN5bmMgc2hvdyhjb25maWc6IFRvYXN0Q29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcubWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0b2FzdChjb25maWcgYXMgSXhUb2FzdENvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dDoge1xuICAgICAgY2xvc2U6ICgoKSA9PiB2b2lkKSB8IG51bGw7XG4gICAgfSA9IHtcbiAgICAgIGNsb3NlOiBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBlbWJlZGRlZFZpZXcgPSBjb25maWcubWVzc2FnZS5jcmVhdGVFbWJlZGRlZFZpZXcoe1xuICAgICAgJGltcGxpY2l0OiBjb250ZXh0LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9kZTogSFRNTEVsZW1lbnQgPSBlbWJlZGRlZFZpZXcucm9vdE5vZGVzWzBdO1xuICAgIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgdG9hc3Qoe1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgbWVzc2FnZTogbm9kZSxcbiAgICB9KTtcblxuICAgIGNvbnRleHQuY2xvc2UgPSAoKSA9PiB7XG4gICAgICBpbnN0YW5jZS5jbG9zZSgpO1xuICAgIH07XG5cbiAgICBlbWJlZGRlZFZpZXcuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgaW5zdGFuY2Uub25DbG9zZS5vbmNlKCgpID0+IHtcbiAgICAgIGVtYmVkZGVkVmlldy5kZXN0cm95KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cbn1cbiJdfQ==