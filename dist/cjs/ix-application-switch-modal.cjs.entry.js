'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
require('./animation-99234008.js');
const modal = require('./modal-828cb80a.js');
require('./typed-event-8032c0c0.js');

const applicationSwitchModalCss = ":host{display:block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{padding:2rem;padding-right:0}:host .content-apps{display:flex;position:relative;flex-wrap:wrap;justify-content:space-evenly;max-height:50vh;margin-right:0.25rem;gap:1.5rem}:host .loading{display:flex;flex-direction:row;align-items:center}:host .loading ix-spinner{margin-right:1rem}:host .AppEntry{all:unset;display:flex;flex-direction:row;align-items:center;gap:1rem;padding:0.5rem;flex:1 1 45%;cursor:pointer;border:0.0625rem solid transparent}:host .AppEntry.Selected{background-color:var(--theme-color-ghost--selected);border:var(--theme-dynamic-bdr-1)}:host .AppEntry:not(.disabled):not(:disabled).hover,:host .AppEntry:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .AppEntry:not(.disabled):not(:disabled).active,:host .AppEntry:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .AppEntry:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host .AppName{display:flex;flex-direction:column}:host .AppName ix-icon{margin-left:1rem}:host .AppIcon{width:3rem;height:3rem}";
const IxApplicationSwitchModalStyle0 = applicationSwitchModalCss;

function ApplicationItem(props) {
    function isExternal(target) {
        if (target !== '_blank' &&
            target !== '_parent' &&
            target !== '_self' &&
            target !== '_top') {
            // Check if its one of the target keywords
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a?retiredLocale=de#target
            return true;
        }
        if (target === '_blank') {
            return true;
        }
        return false;
    }
    return (index.h("button", { class: {
            AppEntry: true,
            Selected: props.selected,
        }, onClick: () => {
            modal.dismissModal(props.host);
            window.open(props.url, props.target);
        } }, index.h("div", null, index.h("img", { class: "AppIcon", src: props.iconSrc })), index.h("div", { class: "AppName" }, index.h("ix-typography", { format: "h4" }, props.name, isExternal(props.target) && (index.h("ix-icon", { size: "12", name: "open-external", color: "color-soft-text" }))), index.h("ix-typography", { format: "label-sm", color: "soft" }, props.description))));
}
const ApplicationSwitchModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.config = undefined;
    }
    componentWillLoad() {
        if (!this.config) {
            throw Error('ApplicationConfig not provided');
        }
    }
    render() {
        var _a, _b, _c, _d;
        return (index.h(index.Host, { key: 'df1550915fff21de5c0a40acdf24a096a5105d2b' }, index.h("ix-modal-header", { key: '217d8f2bb79e07c411db00b633648beeb72149f0', icon: "apps" }, ((_a = this.config) === null || _a === void 0 ? void 0 : _a.i18nAppSwitch) || 'Switch to application'), index.h("ix-modal-content", { key: '0f1001891265ff7d9cd5826ba91479cf8a487ef6', class: "content" }, index.h("div", { key: '47d718ff45970bd5bba3641f8785899df9e26e50', class: "content-apps" }, (!this.config || ((_b = this.config) === null || _b === void 0 ? void 0 : _b.apps.length) === 0) && (index.h("div", { class: "loading" }, index.h("ix-spinner", { size: "medium", variant: "primary" }), index.h("span", null, ((_c = this.config) === null || _c === void 0 ? void 0 : _c.i18nLoadingApps) ||
            'Loading available applications...'))), (_d = this.config) === null || _d === void 0 ? void 0 :
            _d.apps.map((appEntry) => {
                var _a;
                return (index.h(ApplicationItem, { host: this.hostElement, name: appEntry.name, description: appEntry.description, iconSrc: appEntry.iconSrc, target: appEntry.target, url: appEntry.url, selected: appEntry.id === ((_a = this.config) === null || _a === void 0 ? void 0 : _a.currentAppId) }));
            })))));
    }
    get hostElement() { return index.getElement(this); }
};
ApplicationSwitchModal.style = IxApplicationSwitchModalStyle0;

exports.ix_application_switch_modal = ApplicationSwitchModal;

//# sourceMappingURL=ix-application-switch-modal.cjs.entry.js.map