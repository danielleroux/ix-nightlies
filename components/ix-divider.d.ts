import type { Components, JSX } from "../dist/types/components";

interface IxDivider extends Components.IxDivider, HTMLElement {}
export const IxDivider: {
    prototype: IxDivider;
    new (): IxDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
