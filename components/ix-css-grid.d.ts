import type { Components, JSX } from "../dist/types/components";

interface IxCssGrid extends Components.IxCssGrid, HTMLElement {}
export const IxCssGrid: {
    prototype: IxCssGrid;
    new (): IxCssGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
