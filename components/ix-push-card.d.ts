import type { Components, JSX } from "../dist/types/components";

interface IxPushCard extends Components.IxPushCard, HTMLElement {}
export const IxPushCard: {
    prototype: IxPushCard;
    new (): IxPushCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
