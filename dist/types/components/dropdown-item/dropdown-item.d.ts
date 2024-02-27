import { EventEmitter } from '../../stencil-public-runtime';
import { DropdownItemWrapper } from '../dropdown/dropdown-controller';
export declare class DropdownItem implements DropdownItemWrapper {
    hostElement: HTMLIxDropdownItemElement;
    /**
     * Label of dropdown item
     */
    label: string;
    /**
     * Icon of dropdown item
     */
    icon: string;
    /**
     * Display hover state
     */
    hover: boolean;
    /**
     * Disable item and remove event listeners
     */
    disabled: boolean;
    /**
     * Whether the item is checked or not. If true a checkmark will mark the item as checked.
     */
    checked: boolean;
    /** @internal */
    isSubMenu: boolean;
    /** @internal */
    suppressChecked: boolean;
    /** @internal */
    itemClick: EventEmitter<HTMLIxDropdownItemElement>;
    /**
     * Internal usage only
     */
    emitItemClick(): Promise<void>;
    /** @internal */
    getDropdownItemElement(): Promise<HTMLIxDropdownItemElement>;
    private isIconOnly;
    render(): any;
}
