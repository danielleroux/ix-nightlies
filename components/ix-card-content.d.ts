import type { Components, JSX } from "../dist/types/components";

interface IxCardContent extends Components.IxCardContent, HTMLElement {}
export const IxCardContent: {
    prototype: IxCardContent;
    new (): IxCardContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
