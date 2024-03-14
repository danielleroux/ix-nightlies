'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const a11y = require('./a11y-d3ce56d1.js');

const toggleCss = ":host{display:inline-flex;position:relative;height:2rem;justify-content:flex-start;align-items:center;margin-right:0.25rem;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .switch{position:relative;display:inline-block;width:3rem;min-width:3rem;max-width:3rem;height:1.5rem;margin-right:0.25rem}:host .switch input{opacity:0;width:0;height:0}:host .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--theme-switch-off--background);transition:150ms;border-radius:1.5rem}:host .slider:before{position:absolute;content:\"\";height:18px;width:18px;left:4px;bottom:3px;background-color:var(--theme-switch-thumb-off--background);transition:150ms;border-radius:50%}:host input{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host input:focus-visible+.switch>.slider{outline:1px solid var(--theme-color-focus-bdr);outline-offset:1px}:host input:checked+.switch>.slider{background-color:var(--theme-switch-on--background)}:host input:checked+.switch>.slider::before{background-color:var(--theme-switch-thumb-on--background);transform:translateX(1.35rem)}:host input+.switch:hover>.slider{background-color:var(--theme-switch-off--background--hover)}:host input+.switch:hover>.slider:before{background-color:var(--theme-switch-thumb-off--background--hover)}:host input+.switch:active>.slider{background-color:var(--theme-switch-off--background--active)}:host input+.switch:active>.slider:before{background-color:var(--theme-switch-thumb-off--background--active)}:host input:checked+.switch:hover>.slider{background-color:var(--theme-switch-on--background--hover)}:host input:checked+.switch:hover>.slider:before{background-color:var(--theme-switch-thumb-on--background--hover)}:host input:checked+.switch:active>.slider{background-color:var(--theme-switch-on--background--active)}:host input:checked+.switch:active>.slider:before{background-color:var(--theme-switch-thumb-on--background--active)}:host input:indeterminate+.switch>.slider::before{transform:translateX(0.7rem)}:host .toggle-text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host(.disabled){pointer-events:none}:host(.disabled) input+.switch{opacity:0.5}:host(.disabled) input+.switch>.slider{background-color:var(--theme-switch-off--background--disabled)}:host(.disabled) input+.switch>.slider:before{background-color:var(--theme-switch-thumb-off--background--disabled)}:host(.disabled) input:checked+.switch>.slider{background-color:var(--theme-switch-on--background--disabled)}:host(.disabled) input:checked+.switch>.slider:before{background-color:var(--theme-switch-thumb-on--background--disabled)}:host(.disabled) .toggle-text{color:var(--theme-color-weak-text)}";
const IxToggleStyle0 = toggleCss;

const Toggle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkedChange = index.createEvent(this, "checkedChange", 7);
        this.checked = false;
        this.disabled = false;
        this.indeterminate = false;
        this.textOn = 'On';
        this.textOff = 'Off';
        this.textIndeterminate = 'Mixed';
        this.hideText = false;
    }
    onCheckedChange(newChecked) {
        if (this.indeterminate) {
            this.indeterminate = false;
        }
        this.checked = newChecked;
        this.checkedChange.emit(this.checked);
    }
    render() {
        return (index.h(index.Host, { key: '47551ac764885becdf8b0679b04050692867c99c', class: {
                disabled: this.disabled,
            }, onClick: () => this.onCheckedChange(!this.checked) }, index.h("input", { key: '2f8ceac3b78c9496f6bed179cb7b05310616f3ba', disabled: this.disabled, indeterminate: this.indeterminate, checked: this.checked, role: "switch", tabindex: 0, type: "checkbox", "aria-checked": a11y.a11yBoolean(this.checked), onChange: (event) => this.onCheckedChange(event.target.checked) }), index.h("label", { key: '11f165b726d672b8bd24b411deb0f9ccfeee5054', class: "switch", tabIndex: -1 }, index.h("span", { key: 'a2b95f492b930d283df35f61db9e4375fd20d2d6', class: "slider" })), !this.hideText ? (index.h(index.Fragment, null, !this.indeterminate ? (index.h("span", { class: 'toggle-text', "aria-hidden": a11y.a11yBoolean(true) }, this.checked ? this.textOn : this.textOff)) : (index.h("span", { class: 'toggle-text', "aria-hidden": a11y.a11yBoolean(true) }, this.textIndeterminate)))) : null));
    }
    get hostElement() { return index.getElement(this); }
};
Toggle.style = IxToggleStyle0;

exports.ix_toggle = Toggle;

//# sourceMappingURL=ix-toggle.cjs.entry.js.map