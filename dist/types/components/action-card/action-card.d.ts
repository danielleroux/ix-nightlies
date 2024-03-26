import { CardVariant } from '../card/card';
export type ActionCardVariant = CardVariant;
/**
 * @since 1.6.0
 */
export declare class IxActionCard {
    /**
     * Card variant
     */
    variant: ActionCardVariant;
    /**
     * Card icon
     */
    icon: string | undefined;
    /**
     * Card heading
     */
    heading: string;
    /**
     * Card subheading
     */
    subheading: string;
    /**
     * Card selection
     */
    selected: boolean;
    render(): any;
}
