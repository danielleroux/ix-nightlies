import type { Components, JSX } from "../dist/types/components";

interface IxCardList extends Components.IxCardList, HTMLElement {}
export const IxCardList: {
    prototype: IxCardList;
    new (): IxCardList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
