import { r as registerInstance, h, H as Host, g as getElement } from './index-5cd176b3.js';
import { a as anime } from './anime.es-a5520566.js';
import { c as closestIxMenu } from './context-c9078420.js';
import { c as createMutationObserver } from './mutation-observer-db8757e6.js';
import './typed-event-ad6484c5.js';

const menuCategoryCss = ":host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--theme-default-time) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--collapsed{display:none}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;padding-left:0.125rem;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}";
const IxMenuCategoryStyle0 = menuCategoryCss;

const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const MenuCategory = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        anime({
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
        anime({
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
        const closestMenu = closestIxMenu(this.hostElement);
        if (!closestMenu) {
            throw Error('ix-menu-category can only be used as a child of ix-menu');
        }
        this.ixMenu = closestMenu;
        this.menuExpand = this.ixMenu.expand;
        this.showItems = this.isCategoryItemListVisible();
    }
    componentDidLoad() {
        this.observer = createMutationObserver(() => this.onNestedItemsChanged());
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
        return (h(Host, { key: '7dcf0a3ab61e12650f3236d2d01905088dd46476', class: {
                expanded: this.showItems,
            } }, h("ix-menu-item", { key: 'd7525b4d1577beddef2a9bc46102c5c27056f7a8', class: 'category-parent', active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClicked(e) }, h("div", { key: '45f42d78aea804389d18b71aa497d595d0d28d2f', class: "category" }, h("div", { key: '328e734eff35051e741d5f300cef62d89b2d8357', class: "category-text" }, this.label), h("ix-icon", { key: 'a020ca032255c4e0cab6eaf21a999f778d44f89e', name: 'chevron-down-small', class: {
                'category-chevron': true,
                'category-chevron--open': this.showItems,
            } }))), h("div", { key: 'cb9f873594624636c51f5cdb88117c8609ca0660', ref: (ref) => (this.menuItemsContainer = ref), class: {
                'menu-items': true,
                'menu-items--expanded': this.showItems,
                'menu-items--collapsed': !this.showItems,
            } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: '44e23c289ee58d8e6a64c4eae043b5d21e7acccf', closeBehavior: 'both', show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
                this.showDropdown = dropdownShown;
            }, class: 'category-dropdown', anchor: this.hostElement, placement: "right-start", offset: {
                mainAxis: 3,
            }, onClick: (e) => {
                if (e.target instanceof HTMLElement) {
                    if (e.target.tagName === 'IX-MENU-ITEM') {
                        this.showDropdown = false;
                    }
                }
            } }, h("ix-dropdown-item", { key: 'a991462ed69a30c6c9d8535d88a0642203663c9a', class: 'category-dropdown-header' }, h("ix-typography", { key: 'a9947afa5cfb6c9415a3eae5c0daf762fd91843a', variant: "default-title-single", color: "std" }, this.label)), h("ix-divider", { key: '2ff0ae7813b7ff6a32e0b6aae13b2bb3dca95d77' }), h("slot", { key: '4c9f7e1cac69cbd8e0c305eb9f60ea9a64e69b0d' }))));
    }
    get hostElement() { return getElement(this); }
};
MenuCategory.style = IxMenuCategoryStyle0;

export { MenuCategory as ix_menu_category };

//# sourceMappingURL=ix-menu-category.entry.js.map