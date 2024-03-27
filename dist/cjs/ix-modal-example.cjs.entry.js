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
        return (index.h(index.Host, { key: '4621916acefb534c958613badbc9755946e55531' }, index.h("div", { key: '37996e6d6f79746c5c4fe85357311adac32a04e2' }, index.h("div", { key: '4012ad9a3f9283f952f03011a93b7a9d99037142', class: "modal-header" }, "Message headline", index.h("ix-icon-button", { key: '16416236c4232b078d9169a679ab364957d38023', "data-close-button": true, ghost: true, icon: 'close', onClick: () => this.dismiss() })), index.h("div", { key: '223b73f590629a6e88c7085d947154c13a0b32c4', class: "modal-body" }, "Message text lorem ipsum"), index.h("div", { key: '83c670e30fcc9e579f41d83873996768a38348d3', class: "modal-footer" }, index.h("ix-button", { key: '57f16306d1dab23a7562616e42caadf9a3c135fa', outline: true, onClick: () => this.dismiss() }, "Cancel"), index.h("ix-button", { key: '5e6b2408a088aea8a879f34560a86c089a88b5b9', onClick: () => this.close() }, "OK")))));
    }
    get host() { return index.getElement(this); }
};

exports.ix_modal_example = ModalExample;

//# sourceMappingURL=ix-modal-example.cjs.entry.js.map