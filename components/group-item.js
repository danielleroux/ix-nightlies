import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const groupItemCss = ":host{display:flex;min-height:2.25rem;height:2.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host>button{display:flex;height:100%;width:100%;align-items:center;justify-content:flex-start;position:relative;outline:none;background-color:var(--theme-group-item--background);border:1px solid transparent;color:var(--theme-color-std-text);padding-left:2.5rem}:host>button:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host ix-icon{margin-right:0.25rem;margin-top:-0.125rem}:host .group-entry-selection-indicator{position:absolute;left:-1px;height:calc(100% + 2px);width:0.25rem}:host .group-entry-text{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-entry-text-secondary{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--theme-color-soft-text)}:host .group-entry-text-secondary,:host .group-entry-text-secondary span{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected){border-top-width:0.062rem !important;background-color:var(--theme-color-ghost--selected)}:host(.selected) .group-entry-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host(:not(.suppress-selection):hover){background-color:var(--theme-color-ghost--selected-hover);border-color:var(--theme-group-item--border-color--hover)}:host(:not(.suppress-selection).selected:hover){background-color:var(--theme-color-ghost--selected-hover)}:host(:not(.suppress-selection):active){background-color:var(--theme-color-ghost--selected-active);border-color:var(--theme-group-item--border-color--active)}:host(:not(.suppress-selection).selected:active){background-color:var(--theme-color-ghost--selected-active)}";
const IxGroupItemStyle0 = groupItemCss;

const GroupItem = /*@__PURE__*/ proxyCustomElement(class GroupItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.selectedChanged = createEvent(this, "selectedChanged", 7);
        this.icon = undefined;
        this.text = undefined;
        this.secondaryText = undefined;
        this.suppressSelection = false;
        this.selected = undefined;
        this.focusable = true;
        this.index = undefined;
    }
    clickListen() {
        if (this.suppressSelection) {
            return;
        }
        this.selectedChanged.emit(this.hostElement);
    }
    render() {
        return (h(Host, { key: 'd34d93eacfe3b691edaaae00dfd48145351b1c66', class: {
                selected: this.selected && !this.suppressSelection,
                'suppress-selection': this.suppressSelection,
            } }, h("button", { key: '6349d249c55d735f07ecacf6c847b01394174070', tabindex: this.focusable ? 0 : -1 }, h("div", { key: '7780212fd05fa6a924024b95804bb136adb985b4', class: "group-entry-selection-indicator" }), this.icon ? h("ix-icon", { size: "16", name: this.icon }) : null, this.text ? (h("span", { class: "group-entry-text" }, h("span", { title: this.text }, this.text))) : null, this.secondaryText ? (h("span", { class: "group-entry-text-secondary" }, h("span", { title: this.secondaryText }, this.secondaryText))) : null, h("slot", { key: 'be3950473d0bef61eecf2fcd21e42f37277b30fc' }))));
    }
    get hostElement() { return this; }
    static get style() { return IxGroupItemStyle0; }
}, [1, "ix-group-item", {
        "icon": [1],
        "text": [1],
        "secondaryText": [1, "secondary-text"],
        "suppressSelection": [4, "suppress-selection"],
        "selected": [4],
        "focusable": [4],
        "index": [2]
    }, [[1, "click", "clickListen"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-group-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-group-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GroupItem);
            }
            break;
    } });
}

export { GroupItem as G, defineCustomElement as d };

//# sourceMappingURL=group-item.js.map