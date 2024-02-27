import { TypedEvent } from '../typed-event';
declare class MenuService {
    #private;
    menuElement: HTMLIxMenuElement | null;
    menuExpandChange: TypedEvent<boolean>;
    register(menuElement: HTMLIxMenuElement): void;
    setIsPinned(pinned: boolean): void;
    open(): Promise<boolean>;
    close(): Promise<boolean>;
    toggle(): Promise<boolean>;
    get nativeElement(): HTMLIxMenuElement;
    get expandChange(): TypedEvent<boolean>;
    get isPinned(): boolean;
}
export declare const menuController: MenuService;
export {};
