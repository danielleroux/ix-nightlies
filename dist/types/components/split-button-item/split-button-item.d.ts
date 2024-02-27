import { EventEmitter } from '../../stencil-public-runtime';
import { DropdownItemWrapper } from '../dropdown/dropdown-controller';
/**
 * @deprecated since 2.0.0. Use the `ix-dropdown-item` component instead.
 */
export declare class SplitButtonItem implements DropdownItemWrapper {
    hostElement: HTMLIxSplitButtonItemElement;
    /**
     * Dropdown icon
     */
    icon: string;
    /**
     * Dropdown label
     */
    label: string;
    /**
     * Dropdown item clicked
     */
    itemClick: EventEmitter<MouseEvent>;
    private wrapperRef;
    /** @internal */
    getDropdownItemElement(): Promise<HTMLIxDropdownItemElement>;
    render(): any;
}
