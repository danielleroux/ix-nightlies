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
        return (h(Host, { key: 'ce09b1e9ed6bed31afff8feb5331bae2fd9c4206', style: {
                height: `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                'min-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                'max-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                width: `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
                'min-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
                'max-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
            } }, h("div", { key: '7b05701a4d284b7bf5df7506d05740ceeeee7721', class: {
                'flip-tile-container': true,
                info: this.state === FlipTileState.Info,
                warning: this.state === FlipTileState.Warning,
                alarm: this.state === FlipTileState.Alarm,
                primary: this.state === FlipTileState.Primary,
                'flip-animation-active': this.isFlipAnimationActive,
            } }, h("div", { key: 'ce614d5f1fc065d74b6918cfa3f4f3299700ac4b', class: "flip-tile-header" }, h("div", { key: '0c21600adb7f402fe9930813148f924e87143bfe', class: "header-slot-container text-l-title" }, h("slot", { key: '7eca17dff980859c83891d7f2b90192e21dc25ec', name: "header" })), h("ix-icon-button", { key: '8940db181c5db54ccba409fd42d57f08a7dd665b', icon: 'eye', variant: "primary", ghost: true, onClick: () => this.toggleIndex() })), h("div", { key: 'c449e4aabde02243da7b5ab6b68ebd128708b929', class: "content-container" }, h("slot", { key: '7931ffd8b5428c865f5da4481d6641addd11928d' })), h("div", { key: '71061185c12c66f664b05775cf1c204bbfd273dc', class: {
                footer: true,
                'contrast-light': this.state === FlipTileState.Warning,
                'contrast-dark': this.state === FlipTileState.Info ||
                    this.state === FlipTileState.Alarm,
            } }, h("slot", { key: 'b4ce29eae8a575c65a0d4fbb323f52ef6edff62d', name: "footer" })))));
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
