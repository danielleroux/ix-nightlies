import type { Components, JSX } from "../dist/types/components";

interface IxTabs extends Components.IxTabs, HTMLElement {}
export const IxTabs: {
    prototype: IxTabs;
    new (): IxTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
