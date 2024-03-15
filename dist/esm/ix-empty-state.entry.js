import { r as registerInstance, c as createEvent, h, H as Host } from './index-5cd176b3.js';

const emptyStateCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .label__subHeader{color:var(--theme-color-soft-text)}:host(.emptyState.emptyState--large){display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--large) .emptyState__icon{width:3.5rem;height:3.5rem;display:flex;justify-content:center;align-items:center}:host(.emptyState.emptyState--large) .emptyState__icon ix-icon{transform:scale(1.75)}:host(.emptyState.emptyState--large) .emptyState__content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5rem}:host(.emptyState.emptyState--large) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0.5rem}:host(.emptyState.emptyState--large) .label__subHeader,:host(.emptyState.emptyState--large) ix-typography{text-align:center}:host(.emptyState.emptyState--compact){display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compact) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compact) .emptyState__content{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compactBreak){display:flex;flex-direction:row;align-items:flex-start;gap:1rem}:host(.emptyState.emptyState--compactBreak) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compactBreak) .emptyState__content{display:flex;flex-direction:column;align-items:flex-start;gap:0.5rem}";
const IxEmptyStateStyle0 = emptyStateCss;

const EmptyState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.actionClick = createEvent(this, "actionClick", 7);
        this.layout = 'large';
        this.icon = undefined;
        this.header = undefined;
        this.subHeader = undefined;
        this.action = undefined;
    }
    render() {
        return (h(Host, { key: '05758725d4d8effa0b61ae90189bea0556576bf5', class: `emptyState emptyState--${this.layout}` }, this.icon && (h("div", { class: "emptyState__icon" }, h("ix-icon", { name: this.icon, size: this.layout === 'large' ? '32' : '32', color: "color-soft-text" }))), h("div", { key: '443bdba623c0a05f224a113e27de4fa281c27563', class: "emptyState__content" }, h("div", { key: 'df17e2f2ca3c227bde9af9bbfbd25c8593b93472', class: "content__label" }, h("ix-typography", { key: '9a9d096c9676dd62d8ccf78f67e05f98d4abd761', variant: this.layout === 'large' ? 'display-large' : 'default' }, this.header), this.subHeader && (h("div", { class: "label__subHeader" }, this.subHeader))), this.action && (h("div", { class: "content__action" }, h("ix-button", { onClick: () => this.actionClick.emit() }, this.action))))));
    }
};
EmptyState.style = IxEmptyStateStyle0;

export { EmptyState as ix_empty_state };

//# sourceMappingURL=ix-empty-state.entry.js.map