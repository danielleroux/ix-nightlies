'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const React = require('react');
const ReactDOM = require('react-dom');
const ixActionCard_js = require('@siemens/ix/components/ix-action-card.js');
const ixApplication_js = require('@siemens/ix/components/ix-application.js');
const ixApplicationHeader_js = require('@siemens/ix/components/ix-application-header.js');
const ixAvatar_js = require('@siemens/ix/components/ix-avatar.js');
const ixBasicNavigation_js = require('@siemens/ix/components/ix-basic-navigation.js');
const ixBlind_js = require('@siemens/ix/components/ix-blind.js');
const ixBreadcrumb_js = require('@siemens/ix/components/ix-breadcrumb.js');
const ixBreadcrumbItem_js = require('@siemens/ix/components/ix-breadcrumb-item.js');
const ixButton_js = require('@siemens/ix/components/ix-button.js');
const ixCard_js = require('@siemens/ix/components/ix-card.js');
const ixCardAccordion_js = require('@siemens/ix/components/ix-card-accordion.js');
const ixCardContent_js = require('@siemens/ix/components/ix-card-content.js');
const ixCardList_js = require('@siemens/ix/components/ix-card-list.js');
const ixCardTitle_js = require('@siemens/ix/components/ix-card-title.js');
const ixCategoryFilter_js = require('@siemens/ix/components/ix-category-filter.js');
const ixChip_js = require('@siemens/ix/components/ix-chip.js');
const ixCol_js = require('@siemens/ix/components/ix-col.js');
const ixContent_js = require('@siemens/ix/components/ix-content.js');
const ixContentHeader_js = require('@siemens/ix/components/ix-content-header.js');
const ixDateDropdown_js = require('@siemens/ix/components/ix-date-dropdown.js');
const ixDatePicker_js = require('@siemens/ix/components/ix-date-picker.js');
const ixDatetimePicker_js = require('@siemens/ix/components/ix-datetime-picker.js');
const ixDivider_js = require('@siemens/ix/components/ix-divider.js');
const ixDrawer_js = require('@siemens/ix/components/ix-drawer.js');
const ixDropdown_js = require('@siemens/ix/components/ix-dropdown.js');
const ixDropdownButton_js = require('@siemens/ix/components/ix-dropdown-button.js');
const ixDropdownHeader_js = require('@siemens/ix/components/ix-dropdown-header.js');
const ixDropdownItem_js = require('@siemens/ix/components/ix-dropdown-item.js');
const ixDropdownQuickActions_js = require('@siemens/ix/components/ix-dropdown-quick-actions.js');
const ixEmptyState_js = require('@siemens/ix/components/ix-empty-state.js');
const ixEventList_js = require('@siemens/ix/components/ix-event-list.js');
const ixEventListItem_js = require('@siemens/ix/components/ix-event-list-item.js');
const ixExpandingSearch_js = require('@siemens/ix/components/ix-expanding-search.js');
const ixFilterChip_js = require('@siemens/ix/components/ix-filter-chip.js');
const ixFlipTile_js = require('@siemens/ix/components/ix-flip-tile.js');
const ixFlipTileContent_js = require('@siemens/ix/components/ix-flip-tile-content.js');
const ixFormField_js = require('@siemens/ix/components/ix-form-field.js');
const ixGroup_js = require('@siemens/ix/components/ix-group.js');
const ixGroupContextMenu_js = require('@siemens/ix/components/ix-group-context-menu.js');
const ixGroupItem_js = require('@siemens/ix/components/ix-group-item.js');
const ixIconButton_js = require('@siemens/ix/components/ix-icon-button.js');
const ixIconToggleButton_js = require('@siemens/ix/components/ix-icon-toggle-button.js');
const ixInputGroup_js = require('@siemens/ix/components/ix-input-group.js');
const ixKeyValue_js = require('@siemens/ix/components/ix-key-value.js');
const ixKeyValueList_js = require('@siemens/ix/components/ix-key-value-list.js');
const ixKpi_js = require('@siemens/ix/components/ix-kpi.js');
const ixLayoutGrid_js = require('@siemens/ix/components/ix-layout-grid.js');
const ixLinkButton_js = require('@siemens/ix/components/ix-link-button.js');
const ixMapNavigation_js = require('@siemens/ix/components/ix-map-navigation.js');
const ixMapNavigationOverlay_js = require('@siemens/ix/components/ix-map-navigation-overlay.js');
const ixMenu_js = require('@siemens/ix/components/ix-menu.js');
const ixMenuAbout_js = require('@siemens/ix/components/ix-menu-about.js');
const ixMenuAboutItem_js = require('@siemens/ix/components/ix-menu-about-item.js');
const ixMenuAboutNews_js = require('@siemens/ix/components/ix-menu-about-news.js');
const ixMenuAvatar_js = require('@siemens/ix/components/ix-menu-avatar.js');
const ixMenuAvatarItem_js = require('@siemens/ix/components/ix-menu-avatar-item.js');
const ixMenuCategory_js = require('@siemens/ix/components/ix-menu-category.js');
const ixMenuItem_js = require('@siemens/ix/components/ix-menu-item.js');
const ixMenuSettings_js = require('@siemens/ix/components/ix-menu-settings.js');
const ixMenuSettingsItem_js = require('@siemens/ix/components/ix-menu-settings-item.js');
const ixMessageBar_js = require('@siemens/ix/components/ix-message-bar.js');
const ixModal_js = require('@siemens/ix/components/ix-modal.js');
const ixModalContent_js = require('@siemens/ix/components/ix-modal-content.js');
const ixModalExample_js = require('@siemens/ix/components/ix-modal-example.js');
const ixModalFooter_js = require('@siemens/ix/components/ix-modal-footer.js');
const ixModalHeader_js = require('@siemens/ix/components/ix-modal-header.js');
const ixPagination_js = require('@siemens/ix/components/ix-pagination.js');
const ixPane_js = require('@siemens/ix/components/ix-pane.js');
const ixPaneLayout_js = require('@siemens/ix/components/ix-pane-layout.js');
const ixPill_js = require('@siemens/ix/components/ix-pill.js');
const ixPushCard_js = require('@siemens/ix/components/ix-push-card.js');
const ixRow_js = require('@siemens/ix/components/ix-row.js');
const ixSelect_js = require('@siemens/ix/components/ix-select.js');
const ixSelectItem_js = require('@siemens/ix/components/ix-select-item.js');
const ixSlider_js = require('@siemens/ix/components/ix-slider.js');
const ixSpinner_js = require('@siemens/ix/components/ix-spinner.js');
const ixSplitButton_js = require('@siemens/ix/components/ix-split-button.js');
const ixSplitButtonItem_js = require('@siemens/ix/components/ix-split-button-item.js');
const ixTabItem_js = require('@siemens/ix/components/ix-tab-item.js');
const ixTabs_js = require('@siemens/ix/components/ix-tabs.js');
const ixTile_js = require('@siemens/ix/components/ix-tile.js');
const ixTimePicker_js = require('@siemens/ix/components/ix-time-picker.js');
const ixToast_js = require('@siemens/ix/components/ix-toast.js');
const ixToastContainer_js = require('@siemens/ix/components/ix-toast-container.js');
const ixToggle_js = require('@siemens/ix/components/ix-toggle.js');
const ixToggleButton_js = require('@siemens/ix/components/ix-toggle-button.js');
const ixTooltip_js = require('@siemens/ix/components/ix-tooltip.js');
const ixTypography_js = require('@siemens/ix/components/ix-typography.js');
const ixUpload_js = require('@siemens/ix/components/ix-upload.js');
const ixValidationTooltip_js = require('@siemens/ix/components/ix-validation-tooltip.js');
const ixWorkflowStep_js = require('@siemens/ix/components/ix-workflow-step.js');
const ixWorkflowSteps_js = require('@siemens/ix/components/ix-workflow-steps.js');
const ix = require('@siemens/ix');
const ReactDOMClient = require('react-dom/client');
const ixApplicationSidebar_js = require('@siemens/ix/components/ix-application-sidebar.js');
const ixApplicationSwitchModal_js = require('@siemens/ix/components/ix-application-switch-modal.js');
const ixBurgerMenu_js = require('@siemens/ix/components/ix-burger-menu.js');
const ixDateTimeCard_js = require('@siemens/ix/components/ix-date-time-card.js');
const ixModalLoading_js = require('@siemens/ix/components/ix-modal-loading.js');
const ixIcon = require('@siemens/ix-icons/dist/components/ix-icon');
const ixTree_js = require('@siemens/ix/components/ix-tree.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const React__default = /*#__PURE__*/_interopDefaultLegacy(React);
const ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
const ReactDOMClient__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOMClient);

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
        return React__default["default"].createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return React__default["default"].forwardRef(forwardRef);
};

const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
    if (defineCustomElement !== undefined) {
        defineCustomElement();
    }
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React__default["default"].Component {
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
            return React.createElement(tagName, newProps, children);
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
const IxActionCard = /*@__PURE__*/ createReactComponent('ix-action-card', undefined, undefined, ixActionCard_js.defineCustomElement);
const IxApplication = /*@__PURE__*/ createReactComponent('ix-application', undefined, undefined, ixApplication_js.defineCustomElement);
const IxApplicationHeader = /*@__PURE__*/ createReactComponent('ix-application-header', undefined, undefined, ixApplicationHeader_js.defineCustomElement);
const IxAvatar = /*@__PURE__*/ createReactComponent('ix-avatar', undefined, undefined, ixAvatar_js.defineCustomElement);
const IxBasicNavigation = /*@__PURE__*/ createReactComponent('ix-basic-navigation', undefined, undefined, ixBasicNavigation_js.defineCustomElement);
const IxBlind = /*@__PURE__*/ createReactComponent('ix-blind', undefined, undefined, ixBlind_js.defineCustomElement);
const IxBreadcrumb = /*@__PURE__*/ createReactComponent('ix-breadcrumb', undefined, undefined, ixBreadcrumb_js.defineCustomElement);
const IxBreadcrumbItem = /*@__PURE__*/ createReactComponent('ix-breadcrumb-item', undefined, undefined, ixBreadcrumbItem_js.defineCustomElement);
const IxButton = /*@__PURE__*/ createReactComponent('ix-button', undefined, undefined, ixButton_js.defineCustomElement);
const IxCard = /*@__PURE__*/ createReactComponent('ix-card', undefined, undefined, ixCard_js.defineCustomElement);
const IxCardAccordion = /*@__PURE__*/ createReactComponent('ix-card-accordion', undefined, undefined, ixCardAccordion_js.defineCustomElement);
const IxCardContent = /*@__PURE__*/ createReactComponent('ix-card-content', undefined, undefined, ixCardContent_js.defineCustomElement);
const IxCardList = /*@__PURE__*/ createReactComponent('ix-card-list', undefined, undefined, ixCardList_js.defineCustomElement);
const IxCardTitle = /*@__PURE__*/ createReactComponent('ix-card-title', undefined, undefined, ixCardTitle_js.defineCustomElement);
const IxCategoryFilter = /*@__PURE__*/ createReactComponent('ix-category-filter', undefined, undefined, ixCategoryFilter_js.defineCustomElement);
const IxChip = /*@__PURE__*/ createReactComponent('ix-chip', undefined, undefined, ixChip_js.defineCustomElement);
const IxCol = /*@__PURE__*/ createReactComponent('ix-col', undefined, undefined, ixCol_js.defineCustomElement);
const IxContent = /*@__PURE__*/ createReactComponent('ix-content', undefined, undefined, ixContent_js.defineCustomElement);
const IxContentHeader = /*@__PURE__*/ createReactComponent('ix-content-header', undefined, undefined, ixContentHeader_js.defineCustomElement);
const IxDateDropdown = /*@__PURE__*/ createReactComponent('ix-date-dropdown', undefined, undefined, ixDateDropdown_js.defineCustomElement);
const IxDatePicker = /*@__PURE__*/ createReactComponent('ix-date-picker', undefined, undefined, ixDatePicker_js.defineCustomElement);
const IxDatetimePicker = /*@__PURE__*/ createReactComponent('ix-datetime-picker', undefined, undefined, ixDatetimePicker_js.defineCustomElement);
const IxDivider = /*@__PURE__*/ createReactComponent('ix-divider', undefined, undefined, ixDivider_js.defineCustomElement);
const IxDrawer = /*@__PURE__*/ createReactComponent('ix-drawer', undefined, undefined, ixDrawer_js.defineCustomElement);
const IxDropdown = /*@__PURE__*/ createReactComponent('ix-dropdown', undefined, undefined, ixDropdown_js.defineCustomElement);
const IxDropdownButton = /*@__PURE__*/ createReactComponent('ix-dropdown-button', undefined, undefined, ixDropdownButton_js.defineCustomElement);
const IxDropdownHeader = /*@__PURE__*/ createReactComponent('ix-dropdown-header', undefined, undefined, ixDropdownHeader_js.defineCustomElement);
const IxDropdownItem = /*@__PURE__*/ createReactComponent('ix-dropdown-item', undefined, undefined, ixDropdownItem_js.defineCustomElement);
const IxDropdownQuickActions = /*@__PURE__*/ createReactComponent('ix-dropdown-quick-actions', undefined, undefined, ixDropdownQuickActions_js.defineCustomElement);
const IxEmptyState = /*@__PURE__*/ createReactComponent('ix-empty-state', undefined, undefined, ixEmptyState_js.defineCustomElement);
const IxEventList = /*@__PURE__*/ createReactComponent('ix-event-list', undefined, undefined, ixEventList_js.defineCustomElement);
const IxEventListItem = /*@__PURE__*/ createReactComponent('ix-event-list-item', undefined, undefined, ixEventListItem_js.defineCustomElement);
const IxExpandingSearch = /*@__PURE__*/ createReactComponent('ix-expanding-search', undefined, undefined, ixExpandingSearch_js.defineCustomElement);
const IxFilterChip = /*@__PURE__*/ createReactComponent('ix-filter-chip', undefined, undefined, ixFilterChip_js.defineCustomElement);
const IxFlipTile = /*@__PURE__*/ createReactComponent('ix-flip-tile', undefined, undefined, ixFlipTile_js.defineCustomElement);
const IxFlipTileContent = /*@__PURE__*/ createReactComponent('ix-flip-tile-content', undefined, undefined, ixFlipTileContent_js.defineCustomElement);
const IxFormField = /*@__PURE__*/ createReactComponent('ix-form-field', undefined, undefined, ixFormField_js.defineCustomElement);
const IxGroup = /*@__PURE__*/ createReactComponent('ix-group', undefined, undefined, ixGroup_js.defineCustomElement);
const IxGroupContextMenu = /*@__PURE__*/ createReactComponent('ix-group-context-menu', undefined, undefined, ixGroupContextMenu_js.defineCustomElement);
const IxGroupItem = /*@__PURE__*/ createReactComponent('ix-group-item', undefined, undefined, ixGroupItem_js.defineCustomElement);
const IxIconButton = /*@__PURE__*/ createReactComponent('ix-icon-button', undefined, undefined, ixIconButton_js.defineCustomElement);
const IxIconToggleButton = /*@__PURE__*/ createReactComponent('ix-icon-toggle-button', undefined, undefined, ixIconToggleButton_js.defineCustomElement);
const IxInputGroup = /*@__PURE__*/ createReactComponent('ix-input-group', undefined, undefined, ixInputGroup_js.defineCustomElement);
const IxKeyValue = /*@__PURE__*/ createReactComponent('ix-key-value', undefined, undefined, ixKeyValue_js.defineCustomElement);
const IxKeyValueList = /*@__PURE__*/ createReactComponent('ix-key-value-list', undefined, undefined, ixKeyValueList_js.defineCustomElement);
const IxKpi = /*@__PURE__*/ createReactComponent('ix-kpi', undefined, undefined, ixKpi_js.defineCustomElement);
const IxLayoutGrid = /*@__PURE__*/ createReactComponent('ix-layout-grid', undefined, undefined, ixLayoutGrid_js.defineCustomElement);
const IxLinkButton = /*@__PURE__*/ createReactComponent('ix-link-button', undefined, undefined, ixLinkButton_js.defineCustomElement);
const IxMapNavigation = /*@__PURE__*/ createReactComponent('ix-map-navigation', undefined, undefined, ixMapNavigation_js.defineCustomElement);
const IxMapNavigationOverlay = /*@__PURE__*/ createReactComponent('ix-map-navigation-overlay', undefined, undefined, ixMapNavigationOverlay_js.defineCustomElement);
const IxMenu = /*@__PURE__*/ createReactComponent('ix-menu', undefined, undefined, ixMenu_js.defineCustomElement);
const IxMenuAbout = /*@__PURE__*/ createReactComponent('ix-menu-about', undefined, undefined, ixMenuAbout_js.defineCustomElement);
const IxMenuAboutItem = /*@__PURE__*/ createReactComponent('ix-menu-about-item', undefined, undefined, ixMenuAboutItem_js.defineCustomElement);
const IxMenuAboutNews = /*@__PURE__*/ createReactComponent('ix-menu-about-news', undefined, undefined, ixMenuAboutNews_js.defineCustomElement);
const IxMenuAvatar = /*@__PURE__*/ createReactComponent('ix-menu-avatar', undefined, undefined, ixMenuAvatar_js.defineCustomElement);
const IxMenuAvatarItem = /*@__PURE__*/ createReactComponent('ix-menu-avatar-item', undefined, undefined, ixMenuAvatarItem_js.defineCustomElement);
const IxMenuCategory = /*@__PURE__*/ createReactComponent('ix-menu-category', undefined, undefined, ixMenuCategory_js.defineCustomElement);
const IxMenuItem = /*@__PURE__*/ createReactComponent('ix-menu-item', undefined, undefined, ixMenuItem_js.defineCustomElement);
const IxMenuSettings = /*@__PURE__*/ createReactComponent('ix-menu-settings', undefined, undefined, ixMenuSettings_js.defineCustomElement);
const IxMenuSettingsItem = /*@__PURE__*/ createReactComponent('ix-menu-settings-item', undefined, undefined, ixMenuSettingsItem_js.defineCustomElement);
const IxMessageBar = /*@__PURE__*/ createReactComponent('ix-message-bar', undefined, undefined, ixMessageBar_js.defineCustomElement);
const IxModal = /*@__PURE__*/ createReactComponent('ix-modal', undefined, undefined, ixModal_js.defineCustomElement);
const IxModalContent = /*@__PURE__*/ createReactComponent('ix-modal-content', undefined, undefined, ixModalContent_js.defineCustomElement);
const IxModalExample = /*@__PURE__*/ createReactComponent('ix-modal-example', undefined, undefined, ixModalExample_js.defineCustomElement);
const IxModalFooter = /*@__PURE__*/ createReactComponent('ix-modal-footer', undefined, undefined, ixModalFooter_js.defineCustomElement);
const IxModalHeader = /*@__PURE__*/ createReactComponent('ix-modal-header', undefined, undefined, ixModalHeader_js.defineCustomElement);
const IxPagination = /*@__PURE__*/ createReactComponent('ix-pagination', undefined, undefined, ixPagination_js.defineCustomElement);
const IxPane = /*@__PURE__*/ createReactComponent('ix-pane', undefined, undefined, ixPane_js.defineCustomElement);
const IxPaneLayout = /*@__PURE__*/ createReactComponent('ix-pane-layout', undefined, undefined, ixPaneLayout_js.defineCustomElement);
const IxPill = /*@__PURE__*/ createReactComponent('ix-pill', undefined, undefined, ixPill_js.defineCustomElement);
const IxPushCard = /*@__PURE__*/ createReactComponent('ix-push-card', undefined, undefined, ixPushCard_js.defineCustomElement);
const IxRow = /*@__PURE__*/ createReactComponent('ix-row', undefined, undefined, ixRow_js.defineCustomElement);
const IxSelect = /*@__PURE__*/ createReactComponent('ix-select', undefined, undefined, ixSelect_js.defineCustomElement);
const IxSelectItem = /*@__PURE__*/ createReactComponent('ix-select-item', undefined, undefined, ixSelectItem_js.defineCustomElement);
const IxSlider = /*@__PURE__*/ createReactComponent('ix-slider', undefined, undefined, ixSlider_js.defineCustomElement);
const IxSpinner = /*@__PURE__*/ createReactComponent('ix-spinner', undefined, undefined, ixSpinner_js.defineCustomElement);
const IxSplitButton = /*@__PURE__*/ createReactComponent('ix-split-button', undefined, undefined, ixSplitButton_js.defineCustomElement);
const IxSplitButtonItem = /*@__PURE__*/ createReactComponent('ix-split-button-item', undefined, undefined, ixSplitButtonItem_js.defineCustomElement);
const IxTabItem = /*@__PURE__*/ createReactComponent('ix-tab-item', undefined, undefined, ixTabItem_js.defineCustomElement);
const IxTabs = /*@__PURE__*/ createReactComponent('ix-tabs', undefined, undefined, ixTabs_js.defineCustomElement);
const IxTile = /*@__PURE__*/ createReactComponent('ix-tile', undefined, undefined, ixTile_js.defineCustomElement);
const IxTimePicker = /*@__PURE__*/ createReactComponent('ix-time-picker', undefined, undefined, ixTimePicker_js.defineCustomElement);
const IxToast = /*@__PURE__*/ createReactComponent('ix-toast', undefined, undefined, ixToast_js.defineCustomElement);
const IxToastContainer = /*@__PURE__*/ createReactComponent('ix-toast-container', undefined, undefined, ixToastContainer_js.defineCustomElement);
const IxToggle = /*@__PURE__*/ createReactComponent('ix-toggle', undefined, undefined, ixToggle_js.defineCustomElement);
const IxToggleButton = /*@__PURE__*/ createReactComponent('ix-toggle-button', undefined, undefined, ixToggleButton_js.defineCustomElement);
const IxTooltip = /*@__PURE__*/ createReactComponent('ix-tooltip', undefined, undefined, ixTooltip_js.defineCustomElement);
const IxTypography = /*@__PURE__*/ createReactComponent('ix-typography', undefined, undefined, ixTypography_js.defineCustomElement);
const IxUpload = /*@__PURE__*/ createReactComponent('ix-upload', undefined, undefined, ixUpload_js.defineCustomElement);
const IxValidationTooltip = /*@__PURE__*/ createReactComponent('ix-validation-tooltip', undefined, undefined, ixValidationTooltip_js.defineCustomElement);
const IxWorkflowStep = /*@__PURE__*/ createReactComponent('ix-workflow-step', undefined, undefined, ixWorkflowStep_js.defineCustomElement);
const IxWorkflowSteps = /*@__PURE__*/ createReactComponent('ix-workflow-steps', undefined, undefined, ixWorkflowSteps_js.defineCustomElement);

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
        const root = ReactDOMClient__default["default"].createRoot(rootElement);
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
ix.registerFrameworkDelegate(reactFrameworkDelegate);

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
    const [portalRef, setPortalRef] = React.useState(null);
    const resolveElementRef = React.useRef({});
    const viewRefs = React.useRef({});
    const [views, setViews] = React.useState({});
    React.useEffect(() => {
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
    React.useLayoutEffect(() => {
        const portalRef = document.querySelector(`#${PORTAL_ID}`);
        if (portalRef) {
            setPortalRef(portalRef);
        }
    }, []);
    React.useLayoutEffect(() => {
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
    return (React__default["default"].createElement(React__default["default"].Fragment, null, Object.keys(views).map((key) => {
        const RenderView = views[key];
        return ReactDOM__default["default"].createPortal(React__default["default"].createElement("div", { "data-portal-id": key, style: { display: 'contents ' } }, RenderView), portalRef, key);
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
const IxContext = React__default["default"].createContext(null);

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class IxApplicationContext extends React__default["default"].Component {
    constructor(props) {
        super(props);
        this.delegate = reactFrameworkDelegate;
        this.delegate.isUsingReactPortal = true;
    }
    render() {
        return (React__default["default"].createElement(IxContext.Provider, { value: {
                delegate: this.delegate,
            } },
            this.props.children,
            React__default["default"].createElement(IxOverlay, { delegate: this.delegate }),
            React__default["default"].createElement("div", { id: PORTAL_ID })));
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
ixApplicationSwitchModal_js.defineCustomElement();
ixApplicationSidebar_js.defineCustomElement();
ixDateTimeCard_js.defineCustomElement();
ixBurgerMenu_js.defineCustomElement();
ixModalLoading_js.defineCustomElement();

// eslint-disable-next-line no-inline-comments
const IxIcon = /*@__PURE__*/ createReactComponent('ix-icon', undefined, undefined, ixIcon.defineCustomElement);

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Modal = React__default["default"].forwardRef((props, ref) => {
    const wrapperRef = React.useRef(null);
    React.useImperativeHandle(ref, () => ({
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
    return React__default["default"].createElement(IxModal, { ref: wrapperRef }, props.children);
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
    return ix.showModal(config);
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
        const toastInstance = await ix.toast(config);
        return toastInstance;
    }
    const node = config.message;
    const toastContainer = document.createElement('DIV');
    const root = ReactDOMClient__default["default"].createRoot(toastContainer);
    root.render(node);
    const toastInstance = await ix.toast(Object.assign(Object.assign({}, config), { message: toastContainer }));
    toastInstance.onClose.once(() => {
        root.unmount();
    });
    return toastInstance;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-inline-comments
const InternalIxTree = /*@__PURE__*/ createReactComponent('ix-tree', undefined, undefined, ixTree_js.defineCustomElement);
const IxTree = (props) => {
    const cachedRootNodes = React.useRef(new Map());
    const renderItem = React.useCallback((_, data, __, context, update) => {
        const treeItem = document.createElement('ix-tree-item');
        treeItem.hasChildren = data.hasChildren;
        treeItem.context = context[data.id];
        update((itemData, context) => {
            treeItem.context = context[itemData.id];
            treeItem.hasChildren = itemData.hasChildren;
        });
        const container = document.createElement('DIV');
        const rootNode = ReactDOMClient__default["default"].createRoot(container);
        if (props.renderItem) {
            rootNode.render(props.renderItem(data.data));
        }
        treeItem.appendChild(container);
        cachedRootNodes.current.set(treeItem, rootNode);
        return treeItem;
    }, []);
    return (React__default["default"].createElement(InternalIxTree, Object.assign({}, props, { renderItem: props.renderItem ? renderItem : undefined, onNodeRemoved: (removed) => {
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

exports.InternalIxTree = InternalIxTree;
exports.IxActionCard = IxActionCard;
exports.IxApplication = IxApplication;
exports.IxApplicationContext = IxApplicationContext;
exports.IxApplicationHeader = IxApplicationHeader;
exports.IxAvatar = IxAvatar;
exports.IxBasicNavigation = IxBasicNavigation;
exports.IxBlind = IxBlind;
exports.IxBreadcrumb = IxBreadcrumb;
exports.IxBreadcrumbItem = IxBreadcrumbItem;
exports.IxButton = IxButton;
exports.IxCard = IxCard;
exports.IxCardAccordion = IxCardAccordion;
exports.IxCardContent = IxCardContent;
exports.IxCardList = IxCardList;
exports.IxCardTitle = IxCardTitle;
exports.IxCategoryFilter = IxCategoryFilter;
exports.IxChip = IxChip;
exports.IxCol = IxCol;
exports.IxContent = IxContent;
exports.IxContentHeader = IxContentHeader;
exports.IxDateDropdown = IxDateDropdown;
exports.IxDatePicker = IxDatePicker;
exports.IxDatetimePicker = IxDatetimePicker;
exports.IxDivider = IxDivider;
exports.IxDrawer = IxDrawer;
exports.IxDropdown = IxDropdown;
exports.IxDropdownButton = IxDropdownButton;
exports.IxDropdownHeader = IxDropdownHeader;
exports.IxDropdownItem = IxDropdownItem;
exports.IxDropdownQuickActions = IxDropdownQuickActions;
exports.IxEmptyState = IxEmptyState;
exports.IxEventList = IxEventList;
exports.IxEventListItem = IxEventListItem;
exports.IxExpandingSearch = IxExpandingSearch;
exports.IxFilterChip = IxFilterChip;
exports.IxFlipTile = IxFlipTile;
exports.IxFlipTileContent = IxFlipTileContent;
exports.IxFormField = IxFormField;
exports.IxGroup = IxGroup;
exports.IxGroupContextMenu = IxGroupContextMenu;
exports.IxGroupItem = IxGroupItem;
exports.IxIcon = IxIcon;
exports.IxIconButton = IxIconButton;
exports.IxIconToggleButton = IxIconToggleButton;
exports.IxInputGroup = IxInputGroup;
exports.IxKeyValue = IxKeyValue;
exports.IxKeyValueList = IxKeyValueList;
exports.IxKpi = IxKpi;
exports.IxLayoutGrid = IxLayoutGrid;
exports.IxLinkButton = IxLinkButton;
exports.IxMapNavigation = IxMapNavigation;
exports.IxMapNavigationOverlay = IxMapNavigationOverlay;
exports.IxMenu = IxMenu;
exports.IxMenuAbout = IxMenuAbout;
exports.IxMenuAboutItem = IxMenuAboutItem;
exports.IxMenuAboutNews = IxMenuAboutNews;
exports.IxMenuAvatar = IxMenuAvatar;
exports.IxMenuAvatarItem = IxMenuAvatarItem;
exports.IxMenuCategory = IxMenuCategory;
exports.IxMenuItem = IxMenuItem;
exports.IxMenuSettings = IxMenuSettings;
exports.IxMenuSettingsItem = IxMenuSettingsItem;
exports.IxMessageBar = IxMessageBar;
exports.IxModal = IxModal;
exports.IxModalContent = IxModalContent;
exports.IxModalExample = IxModalExample;
exports.IxModalFooter = IxModalFooter;
exports.IxModalHeader = IxModalHeader;
exports.IxPagination = IxPagination;
exports.IxPane = IxPane;
exports.IxPaneLayout = IxPaneLayout;
exports.IxPill = IxPill;
exports.IxPushCard = IxPushCard;
exports.IxRow = IxRow;
exports.IxSelect = IxSelect;
exports.IxSelectItem = IxSelectItem;
exports.IxSlider = IxSlider;
exports.IxSpinner = IxSpinner;
exports.IxSplitButton = IxSplitButton;
exports.IxSplitButtonItem = IxSplitButtonItem;
exports.IxTabItem = IxTabItem;
exports.IxTabs = IxTabs;
exports.IxTile = IxTile;
exports.IxTimePicker = IxTimePicker;
exports.IxToast = IxToast;
exports.IxToastContainer = IxToastContainer;
exports.IxToggle = IxToggle;
exports.IxToggleButton = IxToggleButton;
exports.IxTooltip = IxTooltip;
exports.IxTree = IxTree;
exports.IxTypography = IxTypography;
exports.IxUpload = IxUpload;
exports.IxValidationTooltip = IxValidationTooltip;
exports.IxWorkflowStep = IxWorkflowStep;
exports.IxWorkflowSteps = IxWorkflowSteps;
exports.Modal = Modal;
exports.showModal = showModal;
exports.showToast = showToast;
