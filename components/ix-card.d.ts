import type { Components, JSX } from "../dist/types/components";

interface IxCard extends Components.IxCard, HTMLElement {}
export const IxCard: {
    prototype: IxCard;
    new (): IxCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
