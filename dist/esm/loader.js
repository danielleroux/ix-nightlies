import { b as bootstrapLazy } from './index-f18c5ad1.js';
export { s as setNonce } from './index-f18c5ad1.js';
import { g as globalScripts } from './app-globals-7903cfd1.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy(JSON.parse("[[\"ix-datetime-picker\",[[1,\"ix-datetime-picker\",{\"range\":[4],\"showHour\":[4,\"show-hour\"],\"showMinutes\":[4,\"show-minutes\"],\"showSeconds\":[4,\"show-seconds\"],\"minDate\":[1,\"min-date\"],\"maxDate\":[1,\"max-date\"],\"dateFormat\":[1,\"date-format\"],\"timeFormat\":[1,\"time-format\"],\"from\":[1],\"to\":[1],\"time\":[1],\"showTimeReference\":[8,\"show-time-reference\"],\"timeReference\":[1,\"time-reference\"],\"textSelectDate\":[1,\"text-select-date\"],\"i18nDone\":[1,\"i18n-done\"],\"weekStartIndex\":[2,\"week-start-index\"],\"locale\":[1],\"eventDelimiter\":[1,\"event-delimiter\"]}]]],[\"ix-date-dropdown\",[[1,\"ix-date-dropdown\",{\"format\":[1],\"range\":[4],\"from\":[1],\"to\":[1],\"minDate\":[1,\"min-date\"],\"maxDate\":[1,\"max-date\"],\"dateRangeId\":[1,\"date-range-id\"],\"customRangeAllowed\":[4,\"custom-range-allowed\"],\"dateRangeOptions\":[16],\"i18nCustomItem\":[1,\"i18n-custom-item\"],\"i18nDone\":[1,\"i18n-done\"],\"i18nNoRange\":[1,\"i18n-no-range\"],\"today\":[1],\"selectedDateRangeId\":[32],\"currentRangeValue\":[32],\"triggerRef\":[32],\"getDateRange\":[64]},null,{\"dateRangeId\":[\"onDateRangeIdChange\"],\"to\":[\"onDateRangeIdChange\"],\"from\":[\"onDateRangeIdChange\"],\"dateRangeOptions\":[\"onDateRangeOptionsChange\"]}]]],[\"ix-pagination\",[[1,\"ix-pagination\",{\"advanced\":[4],\"itemCount\":[2,\"item-count\"],\"showItemCount\":[4,\"show-item-count\"],\"count\":[2],\"selectedPage\":[1026,\"selected-page\"],\"i18nPage\":[1,\"i-1-8n-page\"],\"i18nOf\":[1,\"i-1-8n-of\"],\"i18nItems\":[1,\"i-1-8n-items\"]}]]],[\"ix-menu-avatar\",[[1,\"ix-menu-avatar\",{\"top\":[1],\"bottom\":[1],\"image\":[1],\"initials\":[1],\"i18nLogout\":[1,\"i-1-8n-logout\"],\"showLogoutButton\":[4,\"show-logout-button\"],\"showContextMenu\":[32]}]]],[\"ix-card-list\",[[1,\"ix-card-list\",{\"label\":[1],\"collapse\":[1028],\"listStyle\":[1,\"list-style\"],\"maxVisibleCards\":[2,\"max-visible-cards\"],\"showAllCount\":[2,\"show-all-count\"],\"suppressOverflowHandling\":[4,\"suppress-overflow-handling\"],\"i18nShowAll\":[1,\"i-1-8n-show-all\"],\"i18nMoreCards\":[1,\"i-1-8n-more-cards\"],\"hasOverflowingElements\":[32],\"numberOfOverflowingElements\":[32],\"numberOfAllChildElements\":[32],\"leftScrollDistance\":[32],\"rightScrollDistance\":[32]},[[9,\"resize\",\"detectOverflow\"]]]]],[\"ix-map-navigation\",[[1,\"ix-map-navigation\",{\"applicationName\":[1,\"application-name\"],\"navigationTitle\":[1,\"navigation-title\"],\"hideContextMenu\":[4,\"hide-context-menu\"],\"isSidebarOpen\":[32],\"hasContentHeader\":[32],\"toggleSidebar\":[64],\"openOverlay\":[64],\"closeOverlay\":[64]}]]],[\"ix-application-switch-modal\",[[1,\"ix-application-switch-modal\",{\"config\":[16]}]]],[\"ix-basic-navigation\",[[1,\"ix-basic-navigation\",{\"applicationName\":[1,\"application-name\"],\"hideHeader\":[4,\"hide-header\"],\"forceBreakpoint\":[1,\"force-breakpoint\"],\"breakpoints\":[16],\"breakpoint\":[32]},null,{\"hideHeader\":[\"onHideHeaderChange\"],\"breakpoints\":[\"onBreakpointsChange\"]}]]],[\"ix-menu-category\",[[1,\"ix-menu-category\",{\"label\":[1],\"icon\":[1],\"notifications\":[2],\"menuExpand\":[32],\"showItems\":[32],\"showDropdown\":[32],\"nestedItems\":[32]}]]],[\"ix-push-card\",[[1,\"ix-push-card\",{\"icon\":[1],\"notification\":[1],\"heading\":[1],\"subheading\":[1],\"variant\":[1],\"collapse\":[4]}]]],[\"ix-breadcrumb\",[[1,\"ix-breadcrumb\",{\"visibleItemCount\":[2,\"visible-item-count\"],\"nextItems\":[16],\"ghost\":[4],\"ariaLabelPreviousButton\":[1,\"aria-label-previous-button\"],\"previousButtonRef\":[32],\"nextButtonRef\":[32],\"items\":[32],\"isPreviousDropdownExpanded\":[32]},null,{\"nextItems\":[\"onNextItemsChange\"]}]]],[\"ix-category-filter\",[[1,\"ix-category-filter\",{\"disabled\":[4],\"readonly\":[4],\"filterState\":[16],\"placeholder\":[1],\"categories\":[16],\"nonSelectableCategories\":[16],\"suggestions\":[16],\"icon\":[1],\"hideIcon\":[4,\"hide-icon\"],\"repeatCategories\":[4,\"repeat-categories\"],\"tmpDisableScrollIntoView\":[4,\"tmp-disable-scroll-into-view\"],\"labelCategories\":[1,\"label-categories\"],\"i18nPlainText\":[1,\"i-1-8n-plain-text\"],\"showDropdown\":[32],\"textInput\":[32],\"hasFocus\":[32],\"categoryLogicalOperator\":[32],\"inputValue\":[32],\"category\":[32],\"filterTokens\":[32]},null,{\"filterState\":[\"watchFilterState\"]}]]],[\"ix-dropdown-button\",[[1,\"ix-dropdown-button\",{\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"disabled\":[4],\"label\":[1],\"icon\":[1],\"closeBehavior\":[8,\"close-behavior\"],\"placement\":[1],\"dropdownAnchor\":[32]}]]],[\"ix-group\",[[1,\"ix-group\",{\"suppressHeaderSelection\":[4,\"suppress-header-selection\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"collapsed\":[1540],\"selected\":[1540],\"index\":[1538],\"expandOnHeaderClick\":[4,\"expand-on-header-click\"],\"itemSelected\":[32],\"dropdownTriggerRef\":[32],\"slotSize\":[32],\"footerVisible\":[32]}]]],[\"ix-menu\",[[1,\"ix-menu\",{\"showSettings\":[1028,\"show-settings\"],\"showAbout\":[1028,\"show-about\"],\"enableToggleTheme\":[4,\"enable-toggle-theme\"],\"enableSettings\":[4,\"enable-settings\"],\"enableMapExpand\":[4,\"enable-map-expand\"],\"applicationName\":[1,\"application-name\"],\"applicationDescription\":[1,\"application-description\"],\"maxVisibleMenuItems\":[2,\"max-visible-menu-items\"],\"i18nExpandSidebar\":[1,\"i-1-8n-expand-sidebar\"],\"expand\":[1540],\"pinned\":[4],\"i18nLegal\":[1,\"i-1-8n-legal\"],\"i18nSettings\":[1,\"i-1-8n-settings\"],\"i18nToggleTheme\":[1,\"i-1-8n-toggle-theme\"],\"i18nExpand\":[1,\"i-1-8n-expand\"],\"i18nCollapse\":[1,\"i-1-8n-collapse\"],\"showPinned\":[32],\"mapExpand\":[32],\"activeTab\":[32],\"breakpoint\":[32],\"itemsScrollShadowTop\":[32],\"itemsScrollShadowBottom\":[32],\"applicationLayoutContext\":[32],\"toggleMapExpand\":[64],\"toggleMenu\":[64],\"toggleSettings\":[64],\"toggleAbout\":[64]},[[9,\"resize\",\"handleOverflowIndicator\"],[0,\"close\",\"onOverlayClose\"]],{\"pinned\":[\"pinnedChange\"]}]]],[\"ix-menu-about\",[[1,\"ix-menu-about\",{\"activeTabLabel\":[1025,\"active-tab-label\"],\"label\":[1],\"show\":[4],\"items\":[32]},null,{\"activeTabLabel\":[\"updateTab\"]}]]],[\"ix-menu-about-news\",[[1,\"ix-menu-about-news\",{\"show\":[1540],\"label\":[1],\"i18nShowMore\":[1,\"i-1-8n-show-more\"],\"aboutItemLabel\":[1,\"about-item-label\"],\"offsetBottom\":[2,\"offset-bottom\"],\"expanded\":[4]}]]],[\"ix-menu-settings\",[[1,\"ix-menu-settings\",{\"activeTabLabel\":[1025,\"active-tab-label\"],\"label\":[1],\"show\":[4],\"items\":[32]},null,{\"activeTabLabel\":[\"updateTab\"]}]]],[\"ix-split-button\",[[1,\"ix-split-button\",{\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"label\":[1],\"icon\":[1],\"splitIcon\":[1,\"split-icon\"],\"disabled\":[4],\"placement\":[1],\"toggle\":[32]}]]],[\"ix-action-card\",[[1,\"ix-action-card\",{\"variant\":[1],\"icon\":[1],\"heading\":[1],\"subheading\":[1],\"selected\":[4]}]]],[\"ix-content-header\",[[1,\"ix-content-header\",{\"variant\":[1],\"headerTitle\":[1,\"header-title\"],\"headerSubtitle\":[1,\"header-subtitle\"],\"hasBackButton\":[4,\"has-back-button\"]}]]],[\"ix-empty-state\",[[1,\"ix-empty-state\",{\"layout\":[1],\"icon\":[1],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"action\":[1]}]]],[\"ix-modal-example\",[[0,\"ix-modal-example\"]]],[\"ix-pane\",[[1,\"ix-pane\",{\"heading\":[1],\"variant\":[1],\"hideOnCollapse\":[4,\"hide-on-collapse\"],\"size\":[1],\"borderless\":[4],\"expanded\":[1028],\"composition\":[1025],\"icon\":[1],\"ignoreLayoutSettings\":[4,\"ignore-layout-settings\"],\"isMobile\":[1028,\"is-mobile\"],\"expandIcon\":[32],\"showContent\":[32],\"minimizeIcon\":[32],\"floating\":[32],\"parentWidthPx\":[32],\"parentHeightPx\":[32]},null,{\"isMobile\":[\"onMobileChange\"],\"composition\":[\"onPositionChange\"],\"hideOnCollapse\":[\"onHideOnCollapseChange\"],\"variant\":[\"onVariantChange\"],\"borderless\":[\"onBorderlessChange\"],\"expanded\":[\"onExpandedChange\"],\"parentHeightPx\":[\"onParentSizeChange\"],\"parentWidthPx\":[\"onParentSizeChange\"],\"size\":[\"onSizeChange\"]}]]],[\"ix-toast-container\",[[1,\"ix-toast-container\",{\"containerId\":[1,\"container-id\"],\"containerClass\":[1,\"container-class\"],\"position\":[1],\"showToast\":[64]},null,{\"position\":[\"onPositionChange\"]}]]],[\"ix-chip\",[[1,\"ix-chip\",{\"variant\":[513],\"active\":[4],\"closable\":[4],\"icon\":[1],\"background\":[1],\"color\":[1],\"chipColor\":[1,\"chip-color\"],\"outline\":[4]}]]],[\"ix-drawer\",[[1,\"ix-drawer\",{\"show\":[1028],\"closeOnClickOutside\":[4,\"close-on-click-outside\"],\"fullHeight\":[4,\"full-height\"],\"minWidth\":[2,\"min-width\"],\"maxWidth\":[2,\"max-width\"],\"width\":[8],\"toggleDrawer\":[64]},null,{\"show\":[\"onShowChanged\"]}]]],[\"ix-expanding-search\",[[1,\"ix-expanding-search\",{\"icon\":[1],\"placeholder\":[1],\"value\":[1025],\"fullWidth\":[4,\"full-width\"],\"isFieldChanged\":[32],\"expanded\":[32],\"hasFocus\":[32]}]]],[\"ix-flip-tile\",[[1,\"ix-flip-tile\",{\"state\":[1],\"height\":[8],\"width\":[8],\"index\":[32],\"isFlipAnimationActive\":[32]}]]],[\"ix-message-bar\",[[1,\"ix-message-bar\",{\"type\":[1],\"dismissible\":[4],\"icon\":[32],\"color\":[32]}]]],[\"ix-slider\",[[1,\"ix-slider\",{\"step\":[2],\"min\":[2],\"max\":[2],\"value\":[2],\"marker\":[16],\"trace\":[4],\"traceReference\":[2,\"trace-reference\"],\"disabled\":[4],\"error\":[8],\"rangeInput\":[32],\"rangeMin\":[32],\"rangeMax\":[32],\"rangeTraceReference\":[32],\"showTooltip\":[32]},null,{\"showTooltip\":[\"onShowTooltipChange\"],\"value\":[\"updateRangeVariables\"],\"max\":[\"updateRangeVariables\"],\"min\":[\"updateRangeVariables\"],\"traceReference\":[\"updateRangeVariables\"]}]]],[\"ix-upload\",[[1,\"ix-upload\",{\"accept\":[1],\"multiple\":[4],\"multiline\":[4],\"disabled\":[4],\"state\":[1],\"selectFileText\":[1,\"select-file-text\"],\"loadingText\":[1,\"loading-text\"],\"uploadFailedText\":[1,\"upload-failed-text\"],\"uploadSuccessText\":[1,\"upload-success-text\"],\"i18nUploadFile\":[1,\"i-1-8n-upload-file\"],\"i18nUploadDisabled\":[1,\"i-1-8n-upload-disabled\"],\"isFileOver\":[32],\"setFilesToUpload\":[64]}]]],[\"ix-blind\",[[1,\"ix-blind\",{\"collapsed\":[1540],\"label\":[1],\"sublabel\":[1],\"icon\":[1],\"variant\":[1]},null,{\"collapsed\":[\"animation\"]}]]],[\"ix-dropdown-header\",[[1,\"ix-dropdown-header\",{\"label\":[1]}]]],[\"ix-icon-toggle-button\",[[1,\"ix-icon-toggle-button\",{\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"icon\":[1],\"pressed\":[4],\"size\":[1],\"disabled\":[516],\"loading\":[4]},null,{\"variant\":[\"onVariantChange\"],\"ghost\":[\"onGhostChange\"],\"outline\":[\"onOutlineChange\"]}]]],[\"ix-modal-loading\",[[1,\"ix-modal-loading\"]]],[\"ix-split-button-item\",[[1,\"ix-split-button-item\",{\"icon\":[1],\"label\":[1],\"getDropdownItemElement\":[64]}]]],[\"ix-toggle-button\",[[1,\"ix-toggle-button\",{\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"disabled\":[516],\"loading\":[4],\"icon\":[1],\"pressed\":[4]},null,{\"variant\":[\"onVariantChange\"],\"ghost\":[\"onGhostChange\"],\"outline\":[\"onOutlineChange\"]}]]],[\"ix-tree\",[[1,\"ix-tree\",{\"root\":[1],\"model\":[16],\"renderItem\":[16],\"context\":[1040]},null,{\"model\":[\"modelChange\"]}]]],[\"ix-application\",[[1,\"ix-application\",{\"theme\":[1],\"themeSystemAppearance\":[4,\"theme-system-appearance\"],\"forceBreakpoint\":[1,\"force-breakpoint\"],\"breakpoints\":[16],\"appSwitchConfig\":[16],\"breakpoint\":[32],\"applicationSidebarSlotted\":[32]},null,{\"breakpoints\":[\"onBreakpointsChange\"],\"theme\":[\"changeTheme\"],\"themeSystemAppearance\":[\"changeTheme\"],\"appSwitchConfig\":[\"onApplicationSidebarChange\"],\"applicationSidebarSlotted\":[\"onApplicationSidebarChange\"]}]]],[\"ix-application-sidebar\",[[1,\"ix-application-sidebar\",{\"visible\":[32]},[[8,\"application-sidebar-toggle\",\"listenToggleEvent\"]]]]],[\"ix-content\",[[1,\"ix-content\",{\"isContentHeaderSlotted\":[32]}]]],[\"ix-css-grid\",[[1,\"ix-css-grid\",{\"templates\":[16],\"currentTemplate\":[32]}]]],[\"ix-css-grid-item\",[[1,\"ix-css-grid-item\",{\"itemName\":[1,\"item-name\"]}]]],[\"ix-dropdown-quick-actions\",[[1,\"ix-dropdown-quick-actions\"]]],[\"ix-event-list\",[[1,\"ix-event-list\",{\"itemHeight\":[8,\"item-height\"],\"compact\":[4],\"animated\":[4],\"chevron\":[4]},null,{\"chevron\":[\"watchChevron\"]}]]],[\"ix-event-list-item\",[[1,\"ix-event-list-item\",{\"color\":[1],\"itemColor\":[1,\"item-color\"],\"selected\":[4],\"disabled\":[4],\"chevron\":[4]},[[1,\"click\",\"handleItemClick\"]]]]],[\"ix-flip-tile-content\",[[1,\"ix-flip-tile-content\",{\"contentVisible\":[4,\"content-visible\"]}]]],[\"ix-form-field\",[[1,\"ix-form-field\",{\"label\":[1]}]]],[\"ix-input-group\",[[1,\"ix-input-group\",{\"inputPaddingLeft\":[32],\"inputPaddingRight\":[32]}]]],[\"ix-key-value\",[[1,\"ix-key-value\",{\"icon\":[1],\"label\":[1],\"labelPosition\":[1,\"label-position\"],\"value\":[1]}]]],[\"ix-key-value-list\",[[1,\"ix-key-value-list\",{\"striped\":[4]}]]],[\"ix-kpi\",[[1,\"ix-kpi\",{\"label\":[1],\"value\":[8],\"unit\":[1],\"state\":[1],\"orientation\":[1]}]]],[\"ix-link-button\",[[1,\"ix-link-button\",{\"disabled\":[4],\"url\":[1],\"target\":[1]}]]],[\"ix-menu-about-item\",[[1,\"ix-menu-about-item\",{\"label\":[513]},null,{\"label\":[\"watchLabel\"]}]]],[\"ix-menu-settings-item\",[[1,\"ix-menu-settings-item\",{\"label\":[513]},null,{\"label\":[\"watchLabel\"]}]]],[\"ix-modal\",[[1,\"ix-modal\",{\"size\":[1],\"animation\":[4],\"backdrop\":[4],\"closeOnBackdropClick\":[4,\"close-on-backdrop-click\"],\"beforeDismiss\":[16],\"centered\":[4],\"keyboard\":[4],\"closeOnEscape\":[4,\"close-on-escape\"],\"modalVisible\":[32],\"showModal\":[64],\"dismissModal\":[64],\"closeModal\":[64]}]]],[\"ix-modal-footer\",[[1,\"ix-modal-footer\"]]],[\"ix-pane-layout\",[[1,\"ix-pane-layout\",{\"layout\":[1],\"variant\":[1],\"borderless\":[4],\"isMobile\":[32],\"paneElements\":[32]},[[0,\"slotChanged\",\"onSlotChanged\"],[0,\"hideOnCollapseChanged\",\"onCollapsibleChanged\"],[0,\"variantChanged\",\"onVariantChanged\"]],{\"paneElements\":[\"onPaneElementsChange\"],\"variant\":[\"onVariableChange\"],\"borderless\":[\"onBorderChange\"],\"layout\":[\"onLayoutChange\"],\"isMobile\":[\"onMobileChange\"]}]]],[\"ix-pill\",[[1,\"ix-pill\",{\"variant\":[513],\"outline\":[4],\"icon\":[1],\"background\":[1],\"color\":[1],\"pillColor\":[1,\"pill-color\"],\"alignLeft\":[4,\"align-left\"]}]]],[\"ix-playground-internal\",[[2,\"ix-playground-internal\"]]],[\"ix-tile\",[[1,\"ix-tile\",{\"size\":[1],\"hasHeaderSlot\":[32],\"hasFooterSlot\":[32]}]]],[\"ix-toggle\",[[1,\"ix-toggle\",{\"checked\":[1540],\"disabled\":[4],\"indeterminate\":[1540],\"textOn\":[1,\"text-on\"],\"textOff\":[1,\"text-off\"],\"textIndeterminate\":[1,\"text-indeterminate\"],\"hideText\":[4,\"hide-text\"]}]]],[\"ix-validation-tooltip\",[[1,\"ix-validation-tooltip\",{\"message\":[1],\"placement\":[1],\"suppressAutomaticPlacement\":[4,\"suppress-automatic-placement\"],\"isInputValid\":[32],\"tooltipPosition\":[32],\"arrowPosition\":[32]},null,{\"isInputValid\":[\"validationChanged\"]}]]],[\"ix-workflow-step\",[[1,\"ix-workflow-step\",{\"vertical\":[4],\"disabled\":[4],\"status\":[1],\"clickable\":[4],\"selected\":[4],\"position\":[1],\"iconName\":[32],\"iconColor\":[32]},null,{\"selected\":[\"selectedHandler\"],\"disabled\":[\"watchPropHandler\"],\"status\":[\"watchPropHandler\"]}]]],[\"ix-workflow-steps\",[[1,\"ix-workflow-steps\",{\"vertical\":[4],\"clickable\":[4],\"selectedIndex\":[2,\"selected-index\"]},[[0,\"selectedChanged\",\"onStepSelectionChanged\"]]]]],[\"ix-dropdown-item\",[[1,\"ix-dropdown-item\",{\"label\":[1],\"icon\":[1],\"hover\":[4],\"disabled\":[4],\"checked\":[4],\"isSubMenu\":[4,\"is-sub-menu\"],\"suppressChecked\":[4,\"suppress-checked\"],\"emitItemClick\":[64],\"getDropdownItemElement\":[64]}]]],[\"ix-dropdown\",[[1,\"ix-dropdown\",{\"suppressAutomaticPlacement\":[4,\"suppress-automatic-placement\"],\"show\":[1540],\"trigger\":[1],\"anchor\":[1],\"closeBehavior\":[8,\"close-behavior\"],\"placement\":[1],\"positioningStrategy\":[1,\"positioning-strategy\"],\"header\":[1],\"offset\":[16],\"overwriteDropdownStyle\":[16],\"discoverAllSubmenus\":[4,\"discover-all-submenus\"],\"discoverSubmenu\":[64],\"updatePosition\":[64]},[[0,\"ix-assign-sub-menu\",\"cacheSubmenuId\"]],{\"show\":[\"changedShow\"],\"trigger\":[\"changedTrigger\"]}]]],[\"ix-icon-button_2\",[[1,\"ix-icon-button\",{\"a11yLabel\":[1,\"a11y-label\"],\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"oval\":[4],\"icon\":[1],\"size\":[1],\"color\":[1],\"iconColor\":[1,\"icon-color\"],\"disabled\":[4],\"type\":[1],\"loading\":[4]}],[1,\"ix-spinner\",{\"variant\":[1],\"size\":[1],\"hideTrack\":[4,\"hide-track\"]}]]],[\"ix-select\",[[1,\"ix-select\",{\"selectedIndices\":[1025,\"selected-indices\"],\"value\":[1025],\"allowClear\":[4,\"allow-clear\"],\"mode\":[1],\"editable\":[4],\"disabled\":[4],\"readonly\":[4],\"i18nPlaceholder\":[1,\"i-1-8n-placeholder\"],\"i18nPlaceholderEditable\":[1,\"i-1-8n-placeholder-editable\"],\"i18nSelectListHeader\":[1,\"i-1-8n-select-list-header\"],\"i18nNoMatches\":[1,\"i-1-8n-no-matches\"],\"hideListHeader\":[4,\"hide-list-header\"],\"dropdownShow\":[32],\"selectedLabels\":[32],\"dropdownWrapperRef\":[32],\"dropdownAnchor\":[32],\"isDropdownEmpty\":[32],\"hasFocus\":[32],\"navigationItem\":[32],\"inputFilterText\":[32],\"inputValue\":[32]},[[0,\"itemClick\",\"onItemClicked\"],[0,\"ix-select-item:labelChange\",\"onLabelChange\"]],{\"selectedIndices\":[\"watchSelectedIndices\"],\"value\":[\"watchValue\"]}]]],[\"ix-time-picker\",[[1,\"ix-time-picker\",{\"format\":[1],\"corners\":[1],\"standaloneAppearance\":[4,\"standalone-appearance\"],\"individual\":[4],\"showHour\":[4,\"show-hour\"],\"showMinutes\":[4,\"show-minutes\"],\"showSeconds\":[4,\"show-seconds\"],\"time\":[1],\"showTimeReference\":[1028,\"show-time-reference\"],\"timeReference\":[1,\"time-reference\"],\"textSelectTime\":[1,\"text-select-time\"],\"textTime\":[1,\"text-time\"],\"_time\":[32],\"_timeRef\":[32],\"_formattedTime\":[32],\"getCurrentTime\":[64]},null,{\"time\":[\"watchTimePropHandler\"],\"_time\":[\"formatTime\",\"onInternalTimeChange\"]}]]],[\"ix-map-navigation-overlay\",[[1,\"ix-map-navigation-overlay\",{\"name\":[1],\"icon\":[1],\"color\":[1],\"iconColor\":[1,\"icon-color\"]}]]],[\"ix-toast\",[[1,\"ix-toast\",{\"type\":[1],\"toastTitle\":[1,\"toast-title\"],\"autoCloseDelay\":[2,\"auto-close-delay\"],\"autoClose\":[4,\"auto-close\"],\"icon\":[1],\"iconColor\":[1,\"icon-color\"],\"progress\":[32],\"touched\":[32]}]]],[\"ix-breadcrumb-item\",[[1,\"ix-breadcrumb-item\",{\"label\":[1],\"icon\":[1],\"ghost\":[4],\"visible\":[4],\"showChevron\":[4,\"show-chevron\"],\"isDropdownTrigger\":[4,\"is-dropdown-trigger\"],\"a11y\":[32]}]]],[\"ix-tooltip\",[[1,\"ix-tooltip\",{\"for\":[1],\"titleContent\":[1,\"title-content\"],\"interactive\":[4],\"placement\":[1],\"animationFrame\":[4,\"animation-frame\"],\"visible\":[32],\"showTooltip\":[64],\"hideTooltip\":[64]}]]],[\"ix-tree-item\",[[1,\"ix-tree-item\",{\"text\":[1],\"hasChildren\":[4,\"has-children\"],\"context\":[16]}]]],[\"ix-avatar_2\",[[1,\"ix-avatar\",{\"image\":[1],\"initials\":[1],\"username\":[1],\"extra\":[1],\"isClosestApplicationHeader\":[32],\"hasSlottedElements\":[32]}],[1,\"ix-menu-avatar-item\",{\"icon\":[1],\"label\":[1],\"getDropdownItemElement\":[64]}]]],[\"ix-application-header\",[[1,\"ix-application-header\",{\"name\":[1],\"breakpoint\":[32],\"menuExpanded\":[32],\"suppressResponsive\":[32],\"hasSlottedElements\":[32],\"applicationLayoutContext\":[32]}]]],[\"ix-modal-content_2\",[[1,\"ix-modal-header\",{\"hideClose\":[4,\"hide-close\"],\"icon\":[1],\"iconColor\":[1,\"icon-color\"]},null,{\"icon\":[\"onIconChange\"]}],[1,\"ix-modal-content\"]]],[\"ix-group-context-menu_2\",[[1,\"ix-group-context-menu\",{\"showContextMenu\":[32]}],[1,\"ix-group-item\",{\"icon\":[1],\"text\":[1],\"secondaryText\":[1,\"secondary-text\"],\"suppressSelection\":[4,\"suppress-selection\"],\"selected\":[4],\"focusable\":[4],\"index\":[2]},[[1,\"click\",\"clickListen\"]]]]],[\"ix-card-accordion_2\",[[1,\"ix-card-accordion\",{\"collapse\":[4],\"expandContent\":[32]},null,{\"collapse\":[\"onInitialExpandChange\"]}],[1,\"ix-card-title\"]]],[\"ix-menu-item\",[[1,\"ix-menu-item\",{\"home\":[4],\"bottom\":[4],\"tabIcon\":[1025,\"tab-icon\"],\"icon\":[1025],\"notifications\":[2],\"active\":[4],\"disabled\":[4],\"title\":[32]},null,{\"icon\":[\"onIconChange\"],\"tabIcon\":[\"onTabIconChange\"]}]]],[\"ix-divider\",[[1,\"ix-divider\"]]],[\"ix-burger-menu\",[[1,\"ix-burger-menu\",{\"ixAriaLabel\":[1,\"ix-aria-label\"],\"expanded\":[516],\"pinned\":[4]}]]],[\"ix-tab-item_2\",[[1,\"ix-tab-item\",{\"selected\":[4],\"disabled\":[4],\"small\":[4],\"icon\":[4],\"rounded\":[4],\"counter\":[2],\"layout\":[1],\"placement\":[1]}],[1,\"ix-tabs\",{\"small\":[4],\"rounded\":[4],\"selected\":[1026],\"layout\":[1],\"placement\":[1],\"totalItems\":[32],\"currentScrollAmount\":[32],\"scrollAmount\":[32],\"scrollActionAmount\":[32]},[[9,\"resize\",\"onWindowResize\"],[0,\"tabClick\",\"onTabClick\"]]]]],[\"ix-date-time-card\",[[1,\"ix-date-time-card\",{\"standaloneAppearance\":[8,\"standalone-appearance\"],\"individual\":[4],\"corners\":[1]}]]],[\"ix-filter-chip_2\",[[1,\"ix-select-item\",{\"label\":[513],\"value\":[520],\"selected\":[4],\"hover\":[4],\"onItemClick\":[64]},null,{\"label\":[\"labelChange\"]}],[1,\"ix-filter-chip\",{\"disabled\":[4],\"readonly\":[4]}]]],[\"ix-card_2\",[[1,\"ix-card\",{\"variant\":[1],\"selected\":[4]}],[1,\"ix-card-content\"]]],[\"ix-button\",[[1,\"ix-button\",{\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"disabled\":[516],\"type\":[1],\"loading\":[4],\"icon\":[1],\"alignment\":[1],\"iconSize\":[1,\"icon-size\"]}]]],[\"ix-col_4\",[[1,\"ix-date-picker\",{\"format\":[1],\"range\":[4],\"corners\":[1],\"from\":[1],\"to\":[1],\"minDate\":[1,\"min-date\"],\"maxDate\":[1,\"max-date\"],\"textSelectDate\":[1,\"text-select-date\"],\"i18nDone\":[1,\"i18n-done\"],\"weekStartIndex\":[2,\"week-start-index\"],\"locale\":[1],\"individual\":[4],\"eventDelimiter\":[1,\"event-delimiter\"],\"standaloneAppearance\":[4,\"standalone-appearance\"],\"today\":[1],\"currFromDate\":[32],\"currToDate\":[32],\"selectedYear\":[32],\"tempYear\":[32],\"startYear\":[32],\"endYear\":[32],\"selectedMonth\":[32],\"tempMonth\":[32],\"dropdownButtonRef\":[32],\"yearContainerRef\":[32],\"dayNames\":[32],\"monthNames\":[32],\"firstMonthRef\":[32],\"focusedDay\":[32],\"focusedDayElem\":[32],\"getCurrentDate\":[64]},null,{\"from\":[\"watchFromPropHandler\"],\"to\":[\"watchToPropHandler\"],\"locale\":[\"onLocaleChange\"]}],[1,\"ix-col\",{\"size\":[1],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"]},[[9,\"resize\",\"onResize\"]]],[1,\"ix-layout-grid\",{\"noMargin\":[4,\"no-margin\"],\"gap\":[1],\"columns\":[2]}],[1,\"ix-row\"]]],[\"ix-typography\",[[1,\"ix-typography\",{\"variant\":[1],\"format\":[1],\"color\":[1],\"textColor\":[1,\"text-color\"],\"bold\":[4],\"textDecoration\":[1,\"text-decoration\"]}]]]]"), options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map