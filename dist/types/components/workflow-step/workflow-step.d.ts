import { EventEmitter } from '../../stencil-public-runtime';
export declare class WorkflowStep {
    hostElement: HTMLIxWorkflowStepElement;
    /**
     * Select orientation
     */
    vertical: boolean;
    /**
     * Set disabled
     */
    disabled: boolean;
    /**
     * Set status
     */
    status: 'open' | 'success' | 'done' | 'warning' | 'error';
    /**
     * Activate navigation click
     */
    clickable: boolean;
    /**
     * Set selected
     */
    selected: boolean;
    /**
     * Activate navigation click
     *
     * @internal
     */
    position: 'first' | 'last' | 'single' | 'undefined';
    iconName: 'circle' | 'circle-dot' | 'success' | 'warning' | 'error';
    iconColor: string;
    /**
     * @internal
     */
    selectedChanged: EventEmitter<HTMLIxWorkflowStepElement>;
    private customIconSlot;
    selectedHandler(): void;
    watchPropHandler(): void;
    componentDidLoad(): void;
    onStepClick(): void;
    render(): any;
}
