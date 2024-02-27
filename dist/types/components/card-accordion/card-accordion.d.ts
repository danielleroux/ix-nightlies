import { EventEmitter } from '../../stencil-public-runtime';
export type CardAccordionExpandChangeEvent = {
    expand: boolean;
    nativeEvent: Event;
};
/**
 * @since 1.6.0
 */
export declare class CardAccordion {
    /**
     * Collapse the card
     * @since 2.1.0
     */
    collapse: boolean;
    hostElement: HTMLIxCardAccordionElement;
    /**
     * @internal
     */
    accordionExpand: EventEmitter<CardAccordionExpandChangeEvent>;
    expandContent: boolean;
    onInitialExpandChange(): void;
    get expandedContent(): Element;
    onExpandActionClick(event: Event): void;
    private scrollExpandedContentIntoView;
    componentWillLoad(): void;
    render(): any;
}
