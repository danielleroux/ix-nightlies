'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');
const anime_es = require('./anime.es-e2814360.js');

const messageBarCss = ":host{margin:0.5rem 0.5rem 0rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .message-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal}:host ix-icon{margin-top:0.25rem}";
const IxMessageBarStyle0 = messageBarCss;

const MessageBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closedChange = index.createEvent(this, "closedChange", 7);
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
        anime_es.anime({
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
        return (index.h(index.Host, { key: '610b30afda9530351f18514757fa02bb463f14fd' }, index.h("div", { key: 'f087c80eabe66fdc962c565fe3dd0130d5e80189', class: { 'message-container': true, [this.type]: true }, role: "alert", ref: (el) => (this.divElement = el) }, index.h("ix-icon", { key: '875022604fb5bb38cac7d8e46ca718e45ef9f686', color: this.color, name: this.icon }), index.h("div", { key: 'bca551cd194acac092778d7c3f86f46f6e6178ea', class: "message-content" }, index.h("slot", { key: '18051ca8aa62cb9fa4a4ca5e84fa8f06510f323d' })), this.dismissible ? (index.h("ix-icon-button", { icon: 'close', size: "24", ghost: true, onClick: () => {
                this.closeAlert(this.divElement);
            }, "data-testid": "close-btn" })) : (''))));
    }
};
MessageBar.duration = 300;
MessageBar.style = IxMessageBarStyle0;

exports.ix_message_bar = MessageBar;

//# sourceMappingURL=ix-message-bar.cjs.entry.js.map