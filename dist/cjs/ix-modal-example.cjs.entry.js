'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');
require('./animation-99234008.js');
const modal = require('./modal-828cb80a.js');
require('./typed-event-8032c0c0.js');

const ModalExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    dismiss() {
        modal.dismissModal(this.host);
    }
    close() {
        modal.closeModal(this.host, 'Done!');
    }
    render() {
        return (index.h(index.Host, { key: '6588eca80a4a796627317d549ced3d767792d528' }, index.h("div", { key: '06a4f6cb97ef30f9bdc406ca7bad4a1978c8df03' }, index.h("div", { key: 'dfc00207c3d9ead47420a30768e216b7907588c9', class: "modal-header" }, "Message headline", index.h("ix-icon-button", { key: '2b01ad4f2e9ca5e277c4d53b6d6cdb5d2b9b74c8', "data-close-button": true, ghost: true, icon: 'close', onClick: () => this.dismiss() })), index.h("div", { key: '4d1ac160957975fe53162ebd42dd2bd8d6dee0d9', class: "modal-body" }, "Message text lorem ipsum"), index.h("div", { key: '9709cda6c07d7c0abe13424dc87c64bb11162622', class: "modal-footer" }, index.h("ix-button", { key: 'f2c257ebea902ef30674ad2d24a150ad17b82df3', outline: true, onClick: () => this.dismiss() }, "Cancel"), index.h("ix-button", { key: '1f512110cfacee2259d709031be3e5a5869d9704', onClick: () => this.close() }, "OK")))));
    }
    get host() { return index.getElement(this); }
};

exports.ix_modal_example = ModalExample;

//# sourceMappingURL=ix-modal-example.cjs.entry.js.map