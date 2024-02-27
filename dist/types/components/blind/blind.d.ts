import { EventEmitter } from '../../stencil-public-runtime';
import { CardVariant } from '../card/card';
export type BlindVariant = CardVariant | 'outline';
export declare class Blind {
    /**
     * Collapsed state
     */
    collapsed: boolean;
    /**
     * Label of blind
     */
    label: string;
    /**
     * Secondary label inside blind header
     * @since 2.0.0
     */
    sublabel: string;
    /**
     * Optional icon to be displayed next to the header label
     * @since 1.5.0
     */
    icon: string;
    /**
     * Blind variant
     * @since 2.0.0
     */
    variant: BlindVariant;
    /**
     * Collapsed state changed
     */
    collapsedChange: EventEmitter<boolean>;
    hostElement: HTMLIxBlindElement;
    private chevronRef;
    private blindId;
    constructor();
    private onHeaderClick;
    componentDidLoad(): void;
    get content(): Element;
    animation(isCollapsed: boolean): void;
    private animateCollapse;
    private rotateChevronDown;
    private rotateChevronRight;
    render(): any;
}
