'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

const contentHeaderCss = ":host{display:flex;flex-direction:row;align-items:flex-start;padding:0px}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0%}:host .subtitle{margin-top:0.5rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}";
const IxContentHeaderStyle0 = contentHeaderCss;

const ContentHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.backButtonClick = index.createEvent(this, "backButtonClick", 7);
        this.variant = 'primary';
        this.headerTitle = undefined;
        this.headerSubtitle = undefined;
        this.hasBackButton = false;
    }
    render() {
        return (index.h(index.Host, { key: 'eae27014039b16c023892b60cc904609e55b89ad' }, this.hasBackButton ? (index.h("ix-icon-button", { class: 'backButton', variant: "primary", icon: 'arrow-left', ghost: true, onClick: () => this.backButtonClick.emit() })) : null, index.h("div", { key: '397be2503715bb15d260bcfada2260a8eb72e33b', class: "titleGroup" }, index.h("ix-typography", { key: '5d08e001eb5178aaf4b089a4faa15bc759a43b6b', variant: this.variant === 'secondary' ? 'large-single' : 'h2' }, this.headerTitle), this.headerSubtitle !== undefined ? (index.h("ix-typography", { variant: 'caption', color: 'soft', class: "subtitle" }, this.headerSubtitle)) : null), index.h("div", { key: '6c6cc165c96307a6ee2c2bec59a80d6cd62a02cf', class: "buttons" }, index.h("slot", { key: '0ac3730bb5ec852b127554e8dbdd73970204e275' }))));
    }
};
ContentHeader.style = IxContentHeaderStyle0;

exports.ix_content_header = ContentHeader;

//# sourceMappingURL=ix-content-header.cjs.entry.js.map