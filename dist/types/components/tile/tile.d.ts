export declare class Tile {
    hostElement: HTMLIxTileElement;
    /**
     * Size of the tile - one of 'small', 'medium' or 'large'
     */
    size: 'small' | 'medium' | 'big';
    hasHeaderSlot: boolean;
    hasFooterSlot: boolean;
    handleHeaderSlotChange(): void;
    handleFooterSlotChange(): void;
    render(): any;
}
