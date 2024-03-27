export declare class InputGroup {
    hostElement: HTMLIxInputGroupElement;
    inputPaddingLeft: number;
    inputPaddingRight: number;
    private get inputElement();
    private observer;
    componentWillLoad(): void;
    componentDidRender(): void;
    private onValidInput;
    private onInvalidInput;
    private prepareInputElement;
    private startSlotChanged;
    private endSlotChanged;
    private getChildrenWidth;
    render(): any;
}
