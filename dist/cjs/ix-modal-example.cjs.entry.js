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
        return (index.h(index.Host, { key: '85333f30e3940babe00480e30095861fa379f123' }, index.h("div", { key: '9805d492738ea84091a7bcf3f50192afc6e76344' }, index.h("div", { key: '5af465ed1d115c884c6f3c88119e4622f1ca18e5', class: "modal-header" }, "Message headline", index.h("ix-icon-button", { key: '08a1f2c1b74ff92701ec759d7820852116f2be39', "data-close-button": true, ghost: true, icon: 'close', onClick: () => this.dismiss() })), index.h("div", { key: '82d08e54b5bd9b6d61540b29ee4ceca1865dbad0', class: "modal-body" }, "Message text lorem ipsum"), index.h("div", { key: '0ea9fcb2af82f857e57ff0824bc8d57810d476b1', class: "modal-footer" }, index.h("ix-button", { key: '5848a921f72c98aa1357f9be22aaf59b5f0f731f', outline: true, onClick: () => this.dismiss() }, "Cancel"), index.h("ix-button", { key: 'c8c59ada2bb35d46add0b0c1333ec0c28ab6e83d', onClick: () => this.close() }, "OK")))));
    }
    get host() { return index.getElement(this); }
};

exports.ix_modal_example = ModalExample;

//# sourceMappingURL=ix-modal-example.cjs.entry.js.map