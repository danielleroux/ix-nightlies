import { EventEmitter } from '../../stencil-public-runtime';
export declare class FilterChip {
    el: HTMLIxFilterChipElement;
    /**
     * If true the filter chip will be in disabled state
     */
    disabled: boolean;
    /**
     * If true the filter chip will be in readonly mode
     * @since 2.0.0
     */
    readonly: boolean;
    /**
     * Close clicked
     */
    closeClick: EventEmitter<void>;
    private onCloseClick;
    render(): any;
}
