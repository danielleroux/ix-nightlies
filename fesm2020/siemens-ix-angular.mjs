import { closeModal, dismissModal, showModal, themeSwitcher, getToastContainer, toast } from '@siemens/ix';
export * from '@siemens/ix';
import * as i0 from '@angular/core';
import { Directive, HostListener, Component, ChangeDetectionStrategy, Input, Type, Injector, ElementRef, Injectable, EventEmitter, Output, APP_INITIALIZER, NgZone, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { __decorate } from 'tslib';
import { fromEvent } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { defineCustomElements } from '@siemens/ix-icons/loader';
import { applyPolyfills, defineCustomElements as defineCustomElements$1 } from '@siemens/ix/loader';

class ValueAccessor {
    constructor(el) {
        this.el = el;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    }
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    }
    _handleBlurEvent() {
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
}
/** @nocollapse */ ValueAccessor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ ValueAccessor.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: ValueAccessor, host: { listeners: { "focusout": "_handleBlurEvent()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ValueAccessor, decorators: [{
            type: Directive,
            args: [{}]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { _handleBlurEvent: [{
                type: HostListener,
                args: ['focusout']
            }] } });

class BooleanValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    writeValue(value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
    }
}
/** @nocollapse */ BooleanValueAccessor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BooleanValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ BooleanValueAccessor.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BooleanValueAccessor, selector: "ix-toggle[ngModel],ix-toggle[formControlName],ix-toggle[formControl]", host: { listeners: { "checkedChange": "handleChangeEvent($event.target.checked)" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: BooleanValueAccessor,
            multi: true
        }
    ], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BooleanValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'ix-toggle[ngModel],ix-toggle[formControlName],ix-toggle[formControl]',
                    host: {
                        '(checkedChange)': 'handleChangeEvent($event.target.checked)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: BooleanValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

/* eslint-disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
            /**
             * In the event that proxyInputs is called
             * multiple times re-defining these inputs
             * will cause an error to be thrown. As a result
             * we set configurable: true to indicate these
             * properties can be changed.
             */
            configurable: true,
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

let IxActionCard = class IxActionCard {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxActionCard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxActionCard, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxActionCard.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxActionCard, selector: "ix-action-card", inputs: { heading: "heading", icon: "icon", selected: "selected", subheading: "subheading", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxActionCard = __decorate([
    ProxyCmp({
        inputs: ['heading', 'icon', 'selected', 'subheading', 'variant']
    })
], IxActionCard);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxActionCard, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-action-card',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['heading', 'icon', 'selected', 'subheading', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxApplication = class IxApplication {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxApplication.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxApplication, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxApplication.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxApplication, selector: "ix-application", inputs: { appSwitchConfig: "appSwitchConfig", breakpoints: "breakpoints", forceBreakpoint: "forceBreakpoint", theme: "theme", themeSystemAppearance: "themeSystemAppearance" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxApplication = __decorate([
    ProxyCmp({
        inputs: ['appSwitchConfig', 'breakpoints', 'forceBreakpoint', 'theme', 'themeSystemAppearance']
    })
], IxApplication);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxApplication, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-application',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appSwitchConfig', 'breakpoints', 'forceBreakpoint', 'theme', 'themeSystemAppearance'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxApplicationHeader = class IxApplicationHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxApplicationHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxApplicationHeader, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxApplicationHeader.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxApplicationHeader, selector: "ix-application-header", inputs: { name: "name" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxApplicationHeader = __decorate([
    ProxyCmp({
        inputs: ['name']
    })
], IxApplicationHeader);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxApplicationHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-application-header',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['name'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxAvatar = class IxAvatar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxAvatar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxAvatar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxAvatar.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxAvatar, selector: "ix-avatar", inputs: { extra: "extra", image: "image", initials: "initials", username: "username" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxAvatar = __decorate([
    ProxyCmp({
        inputs: ['extra', 'image', 'initials', 'username']
    })
], IxAvatar);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxAvatar, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-avatar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['extra', 'image', 'initials', 'username'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxBasicNavigation = class IxBasicNavigation {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxBasicNavigation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxBasicNavigation, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxBasicNavigation.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxBasicNavigation, selector: "ix-basic-navigation", inputs: { applicationName: "applicationName", breakpoints: "breakpoints", forceBreakpoint: "forceBreakpoint", hideHeader: "hideHeader" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxBasicNavigation = __decorate([
    ProxyCmp({
        inputs: ['applicationName', 'breakpoints', 'forceBreakpoint', 'hideHeader']
    })
], IxBasicNavigation);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxBasicNavigation, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-basic-navigation',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['applicationName', 'breakpoints', 'forceBreakpoint', 'hideHeader'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxBlind = class IxBlind {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['collapsedChange']);
    }
};
/** @nocollapse */ IxBlind.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxBlind, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxBlind.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxBlind, selector: "ix-blind", inputs: { collapsed: "collapsed", icon: "icon", label: "label", sublabel: "sublabel", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxBlind = __decorate([
    ProxyCmp({
        inputs: ['collapsed', 'icon', 'label', 'sublabel', 'variant']
    })
], IxBlind);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxBlind, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-blind',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['collapsed', 'icon', 'label', 'sublabel', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxBreadcrumb = class IxBreadcrumb {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['itemClick', 'nextClick']);
    }
};
/** @nocollapse */ IxBreadcrumb.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxBreadcrumb, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxBreadcrumb.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxBreadcrumb, selector: "ix-breadcrumb", inputs: { ariaLabelPreviousButton: "ariaLabelPreviousButton", ghost: "ghost", nextItems: "nextItems", visibleItemCount: "visibleItemCount" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxBreadcrumb = __decorate([
    ProxyCmp({
        inputs: ['ariaLabelPreviousButton', 'ghost', 'nextItems', 'visibleItemCount']
    })
], IxBreadcrumb);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxBreadcrumb, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-breadcrumb',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabelPreviousButton', 'ghost', 'nextItems', 'visibleItemCount'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxBreadcrumbItem = class IxBreadcrumbItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxBreadcrumbItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxBreadcrumbItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxBreadcrumbItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxBreadcrumbItem, selector: "ix-breadcrumb-item", inputs: { icon: "icon", label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxBreadcrumbItem = __decorate([
    ProxyCmp({
        inputs: ['icon', 'label']
    })
], IxBreadcrumbItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxBreadcrumbItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-breadcrumb-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['icon', 'label'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxButton = class IxButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxButton, selector: "ix-button", inputs: { disabled: "disabled", ghost: "ghost", icon: "icon", loading: "loading", outline: "outline", type: "type", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxButton = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'type', 'variant']
    })
], IxButton);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'type', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxCard = class IxCard {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxCard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCard, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxCard.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxCard, selector: "ix-card", inputs: { selected: "selected", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxCard = __decorate([
    ProxyCmp({
        inputs: ['selected', 'variant']
    })
], IxCard);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCard, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-card',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['selected', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxCardAccordion = class IxCardAccordion {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxCardAccordion.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCardAccordion, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxCardAccordion.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxCardAccordion, selector: "ix-card-accordion", inputs: { collapse: "collapse" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxCardAccordion = __decorate([
    ProxyCmp({
        inputs: ['collapse']
    })
], IxCardAccordion);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCardAccordion, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-card-accordion',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['collapse'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxCardContent = class IxCardContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxCardContent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCardContent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxCardContent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxCardContent, selector: "ix-card-content", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxCardContent = __decorate([
    ProxyCmp({})
], IxCardContent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCardContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-card-content',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxCardList = class IxCardList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['collapseChanged', 'showAllClick', 'showMoreCardClick']);
    }
};
/** @nocollapse */ IxCardList.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCardList, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxCardList.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxCardList, selector: "ix-card-list", inputs: { collapse: "collapse", i18nMoreCards: "i18nMoreCards", i18nShowAll: "i18nShowAll", label: "label", listStyle: "listStyle", showAllCount: "showAllCount", suppressOverflowHandling: "suppressOverflowHandling" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxCardList = __decorate([
    ProxyCmp({
        inputs: ['collapse', 'i18nMoreCards', 'i18nShowAll', 'label', 'listStyle', 'showAllCount', 'suppressOverflowHandling']
    })
], IxCardList);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCardList, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-card-list',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['collapse', 'i18nMoreCards', 'i18nShowAll', 'label', 'listStyle', 'showAllCount', 'suppressOverflowHandling'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxCardTitle = class IxCardTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxCardTitle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCardTitle, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxCardTitle.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxCardTitle, selector: "ix-card-title", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxCardTitle = __decorate([
    ProxyCmp({})
], IxCardTitle);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCardTitle, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-card-title',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxCategoryFilter = class IxCategoryFilter {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['categoryChanged', 'inputChanged', 'filterChanged']);
    }
};
/** @nocollapse */ IxCategoryFilter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCategoryFilter, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxCategoryFilter.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxCategoryFilter, selector: "ix-category-filter", inputs: { categories: "categories", disabled: "disabled", filterState: "filterState", hideIcon: "hideIcon", i18nPlainText: "i18nPlainText", icon: "icon", labelCategories: "labelCategories", nonSelectableCategories: "nonSelectableCategories", placeholder: "placeholder", readonly: "readonly", repeatCategories: "repeatCategories", suggestions: "suggestions" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxCategoryFilter = __decorate([
    ProxyCmp({
        inputs: ['categories', 'disabled', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'readonly', 'repeatCategories', 'suggestions']
    })
], IxCategoryFilter);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCategoryFilter, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-category-filter',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['categories', 'disabled', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'readonly', 'repeatCategories', 'suggestions'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxChip = class IxChip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['closeChip']);
    }
};
/** @nocollapse */ IxChip.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxChip, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxChip.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxChip, selector: "ix-chip", inputs: { active: "active", background: "background", chipColor: "chipColor", closable: "closable", color: "color", icon: "icon", outline: "outline", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxChip = __decorate([
    ProxyCmp({
        inputs: ['active', 'background', 'chipColor', 'closable', 'color', 'icon', 'outline', 'variant']
    })
], IxChip);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxChip, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-chip',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['active', 'background', 'chipColor', 'closable', 'color', 'icon', 'outline', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxCol = class IxCol {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxCol.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCol, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxCol.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxCol, selector: "ix-col", inputs: { size: "size", sizeLg: "sizeLg", sizeMd: "sizeMd", sizeSm: "sizeSm" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxCol = __decorate([
    ProxyCmp({
        inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm']
    })
], IxCol);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxCol, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-col',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxContent = class IxContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxContent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxContent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxContent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxContent, selector: "ix-content", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxContent = __decorate([
    ProxyCmp({})
], IxContent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-content',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxContentHeader = class IxContentHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['backButtonClick']);
    }
};
/** @nocollapse */ IxContentHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxContentHeader, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxContentHeader.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxContentHeader, selector: "ix-content-header", inputs: { hasBackButton: "hasBackButton", headerSubtitle: "headerSubtitle", headerTitle: "headerTitle", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxContentHeader = __decorate([
    ProxyCmp({
        inputs: ['hasBackButton', 'headerSubtitle', 'headerTitle', 'variant']
    })
], IxContentHeader);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxContentHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-content-header',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['hasBackButton', 'headerSubtitle', 'headerTitle', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxDateDropdown = class IxDateDropdown {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['dateRangeChange']);
    }
};
/** @nocollapse */ IxDateDropdown.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDateDropdown, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxDateDropdown.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxDateDropdown, selector: "ix-date-dropdown", inputs: { customRangeAllowed: "customRangeAllowed", dateRangeId: "dateRangeId", dateRangeOptions: "dateRangeOptions", format: "format", from: "from", i18nCustomItem: "i18nCustomItem", i18nDone: "i18nDone", i18nNoRange: "i18nNoRange", maxDate: "maxDate", minDate: "minDate", range: "range", to: "to" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxDateDropdown = __decorate([
    ProxyCmp({
        inputs: ['customRangeAllowed', 'dateRangeId', 'dateRangeOptions', 'format', 'from', 'i18nCustomItem', 'i18nDone', 'i18nNoRange', 'maxDate', 'minDate', 'range', 'to'],
        methods: ['getDateRange']
    })
], IxDateDropdown);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDateDropdown, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-date-dropdown',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['customRangeAllowed', 'dateRangeId', 'dateRangeOptions', 'format', 'from', 'i18nCustomItem', 'i18nDone', 'i18nNoRange', 'maxDate', 'minDate', 'range', 'to'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxDatePicker = class IxDatePicker {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['dateChange', 'dateRangeChange', 'dateSelect', 'done']);
    }
};
/** @nocollapse */ IxDatePicker.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDatePicker, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxDatePicker.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxDatePicker, selector: "ix-date-picker", inputs: { corners: "corners", eventDelimiter: "eventDelimiter", format: "format", from: "from", i18nDone: "i18nDone", individual: "individual", locale: "locale", maxDate: "maxDate", minDate: "minDate", range: "range", textSelectDate: "textSelectDate", to: "to", weekStartIndex: "weekStartIndex" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxDatePicker = __decorate([
    ProxyCmp({
        inputs: ['corners', 'eventDelimiter', 'format', 'from', 'i18nDone', 'individual', 'locale', 'maxDate', 'minDate', 'range', 'textSelectDate', 'to', 'weekStartIndex'],
        methods: ['getCurrentDate']
    })
], IxDatePicker);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDatePicker, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-date-picker',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['corners', 'eventDelimiter', 'format', 'from', 'i18nDone', 'individual', 'locale', 'maxDate', 'minDate', 'range', 'textSelectDate', 'to', 'weekStartIndex'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxDatetimePicker = class IxDatetimePicker {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['done', 'timeChange', 'dateChange', 'dateSelect']);
    }
};
/** @nocollapse */ IxDatetimePicker.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDatetimePicker, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxDatetimePicker.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxDatetimePicker, selector: "ix-datetime-picker", inputs: { dateFormat: "dateFormat", eventDelimiter: "eventDelimiter", from: "from", i18nDone: "i18nDone", locale: "locale", maxDate: "maxDate", minDate: "minDate", range: "range", showHour: "showHour", showMinutes: "showMinutes", showSeconds: "showSeconds", showTimeReference: "showTimeReference", textSelectDate: "textSelectDate", time: "time", timeFormat: "timeFormat", timeReference: "timeReference", to: "to", weekStartIndex: "weekStartIndex" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxDatetimePicker = __decorate([
    ProxyCmp({
        inputs: ['dateFormat', 'eventDelimiter', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'range', 'showHour', 'showMinutes', 'showSeconds', 'showTimeReference', 'textSelectDate', 'time', 'timeFormat', 'timeReference', 'to', 'weekStartIndex']
    })
], IxDatetimePicker);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDatetimePicker, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-datetime-picker',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['dateFormat', 'eventDelimiter', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'range', 'showHour', 'showMinutes', 'showSeconds', 'showTimeReference', 'textSelectDate', 'time', 'timeFormat', 'timeReference', 'to', 'weekStartIndex'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxDivider = class IxDivider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxDivider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDivider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxDivider.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxDivider, selector: "ix-divider", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxDivider = __decorate([
    ProxyCmp({})
], IxDivider);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDivider, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-divider',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxDrawer = class IxDrawer {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['open', 'drawerClose']);
    }
};
/** @nocollapse */ IxDrawer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDrawer, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxDrawer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxDrawer, selector: "ix-drawer", inputs: { closeOnClickOutside: "closeOnClickOutside", fullHeight: "fullHeight", maxWidth: "maxWidth", minWidth: "minWidth", show: "show", width: "width" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxDrawer = __decorate([
    ProxyCmp({
        inputs: ['closeOnClickOutside', 'fullHeight', 'maxWidth', 'minWidth', 'show', 'width'],
        methods: ['toggleDrawer']
    })
], IxDrawer);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDrawer, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-drawer',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['closeOnClickOutside', 'fullHeight', 'maxWidth', 'minWidth', 'show', 'width'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxDropdown = class IxDropdown {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['showChanged']);
    }
};
/** @nocollapse */ IxDropdown.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdown, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxDropdown.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxDropdown, selector: "ix-dropdown", inputs: { anchor: "anchor", closeBehavior: "closeBehavior", header: "header", placement: "placement", positioningStrategy: "positioningStrategy", show: "show", suppressAutomaticPlacement: "suppressAutomaticPlacement", trigger: "trigger" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxDropdown = __decorate([
    ProxyCmp({
        inputs: ['anchor', 'closeBehavior', 'header', 'placement', 'positioningStrategy', 'show', 'suppressAutomaticPlacement', 'trigger'],
        methods: ['updatePosition']
    })
], IxDropdown);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdown, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-dropdown',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['anchor', 'closeBehavior', 'header', 'placement', 'positioningStrategy', 'show', 'suppressAutomaticPlacement', 'trigger'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxDropdownButton = class IxDropdownButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxDropdownButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdownButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxDropdownButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxDropdownButton, selector: "ix-dropdown-button", inputs: { closeBehavior: "closeBehavior", disabled: "disabled", ghost: "ghost", icon: "icon", label: "label", outline: "outline", placement: "placement", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxDropdownButton = __decorate([
    ProxyCmp({
        inputs: ['closeBehavior', 'disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'variant']
    })
], IxDropdownButton);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdownButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-dropdown-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['closeBehavior', 'disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxDropdownHeader = class IxDropdownHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxDropdownHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdownHeader, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxDropdownHeader.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxDropdownHeader, selector: "ix-dropdown-header", inputs: { label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxDropdownHeader = __decorate([
    ProxyCmp({
        inputs: ['label']
    })
], IxDropdownHeader);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdownHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-dropdown-header',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['label'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxDropdownItem = class IxDropdownItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxDropdownItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdownItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxDropdownItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxDropdownItem, selector: "ix-dropdown-item", inputs: { checked: "checked", disabled: "disabled", hover: "hover", icon: "icon", label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxDropdownItem = __decorate([
    ProxyCmp({
        inputs: ['checked', 'disabled', 'hover', 'icon', 'label'],
        methods: ['emitItemClick']
    })
], IxDropdownItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdownItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-dropdown-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['checked', 'disabled', 'hover', 'icon', 'label'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxDropdownQuickActions = class IxDropdownQuickActions {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxDropdownQuickActions.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdownQuickActions, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxDropdownQuickActions.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxDropdownQuickActions, selector: "ix-dropdown-quick-actions", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxDropdownQuickActions = __decorate([
    ProxyCmp({})
], IxDropdownQuickActions);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdownQuickActions, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-dropdown-quick-actions',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxEmptyState = class IxEmptyState {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['actionClick']);
    }
};
/** @nocollapse */ IxEmptyState.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxEmptyState, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxEmptyState.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxEmptyState, selector: "ix-empty-state", inputs: { action: "action", header: "header", icon: "icon", layout: "layout", subHeader: "subHeader" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxEmptyState = __decorate([
    ProxyCmp({
        inputs: ['action', 'header', 'icon', 'layout', 'subHeader']
    })
], IxEmptyState);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxEmptyState, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-empty-state',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['action', 'header', 'icon', 'layout', 'subHeader'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxEventList = class IxEventList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxEventList.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxEventList, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxEventList.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxEventList, selector: "ix-event-list", inputs: { animated: "animated", chevron: "chevron", compact: "compact", itemHeight: "itemHeight" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxEventList = __decorate([
    ProxyCmp({
        inputs: ['animated', 'chevron', 'compact', 'itemHeight']
    })
], IxEventList);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxEventList, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-event-list',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['animated', 'chevron', 'compact', 'itemHeight'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxEventListItem = class IxEventListItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['itemClick']);
    }
};
/** @nocollapse */ IxEventListItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxEventListItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxEventListItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxEventListItem, selector: "ix-event-list-item", inputs: { chevron: "chevron", color: "color", disabled: "disabled", itemColor: "itemColor", selected: "selected" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxEventListItem = __decorate([
    ProxyCmp({
        inputs: ['chevron', 'color', 'disabled', 'itemColor', 'selected']
    })
], IxEventListItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxEventListItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-event-list-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['chevron', 'color', 'disabled', 'itemColor', 'selected'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxExpandingSearch = class IxExpandingSearch {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['valueChange']);
    }
};
/** @nocollapse */ IxExpandingSearch.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxExpandingSearch, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxExpandingSearch.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxExpandingSearch, selector: "ix-expanding-search", inputs: { fullWidth: "fullWidth", icon: "icon", placeholder: "placeholder", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxExpandingSearch = __decorate([
    ProxyCmp({
        inputs: ['fullWidth', 'icon', 'placeholder', 'value']
    })
], IxExpandingSearch);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxExpandingSearch, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-expanding-search',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['fullWidth', 'icon', 'placeholder', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxFilterChip = class IxFilterChip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['closeClick']);
    }
};
/** @nocollapse */ IxFilterChip.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxFilterChip, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxFilterChip.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxFilterChip, selector: "ix-filter-chip", inputs: { disabled: "disabled", readonly: "readonly" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxFilterChip = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'readonly']
    })
], IxFilterChip);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxFilterChip, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-filter-chip',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'readonly'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxFlipTile = class IxFlipTile {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxFlipTile.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxFlipTile, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxFlipTile.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxFlipTile, selector: "ix-flip-tile", inputs: { height: "height", state: "state", width: "width" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxFlipTile = __decorate([
    ProxyCmp({
        inputs: ['height', 'state', 'width']
    })
], IxFlipTile);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxFlipTile, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-flip-tile',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['height', 'state', 'width'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxFlipTileContent = class IxFlipTileContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxFlipTileContent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxFlipTileContent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxFlipTileContent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxFlipTileContent, selector: "ix-flip-tile-content", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxFlipTileContent = __decorate([
    ProxyCmp({})
], IxFlipTileContent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxFlipTileContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-flip-tile-content',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxFormField = class IxFormField {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxFormField, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxFormField, selector: "ix-form-field", inputs: { label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxFormField = __decorate([
    ProxyCmp({
        inputs: ['label']
    })
], IxFormField);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxFormField, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-form-field',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['label'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxGroup = class IxGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['selectGroup', 'selectItem', 'collapsedChanged']);
    }
};
/** @nocollapse */ IxGroup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxGroup.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxGroup, selector: "ix-group", inputs: { collapsed: "collapsed", expandOnHeaderClick: "expandOnHeaderClick", header: "header", index: "index", selected: "selected", subHeader: "subHeader", suppressHeaderSelection: "suppressHeaderSelection" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxGroup = __decorate([
    ProxyCmp({
        inputs: ['collapsed', 'expandOnHeaderClick', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection']
    })
], IxGroup);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['collapsed', 'expandOnHeaderClick', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxGroupContextMenu = class IxGroupContextMenu {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxGroupContextMenu.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxGroupContextMenu, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxGroupContextMenu.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxGroupContextMenu, selector: "ix-group-context-menu", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxGroupContextMenu = __decorate([
    ProxyCmp({})
], IxGroupContextMenu);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxGroupContextMenu, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-group-context-menu',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxGroupItem = class IxGroupItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['selectedChanged']);
    }
};
/** @nocollapse */ IxGroupItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxGroupItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxGroupItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxGroupItem, selector: "ix-group-item", inputs: { focusable: "focusable", icon: "icon", index: "index", secondaryText: "secondaryText", selected: "selected", suppressSelection: "suppressSelection", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxGroupItem = __decorate([
    ProxyCmp({
        inputs: ['focusable', 'icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text']
    })
], IxGroupItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxGroupItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-group-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['focusable', 'icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxIconButton = class IxIconButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxIconButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxIconButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxIconButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxIconButton, selector: "ix-icon-button", inputs: { a11yLabel: "a11yLabel", color: "color", disabled: "disabled", ghost: "ghost", icon: "icon", iconColor: "iconColor", loading: "loading", outline: "outline", oval: "oval", size: "size", type: "type", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxIconButton = __decorate([
    ProxyCmp({
        inputs: ['a11yLabel', 'color', 'disabled', 'ghost', 'icon', 'iconColor', 'loading', 'outline', 'oval', 'size', 'type', 'variant']
    })
], IxIconButton);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxIconButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-icon-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['a11yLabel', 'color', 'disabled', 'ghost', 'icon', 'iconColor', 'loading', 'outline', 'oval', 'size', 'type', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxIconToggleButton = class IxIconToggleButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['pressedChange']);
    }
};
/** @nocollapse */ IxIconToggleButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxIconToggleButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxIconToggleButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxIconToggleButton, selector: "ix-icon-toggle-button", inputs: { disabled: "disabled", ghost: "ghost", icon: "icon", loading: "loading", outline: "outline", pressed: "pressed", size: "size", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxIconToggleButton = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'pressed', 'size', 'variant']
    })
], IxIconToggleButton);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxIconToggleButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-icon-toggle-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'pressed', 'size', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxInputGroup = class IxInputGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxInputGroup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxInputGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxInputGroup.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxInputGroup, selector: "ix-input-group", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxInputGroup = __decorate([
    ProxyCmp({})
], IxInputGroup);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxInputGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-input-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxKeyValue = class IxKeyValue {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxKeyValue.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxKeyValue, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxKeyValue.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxKeyValue, selector: "ix-key-value", inputs: { icon: "icon", label: "label", labelPosition: "labelPosition", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxKeyValue = __decorate([
    ProxyCmp({
        inputs: ['icon', 'label', 'labelPosition', 'value']
    })
], IxKeyValue);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxKeyValue, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-key-value',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['icon', 'label', 'labelPosition', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxKeyValueList = class IxKeyValueList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxKeyValueList.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxKeyValueList, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxKeyValueList.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxKeyValueList, selector: "ix-key-value-list", inputs: { striped: "striped" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxKeyValueList = __decorate([
    ProxyCmp({
        inputs: ['striped']
    })
], IxKeyValueList);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxKeyValueList, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-key-value-list',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['striped'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxKpi = class IxKpi {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxKpi.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxKpi, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxKpi.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxKpi, selector: "ix-kpi", inputs: { label: "label", orientation: "orientation", state: "state", unit: "unit", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxKpi = __decorate([
    ProxyCmp({
        inputs: ['label', 'orientation', 'state', 'unit', 'value']
    })
], IxKpi);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxKpi, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-kpi',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['label', 'orientation', 'state', 'unit', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxLayoutGrid = class IxLayoutGrid {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxLayoutGrid.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxLayoutGrid, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxLayoutGrid.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxLayoutGrid, selector: "ix-layout-grid", inputs: { columns: "columns", gap: "gap", noMargin: "noMargin" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxLayoutGrid = __decorate([
    ProxyCmp({
        inputs: ['columns', 'gap', 'noMargin']
    })
], IxLayoutGrid);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxLayoutGrid, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-layout-grid',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['columns', 'gap', 'noMargin'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxLinkButton = class IxLinkButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxLinkButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxLinkButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxLinkButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxLinkButton, selector: "ix-link-button", inputs: { disabled: "disabled", target: "target", url: "url" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxLinkButton = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'target', 'url']
    })
], IxLinkButton);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxLinkButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-link-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'target', 'url'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMapNavigation = class IxMapNavigation {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['navigationToggled', 'contextMenuClick']);
    }
};
/** @nocollapse */ IxMapNavigation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMapNavigation, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMapNavigation.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMapNavigation, selector: "ix-map-navigation", inputs: { applicationName: "applicationName", hideContextMenu: "hideContextMenu", navigationTitle: "navigationTitle" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMapNavigation = __decorate([
    ProxyCmp({
        inputs: ['applicationName', 'hideContextMenu', 'navigationTitle'],
        methods: ['toggleSidebar', 'openOverlay', 'closeOverlay']
    })
], IxMapNavigation);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMapNavigation, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-map-navigation',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['applicationName', 'hideContextMenu', 'navigationTitle'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMapNavigationOverlay = class IxMapNavigationOverlay {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['closeClick']);
    }
};
/** @nocollapse */ IxMapNavigationOverlay.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMapNavigationOverlay, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMapNavigationOverlay.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMapNavigationOverlay, selector: "ix-map-navigation-overlay", inputs: { color: "color", icon: "icon", iconColor: "iconColor", name: "name" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMapNavigationOverlay = __decorate([
    ProxyCmp({
        inputs: ['color', 'icon', 'iconColor', 'name']
    })
], IxMapNavigationOverlay);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMapNavigationOverlay, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-map-navigation-overlay',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'icon', 'iconColor', 'name'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMenu = class IxMenu {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['expandChange', 'mapExpandChange']);
    }
};
/** @nocollapse */ IxMenu.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenu, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMenu.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMenu, selector: "ix-menu", inputs: { applicationDescription: "applicationDescription", applicationName: "applicationName", enableMapExpand: "enableMapExpand", enableSettings: "enableSettings", enableToggleTheme: "enableToggleTheme", expand: "expand", i18nCollapse: "i18nCollapse", i18nExpand: "i18nExpand", i18nExpandSidebar: "i18nExpandSidebar", i18nLegal: "i18nLegal", i18nSettings: "i18nSettings", i18nToggleTheme: "i18nToggleTheme", maxVisibleMenuItems: "maxVisibleMenuItems", pinned: "pinned", showAbout: "showAbout", showSettings: "showSettings", startExpanded: "startExpanded" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMenu = __decorate([
    ProxyCmp({
        inputs: ['applicationDescription', 'applicationName', 'enableMapExpand', 'enableSettings', 'enableToggleTheme', 'expand', 'i18nCollapse', 'i18nExpand', 'i18nExpandSidebar', 'i18nLegal', 'i18nSettings', 'i18nToggleTheme', 'maxVisibleMenuItems', 'pinned', 'showAbout', 'showSettings', 'startExpanded'],
        methods: ['toggleMapExpand', 'toggleMenu', 'toggleSettings', 'toggleAbout']
    })
], IxMenu);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenu, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-menu',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['applicationDescription', 'applicationName', 'enableMapExpand', 'enableSettings', 'enableToggleTheme', 'expand', 'i18nCollapse', 'i18nExpand', 'i18nExpandSidebar', 'i18nLegal', 'i18nSettings', 'i18nToggleTheme', 'maxVisibleMenuItems', 'pinned', 'showAbout', 'showSettings', 'startExpanded'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMenuAbout = class IxMenuAbout {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['close']);
    }
};
/** @nocollapse */ IxMenuAbout.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuAbout, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMenuAbout.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMenuAbout, selector: "ix-menu-about", inputs: { activeTabLabel: "activeTabLabel", label: "label", show: "show" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMenuAbout = __decorate([
    ProxyCmp({
        inputs: ['activeTabLabel', 'label', 'show']
    })
], IxMenuAbout);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuAbout, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-menu-about',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['activeTabLabel', 'label', 'show'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMenuAboutItem = class IxMenuAboutItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['labelChange']);
    }
};
/** @nocollapse */ IxMenuAboutItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuAboutItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMenuAboutItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMenuAboutItem, selector: "ix-menu-about-item", inputs: { label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMenuAboutItem = __decorate([
    ProxyCmp({
        inputs: ['label']
    })
], IxMenuAboutItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuAboutItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-menu-about-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['label'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMenuAboutNews = class IxMenuAboutNews {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['showMore', 'closePopover']);
    }
};
/** @nocollapse */ IxMenuAboutNews.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuAboutNews, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMenuAboutNews.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMenuAboutNews, selector: "ix-menu-about-news", inputs: { aboutItemLabel: "aboutItemLabel", expanded: "expanded", i18nShowMore: "i18nShowMore", label: "label", offsetBottom: "offsetBottom", show: "show" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMenuAboutNews = __decorate([
    ProxyCmp({
        inputs: ['aboutItemLabel', 'expanded', 'i18nShowMore', 'label', 'offsetBottom', 'show']
    })
], IxMenuAboutNews);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuAboutNews, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-menu-about-news',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['aboutItemLabel', 'expanded', 'i18nShowMore', 'label', 'offsetBottom', 'show'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMenuAvatar = class IxMenuAvatar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['logoutClick']);
    }
};
/** @nocollapse */ IxMenuAvatar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuAvatar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMenuAvatar.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMenuAvatar, selector: "ix-menu-avatar", inputs: { bottom: "bottom", i18nLogout: "i18nLogout", image: "image", initials: "initials", showLogoutButton: "showLogoutButton", top: "top" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMenuAvatar = __decorate([
    ProxyCmp({
        inputs: ['bottom', 'i18nLogout', 'image', 'initials', 'showLogoutButton', 'top']
    })
], IxMenuAvatar);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuAvatar, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-menu-avatar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['bottom', 'i18nLogout', 'image', 'initials', 'showLogoutButton', 'top'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMenuAvatarItem = class IxMenuAvatarItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['itemClick']);
    }
};
/** @nocollapse */ IxMenuAvatarItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuAvatarItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMenuAvatarItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMenuAvatarItem, selector: "ix-menu-avatar-item", inputs: { icon: "icon", label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMenuAvatarItem = __decorate([
    ProxyCmp({
        inputs: ['icon', 'label']
    })
], IxMenuAvatarItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuAvatarItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-menu-avatar-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['icon', 'label'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMenuCategory = class IxMenuCategory {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxMenuCategory.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuCategory, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMenuCategory.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMenuCategory, selector: "ix-menu-category", inputs: { icon: "icon", label: "label", notifications: "notifications" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMenuCategory = __decorate([
    ProxyCmp({
        inputs: ['icon', 'label', 'notifications']
    })
], IxMenuCategory);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuCategory, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-menu-category',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['icon', 'label', 'notifications'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMenuItem = class IxMenuItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxMenuItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMenuItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMenuItem, selector: "ix-menu-item", inputs: { active: "active", bottom: "bottom", disabled: "disabled", home: "home", icon: "icon", notifications: "notifications", tabIcon: "tabIcon" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMenuItem = __decorate([
    ProxyCmp({
        inputs: ['active', 'bottom', 'disabled', 'home', 'icon', 'notifications', 'tabIcon']
    })
], IxMenuItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-menu-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['active', 'bottom', 'disabled', 'home', 'icon', 'notifications', 'tabIcon'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMenuSettings = class IxMenuSettings {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['close']);
    }
};
/** @nocollapse */ IxMenuSettings.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuSettings, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMenuSettings.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMenuSettings, selector: "ix-menu-settings", inputs: { activeTabLabel: "activeTabLabel", label: "label", show: "show" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMenuSettings = __decorate([
    ProxyCmp({
        inputs: ['activeTabLabel', 'label', 'show']
    })
], IxMenuSettings);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuSettings, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-menu-settings',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['activeTabLabel', 'label', 'show'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMenuSettingsItem = class IxMenuSettingsItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['labelChange']);
    }
};
/** @nocollapse */ IxMenuSettingsItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuSettingsItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMenuSettingsItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMenuSettingsItem, selector: "ix-menu-settings-item", inputs: { label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMenuSettingsItem = __decorate([
    ProxyCmp({
        inputs: ['label']
    })
], IxMenuSettingsItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMenuSettingsItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-menu-settings-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['label'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxMessageBar = class IxMessageBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['closedChange']);
    }
};
/** @nocollapse */ IxMessageBar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMessageBar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxMessageBar.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxMessageBar, selector: "ix-message-bar", inputs: { dismissible: "dismissible", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxMessageBar = __decorate([
    ProxyCmp({
        inputs: ['dismissible', 'type']
    })
], IxMessageBar);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxMessageBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-message-bar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['dismissible', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxModal = class IxModal {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['dialogClose', 'dialogDismiss']);
    }
};
/** @nocollapse */ IxModal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModal, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxModal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxModal, selector: "ix-modal", inputs: { animation: "animation", backdrop: "backdrop", beforeDismiss: "beforeDismiss", centered: "centered", closeOnBackdropClick: "closeOnBackdropClick", closeOnEscape: "closeOnEscape", keyboard: "keyboard", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxModal = __decorate([
    ProxyCmp({
        inputs: ['animation', 'backdrop', 'beforeDismiss', 'centered', 'closeOnBackdropClick', 'closeOnEscape', 'keyboard', 'size'],
        methods: ['showModal', 'dismissModal', 'closeModal']
    })
], IxModal);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModal, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-modal',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['animation', 'backdrop', 'beforeDismiss', 'centered', 'closeOnBackdropClick', 'closeOnEscape', 'keyboard', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxModalContent = class IxModalContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxModalContent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModalContent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxModalContent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxModalContent, selector: "ix-modal-content", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxModalContent = __decorate([
    ProxyCmp({})
], IxModalContent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModalContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-modal-content',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxModalExample = class IxModalExample {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxModalExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModalExample, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxModalExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxModalExample, selector: "ix-modal-example", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxModalExample = __decorate([
    ProxyCmp({})
], IxModalExample);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModalExample, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-modal-example',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxModalFooter = class IxModalFooter {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxModalFooter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModalFooter, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxModalFooter.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxModalFooter, selector: "ix-modal-footer", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxModalFooter = __decorate([
    ProxyCmp({})
], IxModalFooter);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModalFooter, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-modal-footer',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxModalHeader = class IxModalHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['closeClick']);
    }
};
/** @nocollapse */ IxModalHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModalHeader, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxModalHeader.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxModalHeader, selector: "ix-modal-header", inputs: { hideClose: "hideClose", icon: "icon", iconColor: "iconColor" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxModalHeader = __decorate([
    ProxyCmp({
        inputs: ['hideClose', 'icon', 'iconColor']
    })
], IxModalHeader);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModalHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-modal-header',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['hideClose', 'icon', 'iconColor'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxPagination = class IxPagination {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['pageSelected', 'itemCountChanged']);
    }
};
/** @nocollapse */ IxPagination.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxPagination, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxPagination.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxPagination, selector: "ix-pagination", inputs: { advanced: "advanced", count: "count", i18nItems: "i18nItems", i18nOf: "i18nOf", i18nPage: "i18nPage", itemCount: "itemCount", selectedPage: "selectedPage", showItemCount: "showItemCount" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxPagination = __decorate([
    ProxyCmp({
        inputs: ['advanced', 'count', 'i18nItems', 'i18nOf', 'i18nPage', 'itemCount', 'selectedPage', 'showItemCount']
    })
], IxPagination);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxPagination, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-pagination',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['advanced', 'count', 'i18nItems', 'i18nOf', 'i18nPage', 'itemCount', 'selectedPage', 'showItemCount'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxPane = class IxPane {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['expandedChanged', 'variantChanged', 'borderlessChanged']);
    }
};
/** @nocollapse */ IxPane.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxPane, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxPane.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxPane, selector: "ix-pane", inputs: { borderless: "borderless", composition: "composition", expanded: "expanded", heading: "heading", hideOnCollapse: "hideOnCollapse", icon: "icon", size: "size", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxPane = __decorate([
    ProxyCmp({
        inputs: ['borderless', 'composition', 'expanded', 'heading', 'hideOnCollapse', 'icon', 'size', 'variant']
    })
], IxPane);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxPane, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-pane',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['borderless', 'composition', 'expanded', 'heading', 'hideOnCollapse', 'icon', 'size', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxPaneLayout = class IxPaneLayout {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxPaneLayout.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxPaneLayout, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxPaneLayout.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxPaneLayout, selector: "ix-pane-layout", inputs: { borderless: "borderless", layout: "layout", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxPaneLayout = __decorate([
    ProxyCmp({
        inputs: ['borderless', 'layout', 'variant']
    })
], IxPaneLayout);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxPaneLayout, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-pane-layout',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['borderless', 'layout', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxPill = class IxPill {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxPill.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxPill, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxPill.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxPill, selector: "ix-pill", inputs: { alignLeft: "alignLeft", background: "background", color: "color", icon: "icon", outline: "outline", pillColor: "pillColor", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxPill = __decorate([
    ProxyCmp({
        inputs: ['alignLeft', 'background', 'color', 'icon', 'outline', 'pillColor', 'variant']
    })
], IxPill);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxPill, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-pill',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alignLeft', 'background', 'color', 'icon', 'outline', 'pillColor', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxPushCard = class IxPushCard {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxPushCard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxPushCard, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxPushCard.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxPushCard, selector: "ix-push-card", inputs: { collapse: "collapse", heading: "heading", icon: "icon", notification: "notification", subheading: "subheading", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxPushCard = __decorate([
    ProxyCmp({
        inputs: ['collapse', 'heading', 'icon', 'notification', 'subheading', 'variant']
    })
], IxPushCard);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxPushCard, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-push-card',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['collapse', 'heading', 'icon', 'notification', 'subheading', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxRow = class IxRow {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxRow.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxRow, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxRow.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxRow, selector: "ix-row", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxRow = __decorate([
    ProxyCmp({})
], IxRow);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxRow, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-row',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxSelect = class IxSelect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['valueChange', 'itemSelectionChange', 'inputChange', 'addItem']);
    }
};
/** @nocollapse */ IxSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSelect, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxSelect, selector: "ix-select", inputs: { allowClear: "allowClear", disabled: "disabled", editable: "editable", hideListHeader: "hideListHeader", i18nNoMatches: "i18nNoMatches", i18nPlaceholder: "i18nPlaceholder", i18nPlaceholderEditable: "i18nPlaceholderEditable", i18nSelectListHeader: "i18nSelectListHeader", mode: "mode", readonly: "readonly", selectedIndices: "selectedIndices", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxSelect = __decorate([
    ProxyCmp({
        inputs: ['allowClear', 'disabled', 'editable', 'hideListHeader', 'i18nNoMatches', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nSelectListHeader', 'mode', 'readonly', 'selectedIndices', 'value']
    })
], IxSelect);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-select',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['allowClear', 'disabled', 'editable', 'hideListHeader', 'i18nNoMatches', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nSelectListHeader', 'mode', 'readonly', 'selectedIndices', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxSelectItem = class IxSelectItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['itemClick']);
    }
};
/** @nocollapse */ IxSelectItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSelectItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxSelectItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxSelectItem, selector: "ix-select-item", inputs: { label: "label", selected: "selected", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxSelectItem = __decorate([
    ProxyCmp({
        inputs: ['label', 'selected', 'value']
    })
], IxSelectItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSelectItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-select-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['label', 'selected', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxSlider = class IxSlider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['valueChange']);
    }
};
/** @nocollapse */ IxSlider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSlider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxSlider.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxSlider, selector: "ix-slider", inputs: { disabled: "disabled", error: "error", marker: "marker", max: "max", min: "min", step: "step", trace: "trace", traceReference: "traceReference", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxSlider = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'error', 'marker', 'max', 'min', 'step', 'trace', 'traceReference', 'value']
    })
], IxSlider);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSlider, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-slider',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'error', 'marker', 'max', 'min', 'step', 'trace', 'traceReference', 'value'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxSpinner = class IxSpinner {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxSpinner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSpinner, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxSpinner.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxSpinner, selector: "ix-spinner", inputs: { size: "size", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxSpinner = __decorate([
    ProxyCmp({
        inputs: ['size', 'variant']
    })
], IxSpinner);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSpinner, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-spinner',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['size', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxSplitButton = class IxSplitButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['buttonClick']);
    }
};
/** @nocollapse */ IxSplitButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSplitButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxSplitButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxSplitButton, selector: "ix-split-button", inputs: { disabled: "disabled", ghost: "ghost", icon: "icon", label: "label", outline: "outline", placement: "placement", splitIcon: "splitIcon", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxSplitButton = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'splitIcon', 'variant']
    })
], IxSplitButton);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSplitButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-split-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'splitIcon', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxSplitButtonItem = class IxSplitButtonItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['itemClick']);
    }
};
/** @nocollapse */ IxSplitButtonItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSplitButtonItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxSplitButtonItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxSplitButtonItem, selector: "ix-split-button-item", inputs: { icon: "icon", label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxSplitButtonItem = __decorate([
    ProxyCmp({
        inputs: ['icon', 'label']
    })
], IxSplitButtonItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxSplitButtonItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-split-button-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['icon', 'label'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxTabItem = class IxTabItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['tabClick']);
    }
};
/** @nocollapse */ IxTabItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTabItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxTabItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxTabItem, selector: "ix-tab-item", inputs: { counter: "counter", disabled: "disabled", icon: "icon", layout: "layout", placement: "placement", rounded: "rounded", selected: "selected", small: "small" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxTabItem = __decorate([
    ProxyCmp({
        inputs: ['counter', 'disabled', 'icon', 'layout', 'placement', 'rounded', 'selected', 'small']
    })
], IxTabItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTabItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-tab-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['counter', 'disabled', 'icon', 'layout', 'placement', 'rounded', 'selected', 'small'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxTabs = class IxTabs {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['selectedChange']);
    }
};
/** @nocollapse */ IxTabs.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTabs, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxTabs.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxTabs, selector: "ix-tabs", inputs: { layout: "layout", placement: "placement", rounded: "rounded", selected: "selected", small: "small" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxTabs = __decorate([
    ProxyCmp({
        inputs: ['layout', 'placement', 'rounded', 'selected', 'small']
    })
], IxTabs);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTabs, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-tabs',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['layout', 'placement', 'rounded', 'selected', 'small'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxTile = class IxTile {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxTile.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTile, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxTile.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxTile, selector: "ix-tile", inputs: { size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxTile = __decorate([
    ProxyCmp({
        inputs: ['size']
    })
], IxTile);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTile, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-tile',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxTimePicker = class IxTimePicker {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['timeSelect', 'done', 'timeChange']);
    }
};
/** @nocollapse */ IxTimePicker.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTimePicker, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxTimePicker.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxTimePicker, selector: "ix-time-picker", inputs: { corners: "corners", format: "format", individual: "individual", showHour: "showHour", showMinutes: "showMinutes", showSeconds: "showSeconds", showTimeReference: "showTimeReference", standaloneAppearance: "standaloneAppearance", textSelectTime: "textSelectTime", textTime: "textTime", time: "time", timeReference: "timeReference" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxTimePicker = __decorate([
    ProxyCmp({
        inputs: ['corners', 'format', 'individual', 'showHour', 'showMinutes', 'showSeconds', 'showTimeReference', 'standaloneAppearance', 'textSelectTime', 'textTime', 'time', 'timeReference'],
        methods: ['getCurrentTime']
    })
], IxTimePicker);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTimePicker, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-time-picker',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['corners', 'format', 'individual', 'showHour', 'showMinutes', 'showSeconds', 'showTimeReference', 'standaloneAppearance', 'textSelectTime', 'textTime', 'time', 'timeReference'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxToast = class IxToast {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['closeToast']);
    }
};
/** @nocollapse */ IxToast.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxToast, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxToast.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxToast, selector: "ix-toast", inputs: { autoClose: "autoClose", autoCloseDelay: "autoCloseDelay", icon: "icon", iconColor: "iconColor", toastTitle: "toastTitle", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxToast = __decorate([
    ProxyCmp({
        inputs: ['autoClose', 'autoCloseDelay', 'icon', 'iconColor', 'toastTitle', 'type']
    })
], IxToast);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxToast, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-toast',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autoClose', 'autoCloseDelay', 'icon', 'iconColor', 'toastTitle', 'type'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxToastContainer = class IxToastContainer {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxToastContainer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxToastContainer, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxToastContainer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxToastContainer, selector: "ix-toast-container", inputs: { containerClass: "containerClass", containerId: "containerId", position: "position" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxToastContainer = __decorate([
    ProxyCmp({
        inputs: ['containerClass', 'containerId', 'position'],
        methods: ['showToast']
    })
], IxToastContainer);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxToastContainer, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-toast-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['containerClass', 'containerId', 'position'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxToggle = class IxToggle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['checkedChange']);
    }
};
/** @nocollapse */ IxToggle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxToggle, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxToggle.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxToggle, selector: "ix-toggle", inputs: { checked: "checked", disabled: "disabled", hideText: "hideText", indeterminate: "indeterminate", textIndeterminate: "textIndeterminate", textOff: "textOff", textOn: "textOn" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxToggle = __decorate([
    ProxyCmp({
        inputs: ['checked', 'disabled', 'hideText', 'indeterminate', 'textIndeterminate', 'textOff', 'textOn']
    })
], IxToggle);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxToggle, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-toggle',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['checked', 'disabled', 'hideText', 'indeterminate', 'textIndeterminate', 'textOff', 'textOn'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxToggleButton = class IxToggleButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['pressedChange']);
    }
};
/** @nocollapse */ IxToggleButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxToggleButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxToggleButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxToggleButton, selector: "ix-toggle-button", inputs: { disabled: "disabled", ghost: "ghost", icon: "icon", loading: "loading", outline: "outline", pressed: "pressed", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxToggleButton = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'pressed', 'variant']
    })
], IxToggleButton);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxToggleButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-toggle-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'pressed', 'variant'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxTooltip = class IxTooltip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxTooltip.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTooltip, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxTooltip.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxTooltip, selector: "ix-tooltip", inputs: { for: "for", interactive: "interactive", placement: "placement", titleContent: "titleContent" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxTooltip = __decorate([
    ProxyCmp({
        inputs: ['for', 'interactive', 'placement', 'titleContent']
    })
], IxTooltip);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTooltip, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-tooltip',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['for', 'interactive', 'placement', 'titleContent'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxTreeItem = class IxTreeItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['toggle', 'itemClick']);
    }
};
/** @nocollapse */ IxTreeItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTreeItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxTreeItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxTreeItem, selector: "ix-tree-item", inputs: { context: "context", hasChildren: "hasChildren", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxTreeItem = __decorate([
    ProxyCmp({
        inputs: ['context', 'hasChildren', 'text']
    })
], IxTreeItem);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTreeItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-tree-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['context', 'hasChildren', 'text'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxTypography = class IxTypography {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxTypography.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTypography, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxTypography.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxTypography, selector: "ix-typography", inputs: { bold: "bold", color: "color", format: "format", textColor: "textColor", textDecoration: "textDecoration" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxTypography = __decorate([
    ProxyCmp({
        inputs: ['bold', 'color', 'format', 'textColor', 'textDecoration']
    })
], IxTypography);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTypography, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-typography',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['bold', 'color', 'format', 'textColor', 'textDecoration'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxUpload = class IxUpload {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['filesChanged']);
    }
};
/** @nocollapse */ IxUpload.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxUpload, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxUpload.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxUpload, selector: "ix-upload", inputs: { accept: "accept", disabled: "disabled", i18nUploadDisabled: "i18nUploadDisabled", i18nUploadFile: "i18nUploadFile", loadingText: "loadingText", multiline: "multiline", multiple: "multiple", selectFileText: "selectFileText", state: "state", uploadFailedText: "uploadFailedText", uploadSuccessText: "uploadSuccessText" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxUpload = __decorate([
    ProxyCmp({
        inputs: ['accept', 'disabled', 'i18nUploadDisabled', 'i18nUploadFile', 'loadingText', 'multiline', 'multiple', 'selectFileText', 'state', 'uploadFailedText', 'uploadSuccessText'],
        methods: ['setFilesToUpload']
    })
], IxUpload);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxUpload, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-upload',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['accept', 'disabled', 'i18nUploadDisabled', 'i18nUploadFile', 'loadingText', 'multiline', 'multiple', 'selectFileText', 'state', 'uploadFailedText', 'uploadSuccessText'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxValidationTooltip = class IxValidationTooltip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxValidationTooltip.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxValidationTooltip, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxValidationTooltip.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxValidationTooltip, selector: "ix-validation-tooltip", inputs: { message: "message", placement: "placement", suppressAutomaticPlacement: "suppressAutomaticPlacement" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxValidationTooltip = __decorate([
    ProxyCmp({
        inputs: ['message', 'placement', 'suppressAutomaticPlacement']
    })
], IxValidationTooltip);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxValidationTooltip, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-validation-tooltip',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['message', 'placement', 'suppressAutomaticPlacement'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxWorkflowStep = class IxWorkflowStep {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxWorkflowStep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxWorkflowStep, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxWorkflowStep.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxWorkflowStep, selector: "ix-workflow-step", inputs: { clickable: "clickable", disabled: "disabled", selected: "selected", status: "status", vertical: "vertical" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxWorkflowStep = __decorate([
    ProxyCmp({
        inputs: ['clickable', 'disabled', 'selected', 'status', 'vertical']
    })
], IxWorkflowStep);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxWorkflowStep, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-workflow-step',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['clickable', 'disabled', 'selected', 'status', 'vertical'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let IxWorkflowSteps = class IxWorkflowSteps {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['stepSelected']);
    }
};
/** @nocollapse */ IxWorkflowSteps.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxWorkflowSteps, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxWorkflowSteps.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxWorkflowSteps, selector: "ix-workflow-steps", inputs: { clickable: "clickable", selectedIndex: "selectedIndex", vertical: "vertical" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxWorkflowSteps = __decorate([
    ProxyCmp({
        inputs: ['clickable', 'selectedIndex', 'vertical']
    })
], IxWorkflowSteps);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxWorkflowSteps, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-workflow-steps',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['clickable', 'selectedIndex', 'vertical'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class IxDropdownTriggerDirective {
    constructor(element) {
        this.element = element;
    }
    ngOnChanges() {
        this.element.nativeElement.trigger = this.ixDropdownTrigger.el;
    }
}
/** @nocollapse */ IxDropdownTriggerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdownTriggerDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ IxDropdownTriggerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: IxDropdownTriggerDirective, selector: "[ixDropdownTrigger]", inputs: { ixDropdownTrigger: "ixDropdownTrigger" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxDropdownTriggerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ixDropdownTrigger]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { ixDropdownTrigger: [{
                type: Input
            }] } });

let IxIcon = class IxIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
/** @nocollapse */ IxIcon.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxIcon, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxIcon.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxIcon, selector: "ix-icon", inputs: { color: "color", name: "name", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxIcon = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['color', 'name', 'size'],
    })
], IxIcon);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-icon',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['color', 'name', 'size'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class IxActiveModal {
    constructor(modalData) {
        this.modalData = modalData;
    }
    get data() {
        return this.modalData;
    }
    /**
     * Close the active modal
     *
     * @param reason
     */
    close(reason) {
        closeModal(this.modalElement, reason);
    }
    /**
     * Dismiss the active modal
     *
     * @param reason
     */
    dismiss(reason) {
        dismissModal(this.modalElement, reason);
    }
}
class InternalIxActiveModal extends IxActiveModal {
    setModalElement(element) {
        this.modalElement = element;
    }
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class ModalService {
    constructor(appRef, componentFactoryResolver, injector) {
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    async open(config) {
        const context = {
            close: null,
            dismiss: null,
            data: config.data,
        };
        if (config.content instanceof Type) {
            return this.createContentByComponentType(config.content, config, context);
        }
        const modalInstance = await this.createContentByTemplateRef(config.content, config, context);
        return modalInstance;
    }
    async createContentByComponentType(componentType, config, context) {
        const activeModal = new InternalIxActiveModal(context.data);
        const modalFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        const modalInjector = Injector.create({
            providers: [
                {
                    provide: IxActiveModal,
                    useValue: activeModal,
                },
            ],
            parent: this.injector,
        });
        const instance = modalFactory.create(modalInjector);
        this.appRef.attachView(instance.hostView);
        const element = instance.injector.get(ElementRef);
        const modalInstance = await this.createModalInstance(context, element.nativeElement, instance.hostView, config);
        activeModal.setModalElement(modalInstance.htmlElement);
        return modalInstance;
    }
    async createContentByTemplateRef(templateRef, config, context) {
        const embeddedView = templateRef.createEmbeddedView({
            $implicit: context,
        });
        this.appRef.attachView(embeddedView);
        return await this.createModalInstance(context, embeddedView.rootNodes[0], embeddedView, config);
    }
    async createModalInstance(context, htmlElement, viewRef, config) {
        context.close = (result) => {
            closeModal(htmlElement, result);
        };
        context.dismiss = (result) => {
            dismissModal(htmlElement, result);
        };
        viewRef.detectChanges();
        const modalInstance = await showModal({
            ...config,
            content: htmlElement,
        });
        modalInstance.onClose.once(() => {
            viewRef.destroy();
        });
        modalInstance.onDismiss.once(() => {
            viewRef.destroy();
        });
        return modalInstance;
    }
}
/** @nocollapse */ ModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ModalService, deps: [{ token: i0.ApplicationRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ ModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ModalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Injector }]; } });

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
let didInitialize = false;
const appInitialize = (doc) => {
    return async () => {
        const win = doc.defaultView;
        if (win && typeof window !== 'undefined') {
            if (didInitialize) {
                return;
            }
            didInitialize = true;
            await applyPolyfills();
            await defineCustomElements();
            await defineCustomElements$1();
        }
    };
};

const DIRECTIVES = [
    IxActionCard,
    IxApplication,
    IxApplicationHeader,
    IxAvatar,
    IxBasicNavigation,
    IxBlind,
    IxBreadcrumb,
    IxBreadcrumbItem,
    IxButton,
    IxCard,
    IxCardAccordion,
    IxCardContent,
    IxCardList,
    IxCardTitle,
    IxCategoryFilter,
    IxChip,
    IxCol,
    IxContent,
    IxContentHeader,
    IxDateDropdown,
    IxDatePicker,
    IxDatetimePicker,
    IxDivider,
    IxDrawer,
    IxDropdown,
    IxDropdownButton,
    IxDropdownHeader,
    IxDropdownItem,
    IxDropdownQuickActions,
    IxEmptyState,
    IxEventList,
    IxEventListItem,
    IxExpandingSearch,
    IxFilterChip,
    IxFlipTile,
    IxFlipTileContent,
    IxFormField,
    IxGroup,
    IxGroupContextMenu,
    IxGroupItem,
    IxIconButton,
    IxIconToggleButton,
    IxInputGroup,
    IxKeyValue,
    IxKeyValueList,
    IxKpi,
    IxLayoutGrid,
    IxLinkButton,
    IxMapNavigation,
    IxMapNavigationOverlay,
    IxMenu,
    IxMenuAbout,
    IxMenuAboutItem,
    IxMenuAboutNews,
    IxMenuAvatar,
    IxMenuAvatarItem,
    IxMenuCategory,
    IxMenuItem,
    IxMenuSettings,
    IxMenuSettingsItem,
    IxMessageBar,
    IxModal,
    IxModalContent,
    IxModalExample,
    IxModalFooter,
    IxModalHeader,
    IxPagination,
    IxPane,
    IxPaneLayout,
    IxPill,
    IxPushCard,
    IxRow,
    IxSelect,
    IxSelectItem,
    IxSlider,
    IxSpinner,
    IxSplitButton,
    IxSplitButtonItem,
    IxTabItem,
    IxTabs,
    IxTile,
    IxTimePicker,
    IxToast,
    IxToastContainer,
    IxToggle,
    IxToggleButton,
    IxTooltip,
    IxTreeItem,
    IxTypography,
    IxUpload,
    IxValidationTooltip,
    IxWorkflowStep,
    IxWorkflowSteps
];

class SelectValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
}
/** @nocollapse */ SelectValueAccessor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: SelectValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ SelectValueAccessor.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: SelectValueAccessor, selector: "ix-select[ngModel],ix-select[formControlName],ix-select[formControl]", host: { listeners: { "valueChange": "handleChangeEvent($event.target.value)" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: SelectValueAccessor,
            multi: true
        }
    ], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: SelectValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'ix-select[ngModel],ix-select[formControlName],ix-select[formControl]',
                    host: {
                        '(valueChange)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: SelectValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @deprecated Use themeSwitcher from core package `import { themeSwitcher } from '@siemens/ix';`
 */
class ThemeService {
    constructor() {
        this.themeChanged = new EventEmitter();
        this.themeSwitcher = themeSwitcher;
        this.themeSwitcher.themeChanged.on((theme) => this.themeChanged.emit(theme));
    }
    toggleMode() {
        this.themeSwitcher.toggleMode();
    }
    setTheme(themeName) {
        this.themeSwitcher.setTheme(themeName);
    }
}
/** @nocollapse */ ThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ ThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ThemeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { themeChanged: [{
                type: Output
            }] } });

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class ToastService {
    setPosition(position) {
        getToastContainer().position = position;
    }
    getPosition() {
        return getToastContainer().position;
    }
    async show(config) {
        if (typeof config.message === 'string') {
            return toast(config);
        }
        const context = {
            close: null,
        };
        const embeddedView = config.message.createEmbeddedView({
            $implicit: context,
        });
        const node = embeddedView.rootNodes[0];
        const instance = await toast({
            ...config,
            message: node,
        });
        context.close = () => {
            instance.close();
        };
        embeddedView.detectChanges();
        instance.onClose.once(() => {
            embeddedView.destroy();
        });
        return instance;
    }
}
/** @nocollapse */ ToastService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ ToastService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ToastService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let IxTree = class IxTree {
    constructor(c, r, z) {
        this.z = z;
        this.renderCache = new Map();
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['contextChange', 'nodeRemoved']);
        this.onRemovedSubscription = this.nodeRemoved.subscribe((removedEvent) => {
            const { detail } = removedEvent;
            detail.forEach((removedItemElement) => {
                if (this.renderCache.has(removedItemElement)) {
                    this.renderCache.get(removedItemElement)?.destroy();
                    this.renderCache.delete(removedItemElement);
                }
            });
        });
    }
    set renderItem(template) {
        const itemRenderFunction = this.generateItemRenderer(template);
        this.el.renderItem = itemRenderFunction.bind(this);
    }
    ngOnDestroy() {
        this.onRemovedSubscription?.unsubscribe();
    }
    generateItemRenderer(templateRef) {
        return (_, itemData, __, context, update) => {
            const treeItem = document.createElement('ix-tree-item');
            treeItem.hasChildren = itemData.hasChildren;
            treeItem.context = context[itemData.id];
            const embeddedView = templateRef.createEmbeddedView({
                $implicit: itemData.data,
            });
            const container = embeddedView.rootNodes[0];
            embeddedView.detectChanges();
            update((itemData, context) => {
                treeItem.context = context[itemData.id];
                treeItem.hasChildren = itemData.hasChildren;
                embeddedView.context = {
                    $implicit: itemData.data,
                };
                embeddedView.detectChanges();
            });
            treeItem.appendChild(container);
            this.renderCache.set(treeItem, embeddedView);
            return treeItem;
        };
    }
};
/** @nocollapse */ IxTree.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTree, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IxTree.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: IxTree, selector: "ix-tree", inputs: { context: "context", model: "model", root: "root", renderItem: "renderItem" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
IxTree = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['context', 'model', 'root'],
    })
], IxTree);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxTree, decorators: [{
            type: Component,
            args: [{
                    selector: 'ix-tree',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['context', 'model', 'root'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { renderItem: [{
                type: Input
            }] } });

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const DECLARATIONS = [
    ...DIRECTIVES,
    IxTree,
    IxDropdownTriggerDirective,
    IxIcon,
    SelectValueAccessor,
    BooleanValueAccessor
];
class IxModule {
    static forRoot() {
        return {
            ngModule: IxModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInitialize,
                    multi: true,
                    deps: [DOCUMENT, NgZone],
                },
                ModalService,
                ThemeService,
                ToastService,
            ],
        };
    }
}
/** @nocollapse */ IxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ IxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModule, declarations: [IxActionCard, IxApplication, IxApplicationHeader, IxAvatar, IxBasicNavigation, IxBlind, IxBreadcrumb, IxBreadcrumbItem, IxButton, IxCard, IxCardAccordion, IxCardContent, IxCardList, IxCardTitle, IxCategoryFilter, IxChip, IxCol, IxContent, IxContentHeader, IxDateDropdown, IxDatePicker, IxDatetimePicker, IxDivider, IxDrawer, IxDropdown, IxDropdownButton, IxDropdownHeader, IxDropdownItem, IxDropdownQuickActions, IxEmptyState, IxEventList, IxEventListItem, IxExpandingSearch, IxFilterChip, IxFlipTile, IxFlipTileContent, IxFormField, IxGroup, IxGroupContextMenu, IxGroupItem, IxIconButton, IxIconToggleButton, IxInputGroup, IxKeyValue, IxKeyValueList, IxKpi, IxLayoutGrid, IxLinkButton, IxMapNavigation, IxMapNavigationOverlay, IxMenu, IxMenuAbout, IxMenuAboutItem, IxMenuAboutNews, IxMenuAvatar, IxMenuAvatarItem, IxMenuCategory, IxMenuItem, IxMenuSettings, IxMenuSettingsItem, IxMessageBar, IxModal, IxModalContent, IxModalExample, IxModalFooter, IxModalHeader, IxPagination, IxPane, IxPaneLayout, IxPill, IxPushCard, IxRow, IxSelect, IxSelectItem, IxSlider, IxSpinner, IxSplitButton, IxSplitButtonItem, IxTabItem, IxTabs, IxTile, IxTimePicker, IxToast, IxToastContainer, IxToggle, IxToggleButton, IxTooltip, IxTreeItem, IxTypography, IxUpload, IxValidationTooltip, IxWorkflowStep, IxWorkflowSteps, IxTree, IxDropdownTriggerDirective,
        IxIcon,
        SelectValueAccessor,
        BooleanValueAccessor], exports: [IxActionCard, IxApplication, IxApplicationHeader, IxAvatar, IxBasicNavigation, IxBlind, IxBreadcrumb, IxBreadcrumbItem, IxButton, IxCard, IxCardAccordion, IxCardContent, IxCardList, IxCardTitle, IxCategoryFilter, IxChip, IxCol, IxContent, IxContentHeader, IxDateDropdown, IxDatePicker, IxDatetimePicker, IxDivider, IxDrawer, IxDropdown, IxDropdownButton, IxDropdownHeader, IxDropdownItem, IxDropdownQuickActions, IxEmptyState, IxEventList, IxEventListItem, IxExpandingSearch, IxFilterChip, IxFlipTile, IxFlipTileContent, IxFormField, IxGroup, IxGroupContextMenu, IxGroupItem, IxIconButton, IxIconToggleButton, IxInputGroup, IxKeyValue, IxKeyValueList, IxKpi, IxLayoutGrid, IxLinkButton, IxMapNavigation, IxMapNavigationOverlay, IxMenu, IxMenuAbout, IxMenuAboutItem, IxMenuAboutNews, IxMenuAvatar, IxMenuAvatarItem, IxMenuCategory, IxMenuItem, IxMenuSettings, IxMenuSettingsItem, IxMessageBar, IxModal, IxModalContent, IxModalExample, IxModalFooter, IxModalHeader, IxPagination, IxPane, IxPaneLayout, IxPill, IxPushCard, IxRow, IxSelect, IxSelectItem, IxSlider, IxSpinner, IxSplitButton, IxSplitButtonItem, IxTabItem, IxTabs, IxTile, IxTimePicker, IxToast, IxToastContainer, IxToggle, IxToggleButton, IxTooltip, IxTreeItem, IxTypography, IxUpload, IxValidationTooltip, IxWorkflowStep, IxWorkflowSteps, IxTree, IxDropdownTriggerDirective,
        IxIcon,
        SelectValueAccessor,
        BooleanValueAccessor] });
/** @nocollapse */ IxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                }]
        }] });

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BooleanValueAccessor, IxActionCard, IxActiveModal, IxApplication, IxApplicationHeader, IxAvatar, IxBasicNavigation, IxBlind, IxBreadcrumb, IxBreadcrumbItem, IxButton, IxCard, IxCardAccordion, IxCardContent, IxCardList, IxCardTitle, IxCategoryFilter, IxChip, IxCol, IxContent, IxContentHeader, IxDateDropdown, IxDatePicker, IxDatetimePicker, IxDivider, IxDrawer, IxDropdown, IxDropdownButton, IxDropdownHeader, IxDropdownItem, IxDropdownQuickActions, IxDropdownTriggerDirective, IxEmptyState, IxEventList, IxEventListItem, IxExpandingSearch, IxFilterChip, IxFlipTile, IxFlipTileContent, IxFormField, IxGroup, IxGroupContextMenu, IxGroupItem, IxIcon, IxIconButton, IxIconToggleButton, IxInputGroup, IxKeyValue, IxKeyValueList, IxKpi, IxLayoutGrid, IxLinkButton, IxMapNavigation, IxMapNavigationOverlay, IxMenu, IxMenuAbout, IxMenuAboutItem, IxMenuAboutNews, IxMenuAvatar, IxMenuAvatarItem, IxMenuCategory, IxMenuItem, IxMenuSettings, IxMenuSettingsItem, IxMessageBar, IxModal, IxModalContent, IxModalExample, IxModalFooter, IxModalHeader, IxModule, IxPagination, IxPane, IxPaneLayout, IxPill, IxPushCard, IxRow, IxSelect, IxSelectItem, IxSlider, IxSpinner, IxSplitButton, IxSplitButtonItem, IxTabItem, IxTabs, IxTile, IxTimePicker, IxToast, IxToastContainer, IxToggle, IxToggleButton, IxTooltip, IxTree, IxTreeItem, IxTypography, IxUpload, IxValidationTooltip, IxWorkflowStep, IxWorkflowSteps, ModalService, SelectValueAccessor, ThemeService, ToastService };
//# sourceMappingURL=siemens-ix-angular.mjs.map
