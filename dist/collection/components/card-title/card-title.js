import { h, Host } from "@stencil/core";
/**
 * @slot title-actions - Place additional actions inside title
 *
 * @since 1.6.0
 */
export class CardHeader {
    render() {
        return (h(Host, { key: 'becda7afe606335391887cbf616a679a79ca23f8' }, h("slot", { key: '81d4200983e9288ae910d6e9bbf4ec8f107ed4b9' }), h("div", { key: 'e5894f17b9fdc84e70631bd03751d613f8e9ecf0', class: "title-actions" }, h("slot", { key: '30b969a1a99f9b411f6bfcee4ea5fcfc4c1f73b7', name: "title-actions" }))));
    }
    static get is() { return "ix-card-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-title.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-title.css"]
        };
    }
}
//# sourceMappingURL=card-title.js.map
