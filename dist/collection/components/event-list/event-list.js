/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { createMutationObserver } from "../utils/mutation-observer";
import { convertToRemString } from "../utils/rwd.util";
export class EventList {
    constructor() {
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
        return (h(Host, { key: '6bc5d62a320af1a618b976d7a745dd1da08d5e0b', class: {
                'item-size-s': this.itemHeight === 'S',
                'item-size-l': this.itemHeight === 'L',
                compact: this.compact,
            } }, h("ul", { key: 'ae28f0ca948651a677b6eff296043d9fe68f84f6' }, h("slot", { key: '3e5aaa7d87e8c72a2e83a8b086060ec86ab4fa30' }))));
    }
    static get is() { return "ix-event-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["event-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["event-list.css"]
        };
    }
    static get properties() {
        return {
            "itemHeight": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "'S' | 'L' | number",
                    "resolved": "\"L\" | \"S\" | number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determines the height of list items.\nThis can either be one of two predefined sizes ('S' or 'L') or an absolute pixel value.\nIn case a number is supplied it will get converted to rem internally.\nDefaults to 'S'."
                },
                "attribute": "item-height",
                "reflect": false,
                "defaultValue": "'S'"
            },
            "compact": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Make event-list items more compact"
                },
                "attribute": "compact",
                "reflect": false,
                "defaultValue": "false"
            },
            "animated": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Animate state change transitions. Defaults to 'true'."
                },
                "attribute": "animated",
                "reflect": false,
                "defaultValue": "true"
            },
            "chevron": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Display a chevron icon in list items. Defaults to 'false'"
                },
                "attribute": "chevron",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "chevron",
                "methodName": "watchChevron"
            }];
    }
}
EventList.fadeOutDuration = 50;
EventList.fadeInDuration = 150;
//# sourceMappingURL=event-list.js.map
