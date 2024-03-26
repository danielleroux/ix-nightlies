'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const flipTileContentCss = ":host{display:block}";
const IxFlipTileContentStyle0 = flipTileContentCss;

const FlipTileContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.contentVisible = false;
    }
    render() {
        return index.h(index.Host, { key: 'e92abcbb8b1cfdeb739ee4933f6ed66a6c2a7dc5' }, this.contentVisible ? index.h("slot", null) : null);
    }
};
FlipTileContent.style = IxFlipTileContentStyle0;

exports.ix_flip_tile_content = FlipTileContent;

//# sourceMappingURL=ix-flip-tile-content.cjs.entry.js.map