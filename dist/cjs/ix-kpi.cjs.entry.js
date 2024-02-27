'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const kpiCss = ":host{display:flex;flex-grow:1;height:2.5rem;border-radius:var(--theme-kpi--border-radius);padding:0.375rem 0.25rem;min-width:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .kpi-container{display:flex;height:100%;width:100%;border-block-end:2px solid grey}:host .kpi-container.alarm{border-block-end-color:var(--theme-color-alarm)}:host .kpi-container.warning{border-block-end-color:var(--theme-color-warning)}:host .kpi-container .kpi-label{display:flex;align-items:center;color:var(--theme-kpi-display-label--color);flex-grow:1;flex-shrink:9999}:host .kpi-container .kpi-label ix-icon{margin-inline-end:0.25rem}:host .kpi-container .kpi-value-container{display:flex;align-items:flex-end}:host .kpi-container .kpi-value{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);color:var(--theme-kpi-display-value--color)}:host .kpi-container .kpi-unit{margin-inline-start:0.5rem;color:var(--theme-kpi-display-units--color)}:host .kpi-container .kpi-label,:host .kpi-container .kpi-unit{margin-block-start:0.125rem}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):hover{background-color:var(--theme-kpi-display--background--hover)}:host:not(.disabled):not(:disabled){cursor:pointer}:host:not(.disabled):not(:disabled):active,:host:not(.disabled):not(:disabled).active{background-color:var(--theme-kpi-display--background--active)}:host:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--focus--border-color)}:host(.stacked){height:3.75rem}:host(.stacked) .kpi-container{justify-content:center;flex-wrap:wrap}:host(.stacked) .kpi-container .kpi-label{width:100%;justify-content:center}";
const IxKpiStyle0 = kpiCss;

const Kpi = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
        this.value = undefined;
        this.unit = undefined;
        this.state = 'neutral';
        this.orientation = 'horizontal';
    }
    getStateIcon() {
        switch (this.state) {
            case 'alarm':
                return (index.h("ix-icon", { color: "kpi-display-icon--color", name: 'alarm', size: "16" }));
            case 'warning':
                return (index.h("ix-icon", { color: "kpi-display-icon--color", name: 'warning', size: "16" }));
            default:
                return '';
        }
    }
    getTooltipText() {
        let tooltip = `${this.label}: ${this.value}`;
        if (this.unit) {
            tooltip = tooltip.concat(` ${this.unit}`);
        }
        return tooltip;
    }
    render() {
        return (index.h(index.Host, { key: 'bb752421257c97da16f70dc2f5d7973a33c3dcd7', title: this.getTooltipText(), tabindex: "1", class: {
                stacked: this.orientation === 'vertical',
            } }, index.h("div", { key: 'a7dae46c852e7866c613c8c05778fd6581d85229', class: {
                'kpi-container': true,
                alarm: this.state === 'alarm',
                warning: this.state === 'warning',
            } }, index.h("span", { key: 'bda2cd5de4a8e72578dfa5283d31c54f5bb19f00', class: "kpi-label" }, this.getStateIcon(), index.h("span", { key: 'fb6002f8bf537e6471fe5e6d896e108458a886dd', class: "kpi-label-text" }, this.label)), index.h("span", { key: '5f9ed5b99777bcd4d9c7a0e9e145622544563649', class: "kpi-value-container" }, index.h("span", { key: '66e40756bf8412b0f4995adedb70581158695b55', class: "kpi-value" }, this.value), this.unit ? index.h("span", { class: "kpi-unit" }, this.unit) : ''))));
    }
};
Kpi.style = IxKpiStyle0;

exports.ix_kpi = Kpi;

//# sourceMappingURL=ix-kpi.cjs.entry.js.map