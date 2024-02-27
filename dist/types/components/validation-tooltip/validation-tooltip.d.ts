import { Side } from '../dropdown/placement';
type Position = {
    x: number;
    y: number;
};
/**
 * @slot tooltip-message - Custom tooltip message with html support
 */
export declare class ValidationTooltip {
    hostElement: HTMLIxValidationTooltipElement;
    /**
     * Message of the tooltip
     */
    message: string;
    /**
     * Placement of the tooltip
     */
    placement: Side;
    /**
     * Suppress the automatic placement of the dropdown.
     *
     * @since 2.0.0
     */
    suppressAutomaticPlacement: boolean;
    isInputValid: boolean;
    tooltipPosition: Position;
    arrowPosition: Position;
    private onSubmitBind;
    private onInputFocusBind;
    private autoUpdateCleanup;
    private observer;
    get arrow(): HTMLElement;
    get inputElement(): HTMLInputElement;
    get formElement(): HTMLFormElement;
    get tooltipElement(): HTMLElement;
    private destroyAutoUpdate;
    private applyTooltipPosition;
    componentDidLoad(): void;
    private onInputFocus;
    private onSubmit;
    disconnectedCallback(): void;
    validationChanged(): void;
    render(): any;
}
export {};
