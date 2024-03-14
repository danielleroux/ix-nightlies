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
        return (h(Host, { key: '8c85501e96b06c0978e105a3c385ff0824c65a8f', class: {
                disabled: this.disabled,
                error: !!this.error,
            }, onPointerDown: () => setTimeout(() => (this.showTooltip = true)) }, h("div", { key: 'd55ef7538ee1c4ddc5cbce9084f942100e3c973d', class: "slider" }, h("div", { key: 'ca12a0723b0413045b159fb0ff7c0e86492ec7dd', class: "track" }, h("div", { key: '14ac930b5473b74eb429723fee183c92c3fafdfb', class: "thumb", style: {
                left: `calc(${valueInPercentage} * 100% - 8px)`,
            } }), h("div", { key: '3e44ab3c48f5d3225a2bef007c33f1637daed6a1', class: "ticks" }, this.marker
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
            : null)), h("input", Object.assign({ key: '723d37e2970d33e4707b3f6749d87e24a4abaf82', id: "slider", type: "range", list: this.marker ? 'markers' : undefined, step: this.step, min: this.min, max: this.max, value: this.rangeInput, tabindex: this.disabled ? -1 : 0, onInput: (event) => this.onInput(event), style: {
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
            }, role: "slider", "aria-valuenow": this.rangeInput, "aria-valuemin": this.min, "aria-valuemax": this.max }, this.a11yAttributes)), h("ix-tooltip", { key: '24fda111d2fb0582b41a43f621534984cfa0b851', class: {
                'hide-tooltip': !this.showTooltip,
            }, animationFrame: true }, this.rangeInput)), h("div", { key: '3f048b282a1b5bce1a30710eaaeaa4a14d19ee32', class: "label" }, h("div", { key: '08e62143c2ea733010a59031e7eb2fa261b47de6', class: "label-start" }, h("slot", { key: 'e2902262ac37d93cd57b08230697735c5fdd95ed', name: "label-start" })), h("div", { key: 'fe84bba24a5a9673f4b4d86a6463381b84ef5069', class: "label-end" }, h("slot", { key: '9bfb718f207f3efac2c3d45f424264d45c293065', name: "label-end" }))), this.error ? (h("ix-typography", { class: 'label-error', color: "alarm" }, this.error)) : null));
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
