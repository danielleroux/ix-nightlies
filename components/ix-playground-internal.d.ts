import type { Components, JSX } from "../dist/types/components";

interface IxPlaygroundInternal extends Components.IxPlaygroundInternal, HTMLElement {}
export const IxPlaygroundInternal: {
    prototype: IxPlaygroundInternal;
    new (): IxPlaygroundInternal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
