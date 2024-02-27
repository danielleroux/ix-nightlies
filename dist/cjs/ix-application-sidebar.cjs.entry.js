'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const anime_es = require('./anime.es-e2814360.js');
const animation = require('./animation-99234008.js');

const applicationSidebarCss = ":host{display:block;position:relative;width:22rem;height:100%;padding:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.visible){border-right:2px solid var(--theme-color-soft-bdr);padding:1.5rem 0.5rem 0}";
const IxApplicationSidebarStyle0 = applicationSidebarCss;

const ApplicationSidebar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.visible = true;
    }
    listenToggleEvent() {
        const visibility = !this.visible;
        const animation$1 = {
            targets: this.hostElement,
            width: visibility ? ['0', '22rem'] : ['22rem', '0'],
            opacity: visibility ? [0, 1] : [1, 0],
            easing: 'easeInSine',
            duration: animation.Animation.defaultTime,
        };
        const changeVisibility = () => {
            this.visible = visibility;
        };
        if (visibility) {
            animation$1.begin = changeVisibility.bind(this);
        }
        else {
            animation$1.complete = changeVisibility.bind(this);
        }
        anime_es.anime(animation$1);
    }
    render() {
        return (index.h(index.Host, { key: '3c17bcc10e4e795c42d0627dc6e8158b2a651b54', slot: "application-sidebar", class: {
                visible: this.visible,
            } }, this.visible ? index.h("slot", null) : null));
    }
    get hostElement() { return index.getElement(this); }
};
ApplicationSidebar.style = IxApplicationSidebarStyle0;

exports.ix_application_sidebar = ApplicationSidebar;

//# sourceMappingURL=ix-application-sidebar.cjs.entry.js.map