'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const mutationObserver = require('./mutation-observer-babb20a5.js');

const cardListCss = ":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;margin:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .CardList_Title{display:flex;position:relative;height:1.5rem;align-items:center;width:100%;margin-bottom:0.5rem}:host .CardList__Title__Button{margin-right:1rem;transition:var(--theme-default-time) transform ease-in-out}:host .CardList__Title__Button__Collapsed{transform:rotate(-90deg)}:host .CardList__Title__Show__All{align-self:center;margin-left:auto;margin-right:0px}:host .CardList__Content{display:flex;position:relative;height:calc(100% - 1.5rem);width:100%;gap:1.5rem;transition:var(--theme-default-time) ease-in-out;overflow:auto}:host .CardList__Content__Collapsed{min-height:0px;max-height:0px;overflow:hidden;opacity:0}:host .CardList__Style__Flexbox__Scroll{flex-wrap:wrap}:host .CardList__Style__Infinite__Scroll{flex-wrap:nowrap;-ms-overflow-style:none;scrollbar-width:none}:host .CardList__Style__Infinite__Scroll::-webkit-scrollbar{display:none}:host .CardList__Overflow{display:block;position:relative;height:100%;width:100%;pointer-events:all;-webkit-mask-image:var(--ix-card-list-overflow, none);mask-image:var(--ix-card-list-overflow, none)}:host .Show__All__Card{display:flex;position:relative;align-self:flex-start;justify-self:center;max-width:11.25rem;min-width:11.25rem;width:11.25rem;min-height:11.25rem;max-height:11.25rem;height:11.25rem;--ix-card-border-color:var(--theme-color-primary);color:var(--theme-color-primary)}:host .CardList__Style__Infinite__Scroll .Show__All__Card{margin-top:2.375rem}:host .CardList__Style__Flexbox__Scroll .Show__All__Card{margin-bottom:2.375rem}:host .Show__All__Card:hover{background-color:var(--theme-color-ghost--hover)}:host .Show__All__Card:active{background-color:var(--theme-color-ghost--active)}:host .Show__All__Card__Content{display:flex;justify-content:center;align-items:center}:host .Show__All__Card__Icon{display:flex;position:absolute;height:4rem;width:4rem;justify-content:center;align-items:center}:host .Show__All__Card__Text{margin-bottom:0px;margin-top:auto}";
const IxCardListStyle0 = cardListCss;

function CardListTitle(props) {
    if (props.label === '') {
        return null;
    }
    return (index.h("div", { class: "CardList_Title" }, index.h("ix-icon-button", { ghost: true, icon: 'chevron-down', onClick: props.onClick, color: "color-primary", class: {
            CardList__Title__Button: true,
            CardList__Title__Button__Collapsed: props.isCollapsed,
        } }), index.h("ix-typography", { variant: "large-single" }, props.label), index.h("ix-button", { class: "CardList__Title__Show__All", ghost: true, onClick: props.onShowAllClick }, index.h("span", null, props.showAllLabel), index.h("span", null, !isNaN(props.showAllCounter) ? ` (${props.showAllCounter})` : null))));
}
const CardList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.collapseChanged = index.createEvent(this, "collapseChanged", 7);
        this.showAllClick = index.createEvent(this, "showAllClick", 7);
        this.showMoreCardClick = index.createEvent(this, "showMoreCardClick", 7);
        this.label = undefined;
        this.collapse = false;
        this.listStyle = 'stack';
        this.maxVisibleCards = 12;
        this.showAllCount = undefined;
        this.suppressOverflowHandling = false;
        this.i18nShowAll = 'Show all';
        this.i18nMoreCards = 'There are more cards available';
        this.hasOverflowingElements = false;
        this.numberOfOverflowingElements = 0;
        this.numberOfAllChildElements = 0;
        this.leftScrollDistance = 0;
        this.rightScrollDistance = 0;
    }
    onCardListVisibilityToggle() {
        this.collapse = !this.collapse;
        this.collapseChanged.emit(this.collapse);
    }
    onShowAllClick(event) {
        this.showAllClick.emit({
            nativeEvent: event,
        });
    }
    getListChildren() {
        const slot = this.hostElement.shadowRoot.querySelector('.CardList__Content > slot');
        return slot.assignedElements({ flatten: true });
    }
    changeVisibilityOfSlotChildren() {
        const childElements = this.getListChildren();
        childElements.forEach((element, index) => {
            if (element instanceof HTMLElement) {
                if (index > this.maxVisibleCards - 1) {
                    element.classList.add('d-none');
                    return;
                }
                element.classList.remove('d-none');
            }
        });
        this.hasOverflowingElements = childElements.length > this.maxVisibleCards;
        this.numberOfOverflowingElements =
            childElements.length - this.maxVisibleCards;
        this.numberOfAllChildElements = childElements.length;
        this.detectOverflow();
    }
    registerOverflowHandler() {
        this.observer = mutationObserver.createMutationObserver(() => {
            this.changeVisibilityOfSlotChildren();
        });
        this.observer.observe(this.hostElement.shadowRoot.querySelector('.CardList__Content'), {
            childList: true,
            subtree: true,
        });
        requestAnimationFrame(() => {
            this.changeVisibilityOfSlotChildren();
        });
    }
    shouldHandleOverflow() {
        if (this.suppressOverflowHandling) {
            return false;
        }
        if (this.listStyle === 'stack' || this.listStyle === 'scroll') {
            return true;
        }
    }
    get listElement() {
        return this.hostElement.shadowRoot.querySelector('.CardList__Content');
    }
    onCardListScroll() {
        this.detectOverflow();
    }
    isShowMoreCardVisible() {
        return (this.suppressOverflowHandling === false && this.hasOverflowingElements);
    }
    getOpacityFromScrollDistance(distance) {
        if (!this.listElement) {
            return 0;
        }
        if (distance === 0) {
            return 0;
        }
        if (distance > 100) {
            return 1;
        }
        return distance / 100;
    }
    computeMaskLayer() {
        const maxOverflowWidth = 80;
        const maskLayer = `linear-gradient(
      90deg,
      transparent 0px,
      black ${maxOverflowWidth *
            (this.getOpacityFromScrollDistance(this.leftScrollDistance) > 0 ? 1 : 0)}px,
      black calc(100% - ${maxOverflowWidth *
            (this.getOpacityFromScrollDistance(this.rightScrollDistance) > 0
                ? 1
                : 0)}px),
      transparent 100%
    )`;
        return {
            '--ix-card-list-overflow': maskLayer,
        };
    }
    detectOverflow() {
        const { clientWidth, scrollWidth, scrollLeft } = this.listElement;
        this.leftScrollDistance = scrollLeft;
        this.rightScrollDistance = scrollWidth - scrollLeft - clientWidth;
    }
    componentDidLoad() {
        if (this.shouldHandleOverflow()) {
            this.registerOverflowHandler();
        }
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    render() {
        return (index.h(index.Host, { key: 'c328d27069ea738a47d5887b8fc92026eb41ed41' }, index.h(CardListTitle, { key: '846c7c0a11d45da394795bec62a345daa1c44cf0', isCollapsed: this.collapse, label: this.label, showAllLabel: this.i18nShowAll, showAllCounter: this.showAllCount === undefined
                ? this.numberOfAllChildElements
                : this.showAllCount, onClick: () => this.onCardListVisibilityToggle(), onShowAllClick: (e) => this.onShowAllClick(e) }), index.h("div", { key: '56889ca9212e46c12653179c8a981b2e43277231', class: {
                CardList__Overflow: true,
            }, style: this.computeMaskLayer() }, index.h("div", { key: '9befdceda0ca5ba093f170e3e0e4e58ddbd06113', class: {
                CardList__Content: true,
                CardList__Content__Collapsed: this.collapse,
                CardList__Style__Flexbox__Scroll: this.listStyle === 'stack',
                CardList__Style__Infinite__Scroll: this.listStyle === 'scroll',
            }, onScroll: () => this.onCardListScroll() }, index.h("slot", { key: '36c242f6e1400a7e0258b005b5a558db5c9fe210', onSlotchange: () => this.changeVisibilityOfSlotChildren() }), this.isShowMoreCardVisible() ? (index.h("ix-card", { class: {
                Show__All__Card: true,
            }, onClick: (event) => this.showMoreCardClick.emit({
                nativeEvent: event,
            }) }, index.h("ix-card-content", { class: "Show__All__Card__Content" }, index.h("ix-icon", { name: 'more-menu', size: '32', class: 'Show__All__Card__Icon' }), index.h("span", { class: "Show__All__Card__Text" }, this.i18nMoreCards, " (", this.numberOfOverflowingElements, ")")))) : null))));
    }
    get hostElement() { return index.getElement(this); }
};
CardList.style = IxCardListStyle0;

exports.ix_card_list = CardList;

//# sourceMappingURL=ix-card-list.cjs.entry.js.map