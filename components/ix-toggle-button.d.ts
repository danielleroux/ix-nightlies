import type { Components, JSX } from "../dist/types/components";

interface IxToggleButton extends Components.IxToggleButton, HTMLElement {}
export const IxToggleButton: {
    prototype: IxToggleButton;
    new (): IxToggleButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
