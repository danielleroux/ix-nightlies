/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from "@stencil/core";
import { VariantsMapping } from "./type-mapping";
/**
 * @since 2.0.0
 */
export class IxTypography {
    constructor() {
        this.variant = undefined;
        this.format = undefined;
        this.color = undefined;
        this.textColor = undefined;
        this.bold = false;
        this.textDecoration = 'none';
    }
    render() {
        var _a, _b;
        let typographyClass = {};
        if (this.variant) {
            typographyClass[VariantsMapping[(_a = this.variant) !== null && _a !== void 0 ? _a : 'default']] = true;
        }
        else {
            typographyClass[`typography-${(_b = this.format) !== null && _b !== void 0 ? _b : 'body'}`] = true;
        }
        if (this.textDecoration !== 'none') {
            typographyClass[`typography-decoration-${this.textDecoration}`] = true;
        }
        typographyClass['typography-weight-bold'] = this.bold;
        let style = {};
        if (this.color) {
            style = {
                color: `var(--theme-color-${this.color}-text)`,
            };
        }
        if (this.textColor) {
            style = {
                color: `var(--theme-color-${this.textColor}-text)`,
            };
        }
        return (h(Host, { key: '7f9f0d6a880e474c2ef6b0c6e44d2ecab0407830', class: typographyClass, style: style }, h("slot", { key: 'b0d97d5203b81f8c30ccf584d04b5fb00d3fc7db' })));
    }
    static get is() { return "ix-typography"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["typography.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["typography.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TypographyVariants",
                    "resolved": "\"caption\" | \"caption-single\" | \"default\" | \"default-single\" | \"default-title\" | \"default-title-single\" | \"display-large\" | \"h2\" | \"large\" | \"large-single\" | \"large-title\" | \"large-title-single\" | \"small\" | \"x-small\"",
                    "references": {
                        "TypographyVariants": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/typography/typography.tsx",
                            "id": "src/components/typography/typography.tsx::TypographyVariants"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use `format` property"
                        }, {
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": "Font variant based on theme variables"
                },
                "attribute": "variant",
                "reflect": false
            },
            "format": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TypographyFormat",
                    "resolved": "TypographyFormatLabel | TypographyFormatBody | TypographyFormatDisplay | TypographyFormatHeading | TypographyFormatCode",
                    "references": {
                        "TypographyFormat": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/typography/typography.tsx",
                            "id": "src/components/typography/typography.tsx::TypographyFormat"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text format"
                },
                "attribute": "format",
                "reflect": false
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TypographyColors",
                    "resolved": "\"alarm\" | \"contrast\" | \"inv-contrast\" | \"inv-soft\" | \"inv-std\" | \"inv-weak\" | \"soft\" | \"std\" | \"weak\"",
                    "references": {
                        "TypographyColors": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/typography/typography.tsx",
                            "id": "src/components/typography/typography.tsx::TypographyColors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "since 2.1.0 use property `text-color`"
                        }],
                    "text": "Text color based on theme variables"
                },
                "attribute": "color",
                "reflect": false
            },
            "textColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TypographyColors",
                    "resolved": "\"alarm\" | \"contrast\" | \"inv-contrast\" | \"inv-soft\" | \"inv-std\" | \"inv-weak\" | \"soft\" | \"std\" | \"weak\"",
                    "references": {
                        "TypographyColors": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/typography/typography.tsx",
                            "id": "src/components/typography/typography.tsx::TypographyColors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text color based on theme variables"
                },
                "attribute": "text-color",
                "reflect": false
            },
            "bold": {
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
                    "tags": [],
                    "text": "Display text bold"
                },
                "attribute": "bold",
                "reflect": false,
                "defaultValue": "false"
            },
            "textDecoration": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TextDecoration",
                    "resolved": "\"line-through\" | \"none\" | \"underline\"",
                    "references": {
                        "TextDecoration": {
                            "location": "local",
                            "path": "/home/runner/work/ix/ix/packages/core/src/components/typography/typography.tsx",
                            "id": "src/components/typography/typography.tsx::TextDecoration"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text decoration"
                },
                "attribute": "text-decoration",
                "reflect": false,
                "defaultValue": "'none'"
            }
        };
    }
}
//# sourceMappingURL=typography.js.map
