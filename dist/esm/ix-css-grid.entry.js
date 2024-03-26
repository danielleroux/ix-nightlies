import { r as registerInstance, h, H as Host } from './index-5cd176b3.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function templateBuilder(inputTemplate) {
    let templateString = '';
    inputTemplate.forEach((row) => {
        templateString += '"';
        templateString = row.reduce((pV, cV) => {
            return `${pV} ${cV}`;
        }, templateString);
        templateString += '"\n';
    });
    return templateString;
}

const cssGridCss = ":host{display:grid;position:relative;row-gap:1.5rem;-moz-column-gap:1.5rem;column-gap:1.5rem}";
const IxCssGridStyle0 = cssGridCss;

const smQuery = 'only screen and (max-width: 576px)';
const mdQuery = 'only screen and (max-width: 768px)';
const lgQuery = 'only screen and (max-width: 992px)';
const mediaQueryCollection = [
    { name: 'sm', query: smQuery },
    { name: 'md', query: mdQuery },
    { name: 'lg', query: lgQuery },
];
const CssGrid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disposeMediaQueryListener = [];
        this.mediaQueries = [];
        this.templates = undefined;
        this.currentTemplate = undefined;
    }
    componentWillRender() {
        this.mediaQueries = mediaQueryCollection.map((query) => {
            const mediaQuery = window.matchMedia(query.query);
            const callback = () => {
                this.applyTemplate();
            };
            this.disposeMediaQueryListener.push(callback);
            mediaQuery.addEventListener('change', callback);
            return Object.assign(Object.assign({}, query), { mediaQuery });
        });
        this.applyTemplate();
    }
    disconnectedCallback() {
        this.mediaQueries.forEach((mq, index) => {
            mq.mediaQuery.removeEventListener('change', this.disposeMediaQueryListener[index]);
        });
    }
    findNextTemplate(type) {
        const typeIndex = this.mediaQueries.findIndex((mq) => mq.name === type);
        const nextTemplate = this.templates[this.mediaQueries[typeIndex + 1].name];
        if (!nextTemplate) {
            return this.findNextTemplate(this.mediaQueries[typeIndex + 1].name);
        }
        return nextTemplate;
    }
    applyTemplate() {
        let active = this.mediaQueries.find((mq) => mq.mediaQuery.matches);
        if (!active) {
            active = this.mediaQueries[this.mediaQueries.length - 1];
        }
        const template = this.templates[active.name];
        if (template) {
            this.currentTemplate = template;
        }
        else {
            this.currentTemplate = this.findNextTemplate(active.name);
        }
    }
    render() {
        var _a;
        const style = {};
        if (((_a = this.currentTemplate) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
            style['grid-template-areas'] = templateBuilder(this.currentTemplate);
        }
        return (h(Host, { key: '8f1477e0ca42a62ce26698bde9843b7634c6956e', style: style }, h("slot", { key: '5af8072e074124a51fedb02eb5538490ab91e22a' })));
    }
};
CssGrid.style = IxCssGridStyle0;

export { CssGrid as ix_css_grid };

//# sourceMappingURL=ix-css-grid.entry.js.map