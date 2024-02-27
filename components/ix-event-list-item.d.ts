import type { Components, JSX } from "../dist/types/components";

interface IxEventListItem extends Components.IxEventListItem, HTMLElement {}
export const IxEventListItem: {
    prototype: IxEventListItem;
    new (): IxEventListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
