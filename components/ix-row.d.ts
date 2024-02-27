import type { Components, JSX } from "../dist/types/components";

interface IxRow extends Components.IxRow, HTMLElement {}
export const IxRow: {
    prototype: IxRow;
    new (): IxRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
