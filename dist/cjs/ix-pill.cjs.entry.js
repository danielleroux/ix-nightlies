'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');

const pillCss = ":host{display:inline-block;position:relative;height:1.25rem;max-height:1.25rem;margin-left:0.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}.container{display:inline-flex;width:inherit;box-sizing:border-box;position:relative;align-items:center;border-radius:100px;padding:0.5rem;height:2rem;max-height:2rem;cursor:default}.container .with-icon{margin-right:0.25rem}.container .hidden{display:none;width:0px;margin-right:0px}.container .close-button-container{display:inline-flex;margin-left:auto;padding-left:0.5rem}.container .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container.icon{padding-left:0.75rem;padding-right:0.75rem}.container.closable{padding-right:0.25rem}.container.primary{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}.container.primary .close-button{color:var(--theme-chip-primary--color);--ix-icon-button-color:var(--theme-chip-primary--color);pointer-events:auto}.container.primary.outline{color:var(--theme-chip-primary-outline--color);background-color:transparent;border:solid 1px var(--theme-chip-primary-outline--border-color)}.container.primary.outline .close-button{color:var(--theme-chip-primary-outline--color);--ix-icon-button-color:var(--theme-chip-primary-outline--color)}.container.outline{border-width:1px;border-style:solid}.container.alarm{color:var(--theme-color-alarm--contrast)}.container.alarm:not(.outline){background-color:var(--theme-color-alarm)}.container.alarm:not(.outline) .close-button{color:var(--theme-color-alarm--contrast);--ix-icon-button-color:var(--theme-color-alarm--contrast)}.container.alarm.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-alarm)}.container.critical{color:var(--theme-color-critical--contrast)}.container.critical:not(.outline){background-color:var(--theme-color-critical)}.container.critical:not(.outline) .close-button{color:var(--theme-color-critical--contrast);--ix-icon-button-color:var(--theme-color-critical--contrast)}.container.critical.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-critical)}.container.warning{color:var(--theme-color-warning--contrast)}.container.warning:not(.outline){background-color:var(--theme-color-warning)}.container.warning:not(.outline) .close-button{color:var(--theme-color-warning--contrast);--ix-icon-button-color:var(--theme-color-warning--contrast)}.container.warning.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-warning)}.container.info{color:var(--theme-color-info--contrast)}.container.info:not(.outline){background-color:var(--theme-color-info)}.container.info:not(.outline) .close-button{color:var(--theme-color-info--contrast);--ix-icon-button-color:var(--theme-color-info--contrast)}.container.info.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-info)}.container.neutral{color:var(--theme-color-neutral--contrast)}.container.neutral:not(.outline){background-color:var(--theme-color-neutral)}.container.neutral:not(.outline) .close-button{color:var(--theme-color-neutral--contrast);--ix-icon-button-color:var(--theme-color-neutral--contrast)}.container.neutral.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-neutral)}.container.success{color:var(--theme-color-success--contrast)}.container.success:not(.outline){background-color:var(--theme-color-success)}.container.success:not(.outline) .close-button{color:var(--theme-color-success--contrast);--ix-icon-button-color:var(--theme-color-success--contrast)}.container.success.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-success)}:host .container{height:100%;justify-content:center;padding-right:0.5rem}:host(.align-left) .container{justify-content:flex-start}";
const IxPillStyle0 = pillCss;

const Pill = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.variant = 'primary';
        this.outline = false;
        this.icon = undefined;
        this.background = undefined;
        this.color = undefined;
        this.pillColor = undefined;
        this.alignLeft = false;
    }
    render() {
        var _a, _b;
        let customStyle = {};
        if (this.variant === 'custom') {
            customStyle = {
                color: (_a = this.pillColor) !== null && _a !== void 0 ? _a : this.color,
                [this.outline ? 'borderColor' : 'backgroundColor']: this.background,
            };
        }
        return (index.h(index.Host, { key: '564411b5f68232e91613cd49b790f8ccff034868', style: this.variant === 'custom'
                ? {
                    '--ix-icon-button-color': (_b = this.pillColor) !== null && _b !== void 0 ? _b : this.color,
                }
                : {}, title: this.el.textContent, class: {
                'align-left': this.alignLeft,
            } }, index.h("div", { key: '249644ab34859bf451ed47e64fc51e7858a0ab06', style: Object.assign({}, customStyle), class: {
                container: true,
                outline: this.outline,
                inactive: false,
                alarm: this.variant === 'alarm',
                critical: this.variant === 'critical',
                info: this.variant === 'info',
                neutral: this.variant === 'neutral',
                primary: this.variant === 'primary',
                success: this.variant === 'success',
                warning: this.variant === 'warning',
                custom: this.variant === 'custom',
                closable: false,
                icon: !!this.icon,
            } }, index.h("ix-icon", { key: 'f5eeee5bc7b218055775ac7f3dbae95cf697d810', class: {
                'with-icon': true,
                hidden: this.icon === undefined || this.icon === '',
            }, name: this.icon, size: '16' }), index.h("span", { key: '14644dee7a8aae4b0f9fd3dd0a6fe51dc8586da6', class: "slot-container" }, index.h("slot", { key: '33553ee2ba967003bad9f7c52e78d2c383df1c08' })))));
    }
    get el() { return index.getElement(this); }
};
Pill.style = IxPillStyle0;

exports.ix_pill = Pill;

//# sourceMappingURL=ix-pill.cjs.entry.js.map