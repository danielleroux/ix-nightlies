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
        return (h(Host, { key: '4e4415039fe113164586e8620b2ba46671b1f9e9', slot: "card-accordion" }, h("button", { key: 'a99c3feec1c46a12f863260786bc14f924c5ebb8', tabIndex: 0, class: { 'expand-action': true, show: this.expandContent }, onClick: (event) => this.onExpandActionClick(event), role: "button", type: "button", "aria-expanded": this.expandContent, "aria-controls": getAriaControlsId() }, h("ix-icon", { key: '765b773718f44c6d20df0c2c4341322725f92144', name: 'chevron-right-small', class: {
                'expand-icon': true,
                show: this.expandContent,
            } })), h("div", { key: '3f2584f144a95f302ab429a30cf81581c81c459b', class: {
                'expand-content': true,
                show: this.expandContent,
            } }, h("div", { key: '0966471b4a55de828c847eb1d4f5262f3d7fc426', class: "expand-content-inner" }, h("div", { key: '65c0f7b5fb40e6bf035f728ee2c1535bf43cb4c1', class: "expand-content-body" }, h("slot", { key: '30a679ed712e09f6a338a780374ee9c10f853870' })), h("div", { key: 'ab1bcd363d8af33052084ee7a998feacb7e8fa57', class: "expand-content-footer" })))));
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
