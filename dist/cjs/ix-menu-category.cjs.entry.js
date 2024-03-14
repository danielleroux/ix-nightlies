'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const anime_es = require('./anime.es-e2814360.js');
const context = require('./context-98f4a0b3.js');
const mutationObserver = require('./mutation-observer-babb20a5.js');
require('./typed-event-8032c0c0.js');

const menuCategoryCss = ":host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--theme-default-time) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--collapsed{display:none}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;padding-left:0.125rem;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}";
const IxMenuCategoryStyle0 = menuCategoryCss;

const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const MenuCategory = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
        this.icon = undefined;
        this.notifications = undefined;
        this.menuExpand = false;
        this.showItems = false;
        this.showDropdown = false;
        this.nestedItems = [];
    }
    isNestedItemActive() {
        return this.getNestedItems().some((item) => item.active);
    }
    getNestedItems() {
        return Array.from(this.hostElement.querySelectorAll(':scope ix-menu-item'));
    }
    getNestedItemsHeight() {
        const items = this.getNestedItems();
        return items.length * DefaultIxMenuItemHeight;
    }
    onExpandCategory(showItems) {
        if (showItems) {
            this.animateFadeIn();
        }
        else {
            this.animateFadeOut();
        }
    }
    animateFadeOut() {
        const slotHideThresholdMs = 25;
        anime_es.anime({
            targets: this.menuItemsContainer,
            duration: DefaultAnimationTimeout,
            easing: 'easeInSine',
            opacity: [1, 0],
            maxHeight: [this.getNestedItemsHeight() + DefaultIxMenuItemHeight, 0],
            complete: () => {
                setTimeout(() => {
                    this.showItems = false;
                    this.showDropdown = false;
                }, DefaultAnimationTimeout + slotHideThresholdMs);
            },
        });
    }
    animateFadeIn() {
        anime_es.anime({
            targets: this.menuItemsContainer,
            duration: DefaultAnimationTimeout,
            easing: 'easeInSine',
            opacity: [0, 1],
            maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
            begin: () => {
                this.showItems = true;
                this.showDropdown = false;
            },
        });
    }
    onCategoryClicked(e) {
        if (this.ixMenu.expand) {
            e === null || e === void 0 ? void 0 : e.stopPropagation();
            this.onExpandCategory(!this.showItems);
            return;
        }
        this.showDropdown = !this.showDropdown;
    }
    onNestedItemsChanged() {
        this.nestedItems = this.getNestedItems();
    }
    isCategoryItemListVisible() {
        return this.menuExpand && (this.showItems || this.isNestedItemActive());
    }
    componentWillLoad() {
        const closestMenu = context.closestIxMenu(this.hostElement);
        if (!closestMenu) {
            throw Error('ix-menu-category can only be used as a child of ix-menu');
        }
        this.ixMenu = closestMenu;
        this.menuExpand = this.ixMenu.expand;
        this.showItems = this.isCategoryItemListVisible();
    }
    componentDidLoad() {
        this.observer = mutationObserver.createMutationObserver(() => this.onNestedItemsChanged());
        this.observer.observe(this.hostElement, {
            attributes: true,
            childList: true,
            subtree: true,
        });
        requestAnimationFrame(() => {
            this.onNestedItemsChanged();
        });
        this.ixMenu.addEventListener('expandChange', ({ detail: menuExpand }) => {
            this.menuExpand = menuExpand;
            if (!menuExpand) {
                this.clearMenuItemStyles();
            }
            this.showItems = this.isCategoryItemListVisible();
        });
    }
    clearMenuItemStyles() {
        this.menuItemsContainer.style.removeProperty('max-height');
        this.menuItemsContainer.style.removeProperty('opacity');
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    render() {
        return (index.h(index.Host, { key: '9223fe391bba5c17350b31f1ff83b563cb9edd48', class: {
                expanded: this.showItems,
            } }, index.h("ix-menu-item", { key: '5e5dd9b0ad8f4027663ad32ec92167202b5431b7', class: 'category-parent', active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClicked(e) }, index.h("div", { key: 'bff799f0d1b5ee2744bf90a7377296c7b764c878', class: "category" }, index.h("div", { key: 'd8cead5e316bde70c44d6a7bea2ea6b528e5aceb', class: "category-text" }, this.label), index.h("ix-icon", { key: 'a3c324aaf22d05599d96ddb6b18cdc6bac7f83c8', name: 'chevron-down-small', class: {
                'category-chevron': true,
                'category-chevron--open': this.showItems,
            } }))), index.h("div", { key: 'b6954876e6d15fba763825b3e2813b115d48101b', ref: (ref) => (this.menuItemsContainer = ref), class: {
                'menu-items': true,
                'menu-items--expanded': this.showItems,
                'menu-items--collapsed': !this.showItems,
            } }, this.showItems ? index.h("slot", null) : null), index.h("ix-dropdown", { key: 'f3dad9385ad05c40f1b5e8e6b2395ea6ae3ad42f', closeBehavior: 'both', show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
                this.showDropdown = dropdownShown;
            }, class: 'category-dropdown', anchor: this.hostElement, placement: "right-start", offset: {
                mainAxis: 3,
            }, onClick: (e) => {
                if (e.target instanceof HTMLElement) {
                    if (e.target.tagName === 'IX-MENU-ITEM') {
                        this.showDropdown = false;
                    }
                }
            } }, index.h("ix-dropdown-item", { key: '7b0b9836c178b196416565872d00e5071c11a6e3', class: 'category-dropdown-header' }, index.h("ix-typography", { key: 'e920c1397d39a398e30c770da93fb5c2c54c449f', variant: "default-title-single", color: "std" }, this.label)), index.h("ix-divider", { key: '305c10ad37d22d64b73feb8cb7423ad9f4bf134c' }), index.h("slot", { key: '1e727521095f394299b14e2921f53d0f67e033c7' }))));
    }
    get hostElement() { return index.getElement(this); }
};
MenuCategory.style = IxMenuCategoryStyle0;

exports.ix_menu_category = MenuCategory;

//# sourceMappingURL=ix-menu-category.cjs.entry.js.map