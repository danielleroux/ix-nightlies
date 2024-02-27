import { EventEmitter } from '../../stencil-public-runtime';
export type ContentHeaderVariant = 'primary' | 'secondary';
export declare class ContentHeader {
    /**
     * Variant of content header
     */
    variant: ContentHeaderVariant;
    /**
     * Title of Header
     */
    headerTitle: string;
    /**
     * Subtitle of Header
     */
    headerSubtitle: string | undefined;
    /**
     * Display a back button
     */
    hasBackButton: boolean;
    /**
     * Triggered when back button is clicked
     */
    backButtonClick: EventEmitter<void>;
    render(): any;
}
