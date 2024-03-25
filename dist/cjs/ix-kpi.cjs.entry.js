'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

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
        return (index.h(index.Host, { key: '5a5d8b7692db11c4b093f90b370d52d10331c080', title: this.getTooltipText(), tabindex: "1", class: {
                stacked: this.orientation === 'vertical',
            } }, index.h("div", { key: 'b589d9aea0bb84ee77e8076452d592f949084d2b', class: {
                'kpi-container': true,
                alarm: this.state === 'alarm',
                warning: this.state === 'warning',
            } }, index.h("span", { key: 'e62e546a11850825f0569efa72f1058ee21dc40f', class: "kpi-label" }, this.getStateIcon(), index.h("span", { key: '90fe856c89241615b0185db6078c0967087646bb', class: "kpi-label-text" }, this.label)), index.h("span", { key: '291463098f72b9a16758273491f6cc939a5f719e', class: "kpi-value-container" }, index.h("span", { key: 'e640f5a34a73dd08abd6911ab99d3a20d31e4b43', class: "kpi-value" }, this.value), this.unit ? index.h("span", { class: "kpi-unit" }, this.unit) : ''))));
    }
};
Kpi.style = IxKpiStyle0;

exports.ix_kpi = Kpi;

//# sourceMappingURL=ix-kpi.cjs.entry.js.map