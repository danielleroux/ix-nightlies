import type { Components, JSX } from "../dist/types/components";

interface IxUpload extends Components.IxUpload, HTMLElement {}
export const IxUpload: {
    prototype: IxUpload;
    new (): IxUpload;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
