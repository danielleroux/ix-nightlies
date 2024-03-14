'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
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
        return (index.h(index.Host, { key: '4ead947641c449826d2a0160304fdc3a7ac69817' }, index.h("div", { key: '299a7457a7b7c724252b47d5b6c9d2eb656efcf9' }, index.h("div", { key: 'f26421f60cafe11b55cf2a7af350cf54bd8e9c50', class: "modal-header" }, "Message headline", index.h("ix-icon-button", { key: 'c3bf94ce8624537cbe936aead4b435e9b40540f7', "data-close-button": true, ghost: true, icon: 'close', onClick: () => this.dismiss() })), index.h("div", { key: 'e1d62f7bd2a03375b3994a4aa3b9e23eee6ca1ab', class: "modal-body" }, "Message text lorem ipsum"), index.h("div", { key: '289425914048dd0d67abe4dc871f0ee86f8262fd', class: "modal-footer" }, index.h("ix-button", { key: '056fb4c0df84dca31cbc90280f4a216f2d9826fe', outline: true, onClick: () => this.dismiss() }, "Cancel"), index.h("ix-button", { key: '5be49f2996d268a1f19abd9f069f14acb02ab67d', onClick: () => this.close() }, "OK")))));
    }
    get host() { return index.getElement(this); }
};

exports.ix_modal_example = ModalExample;

//# sourceMappingURL=ix-modal-example.cjs.entry.js.map