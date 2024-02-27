/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { forceUpdate, h, Host } from "@stencil/core";
import { matchBreakpoint } from "../utils/breakpoints";
/**
 * @since 2.0.0
 */
export class Col {
    constructor() {
        this.size = undefined;
        this.sizeSm = undefined;
        this.sizeMd = undefined;
        this.sizeLg = undefined;
    }
    onResize() {
        forceUpdate(this);
    }
    getSize(breakpoint) {
        if (breakpoint === '') {
            return this.size;
        }
        if (breakpoint === 'sm') {
            return this.sizeSm;
        }
        if (breakpoint === 'md') {
            return this.sizeMd;
        }
        if (breakpoint === 'lg') {
            return this.sizeLg;
        }
    }
    getColumnSize() {
        let size;
        Col.Breakpoints.forEach((breakpoint) => {
            const isMediaQueryActive = breakpoint !== '' ? matchBreakpoint(breakpoint) : true;
            if (!isMediaQueryActive) {
                return;
            }
            const currentSize = this.getSize(breakpoint);
            if (currentSize) {
                size = currentSize;
            }
        });
        return size;
    }
    getColumnSizeStyling() {
        const size = this.getColumnSize();
        if (!size) {
            return;
        }
        if (size === 'auto') {
            return {
                flex: '0 0 auto',
                width: 'auto',
                'max-width': 'auto',
            };
        }
        const colSize = `calc(calc(${size} / var(--ix-layout-grid-columns)) * 100%)`;
        return {
            flex: `0 0 ${colSize}`,
            width: `${colSize}`,
            'max-width': `${colSize}`,
        };
    }
    render() {
        return (h(Host, { key: 'c117230044b3e1de13480314392f64373a49f2dc', style: Object.assign({}, this.getColumnSizeStyling()) }, h("slot", { key: '872b553d86cd17f366150cc579f7caeff8eba9d1' })));
    }
    static get is() { return "ix-col"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["col.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["col.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ColumnSize",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "ColumnSize": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/col/col.tsx",
                            "id": "src/components/col/col.tsx::ColumnSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size of the column"
                },
                "attribute": "size",
                "reflect": false
            },
            "sizeSm": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ColumnSize",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "ColumnSize": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/col/col.tsx",
                            "id": "src/components/col/col.tsx::ColumnSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size of the column for sm screens"
                },
                "attribute": "size-sm",
                "reflect": false
            },
            "sizeMd": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ColumnSize",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "ColumnSize": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/col/col.tsx",
                            "id": "src/components/col/col.tsx::ColumnSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size of the column for md screens"
                },
                "attribute": "size-md",
                "reflect": false
            },
            "sizeLg": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ColumnSize",
                    "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\"",
                    "references": {
                        "ColumnSize": {
                            "location": "local",
                            "path": "/Users/daniel/dev/oss/playground/daniellerouxix/packages/core/src/components/col/col.tsx",
                            "id": "src/components/col/col.tsx::ColumnSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size of the column for lg screens"
                },
                "attribute": "size-lg",
                "reflect": false
            }
        };
    }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "onResize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
Col.Breakpoints = ['', 'sm', 'md', 'lg'];
//# sourceMappingURL=col.js.map
