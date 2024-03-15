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
        return (h(Host, { key: 'f48c8fa439a5b38b06fbda02e4185aa4195dcba5', style: {
                height: `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                'min-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                'max-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
                width: `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
                'min-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
                'max-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
            } }, h("div", { key: 'fc676886cdf565c7cc121640b37c579eb1ea2f64', class: {
                'flip-tile-container': true,
                info: this.state === FlipTileState.Info,
                warning: this.state === FlipTileState.Warning,
                alarm: this.state === FlipTileState.Alarm,
                primary: this.state === FlipTileState.Primary,
                'flip-animation-active': this.isFlipAnimationActive,
            } }, h("div", { key: '036a5f9b336796232c649a0c1718601ccd5c46b5', class: "flip-tile-header" }, h("div", { key: '3eb347f451cf27f614f855eee99f8562fc4aa785', class: "header-slot-container text-l-title" }, h("slot", { key: '563785f622191f0692f3790f3a908125e30e7276', name: "header" })), h("ix-icon-button", { key: '9a52873d2890f187d3a2c940688bbd000e676233', icon: 'eye', variant: "primary", ghost: true, onClick: () => this.toggleIndex() })), h("div", { key: '0efc4537aa97d3b79459141678dc180a140bd658', class: "content-container" }, h("slot", { key: '1c7035e6e29731a2f192a37f1d86985c3c219220' })), h("div", { key: '2d1f20e35490d7f87b1d70cb9783268c5f1dc270', class: {
                footer: true,
                'contrast-light': this.state === FlipTileState.Warning,
                'contrast-dark': this.state === FlipTileState.Info ||
                    this.state === FlipTileState.Alarm,
            } }, h("slot", { key: '074e8bcae63f134dab5623df0682c754e3212159', name: "footer" })))));
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
