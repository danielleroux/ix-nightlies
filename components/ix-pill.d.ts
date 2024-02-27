import type { Components, JSX } from "../dist/types/components";

interface IxPill extends Components.IxPill, HTMLElement {}
export const IxPill: {
    prototype: IxPill;
    new (): IxPill;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
