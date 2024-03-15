'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const keyValueCss = ":host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}:host(.keyValue) .keyValue__content .content__label{color:var(--theme-color-soft-text)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--theme-color-soft-bdr)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}";
const IxKeyValueStyle0 = keyValueCss;

const KeyValue = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.icon = undefined;
        this.label = undefined;
        this.labelPosition = 'top';
        this.value = undefined;
    }
    render() {
        return (index.h(index.Host, { key: '88dcec3572f18783faddef7e3ac8a66aef01ed1b', class: `keyValue keyValue--${this.labelPosition === 'top' ? 'column' : 'row'}` }, this.icon && (index.h("ix-icon", { name: this.icon, size: "24", class: "keyValue__icon" })), index.h("div", { key: '133fd9fa5e7fc3af3e181425045073c43c47049d', class: "keyValue__content" }, index.h("div", { key: '569cb9031c047421118d8847ec0c84dc8aeee469', class: "content__label" }, this.label), index.h("div", { key: 'a082de0c7b9a820d3ab86ef06f7be7425343a67a', class: {
                content__value: true,
                'has-customValue': this.value === undefined,
            } }, this.value !== undefined ? (this.value) : (index.h("slot", { name: "custom-value" }))))));
    }
};
KeyValue.style = IxKeyValueStyle0;

exports.ix_key_value = KeyValue;

//# sourceMappingURL=ix-key-value.cjs.entry.js.map