import { IxComponent } from '../utils/internal';
export type CloseBehavior = 'inside' | 'outside' | 'both' | boolean;
export interface DropdownInterface extends IxComponent {
    closeBehavior: CloseBehavior;
    discoverAllSubmenus: boolean;
    getAssignedSubmenuIds(): string[];
    getId(): string;
    discoverSubmenu(): void;
    isPresent(): boolean;
    willPresent?(): boolean;
    willDismiss?(): boolean;
    present(): void;
    dismiss(): void;
}
export declare function hasDropdownItemWrapperImplemented(item: unknown): item is DropdownItemWrapper;
export interface DropdownItemWrapper {
    getDropdownItemElement(): Promise<HTMLIxDropdownItemElement>;
}
declare class DropdownController {
    private dropdowns;
    private submenuIds;
    private isWindowListenerActive;
    connected(dropdown: DropdownInterface): void;
    disconnected(dropdown: DropdownInterface): void;
    discoverSubmenus(): void;
    present(dropdown: DropdownInterface): void;
    dismissChildren(uid: string): void;
    dismiss(dropdown: DropdownInterface): void;
    dismissAll(ignoreBehaviorForIds?: string[]): void;
    dismissOthers(uid: string): void;
    pathIncludesTrigger(eventTargets: EventTarget[]): boolean;
    private pathIncludesDropdown;
    private buildComposedPath;
    private addOverlayListeners;
}
export declare const addDisposableEventListener: (element: Element | Window | Document, eventType: string, callback: EventListenerOrEventListenerObject) => () => void;
export declare const addDisposableEventListenerAsArray: (listener: {
    element: Element | Window | Document;
    eventType: string;
    callback: EventListenerOrEventListenerObject;
}[]) => () => void;
export declare const dropdownController: DropdownController;
export {};
