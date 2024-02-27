'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;

const KeyValueList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.striped = undefined;
    }
    render() {
        return (index.h(index.Host, { key: '46642ccf687b608a8db31936f492e56c6e360cb7', class: { keyValueList: true, 'keyValueList--striped': this.striped } }, index.h("slot", { key: '9888ad2f28136d0f354e1d14087fbcdd4d65c946' })));
    }
};
KeyValueList.style = IxKeyValueListStyle0;

exports.ix_key_value_list = KeyValueList;

//# sourceMappingURL=ix-key-value-list.cjs.entry.js.map