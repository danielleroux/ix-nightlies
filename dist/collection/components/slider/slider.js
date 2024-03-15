/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Host, } from "@stencil/core";
import { a11yHostAttributes } from "../utils/a11y";
import { OnListener } from "../utils/listener";
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
/**
 * @since 2.0.0
 *
 * @slot label-start - Element will be displayed at the start of the slider
 * @slot label-end - Element will be displayed at the end of the slider
 */
export class Slider {
    constructor() {
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
        this.a11yAttributes = a11yHostAttributes(this.hostElement, [
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
        return (h(Host, { key: 'fc1ccd48aeefe6a53f7299db447b5c5e6fb6b13d', class: {
                disabled: this.disabled,
                error: !!this.error,
            }, onPointerDown: () => setTimeout(() => (this.showTooltip = true)) }, h("div", { key: '4e3d3b0d5e1b2a2882ce0073336e4cd13ac1a4b8', class: "slider" }, h("div", { key: 'f8457c6d8efad8d172abe49f9037cb71f9ba226f', class: "track" }, h("div", { key: 'cf141d91936a74657f8788f5f7c688e37ebf7a16', class: "thumb", style: {
                left: `calc(${valueInPercentage} * 100% - 8px)`,
            } }), h("div", { key: 'b54ae34bda82b7f0277ae361c5139845830dc85d', class: "ticks" }, this.marker
            ? this.marker.map((markerValue) => {
                if (markerValue > this.max || markerValue < this.min) {
                    return;
                }
                let left = (markerValue - this.rangeMin) / range;
                return (h("div", { class: {
                        tick: true,
                        'tick-active': this.isMarkerActive(markerValue) && this.trace,
                    }, style: {
                        '--tick-value': `${left}`,
                    } }));
            })
            : null)), h("input", Object.assign({ key: '219884ecfc35a76f0722782af2607c64b19a57aa', id: "slider", type: "range", list: this.marker ? 'markers' : undefined, step: this.step, min: this.min, max: this.max, value: this.rangeInput, tabindex: this.disabled ? -1 : 0, onInput: (event) => this.onInput(event), style: {
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
            }, role: "slider", "aria-valuenow": this.rangeInput, "aria-valuemin": this.min, "aria-valuemax": this.max }, this.a11yAttributes)), h("ix-tooltip", { key: '387dc09d28b3c45f08470ba651c659e8c528a44d', class: {
                'hide-tooltip': !this.showTooltip,
            }, animationFrame: true }, this.rangeInput)), h("div", { key: 'f8fdb048411a622870b4b0698c7124f7e175dedf', class: "label" }, h("div", { key: '2bbb6c7418953b907b1ef604a8d775c1e69d6626', class: "label-start" }, h("slot", { key: 'ce4a5aedbfafe7b5b71d47421bae0ab385548920', name: "label-start" })), h("div", { key: '98b40f2b68164592307f7f9817c913dffcb08139', class: "label-end" }, h("slot", { key: 'bcd3497745bf949da88cd373ecf8cd3f74488ffe', name: "label-end" }))), this.error ? (h("ix-typography", { class: 'label-error', color: "alarm" }, this.error)) : null));
    }
    static get is() { return "ix-slider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["slider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["slider.css"]
        };
    }
    static get properties() {
        return {
            "step": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "link",
                            "text": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step"
                        }],
                    "text": "Legal number intervals"
                },
                "attribute": "step",
                "reflect": false
            },
            "min": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum slider value"
                },
                "attribute": "min",
                "reflect": false,
                "defaultValue": "0"
            },
            "max": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum slider value"
                },
                "attribute": "max",
                "reflect": false,
                "defaultValue": "100"
            },
            "value": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current value of the slider"
                },
                "attribute": "value",
                "reflect": false,
                "defaultValue": "0"
            },
            "marker": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SliderMarker",
                    "resolved": "number[]",
                    "references": {
                        "SliderMarker": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/slider/slider.tsx",
                            "id": "src/components/slider/slider.tsx::SliderMarker"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define tick marker on the slider. Marker has to be within slider min/max"
                }
            },
            "trace": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show a trace line"
                },
                "attribute": "trace",
                "reflect": false,
                "defaultValue": "false"
            },
            "traceReference": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define the start point of the trace line"
                },
                "attribute": "trace-reference",
                "reflect": false,
                "defaultValue": "0"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show control as disabled"
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "error": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "boolean | string",
                    "resolved": "boolean | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show error state and message"
                },
                "attribute": "error",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "rangeInput": {},
            "rangeMin": {},
            "rangeMax": {},
            "rangeTraceReference": {},
            "showTooltip": {}
        };
    }
    static get events() {
        return [{
                "method": "valueChange",
                "name": "valueChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "showTooltip",
                "methodName": "onShowTooltipChange"
            }, {
                "propName": "value",
                "methodName": "updateRangeVariables"
            }, {
                "propName": "max",
                "methodName": "updateRangeVariables"
            }, {
                "propName": "min",
                "methodName": "updateRangeVariables"
            }, {
                "propName": "traceReference",
                "methodName": "updateRangeVariables"
            }];
    }
}
__decorate([
    OnListener('pointerup', (self) => self.showTooltip)
], Slider.prototype, "onPointerUp", null);
//# sourceMappingURL=slider.js.map
