import { h, Host } from "@stencil/core";
/**
 * @slot title-actions - Place additional actions inside title
 *
 * @since 1.6.0
 */
export class CardHeader {
    render() {
        return (h(Host, { key: '0d6fb3a5e4d91a6ca36e670dd6840a430fd5bf80' }, h("slot", { key: '18f10b373eace5c4cf7102a8a5eca93402f67884' }), h("div", { key: '19bacf432aef00963c20c3f54abe458717df03c8', class: "title-actions" }, h("slot", { key: 'bd52f42b05e873163be38840453d9564e17b03a9', name: "title-actions" }))));
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
