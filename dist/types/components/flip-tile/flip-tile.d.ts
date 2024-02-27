import { FlipTileState } from './flip-tile-state';
export declare class FlipTile {
    hostElement: HTMLIxFlipTileElement;
    /**
     * Variation of the Flip
     */
    state: FlipTileState;
    /**
     * Height interpreted as REM
     * @since 1.5.0
     */
    height: number | 'auto';
    /**
     * Width interpreted as REM
     * @since 1.5.0
     */
    width: number | 'auto';
    index: number;
    isFlipAnimationActive: boolean;
    private readonly ANIMATION_DURATION;
    private contentItems;
    private observer;
    componentDidLoad(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private updateContentItems;
    private updateContentVisibility;
    private toggleIndex;
    private doFlipAnimation;
    render(): any;
}
