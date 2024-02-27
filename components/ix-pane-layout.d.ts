import type { Components, JSX } from "../dist/types/components";

interface IxPaneLayout extends Components.IxPaneLayout, HTMLElement {}
export const IxPaneLayout: {
    prototype: IxPaneLayout;
    new (): IxPaneLayout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
