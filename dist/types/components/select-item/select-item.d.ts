import { EventEmitter } from '../../stencil-public-runtime';
export declare class SelectItem {
    hostElement: HTMLIxSelectItemElement;
    /**
     * Displayed name of the item
     */
    label: string;
    /**
     * The value of the item.
     * Important: The select component uses string values to handle selection and will call toString() on this value.
     * Therefor a string should be passed to value to prevent unexpected behavior.
     * @deprecated will be changed to type string with next major release (3.0.0)
     */
    value: any;
    /**
     * Flag indicating whether the item is selected
     */
    selected: boolean;
    /**
     * @internal
     */
    hover: boolean;
    /**
     * Item clicked
     */
    itemClick: EventEmitter<string>;
    /**
     * @internal
     * @param event
     */
    onItemClick(event?: CustomEvent<HTMLIxDropdownItemElement>): Promise<void>;
    componentDidRender(): void;
    labelChange(newValue: string, oldValue: string): void;
    render(): any;
}
