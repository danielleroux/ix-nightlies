import type { Components, JSX } from "../dist/types/components";

interface IxApplicationSidebar extends Components.IxApplicationSidebar, HTMLElement {}
export const IxApplicationSidebar: {
    prototype: IxApplicationSidebar;
    new (): IxApplicationSidebar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
