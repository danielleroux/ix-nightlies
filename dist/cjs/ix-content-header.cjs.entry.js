'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

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
        return (index.h(index.Host, { key: '9376b89cd7ea2f1a169e0b2fce2e2a7aa8e5f46a' }, this.hasBackButton ? (index.h("ix-icon-button", { class: 'backButton', variant: "primary", icon: 'arrow-left', ghost: true, onClick: () => this.backButtonClick.emit() })) : null, index.h("div", { key: '6141d3d548f39bff6176fcefd6149fe044792626', class: "titleGroup" }, index.h("ix-typography", { key: '5f97d37172b511b47b7c803beea7e99c15203757', variant: this.variant === 'secondary' ? 'large-single' : 'h2' }, this.headerTitle), this.headerSubtitle !== undefined ? (index.h("ix-typography", { variant: 'caption', color: 'soft', class: "subtitle" }, this.headerSubtitle)) : null), index.h("div", { key: '38152287e955d5b149ac6c4bd5df99d4920ca587', class: "buttons" }, index.h("slot", { key: '1d1bcc39278e91ff5da85460149ed76399ccbb1c' }))));
    }
};
ContentHeader.style = IxContentHeaderStyle0;

exports.ix_content_header = ContentHeader;

//# sourceMappingURL=ix-content-header.cjs.entry.js.map