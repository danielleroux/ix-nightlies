'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const pushCardCss = ":host{display:block;position:relative}:host .icon{transform:scale(1.25)}:host .notification{font-size:40px}:host ix-card-content{height:11rem}";
const IxPushCardStyle0 = pushCardCss;

const PushCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.icon = undefined;
        this.notification = undefined;
        this.heading = undefined;
        this.subheading = undefined;
        this.variant = 'insight';
        this.collapse = true;
    }
    render() {
        var _a;
        const color = this.variant === 'insight' || this.variant === 'notification'
            ? 'std'
            : undefined;
        return (index.h(index.Host, { key: 'e24565973d07f9e229c36913ca3ac89a50fa203a' }, index.h("ix-card", { key: '44282cb66fe975ec987c732564b1a1b2f157fb5b', variant: this.variant }, index.h("ix-card-content", { key: 'a81102518c997300dd706eaaf9be2c409dc2cb57' }, index.h("ix-card-title", { key: 'cfe94c332de47b3457f713e601d5528da88eb9d6' }, this.icon ? (index.h("ix-icon", { class: 'icon', name: this.icon, size: "32" })) : null, index.h("span", { key: '70ae6659d04f30ba68a58f8cdf0fde3f33c3de01', class: 'notification' }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), index.h("slot", { key: 'b16c8760f377f9f5118cf2d6b09f0ed831c4d7bd', name: "title-action" })), index.h("ix-typography", { key: '861cc81ab636b168fbd6f931095d5128a2a4732b', color: color, format: "h4" }, this.heading), index.h("ix-typography", { key: '310464f9afd7994ccc5c51a8154387e59205b2bb', color: color }, this.subheading)), index.h("ix-card-accordion", { key: 'e070cee2f6ded1b56b92d3fc1ed5028cfe2d0d5d', collapse: this.collapse }, index.h("slot", { key: 'd8b198392bd09b45d2f0c6f6579e333c5f4d96e0' })))));
    }
};
PushCard.style = IxPushCardStyle0;

exports.ix_push_card = PushCard;

//# sourceMappingURL=ix-push-card.cjs.entry.js.map