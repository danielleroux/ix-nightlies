import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as anime } from './anime.es.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './spinner.js';

const messageBarCss = ":host{margin:0.5rem 0.5rem 0rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .message-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal}:host ix-icon{margin-top:0.25rem}";
const IxMessageBarStyle0 = messageBarCss;

const MessageBar = /*@__PURE__*/ proxyCustomElement(class MessageBar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.closedChange = createEvent(this, "closedChange", 7);
        this.type = 'info';
        this.dismissible = true;
        this.icon = undefined;
        this.color = undefined;
    }
    componentWillRender() {
        if (this.type === 'danger') {
            this.icon = 'error';
            this.color = 'color-alarm';
        }
        if (this.type === 'info') {
            this.icon = 'info';
            this.color = 'color-info';
        }
        if (this.type === 'warning') {
            this.icon = 'warning';
            this.color = 'color-warning';
        }
    }
    closeAlert(el) {
        anime({
            targets: el,
            duration: MessageBar.duration,
            opacity: [1, 0],
            easing: 'easeOutSine',
            complete: () => {
                el.classList.add('d-none');
            },
        });
        this.closedChange.emit();
    }
    render() {
        return (h(Host, { key: 'ca73e69d0c8addab542f0099cc542614c74b62ae' }, h("div", { key: '350e657cb03ffbbced7d3f99da0b0b6dd929958d', class: { 'message-container': true, [this.type]: true }, role: "alert", ref: (el) => (this.divElement = el) }, h("ix-icon", { key: '6b178d58d5c20d4b705b24ac500e796f523ef476', color: this.color, name: this.icon }), h("div", { key: 'b9b6fe4ed918cfbdbf054e327d3959872b8c4f4d', class: "message-content" }, h("slot", { key: 'eb9c046232706c29995f7a3050e96008780a3de0' })), this.dismissible ? (h("ix-icon-button", { icon: 'close', size: "24", ghost: true, onClick: () => {
                this.closeAlert(this.divElement);
            }, "data-testid": "close-btn" })) : (''))));
    }
    static get style() { return IxMessageBarStyle0; }
}, [1, "ix-message-bar", {
        "type": [1],
        "dismissible": [4],
        "icon": [32],
        "color": [32]
    }]);
MessageBar.duration = 300;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-message-bar", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-message-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MessageBar);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxMessageBar = MessageBar;
const defineCustomElement = defineCustomElement$1;

export { IxMessageBar, defineCustomElement };

//# sourceMappingURL=ix-message-bar.js.map