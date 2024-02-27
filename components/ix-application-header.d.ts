import type { Components, JSX } from "../dist/types/components";

interface IxApplicationHeader extends Components.IxApplicationHeader, HTMLElement {}
export const IxApplicationHeader: {
    prototype: IxApplicationHeader;
    new (): IxApplicationHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
