import { EventEmitter } from '../../stencil-public-runtime';
export declare class Toggle {
    hostElement: HTMLIxToggleElement;
    /**
     * Whether the slide-toggle element is checked or not.
     */
    checked: boolean;
    /**
     * Whether the slide-toggle element is disabled or not.
     */
    disabled: boolean;
    /**
     * If true the control is in indeterminate state
     */
    indeterminate: boolean;
    /**
     * Text for on state
     */
    textOn: string;
    /**
     * Text for off state
     */
    textOff: string;
    /**
     * Text for indeterminate state
     */
    textIndeterminate: string;
    /**
     * Hide `on` and `off` text
     */
    hideText: boolean;
    /**
     * An event will be dispatched each time the slide-toggle changes its value.
     */
    checkedChange: EventEmitter<boolean>;
    onCheckedChange(newChecked: boolean): void;
    render(): any;
}
