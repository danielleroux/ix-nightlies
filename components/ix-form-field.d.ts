import type { Components, JSX } from "../dist/types/components";

interface IxFormField extends Components.IxFormField, HTMLElement {}
export const IxFormField: {
    prototype: IxFormField;
    new (): IxFormField;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
