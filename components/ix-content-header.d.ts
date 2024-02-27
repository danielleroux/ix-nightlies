import type { Components, JSX } from "../dist/types/components";

interface IxContentHeader extends Components.IxContentHeader, HTMLElement {}
export const IxContentHeader: {
    prototype: IxContentHeader;
    new (): IxContentHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
