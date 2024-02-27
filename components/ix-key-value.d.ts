import type { Components, JSX } from "../dist/types/components";

interface IxKeyValue extends Components.IxKeyValue, HTMLElement {}
export const IxKeyValue: {
    prototype: IxKeyValue;
    new (): IxKeyValue;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
