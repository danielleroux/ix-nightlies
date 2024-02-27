'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const anime_es = require('./anime.es-e2814360.js');

const drawerCss = ":host{top:0;right:0;box-shadow:var(--theme-box-shadow-level-3);visibility:hidden;display:flex;position:absolute;flex-flow:column nowrap;justify-content:flex-start;align-items:center;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;transition:all 300ms ease-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toggle{z-index:100;visibility:visible}:host .drawer-container.full-height{min-height:100%}:host .header{display:flex;position:relative;align-items:center;justify-content:flex-end;padding:0.5rem;width:100%;order:1}:host .header .header-content{flex-grow:1;margin-right:1rem}:host .content{position:relative;flex:1;flex-grow:1;order:2;height:100%;width:100%;overflow-y:auto}:host(.toggle){visibility:visible}";
const IxDrawerStyle0 = drawerCss;

const Drawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.open = index.createEvent(this, "open", 7);
        this.drawerClose = index.createEvent(this, "drawerClose", 7);
        this.callback = this.clickedOutside.bind(this);
        this.show = false;
        this.closeOnClickOutside = true;
        this.fullHeight = false;
        this.minWidth = 16;
        this.maxWidth = 28;
        this.width = this.minWidth;
    }
    onShowChanged(newValue) {
        this.show = newValue !== undefined ? newValue : !this.show;
        this.toggleDrawer(this.show);
    }
    /**
     * Toggle or define show state of drawer
     * @param show Overwrite toggle state with boolean
     */
    async toggleDrawer(show) {
        this.show = show !== undefined ? show : !this.show;
        if (show) {
            this.open.emit();
            this.slideInRight(this.divElement);
            setTimeout(() => {
                window.addEventListener('mousedown', this.callback);
            }, 300);
        }
        else {
            this.drawerClose.emit();
            this.slideOutRight(this.divElement);
            window.removeEventListener('mousedown', this.callback);
        }
        return Promise.resolve();
    }
    onCloseClicked() {
        this.show = false;
    }
    clickedOutside(evt) {
        if (!this.closeOnClickOutside) {
            return;
        }
        const target = evt.target;
        const closestElement = target.closest('#div-container');
        const btn = target.closest('#drawer-btn');
        if (evt.target.type !== 'button' &&
            closestElement !== this.divElement &&
            target !== btn) {
            this.show = false;
        }
    }
    slideOutRight(el) {
        anime_es.anime({
            targets: el,
            duration: Drawer.duration,
            translateX: [0, '16rem'],
            opacity: [1, 0],
            easing: 'easeInSine',
            complete: () => {
                el.classList.add('d-none');
            },
        });
    }
    slideInRight(el) {
        anime_es.anime({
            targets: el,
            duration: Drawer.duration,
            translateX: ['16rem', 0],
            opacity: [0, 1],
            easing: 'easeOutSine',
            begin: () => {
                el.classList.remove('d-none');
            },
        });
    }
    componentDidLoad() {
        this.onShowChanged(this.show);
    }
    render() {
        return (index.h(index.Host, { key: '91fc9415b70a8ee79f85dcf40fef3ccb9cbb20c9', class: {
                'drawer-container': true,
                toggle: this.show,
                'full-height': this.fullHeight,
                'd-none': true,
            }, style: {
                width: this.width === 'auto' ? this.width : `${this.width}rem`,
                'min-width': `${this.minWidth}rem`,
                'max-width': `${this.maxWidth}rem`,
            }, ref: (el) => (this.divElement = el), "data-testid": "container", id: "div-container" }, index.h("div", { key: 'b773ea537ab6410433b6af3f7d57f96070a8f462', class: "header" }, index.h("div", { key: 'd032e1d8af587f872f61aaae3630aa0b03a99993', class: "header-content" }, index.h("slot", { key: '8d1c3b9819ed60666dff64386bd87d60d880bb13', name: "header" })), index.h("ix-icon-button", { key: 'b73baa2dea5c23cab77fc05e9506faf0424135c6', class: "close-button", icon: 'close', size: "24", ghost: true, onClick: () => this.onCloseClicked(), "data-testid": "close-button" })), index.h("div", { key: '8b838c388ca39c900245896b5912ed769b63bae6', class: "content" }, index.h("slot", { key: '08ba8b51e00558a0063430d32d300e347b09a310' }))));
    }
    static get watchers() { return {
        "show": ["onShowChanged"]
    }; }
};
Drawer.duration = 300;
Drawer.style = IxDrawerStyle0;

exports.ix_drawer = Drawer;

//# sourceMappingURL=ix-drawer.cjs.entry.js.map