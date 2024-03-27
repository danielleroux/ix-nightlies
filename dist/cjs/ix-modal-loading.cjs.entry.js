'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const IxModalLoadingStyle0 = modalLoadingCss;

const ModalLoading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9333078e1c22a3307abb022ca8cf761667ce9d95' }, index.h("ix-spinner", { key: '895d205873c13dfa9257627094b67a9bfb40e04a', variant: "primary" }), index.h("span", { key: '9c84db0939e4f9fbf359425251103ce9ba2cd968', class: 'loading-text' }, index.h("slot", { key: 'b2fa68d8d6ab862b88cf7deadc4249c2775fd6e6' }))));
    }
};
ModalLoading.style = IxModalLoadingStyle0;

exports.ix_modal_loading = ModalLoading;

//# sourceMappingURL=ix-modal-loading.cjs.entry.js.map