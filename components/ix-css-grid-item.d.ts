import type { Components, JSX } from "../dist/types/components";

interface IxCssGridItem extends Components.IxCssGridItem, HTMLElement {}
export const IxCssGridItem: {
    prototype: IxCssGridItem;
    new (): IxCssGridItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
