import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import type { Components } from '@siemens/ix';
import * as i0 from "@angular/core";
export declare interface IxIcon extends Components.IxIcon {
}
export declare class IxIcon {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxIcon, "ix-icon", never, { "color": "color"; "name": "name"; "size": "size"; }, {}, never, ["*"]>;
}
