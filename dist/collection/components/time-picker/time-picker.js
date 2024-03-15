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
        return (h(Host, { key: 'c09337ff6d0366929f77fe9bbdd89eb43bcc71ea' }, h("ix-date-time-card", { key: '80c29872490f5968979a802b92113377ec9df678', standaloneAppearance: this.standaloneAppearance, corners: this.corners }, h("div", { key: '35981c4cde62451368ee30fc4bcc19f894939cda', class: "header", slot: "header" }, h("ix-typography", { key: 'cd88a3f06e8907419acc45cd71d9954b7365096c', variant: "default-title" }, this.textTime || 'Time')), h("div", { key: 'fd5d74523fd649fedac87ac0887fb643fd9795ce', class: "clock" }, timepickerInformation.map((descriptor, index) => (h("div", { class: "flex" }, h("div", { class: { columns: true, hidden: descriptor.hidden } }, h("ix-icon-button", { size: "16", onClick: () => (this._time = this._time.plus({
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
            } }, ":"))))), h("div", { key: '819d9ce8cdfc94e7c4a1d2f7190587f052a9d246', class: {
                columns: true,
                'default-space': true,
                hidden: this._timeRef === undefined,
            } }, h("ix-icon-button", { key: '6ec3654d6a81bb2420695dd3292677395bd6adc2', size: "16", onClick: () => this.changeTimeReference(), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("div", { key: '09b1dd7076112d4dc5168a968ed0ebebaa67e69f', class: "time-reference" }, this._timeRef), h("ix-icon-button", { key: 'ff24cdad6df286cc2da51958c2b51fe43f1e4fea', size: "16", onClick: () => this.changeTimeReference(), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" }))), h("div", { key: '82602709c4107324d9498426cb30959fe81bacc4', class: { button: true, hidden: !this.standaloneAppearance } }, h("ix-button", { key: '64da9baed02906baad694bbe066bc355197d293e', onClick: () => {
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
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/time-picker/time-picker.tsx",
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
