'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const toastCss = ":host{display:flex;flex-direction:column;position:relative;min-width:17.5rem;max-width:17.5rem;min-height:3.5rem;pointer-events:all;background-color:var(--theme-toast--background);border:var(--theme-toast--border-thickness) solid var(--theme-toast--border-color);border-radius:var(--theme-toast--border-radius);box-shadow:var(--theme-toast--box-shadow);--animate-duration:300ms}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:3.5rem;width:100%;flex-grow:1;padding:0.75rem}:host .toast-body .toast-icon{display:flex;align-items:flex-start;margin-right:1rem}:host .toast-body .toast-content{overflow:hidden;text-overflow:ellipsis;min-width:0;width:100%}:host .toast-body .toast-content .toast-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);margin:0.25rem 0px}:host .toast-body .toast-content .toast-message{min-width:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}:host .toast-body .toast-icon+.toast-content{max-width:10.25rem}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px}:host .toast-progress-bar{position:absolute;bottom:0;height:0.25rem;width:100%;background-color:var(--theme-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}";
const IxToastStyle0 = toastCss;

const Toast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeToast = index.createEvent(this, "closeToast", 7);
        this.type = 'info';
        this.toastTitle = undefined;
        this.autoCloseDelay = 5000;
        this.autoClose = true;
        this.icon = undefined;
        this.iconColor = undefined;
        this.progress = 0;
        this.touched = false;
    }
    getIcon() {
        if (this.icon) {
            return index.h("ix-icon", { name: this.icon, color: this.iconColor, size: "24" });
        }
        switch (this.type) {
            case 'info':
                return index.h("ix-icon", { name: 'info', size: "24", color: "color-std-text" });
            case 'error':
                return index.h("ix-icon", { name: 'error', size: "24", color: "color-alarm" });
            case 'success':
                return index.h("ix-icon", { name: 'success', size: "24", color: "color-success" });
            case 'warning':
                return index.h("ix-icon", { name: 'warning', size: "24", color: "color-warning" });
            default:
                return '';
        }
    }
    close() {
        if (this.hostElement) {
            this.hostElement.classList.add('animate__fadeOut');
        }
        setTimeout(() => {
            this.closeToast.emit();
        }, 250);
    }
    render() {
        let progressBarStyle = {};
        const progressBarClass = ['toast-progress-bar'];
        progressBarStyle = {
            animationDuration: `${this.autoCloseDelay}ms`,
            animationPlayState: this.touched ? 'paused' : 'running',
        };
        progressBarClass.push('toast-progress-bar--animated');
        return (index.h(index.Host, { key: 'fc536c407da22e873ddd6b0c57ff1a33f031fff3', class: "animate__animated animate__fadeIn" }, index.h("div", { key: '364d9a603523b34526abbf60b79fc28b4861f551', class: "toast-body", onPointerLeave: () => {
                this.touched = false;
            }, onPointerEnter: () => {
                this.touched = true;
            } }, this.type || this.icon ? (index.h("div", { class: "toast-icon" }, this.getIcon())) : null, index.h("div", { key: 'a428a1d86aade38d43d14c7a6045ec0132346f1d', class: "toast-content" }, this.toastTitle ? (index.h("div", { class: "toast-title" }, this.toastTitle)) : null, index.h("div", { key: 'ba2928faa70dc5deb313f5e5bda49c7413be0c1d', class: "toast-message" }, index.h("slot", { key: '5af45c142c3812239d9874448b584bd8364b50ec' }))), index.h("div", { key: 'cf9b6eb78786400f372c473cd3e6e6d168dd07c3', class: "toast-close" }, index.h("ix-icon-button", { key: '7adbc3c276e209a906f1e1a224cba994fbaacbad', icon: 'close', size: "24", ghost: true, onClick: () => this.closeToast.emit() }))), this.autoClose ? (index.h("div", { class: progressBarClass.join(' '), style: progressBarStyle, onAnimationEnd: () => {
                this.close();
            }, onTransitionEnd: () => {
                if (this.progress === 0) {
                    this.close();
                }
            } })) : null));
    }
    get hostElement() { return index.getElement(this); }
};
Toast.style = IxToastStyle0;

exports.ix_toast = Toast;

//# sourceMappingURL=ix-toast.cjs.entry.js.map