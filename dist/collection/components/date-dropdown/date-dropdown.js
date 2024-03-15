/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Fragment, h, Host, } from "@stencil/core";
import { DateTime } from "luxon";
/**
 * @since 2.1.0
 */
export class DateDropdown {
    constructor() {
        this.datePickerTouched = false;
        this.format = 'yyyy/LL/dd';
        this.range = true;
        this.from = undefined;
        this.to = undefined;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.dateRangeId = 'custom';
        this.customRangeAllowed = true;
        this.dateRangeOptions = [];
        this.i18nCustomItem = 'Custom...';
        this.i18nDone = 'Done';
        this.i18nNoRange = 'No range set';
        this.today = DateTime.now().toISO();
        this.selectedDateRangeId = undefined;
        this.currentRangeValue = undefined;
        this.triggerRef = undefined;
    }
    onDateRangeIdChange() {
        this.onRangeListSelect(this.dateRangeId);
        this.onDateSelect({
            from: this.currentRangeValue.from,
            to: this.currentRangeValue.to,
            id: this.currentRangeValue.id,
        });
    }
    onDateRangeOptionsChange() {
        this.initialize();
        this.onDateRangeIdChange();
    }
    componentWillLoad() {
        this.initialize();
        this.setDateRangeSelection(this.dateRangeId);
    }
    /**
     * Retrieves the currently selected date range from the component.
     * This method returns the selected date range as a `DateChangeEvent` object.
     */
    async getDateRange() {
        return this.currentRangeValue;
    }
    initialize() {
        const isCustomRange = this.dateRangeId === 'custom' ||
            (!this.dateRangeId && !!this.from && !!this.to);
        if (isCustomRange && this.customRangeAllowed) {
            this.selectedDateRangeId = 'custom';
            this.currentRangeValue = {
                id: this.selectedDateRangeId,
                from: this.from,
                to: this.to,
            };
            return;
        }
        const isValidConfiguration = !isCustomRange && !this.from;
        if (!isValidConfiguration) {
            console.warn('"from" and "range-date-id" is provided this is an invalid combination. Using "custom".');
            this.selectedDateRangeId = 'custom';
            this.currentRangeValue = {
                id: this.selectedDateRangeId,
                from: this.from,
                to: this.to,
            };
            return;
        }
    }
    onDateSelect(rangeValue, preserveDropdown = true) {
        this.dateRangeChange.emit(rangeValue);
        if (preserveDropdown) {
            this.closeDropdown();
        }
        this.datePickerTouched = false;
    }
    onRangeListSelect(id) {
        if (this.setDateRangeSelection(id)) {
            this.onDateSelect(this.currentRangeValue);
        }
    }
    setDateRangeSelection(id) {
        this.selectedDateRangeId = id;
        const option = this.dateRangeOptions.find((range) => range.id === id);
        if (option) {
            this.currentRangeValue = option;
        }
        return option;
    }
    closeDropdown() {
        this.hostElement.shadowRoot.querySelector('ix-dropdown').show = false;
    }
    getButtonLabel() {
        var _a, _b;
        if (this.selectedDateRangeId === 'custom' && ((_a = this.currentRangeValue) === null || _a === void 0 ? void 0 : _a.from)) {
            let range = this.currentRangeValue.from;
            if (this.currentRangeValue.to) {
                range += ` - ${this.currentRangeValue.to}`;
            }
            return range;
        }
        if (!this.selectedDateRangeId) {
            return this.i18nNoRange;
        }
        if (!this.dateRangeOptions || ((_b = this.dateRangeOptions) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            return this.i18nNoRange;
        }
        const option = this.dateRangeOptions.find((option) => option.id === this.selectedDateRangeId);
        if (!option) {
            console.error(`Cannot find range option with id ${this.selectedDateRangeId}`);
            return this.i18nNoRange;
        }
        return option.label;
    }
    render() {
        var _a, _b, _c;
        return (h(Host, { key: '587a80ff64848ac3072ae04a27573f83e1e11fd8' }, h("ix-button", { key: '54dce5bf9e30572642386c16c7f18e69e55f3fd1', "data-date-dropdown-trigger": true, variant: "primary", icon: "history", ref: (ref) => (this.triggerRef = ref) }, this.getButtonLabel()), h("ix-dropdown", { key: '4292a46172362908d80a49874b0e4a62ae0461e9', "data-date-dropdown": true, class: "min-width max-height", trigger: this.triggerRef, "close-behavior": "outside", placement: "bottom-start", onShowChanged: ({ detail: show }) => {
                if (!show &&
                    this.selectedDateRangeId === 'custom' &&
                    this.datePickerTouched) {
                    this.onDateSelect(this.currentRangeValue);
                }
            } }, h("ix-layout-grid", { key: '9d92b3fd14fb2546fe9f6b588e048ad9048ed99e', "no-margin": "true" }, h("ix-row", { key: 'ea35e1f9c8df2f1bed99dff82ffcf57206864d47' }, ((_a = this.dateRangeOptions) === null || _a === void 0 ? void 0 : _a.length) > 1 && (h("ix-col", { class: {
                'no-margin': true,
                'border-right': this.selectedDateRangeId === 'custom',
            } }, this.dateRangeOptions.map((dateRangeOption) => (h("ix-dropdown-item", { label: dateRangeOption.label, onClick: () => this.onRangeListSelect(dateRangeOption.id), checked: this.selectedDateRangeId === dateRangeOption.id }))), h("div", { hidden: !this.customRangeAllowed }, h("ix-dropdown-item", { label: this.i18nCustomItem, checked: this.selectedDateRangeId === 'custom', onClick: () => this.onRangeListSelect('custom') })))), h("ix-col", { key: '39d788b4f948826461facbf8f0510d871416a2a3', class: "no-margin" }, this.selectedDateRangeId === 'custom' && (h(Fragment, null, h("ix-date-picker", { standaloneAppearance: false, onDateChange: (e) => {
                e.stopPropagation();
                this.currentRangeValue = Object.assign(Object.assign({}, e.detail), { id: 'custom' });
                this.datePickerTouched = true;
            }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, range: this.range, from: this.from || ((_b = this.currentRangeValue) === null || _b === void 0 ? void 0 : _b.from), to: this.to || ((_c = this.currentRangeValue) === null || _c === void 0 ? void 0 : _c.to), minDate: this.minDate, maxDate: this.maxDate, today: this.today }), h("div", { class: "pull-right" }, h("ix-button", { onClick: () => {
                this.onDateSelect(this.currentRangeValue);
            } }, this.i18nDone))))))))));
    }
    static get is() { return "ix-date-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["date-dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["date-dropdown.css"]
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
                            "name": "link",
                            "text": "https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens."
                        }],
                    "text": "Date format string.\nSee"
                },
                "attribute": "format",
                "reflect": false,
                "defaultValue": "'yyyy/LL/dd'"
            },
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
                    "text": "If true a range of dates can be selected."
                },
                "attribute": "range",
                "reflect": false,
                "defaultValue": "true"
            },
            "from": {
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
                    "tags": [],
                    "text": "Picker date. If the picker is in range mode this property is the start date.\nIf set to `null` no default start date will be pre-selected.\n\nFormat is based on `format`"
                },
                "attribute": "from",
                "reflect": false
            },
            "to": {
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
                    "tags": [],
                    "text": "Picker date. If the picker is in range mode this property is the end date.\nIf the picker is not in range mode leave this value `null`\n\nFormat is based on `format`"
                },
                "attribute": "to",
                "reflect": false
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
                    "tags": [],
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
                    "tags": [],
                    "text": "The latest date that can be selected by the date picker.\nIf not set there will be no restriction."
                },
                "attribute": "max-date",
                "reflect": false
            },
            "dateRangeId": {
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
                    "tags": [],
                    "text": "Used to set the initial select date range as well as the button name,\nif not set or no according date range label is found, nothing will be selected"
                },
                "attribute": "date-range-id",
                "reflect": false,
                "defaultValue": "'custom'"
            },
            "customRangeAllowed": {
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
                    "text": "Controls whether the user is allowed to pick custom date ranges in the component.\nWhen set to 'true', the user can select a custom date range using the date picker.\nWhen set to 'false', only predefined time date ranges are available for selection."
                },
                "attribute": "custom-range-allowed",
                "reflect": false,
                "defaultValue": "true"
            },
            "dateRangeOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DateDropdownOption[]",
                    "resolved": "DateDropdownOption[]",
                    "references": {
                        "DateDropdownOption": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/date-dropdown/date-dropdown.tsx",
                            "id": "src/components/date-dropdown/date-dropdown.tsx::DateDropdownOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "An array of predefined date range options for the date picker.\nEach option is an object with a label describing the range and a function\nthat returns the start and end dates of the range as a DateRangeOption object.\n\nExample format:\n  {\n    id: 'some unique id',\n    label: 'Name of the range',\n    from: undefined, to: '2023/03/29'\n  },\n  // ... other predefined date range options ..."
                },
                "defaultValue": "[]"
            },
            "i18nCustomItem": {
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
                    "tags": [],
                    "text": "Text for custom dropdown item. Will be used for translation."
                },
                "attribute": "i18n-custom-item",
                "reflect": false,
                "defaultValue": "'Custom...'"
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
                    "tags": [],
                    "text": "Text for the done button. Will be used for translation."
                },
                "attribute": "i18n-done",
                "reflect": false,
                "defaultValue": "'Done'"
            },
            "i18nNoRange": {
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
                    "tags": [],
                    "text": "Text for the done button. Will be used for translation."
                },
                "attribute": "i18n-no-range",
                "reflect": false,
                "defaultValue": "'No range set'"
            },
            "today": {
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
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "today",
                "reflect": false,
                "defaultValue": "DateTime.now().toISO()"
            }
        };
    }
    static get states() {
        return {
            "selectedDateRangeId": {},
            "currentRangeValue": {},
            "triggerRef": {}
        };
    }
    static get events() {
        return [{
                "method": "dateRangeChange",
                "name": "dateRangeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "EventEmitter for date range change events.\n\nThis event is emitted when the date range changes within the component.\nThe event payload contains information about the selected date range."
                },
                "complexType": {
                    "original": "DateRangeChangeEvent",
                    "resolved": "{ id: string; from: string; to: string; }",
                    "references": {
                        "DateRangeChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/date-dropdown/date-dropdown.tsx",
                            "id": "src/components/date-dropdown/date-dropdown.tsx::DateRangeChangeEvent"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "getDateRange": {
                "complexType": {
                    "signature": "() => Promise<DateRangeChangeEvent>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "DateRangeChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/date-dropdown/date-dropdown.tsx",
                            "id": "src/components/date-dropdown/date-dropdown.tsx::DateRangeChangeEvent"
                        }
                    },
                    "return": "Promise<DateRangeChangeEvent>"
                },
                "docs": {
                    "text": "Retrieves the currently selected date range from the component.\nThis method returns the selected date range as a `DateChangeEvent` object.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "dateRangeId",
                "methodName": "onDateRangeIdChange"
            }, {
                "propName": "to",
                "methodName": "onDateRangeIdChange"
            }, {
                "propName": "from",
                "methodName": "onDateRangeIdChange"
            }, {
                "propName": "dateRangeOptions",
                "methodName": "onDateRangeOptionsChange"
            }];
    }
}
//# sourceMappingURL=date-dropdown.js.map
