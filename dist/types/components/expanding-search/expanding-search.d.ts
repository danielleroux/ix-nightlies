import { EventEmitter } from '../../stencil-public-runtime';
export declare class ExpandingSearch {
    /**
     * Search icon
     */
    icon: string;
    /**
     * Placeholder text
     */
    placeholder: string;
    /**
     * Default value
     */
    value: string;
    /**
     * If true the search field will fill all available horizontal space of it's parent container when expanded.
     * @since 1.6.0
     */
    fullWidth: boolean;
    isFieldChanged: boolean;
    expanded: boolean;
    hasFocus: boolean;
    /**
     * Value changed
     */
    valueChange: EventEmitter<string>;
    private expandInput;
    private collapseInput;
    private clearInput;
    private onChange;
    private textInput?;
    constructor();
    private focusTextInput;
    private clearClicked;
    render(): any;
}
