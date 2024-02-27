import { EventEmitter } from '../../stencil-public-runtime';
export type SliderMarker = Array<number>;
/**
 * @since 2.0.0
 *
 * @slot label-start - Element will be displayed at the start of the slider
 * @slot label-end - Element will be displayed at the end of the slider
 */
export declare class Slider {
    hostElement: HTMLIxSliderElement;
    /**
     * Legal number intervals
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step
     */
    step: number;
    /**
     * Minimum slider value
     */
    min: number;
    /**
     * Maximum slider value
     */
    max: number;
    /**
     * Current value of the slider
     */
    value: number;
    /**
     * Define tick marker on the slider. Marker has to be within slider min/max
     */
    marker: SliderMarker;
    /**
     * Show a trace line
     */
    trace: boolean;
    /**
     * Define the start point of the trace line
     */
    traceReference: number;
    /**
     * Show control as disabled
     */
    disabled: boolean;
    /**
     * Show error state and message
     */
    error: boolean | string;
    /**
     *
     */
    valueChange: EventEmitter<number>;
    rangeInput: number;
    rangeMin: number;
    rangeMax: number;
    rangeTraceReference: number;
    showTooltip: boolean;
    private a11yAttributes;
    get tooltip(): HTMLIxTooltipElement;
    get pseudoThumb(): HTMLElement;
    get slider(): HTMLInputElement;
    onShowTooltipChange(): void;
    componentWillLoad(): void;
    private updateRangeVariables;
    private onInput;
    private emitInputEvent;
    private isMarkerActive;
    onPointerUp(): void;
    render(): any;
}
