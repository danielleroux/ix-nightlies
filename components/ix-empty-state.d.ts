import type { Components, JSX } from "../dist/types/components";

interface IxEmptyState extends Components.IxEmptyState, HTMLElement {}
export const IxEmptyState: {
    prototype: IxEmptyState;
    new (): IxEmptyState;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
