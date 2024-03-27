import { r as registerInstance, h, H as Host } from './index-5cd176b3.js';

const flipTileContentCss = ":host{display:block}";
const IxFlipTileContentStyle0 = flipTileContentCss;

const FlipTileContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.contentVisible = false;
    }
    render() {
        return h(Host, { key: 'e92abcbb8b1cfdeb739ee4933f6ed66a6c2a7dc5' }, this.contentVisible ? h("slot", null) : null);
    }
};
FlipTileContent.style = IxFlipTileContentStyle0;

export { FlipTileContent as ix_flip_tile_content };

//# sourceMappingURL=ix-flip-tile-content.entry.js.map