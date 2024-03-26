import { MenuAbout } from "../../menu-about/menu-about";
import { MenuSettings } from "../../menu-settings/menu-settings";
export declare function setTab(context: MenuSettings | MenuAbout, label: string): void;
export declare function initialize(context: MenuSettings | MenuAbout): void;
export interface CustomLabelChangeEvent {
    name: string;
    oldLabel: string;
    newLabel: string;
}
export interface CustomCloseEvent {
    nativeEvent: MouseEvent;
    name: string;
}
