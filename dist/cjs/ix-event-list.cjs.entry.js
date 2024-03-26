'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');
const mutationObserver = require('./mutation-observer-babb20a5.js');
const rwd_util = require('./rwd.util-ee53cbd1.js');

const eventListCss = ":host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ul{list-style:none;padding:0;margin-top:0;margin-bottom:0}:host(.item-size-l){--event-list-item-height:6.5rem;--event-list-item-content-white-space:normal}:host(.compact){--event-list-item-border-radius:0;--event-list-item-margin-bottom:0}";
const IxEventListStyle0 = eventListCss;

const EventList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.mutationObserver = mutationObserver.createMutationObserver(this.onMutation.bind(this));
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
            const height = rwd_util.convertToRemString(this.itemHeight);
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
                const height = rwd_util.convertToRemString(this.itemHeight);
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
        return (index.h(index.Host, { key: '36041c28cb17cd7fab8d1e852108ce622246f452', class: {
                'item-size-s': this.itemHeight === 'S',
                'item-size-l': this.itemHeight === 'L',
                compact: this.compact,
            } }, index.h("ul", { key: 'e0ba67a1ac883e29b4c526c855185b9fdde07e88' }, index.h("slot", { key: '69386323a68e089c805c36cb001c25dba2996e4b' }))));
    }
    get hostElement() { return index.getElement(this); }
    static get watchers() { return {
        "chevron": ["watchChevron"]
    }; }
};
EventList.fadeOutDuration = 50;
EventList.fadeInDuration = 150;
EventList.style = IxEventListStyle0;

exports.ix_event_list = EventList;

//# sourceMappingURL=ix-event-list.cjs.entry.js.map