import type { Components, JSX } from "../dist/types/components";

interface IxCol extends Components.IxCol, HTMLElement {}
export const IxCol: {
    prototype: IxCol;
    new (): IxCol;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
