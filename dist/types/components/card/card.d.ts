export type CardVariant = 'insight' | 'notification' | 'alarm' | 'critical' | 'warning' | 'info' | 'neutral' | 'success' | 'primary';
/**
 * @since 1.6.0
 */
export declare class Card {
    hostElement: HTMLIxCardElement;
    /**
     * Card variant
     */
    variant: CardVariant;
    /**
     * @since 2.1.0
     */
    selected: boolean;
    render(): any;
}
