import type { Components, JSX } from "../dist/types/components";

interface IxTypography extends Components.IxTypography, HTMLElement {}
export const IxTypography: {
    prototype: IxTypography;
    new (): IxTypography;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
