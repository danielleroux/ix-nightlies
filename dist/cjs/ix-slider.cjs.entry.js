'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const a11y = require('./a11y-d3ce56d1.js');
const listener = require('./listener-8ba20080.js');

const sliderCss = ":host{display:flex;flex-direction:column;min-height:2rem;--thumb-size:1rem;--value:0;--trace-start:0;--trace-end:0;--trace-reference:0;--trace-reference-color:var(--theme-color-8);--trace-color:var(--theme-color-dynamic);--tick-color:var(--theme-color-7);--tick-color--active:var(--theme-color-dynamic);--track-color:var(--theme-color-component-4);}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input[type=range]{position:absolute;top:50%;transform:translateY(-50%);left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%;height:1rem;margin:0}:host input[type=range].trace::before{content:\"\";position:absolute;display:block;z-index:-1;width:calc(7px + 100% * var(--trace-end) - 16px * var(--trace-end) - (7px + 100% * var(--trace-start) - 16px * var(--trace-start)));left:calc(7px + 100% * var(--trace-start) - 16px * var(--trace-start));height:4px;background-color:var(--trace-color);top:50%;transform:translateY(-50%)}:host input[type=range].trace::after{content:\"\";position:absolute;display:block;width:2px;height:16px;background-color:var(--trace-reference-color);top:50%;transform:translateY(-50%);left:calc(7px + 100% * var(--trace-reference) - 16px * var(--trace-reference))}:host input[type=range]::-webkit-slider-runnable-track{background:transparent;height:0.25rem}:host input[type=range]::-moz-range-track{background:transparent;height:0.25rem}:host input[type=range i]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-6px}:host input[type=range i]::-moz-range-thumb{border:none;border-radius:0}:host input[type=range]::-webkit-slider-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-webkit-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]::-moz-range-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-moz-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]:hover::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:hover::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:focus{outline:none}:host input[type=range]:focus-visible::-webkit-slider-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host input[type=range]:focus-visible::-moz-range-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host .ticks{display:flex;position:relative;top:50%;transform:translateY(-50%)}:host .ticks .tick{display:block;position:absolute;width:8px;height:8px;background-color:var(--tick-color);border-radius:100px;top:50%;transform:translateY(-50%);left:calc(var(--tick-value) * 100% - 4px)}:host .ticks .tick.tick-active{background-color:var(--tick-color--active)}:host .slider{position:relative;display:block;width:100%;height:1.5rem}:host .track{position:absolute;background-color:var(--track-color);height:4px;width:calc(100% - 1rem);margin-left:0.5rem;top:50%;transform:translateY(-50%);left:0px}:host .thumb{display:block;position:absolute;background-color:transparent;height:1rem;width:1rem;border-radius:100px;left:0px;top:50%;transform:translateY(-50%)}:host .hide-tooltip{display:none}:host .label{display:flex;position:relative;align-items:center;justify-content:space-between;width:100%;margin-top:0.5rem;min-height:0px}:host .label-start{margin-left:0.5rem}:host .label-end{margin-right:0.5rem}:host .label-error{margin-left:0.5rem}:host(.error){--trace-color:var(--theme-color-alarm-40);--tick-color--active:var(--theme-color-alarm)}:host(.error) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-alarm)}:host(.error) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-alarm)}:host(.disabled){pointer-events:none;--track-color:var(--theme-color-component-3);--trace-color:var(--theme-color-3);--tick-color:var(--theme-color-7);--tick-color--active:var(--theme-color-7)}:host(.disabled) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-7)}:host(.disabled) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-7)}";
const IxSliderStyle0 = sliderCss;

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function between(min, value, max) {
    if (value < min) {
        return min;
    }
    else if (value > max) {
        return max;
    }
    else {
        return value;
    }
}
const Slider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.valueChange = index.createEvent(this, "valueChange", 7);
        this.step = undefined;
        this.min = 0;
        this.max = 100;
        this.value = 0;
        this.marker = undefined;
        this.trace = false;
        this.traceReference = 0;
        this.disabled = false;
        this.error = undefined;
        this.rangeInput = 0;
        this.rangeMin = 0;
        this.rangeMax = 100;
        this.rangeTraceReference = 0;
        this.showTooltip = false;
    }
    get tooltip() {
        return this.hostElement.shadowRoot.querySelector('ix-tooltip');
    }
    get pseudoThumb() {
        return this.hostElement.shadowRoot.querySelector('.thumb');
    }
    get slider() {
        return this.hostElement.shadowRoot.getElementById('slider');
    }
    onShowTooltipChange() {
        if (this.showTooltip) {
            this.tooltip.showTooltip(this.pseudoThumb);
            return;
        }
        this.tooltip.hideTooltip();
    }
    componentWillLoad() {
        this.a11yAttributes = a11y.a11yHostAttributes(this.hostElement, [
            'role',
            'aria-valuemin',
            'aria-valuemax',
            'aria-valuenow',
        ]);
        this.updateRangeVariables();
    }
    updateRangeVariables() {
        this.rangeInput = between(this.min, this.value, this.max);
        this.rangeTraceReference = between(this.min, this.traceReference, this.max);
        this.rangeMin = Math.min(this.min, this.max);
        this.rangeMax = Math.max(this.min, this.max);
    }
    onInput(event) {
        event.stopPropagation();
        const value = parseInt(this.slider.value);
        if (!isNaN(value)) {
            this.rangeInput = value;
            this.emitInputEvent();
        }
    }
    emitInputEvent() {
        this.valueChange.emit(this.rangeInput);
    }
    isMarkerActive(markerValue) {
        const start = Math.min(this.traceReference, this.rangeInput);
        const end = Math.max(this.traceReference, this.rangeInput);
        const value = markerValue;
        return value >= start && value <= end;
    }
    // Listen globally on window because sometimes the event listener
    // of the DOM element input itself is not called if the release
    // click is not inside the element anymore
    onPointerUp() {
        this.showTooltip = false;
    }
    render() {
        const range = this.rangeMax - this.rangeMin;
        let traceReferenceInPercentage = (this.rangeTraceReference - this.rangeMin) / range;
        let valueInPercentage = (this.rangeInput - this.rangeMin) / range;
        const distance = valueInPercentage - traceReferenceInPercentage;
        let traceStart = traceReferenceInPercentage;
        let traceEnd = valueInPercentage;
        if (distance <= 0) {
            traceStart = valueInPercentage;
            traceEnd = traceReferenceInPercentage;
        }
        return (index.h(index.Host, { key: 'fc1ccd48aeefe6a53f7299db447b5c5e6fb6b13d', class: {
                disabled: this.disabled,
                error: !!this.error,
            }, onPointerDown: () => setTimeout(() => (this.showTooltip = true)) }, index.h("div", { key: '4e3d3b0d5e1b2a2882ce0073336e4cd13ac1a4b8', class: "slider" }, index.h("div", { key: 'f8457c6d8efad8d172abe49f9037cb71f9ba226f', class: "track" }, index.h("div", { key: 'cf141d91936a74657f8788f5f7c688e37ebf7a16', class: "thumb", style: {
                left: `calc(${valueInPercentage} * 100% - 8px)`,
            } }), index.h("div", { key: 'b54ae34bda82b7f0277ae361c5139845830dc85d', class: "ticks" }, this.marker
            ? this.marker.map((markerValue) => {
                if (markerValue > this.max || markerValue < this.min) {
                    return;
                }
                let left = (markerValue - this.rangeMin) / range;
                return (index.h("div", { class: {
                        tick: true,
                        'tick-active': this.isMarkerActive(markerValue) && this.trace,
                    }, style: {
                        '--tick-value': `${left}`,
                    } }));
            })
            : null)), index.h("input", Object.assign({ key: '219884ecfc35a76f0722782af2607c64b19a57aa', id: "slider", type: "range", list: this.marker ? 'markers' : undefined, step: this.step, min: this.min, max: this.max, value: this.rangeInput, tabindex: this.disabled ? -1 : 0, onInput: (event) => this.onInput(event), style: {
                '--value': `${valueInPercentage}`,
                '--trace-reference': `${traceReferenceInPercentage}`,
                '--trace-start': `${traceStart}`,
                '--trace-end': `${traceEnd}`,
            }, class: {
                trace: this.trace && traceReferenceInPercentage !== valueInPercentage,
            }, onFocus: () => {
                this.showTooltip = true;
            }, onBlur: () => {
                this.showTooltip = false;
            }, role: "slider", "aria-valuenow": this.rangeInput, "aria-valuemin": this.min, "aria-valuemax": this.max }, this.a11yAttributes)), index.h("ix-tooltip", { key: '387dc09d28b3c45f08470ba651c659e8c528a44d', class: {
                'hide-tooltip': !this.showTooltip,
            }, animationFrame: true }, this.rangeInput)), index.h("div", { key: 'f8fdb048411a622870b4b0698c7124f7e175dedf', class: "label" }, index.h("div", { key: '2bbb6c7418953b907b1ef604a8d775c1e69d6626', class: "label-start" }, index.h("slot", { key: 'ce4a5aedbfafe7b5b71d47421bae0ab385548920', name: "label-start" })), index.h("div", { key: '98b40f2b68164592307f7f9817c913dffcb08139', class: "label-end" }, index.h("slot", { key: 'bcd3497745bf949da88cd373ecf8cd3f74488ffe', name: "label-end" }))), this.error ? (index.h("ix-typography", { class: 'label-error', color: "alarm" }, this.error)) : null));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "showTooltip": ["onShowTooltipChange"],
        "value": ["updateRangeVariables"],
        "max": ["updateRangeVariables"],
        "min": ["updateRangeVariables"],
        "traceReference": ["updateRangeVariables"]
    }; }
};
__decorate([
    listener.OnListener('pointerup', (self) => self.showTooltip)
], Slider.prototype, "onPointerUp", null);
Slider.style = IxSliderStyle0;

exports.ix_slider = Slider;

//# sourceMappingURL=ix-slider.cjs.entry.js.map