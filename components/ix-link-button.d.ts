import type { Components, JSX } from "../dist/types/components";

interface IxLinkButton extends Components.IxLinkButton, HTMLElement {}
export const IxLinkButton: {
    prototype: IxLinkButton;
    new (): IxLinkButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
