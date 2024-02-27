import type { Components, JSX } from "../dist/types/components";

interface IxToastContainer extends Components.IxToastContainer, HTMLElement {}
export const IxToastContainer: {
    prototype: IxToastContainer;
    new (): IxToastContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
