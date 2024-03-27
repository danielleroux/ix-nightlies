import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as TypedEvent } from './typed-event.js';
import { d as defineCustomElement$4 } from './icon-button.js';
import { d as defineCustomElement$3 } from './spinner.js';
import { d as defineCustomElement$2 } from './toast.js';

const toastContainerCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}#toast-container>:not(:last-child){margin-block-end:1rem}.toast-container{display:block;position:fixed}.toast-container--top-right{right:1rem;top:2rem}.toast-container--bottom-right{right:1rem;bottom:2rem}";
const IxToastContainerStyle0 = toastContainerCss;

const ToastContainer = /*@__PURE__*/ proxyCustomElement(class ToastContainer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.PREFIX_POSITION_CLASS = 'toast-container--';
        this.containerId = 'toast-container';
        this.containerClass = 'toast-container';
        this.position = 'bottom-right';
    }
    get hostContainer() {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                const containerElement = document.getElementById(this.containerId);
                if (containerElement) {
                    clearInterval(interval);
                    resolve(containerElement);
                }
            });
        });
    }
    componentDidLoad() {
        if (!document.getElementById(this.containerId)) {
            const toastContainer = document.createElement('div');
            toastContainer.id = this.containerId;
            toastContainer.classList.add(this.containerClass);
            toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${this.position}`);
            document.body.appendChild(toastContainer);
        }
    }
    onPositionChange(newPosition, oldPosition) {
        const toastContainer = document.getElementById(this.containerId);
        toastContainer.classList.remove(`${this.PREFIX_POSITION_CLASS}${oldPosition}`);
        toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${newPosition}`);
    }
    /**
     * Display a toast message
     * @param config
     */
    async showToast(config) {
        var _a, _b;
        const toast = document.createElement('ix-toast');
        const onClose = new TypedEvent();
        function removeToast(result) {
            toast.remove();
            onClose.emit(result);
        }
        toast.toastTitle = config.title;
        toast.type = config.type;
        toast.autoClose = (_a = config.autoClose) !== null && _a !== void 0 ? _a : true;
        toast.autoCloseDelay = (_b = config.autoCloseDelay) !== null && _b !== void 0 ? _b : 5000;
        toast.icon = config.icon;
        toast.iconColor = config.iconColor;
        toast.addEventListener('closeToast', (event) => {
            const { detail } = event;
            removeToast(detail);
        });
        if (typeof config.message === 'string') {
            toast.innerText = config.message;
        }
        else {
            toast.appendChild(config.message);
        }
        (await this.hostContainer).appendChild(toast);
        return {
            onClose,
            close: (result) => {
                removeToast(result);
            },
        };
    }
    render() {
        return (h(Host, { key: '889eef24751e252c90241c5398f94dcd1c875751', class: {
                'toast-container--bottom-right': this.position === 'bottom-right',
                'toast-container--top-right': this.position === 'top-right',
            } }));
    }
    static get watchers() { return {
        "position": ["onPositionChange"]
    }; }
    static get style() { return IxToastContainerStyle0; }
}, [1, "ix-toast-container", {
        "containerId": [1, "container-id"],
        "containerClass": [1, "container-class"],
        "position": [1],
        "showToast": [64]
    }, undefined, {
        "position": ["onPositionChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-toast-container", "ix-icon-button", "ix-spinner", "ix-toast"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-toast-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ToastContainer);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxToastContainer = ToastContainer;
const defineCustomElement = defineCustomElement$1;

export { IxToastContainer, defineCustomElement };

//# sourceMappingURL=ix-toast-container.js.map