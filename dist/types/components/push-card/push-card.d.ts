import { CardVariant } from '../card/card';
export type PushCardVariant = CardVariant;
/**
 * @since 1.6.0
 */
export declare class PushCard {
    /**
     * Card icon
     */
    icon: string | undefined;
    /**
     * Card KPI value
     */
    notification: string;
    /**
     * Card heading
     */
    heading: string;
    /**
     * Card subheading
     */
    subheading: string;
    /**
     * Card variant
     */
    variant: PushCardVariant;
    /**
     * Collapse the card
     * @since 2.1.0
     */
    collapse: boolean;
    render(): any;
}
