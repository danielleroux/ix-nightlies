import { r as registerInstance, c as createEvent, h, H as Host } from './index-5cd176b3.js';
import { a as anime } from './anime.es-a5520566.js';

const messageBarCss = ":host{margin:0.5rem 0.5rem 0rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .message-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal}:host ix-icon{margin-top:0.25rem}";
const IxMessageBarStyle0 = messageBarCss;

const MessageBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '5cc13238fef0bf93a4f91f40123472a30ec2fe2d' }, h("div", { key: 'cd868ebcf84cc4966bd994955ced1e57044369bd', class: { 'message-container': true, [this.type]: true }, role: "alert", ref: (el) => (this.divElement = el) }, h("ix-icon", { key: 'daaa40da03fd93443bda977a939520160dc0a5dd', color: this.color, name: this.icon }), h("div", { key: '6fdcec14e3734f904ceb35588147fd8c9d9f14eb', class: "message-content" }, h("slot", { key: 'aceac73042a70e8ddf386a8ddb4afb9d1a012639' })), this.dismissible ? (h("ix-icon-button", { icon: 'close', size: "24", ghost: true, onClick: () => {
                this.closeAlert(this.divElement);
            }, "data-testid": "close-btn" })) : (''))));
    }
};
MessageBar.duration = 300;
MessageBar.style = IxMessageBarStyle0;

export { MessageBar as ix_message_bar };

//# sourceMappingURL=ix-message-bar.entry.js.map