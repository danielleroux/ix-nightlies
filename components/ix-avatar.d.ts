import type { Components, JSX } from "../dist/types/components";

interface IxAvatar extends Components.IxAvatar, HTMLElement {}
export const IxAvatar: {
    prototype: IxAvatar;
    new (): IxAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
