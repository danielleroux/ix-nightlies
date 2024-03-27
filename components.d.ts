import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from '@siemens/ix';
import type { InputState as IIxCategoryFilterInputState } from '@siemens/ix';
import type { FilterState as IIxCategoryFilterFilterState } from '@siemens/ix';
import type { DateRangeChangeEvent as IIxDateDropdownDateRangeChangeEvent } from '@siemens/ix';
import type { DateChangeEvent as IIxDatePickerDateChangeEvent } from '@siemens/ix';
import type { DateTimeDateChangeEvent as IIxDatetimePickerDateTimeDateChangeEvent } from '@siemens/ix';
import type { DateTimeSelectEvent as IIxDatetimePickerDateTimeSelectEvent } from '@siemens/ix';
import type { CustomCloseEvent as IIxMenuAboutCustomCloseEvent } from '@siemens/ix';
import type { CustomLabelChangeEvent as IIxMenuAboutItemCustomLabelChangeEvent } from '@siemens/ix';
import type { CustomCloseEvent as IIxMenuSettingsCustomCloseEvent } from '@siemens/ix';
import type { CustomLabelChangeEvent as IIxMenuSettingsItemCustomLabelChangeEvent } from '@siemens/ix';
import type { ExpandedChangedEvent as IIxPaneExpandedChangedEvent } from '@siemens/ix';
import type { VariantChangedEvent as IIxPaneVariantChangedEvent } from '@siemens/ix';
import type { BorderlessChangedEvent as IIxPaneBorderlessChangedEvent } from '@siemens/ix';
import type { TabClickDetail as IIxTabItemTabClickDetail } from '@siemens/ix';
import * as i0 from "@angular/core";
export declare class IxActionCard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxActionCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxActionCard, "ix-action-card", never, { "heading": "heading"; "icon": "icon"; "selected": "selected"; "subheading": "subheading"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxActionCard extends Components.IxActionCard {
}
export declare class IxApplication {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxApplication, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxApplication, "ix-application", never, { "appSwitchConfig": "appSwitchConfig"; "breakpoints": "breakpoints"; "forceBreakpoint": "forceBreakpoint"; "theme": "theme"; "themeSystemAppearance": "themeSystemAppearance"; }, {}, never, ["*"]>;
}
export declare interface IxApplication extends Components.IxApplication {
}
export declare class IxApplicationHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxApplicationHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxApplicationHeader, "ix-application-header", never, { "name": "name"; }, {}, never, ["*"]>;
}
export declare interface IxApplicationHeader extends Components.IxApplicationHeader {
}
export declare class IxAvatar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxAvatar, "ix-avatar", never, { "extra": "extra"; "image": "image"; "initials": "initials"; "username": "username"; }, {}, never, ["*"]>;
}
export declare interface IxAvatar extends Components.IxAvatar {
}
export declare class IxBasicNavigation {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxBasicNavigation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxBasicNavigation, "ix-basic-navigation", never, { "applicationName": "applicationName"; "breakpoints": "breakpoints"; "forceBreakpoint": "forceBreakpoint"; "hideHeader": "hideHeader"; }, {}, never, ["*"]>;
}
export declare interface IxBasicNavigation extends Components.IxBasicNavigation {
}
export declare class IxBlind {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxBlind, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxBlind, "ix-blind", never, { "collapsed": "collapsed"; "icon": "icon"; "label": "label"; "sublabel": "sublabel"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxBlind extends Components.IxBlind {
    /**
     * Collapsed state changed
     */
    collapsedChange: EventEmitter<CustomEvent<boolean>>;
}
export declare class IxBreadcrumb {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxBreadcrumb, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxBreadcrumb, "ix-breadcrumb", never, { "ariaLabelPreviousButton": "ariaLabelPreviousButton"; "ghost": "ghost"; "nextItems": "nextItems"; "visibleItemCount": "visibleItemCount"; }, {}, never, ["*"]>;
}
export declare interface IxBreadcrumb extends Components.IxBreadcrumb {
    /**
     * Crumb item clicked event
     */
    itemClick: EventEmitter<CustomEvent<string>>;
    /**
     * Next item clicked event
     */
    nextClick: EventEmitter<CustomEvent<{
        event: UIEvent;
        item: string;
    }>>;
}
export declare class IxBreadcrumbItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxBreadcrumbItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxBreadcrumbItem, "ix-breadcrumb-item", never, { "icon": "icon"; "label": "label"; }, {}, never, ["*"]>;
}
export declare interface IxBreadcrumbItem extends Components.IxBreadcrumbItem {
}
export declare class IxButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxButton, "ix-button", never, { "disabled": "disabled"; "ghost": "ghost"; "icon": "icon"; "loading": "loading"; "outline": "outline"; "type": "type"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxButton extends Components.IxButton {
}
export declare class IxCard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxCard, "ix-card", never, { "selected": "selected"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxCard extends Components.IxCard {
}
export declare class IxCardAccordion {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxCardAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxCardAccordion, "ix-card-accordion", never, { "collapse": "collapse"; }, {}, never, ["*"]>;
}
export declare interface IxCardAccordion extends Components.IxCardAccordion {
}
export declare class IxCardContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxCardContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxCardContent, "ix-card-content", never, {}, {}, never, ["*"]>;
}
export declare interface IxCardContent extends Components.IxCardContent {
}
export declare class IxCardList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxCardList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxCardList, "ix-card-list", never, { "collapse": "collapse"; "i18nMoreCards": "i18nMoreCards"; "i18nShowAll": "i18nShowAll"; "label": "label"; "listStyle": "listStyle"; "showAllCount": "showAllCount"; "suppressOverflowHandling": "suppressOverflowHandling"; }, {}, never, ["*"]>;
}
export declare interface IxCardList extends Components.IxCardList {
    /**
     * Fire event when the collapse state is changed by the user
     */
    collapseChanged: EventEmitter<CustomEvent<boolean>>;
    /**
     * Fire event when the collapse state is changed by the user
     */
    showAllClick: EventEmitter<CustomEvent<{
        nativeEvent: MouseEvent;
    }>>;
    /**
     * Fire event when the show more card is clicked.
     */
    showMoreCardClick: EventEmitter<CustomEvent<{
        nativeEvent: MouseEvent;
    }>>;
}
export declare class IxCardTitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxCardTitle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxCardTitle, "ix-card-title", never, {}, {}, never, ["*"]>;
}
export declare interface IxCardTitle extends Components.IxCardTitle {
}
export declare class IxCategoryFilter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxCategoryFilter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxCategoryFilter, "ix-category-filter", never, { "categories": "categories"; "disabled": "disabled"; "filterState": "filterState"; "hideIcon": "hideIcon"; "i18nPlainText": "i18nPlainText"; "icon": "icon"; "labelCategories": "labelCategories"; "nonSelectableCategories": "nonSelectableCategories"; "placeholder": "placeholder"; "readonly": "readonly"; "repeatCategories": "repeatCategories"; "suggestions": "suggestions"; }, {}, never, ["*"]>;
}
export declare interface IxCategoryFilter extends Components.IxCategoryFilter {
    /**
     * Event dispatched whenever the a category gets selected in the dropdown
     */
    categoryChanged: EventEmitter<CustomEvent<string>>;
    /**
     * Event dispatched whenever the text input changes.
     */
    inputChanged: EventEmitter<CustomEvent<IIxCategoryFilterInputState>>;
    /**
     * Event dispatched whenever the filter state changes.
     */
    filterChanged: EventEmitter<CustomEvent<IIxCategoryFilterFilterState>>;
}
export declare class IxChip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxChip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxChip, "ix-chip", never, { "active": "active"; "background": "background"; "chipColor": "chipColor"; "closable": "closable"; "color": "color"; "icon": "icon"; "outline": "outline"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxChip extends Components.IxChip {
    /**
     * Fire event if close button is clicked @since 1.5.0
     */
    closeChip: EventEmitter<CustomEvent<any>>;
}
export declare class IxCol {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxCol, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxCol, "ix-col", never, { "size": "size"; "sizeLg": "sizeLg"; "sizeMd": "sizeMd"; "sizeSm": "sizeSm"; }, {}, never, ["*"]>;
}
export declare interface IxCol extends Components.IxCol {
}
export declare class IxContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxContent, "ix-content", never, {}, {}, never, ["*"]>;
}
export declare interface IxContent extends Components.IxContent {
}
export declare class IxContentHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxContentHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxContentHeader, "ix-content-header", never, { "hasBackButton": "hasBackButton"; "headerSubtitle": "headerSubtitle"; "headerTitle": "headerTitle"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxContentHeader extends Components.IxContentHeader {
    /**
     * Triggered when back button is clicked
     */
    backButtonClick: EventEmitter<CustomEvent<void>>;
}
export declare class IxDateDropdown {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxDateDropdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxDateDropdown, "ix-date-dropdown", never, { "customRangeAllowed": "customRangeAllowed"; "dateRangeId": "dateRangeId"; "dateRangeOptions": "dateRangeOptions"; "format": "format"; "from": "from"; "i18nCustomItem": "i18nCustomItem"; "i18nDone": "i18nDone"; "i18nNoRange": "i18nNoRange"; "maxDate": "maxDate"; "minDate": "minDate"; "range": "range"; "to": "to"; }, {}, never, ["*"]>;
}
export declare interface IxDateDropdown extends Components.IxDateDropdown {
    /**
     * EventEmitter for date range change events.
  
  This event is emitted when the date range changes within the component.
  The event payload contains information about the selected date range.
     */
    dateRangeChange: EventEmitter<CustomEvent<IIxDateDropdownDateRangeChangeEvent>>;
}
export declare class IxDatePicker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxDatePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxDatePicker, "ix-date-picker", never, { "corners": "corners"; "eventDelimiter": "eventDelimiter"; "format": "format"; "from": "from"; "i18nDone": "i18nDone"; "individual": "individual"; "locale": "locale"; "maxDate": "maxDate"; "minDate": "minDate"; "range": "range"; "textSelectDate": "textSelectDate"; "to": "to"; "weekStartIndex": "weekStartIndex"; }, {}, never, ["*"]>;
}
export declare interface IxDatePicker extends Components.IxDatePicker {
    /**
     * Triggers if the date selection changes.
  Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string` @since 2.1.0
     */
    dateChange: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
    /**
     * Triggers if the date selection changes.
  Only triggered if date-picker-rework is in range mode. @since 2.1.0
     */
    dateRangeChange: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
    /**
     * Date selection confirmed via button action @since 1.1.0
     */
    dateSelect: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
    /**
     * Date selection confirmed via button action @deprecated NOT getting dispatched after 2.0.0. Use `dateSelect`.
     */
    done: EventEmitter<CustomEvent<string>>;
}
export declare class IxDatetimePicker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxDatetimePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxDatetimePicker, "ix-datetime-picker", never, { "dateFormat": "dateFormat"; "eventDelimiter": "eventDelimiter"; "from": "from"; "i18nDone": "i18nDone"; "locale": "locale"; "maxDate": "maxDate"; "minDate": "minDate"; "range": "range"; "showHour": "showHour"; "showMinutes": "showMinutes"; "showSeconds": "showSeconds"; "showTimeReference": "showTimeReference"; "textSelectDate": "textSelectDate"; "time": "time"; "timeFormat": "timeFormat"; "timeReference": "timeReference"; "to": "to"; "weekStartIndex": "weekStartIndex"; }, {}, never, ["*"]>;
}
export declare interface IxDatetimePicker extends Components.IxDatetimePicker {
    /**
     * Done event
  
  Set `doneEventDelimiter` to null or undefine to get the typed event @deprecated Use `this.dateChange`
     */
    done: EventEmitter<CustomEvent<string>>;
    /**
     * Time change @since 1.1.0
     */
    timeChange: EventEmitter<CustomEvent<string>>;
    /**
     * Date change @since 1.1.0
     */
    dateChange: EventEmitter<CustomEvent<IIxDatetimePickerDateTimeDateChangeEvent>>;
    /**
     * Datetime selection event is fired after confirm button is pressed @since 1.1.0
     */
    dateSelect: EventEmitter<CustomEvent<IIxDatetimePickerDateTimeSelectEvent>>;
}
export declare class IxDivider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxDivider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxDivider, "ix-divider", never, {}, {}, never, ["*"]>;
}
export declare interface IxDivider extends Components.IxDivider {
}
export declare class IxDrawer {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxDrawer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxDrawer, "ix-drawer", never, { "closeOnClickOutside": "closeOnClickOutside"; "fullHeight": "fullHeight"; "maxWidth": "maxWidth"; "minWidth": "minWidth"; "show": "show"; "width": "width"; }, {}, never, ["*"]>;
}
export declare interface IxDrawer extends Components.IxDrawer {
    /**
     * Fire event after drawer is open
     */
    open: EventEmitter<CustomEvent<any>>;
    /**
     * Fire event after drawer is close
     */
    drawerClose: EventEmitter<CustomEvent<any>>;
}
export declare class IxDropdown {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxDropdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxDropdown, "ix-dropdown", never, { "anchor": "anchor"; "closeBehavior": "closeBehavior"; "header": "header"; "placement": "placement"; "positioningStrategy": "positioningStrategy"; "show": "show"; "suppressAutomaticPlacement": "suppressAutomaticPlacement"; "trigger": "trigger"; }, {}, never, ["*"]>;
}
export declare interface IxDropdown extends Components.IxDropdown {
    /**
     * Fire event after visibility of dropdown has changed
     */
    showChanged: EventEmitter<CustomEvent<boolean>>;
}
export declare class IxDropdownButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxDropdownButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxDropdownButton, "ix-dropdown-button", never, { "closeBehavior": "closeBehavior"; "disabled": "disabled"; "ghost": "ghost"; "icon": "icon"; "label": "label"; "outline": "outline"; "placement": "placement"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxDropdownButton extends Components.IxDropdownButton {
}
export declare class IxDropdownHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxDropdownHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxDropdownHeader, "ix-dropdown-header", never, { "label": "label"; }, {}, never, ["*"]>;
}
export declare interface IxDropdownHeader extends Components.IxDropdownHeader {
}
export declare class IxDropdownItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxDropdownItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxDropdownItem, "ix-dropdown-item", never, { "checked": "checked"; "disabled": "disabled"; "hover": "hover"; "icon": "icon"; "label": "label"; }, {}, never, ["*"]>;
}
export declare interface IxDropdownItem extends Components.IxDropdownItem {
}
export declare class IxDropdownQuickActions {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxDropdownQuickActions, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxDropdownQuickActions, "ix-dropdown-quick-actions", never, {}, {}, never, ["*"]>;
}
export declare interface IxDropdownQuickActions extends Components.IxDropdownQuickActions {
}
export declare class IxEmptyState {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxEmptyState, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxEmptyState, "ix-empty-state", never, { "action": "action"; "header": "header"; "icon": "icon"; "layout": "layout"; "subHeader": "subHeader"; }, {}, never, ["*"]>;
}
export declare interface IxEmptyState extends Components.IxEmptyState {
    /**
     * Empty state action click event
     */
    actionClick: EventEmitter<CustomEvent<void>>;
}
export declare class IxEventList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxEventList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxEventList, "ix-event-list", never, { "animated": "animated"; "chevron": "chevron"; "compact": "compact"; "itemHeight": "itemHeight"; }, {}, never, ["*"]>;
}
export declare interface IxEventList extends Components.IxEventList {
}
export declare class IxEventListItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxEventListItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxEventListItem, "ix-event-list-item", never, { "chevron": "chevron"; "color": "color"; "disabled": "disabled"; "itemColor": "itemColor"; "selected": "selected"; }, {}, never, ["*"]>;
}
export declare interface IxEventListItem extends Components.IxEventListItem {
    /**
     * Event list item click
     */
    itemClick: EventEmitter<CustomEvent<any>>;
}
export declare class IxExpandingSearch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxExpandingSearch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxExpandingSearch, "ix-expanding-search", never, { "fullWidth": "fullWidth"; "icon": "icon"; "placeholder": "placeholder"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IxExpandingSearch extends Components.IxExpandingSearch {
    /**
     * Value changed
     */
    valueChange: EventEmitter<CustomEvent<string>>;
}
export declare class IxFilterChip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxFilterChip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxFilterChip, "ix-filter-chip", never, { "disabled": "disabled"; "readonly": "readonly"; }, {}, never, ["*"]>;
}
export declare interface IxFilterChip extends Components.IxFilterChip {
    /**
     * Close clicked
     */
    closeClick: EventEmitter<CustomEvent<void>>;
}
export declare class IxFlipTile {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxFlipTile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxFlipTile, "ix-flip-tile", never, { "height": "height"; "state": "state"; "width": "width"; }, {}, never, ["*"]>;
}
export declare interface IxFlipTile extends Components.IxFlipTile {
}
export declare class IxFlipTileContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxFlipTileContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxFlipTileContent, "ix-flip-tile-content", never, {}, {}, never, ["*"]>;
}
export declare interface IxFlipTileContent extends Components.IxFlipTileContent {
}
export declare class IxFormField {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxFormField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxFormField, "ix-form-field", never, { "label": "label"; }, {}, never, ["*"]>;
}
export declare interface IxFormField extends Components.IxFormField {
}
export declare class IxGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxGroup, "ix-group", never, { "collapsed": "collapsed"; "expandOnHeaderClick": "expandOnHeaderClick"; "header": "header"; "index": "index"; "selected": "selected"; "subHeader": "subHeader"; "suppressHeaderSelection": "suppressHeaderSelection"; }, {}, never, ["*"]>;
}
export declare interface IxGroup extends Components.IxGroup {
    /**
     * Emits when whole group gets selected.
     */
    selectGroup: EventEmitter<CustomEvent<boolean>>;
    /**
     * Emits when group item gets selected.
     */
    selectItem: EventEmitter<CustomEvent<number>>;
    /**
     * Group collapsed
     */
    collapsedChanged: EventEmitter<CustomEvent<boolean>>;
}
export declare class IxGroupContextMenu {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxGroupContextMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxGroupContextMenu, "ix-group-context-menu", never, {}, {}, never, ["*"]>;
}
export declare interface IxGroupContextMenu extends Components.IxGroupContextMenu {
}
export declare class IxGroupItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxGroupItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxGroupItem, "ix-group-item", never, { "focusable": "focusable"; "icon": "icon"; "index": "index"; "secondaryText": "secondaryText"; "selected": "selected"; "suppressSelection": "suppressSelection"; "text": "text"; }, {}, never, ["*"]>;
}
export declare interface IxGroupItem extends Components.IxGroupItem {
    /**
     * Selection changed
     */
    selectedChanged: EventEmitter<CustomEvent<HTMLIxGroupItemElement>>;
}
export declare class IxIconButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxIconButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxIconButton, "ix-icon-button", never, { "a11yLabel": "a11yLabel"; "color": "color"; "disabled": "disabled"; "ghost": "ghost"; "icon": "icon"; "iconColor": "iconColor"; "loading": "loading"; "outline": "outline"; "oval": "oval"; "size": "size"; "type": "type"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxIconButton extends Components.IxIconButton {
}
export declare class IxIconToggleButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxIconToggleButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxIconToggleButton, "ix-icon-toggle-button", never, { "disabled": "disabled"; "ghost": "ghost"; "icon": "icon"; "loading": "loading"; "outline": "outline"; "pressed": "pressed"; "size": "size"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxIconToggleButton extends Components.IxIconToggleButton {
    /**
     * Pressed change event
     */
    pressedChange: EventEmitter<CustomEvent<boolean>>;
}
export declare class IxInputGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxInputGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxInputGroup, "ix-input-group", never, {}, {}, never, ["*"]>;
}
export declare interface IxInputGroup extends Components.IxInputGroup {
}
export declare class IxKeyValue {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxKeyValue, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxKeyValue, "ix-key-value", never, { "icon": "icon"; "label": "label"; "labelPosition": "labelPosition"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IxKeyValue extends Components.IxKeyValue {
}
export declare class IxKeyValueList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxKeyValueList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxKeyValueList, "ix-key-value-list", never, { "striped": "striped"; }, {}, never, ["*"]>;
}
export declare interface IxKeyValueList extends Components.IxKeyValueList {
}
export declare class IxKpi {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxKpi, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxKpi, "ix-kpi", never, { "label": "label"; "orientation": "orientation"; "state": "state"; "unit": "unit"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IxKpi extends Components.IxKpi {
}
export declare class IxLayoutGrid {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxLayoutGrid, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxLayoutGrid, "ix-layout-grid", never, { "columns": "columns"; "gap": "gap"; "noMargin": "noMargin"; }, {}, never, ["*"]>;
}
export declare interface IxLayoutGrid extends Components.IxLayoutGrid {
}
export declare class IxLinkButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxLinkButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxLinkButton, "ix-link-button", never, { "disabled": "disabled"; "target": "target"; "url": "url"; }, {}, never, ["*"]>;
}
export declare interface IxLinkButton extends Components.IxLinkButton {
}
export declare class IxMapNavigation {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMapNavigation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMapNavigation, "ix-map-navigation", never, { "applicationName": "applicationName"; "hideContextMenu": "hideContextMenu"; "navigationTitle": "navigationTitle"; }, {}, never, ["*"]>;
}
export declare interface IxMapNavigation extends Components.IxMapNavigation {
    /**
     * Navigation toggled
     */
    navigationToggled: EventEmitter<CustomEvent<boolean>>;
    /**
     * Context menu clicked
     */
    contextMenuClick: EventEmitter<CustomEvent<void>>;
}
export declare class IxMapNavigationOverlay {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMapNavigationOverlay, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMapNavigationOverlay, "ix-map-navigation-overlay", never, { "color": "color"; "icon": "icon"; "iconColor": "iconColor"; "name": "name"; }, {}, never, ["*"]>;
}
export declare interface IxMapNavigationOverlay extends Components.IxMapNavigationOverlay {
    /**
     * Event closed
     */
    closeClick: EventEmitter<CustomEvent<any>>;
}
export declare class IxMenu {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMenu, "ix-menu", never, { "applicationDescription": "applicationDescription"; "applicationName": "applicationName"; "enableMapExpand": "enableMapExpand"; "enableSettings": "enableSettings"; "enableToggleTheme": "enableToggleTheme"; "expand": "expand"; "i18nCollapse": "i18nCollapse"; "i18nExpand": "i18nExpand"; "i18nExpandSidebar": "i18nExpandSidebar"; "i18nLegal": "i18nLegal"; "i18nSettings": "i18nSettings"; "i18nToggleTheme": "i18nToggleTheme"; "maxVisibleMenuItems": "maxVisibleMenuItems"; "pinned": "pinned"; "showAbout": "showAbout"; "showSettings": "showSettings"; "startExpanded": "startExpanded"; }, {}, never, ["*"]>;
}
export declare interface IxMenu extends Components.IxMenu {
    /**
     * Menu expanded
     */
    expandChange: EventEmitter<CustomEvent<boolean>>;
    /**
     * Map Sidebar expanded
     */
    mapExpandChange: EventEmitter<CustomEvent<boolean>>;
}
export declare class IxMenuAbout {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMenuAbout, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMenuAbout, "ix-menu-about", never, { "activeTabLabel": "activeTabLabel"; "label": "label"; "show": "show"; }, {}, never, ["*"]>;
}
export declare interface IxMenuAbout extends Components.IxMenuAbout {
    /**
     * About and Legal closed
     */
    close: EventEmitter<CustomEvent<IIxMenuAboutCustomCloseEvent>>;
}
export declare class IxMenuAboutItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMenuAboutItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMenuAboutItem, "ix-menu-about-item", never, { "label": "label"; }, {}, never, ["*"]>;
}
export declare interface IxMenuAboutItem extends Components.IxMenuAboutItem {
    /**
     * Label changed
     */
    labelChange: EventEmitter<CustomEvent<IIxMenuAboutItemCustomLabelChangeEvent>>;
}
export declare class IxMenuAboutNews {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMenuAboutNews, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMenuAboutNews, "ix-menu-about-news", never, { "aboutItemLabel": "aboutItemLabel"; "expanded": "expanded"; "i18nShowMore": "i18nShowMore"; "label": "label"; "offsetBottom": "offsetBottom"; "show": "show"; }, {}, never, ["*"]>;
}
export declare interface IxMenuAboutNews extends Components.IxMenuAboutNews {
    /**
     * Show More button is pressed
     */
    showMore: EventEmitter<CustomEvent<MouseEvent>>;
    /**
     * Popover closed
     */
    closePopover: EventEmitter<CustomEvent<void>>;
}
export declare class IxMenuAvatar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMenuAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMenuAvatar, "ix-menu-avatar", never, { "bottom": "bottom"; "i18nLogout": "i18nLogout"; "image": "image"; "initials": "initials"; "showLogoutButton": "showLogoutButton"; "top": "top"; }, {}, never, ["*"]>;
}
export declare interface IxMenuAvatar extends Components.IxMenuAvatar {
    /**
     * Logout click
     */
    logoutClick: EventEmitter<CustomEvent<any>>;
}
export declare class IxMenuAvatarItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMenuAvatarItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMenuAvatarItem, "ix-menu-avatar-item", never, { "icon": "icon"; "label": "label"; }, {}, never, ["*"]>;
}
export declare interface IxMenuAvatarItem extends Components.IxMenuAvatarItem {
    /**
     * Avatar dropdown item clicked
     */
    itemClick: EventEmitter<CustomEvent<MouseEvent>>;
}
export declare class IxMenuCategory {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMenuCategory, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMenuCategory, "ix-menu-category", never, { "icon": "icon"; "label": "label"; "notifications": "notifications"; }, {}, never, ["*"]>;
}
export declare interface IxMenuCategory extends Components.IxMenuCategory {
}
export declare class IxMenuItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMenuItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMenuItem, "ix-menu-item", never, { "active": "active"; "bottom": "bottom"; "disabled": "disabled"; "home": "home"; "icon": "icon"; "notifications": "notifications"; "tabIcon": "tabIcon"; }, {}, never, ["*"]>;
}
export declare interface IxMenuItem extends Components.IxMenuItem {
}
export declare class IxMenuSettings {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMenuSettings, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMenuSettings, "ix-menu-settings", never, { "activeTabLabel": "activeTabLabel"; "label": "label"; "show": "show"; }, {}, never, ["*"]>;
}
export declare interface IxMenuSettings extends Components.IxMenuSettings {
    /**
     * Popover closed
     */
    close: EventEmitter<CustomEvent<IIxMenuSettingsCustomCloseEvent>>;
}
export declare class IxMenuSettingsItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMenuSettingsItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMenuSettingsItem, "ix-menu-settings-item", never, { "label": "label"; }, {}, never, ["*"]>;
}
export declare interface IxMenuSettingsItem extends Components.IxMenuSettingsItem {
    /**
     * Label changed
     */
    labelChange: EventEmitter<CustomEvent<IIxMenuSettingsItemCustomLabelChangeEvent>>;
}
export declare class IxMessageBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxMessageBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxMessageBar, "ix-message-bar", never, { "dismissible": "dismissible"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IxMessageBar extends Components.IxMessageBar {
    /**
     * An event emitted when the close button is clicked
     */
    closedChange: EventEmitter<CustomEvent<any>>;
}
export declare class IxModal {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxModal, "ix-modal", never, { "animation": "animation"; "backdrop": "backdrop"; "beforeDismiss": "beforeDismiss"; "centered": "centered"; "closeOnBackdropClick": "closeOnBackdropClick"; "closeOnEscape": "closeOnEscape"; "keyboard": "keyboard"; "size": "size"; }, {}, never, ["*"]>;
}
export declare interface IxModal extends Components.IxModal {
    /**
     * Dialog close
     */
    dialogClose: EventEmitter<CustomEvent<any>>;
    /**
     * Dialog cancel
     */
    dialogDismiss: EventEmitter<CustomEvent<any>>;
}
export declare class IxModalContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxModalContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxModalContent, "ix-modal-content", never, {}, {}, never, ["*"]>;
}
export declare interface IxModalContent extends Components.IxModalContent {
}
export declare class IxModalExample {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxModalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxModalExample, "ix-modal-example", never, {}, {}, never, ["*"]>;
}
export declare interface IxModalExample extends Components.IxModalExample {
}
export declare class IxModalFooter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxModalFooter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxModalFooter, "ix-modal-footer", never, {}, {}, never, ["*"]>;
}
export declare interface IxModalFooter extends Components.IxModalFooter {
}
export declare class IxModalHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxModalHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxModalHeader, "ix-modal-header", never, { "hideClose": "hideClose"; "icon": "icon"; "iconColor": "iconColor"; }, {}, never, ["*"]>;
}
export declare interface IxModalHeader extends Components.IxModalHeader {
    /**
     * Emits when close icon is clicked and closes the modal
  Can be prevented, in which case only the event is triggered, and the modal remains open
     */
    closeClick: EventEmitter<CustomEvent<MouseEvent>>;
}
export declare class IxPagination {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxPagination, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxPagination, "ix-pagination", never, { "advanced": "advanced"; "count": "count"; "i18nItems": "i18nItems"; "i18nOf": "i18nOf"; "i18nPage": "i18nPage"; "itemCount": "itemCount"; "selectedPage": "selectedPage"; "showItemCount": "showItemCount"; }, {}, never, ["*"]>;
}
export declare interface IxPagination extends Components.IxPagination {
    /**
     * Page selection event
     */
    pageSelected: EventEmitter<CustomEvent<number>>;
    /**
     * Item count change event
     */
    itemCountChanged: EventEmitter<CustomEvent<number>>;
}
export declare class IxPane {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxPane, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxPane, "ix-pane", never, { "borderless": "borderless"; "composition": "composition"; "expanded": "expanded"; "heading": "heading"; "hideOnCollapse": "hideOnCollapse"; "icon": "icon"; "size": "size"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxPane extends Components.IxPane {
    /**
     * This event is triggered when the pane either expands or contracts
     */
    expandedChanged: EventEmitter<CustomEvent<IIxPaneExpandedChangedEvent>>;
    /**
     * This event is triggered when the variant of the pane is changed
     */
    variantChanged: EventEmitter<CustomEvent<IIxPaneVariantChangedEvent>>;
    /**
     * This event is triggered when the variant of the pane is changed
     */
    borderlessChanged: EventEmitter<CustomEvent<IIxPaneBorderlessChangedEvent>>;
}
export declare class IxPaneLayout {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxPaneLayout, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxPaneLayout, "ix-pane-layout", never, { "borderless": "borderless"; "layout": "layout"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxPaneLayout extends Components.IxPaneLayout {
}
export declare class IxPill {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxPill, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxPill, "ix-pill", never, { "alignLeft": "alignLeft"; "background": "background"; "color": "color"; "icon": "icon"; "outline": "outline"; "pillColor": "pillColor"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxPill extends Components.IxPill {
}
export declare class IxPushCard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxPushCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxPushCard, "ix-push-card", never, { "collapse": "collapse"; "heading": "heading"; "icon": "icon"; "notification": "notification"; "subheading": "subheading"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxPushCard extends Components.IxPushCard {
}
export declare class IxRow {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxRow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxRow, "ix-row", never, {}, {}, never, ["*"]>;
}
export declare interface IxRow extends Components.IxRow {
}
export declare class IxSelect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxSelect, "ix-select", never, { "allowClear": "allowClear"; "disabled": "disabled"; "editable": "editable"; "hideListHeader": "hideListHeader"; "i18nNoMatches": "i18nNoMatches"; "i18nPlaceholder": "i18nPlaceholder"; "i18nPlaceholderEditable": "i18nPlaceholderEditable"; "i18nSelectListHeader": "i18nSelectListHeader"; "mode": "mode"; "readonly": "readonly"; "selectedIndices": "selectedIndices"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IxSelect extends Components.IxSelect {
    /**
     * Value changed @since 2.0.0
     */
    valueChange: EventEmitter<CustomEvent<string | string[]>>;
    /**
     * Item selection changed @deprecated since 2.0.0. Use `valueChange` instead.
     */
    itemSelectionChange: EventEmitter<CustomEvent<string[]>>;
    /**
     * Event dispatched whenever the text input changes. @since 2.0.0
     */
    inputChange: EventEmitter<CustomEvent<string>>;
    /**
     * Item added to selection
     */
    addItem: EventEmitter<CustomEvent<string>>;
}
export declare class IxSelectItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxSelectItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxSelectItem, "ix-select-item", never, { "label": "label"; "selected": "selected"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IxSelectItem extends Components.IxSelectItem {
    /**
     * Item clicked
     */
    itemClick: EventEmitter<CustomEvent<string>>;
}
export declare class IxSlider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxSlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxSlider, "ix-slider", never, { "disabled": "disabled"; "error": "error"; "marker": "marker"; "max": "max"; "min": "min"; "step": "step"; "trace": "trace"; "traceReference": "traceReference"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IxSlider extends Components.IxSlider {
    valueChange: EventEmitter<CustomEvent<number>>;
}
export declare class IxSpinner {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxSpinner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxSpinner, "ix-spinner", never, { "size": "size"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxSpinner extends Components.IxSpinner {
}
export declare class IxSplitButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxSplitButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxSplitButton, "ix-split-button", never, { "disabled": "disabled"; "ghost": "ghost"; "icon": "icon"; "label": "label"; "outline": "outline"; "placement": "placement"; "splitIcon": "splitIcon"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxSplitButton extends Components.IxSplitButton {
    /**
     * Button clicked
     */
    buttonClick: EventEmitter<CustomEvent<MouseEvent>>;
}
export declare class IxSplitButtonItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxSplitButtonItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxSplitButtonItem, "ix-split-button-item", never, { "icon": "icon"; "label": "label"; }, {}, never, ["*"]>;
}
export declare interface IxSplitButtonItem extends Components.IxSplitButtonItem {
    /**
     * Dropdown item clicked
     */
    itemClick: EventEmitter<CustomEvent<MouseEvent>>;
}
export declare class IxTabItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxTabItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxTabItem, "ix-tab-item", never, { "counter": "counter"; "disabled": "disabled"; "icon": "icon"; "layout": "layout"; "placement": "placement"; "rounded": "rounded"; "selected": "selected"; "small": "small"; }, {}, never, ["*"]>;
}
export declare interface IxTabItem extends Components.IxTabItem {
    /**
     * On tab click @since 2.0.0
     */
    tabClick: EventEmitter<CustomEvent<IIxTabItemTabClickDetail>>;
}
export declare class IxTabs {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxTabs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxTabs, "ix-tabs", never, { "layout": "layout"; "placement": "placement"; "rounded": "rounded"; "selected": "selected"; "small": "small"; }, {}, never, ["*"]>;
}
export declare interface IxTabs extends Components.IxTabs {
    /**
     * `selected` property changed @since 2.0.0
     */
    selectedChange: EventEmitter<CustomEvent<number>>;
}
export declare class IxTile {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxTile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxTile, "ix-tile", never, { "size": "size"; }, {}, never, ["*"]>;
}
export declare interface IxTile extends Components.IxTile {
}
export declare class IxTimePicker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxTimePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxTimePicker, "ix-time-picker", never, { "corners": "corners"; "format": "format"; "individual": "individual"; "showHour": "showHour"; "showMinutes": "showMinutes"; "showSeconds": "showSeconds"; "showTimeReference": "showTimeReference"; "standaloneAppearance": "standaloneAppearance"; "textSelectTime": "textSelectTime"; "textTime": "textTime"; "time": "time"; "timeReference": "timeReference"; }, {}, never, ["*"]>;
}
export declare interface IxTimePicker extends Components.IxTimePicker {
    /**
     * Time event
     */
    timeSelect: EventEmitter<CustomEvent<string>>;
    /**
     * Time event @deprecated Will be removed in 3.0.0. Use `time-select` event.
     */
    done: EventEmitter<CustomEvent<string>>;
    /**
     * Time change event
     */
    timeChange: EventEmitter<CustomEvent<string>>;
}
export declare class IxToast {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxToast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxToast, "ix-toast", never, { "autoClose": "autoClose"; "autoCloseDelay": "autoCloseDelay"; "icon": "icon"; "iconColor": "iconColor"; "toastTitle": "toastTitle"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IxToast extends Components.IxToast {
    /**
     * Toast closed
     */
    closeToast: EventEmitter<CustomEvent<any>>;
}
export declare class IxToastContainer {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxToastContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxToastContainer, "ix-toast-container", never, { "containerClass": "containerClass"; "containerId": "containerId"; "position": "position"; }, {}, never, ["*"]>;
}
export declare interface IxToastContainer extends Components.IxToastContainer {
}
export declare class IxToggle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxToggle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxToggle, "ix-toggle", never, { "checked": "checked"; "disabled": "disabled"; "hideText": "hideText"; "indeterminate": "indeterminate"; "textIndeterminate": "textIndeterminate"; "textOff": "textOff"; "textOn": "textOn"; }, {}, never, ["*"]>;
}
export declare interface IxToggle extends Components.IxToggle {
    /**
     * An event will be dispatched each time the slide-toggle changes its value.
     */
    checkedChange: EventEmitter<CustomEvent<boolean>>;
}
export declare class IxToggleButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxToggleButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxToggleButton, "ix-toggle-button", never, { "disabled": "disabled"; "ghost": "ghost"; "icon": "icon"; "loading": "loading"; "outline": "outline"; "pressed": "pressed"; "variant": "variant"; }, {}, never, ["*"]>;
}
export declare interface IxToggleButton extends Components.IxToggleButton {
    /**
     * Pressed change event
     */
    pressedChange: EventEmitter<CustomEvent<boolean>>;
}
export declare class IxTooltip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxTooltip, "ix-tooltip", never, { "for": "for"; "interactive": "interactive"; "placement": "placement"; "titleContent": "titleContent"; }, {}, never, ["*"]>;
}
export declare interface IxTooltip extends Components.IxTooltip {
}
export declare class IxTreeItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxTreeItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxTreeItem, "ix-tree-item", never, { "context": "context"; "hasChildren": "hasChildren"; "text": "text"; }, {}, never, ["*"]>;
}
export declare interface IxTreeItem extends Components.IxTreeItem {
    /**
     * Expand/Collapsed toggled
     */
    toggle: EventEmitter<CustomEvent<void>>;
    /**
     * Clicked
     */
    itemClick: EventEmitter<CustomEvent<void>>;
}
export declare class IxTypography {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxTypography, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxTypography, "ix-typography", never, { "bold": "bold"; "color": "color"; "format": "format"; "textColor": "textColor"; "textDecoration": "textDecoration"; }, {}, never, ["*"]>;
}
export declare interface IxTypography extends Components.IxTypography {
}
export declare class IxUpload {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxUpload, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxUpload, "ix-upload", never, { "accept": "accept"; "disabled": "disabled"; "i18nUploadDisabled": "i18nUploadDisabled"; "i18nUploadFile": "i18nUploadFile"; "loadingText": "loadingText"; "multiline": "multiline"; "multiple": "multiple"; "selectFileText": "selectFileText"; "state": "state"; "uploadFailedText": "uploadFailedText"; "uploadSuccessText": "uploadSuccessText"; }, {}, never, ["*"]>;
}
export declare interface IxUpload extends Components.IxUpload {
    /**
     * You get an array of Files after drop-action or browse action is finished
     */
    filesChanged: EventEmitter<CustomEvent<Array<File>>>;
}
export declare class IxValidationTooltip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxValidationTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxValidationTooltip, "ix-validation-tooltip", never, { "message": "message"; "placement": "placement"; "suppressAutomaticPlacement": "suppressAutomaticPlacement"; }, {}, never, ["*"]>;
}
export declare interface IxValidationTooltip extends Components.IxValidationTooltip {
}
export declare class IxWorkflowStep {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxWorkflowStep, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxWorkflowStep, "ix-workflow-step", never, { "clickable": "clickable"; "disabled": "disabled"; "selected": "selected"; "status": "status"; "vertical": "vertical"; }, {}, never, ["*"]>;
}
export declare interface IxWorkflowStep extends Components.IxWorkflowStep {
}
export declare class IxWorkflowSteps {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<IxWorkflowSteps, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IxWorkflowSteps, "ix-workflow-steps", never, { "clickable": "clickable"; "selectedIndex": "selectedIndex"; "vertical": "vertical"; }, {}, never, ["*"]>;
}
export declare interface IxWorkflowSteps extends Components.IxWorkflowSteps {
    /**
     * On step selected event
     */
    stepSelected: EventEmitter<CustomEvent<number>>;
}
