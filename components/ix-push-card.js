import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './card.js';
import { d as defineCustomElement$5 } from './card-accordion.js';
import { d as defineCustomElement$4 } from './card-content.js';
import { d as defineCustomElement$3 } from './card-title.js';
import { d as defineCustomElement$2 } from './typography.js';

const pushCardCss = ":host{display:block;position:relative}:host .icon{transform:scale(1.25)}:host .notification{font-size:40px}:host ix-card-content{height:11rem}";
const IxPushCardStyle0 = pushCardCss;

const PushCard = /*@__PURE__*/ proxyCustomElement(class PushCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: '96529a9ec926a30bf0ff5609a215a50df3a77b8d' }, h("ix-card", { key: '5bd737a3a82658bfb9a778dd6202ddecd0a754b2', variant: this.variant }, h("ix-card-content", { key: '829626941478481b805a287f5ae56541556e7207' }, h("ix-card-title", { key: '30e966156649d54adabce3883ed182fe9ff0e42b' }, this.icon ? (h("ix-icon", { class: 'icon', name: this.icon, size: "32" })) : null, h("span", { key: 'b09cc036a7b0b4aaf647cd432dfae8c6793ec91a', class: 'notification' }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: '9f85511858f444cdb6629515c428a5454fe94525', name: "title-action" })), h("ix-typography", { key: '425a782ad84de4af28876cd268a7162b983830a0', color: color, format: "h4" }, this.heading), h("ix-typography", { key: '4da2386c51ae909c824c16215ffdd4daa6524225', color: color }, this.subheading)), h("ix-card-accordion", { key: 'ac3701b2ab1caade4ca1ab810e1a47ac11c4e963', collapse: this.collapse }, h("slot", { key: '6ed725b03baaa16fbdc9ff42e8e8fd26be683013' })))));
    }
    static get style() { return IxPushCardStyle0; }
}, [1, "ix-push-card", {
        "icon": [1],
        "notification": [1],
        "heading": [1],
        "subheading": [1],
        "variant": [1],
        "collapse": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-push-card", "ix-card", "ix-card-accordion", "ix-card-content", "ix-card-title", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-push-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PushCard);
            }
            break;
        case "ix-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ix-card-accordion":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-card-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-card-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxPushCard = PushCard;
const defineCustomElement = defineCustomElement$1;

export { IxPushCard, defineCustomElement };

//# sourceMappingURL=ix-push-card.js.map