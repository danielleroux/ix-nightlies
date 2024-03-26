import { r as registerInstance, h, H as Host } from './index-f18c5ad1.js';

const flipTileContentCss = ":host{display:block}";
const IxFlipTileContentStyle0 = flipTileContentCss;

const FlipTileContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.contentVisible = false;
    }
    render() {
        return h(Host, { key: '73bbcf0a6ae4c5e285d289f23d4d07025d4b5051' }, this.contentVisible ? h("slot", null) : null);
    }
};
FlipTileContent.style = IxFlipTileContentStyle0;

export { FlipTileContent as ix_flip_tile_content };

//# sourceMappingURL=ix-flip-tile-content.entry.js.map