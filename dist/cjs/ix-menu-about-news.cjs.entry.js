'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const menuAboutNewsCss = ":host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-1);border:var(--theme-weak-bdr-1);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--animate-duration);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-1);border-left:var(--theme-weak-bdr-1);border-bottom:var(--theme-weak-bdr-1);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}";
const IxMenuAboutNewsStyle0 = menuAboutNewsCss;

const MenuAboutNews = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showMore = index.createEvent(this, "showMore", 7);
        this.closePopover = index.createEvent(this, "closePopover", 7);
        this.show = false;
        this.label = undefined;
        this.i18nShowMore = 'Show more';
        this.aboutItemLabel = undefined;
        this.offsetBottom = 0;
        this.expanded = false;
    }
    render() {
        return (index.h(index.Host, { key: '68c7b89c941490a9f993ff438f467b85728c2ec9', class: {
                expanded: this.expanded,
                show: !this.show,
            } }, index.h("div", { key: 'a283d2f9dec7a45df431e66fb78acc253809445d', class: "banner-container" }, index.h("ix-icon", { key: '44719bde7dd4cc7c25c5b533505015c438f59d69', color: "color-inv-contrast-text", name: 'shout', size: "32" }), index.h("svg", { key: '0b7609be92104e596fe316d3184f48edd4ce1759', viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, index.h("polygon", { key: 'c8bf079e3fc6c3e5ec466fdb4897629dd05aeda5', points: "0 0 48 0 48 56 24 48 0 56" }))), index.h("div", { key: 'f536fbadf821b348be5ba8dfea2a81aff3c35a15', class: "cui-popover-news-header" }, index.h("ix-typography", { key: '5dbeea3eb20c7a75b58ae63742b873d1fb0d8d4b', variant: "default-title-single" }, this.label)), index.h("ix-icon-button", { key: '1f1d87f8bfab4360b9038e054b5d843add2e96aa', size: "24", icon: 'close-small', ghost: true, onClick: () => {
                this.show = false;
                this.closePopover.emit();
            } }), index.h("div", { key: '78c8f326074a31c9e907b1ec7027145a3695a49b', class: "slot-container" }, index.h("slot", { key: '6064820e78272bb071f0972e9340f3a9ab7d9871' })), this.aboutItemLabel ? (index.h("div", { class: "cui-popover-news-footer" }, index.h("ix-button", { variant: "primary", onClick: (e) => {
                this.show = false;
                this.showMore.emit(e);
            } }, this.i18nShowMore))) : null, index.h("div", { key: 'e0f23aa73e83a1a4f7731b4dec5e738d6c1ebbf3', id: "arrow" })));
    }
};
MenuAboutNews.style = IxMenuAboutNewsStyle0;

exports.ix_menu_about_news = MenuAboutNews;

//# sourceMappingURL=ix-menu-about-news.cjs.entry.js.map