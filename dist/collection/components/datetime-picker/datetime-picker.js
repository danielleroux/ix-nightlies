/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
export class DatetimePicker {
    constructor() {
        this.range = true;
        this.showHour = true;
        this.showMinutes = true;
        this.showSeconds = true;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.dateFormat = 'yyyy/LL/dd';
        this.timeFormat = 'HH:mm:ss';
        this.from = undefined;
        this.to = undefined;
        this.time = undefined;
        this.showTimeReference = undefined;
        this.timeReference = undefined;
        this.textSelectDate = undefined;
        this.i18nDone = 'Done';
        this.weekStartIndex = 0;
        this.locale = undefined;
        this.eventDelimiter = ' - ';
    }
    async onDone() {
        var _a;
        const date = await this.datePickerElement.getCurrentDate();
        const time = await this.timePickerElement.getCurrentTime();
        this.dateSelect.emit({
            from: date.from,
            to: date.to,
            time: time,
        });
        this.done.emit([date.from, (_a = date.to) !== null && _a !== void 0 ? _a : '', time].join(this.eventDelimiter));
    }
    async onDateChange(event) {
        event.preventDefault();
        event.stopPropagation();
        const { detail: date } = event;
        this.dateChange.emit(date);
    }
    async onTimeChange(event) {
        event.preventDefault();
        event.stopPropagation();
        const { detail: time } = event;
        this.timeChange.emit(time);
    }
    render() {
        return (h(Host, { key: '83ee67741b982fbf3a6191c04fa3edbbdb6e6f44' }, h("ix-layout-grid", { key: 'f5f2c66badc930b769638f8f087058b51e44aca7', class: "no-padding" }, h("ix-row", { key: '15361bfa7b0cba0688507273601701160016d69b' }, h("ix-col", { key: 'c4d1d8a41b939e7970277d7a8d9a1c68db7bfa91', class: "no-padding" }, h("ix-date-picker", { key: '77bc6717428ef6fd131cd364b15b5e62a79e8f7f', ref: (ref) => (this.datePickerElement = ref), corners: "left", range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, standaloneAppearance: false, locale: this.locale })), h("ix-col", { key: '52d25a39e84d6e0bc35bfe2159c368d2611570c3', class: "no-padding" }, h("ix-time-picker", { key: 'c19954e799ec9a0f5afb7df35472e58911ea7209', class: "min-width", ref: (ref) => (this.timePickerElement = ref), corners: "right", standaloneAppearance: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, time: this.time }))), h("ix-row", { key: 'cc6b061a09a9e3b8e06d7acd6bfe801dc884cc92' }, h("ix-col", { key: '86d98b8b9d25f0d77707c7104ed3b53efed3fd04' }, h("ix-button", { key: '5e843ec14cc32176420a8304779e7563117af40d', class: "btn-select-date btn-md-width", onClick: () => this.onDone() }, this.textSelectDate || this.i18nDone))))));
    }
    static get is() { return "ix-datetime-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["datetime-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["datetime-picker.css"]
        };
    }
    static get properties() {
        return {
            "range": {
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
                    "text": "If true a date-range can be selected (from/to)."
                },
                "attribute": "range",
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
            "minDate": {
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
                    "text": "The earliest date that can be selected by the date picker.\nIf not set there will be no restriction."
                },
                "attribute": "min-date",
                "reflect": false
            },
            "maxDate": {
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
                    "text": "The latest date that can be selected by the date picker.\nIf not set there will be no restriction."
                },
                "attribute": "max-date",
                "reflect": false
            },
            "dateFormat": {
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
                    "text": "Date format string.\nSee {@link \"https://moment.github.io/luxon/#/formatting?id=table-of-tokens\"} for all available tokens."
                },
                "attribute": "date-format",
                "reflect": false,
                "defaultValue": "'yyyy/LL/dd'"
            },
            "timeFormat": {
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
                    "text": "Time format string.\nSee {@link \"https://moment.github.io/luxon/#/formatting?id=table-of-tokens\"} for all available tokens."
                },
                "attribute": "time-format",
                "reflect": false,
                "defaultValue": "'HH:mm:ss'"
            },
            "from": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
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
                    "text": "The selected starting date. If the picker is not in range mode this is the selected date.\nFormat has to match the `format` property."
                },
                "attribute": "from",
                "reflect": false
            },
            "to": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
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
                    "text": "The selected end date. If the the picker is not in range mode this property has no impact.\nFormat has to match the `format` property."
                },
                "attribute": "to",
                "reflect": false
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
                    "text": "Select time with format string"
                },
                "attribute": "time",
                "reflect": false
            },
            "showTimeReference": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "see",
                            "text": "{ this.timeFormat}"
                        }, {
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "Show time reference input\nTime reference is default aligned with"
                },
                "attribute": "show-time-reference",
                "reflect": false,
                "defaultValue": "undefined"
            },
            "timeReference": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'AM' | 'PM'",
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
            "textSelectDate": {
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
                        }, {
                            "name": "deprecated",
                            "text": "since 2.1.0. Use `i18nDone`"
                        }],
                    "text": "Text of date select button"
                },
                "attribute": "text-select-date",
                "reflect": false
            },
            "i18nDone": {
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
                    "text": "Text of date select button"
                },
                "attribute": "i18n-done",
                "reflect": false,
                "defaultValue": "'Done'"
            },
            "weekStartIndex": {
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
                            "name": "since",
                            "text": "2.1.0"
                        }],
                    "text": "The index of which day to start the week on, based on the Locale#weekdays array.\nE.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday."
                },
                "attribute": "week-start-index",
                "reflect": false,
                "defaultValue": "0"
            },
            "locale": {
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
                    "text": "Format of time string\nSee {@link \"https://moment.github.io/luxon/#/formatting?id=table-of-tokens\"} for all available tokens."
                },
                "attribute": "locale",
                "reflect": false,
                "defaultValue": "undefined"
            },
            "eventDelimiter": {
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
                        }, {
                            "name": "deprecated",
                            "text": "Not used anymore see `done` event"
                        }],
                    "text": "Default behavior of the done event is to join the two events (date and time) into one combined string output.\nThis combination can be configured over the delimiter"
                },
                "attribute": "event-delimiter",
                "reflect": false,
                "defaultValue": "' - '"
            }
        };
    }
    static get events() {
        return [{
                "method": "done",
                "name": "done",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use `this.dateChange`"
                        }],
                    "text": "Done event\n\nSet `doneEventDelimiter` to null or undefine to get the typed event"
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
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "Time change"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "dateChange",
                "name": "dateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "Date change"
                },
                "complexType": {
                    "original": "DateTimeDateChangeEvent",
                    "resolved": "string | { from: string; to: string; }",
                    "references": {
                        "DateTimeDateChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/datetime-picker/datetime-picker.tsx",
                            "id": "src/components/datetime-picker/datetime-picker.tsx::DateTimeDateChangeEvent"
                        }
                    }
                }
            }, {
                "method": "dateSelect",
                "name": "dateSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.1.0"
                        }],
                    "text": "Datetime selection event is fired after confirm button is pressed"
                },
                "complexType": {
                    "original": "DateTimeSelectEvent",
                    "resolved": "{ from: string; to: string; time: string; }",
                    "references": {
                        "DateTimeSelectEvent": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/datetime-picker/datetime-picker.tsx",
                            "id": "src/components/datetime-picker/datetime-picker.tsx::DateTimeSelectEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=datetime-picker.js.map
