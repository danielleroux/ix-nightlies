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
        return (index.h(index.Host, { key: '96529a9ec926a30bf0ff5609a215a50df3a77b8d' }, index.h("ix-card", { key: '5bd737a3a82658bfb9a778dd6202ddecd0a754b2', variant: this.variant }, index.h("ix-card-content", { key: '829626941478481b805a287f5ae56541556e7207' }, index.h("ix-card-title", { key: '30e966156649d54adabce3883ed182fe9ff0e42b' }, this.icon ? (index.h("ix-icon", { class: 'icon', name: this.icon, size: "32" })) : null, index.h("span", { key: 'b09cc036a7b0b4aaf647cd432dfae8c6793ec91a', class: 'notification' }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), index.h("slot", { key: '9f85511858f444cdb6629515c428a5454fe94525', name: "title-action" })), index.h("ix-typography", { key: '425a782ad84de4af28876cd268a7162b983830a0', color: color, format: "h4" }, this.heading), index.h("ix-typography", { key: '4da2386c51ae909c824c16215ffdd4daa6524225', color: color }, this.subheading)), index.h("ix-card-accordion", { key: 'ac3701b2ab1caade4ca1ab810e1a47ac11c4e963', collapse: this.collapse }, index.h("slot", { key: '6ed725b03baaa16fbdc9ff42e8e8fd26be683013' })))));
    }
};
PushCard.style = IxPushCardStyle0;

exports.ix_push_card = PushCard;

//# sourceMappingURL=ix-push-card.cjs.entry.js.map