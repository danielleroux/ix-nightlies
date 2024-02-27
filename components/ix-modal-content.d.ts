import type { Components, JSX } from "../dist/types/components";

interface IxModalContent extends Components.IxModalContent, HTMLElement {}
export const IxModalContent: {
    prototype: IxModalContent;
    new (): IxModalContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
