'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const workflowStepCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .step{display:flex;flex-direction:column;align-items:center;background-color:var(--theme-workflow-step--background);border-radius:var(--theme-workflow--border-radius);width:auto;padding:1.125rem 0 0.5rem 0;height:4rem;width:12.75rem}:host .step .wrapper{display:flex;width:100%;align-items:center;justify-content:center;position:relative}:host .step .wrapper .line{width:100%;height:0.125rem;background-color:var(--theme-workflow-step-icon-default--color)}:host .step .wrapper .line.first,:host .step .wrapper .line.last{width:50%;margin:0 0 0 auto}:host .step .wrapper .line.last{margin:0 auto 0 0}:host .step .wrapper .line.single{width:0}:host .step .wrapper .line.selected{background-color:var(--theme-workflow-step-icon-default--color--selected)}:host .step .wrapper .line.done{background-color:var(--theme-workflow-step-icon-done--color)}:host .step .wrapper .line.done.selected{background-color:var(--theme-workflow-step-icon-done--color--selected)}:host .step .wrapper .line.warning{background-color:var(--theme-color-warning)}:host .step .wrapper .line.success{background-color:var(--theme-color-success)}:host .step .wrapper .line.error{background-color:var(--theme-color-alarm)}:host .step .wrapper .iconWrapper{display:flex;align-items:center;justify-content:center;position:absolute}:host .step .wrapper .iconWrapper .absolute{position:absolute}:host .step .text{margin-top:1rem;width:auto;padding:0 0.5rem}:host .step.vertical{flex-direction:row;padding:0}:host .step.vertical .wrapper{width:auto;padding-left:1.125rem;height:4rem}:host .step.vertical .wrapper .line{width:0.125rem;height:100%}:host .step.vertical .wrapper .line.first,:host .step.vertical .wrapper .line.last{height:50%;margin:auto 0 0 0}:host .step.vertical .wrapper .line.last{margin:0 0 auto 0}:host .step.vertical .wrapper .line.single{width:0}:host .step.vertical .text{margin-top:0;margin-left:1rem;padding:0}:host .step.clickable:hover{background-color:var(--theme-workflow-step--background--hover)}:host .step.clickable:active{background-color:var(--theme-workflow-step--background--active)}:host .step:focus-visible{outline:1px solid var(--focus--border-color);border-radius:0}:host .step.selected{background-color:var(--theme-workflow-step--background--selected)}:host .step.disabled{background-color:var(--theme-workflow-step--background--disabled)}:host .step.disabled .line{background-color:var(--theme-workflow-step-icon-default--color--disabled) !important}:host .step.disabled .text{color:var(--theme-workflow-step--color--disabled)}";
const IxWorkflowStepStyle0 = workflowStepCss;

const WorkflowStep = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.selectedChanged = index.createEvent(this, "selectedChanged", 7);
        this.vertical = false;
        this.disabled = false;
        this.status = 'open';
        this.clickable = false;
        this.selected = false;
        this.position = 'undefined';
        this.iconName = 'circle';
        this.iconColor = 'workflow-step-icon-default--color';
    }
    selectedHandler() {
        const selectedStyle = this.selected ? '--selected' : '';
        if (this.status === 'open') {
            this.iconName = this.selected ? 'circle-dot' : 'circle';
            this.iconColor = `workflow-step-icon-default--color${selectedStyle}`;
        }
        if (this.status === 'done' && !this.disabled) {
            this.iconColor = `workflow-step-icon-done--color${selectedStyle}`;
        }
    }
    watchPropHandler() {
        switch (this.status) {
            case 'open':
                this.iconName = 'circle';
                this.iconColor = 'workflow-step-icon-default--color';
                break;
            case 'success':
                this.iconName = 'success';
                this.iconColor = 'color-success';
                break;
            case 'done':
                this.iconName = 'success';
                this.iconColor = 'workflow-step-icon-done--color';
                break;
            case 'warning':
                this.iconName = 'warning';
                this.iconColor = 'color-warning';
                break;
            case 'error':
                this.iconName = 'error';
                this.iconColor = 'color-alarm';
                break;
            default:
                this.iconName = 'circle';
                break;
        }
        if (this.disabled) {
            this.iconColor = 'workflow-step-icon-success--color--disabled';
        }
    }
    componentDidLoad() {
        this.watchPropHandler();
        this.selectedHandler();
        this.customIconSlot = !!this.hostElement.querySelector('[slot="custom-icon"]');
    }
    onStepClick() {
        if (!this.disabled && this.clickable) {
            this.selectedChanged.emit(this.hostElement);
        }
    }
    render() {
        const icons = !this.customIconSlot ? (index.h(index.Fragment, null, index.h("ix-icon", { color: "color-1", name: this.iconName === 'warning' ? 'triangle-filled' : 'circle-filled', class: "absolute", size: "24" }), index.h("ix-icon", { color: this.iconColor, name: this.iconName, class: "absolute", size: "24" }))) : null;
        return (index.h(index.Host, { key: 'e6da26c63019f1efd788ac0e6d64e8c669f711b3', onClick: () => this.onStepClick() }, index.h("div", { key: '607ad21e42070abc412fd4a5313e207f7908d765', tabIndex: 0, class: {
                step: true,
                selected: this.selected,
                vertical: this.vertical,
                disabled: this.disabled,
                clickable: this.clickable && !this.disabled,
            } }, index.h("div", { key: 'a55397363ac7fdb3579751903e98e4840314a2c7', class: "wrapper" }, index.h("div", { key: 'b4044cabf368cdb5632727baf1a9040a2ba59296', class: {
                line: true,
                selected: this.selected,
                [this.status]: true,
                [this.position]: true,
            } }), index.h("div", { key: 'da4cbb5b0755dea7c8ff4c45676a5c7da33e0caf', class: "iconWrapper" }, icons, index.h("slot", { key: '3059dcda912a1fd2d7225dd7c97cf6c7f640b875', name: "custom-icon" }))), index.h("div", { key: '316a8dbb4b5e8845cca3635b3f2c1bb5ef3ebefd', class: "text" }, index.h("slot", { key: '9cc1127aa169fb7096b671720160da4a3ab7efc7' })))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "selected": ["selectedHandler"],
        "disabled": ["watchPropHandler"],
        "status": ["watchPropHandler"]
    }; }
};
WorkflowStep.style = IxWorkflowStepStyle0;

exports.ix_workflow_step = WorkflowStep;

//# sourceMappingURL=ix-workflow-step.cjs.entry.js.map