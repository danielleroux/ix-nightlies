'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const a11y = require('./a11y-d3ce56d1.js');
const mutationObserver = require('./mutation-observer-babb20a5.js');

const breadcrumbCss = ":host{display:flex;justify-content:flex-start;height:2.5rem;align-items:center;background-color:transparent;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .previous-button{width:3rem;min-width:0px}:host .crumb-dropdown{overflow:visible}:host .remove-anchor::after{display:none}:host .more-text{display:flex}:host .more-text .more-text-ellipsis{width:1rem;display:inline-block;font-weight:700}:host .more-text ix-icon{padding-top:2px}:host nav,:host ol,:host .crumb-items{display:contents}";
const IxBreadcrumbStyle0 = breadcrumbCss;

let sequenceId = 0;
const createId = (prefix = 'breadcrumb-') => {
    return `${prefix}-${sequenceId++}`;
};
const Breadcrumb = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.itemClick = index.createEvent(this, "itemClick", 7);
        this.nextClick = index.createEvent(this, "nextClick", 7);
        this.previousButtonId = createId();
        this.previousDropdownId = createId();
        this.visibleItemCount = 9;
        this.nextItems = [];
        this.ghost = true;
        this.ariaLabelPreviousButton = 'previous';
        this.previousButtonRef = undefined;
        this.nextButtonRef = undefined;
        this.items = [];
        this.isPreviousDropdownExpanded = false;
    }
    onNextItemsChange() {
        this.onChildMutation();
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
    componentDidLoad() {
        this.mutationObserver = mutationObserver.createMutationObserver(() => this.onChildMutation());
        this.mutationObserver.observe(this.hostElement, {
            subtree: true,
            childList: true,
        });
    }
    componentWillLoad() {
        this.onChildMutation();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    async onChildMutation() {
        const updatedItems = this.getItems();
        updatedItems.forEach((bc, index) => {
            const shouldShowDropdown = this.nextItems.length !== 0 && updatedItems.length - 1 === index;
            bc.ghost = this.ghost;
            bc.showChevron = updatedItems.length - 1 !== index || shouldShowDropdown;
            bc.isDropdownTrigger = shouldShowDropdown;
            if (shouldShowDropdown) {
                this.nextButtonRef = bc;
            }
            if (updatedItems.length < this.visibleItemCount) {
                return;
            }
            bc.visible = index >= updatedItems.length - this.visibleItemCount;
        });
        this.items = updatedItems;
    }
    getItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-breadcrumb-item'));
    }
    render() {
        var _a, _b, _c, _d;
        const a11y$1 = a11y.a11yHostAttributes(this.hostElement);
        return (index.h(index.Host, { key: 'd4a7d70b996b0e613a05a53896aedcaf786cb05b' }, index.h("ix-dropdown", { key: '545dd5b645297725ef8b58c2619ebff9cdc0b0c1', id: this.previousDropdownId, "aria-label": this.ariaLabelPreviousButton, trigger: ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length) > this.visibleItemCount
                ? this.previousButtonRef
                : null, onShowChanged: ({ detail }) => {
                this.isPreviousDropdownExpanded = detail;
                const previousButton = this.hostElement.shadowRoot.getElementById(this.previousButtonId);
                // Need to force update previous button to change `aria-expanded`
                if (previousButton) {
                    index.forceUpdate(this.hostElement.shadowRoot.getElementById(this.previousButtonId));
                }
            } }, this.items
            .slice(0, this.items.length - this.visibleItemCount)
            .map((item) => {
            var _a;
            const label = (_a = item.label) !== null && _a !== void 0 ? _a : item.innerText;
            return (index.h("ix-dropdown-item", { label: label, onClick: () => {
                    this.onItemClick(label);
                }, onItemClick: (event) => event.stopPropagation() }));
        })), ((_b = this.items) === null || _b === void 0 ? void 0 : _b.length) > this.visibleItemCount ? (index.h("ix-breadcrumb-item", { id: this.previousButtonId, ref: (ref) => (this.previousButtonRef = ref), label: "...", tabIndex: 1, onItemClick: (event) => event.stopPropagation(), "aria-describedby": this.previousDropdownId, "aria-controls": this.previousDropdownId, "aria-expanded": a11y.a11yBoolean(this.isPreviousDropdownExpanded), class: 'previous-button' })) : null, index.h("nav", { key: 'e3e3162f385bd64ddde0671c3bb6fe084ca32714', class: "crumb-items", "aria-label": (_c = a11y$1['aria-label']) !== null && _c !== void 0 ? _c : 'breadcrumbs' }, index.h("ol", { key: 'ba7a37c3a9124efa24ea6ac3ddfe5a146d6cc5a1' }, index.h("slot", { key: 'b4b30cf5e41c4583ea6fbbdb372f79d167f859c9' }))), index.h("ix-dropdown", { key: 'aa20745609c9110ebed70439c26bf214f3386710', trigger: this.nextButtonRef }, (_d = this.nextItems) === null || _d === void 0 ? void 0 : _d.map((item) => (index.h("ix-dropdown-item", { label: item, onClick: (e) => {
                this.nextClick.emit({
                    event: e,
                    item,
                });
            }, onItemClick: (event) => event.stopPropagation() }))))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "nextItems": ["onNextItemsChange"]
    }; }
};
Breadcrumb.style = IxBreadcrumbStyle0;

exports.ix_breadcrumb = Breadcrumb;

//# sourceMappingURL=ix-breadcrumb.cjs.entry.js.map