import { h, Host } from "@stencil/core";
/**
 * @since 1.6.0
 */
export class Card {
    constructor() {
        this.variant = 'insight';
        this.selected = undefined;
    }
    render() {
        return (h(Host, { key: 'f91df8c114ec01e95ae0eba29c8acf3cacbdec25', class: {
                selected: this.selected,
                [`card-${this.variant}`]: true,
            } }, h("div", { key: '24c775b7ae7b2940df9e101b702b91a17a0f6749', class: "card-content" }, h("slot", { key: '57bfc8eb49985aae6aff8ea277475b2012ac8ba2' })), h("div", { key: '8eac7eefd8020827e0ebf38be231de2c7b934797', class: "card-footer" }, h("slot", { key: '207dc0b0ce6279ecb9dfda76e3d03a145a5ff168', name: "card-accordion" }))));
    }
    static get is() { return "ix-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CardVariant",
                    "resolved": "\"alarm\" | \"critical\" | \"info\" | \"insight\" | \"neutral\" | \"notification\" | \"primary\" | \"success\" | \"warning\"",
                    "references": {
                        "CardVariant": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/card/card.tsx",
                            "id": "src/components/card/card.tsx::CardVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Card variant"
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'insight'"
            },
            "selected": {
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
                    "text": ""
                },
                "attribute": "selected",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=card.js.map
