import { EventEmitter } from '../../stencil-public-runtime';
export declare class WorkflowSteps {
    hostElement: HTMLIxWorkflowStepsElement;
    /**
     * Select orientation
     */
    vertical: boolean;
    /**
     * Activate navigation click
     */
    clickable: boolean;
    /**
     * Activate navigation click
     */
    selectedIndex: number;
    /**
     * On step selected event
     */
    stepSelected: EventEmitter<number>;
    private getSteps;
    updateSteps(): void;
    private observer;
    onStepSelectionChanged(event: CustomEvent<HTMLIxWorkflowStepElement>): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    componentDidRender(): void;
    render(): any;
}
