import type { Components, JSX } from "../dist/types/components";

interface IxApplication extends Components.IxApplication, HTMLElement {}
export const IxApplication: {
    prototype: IxApplication;
    new (): IxApplication;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
