import React, { createElement, useState, useRef, useEffect, useLayoutEffect, useImperativeHandle, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { defineCustomElement } from '@siemens/ix/components/ix-action-card.js';
import { defineCustomElement as defineCustomElement$1 } from '@siemens/ix/components/ix-application.js';
import { defineCustomElement as defineCustomElement$2 } from '@siemens/ix/components/ix-application-header.js';
import { defineCustomElement as defineCustomElement$3 } from '@siemens/ix/components/ix-avatar.js';
import { defineCustomElement as defineCustomElement$4 } from '@siemens/ix/components/ix-basic-navigation.js';
import { defineCustomElement as defineCustomElement$5 } from '@siemens/ix/components/ix-blind.js';
import { defineCustomElement as defineCustomElement$6 } from '@siemens/ix/components/ix-breadcrumb.js';
import { defineCustomElement as defineCustomElement$7 } from '@siemens/ix/components/ix-breadcrumb-item.js';
import { defineCustomElement as defineCustomElement$8 } from '@siemens/ix/components/ix-button.js';
import { defineCustomElement as defineCustomElement$9 } from '@siemens/ix/components/ix-card.js';
import { defineCustomElement as defineCustomElement$a } from '@siemens/ix/components/ix-card-accordion.js';
import { defineCustomElement as defineCustomElement$b } from '@siemens/ix/components/ix-card-content.js';
import { defineCustomElement as defineCustomElement$c } from '@siemens/ix/components/ix-card-list.js';
import { defineCustomElement as defineCustomElement$d } from '@siemens/ix/components/ix-card-title.js';
import { defineCustomElement as defineCustomElement$e } from '@siemens/ix/components/ix-category-filter.js';
import { defineCustomElement as defineCustomElement$f } from '@siemens/ix/components/ix-chip.js';
import { defineCustomElement as defineCustomElement$g } from '@siemens/ix/components/ix-col.js';
import { defineCustomElement as defineCustomElement$h } from '@siemens/ix/components/ix-content.js';
import { defineCustomElement as defineCustomElement$i } from '@siemens/ix/components/ix-content-header.js';
import { defineCustomElement as defineCustomElement$j } from '@siemens/ix/components/ix-date-dropdown.js';
import { defineCustomElement as defineCustomElement$k } from '@siemens/ix/components/ix-date-picker.js';
import { defineCustomElement as defineCustomElement$l } from '@siemens/ix/components/ix-datetime-picker.js';
import { defineCustomElement as defineCustomElement$m } from '@siemens/ix/components/ix-divider.js';
import { defineCustomElement as defineCustomElement$n } from '@siemens/ix/components/ix-drawer.js';
import { defineCustomElement as defineCustomElement$o } from '@siemens/ix/components/ix-dropdown.js';
import { defineCustomElement as defineCustomElement$p } from '@siemens/ix/components/ix-dropdown-button.js';
import { defineCustomElement as defineCustomElement$q } from '@siemens/ix/components/ix-dropdown-header.js';
import { defineCustomElement as defineCustomElement$r } from '@siemens/ix/components/ix-dropdown-item.js';
import { defineCustomElement as defineCustomElement$s } from '@siemens/ix/components/ix-dropdown-quick-actions.js';
import { defineCustomElement as defineCustomElement$t } from '@siemens/ix/components/ix-empty-state.js';
import { defineCustomElement as defineCustomElement$u } from '@siemens/ix/components/ix-event-list.js';
import { defineCustomElement as defineCustomElement$v } from '@siemens/ix/components/ix-event-list-item.js';
import { defineCustomElement as defineCustomElement$w } from '@siemens/ix/components/ix-expanding-search.js';
import { defineCustomElement as defineCustomElement$x } from '@siemens/ix/components/ix-filter-chip.js';
import { defineCustomElement as defineCustomElement$y } from '@siemens/ix/components/ix-flip-tile.js';
import { defineCustomElement as defineCustomElement$z } from '@siemens/ix/components/ix-flip-tile-content.js';
import { defineCustomElement as defineCustomElement$A } from '@siemens/ix/components/ix-form-field.js';
import { defineCustomElement as defineCustomElement$B } from '@siemens/ix/components/ix-group.js';
import { defineCustomElement as defineCustomElement$C } from '@siemens/ix/components/ix-group-context-menu.js';
import { defineCustomElement as defineCustomElement$D } from '@siemens/ix/components/ix-group-item.js';
import { defineCustomElement as defineCustomElement$E } from '@siemens/ix/components/ix-icon-button.js';
import { defineCustomElement as defineCustomElement$F } from '@siemens/ix/components/ix-icon-toggle-button.js';
import { defineCustomElement as defineCustomElement$G } from '@siemens/ix/components/ix-input-group.js';
import { defineCustomElement as defineCustomElement$H } from '@siemens/ix/components/ix-key-value.js';
import { defineCustomElement as defineCustomElement$I } from '@siemens/ix/components/ix-key-value-list.js';
import { defineCustomElement as defineCustomElement$J } from '@siemens/ix/components/ix-kpi.js';
import { defineCustomElement as defineCustomElement$K } from '@siemens/ix/components/ix-layout-grid.js';
import { defineCustomElement as defineCustomElement$L } from '@siemens/ix/components/ix-link-button.js';
import { defineCustomElement as defineCustomElement$M } from '@siemens/ix/components/ix-map-navigation.js';
import { defineCustomElement as defineCustomElement$N } from '@siemens/ix/components/ix-map-navigation-overlay.js';
import { defineCustomElement as defineCustomElement$O } from '@siemens/ix/components/ix-menu.js';
import { defineCustomElement as defineCustomElement$P } from '@siemens/ix/components/ix-menu-about.js';
import { defineCustomElement as defineCustomElement$Q } from '@siemens/ix/components/ix-menu-about-item.js';
import { defineCustomElement as defineCustomElement$R } from '@siemens/ix/components/ix-menu-about-news.js';
import { defineCustomElement as defineCustomElement$S } from '@siemens/ix/components/ix-menu-avatar.js';
import { defineCustomElement as defineCustomElement$T } from '@siemens/ix/components/ix-menu-avatar-item.js';
import { defineCustomElement as defineCustomElement$U } from '@siemens/ix/components/ix-menu-category.js';
import { defineCustomElement as defineCustomElement$V } from '@siemens/ix/components/ix-menu-item.js';
import { defineCustomElement as defineCustomElement$W } from '@siemens/ix/components/ix-menu-settings.js';
import { defineCustomElement as defineCustomElement$X } from '@siemens/ix/components/ix-menu-settings-item.js';
import { defineCustomElement as defineCustomElement$Y } from '@siemens/ix/components/ix-message-bar.js';
import { defineCustomElement as defineCustomElement$Z } from '@siemens/ix/components/ix-modal.js';
import { defineCustomElement as defineCustomElement$_ } from '@siemens/ix/components/ix-modal-content.js';
import { defineCustomElement as defineCustomElement$$ } from '@siemens/ix/components/ix-modal-example.js';
import { defineCustomElement as defineCustomElement$10 } from '@siemens/ix/components/ix-modal-footer.js';
import { defineCustomElement as defineCustomElement$11 } from '@siemens/ix/components/ix-modal-header.js';
import { defineCustomElement as defineCustomElement$12 } from '@siemens/ix/components/ix-pagination.js';
import { defineCustomElement as defineCustomElement$13 } from '@siemens/ix/components/ix-pane.js';
import { defineCustomElement as defineCustomElement$14 } from '@siemens/ix/components/ix-pane-layout.js';
import { defineCustomElement as defineCustomElement$15 } from '@siemens/ix/components/ix-pill.js';
import { defineCustomElement as defineCustomElement$16 } from '@siemens/ix/components/ix-push-card.js';
import { defineCustomElement as defineCustomElement$17 } from '@siemens/ix/components/ix-row.js';
import { defineCustomElement as defineCustomElement$18 } from '@siemens/ix/components/ix-select.js';
import { defineCustomElement as defineCustomElement$19 } from '@siemens/ix/components/ix-select-item.js';
import { defineCustomElement as defineCustomElement$1a } from '@siemens/ix/components/ix-slider.js';
import { defineCustomElement as defineCustomElement$1b } from '@siemens/ix/components/ix-spinner.js';
import { defineCustomElement as defineCustomElement$1c } from '@siemens/ix/components/ix-split-button.js';
import { defineCustomElement as defineCustomElement$1d } from '@siemens/ix/components/ix-split-button-item.js';
import { defineCustomElement as defineCustomElement$1e } from '@siemens/ix/components/ix-tab-item.js';
import { defineCustomElement as defineCustomElement$1f } from '@siemens/ix/components/ix-tabs.js';
import { defineCustomElement as defineCustomElement$1g } from '@siemens/ix/components/ix-tile.js';
import { defineCustomElement as defineCustomElement$1h } from '@siemens/ix/components/ix-time-picker.js';
import { defineCustomElement as defineCustomElement$1i } from '@siemens/ix/components/ix-toast.js';
import { defineCustomElement as defineCustomElement$1j } from '@siemens/ix/components/ix-toast-container.js';
import { defineCustomElement as defineCustomElement$1k } from '@siemens/ix/components/ix-toggle.js';
import { defineCustomElement as defineCustomElement$1l } from '@siemens/ix/components/ix-toggle-button.js';
import { defineCustomElement as defineCustomElement$1m } from '@siemens/ix/components/ix-tooltip.js';
import { defineCustomElement as defineCustomElement$1n } from '@siemens/ix/components/ix-typography.js';
import { defineCustomElement as defineCustomElement$1o } from '@siemens/ix/components/ix-upload.js';
import { defineCustomElement as defineCustomElement$1p } from '@siemens/ix/components/ix-validation-tooltip.js';
import { defineCustomElement as defineCustomElement$1q } from '@siemens/ix/components/ix-workflow-step.js';
import { defineCustomElement as defineCustomElement$1r } from '@siemens/ix/components/ix-workflow-steps.js';
import { registerFrameworkDelegate, showModal as showModal$1, toast } from '@siemens/ix';
import ReactDOMClient from 'react-dom/client';
import { defineCustomElement as defineCustomElement$1t } from '@siemens/ix/components/ix-application-sidebar.js';
import { defineCustomElement as defineCustomElement$1s } from '@siemens/ix/components/ix-application-switch-modal.js';
import { defineCustomElement as defineCustomElement$1v } from '@siemens/ix/components/ix-burger-menu.js';
import { defineCustomElement as defineCustomElement$1u } from '@siemens/ix/components/ix-date-time-card.js';
import { defineCustomElement as defineCustomElement$1w } from '@siemens/ix/components/ix-modal-loading.js';
import { defineCustomElement as defineCustomElement$1x } from '@siemens/ix-icons/dist/components/ix-icon';
import { defineCustomElement as defineCustomElement$1y } from '@siemens/ix/components/ix-tree.js';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const dashToPascalCase = (str) => str
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
const camelToDashCase = (str) => str.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`);

const attachProps = (node, newProps, oldProps = {}) => {
    // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
    if (node instanceof Element) {
        // add any classes in className to the class list
        const className = getClassName(node.classList, newProps, oldProps);
        if (className !== '') {
            node.className = className;
        }
        Object.keys(newProps).forEach((name) => {
            if (name === 'children' ||
                name === 'style' ||
                name === 'ref' ||
                name === 'class' ||
                name === 'className' ||
                name === 'forwardedRef') {
                return;
            }
            if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                const eventName = name.substring(2);
                const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
                if (!isCoveredByReact(eventNameLc)) {
                    syncEvent(node, eventNameLc, newProps[name]);
                }
            }
            else {
                node[name] = newProps[name];
                const propType = typeof newProps[name];
                if (propType === 'string') {
                    node.setAttribute(camelToDashCase(name), newProps[name]);
                }
            }
        });
    }
};
const getClassName = (classList, newProps, oldProps) => {
    const newClassProp = newProps.className || newProps.class;
    const oldClassProp = oldProps.className || oldProps.class;
    // map the classes to Maps for performance
    const currentClasses = arrayToMap(classList);
    const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(' ') : []);
    const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(' ') : []);
    const finalClassNames = [];
    // loop through each of the current classes on the component
    // to see if it should be a part of the classNames added
    currentClasses.forEach((currentClass) => {
        if (incomingPropClasses.has(currentClass)) {
            // add it as its already included in classnames coming in from newProps
            finalClassNames.push(currentClass);
            incomingPropClasses.delete(currentClass);
        }
        else if (!oldPropClasses.has(currentClass)) {
            // add it as it has NOT been removed by user
            finalClassNames.push(currentClass);
        }
    });
    incomingPropClasses.forEach((s) => finalClassNames.push(s));
    return finalClassNames.join(' ');
};
/**
 * Transforms a React event name to a browser event name.
 */
const transformReactEventName = (eventNameSuffix) => {
    switch (eventNameSuffix) {
        case 'doubleclick':
            return 'dblclick';
    }
    return eventNameSuffix;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix) => {
    if (typeof document === 'undefined') {
        return true;
    }
    else {
        const eventName = 'on' + transformReactEventName(eventNameSuffix);
        let isSupported = eventName in document;
        if (!isSupported) {
            const element = document.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }
        return isSupported;
    }
};
const syncEvent = (node, eventName, newEventHandler) => {
    const eventStore = node.__events || (node.__events = {});
    const oldEventHandler = eventStore[eventName];
    // Remove old listener so they don't double up.
    if (oldEventHandler) {
        node.removeEventListener(eventName, oldEventHandler);
    }
    // Bind new listener.
    node.addEventListener(eventName, (eventStore[eventName] = function handler(e) {
        if (newEventHandler) {
            newEventHandler.call(this, e);
        }
    }));
};
const arrayToMap = (arr) => {
    const map = new Map();
    arr.forEach((s) => map.set(s, s));
    return map;
};

const setRef = (ref, value) => {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        // Cast as a MutableRef so we can assign current
        ref.current = value;
    }
};
const mergeRefs = (...refs) => {
    return (value) => {
        refs.forEach((ref) => {
            setRef(ref, value);
        });
    };
};
const createForwardRef = (ReactComponent, displayName) => {
    const forwardRef = (props, ref) => {
        return React.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return React.forwardRef(forwardRef);
};

const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
    if (defineCustomElement !== undefined) {
        defineCustomElement();
    }
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React.Component {
        constructor(props) {
            super(props);
            this.setComponentElRef = (element) => {
                this.componentEl = element;
            };
        }
        componentDidMount() {
            this.componentDidUpdate(this.props);
        }
        componentDidUpdate(prevProps) {
            attachProps(this.componentEl, this.props, prevProps);
        }
        render() {
            const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
            let propsToPass = Object.keys(cProps).reduce((acc, name) => {
                const value = cProps[name];
                if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                    const eventName = name.substring(2).toLowerCase();
                    if (typeof document !== 'undefined' && isCoveredByReact(eventName)) {
                        acc[name] = value;
                    }
                }
                else {
                    // we should only render strings, booleans, and numbers as attrs in html.
                    // objects, functions, arrays etc get synced via properties on mount.
                    const type = typeof value;
                    if (type === 'string' || type === 'boolean' || type === 'number') {
                        acc[camelToDashCase(name)] = value;
                    }
                }
                return acc;
            }, {});
            if (manipulatePropsFunction) {
                propsToPass = manipulatePropsFunction(this.props, propsToPass);
            }
            const newProps = Object.assign(Object.assign({}, propsToPass), { ref: mergeRefs(forwardedRef, this.setComponentElRef), style });
            /**
             * We use createElement here instead of
             * React.createElement to work around a
             * bug in Vite (https://github.com/vitejs/vite/issues/6104).
             * React.createElement causes all elements to be rendered
             * as <tagname> instead of the actual Web Component.
             */
            return createElement(tagName, newProps, children);
        }
        static get displayName() {
            return displayName;
        }
    };
    // If context was passed to createReactComponent then conditionally add it to the Component Class
    if (ReactComponentContext) {
        ReactComponent.contextType = ReactComponentContext;
    }
    return createForwardRef(ReactComponent, displayName);
};

/* eslint-disable */
const IxActionCard = /*@__PURE__*/ createReactComponent('ix-action-card', undefined, undefined, defineCustomElement);
const IxApplication = /*@__PURE__*/ createReactComponent('ix-application', undefined, undefined, defineCustomElement$1);
const IxApplicationHeader = /*@__PURE__*/ createReactComponent('ix-application-header', undefined, undefined, defineCustomElement$2);
const IxAvatar = /*@__PURE__*/ createReactComponent('ix-avatar', undefined, undefined, defineCustomElement$3);
const IxBasicNavigation = /*@__PURE__*/ createReactComponent('ix-basic-navigation', undefined, undefined, defineCustomElement$4);
const IxBlind = /*@__PURE__*/ createReactComponent('ix-blind', undefined, undefined, defineCustomElement$5);
const IxBreadcrumb = /*@__PURE__*/ createReactComponent('ix-breadcrumb', undefined, undefined, defineCustomElement$6);
const IxBreadcrumbItem = /*@__PURE__*/ createReactComponent('ix-breadcrumb-item', undefined, undefined, defineCustomElement$7);
const IxButton = /*@__PURE__*/ createReactComponent('ix-button', undefined, undefined, defineCustomElement$8);
const IxCard = /*@__PURE__*/ createReactComponent('ix-card', undefined, undefined, defineCustomElement$9);
const IxCardAccordion = /*@__PURE__*/ createReactComponent('ix-card-accordion', undefined, undefined, defineCustomElement$a);
const IxCardContent = /*@__PURE__*/ createReactComponent('ix-card-content', undefined, undefined, defineCustomElement$b);
const IxCardList = /*@__PURE__*/ createReactComponent('ix-card-list', undefined, undefined, defineCustomElement$c);
const IxCardTitle = /*@__PURE__*/ createReactComponent('ix-card-title', undefined, undefined, defineCustomElement$d);
const IxCategoryFilter = /*@__PURE__*/ createReactComponent('ix-category-filter', undefined, undefined, defineCustomElement$e);
const IxChip = /*@__PURE__*/ createReactComponent('ix-chip', undefined, undefined, defineCustomElement$f);
const IxCol = /*@__PURE__*/ createReactComponent('ix-col', undefined, undefined, defineCustomElement$g);
const IxContent = /*@__PURE__*/ createReactComponent('ix-content', undefined, undefined, defineCustomElement$h);
const IxContentHeader = /*@__PURE__*/ createReactComponent('ix-content-header', undefined, undefined, defineCustomElement$i);
const IxDateDropdown = /*@__PURE__*/ createReactComponent('ix-date-dropdown', undefined, undefined, defineCustomElement$j);
const IxDatePicker = /*@__PURE__*/ createReactComponent('ix-date-picker', undefined, undefined, defineCustomElement$k);
const IxDatetimePicker = /*@__PURE__*/ createReactComponent('ix-datetime-picker', undefined, undefined, defineCustomElement$l);
const IxDivider = /*@__PURE__*/ createReactComponent('ix-divider', undefined, undefined, defineCustomElement$m);
const IxDrawer = /*@__PURE__*/ createReactComponent('ix-drawer', undefined, undefined, defineCustomElement$n);
const IxDropdown = /*@__PURE__*/ createReactComponent('ix-dropdown', undefined, undefined, defineCustomElement$o);
const IxDropdownButton = /*@__PURE__*/ createReactComponent('ix-dropdown-button', undefined, undefined, defineCustomElement$p);
const IxDropdownHeader = /*@__PURE__*/ createReactComponent('ix-dropdown-header', undefined, undefined, defineCustomElement$q);
const IxDropdownItem = /*@__PURE__*/ createReactComponent('ix-dropdown-item', undefined, undefined, defineCustomElement$r);
const IxDropdownQuickActions = /*@__PURE__*/ createReactComponent('ix-dropdown-quick-actions', undefined, undefined, defineCustomElement$s);
const IxEmptyState = /*@__PURE__*/ createReactComponent('ix-empty-state', undefined, undefined, defineCustomElement$t);
const IxEventList = /*@__PURE__*/ createReactComponent('ix-event-list', undefined, undefined, defineCustomElement$u);
const IxEventListItem = /*@__PURE__*/ createReactComponent('ix-event-list-item', undefined, undefined, defineCustomElement$v);
const IxExpandingSearch = /*@__PURE__*/ createReactComponent('ix-expanding-search', undefined, undefined, defineCustomElement$w);
const IxFilterChip = /*@__PURE__*/ createReactComponent('ix-filter-chip', undefined, undefined, defineCustomElement$x);
const IxFlipTile = /*@__PURE__*/ createReactComponent('ix-flip-tile', undefined, undefined, defineCustomElement$y);
const IxFlipTileContent = /*@__PURE__*/ createReactComponent('ix-flip-tile-content', undefined, undefined, defineCustomElement$z);
const IxFormField = /*@__PURE__*/ createReactComponent('ix-form-field', undefined, undefined, defineCustomElement$A);
const IxGroup = /*@__PURE__*/ createReactComponent('ix-group', undefined, undefined, defineCustomElement$B);
const IxGroupContextMenu = /*@__PURE__*/ createReactComponent('ix-group-context-menu', undefined, undefined, defineCustomElement$C);
const IxGroupItem = /*@__PURE__*/ createReactComponent('ix-group-item', undefined, undefined, defineCustomElement$D);
const IxIconButton = /*@__PURE__*/ createReactComponent('ix-icon-button', undefined, undefined, defineCustomElement$E);
const IxIconToggleButton = /*@__PURE__*/ createReactComponent('ix-icon-toggle-button', undefined, undefined, defineCustomElement$F);
const IxInputGroup = /*@__PURE__*/ createReactComponent('ix-input-group', undefined, undefined, defineCustomElement$G);
const IxKeyValue = /*@__PURE__*/ createReactComponent('ix-key-value', undefined, undefined, defineCustomElement$H);
const IxKeyValueList = /*@__PURE__*/ createReactComponent('ix-key-value-list', undefined, undefined, defineCustomElement$I);
const IxKpi = /*@__PURE__*/ createReactComponent('ix-kpi', undefined, undefined, defineCustomElement$J);
const IxLayoutGrid = /*@__PURE__*/ createReactComponent('ix-layout-grid', undefined, undefined, defineCustomElement$K);
const IxLinkButton = /*@__PURE__*/ createReactComponent('ix-link-button', undefined, undefined, defineCustomElement$L);
const IxMapNavigation = /*@__PURE__*/ createReactComponent('ix-map-navigation', undefined, undefined, defineCustomElement$M);
const IxMapNavigationOverlay = /*@__PURE__*/ createReactComponent('ix-map-navigation-overlay', undefined, undefined, defineCustomElement$N);
const IxMenu = /*@__PURE__*/ createReactComponent('ix-menu', undefined, undefined, defineCustomElement$O);
const IxMenuAbout = /*@__PURE__*/ createReactComponent('ix-menu-about', undefined, undefined, defineCustomElement$P);
const IxMenuAboutItem = /*@__PURE__*/ createReactComponent('ix-menu-about-item', undefined, undefined, defineCustomElement$Q);
const IxMenuAboutNews = /*@__PURE__*/ createReactComponent('ix-menu-about-news', undefined, undefined, defineCustomElement$R);
const IxMenuAvatar = /*@__PURE__*/ createReactComponent('ix-menu-avatar', undefined, undefined, defineCustomElement$S);
const IxMenuAvatarItem = /*@__PURE__*/ createReactComponent('ix-menu-avatar-item', undefined, undefined, defineCustomElement$T);
const IxMenuCategory = /*@__PURE__*/ createReactComponent('ix-menu-category', undefined, undefined, defineCustomElement$U);
const IxMenuItem = /*@__PURE__*/ createReactComponent('ix-menu-item', undefined, undefined, defineCustomElement$V);
const IxMenuSettings = /*@__PURE__*/ createReactComponent('ix-menu-settings', undefined, undefined, defineCustomElement$W);
const IxMenuSettingsItem = /*@__PURE__*/ createReactComponent('ix-menu-settings-item', undefined, undefined, defineCustomElement$X);
const IxMessageBar = /*@__PURE__*/ createReactComponent('ix-message-bar', undefined, undefined, defineCustomElement$Y);
const IxModal = /*@__PURE__*/ createReactComponent('ix-modal', undefined, undefined, defineCustomElement$Z);
const IxModalContent = /*@__PURE__*/ createReactComponent('ix-modal-content', undefined, undefined, defineCustomElement$_);
const IxModalExample = /*@__PURE__*/ createReactComponent('ix-modal-example', undefined, undefined, defineCustomElement$$);
const IxModalFooter = /*@__PURE__*/ createReactComponent('ix-modal-footer', undefined, undefined, defineCustomElement$10);
const IxModalHeader = /*@__PURE__*/ createReactComponent('ix-modal-header', undefined, undefined, defineCustomElement$11);
const IxPagination = /*@__PURE__*/ createReactComponent('ix-pagination', undefined, undefined, defineCustomElement$12);
const IxPane = /*@__PURE__*/ createReactComponent('ix-pane', undefined, undefined, defineCustomElement$13);
const IxPaneLayout = /*@__PURE__*/ createReactComponent('ix-pane-layout', undefined, undefined, defineCustomElement$14);
const IxPill = /*@__PURE__*/ createReactComponent('ix-pill', undefined, undefined, defineCustomElement$15);
const IxPushCard = /*@__PURE__*/ createReactComponent('ix-push-card', undefined, undefined, defineCustomElement$16);
const IxRow = /*@__PURE__*/ createReactComponent('ix-row', undefined, undefined, defineCustomElement$17);
const IxSelect = /*@__PURE__*/ createReactComponent('ix-select', undefined, undefined, defineCustomElement$18);
const IxSelectItem = /*@__PURE__*/ createReactComponent('ix-select-item', undefined, undefined, defineCustomElement$19);
const IxSlider = /*@__PURE__*/ createReactComponent('ix-slider', undefined, undefined, defineCustomElement$1a);
const IxSpinner = /*@__PURE__*/ createReactComponent('ix-spinner', undefined, undefined, defineCustomElement$1b);
const IxSplitButton = /*@__PURE__*/ createReactComponent('ix-split-button', undefined, undefined, defineCustomElement$1c);
const IxSplitButtonItem = /*@__PURE__*/ createReactComponent('ix-split-button-item', undefined, undefined, defineCustomElement$1d);
const IxTabItem = /*@__PURE__*/ createReactComponent('ix-tab-item', undefined, undefined, defineCustomElement$1e);
const IxTabs = /*@__PURE__*/ createReactComponent('ix-tabs', undefined, undefined, defineCustomElement$1f);
const IxTile = /*@__PURE__*/ createReactComponent('ix-tile', undefined, undefined, defineCustomElement$1g);
const IxTimePicker = /*@__PURE__*/ createReactComponent('ix-time-picker', undefined, undefined, defineCustomElement$1h);
const IxToast = /*@__PURE__*/ createReactComponent('ix-toast', undefined, undefined, defineCustomElement$1i);
const IxToastContainer = /*@__PURE__*/ createReactComponent('ix-toast-container', undefined, undefined, defineCustomElement$1j);
const IxToggle = /*@__PURE__*/ createReactComponent('ix-toggle', undefined, undefined, defineCustomElement$1k);
const IxToggleButton = /*@__PURE__*/ createReactComponent('ix-toggle-button', undefined, undefined, defineCustomElement$1l);
const IxTooltip = /*@__PURE__*/ createReactComponent('ix-tooltip', undefined, undefined, defineCustomElement$1m);
const IxTypography = /*@__PURE__*/ createReactComponent('ix-typography', undefined, undefined, defineCustomElement$1n);
const IxUpload = /*@__PURE__*/ createReactComponent('ix-upload', undefined, undefined, defineCustomElement$1o);
const IxValidationTooltip = /*@__PURE__*/ createReactComponent('ix-validation-tooltip', undefined, undefined, defineCustomElement$1p);
const IxWorkflowStep = /*@__PURE__*/ createReactComponent('ix-workflow-step', undefined, undefined, defineCustomElement$1q);
const IxWorkflowSteps = /*@__PURE__*/ createReactComponent('ix-workflow-steps', undefined, undefined, defineCustomElement$1r);

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
let viewInstance = 0;
function createViewInstance() {
    return `ix-react-view-${viewInstance++}`;
}
const mountedRootNodes = {};
async function fallbackRootDom(id, view) {
    return new Promise((resolve) => {
        const rootElement = document.createElement('DIV');
        rootElement.id = id;
        rootElement.style.display = 'contents';
        document.body.appendChild(rootElement);
        const root = ReactDOMClient.createRoot(rootElement);
        root.render(view);
        mountedRootNodes[id] = root;
        setTimeout(() => {
            const viewElement = rootElement.children[0];
            resolve(viewElement);
        });
    });
}
async function fallbackRemoveViewFromRootDom(view) {
    const parent = view.parentElement;
    const id = parent.id;
    if (id in mountedRootNodes) {
        mountedRootNodes[id].unmount();
        delete mountedRootNodes[id];
        parent.remove();
    }
}
class ReactFrameworkDelegate {
    constructor() {
        this.isUsingReactPortal = false;
        this.portalInitPromise = new Promise((resolve) => (this.resolvePortalInitPromise = resolve));
    }
    async attachView(view) {
        const id = createViewInstance();
        if (!this.isUsingReactPortal) {
            return fallbackRootDom(id, view);
        }
        await this.isPortalReady();
        if (this.attachViewToPortal) {
            const refElement = await this.attachViewToPortal(id, view);
            return refElement;
        }
        console.error('Portal could not be initialized');
    }
    async removeView(view) {
        if (!this.removeViewFromPortal) {
            return fallbackRemoveViewFromRootDom(view);
        }
        const parent = view.parentElement;
        const id = parent.getAttribute('data-portal-id');
        this.removeViewFromPortal(id);
    }
    portalReady() {
        var _a;
        (_a = this.resolvePortalInitPromise) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    async isPortalReady() {
        return this.portalInitPromise;
    }
}
const reactFrameworkDelegate = new ReactFrameworkDelegate();
registerFrameworkDelegate(reactFrameworkDelegate);

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const PORTAL_ID = 'ix-portal';
const IxOverlay = (props) => {
    const [portalRef, setPortalRef] = useState(null);
    const resolveElementRef = useRef({});
    const viewRefs = useRef({});
    const [views, setViews] = useState({});
    useEffect(() => {
        const addOverlay = (id, view) => {
            const _views = Object.assign({}, viewRefs.current);
            _views[id] = view;
            setViews(_views);
            viewRefs.current = _views;
        };
        const removeOverlay = (id) => {
            const _views = Object.assign({}, viewRefs.current);
            delete _views[id];
            setViews(_views);
            viewRefs.current = _views;
        };
        props.delegate.attachViewToPortal = async (id, view) => {
            addOverlay(id, view);
            return new Promise((resolve) => {
                const r = Object.assign({}, resolveElementRef.current);
                r[id] = resolve;
                resolveElementRef.current = r;
            });
        };
        props.delegate.removeViewFromPortal = async (id) => {
            removeOverlay(id);
        };
        props.delegate.portalReady();
    }, []);
    useLayoutEffect(() => {
        const portalRef = document.querySelector(`#${PORTAL_ID}`);
        if (portalRef) {
            setPortalRef(portalRef);
        }
    }, []);
    useLayoutEffect(() => {
        Object.keys(views).forEach((key) => {
            const resolveQueue = Object.assign({}, resolveElementRef.current);
            const element = document.querySelector(`[data-portal-id="${key}"]`);
            if (element && element.children.length === 1 && resolveQueue[key]) {
                const view = element.children[0];
                resolveQueue[key](view);
            }
        });
    }, [views]);
    if (!portalRef) {
        return null;
    }
    return (React.createElement(React.Fragment, null, Object.keys(views).map((key) => {
        const RenderView = views[key];
        return ReactDOM.createPortal(React.createElement("div", { "data-portal-id": key, style: { display: 'contents ' } }, RenderView), portalRef, key);
    })));
};

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const IxContext = React.createContext(null);

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class IxApplicationContext extends React.Component {
    constructor(props) {
        super(props);
        this.delegate = reactFrameworkDelegate;
        this.delegate.isUsingReactPortal = true;
    }
    render() {
        return (React.createElement(IxContext.Provider, { value: {
                delegate: this.delegate,
            } },
            this.props.children,
            React.createElement(IxOverlay, { delegate: this.delegate }),
            React.createElement("div", { id: PORTAL_ID })));
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
defineCustomElement$1s();
defineCustomElement$1t();
defineCustomElement$1u();
defineCustomElement$1v();
defineCustomElement$1w();

// eslint-disable-next-line no-inline-comments
const IxIcon = /*@__PURE__*/ createReactComponent('ix-icon', undefined, undefined, defineCustomElement$1x);

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Modal = React.forwardRef((props, ref) => {
    const wrapperRef = useRef(null);
    useImperativeHandle(ref, () => ({
        close(result) {
            var _a;
            (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.closeModal(result);
        },
        dismiss(result) {
            var _a;
            (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.dismissModal(result);
        },
        modalElement: null,
    }));
    return React.createElement(IxModal, { ref: wrapperRef }, props.children);
});

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
async function showModal(config) {
    return showModal$1(config);
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
async function showToast(config) {
    if (typeof config.message === 'string') {
        const toastInstance = await toast(config);
        return toastInstance;
    }
    const node = config.message;
    const toastContainer = document.createElement('DIV');
    const root = ReactDOMClient.createRoot(toastContainer);
    root.render(node);
    const toastInstance = await toast(Object.assign(Object.assign({}, config), { message: toastContainer }));
    toastInstance.onClose.once(() => {
        root.unmount();
    });
    return toastInstance;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-inline-comments
const InternalIxTree = /*@__PURE__*/ createReactComponent('ix-tree', undefined, undefined, defineCustomElement$1y);
const IxTree = (props) => {
    const cachedRootNodes = useRef(new Map());
    const renderItem = useCallback((_, data, __, context, update) => {
        const treeItem = document.createElement('ix-tree-item');
        treeItem.hasChildren = data.hasChildren;
        treeItem.context = context[data.id];
        update((itemData, context) => {
            treeItem.context = context[itemData.id];
            treeItem.hasChildren = itemData.hasChildren;
        });
        const container = document.createElement('DIV');
        const rootNode = ReactDOMClient.createRoot(container);
        if (props.renderItem) {
            rootNode.render(props.renderItem(data.data));
        }
        treeItem.appendChild(container);
        cachedRootNodes.current.set(treeItem, rootNode);
        return treeItem;
    }, []);
    return (React.createElement(InternalIxTree, Object.assign({}, props, { renderItem: props.renderItem ? renderItem : undefined, onNodeRemoved: (removed) => {
            const { detail } = removed;
            detail.forEach((removedItemElement) => {
                var _a;
                if (cachedRootNodes.current.has(removedItemElement)) {
                    (_a = cachedRootNodes.current.get(removedItemElement)) === null || _a === void 0 ? void 0 : _a.unmount();
                    cachedRootNodes.current.delete(removedItemElement);
                }
            });
        } })));
};

export { InternalIxTree, IxActionCard, IxApplication, IxApplicationContext, IxApplicationHeader, IxAvatar, IxBasicNavigation, IxBlind, IxBreadcrumb, IxBreadcrumbItem, IxButton, IxCard, IxCardAccordion, IxCardContent, IxCardList, IxCardTitle, IxCategoryFilter, IxChip, IxCol, IxContent, IxContentHeader, IxDateDropdown, IxDatePicker, IxDatetimePicker, IxDivider, IxDrawer, IxDropdown, IxDropdownButton, IxDropdownHeader, IxDropdownItem, IxDropdownQuickActions, IxEmptyState, IxEventList, IxEventListItem, IxExpandingSearch, IxFilterChip, IxFlipTile, IxFlipTileContent, IxFormField, IxGroup, IxGroupContextMenu, IxGroupItem, IxIcon, IxIconButton, IxIconToggleButton, IxInputGroup, IxKeyValue, IxKeyValueList, IxKpi, IxLayoutGrid, IxLinkButton, IxMapNavigation, IxMapNavigationOverlay, IxMenu, IxMenuAbout, IxMenuAboutItem, IxMenuAboutNews, IxMenuAvatar, IxMenuAvatarItem, IxMenuCategory, IxMenuItem, IxMenuSettings, IxMenuSettingsItem, IxMessageBar, IxModal, IxModalContent, IxModalExample, IxModalFooter, IxModalHeader, IxPagination, IxPane, IxPaneLayout, IxPill, IxPushCard, IxRow, IxSelect, IxSelectItem, IxSlider, IxSpinner, IxSplitButton, IxSplitButtonItem, IxTabItem, IxTabs, IxTile, IxTimePicker, IxToast, IxToastContainer, IxToggle, IxToggleButton, IxTooltip, IxTree, IxTypography, IxUpload, IxValidationTooltip, IxWorkflowStep, IxWorkflowSteps, Modal, showModal, showToast };
