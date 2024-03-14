import { ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ValueAccessor implements ControlValueAccessor {
    protected el: ElementRef;
    private onChange;
    private onTouched;
    protected lastValue: any;
    constructor(el: ElementRef);
    writeValue(value: any): void;
    handleChangeEvent(value: any): void;
    _handleBlurEvent(): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ValueAccessor, never, never, {}, {}, never>;
}
