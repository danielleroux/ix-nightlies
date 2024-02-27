import type { Components, JSX } from "../dist/types/components";

interface IxCardTitle extends Components.IxCardTitle, HTMLElement {}
export const IxCardTitle: {
    prototype: IxCardTitle;
    new (): IxCardTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
