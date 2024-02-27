import { EventEmitter } from '../../stencil-public-runtime';
import { IxSelectItemLabelChangeEvent } from '../select-item/events';
export declare class Select {
    hostElement: HTMLIxSelectElement;
    /**
     * Indices of selected items.
     * This corresponds to the value property of ix-select-items and therefor not necessarily the indices of the items in the list.
     * @deprecated since 2.0.0. Use the `value` property instead.
     */
    selectedIndices?: string | string[];
    /**
     * Current selected value.
     * This corresponds to the value property of ix-select-items
     * @since 2.0.0
     */
    value?: string | string[];
    /**
     * Show clear button
     */
    allowClear: boolean;
    /**
     * Selection mode
     */
    mode: 'single' | 'multiple';
    /**
     * Select is extendable
     */
    editable: boolean;
    /**
     * If true the select will be in disabled state
     */
    disabled: boolean;
    /**
     * If true the select will be in readonly mode
     */
    readonly: boolean;
    /**
     * Input field placeholder
     */
    i18nPlaceholder: string;
    /**
     * Input field placeholder for editable select
     */
    i18nPlaceholderEditable: string;
    /**
     * Select list header
     */
    i18nSelectListHeader: string;
    /**
     * Hint inside of dropdown if no items where found with current filter text
     *
     * @since 1.5.0
     */
    i18nNoMatches: string;
    /**
     * Hide list header
     *
     * @since 1.5.0
     */
    hideListHeader: boolean;
    /**
     * Value changed
     * @since 2.0.0
     */
    valueChange: EventEmitter<string | string[]>;
    /**
     * Item selection changed
     * @deprecated since 2.0.0. Use `valueChange` instead.
     */
    itemSelectionChange: EventEmitter<string[]>;
    /**
     * Event dispatched whenever the text input changes.
     *
     * @since 2.0.0
     */
    inputChange: EventEmitter<string>;
    /**
     * Item added to selection
     */
    addItem: EventEmitter<string>;
    dropdownShow: boolean;
    selectedLabels: string[];
    dropdownWrapperRef: HTMLElement;
    dropdownAnchor: HTMLElement;
    isDropdownEmpty: boolean;
    hasFocus: boolean;
    navigationItem: HTMLIxSelectItemElement;
    inputFilterText: string;
    inputValue: string;
    private inputRef;
    private dropdownRef;
    private addItemRef;
    private labelMutationObserver;
    get items(): HTMLIxSelectItemElement[];
    get selectedItems(): HTMLIxSelectItemElement[];
    get addItemButton(): Element;
    get isSingleMode(): boolean;
    get isMultipleMode(): boolean;
    get isEveryDropdownItemHidden(): boolean;
    watchSelectedIndices(value: string | string[]): void;
    watchValue(value: string | string[]): void;
    onItemClicked(event: CustomEvent<string>): void;
    private itemClick;
    private emitAddItem;
    private toggleValue;
    private updateSelection;
    private emitValueChange;
    componentDidLoad(): void;
    componentWillLoad(): void;
    onLabelChange(event: IxSelectItemLabelChangeEvent): void;
    disconnectedCallback(): void;
    private itemExists;
    private dropdownVisibilityChanged;
    onKeyDown(event: KeyboardEvent): Promise<void>;
    private onEnterNavigation;
    private onArrowNavigation;
    private applyFocusTo;
    private filterItemsWithTypeahead;
    private removeHiddenFromItems;
    private clearInput;
    private clear;
    private onInputBlur;
    private placeholderValue;
    private isAddItemVisible;
    render(): any;
}
