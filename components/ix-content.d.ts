import type { Components, JSX } from "../dist/types/components";

interface IxContent extends Components.IxContent, HTMLElement {}
export const IxContent: {
    prototype: IxContent;
    new (): IxContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
