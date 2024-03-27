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
import { FlipTileState } from "./flip-tile-state";
export class FlipTile {
    constructor() {
        this.ANIMATION_DURATION = 150;
        this.state = undefined;
        this.height = 15.125;
        this.width = 16;
        this.index = 0;
        this.isFlipAnimationActive = undefined;
    }
    componentDidLoad() {
        this.observer = createMutationObserver(() => this.updateContentItems());
        this.observer.observe(this.hostElement, {
            childList: true,
        });
    }
    componentWillLoad() {
        this.updateContentItems();
        this.updateContentVisibility(this.index);
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    updateContentItems() {
        this.contentItems = Array.from(this.hostElement.querySelectorAll('ix-flip-tile-content'));
    }
    updateContentVisibility(indexVisible) {
        this.contentItems.forEach((content, index) => (content.contentVisible = index === indexVisible));
    }
    toggleIndex() {
        this.doFlipAnimation();
    }
    doFlipAnimation() {
        this.isFlipAnimationActive = true;
        setTimeout(() => {
            this.updateContentVisibility(this.index);
            if (this.index >= this.contentItems.length - 1) {
                this.index = 0;
            }
            else {
                this.index++;
            }
            this.updateContentVisibility(this.index);
        }, this.ANIMATION_DURATION);
        setTimeout(() => {
            this.isFlipAnimationActive = false;
        }, 2 * this.ANIMATION_DURATION);
    }
    render() {
        return (h(Host, { key: 'cc8aa4a3840420698c89cf7eba1fa39d438200b2', style: {
                height: `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                'min-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                'max-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                width: `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
                'min-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
                'max-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
            } }, h("div", { key: 'e0108d7724c6ccc8d066cbb699ee578ecc238a84', class: {
                'flip-tile-container': true,
                info: this.state === FlipTileState.Info,
                warning: this.state === FlipTileState.Warning,
                alarm: this.state === FlipTileState.Alarm,
                primary: this.state === FlipTileState.Primary,
                'flip-animation-active': this.isFlipAnimationActive,
            } }, h("div", { key: 'a25a48841949a984ddee4e02c6e59931eec20d6e', class: "flip-tile-header" }, h("div", { key: 'd6025ec293a8f0d19a4eee9034e127ca9da8e74d', class: "header-slot-container text-l-title" }, h("slot", { key: 'fcf90bb2847b1e186bbaa4fbcb457587b158cb95', name: "header" })), h("ix-icon-button", { key: 'a544785da60c6b9392fa1a17ea8ad55e5f8a7072', icon: 'eye', variant: "primary", ghost: true, onClick: () => this.toggleIndex() })), h("div", { key: '6d5482c2f01280797047bca2a11c48948e0bced8', class: "content-container" }, h("slot", { key: '0cf6acf8b3c736e986d68fd14a67788267c569cf' })), h("div", { key: '001e67e180dab7afa72b53eeffdfe0fd975e4511', class: {
                footer: true,
                'contrast-light': this.state === FlipTileState.Warning,
                'contrast-dark': this.state === FlipTileState.Info ||
                    this.state === FlipTileState.Alarm,
            } }, h("slot", { key: '51f72393d82adadad9a767fc0d620ef882a67d03', name: "footer" })))));
    }
    static get is() { return "ix-flip-tile"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["flip-tile.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["flip-tile.css"]
        };
    }
    static get properties() {
        return {
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FlipTileState",
                    "resolved": "FlipTileState.Alarm | FlipTileState.Info | FlipTileState.None | FlipTileState.Primary | FlipTileState.Warning",
                    "references": {
                        "FlipTileState": {
                            "location": "import",
                            "path": "./flip-tile-state",
                            "id": "src/components/flip-tile/flip-tile-state.ts::FlipTileState"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variation of the Flip"
                },
                "attribute": "state",
                "reflect": false
            },
            "height": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | 'auto'",
                    "resolved": "\"auto\" | number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.5.0"
                        }],
                    "text": "Height interpreted as REM"
                },
                "attribute": "height",
                "reflect": false,
                "defaultValue": "15.125"
            },
            "width": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | 'auto'",
                    "resolved": "\"auto\" | number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "since",
                            "text": "1.5.0"
                        }],
                    "text": "Width interpreted as REM"
                },
                "attribute": "width",
                "reflect": false,
                "defaultValue": "16"
            }
        };
    }
    static get states() {
        return {
            "index": {},
            "isFlipAnimationActive": {}
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=flip-tile.js.map
