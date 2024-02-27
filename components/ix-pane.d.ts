import type { Components, JSX } from "../dist/types/components";

interface IxPane extends Components.IxPane, HTMLElement {}
export const IxPane: {
    prototype: IxPane;
    new (): IxPane;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
