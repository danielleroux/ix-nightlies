import { ChangeDetectorRef, ElementRef, EmbeddedViewRef, EventEmitter, NgZone, OnDestroy, TemplateRef } from '@angular/core';
import type { Components, TreeContext as ICwTreeTreeContext, TreeContext, UpdateCallback } from '@siemens/ix';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare interface IxTree extends Omit<Components.IxTree, 'renderItem'> {
    /**
     * Context changed
     */
    contextChange: EventEmitter<CustomEvent<ICwTreeTreeContext>>;
    /**
     * Emits removed nodes
     */
    nodeRemoved: EventEmitter<CustomEvent<any>>;
}
export declare class IxTree implements OnDestroy {
    protected z: NgZone;
    renderCache: Map<HTMLElement, EmbeddedViewRef<any>>;
    set renderItem(template: TemplateRef<any>);
    protected el: HTMLElement;
    onRemovedSubscription: Subscription;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    ngOnDestroy(): void;
    generateItemRenderer(templateRef: TemplateRef<any>): (_: number, itemData: any, __: any[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLIxTreeItemElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<IxTree, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxTree, "ix-tree", never, { "context": "context"; "model": "model"; "root": "root"; "renderItem": "renderItem"; }, {}, never, ["*"]>;
}
