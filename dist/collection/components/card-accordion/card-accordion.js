import { h, Host, } from "@stencil/core";
let accordionControlId = 0;
const getAriaControlsId = (prefix = 'expand-content') => {
    return [prefix, accordionControlId++].join('-');
};
/**
 * @since 1.6.0
 */
export class CardAccordion {
    constructor() {
        this.collapse = false;
        this.expandContent = false;
    }
    onInitialExpandChange() {
        this.expandContent = !this.collapse;
    }
    get expandedContent() {
        return this.hostElement.shadowRoot.querySelector('.expand-content');
    }
    onExpandActionClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.expandContent = !this.expandContent;
        this.accordionExpand.emit({
            expand: this.expandContent,
            nativeEvent: event,
        });
        if (this.expandContent) {
            this.scrollExpandedContentIntoView();
        }
    }
    scrollExpandedContentIntoView() {
        setTimeout(() => {
            const rect = this.expandedContent.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                this.hostElement.shadowRoot
                    .querySelector('.expand-content')
                    .scrollIntoView(false);
            }
        }, 150);
    }
    componentWillLoad() {
        this.onInitialExpandChange();
    }
    render() {
        return (h(Host, { key: 'bc39054c9b50f4a1de3ebb720553d667f30e7420', slot: "card-accordion" }, h("button", { key: '39a8f4b977ca5d4f797a12f4d06a09e7a2909e80', tabIndex: 0, class: { 'expand-action': true, show: this.expandContent }, onClick: (event) => this.onExpandActionClick(event), role: "button", type: "button", "aria-expanded": this.expandContent, "aria-controls": getAriaControlsId() }, h("ix-icon", { key: '2d75d5fc08d4d79e1d70fef36440dba4ee5b62c9', name: 'chevron-right-small', class: {
                'expand-icon': true,
                show: this.expandContent,
            } })), h("div", { key: 'd2b662f006a69d90e2353922e377a1e83830de70', class: {
                'expand-content': true,
                show: this.expandContent,
            } }, h("div", { key: '7cedf82588afb804a626b1ba1c1cb9147c76306a', class: "expand-content-inner" }, h("div", { key: '04b85a19f6354fd725b634748e7ff7a5c58dd7cb', class: "expand-content-body" }, h("slot", { key: '732c33dbaa591432e14f74eb305b7e7c526d4e49' })), h("div", { key: '83291f55a13f8a8bebddb4d24c81cfc1a090f1f4', class: "expand-content-footer" })))));
    }
    static get is() { return "ix-card-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-accordion.css"]
        };
    }
    static get properties() {
        return {
            "collapse": {
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
                            "text": "2.1.0"
                        }],
                    "text": "Collapse the card"
                },
                "attribute": "collapse",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "expandContent": {}
        };
    }
    static get events() {
        return [{
                "method": "accordionExpand",
                "name": "accordionExpand",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "complexType": {
                    "original": "CardAccordionExpandChangeEvent",
                    "resolved": "{ expand: boolean; nativeEvent: Event; }",
                    "references": {
                        "CardAccordionExpandChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/card-accordion/card-accordion.tsx",
                            "id": "src/components/card-accordion/card-accordion.tsx::CardAccordionExpandChangeEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "collapse",
                "methodName": "onInitialExpandChange"
            }];
    }
}
//# sourceMappingURL=card-accordion.js.map
