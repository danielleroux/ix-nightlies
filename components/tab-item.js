import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const tabItemCss = "@charset \"UTF-8\";:host{position:relative;display:flex;align-items:center;justify-content:center;padding:10px 1.5rem;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--theme-tab--background);color:var(--theme-tab--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ::after{content:\"\";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0}:host .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}:host .text span,:host .text span::before{pointer-events:none}:host .circle{display:flex;justify-content:center;align-items:center;height:3rem;width:3rem;background-color:var(--theme-animated-tab-indicator--background);border-radius:50%;border:2px solid var(--theme-animated-tab-circle--border-color);color:var(--theme-an…icon--color);cursor:pointer}:host .circle.selected:not(.disabled){background-color:var(--theme-animated-tab-circle--background--selected);color:var(--theme-animated-tab-icon--color--selected);border-color:var(--theme-animated-tab-circle--border-color--selected)}:host .circle.selected:not(.disabled):hover{background-color:var(--theme-animated-tab-circle--background--selected)}:host .circle:hover{background-color:var(--theme-animated-tab-circle--background--hover)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle.disabled{background-color:var(--theme-animated-tab-circle--background--disabled);border-color:var(--theme-animated-tab-circle--border-color--disabled)}:host .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--theme-pill-outline--background);border:1px solid var(--theme-tab-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:14px;color:var(--theme-pill-outline--color);cursor:pointer}:host .counter.selected{border-color:var(--theme-tab-pill--border-color--selected)}:host .counter.selected::after{display:none}:host .counter.disabled{border-color:var(--theme-tab-pill--border-color--disabled)}:host .counter::after{display:none}:host .hidden{display:none}:host(.circle){height:72px}:host(.top) ::after{top:0}:host(.bottom) ::after{bottom:0}:host(.stretched){flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(:hover:not(.circle)){background-color:var(--theme-tab--background--hover);color:var(--theme-tab-color-hover);cursor:pointer}:host(:hover:not(.circle)) ::after{background-color:var(--theme-tab-indicator--background--hover)}:host(:active:not(.circle)){background-color:var(--theme-tab--background--active);color:var(--theme-tab-color--active)}:host(:active:not(.circle)) ::after{background-color:var(--theme-tab-indicator--background--active)}:host(:focus-visible){outline:0px solid var(--focus--border-color)}:host(:focus-visible) .circle{outline:1px solid var(--focus--border-color)}:host(:focus-visible:not(.circle)){outline:1px solid var(--focus--border-color)}:host(.disabled){pointer-events:none;color:var(--theme-tab--color--disabled);background-color:var(--theme-tab--background--disabled)}:host(.disabled) ::after{background-color:var(--theme-tab-indicator--background--disabled)}:host(.selected:not(.disabled)){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}:host(.selected:not(.disabled)) ::after{background-color:var(--theme-tab-indicator--background--selected)}:host(.icon){padding:1.5rem 0.5rem}:host(.small-tab){height:32px;padding:1rem}:host(.small-tab.icon){padding:1rem 0.25rem}";
const IxTabItemStyle0 = tabItemCss;

const TabItem = /*@__PURE__*/ proxyCustomElement(class TabItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.tabClick = createEvent(this, "tabClick", 7);
        this.selected = false;
        this.disabled = false;
        this.small = false;
        this.icon = false;
        this.rounded = false;
        this.counter = undefined;
        this.layout = 'auto';
        this.placement = 'bottom';
    }
    tabItemClasses(props) {
        return {
            selected: props.selected,
            disabled: props.disabled,
            'small-tab': props.small,
            icon: props.small,
            stretched: props.layout === 'stretched',
            bottom: props.placement === 'bottom',
            top: props.placement === 'top',
            circle: props.circle,
        };
    }
    render() {
        return (h(Host, { key: '77688f6b83f53ba0de891d2ed529c7b82941930a', class: this.tabItemClasses({
                selected: this.selected,
                disabled: this.disabled,
                small: this.small,
                icon: this.icon,
                layout: this.layout,
                placement: this.placement,
                circle: this.rounded,
            }), tabIndex: 0, onClick: (event) => {
                const clientEvent = this.tabClick.emit({
                    nativeEvent: event,
                });
                if (clientEvent.defaultPrevented) {
                    event.stopPropagation();
                }
            } }, h("div", { key: 'd1790baee81972038f8a09c0e7a0ee3124e828a6', class: {
                circle: this.rounded,
                text: !this.rounded,
                selected: this.selected,
                disabled: this.disabled,
            } }, h("slot", { key: '7dcd5bcd496e9955b45f00b570fb935a0e9a8969' })), h("div", { key: '435deec3155b879b5f8a397124bf9a198283c2bd', class: {
                counter: true,
                selected: this.selected,
                hidden: !(this.rounded && this.counter !== undefined),
                disabled: this.disabled,
            } }, this.counter)));
    }
    static get style() { return IxTabItemStyle0; }
}, [1, "ix-tab-item", {
        "selected": [4],
        "disabled": [4],
        "small": [4],
        "icon": [4],
        "rounded": [4],
        "counter": [2],
        "layout": [1],
        "placement": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-tab-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-tab-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TabItem);
            }
            break;
    } });
}

export { TabItem as T, defineCustomElement as d };

//# sourceMappingURL=tab-item.js.map