/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { autoUpdate, computePosition, flip, inline, offset, shift, } from "@floating-ui/dom";
import { h, Host, } from "@stencil/core";
import { addDisposableEventListener, dropdownController, hasDropdownItemWrapperImplemented, } from "./dropdown-controller";
let sequenceId = 0;
export class Dropdown {
    constructor() {
        this.autoUpdateCleanup = null;
        this.localUId = `dropdown-${sequenceId++}`;
        this.assignedSubmenu = [];
        this.suppressAutomaticPlacement = false;
        this.show = false;
        this.trigger = undefined;
        this.anchor = undefined;
        this.closeBehavior = 'both';
        this.placement = 'bottom-start';
        this.positioningStrategy = 'fixed';
        this.header = undefined;
        this.offset = undefined;
        this.overwriteDropdownStyle = undefined;
        this.discoverAllSubmenus = false;
    }
    connectedCallback() {
        dropdownController.connected(this);
    }
    cacheSubmenuId(event) {
        event.stopImmediatePropagation();
        event.preventDefault();
        const { detail } = event;
        if (this.assignedSubmenu.indexOf(detail) === -1) {
            this.assignedSubmenu.push(detail);
        }
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeListener) === null || _a === void 0 ? void 0 : _a.call(this);
        dropdownController.disconnected(this);
        if (this.autoUpdateCleanup) {
            this.autoUpdateCleanup();
        }
    }
    getAssignedSubmenuIds() {
        return this.assignedSubmenu;
    }
    isPresent() {
        return this.show;
    }
    present() {
        this.show = true;
    }
    dismiss() {
        this.show = false;
    }
    getId() {
        return this.localUId;
    }
    willDismiss() {
        const { defaultPrevented } = this.showChanged.emit(false);
        return !defaultPrevented;
    }
    willPresent() {
        const { defaultPrevented } = this.showChanged.emit(true);
        return !defaultPrevented;
    }
    get dropdownItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-dropdown-item'));
    }
    get slotElement() {
        return this.hostElement.shadowRoot.querySelector('slot');
    }
    addEventListenersFor() {
        var _a, _b;
        (_a = this.disposeListener) === null || _a === void 0 ? void 0 : _a.call(this);
        const toggleController = () => {
            if (!this.isPresent()) {
                dropdownController.present(this);
            }
            else {
                dropdownController.dismiss(this);
            }
            dropdownController.dismissOthers(this.getId());
        };
        this.disposeListener = addDisposableEventListener(this.triggerElement, 'click', (event) => {
            if (!event.defaultPrevented) {
                toggleController();
            }
        });
        (_b = this.triggerElement) === null || _b === void 0 ? void 0 : _b.setAttribute('data-ix-dropdown-trigger', this.localUId);
    }
    /** @internal */
    async discoverSubmenu() {
        var _a;
        (_a = this.triggerElement) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent('ix-assign-sub-menu', {
            bubbles: true,
            composed: false,
            cancelable: true,
            detail: this.localUId,
        }));
    }
    async registerListener(element) {
        this.triggerElement = await this.resolveElement(element);
        if (this.triggerElement) {
            this.addEventListenersFor();
            this.discoverSubmenu();
        }
    }
    async resolveElement(element) {
        const el = await this.findElement(element);
        return this.checkForSubmenuAnchor(el);
    }
    async checkForSubmenuAnchor(element) {
        if (hasDropdownItemWrapperImplemented(element)) {
            const dropdownItem = await element.getDropdownItemElement();
            dropdownItem.isSubMenu = true;
            this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;
        }
        if (element.tagName === 'IX-DROPDOWN-ITEM') {
            element.isSubMenu = true;
            this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;
        }
        return element;
    }
    findElement(element) {
        if (element instanceof Promise) {
            return element;
        }
        if (typeof element === 'object') {
            return Promise.resolve(element);
        }
        const selector = `#${element}`;
        return new Promise((resolve) => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
            const observer = new MutationObserver(() => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }
    async changedShow(newShow) {
        if (newShow) {
            this.anchorElement = await (this.anchor
                ? this.resolveElement(this.anchor)
                : this.resolveElement(this.trigger));
            if (this.anchorElement) {
                this.applyDropdownPosition();
                // await this.checkForSubmenuAnchor();
            }
        }
    }
    changedTrigger(newTriggerValue) {
        this.registerListener(newTriggerValue);
    }
    isAnchorSubmenu() {
        var _a;
        if (!hasDropdownItemWrapperImplemented(this.anchorElement)) {
            // Is no official dropdown-item, but check if any dropdown-item
            // is placed somewhere up the DOM
            return !!((_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.closest('ix-dropdown-item'));
        }
        return true;
    }
    async applyDropdownPosition() {
        if (!this.anchorElement) {
            return;
        }
        if (!this.dropdownRef) {
            return;
        }
        const isSubmenu = this.isAnchorSubmenu();
        let positionConfig = {
            strategy: this.positioningStrategy,
            middleware: [],
        };
        if (!this.suppressAutomaticPlacement) {
            positionConfig.middleware.push(flip({ fallbackStrategy: 'initialPlacement' }));
        }
        positionConfig.placement = isSubmenu ? 'right-start' : this.placement;
        positionConfig.middleware = [
            ...positionConfig.middleware,
            inline(),
            shift(),
        ];
        if (this.offset) {
            positionConfig.middleware.push(offset(this.offset));
        }
        if (this.autoUpdateCleanup) {
            this.autoUpdateCleanup();
            this.autoUpdateCleanup = null;
        }
        this.autoUpdateCleanup = autoUpdate(this.anchorElement, this.dropdownRef, async () => {
            const computeResponse = await computePosition(this.anchorElement, this.dropdownRef, positionConfig);
            Object.assign(this.dropdownRef.style, {
                top: '0',
                left: '0',
                transform: `translate(${Math.round(computeResponse.x)}px,${Math.round(computeResponse.y)}px)`,
            });
            if (this.overwriteDropdownStyle) {
                const overwriteStyle = await this.overwriteDropdownStyle({
                    dropdownRef: this.dropdownRef,
                    triggerRef: this.triggerElement,
                });
                Object.assign(this.dropdownRef.style, overwriteStyle);
            }
        }, {
            ancestorResize: true,
            ancestorScroll: true,
            elementResize: true,
        });
    }
    async componentDidLoad() {
        this.changedTrigger(this.trigger);
    }
    async componentDidRender() {
        await this.applyDropdownPosition();
        this.anchorElement = await (this.anchor
            ? this.resolveElement(this.anchor)
            : this.resolveElement(this.trigger));
    }
    isTriggerElement(element) {
        const trigger = !!element.hasAttribute('data-ix-dropdown-trigger');
        return trigger;
    }
    onDropdownClick(event) {
        if (dropdownController.pathIncludesTrigger(event.composedPath())) {
            event.preventDefault();
            if (this.isTriggerElement(event.target)) {
                return;
            }
        }
        if (this.closeBehavior === 'inside' || this.closeBehavior === 'both') {
            dropdownController.dismissAll([this.getId()]);
        }
        dropdownController.dismissOthers(this.getId());
    }
    /**
     * Update position of dropdown
     */
    async updatePosition() {
        this.applyDropdownPosition();
    }
    render() {
        return (h(Host, { key: '01a39d73f0427606652393f7344e740bd9ee4a98', "data-ix-dropdown": this.localUId, ref: (ref) => (this.dropdownRef = ref), class: {
                'dropdown-menu': true,
                show: this.show,
                overflow: true,
            }, style: {
                margin: '0',
                minWidth: '0px',
                position: this.positioningStrategy,
            }, role: "list", onClick: (event) => this.onDropdownClick(event) }, h("div", { key: 'd87f8961f4319f6748685479ccaed5b450868b57', style: { display: 'contents' } }, this.header && h("div", { class: "dropdown-header" }, this.header), h("slot", { key: '274f8d9f89f4b4d92d5d32a32fbbc485964d0e3b' }))));
    }
    static get is() { return "ix-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dropdown.css"]
        };
    }
    static get properties() {
        return {
            "suppressAutomaticPlacement": {
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
                    "tags": [{
                            "name": "since",
                            "text": "2.0.0"
                        }],
                    "text": "Suppress the automatic placement of the dropdown."
                },
                "attribute": "suppress-automatic-placement",
                "reflect": false,
                "defaultValue": "false"
            },
            "show": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show dropdown"
                },
                "attribute": "show",
                "reflect": true,
                "defaultValue": "false"
            },
            "trigger": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | HTMLElement | Promise<HTMLElement>",
                    "resolved": "HTMLElement | Promise<HTMLElement> | string",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        },
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define an element that triggers the dropdown.\nA trigger can either be a string that will be interpreted as id attribute or a DOM element."
                },
                "attribute": "trigger",
                "reflect": false
            },
            "anchor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | HTMLElement",
                    "resolved": "HTMLElement | string",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define an anchor element"
                },
                "attribute": "anchor",
                "reflect": false
            },
            "closeBehavior": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "CloseBehavior",
                    "resolved": "\"both\" | \"inside\" | \"outside\" | boolean",
                    "references": {
                        "CloseBehavior": {
                            "location": "import",
                            "path": "./dropdown-controller",
                            "id": "src/components/dropdown/dropdown-controller.ts::CloseBehavior"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.\nIf the dropdown is a child of another one, it will be closed with the parent, regardless of its own close behavior."
                },
                "attribute": "close-behavior",
                "reflect": false,
                "defaultValue": "'both'"
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AlignedPlacement",
                    "resolved": "\"bottom-end\" | \"bottom-start\" | \"left-end\" | \"left-start\" | \"right-end\" | \"right-start\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "AlignedPlacement": {
                            "location": "import",
                            "path": "./placement",
                            "id": "src/components/dropdown/placement.ts::AlignedPlacement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placement of the dropdown"
                },
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'bottom-start'"
            },
            "positioningStrategy": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'absolute' | 'fixed'",
                    "resolved": "\"absolute\" | \"fixed\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position strategy"
                },
                "attribute": "positioning-strategy",
                "reflect": false,
                "defaultValue": "'fixed'"
            },
            "header": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "An optional header shown at the top of the dropdown"
                },
                "attribute": "header",
                "reflect": false
            },
            "offset": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\n    mainAxis?: number;\n    crossAxis?: number;\n    alignmentAxis?: number;\n  }",
                    "resolved": "{ mainAxis?: number; crossAxis?: number; alignmentAxis?: number; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": "Move dropdown along main axis of alignment"
                }
            },
            "overwriteDropdownStyle": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(delegate: {\n    dropdownRef: HTMLElement;\n    triggerRef?: HTMLElement;\n  }) => Promise<Partial<CSSStyleDeclaration>>",
                    "resolved": "(delegate: { dropdownRef: HTMLElement; triggerRef?: HTMLElement; }) => Promise<Partial<CSSStyleDeclaration>>",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        },
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "CSSStyleDeclaration": {
                            "location": "global",
                            "id": "global::CSSStyleDeclaration"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                }
            },
            "discoverAllSubmenus": {
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
                    "tags": [{
                            "name": "internal",
                            "text": "If initialisation of this dropdown is expected to be defered submenu discovery will have to be re-run globally by the controller.\nThis property indicates the need for that to the controller."
                        }],
                    "text": ""
                },
                "attribute": "discover-all-submenus",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "showChanged",
                "name": "showChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fire event after visibility of dropdown has changed"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "discoverSubmenu": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }]
                }
            },
            "updatePosition": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Update position of dropdown",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "show",
                "methodName": "changedShow"
            }, {
                "propName": "trigger",
                "methodName": "changedTrigger"
            }];
    }
    static get listeners() {
        return [{
                "name": "ix-assign-sub-menu",
                "method": "cacheSubmenuId",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=dropdown.js.map
