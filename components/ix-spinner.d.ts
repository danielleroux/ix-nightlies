import type { Components, JSX } from "../dist/types/components";

interface IxSpinner extends Components.IxSpinner, HTMLElement {}
export const IxSpinner: {
    prototype: IxSpinner;
    new (): IxSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
