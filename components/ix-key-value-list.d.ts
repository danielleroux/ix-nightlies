import type { Components, JSX } from "../dist/types/components";

interface IxKeyValueList extends Components.IxKeyValueList, HTMLElement {}
export const IxKeyValueList: {
    prototype: IxKeyValueList;
    new (): IxKeyValueList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
