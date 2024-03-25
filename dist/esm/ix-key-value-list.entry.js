import { r as registerInstance, h, H as Host } from './index-f18c5ad1.js';

const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;

const KeyValueList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.striped = undefined;
    }
    render() {
        return (h(Host, { key: '3b211fbd897af85b1ef38544d1177bd13e88d1e6', class: { keyValueList: true, 'keyValueList--striped': this.striped } }, h("slot", { key: '4fa83986fc2d859f2c600347a7e1afc13f5a1113' })));
    }
};
KeyValueList.style = IxKeyValueListStyle0;

export { KeyValueList as ix_key_value_list };

//# sourceMappingURL=ix-key-value-list.entry.js.map