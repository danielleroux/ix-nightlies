import type { Components, JSX } from "../dist/types/components";

interface IxModalLoading extends Components.IxModalLoading, HTMLElement {}
export const IxModalLoading: {
    prototype: IxModalLoading;
    new (): IxModalLoading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
