/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import anime from "animejs";
import Animation from "../utils/animation";
/** @internal */
export class ApplicationSidebar {
    constructor() {
        this.visible = true;
    }
    listenToggleEvent() {
        const visibility = !this.visible;
        const animation = {
            targets: this.hostElement,
            width: visibility ? ['0', '22rem'] : ['22rem', '0'],
            opacity: visibility ? [0, 1] : [1, 0],
            easing: 'easeInSine',
            duration: Animation.defaultTime,
        };
        const changeVisibility = () => {
            this.visible = visibility;
        };
        if (visibility) {
            animation.begin = changeVisibility.bind(this);
        }
        else {
            animation.complete = changeVisibility.bind(this);
        }
        anime(animation);
    }
    render() {
        return (h(Host, { key: '3c17bcc10e4e795c42d0627dc6e8158b2a651b54', slot: "application-sidebar", class: {
                visible: this.visible,
            } }, this.visible ? h("slot", null) : null));
    }
    static get is() { return "ix-application-sidebar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["application-sidebar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["application-sidebar.css"]
        };
    }
    static get states() {
        return {
            "visible": {}
        };
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "application-sidebar-toggle",
                "method": "listenToggleEvent",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=application-sidebar.js.map
