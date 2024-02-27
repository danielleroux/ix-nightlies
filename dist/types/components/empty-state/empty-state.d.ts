import { EventEmitter } from '../../stencil-public-runtime';
export type EmptyStateLayout = 'large' | 'compact' | 'compactBreak';
/**
 * @since 1.6.0
 */
export declare class EmptyState {
    /**
     * Optional empty state layout - one of 'large', 'compact' or 'compactBreak'
     */
    layout: EmptyStateLayout;
    /**
     * Optional empty state icon
     */
    icon: string;
    /**
     * Empty state header
     */
    header: string;
    /**
     * Optional empty state sub header
     */
    subHeader: string;
    /**
     * Optional empty state action
     */
    action: string;
    /**
     * Empty state action click event
     */
    actionClick: EventEmitter<void>;
    render(): any;
}
