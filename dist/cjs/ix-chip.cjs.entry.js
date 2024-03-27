'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6f0ac73.js');

const chipCss = ":host{display:inline-block;position:relative;height:2rem;max-height:2rem;margin-left:0.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.inactive){pointer-events:none}.container{display:inline-flex;width:inherit;box-sizing:border-box;position:relative;align-items:center;border-radius:100px;padding:0.5rem;height:2rem;max-height:2rem;cursor:pointer}.container .with-icon{margin-right:0.25rem}.container .hidden{display:none;width:0px;margin-right:0px}.container .close-button-container{display:inline-flex;margin-left:auto;padding-left:0.5rem}.container .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container.icon{padding-left:0.75rem;padding-right:0.75rem}.container.closable{padding-right:0.25rem}.container.primary{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}.container.primary .close-button{color:var(--theme-chip-primary--color);--ix-icon-button-color:var(--theme-chip-primary--color);pointer-events:auto}.container.primary:hover{background-color:var(--theme-chip-primary--background--hover)}.container.primary:active{background-color:var(--theme-chip-primary--background--active)}.container.primary:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.primary.outline{color:var(--theme-chip-primary-outline--color);background-color:transparent;border:solid 1px var(--theme-chip-primary-outline--border-color)}.container.primary.outline .close-button{color:var(--theme-chip-primary-outline--color);--ix-icon-button-color:var(--theme-chip-primary-outline--color)}.container.primary.outline:hover{background-color:var(--theme-chip-primary-outline--background--hover)}.container.primary.outline:active{background-color:var(--theme-chip-primary-outline--background--active)}.container.outline{border-width:1px;border-style:solid}.container.alarm{color:var(--theme-color-alarm--contrast)}.container.alarm:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}.container.alarm.active::after,.container.alarm:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}.container.alarm:not(.outline){background-color:var(--theme-color-alarm)}.container.alarm:not(.outline) .close-button{color:var(--theme-color-alarm--contrast);--ix-icon-button-color:var(--theme-color-alarm--contrast)}.container.alarm:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}.container.alarm:not(.outline).active::after,.container.alarm:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}.container.alarm.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-alarm)}.container.alarm.outline:hover::after{display:none}.container.alarm.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.alarm.outline.active::after,.container.alarm.outline:active::after{display:none}.container.alarm.outline.active,.container.alarm.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.alarm:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.critical{color:var(--theme-color-critical--contrast)}.container.critical:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}.container.critical.active::after,.container.critical:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}.container.critical:not(.outline){background-color:var(--theme-color-critical)}.container.critical:not(.outline) .close-button{color:var(--theme-color-critical--contrast);--ix-icon-button-color:var(--theme-color-critical--contrast)}.container.critical:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}.container.critical:not(.outline).active::after,.container.critical:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}.container.critical.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-critical)}.container.critical.outline:hover::after{display:none}.container.critical.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.critical.outline.active::after,.container.critical.outline:active::after{display:none}.container.critical.outline.active,.container.critical.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.critical:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.warning{color:var(--theme-color-warning--contrast)}.container.warning:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}.container.warning.active::after,.container.warning:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}.container.warning:not(.outline){background-color:var(--theme-color-warning)}.container.warning:not(.outline) .close-button{color:var(--theme-color-warning--contrast);--ix-icon-button-color:var(--theme-color-warning--contrast)}.container.warning:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}.container.warning:not(.outline).active::after,.container.warning:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}.container.warning.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-warning)}.container.warning.outline:hover::after{display:none}.container.warning.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.warning.outline.active::after,.container.warning.outline:active::after{display:none}.container.warning.outline.active,.container.warning.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.warning:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.info{color:var(--theme-color-info--contrast)}.container.info:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}.container.info.active::after,.container.info:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}.container.info:not(.outline){background-color:var(--theme-color-info)}.container.info:not(.outline) .close-button{color:var(--theme-color-info--contrast);--ix-icon-button-color:var(--theme-color-info--contrast)}.container.info:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}.container.info:not(.outline).active::after,.container.info:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}.container.info.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-info)}.container.info.outline:hover::after{display:none}.container.info.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.info.outline.active::after,.container.info.outline:active::after{display:none}.container.info.outline.active,.container.info.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.info:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.neutral{color:var(--theme-color-neutral--contrast)}.container.neutral:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}.container.neutral.active::after,.container.neutral:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}.container.neutral:not(.outline){background-color:var(--theme-color-neutral)}.container.neutral:not(.outline) .close-button{color:var(--theme-color-neutral--contrast);--ix-icon-button-color:var(--theme-color-neutral--contrast)}.container.neutral:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}.container.neutral:not(.outline).active::after,.container.neutral:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}.container.neutral.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-neutral)}.container.neutral.outline:hover::after{display:none}.container.neutral.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.neutral.outline.active::after,.container.neutral.outline:active::after{display:none}.container.neutral.outline.active,.container.neutral.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.neutral:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.success{color:var(--theme-color-success--contrast)}.container.success:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}.container.success.active::after,.container.success:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}.container.success:not(.outline){background-color:var(--theme-color-success)}.container.success:not(.outline) .close-button{color:var(--theme-color-success--contrast);--ix-icon-button-color:var(--theme-color-success--contrast)}.container.success:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}.container.success:not(.outline).active::after,.container.success:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}.container.success.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-success)}.container.success.outline:hover::after{display:none}.container.success.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.success.outline.active::after,.container.success.outline:active::after{display:none}.container.success.outline.active,.container.success.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.success:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}";
const IxChipStyle0 = chipCss;

const Chip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeChip = index.createEvent(this, "closeChip", 7);
        this.variant = 'primary';
        this.active = true;
        this.closable = false;
        this.icon = undefined;
        this.background = undefined;
        this.color = undefined;
        this.chipColor = undefined;
        this.outline = false;
    }
    getCloseButton() {
        var _a;
        return (index.h("div", { class: "close-button-container" }, index.h("ix-icon-button", { type: "button", variant: "secondary", icon: 'close-small', class: "close-button", oval: true, size: "16", style: this.variant === 'custom'
                ? { color: (_a = this.chipColor) !== null && _a !== void 0 ? _a : this.color }
                : {}, ghost: true, onClick: (event) => {
                this.closeChip.emit(event);
                event.stopPropagation();
            } })));
    }
    render() {
        var _a, _b;
        const isInactive = this.active === false;
        let customStyle = {};
        if (this.variant === 'custom') {
            customStyle = {
                color: (_a = this.chipColor) !== null && _a !== void 0 ? _a : this.color,
                [this.outline ? 'borderColor' : 'backgroundColor']: this.background,
            };
        }
        return (index.h(index.Host, { key: '8ae6eb4b779cdc29105cd9da63a94889c2d21639', tabIndex: "-1", title: this.el.textContent, style: this.variant === 'custom'
                ? {
                    '--ix-icon-button-color': (_b = this.chipColor) !== null && _b !== void 0 ? _b : this.color,
                }
                : {} }, index.h("div", { key: '928b47d71774dc895d31f04547a5b8f2b775b81f', style: Object.assign({}, customStyle), class: {
                container: true,
                outline: this.outline,
                inactive: isInactive,
                alarm: this.variant === 'alarm',
                critical: this.variant === 'critical',
                info: this.variant === 'info',
                neutral: this.variant === 'neutral',
                primary: this.variant === 'primary',
                success: this.variant === 'success',
                warning: this.variant === 'warning',
                custom: this.variant === 'custom',
                closable: this.closable,
                icon: !!this.icon,
            } }, index.h("ix-icon", { key: '9ecf7660356b9cf472b1784a53e39e2033d4e8c4', class: {
                'with-icon': true,
                hidden: !this.icon,
            }, name: this.icon, size: '24' }), index.h("span", { key: '1f614a5b6c02022178f6f3114107d5681fe6a2c0', class: "slot-container" }, index.h("slot", { key: '57aae81b52234f66602661c5f9268219327ce537' })), isInactive === false && this.closable ? this.getCloseButton() : null)));
    }
    get el() { return index.getElement(this); }
};
Chip.style = IxChipStyle0;

exports.ix_chip = Chip;

//# sourceMappingURL=ix-chip.cjs.entry.js.map