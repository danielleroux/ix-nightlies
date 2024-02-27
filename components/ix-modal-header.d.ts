import type { Components, JSX } from "../dist/types/components";

interface IxModalHeader extends Components.IxModalHeader, HTMLElement {}
export const IxModalHeader: {
    prototype: IxModalHeader;
    new (): IxModalHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
