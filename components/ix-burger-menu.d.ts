import type { Components, JSX } from "../dist/types/components";

interface IxBurgerMenu extends Components.IxBurgerMenu, HTMLElement {}
export const IxBurgerMenu: {
    prototype: IxBurgerMenu;
    new (): IxBurgerMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
