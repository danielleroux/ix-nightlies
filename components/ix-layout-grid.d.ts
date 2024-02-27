import type { Components, JSX } from "../dist/types/components";

interface IxLayoutGrid extends Components.IxLayoutGrid, HTMLElement {}
export const IxLayoutGrid: {
    prototype: IxLayoutGrid;
    new (): IxLayoutGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
