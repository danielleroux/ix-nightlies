import type { Components, JSX } from "../dist/types/components";

interface IxSlider extends Components.IxSlider, HTMLElement {}
export const IxSlider: {
    prototype: IxSlider;
    new (): IxSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
