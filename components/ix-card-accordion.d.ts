import type { Components, JSX } from "../dist/types/components";

interface IxCardAccordion extends Components.IxCardAccordion, HTMLElement {}
export const IxCardAccordion: {
    prototype: IxCardAccordion;
    new (): IxCardAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
