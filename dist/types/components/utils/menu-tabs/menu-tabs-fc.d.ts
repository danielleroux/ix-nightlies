import { FunctionalComponent } from '../../../stencil-public-runtime';
import { MenuAbout } from "../../menu-about/menu-about";
import { MenuSettings } from "../../menu-settings/menu-settings";
interface MenuTabsProps {
    context: MenuSettings | MenuAbout;
}
export declare const MenuTabs: FunctionalComponent<MenuTabsProps>;
export {};
