import { r as registerInstance, c as createEvent, h, f as forceUpdate, H as Host, g as getElement } from './index-5cd176b3.js';
import { b as a11yHostAttributes, a as a11yBoolean } from './a11y-d5444a76.js';
import { c as createMutationObserver } from './mutation-observer-db8757e6.js';

const breadcrumbCss = ":host{display:flex;justify-content:flex-start;height:2.5rem;align-items:center;background-color:transparent;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .previous-button{width:3rem;min-width:0px}:host .crumb-dropdown{overflow:visible}:host .remove-anchor::after{display:none}:host .more-text{display:flex}:host .more-text .more-text-ellipsis{width:1rem;display:inline-block;font-weight:700}:host .more-text ix-icon{padding-top:2px}:host nav,:host ol,:host .crumb-items{display:contents}";
const IxBreadcrumbStyle0 = breadcrumbCss;

let sequenceId = 0;
const createId = (prefix = 'breadcrumb-') => {
    return `${prefix}-${sequenceId++}`;
};
const Breadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.itemClick = createEvent(this, "itemClick", 7);
        this.nextClick = createEvent(this, "nextClick", 7);
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
        this.mutationObserver = createMutationObserver(() => this.onChildMutation());
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
        const a11y = a11yHostAttributes(this.hostElement);
        return (h(Host, { key: '3a5d431706ed4ef549411908c3155fb3101c5909' }, h("ix-dropdown", { key: '6b0646e46f9e2e47f763a2fd88a2b58273fa4c01', id: this.previousDropdownId, "aria-label": this.ariaLabelPreviousButton, trigger: ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length) > this.visibleItemCount
                ? this.previousButtonRef
                : null, onShowChanged: ({ detail }) => {
                this.isPreviousDropdownExpanded = detail;
                const previousButton = this.hostElement.shadowRoot.getElementById(this.previousButtonId);
                // Need to force update previous button to change `aria-expanded`
                if (previousButton) {
                    forceUpdate(this.hostElement.shadowRoot.getElementById(this.previousButtonId));
                }
            } }, this.items
            .slice(0, this.items.length - this.visibleItemCount)
            .map((item) => {
            var _a;
            const label = (_a = item.label) !== null && _a !== void 0 ? _a : item.innerText;
            return (h("ix-dropdown-item", { label: label, onClick: () => {
                    this.onItemClick(label);
                }, onItemClick: (event) => event.stopPropagation() }));
        })), ((_b = this.items) === null || _b === void 0 ? void 0 : _b.length) > this.visibleItemCount ? (h("ix-breadcrumb-item", { id: this.previousButtonId, ref: (ref) => (this.previousButtonRef = ref), label: "...", tabIndex: 1, onItemClick: (event) => event.stopPropagation(), "aria-describedby": this.previousDropdownId, "aria-controls": this.previousDropdownId, "aria-expanded": a11yBoolean(this.isPreviousDropdownExpanded), class: 'previous-button' })) : null, h("nav", { key: '8951ec43c5cc5a3241344f0a2dbf8cceee266f61', class: "crumb-items", "aria-label": (_c = a11y['aria-label']) !== null && _c !== void 0 ? _c : 'breadcrumbs' }, h("ol", { key: '9d53557b3fcad33cd0f85f1009cf1cd517d2c6a8' }, h("slot", { key: '24b98536fb99e10cfc33947130e572b52bd42218' }))), h("ix-dropdown", { key: '1a00f517f4a8837401e4873f30ba044d84f2fb74', trigger: this.nextButtonRef }, (_d = this.nextItems) === null || _d === void 0 ? void 0 : _d.map((item) => (h("ix-dropdown-item", { label: item, onClick: (e) => {
                this.nextClick.emit({
                    event: e,
                    item,
                });
            }, onItemClick: (event) => event.stopPropagation() }))))));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "nextItems": ["onNextItemsChange"]
    }; }
};
Breadcrumb.style = IxBreadcrumbStyle0;

export { Breadcrumb as ix_breadcrumb };

//# sourceMappingURL=ix-breadcrumb.entry.js.map