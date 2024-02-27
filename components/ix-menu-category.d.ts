import type { Components, JSX } from "../dist/types/components";

interface IxMenuCategory extends Components.IxMenuCategory, HTMLElement {}
export const IxMenuCategory: {
    prototype: IxMenuCategory;
    new (): IxMenuCategory;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
