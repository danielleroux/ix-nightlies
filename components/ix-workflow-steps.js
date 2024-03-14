import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as createMutationObserver } from './mutation-observer.js';

const workflowStepsCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .steps{display:flex}:host .steps.vertical{display:block}";
const IxWorkflowStepsStyle0 = workflowStepsCss;

const WorkflowSteps = /*@__PURE__*/ proxyCustomElement(class WorkflowSteps extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.stepSelected = createEvent(this, "stepSelected", 7);
        this.vertical = false;
        this.clickable = false;
        this.selectedIndex = 0;
    }
    getSteps() {
        return Array.from(this.hostElement.querySelectorAll('ix-workflow-step'));
    }
    updateSteps() {
        let steps = this.getSteps();
        steps.forEach((element, index) => {
            element.vertical = this.vertical;
            element.clickable = this.clickable;
            element.selected = this.selectedIndex === index;
            if (steps.length === 1) {
                element.position = 'single';
                return;
            }
            if (index === 0) {
                element.position = 'first';
            }
            else if (index === steps.length - 1) {
                element.position = 'last';
            }
            else {
                element.position = 'undefined';
            }
        });
    }
    onStepSelectionChanged(event) {
        const eventTarget = event.detail;
        const steps = this.getSteps();
        const clickIndex = steps.findIndex((step) => step === eventTarget);
        const clientEvent = this.stepSelected.emit(clickIndex);
        if (clientEvent.defaultPrevented) {
            return;
        }
        steps.forEach((step, index) => {
            step.selected = index === clickIndex;
        });
    }
    componentDidLoad() {
        this.observer = createMutationObserver((mutations) => {
            for (let mutation of mutations) {
                if (mutation.type === 'childList') {
                    this.updateSteps();
                }
            }
        });
        this.observer.observe(this.hostElement, { childList: true });
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    componentDidRender() {
        this.updateSteps();
    }
    render() {
        return (h(Host, { key: '5f78e87029a37e70a97bbb09f61b0749e7c137c2' }, h("div", { key: 'ff1ce2dca97b243b9895baad94615e380cc3b00f', class: { steps: true, vertical: this.vertical } }, h("slot", { key: '99711cedbb1939adc813d6b360b3d83404cac421' }))));
    }
    get hostElement() { return this; }
    static get style() { return IxWorkflowStepsStyle0; }
}, [1, "ix-workflow-steps", {
        "vertical": [4],
        "clickable": [4],
        "selectedIndex": [2, "selected-index"]
    }, [[0, "selectedChanged", "onStepSelectionChanged"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-workflow-steps"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-workflow-steps":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, WorkflowSteps);
            }
            break;
    } });
}

const IxWorkflowSteps = WorkflowSteps;
const defineCustomElement = defineCustomElement$1;

export { IxWorkflowSteps, defineCustomElement };

//# sourceMappingURL=ix-workflow-steps.js.map