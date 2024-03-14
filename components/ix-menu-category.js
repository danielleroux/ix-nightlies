import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as anime } from './anime.es.js';
import { c as closestIxMenu } from './context.js';
import { c as createMutationObserver } from './mutation-observer.js';
import { d as defineCustomElement$6 } from './divider.js';
import { d as defineCustomElement$5 } from './dropdown.js';
import { d as defineCustomElement$4 } from './dropdown-item.js';
import { d as defineCustomElement$3 } from './menu-item.js';
import { d as defineCustomElement$2 } from './typography.js';

const menuCategoryCss = ":host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--theme-default-time) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--collapsed{display:none}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;padding-left:0.125rem;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}";
const IxMenuCategoryStyle0 = menuCategoryCss;

const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const MenuCategory = /*@__PURE__*/ proxyCustomElement(class MenuCategory extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: '9223fe391bba5c17350b31f1ff83b563cb9edd48', class: {
                expanded: this.showItems,
            } }, h("ix-menu-item", { key: '5e5dd9b0ad8f4027663ad32ec92167202b5431b7', class: 'category-parent', active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClicked(e) }, h("div", { key: 'bff799f0d1b5ee2744bf90a7377296c7b764c878', class: "category" }, h("div", { key: 'd8cead5e316bde70c44d6a7bea2ea6b528e5aceb', class: "category-text" }, this.label), h("ix-icon", { key: 'a3c324aaf22d05599d96ddb6b18cdc6bac7f83c8', name: 'chevron-down-small', class: {
                'category-chevron': true,
                'category-chevron--open': this.showItems,
            } }))), h("div", { key: 'b6954876e6d15fba763825b3e2813b115d48101b', ref: (ref) => (this.menuItemsContainer = ref), class: {
                'menu-items': true,
                'menu-items--expanded': this.showItems,
                'menu-items--collapsed': !this.showItems,
            } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: 'f3dad9385ad05c40f1b5e8e6b2395ea6ae3ad42f', closeBehavior: 'both', show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
                this.showDropdown = dropdownShown;
            }, class: 'category-dropdown', anchor: this.hostElement, placement: "right-start", offset: {
                mainAxis: 3,
            }, onClick: (e) => {
                if (e.target instanceof HTMLElement) {
                    if (e.target.tagName === 'IX-MENU-ITEM') {
                        this.showDropdown = false;
                    }
                }
            } }, h("ix-dropdown-item", { key: '7b0b9836c178b196416565872d00e5071c11a6e3', class: 'category-dropdown-header' }, h("ix-typography", { key: 'e920c1397d39a398e30c770da93fb5c2c54c449f', variant: "default-title-single", color: "std" }, this.label)), h("ix-divider", { key: '305c10ad37d22d64b73feb8cb7423ad9f4bf134c' }), h("slot", { key: '1e727521095f394299b14e2921f53d0f67e033c7' }))));
    }
    get hostElement() { return this; }
    static get style() { return IxMenuCategoryStyle0; }
}, [1, "ix-menu-category", {
        "label": [1],
        "icon": [1],
        "notifications": [2],
        "menuExpand": [32],
        "showItems": [32],
        "showDropdown": [32],
        "nestedItems": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-menu-category", "ix-divider", "ix-dropdown", "ix-dropdown-item", "ix-menu-item", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-menu-category":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuCategory);
            }
            break;
        case "ix-divider":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-menu-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxMenuCategory = MenuCategory;
const defineCustomElement = defineCustomElement$1;

export { IxMenuCategory, defineCustomElement };

//# sourceMappingURL=ix-menu-category.js.map