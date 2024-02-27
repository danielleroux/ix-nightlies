import type { Components, JSX } from "../dist/types/components";

interface IxPagination extends Components.IxPagination, HTMLElement {}
export const IxPagination: {
    prototype: IxPagination;
    new (): IxPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
