import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createMutationObserver } from './mutation-observer.js';
import { a as convertToRemString } from './rwd.util.js';

const eventListCss = ":host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ul{list-style:none;padding:0;margin-top:0;margin-bottom:0}:host(.item-size-l){--event-list-item-height:6.5rem;--event-list-item-content-white-space:normal}:host(.compact){--event-list-item-border-radius:0;--event-list-item-margin-bottom:0}";
const IxEventListStyle0 = eventListCss;

const EventList = /*@__PURE__*/ proxyCustomElement(class EventList extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.mutationObserver = createMutationObserver(this.onMutation.bind(this));
        this.itemHeight = 'S';
        this.compact = false;
        this.animated = true;
        this.chevron = undefined;
    }
    watchChevron(chevron) {
        this.handleChevron(chevron);
    }
    componentDidLoad() {
        if (this.animated) {
            this.triggerFadeIn();
        }
        if (!Number.isNaN(Number(this.itemHeight))) {
            const height = convertToRemString(this.itemHeight);
            this.hostElement
                .querySelectorAll('ix-event-list-item')
                .forEach((item) => {
                this.setCustomHeight(item, height);
            });
        }
        this.handleChevron(this.chevron);
        this.mutationObserver.observe(this.hostElement, {
            childList: true,
            subtree: true,
        });
    }
    onMutation(mutationRecords) {
        this.triggerFadeOut().then(() => {
            if (typeof this.itemHeight === 'number') {
                const height = convertToRemString(this.itemHeight);
                mutationRecords
                    .filter((mutation) => mutation.type === 'childList')
                    .forEach((mutation) => mutation.addedNodes.forEach((item) => {
                    const itemHtml = item;
                    this.setCustomHeight(itemHtml, height);
                }));
            }
            this.handleChevron(this.chevron);
            this.triggerFadeIn();
        });
    }
    setCustomHeight(item, height) {
        item.style.setProperty('--event-list-item-height', height);
    }
    triggerFadeOut() {
        if (!this.animated) {
            return Promise.resolve();
        }
        const keyframes = [
            {
                opacity: 1,
                easing: 'ease-in',
            },
            { opacity: 0 },
        ];
        const listElement = this.hostElement.shadowRoot.querySelector('ul');
        return listElement.animate(keyframes, {
            duration: EventList.fadeOutDuration,
        }).finished;
    }
    triggerFadeIn() {
        if (!this.animated) {
            return;
        }
        const listItems = this.hostElement.querySelectorAll('ix-event-list-item');
        listItems.forEach((e, i) => {
            const delay = i * 80;
            const offset = delay / (delay + EventList.fadeInDuration);
            const keyframes = [
                { opacity: 0 },
                { opacity: 0, easing: 'ease-out', offset },
                { opacity: 1 },
            ];
            const options = {
                duration: EventList.fadeInDuration + delay,
                iterations: 1,
            };
            e.animate(keyframes, options);
        });
    }
    handleChevron(chevron) {
        const listItems = this.hostElement.querySelectorAll('ix-event-list-item');
        listItems.forEach((e) => {
            if (chevron) {
                e.setAttribute('chevron', 'true');
            }
            else if (chevron !== undefined) {
                e.removeAttribute('chevron');
            }
        });
    }
    render() {
        return (h(Host, { key: '89be0fbb595cea7d39e50feedb367108c2a206bb', class: {
                'item-size-s': this.itemHeight === 'S',
                'item-size-l': this.itemHeight === 'L',
                compact: this.compact,
            } }, h("ul", { key: '1e14d4602a221795448e7216c0952b29af06c522' }, h("slot", { key: '5c55793caf21fb2f76f7019b7813a75b9746b180' }))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "chevron": ["watchChevron"]
    }; }
    static get style() { return IxEventListStyle0; }
}, [1, "ix-event-list", {
        "itemHeight": [8, "item-height"],
        "compact": [4],
        "animated": [4],
        "chevron": [4]
    }, undefined, {
        "chevron": ["watchChevron"]
    }]);
EventList.fadeOutDuration = 50;
EventList.fadeInDuration = 150;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-event-list"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-event-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, EventList);
            }
            break;
    } });
}

const IxEventList = EventList;
const defineCustomElement = defineCustomElement$1;

export { IxEventList, defineCustomElement };

//# sourceMappingURL=ix-event-list.js.map