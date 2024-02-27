import type { Components, JSX } from "../dist/types/components";

interface IxActionCard extends Components.IxActionCard, HTMLElement {}
export const IxActionCard: {
    prototype: IxActionCard;
    new (): IxActionCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
