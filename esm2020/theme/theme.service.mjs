/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { EventEmitter, Injectable, Output } from '@angular/core';
import { themeSwitcher } from '@siemens/ix';
import * as i0 from "@angular/core";
/**
 * @deprecated Use themeSwitcher from core package `import { themeSwitcher } from '@siemens/ix';`
 */
export class ThemeService {
    constructor() {
        this.themeChanged = new EventEmitter();
        this.themeSwitcher = themeSwitcher;
        this.themeSwitcher.themeChanged.on((theme) => this.themeChanged.emit(theme));
    }
    toggleMode() {
        this.themeSwitcher.toggleMode();
    }
    setTheme(themeName) {
        this.themeSwitcher.setTheme(themeName);
    }
}
/** @nocollapse */ ThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ ThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ThemeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { themeChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZS90aGVtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0dBT0c7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFNUM7O0dBRUc7QUFJSCxNQUFNLE9BQU8sWUFBWTtJQUt2QjtRQUpVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUtsRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUSxDQUFDLFNBQWlCO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OzRIQWxCVSxZQUFZO2dJQUFaLFlBQVksY0FGWCxNQUFNOzJGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzBFQUVXLFlBQVk7c0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTaWVtZW5zIEFHXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aGVtZVN3aXRjaGVyIH0gZnJvbSAnQHNpZW1lbnMvaXgnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB0aGVtZVN3aXRjaGVyIGZyb20gY29yZSBwYWNrYWdlIGBpbXBvcnQgeyB0aGVtZVN3aXRjaGVyIH0gZnJvbSAnQHNpZW1lbnMvaXgnO2BcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lU2VydmljZSB7XG4gIEBPdXRwdXQoKSB0aGVtZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBwcml2YXRlIHRoZW1lU3dpdGNoZXI6IHR5cGVvZiB0aGVtZVN3aXRjaGVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGhlbWVTd2l0Y2hlciA9IHRoZW1lU3dpdGNoZXI7XG4gICAgdGhpcy50aGVtZVN3aXRjaGVyLnRoZW1lQ2hhbmdlZC5vbigodGhlbWU6IHN0cmluZykgPT5cbiAgICAgIHRoaXMudGhlbWVDaGFuZ2VkLmVtaXQodGhlbWUpXG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGUoKTogdm9pZCB7XG4gICAgdGhpcy50aGVtZVN3aXRjaGVyLnRvZ2dsZU1vZGUoKTtcbiAgfVxuXG4gIHNldFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50aGVtZVN3aXRjaGVyLnNldFRoZW1lKHRoZW1lTmFtZSk7XG4gIH1cbn1cbiJdfQ==