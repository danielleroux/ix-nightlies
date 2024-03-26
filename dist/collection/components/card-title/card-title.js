import { h, Host } from "@stencil/core";
/**
 * @slot title-actions - Place additional actions inside title
 *
 * @since 1.6.0
 */
export class CardHeader {
    render() {
        return (h(Host, { key: '481b7160e94af19ad4601024adfb1a18e3d74cc2' }, h("slot", { key: '5f8f8cd064f0c4d260edfdb10585a76b89b1e99f' }), h("div", { key: 'b6c56de2266fab7639edf607e550bd57589c86a3', class: "title-actions" }, h("slot", { key: '32dc2df2451bade00e79483db8594cecaceaf0b9', name: "title-actions" }))));
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
