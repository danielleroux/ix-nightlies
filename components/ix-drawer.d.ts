import type { Components, JSX } from "../dist/types/components";

interface IxDrawer extends Components.IxDrawer, HTMLElement {}
export const IxDrawer: {
    prototype: IxDrawer;
    new (): IxDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
