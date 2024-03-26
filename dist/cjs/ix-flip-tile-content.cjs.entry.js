'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

const flipTileContentCss = ":host{display:block}";
const IxFlipTileContentStyle0 = flipTileContentCss;

const FlipTileContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.contentVisible = false;
    }
    render() {
        return index.h(index.Host, { key: '73bbcf0a6ae4c5e285d289f23d4d07025d4b5051' }, this.contentVisible ? index.h("slot", null) : null);
    }
};
FlipTileContent.style = IxFlipTileContentStyle0;

exports.ix_flip_tile_content = FlipTileContent;

//# sourceMappingURL=ix-flip-tile-content.cjs.entry.js.map