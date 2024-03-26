'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;

const KeyValueList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.striped = undefined;
    }
    render() {
        return (index.h(index.Host, { key: '3b211fbd897af85b1ef38544d1177bd13e88d1e6', class: { keyValueList: true, 'keyValueList--striped': this.striped } }, index.h("slot", { key: '4fa83986fc2d859f2c600347a7e1afc13f5a1113' })));
    }
};
KeyValueList.style = IxKeyValueListStyle0;

exports.ix_key_value_list = KeyValueList;

//# sourceMappingURL=ix-key-value-list.cjs.entry.js.map