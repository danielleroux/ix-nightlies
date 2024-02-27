/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from "@stencil/core";
import { DateTime } from "luxon";
export class TimePicker {
    constructor() {
        this.format = 'TT';
        this.corners = 'rounded';
        this.standaloneAppearance = true;
        this.individual = true;
        this.showHour = true;
        this.showMinutes = true;
        this.showSeconds = true;
        this.time = DateTime.now().toFormat(this.format);
        this.showTimeReference = undefined;
        this.timeReference = undefined;
        this.textSelectTime = 'Done';
        this.textTime = 'Time';
        this._time = undefined;
        this._timeRef = undefined;
        this._formattedTime = undefined;
    }
    watchTimePropHandler(newValue) {
        this._time = DateTime.fromFormat(newValue, this.format);
        if (!this._time.isValid) {
            throw new Error('Format is not supported or not correct');
        }
    }
    componentWillLoad() {
        this._time = DateTime.fromFormat(this.time, this.format);
        if (!this._time.isValid) {
            console.error(`Invalid time format. The configured format does not match the format of the passed time. ${this._time.invalidReason}: ${this._time.invalidExplanation}`);
            return;
        }
        this._timeRef = this.format.includes('a')
            ? DateTime.fromFormat(this.time, this.format).toFormat('a')
            : undefined;
        this.formatTime();
    }
    formatTime() {
        const [hour, minute, second] = this._time
            .toFormat(this.format)
            .split(' ')[0]
            .split(':');
        this._formattedTime = {
            hour: hour,
            minute: minute,
            second: second,
        };
    }
    onInternalTimeChange() {
        this.timeChange.emit(this._time.toFormat(this.format));
        if (this._timeRef)
            this._timeRef = this._time.toFormat('a');
    }
    timeUpdate(unit, value) {
        let maxValue = DateTime.now().endOf('day').get(unit);
        if (this._timeRef === 'PM' && unit === 'hour')
            value += 12;
        if (this._timeRef === 'AM' && unit === 'hour')
            maxValue = 12;
        if (value > maxValue) {
            value = maxValue;
        }
        else if (value < 0) {
            value = 0;
        }
        this._time = this._time.set({
            [unit]: value,
        });
        return value;
    }
    changeTimeReference() {
        this._timeRef = this._timeRef === 'AM' ? 'PM' : 'AM';
        if (!this._time.toFormat('a').includes(this._timeRef)) {
            this._time = this._time.plus({
                hour: 12,
            });
        }
    }
    /**
     * Get the current time based on the wanted format
     */
    async getCurrentTime() {
        return this._time.toFormat(this.format);
    }
    render() {
        let timepickerInformation = [
            {
                unit: 'hour',
                placeholder: 'HH',
                hidden: !this.showHour,
            },
            {
                unit: 'minute',
                placeholder: 'MM',
                hidden: !this.showMinutes,
            },
            {
                unit: 'second',
                placeholder: 'SS',
                hidden: !this.showSeconds,
            },
        ];
        timepickerInformation = timepickerInformation.filter((item) => !item.hidden);
        return (h(Host, { key: '0d12688a996f942f3677fb42eb2e03adc043e8fd' }, h("ix-date-time-card", { key: '5409847c27d8f5e39bcccc755b81127ad625a2f9', standaloneAppearance: this.standaloneAppearance, corners: this.corners }, h("div", { key: 'a9aeee356d8a240cfec0113ffcc5fcfc18fb6f5d', class: "header", slot: "header" }, h("ix-typography", { key: '24eee442d20dc1e5c7ef309e20104f4076029b2a', variant: "default-title" }, this.textTime || 'Time')), h("div", { key: '0125ffbdab047f9244c3df14365f87694efbe8c0', class: "clock" }, timepickerInformation.map((descriptor, index) => (h("div", { class: "flex" }, h("div", { class: { columns: true, hidden: descriptor.hidden } }, h("ix-icon-button", { size: "16", onClick: () => (this._time = this._time.plus({
                [descriptor.unit]: 1,
            })), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("input", { class: "form-control", name: descriptor.unit, type: "number", placeholder: descriptor.placeholder, value: this._formattedTime
                ? this._formattedTime[descriptor.unit]
                : null, onKeyDown: (e) => {
                if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')
                    return;
                const value = e.key === 'ArrowUp' ? 1 : -1;
                this._time = this._time.plus({
                    [descriptor.unit]: value,
                });
                e.preventDefault();
            }, onChange: (e) => {
                let inputElement = e.target;
                inputElement.value = this.timeUpdate(descriptor.unit, +inputElement.value).toString();
            } }), h("ix-icon-button", { size: "16", onClick: () => (this._time = this._time.minus({
                [descriptor.unit]: 1,
            })), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" })), index !== timepickerInformation.length - 1 && (h("div", { class: {
                'column-seperator': true,
                hidden: descriptor.hidden,
            } }, ":"))))), h("div", { key: '62554ab71c93c34c73a7d780d510676f4c0dee36', class: {
                columns: true,
                'default-space': true,
                hidden: this._timeRef === undefined,
            } }, h("ix-icon-button", { key: 'c0f1734a51bc44ae8ff98c3f16843a3a6420dcaa', size: "16", onClick: () => this.changeTimeReference(), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("div", { key: 'c01c49b66efda970fb800134e2bc949d9f7f6c9b', class: "time-reference" }, this._timeRef), h("ix-icon-button", { key: '83c58978b8442e6b87ea88897a75419882509d5c', size: "16", onClick: () => this.changeTimeReference(), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" }))), h("div", { key: '2d00b5a7fde2f34f31621f5ad03441ac05978931', class: { button: true, hidden: !this.standaloneAppearance } }, h("ix-button", { key: '88464d3ff7ebc64bd5d8c6933fcc5013c0870706', onClick: () => {
                this.timeSelect.emit(this._time.toFormat(this.format));
                this.done.emit(this._time.toFormat(this.format));
            } }, this.textSelectTime)))));
    }
    static get is() { return "ix-time-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["time-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["time-picker.css"]
        };
    }
    static get properties() {
        return {
            "format": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "Format of time string\nSee {@link \"https://moment.github.io/luxon/#/formatting?id=table-of-tokens\"} for all available tokens."
                },
                "attribute": "format",
                "reflect": false,
                "defaultValue": "'TT'"
            },
            "corners": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TimePickerCorners",
                    "resolved": "\"left\" | \"right\" | \"rounded\" | \"straight\"",
                    "references": {
                        "TimePickerCorners": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/time-picker/time-picker.tsx",
                            "id": "src/components/time-picker/time-picker.tsx::TimePickerCorners"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Corner style"
                },
                "attribute": "corners",
                "reflect": false,
                "defaultValue": "'rounded'"
            },
            "standaloneAppearance": {
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
                    "text": "Controls the visual presentation and styling of the component when it is displayed as a standalone element"
                },
                "attribute": "standalone-appearance",
                "reflect": false,
                "defaultValue": "true"
            },
            "individual": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Not supported since 2.0.0."
                        }],
                    "text": ""
                },
                "attribute": "individual",
                "reflect": false,
                "defaultValue": "true"
            },
            "showHour": {
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
                    "text": "Show hour input"
                },
                "attribute": "show-hour",
                "reflect": false,
                "defaultValue": "true"
            },
            "showMinutes": {
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
                    "text": "Show minutes input"
                },
                "attribute": "show-minutes",
                "reflect": false,
                "defaultValue": "true"
            },
            "showSeconds": {
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
                    "text": "Show seconds input"
                },
                "attribute": "show-seconds",
                "reflect": false,
                "defaultValue": "true"
            },
            "time": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "Select time with format string\nFormat has to match the `format` property."
                },
                "attribute": "time",
                "reflect": false,
                "defaultValue": "DateTime.now().toFormat(this.format)"
            },
            "showTimeReference": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0 time reference is default aligned with format tt"
                        }, {
                            "name": "deprecated",
                            "text": "Since 2.0.0 time reference will be displayed depending on format."
                        }],
                    "text": "Show time reference input"
                },
                "attribute": "show-time-reference",
                "reflect": false,
                "defaultValue": "undefined"
            },
            "timeReference": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'AM' | 'PM' | undefined",
                    "resolved": "\"AM\" | \"PM\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set time reference"
                },
                "attribute": "time-reference",
                "reflect": false
            },
            "textSelectTime": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "Text of date select button"
                },
                "attribute": "text-select-time",
                "reflect": false,
                "defaultValue": "'Done'"
            },
            "textTime": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "Text for top label"
                },
                "attribute": "text-time",
                "reflect": false,
                "defaultValue": "'Time'"
            }
        };
    }
    static get states() {
        return {
            "_time": {},
            "_timeRef": {},
            "_formattedTime": {}
        };
    }
    static get events() {
        return [{
                "method": "timeSelect",
                "name": "timeSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Time event"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "done",
                "name": "done",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "Will be removed in 3.0.0. Use `time-select` event."
                        }],
                    "text": "Time event"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "timeChange",
                "name": "timeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Time change event"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "getCurrentTime": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "Get the current time based on the wanted format",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "time",
                "methodName": "watchTimePropHandler"
            }, {
                "propName": "_time",
                "methodName": "formatTime"
            }, {
                "propName": "_time",
                "methodName": "onInternalTimeChange"
            }];
    }
}
//# sourceMappingURL=time-picker.js.map
