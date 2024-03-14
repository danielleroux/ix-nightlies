/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, NgModule, NgZone, } from '@angular/core';
import { appInitialize } from './app-initialize';
import { DIRECTIVES } from './declare-components';
import { IxDropdownTriggerDirective } from './dropdown/trigger.directive';
import { IxIcon } from './ix-icon';
import { ModalService } from './modal';
import { SelectValueAccessor } from './select-value-accessor';
import { BooleanValueAccessor } from './boolean-value-accessor';
import { ThemeService } from './theme';
import { ToastService } from './toast';
import * as tree from './tree';
import * as i0 from "@angular/core";
import * as i1 from "./components";
import * as i2 from "./tree/tree";
const DECLARATIONS = [
    ...DIRECTIVES,
    tree.IxTree,
    IxDropdownTriggerDirective,
    IxIcon,
    SelectValueAccessor,
    BooleanValueAccessor
];
export class IxModule {
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
/** @nocollapse */ IxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: IxModule, declarations: [i1.IxActionCard, i1.IxApplication, i1.IxApplicationHeader, i1.IxAvatar, i1.IxBasicNavigation, i1.IxBlind, i1.IxBreadcrumb, i1.IxBreadcrumbItem, i1.IxButton, i1.IxCard, i1.IxCardAccordion, i1.IxCardContent, i1.IxCardList, i1.IxCardTitle, i1.IxCategoryFilter, i1.IxChip, i1.IxCol, i1.IxContent, i1.IxContentHeader, i1.IxDateDropdown, i1.IxDatePicker, i1.IxDatetimePicker, i1.IxDivider, i1.IxDrawer, i1.IxDropdown, i1.IxDropdownButton, i1.IxDropdownHeader, i1.IxDropdownItem, i1.IxDropdownQuickActions, i1.IxEmptyState, i1.IxEventList, i1.IxEventListItem, i1.IxExpandingSearch, i1.IxFilterChip, i1.IxFlipTile, i1.IxFlipTileContent, i1.IxFormField, i1.IxGroup, i1.IxGroupContextMenu, i1.IxGroupItem, i1.IxIconButton, i1.IxIconToggleButton, i1.IxInputGroup, i1.IxKeyValue, i1.IxKeyValueList, i1.IxKpi, i1.IxLayoutGrid, i1.IxLinkButton, i1.IxMapNavigation, i1.IxMapNavigationOverlay, i1.IxMenu, i1.IxMenuAbout, i1.IxMenuAboutItem, i1.IxMenuAboutNews, i1.IxMenuAvatar, i1.IxMenuAvatarItem, i1.IxMenuCategory, i1.IxMenuItem, i1.IxMenuSettings, i1.IxMenuSettingsItem, i1.IxMessageBar, i1.IxModal, i1.IxModalContent, i1.IxModalExample, i1.IxModalFooter, i1.IxModalHeader, i1.IxPagination, i1.IxPane, i1.IxPaneLayout, i1.IxPill, i1.IxPushCard, i1.IxRow, i1.IxSelect, i1.IxSelectItem, i1.IxSlider, i1.IxSpinner, i1.IxSplitButton, i1.IxSplitButtonItem, i1.IxTabItem, i1.IxTabs, i1.IxTile, i1.IxTimePicker, i1.IxToast, i1.IxToastContainer, i1.IxToggle, i1.IxToggleButton, i1.IxTooltip, i1.IxTreeItem, i1.IxTypography, i1.IxUpload, i1.IxValidationTooltip, i1.IxWorkflowStep, i1.IxWorkflowSteps, i2.IxTree, IxDropdownTriggerDirective,
        IxIcon,
        SelectValueAccessor,
        BooleanValueAccessor], exports: [i1.IxActionCard, i1.IxApplication, i1.IxApplicationHeader, i1.IxAvatar, i1.IxBasicNavigation, i1.IxBlind, i1.IxBreadcrumb, i1.IxBreadcrumbItem, i1.IxButton, i1.IxCard, i1.IxCardAccordion, i1.IxCardContent, i1.IxCardList, i1.IxCardTitle, i1.IxCategoryFilter, i1.IxChip, i1.IxCol, i1.IxContent, i1.IxContentHeader, i1.IxDateDropdown, i1.IxDatePicker, i1.IxDatetimePicker, i1.IxDivider, i1.IxDrawer, i1.IxDropdown, i1.IxDropdownButton, i1.IxDropdownHeader, i1.IxDropdownItem, i1.IxDropdownQuickActions, i1.IxEmptyState, i1.IxEventList, i1.IxEventListItem, i1.IxExpandingSearch, i1.IxFilterChip, i1.IxFlipTile, i1.IxFlipTileContent, i1.IxFormField, i1.IxGroup, i1.IxGroupContextMenu, i1.IxGroupItem, i1.IxIconButton, i1.IxIconToggleButton, i1.IxInputGroup, i1.IxKeyValue, i1.IxKeyValueList, i1.IxKpi, i1.IxLayoutGrid, i1.IxLinkButton, i1.IxMapNavigation, i1.IxMapNavigationOverlay, i1.IxMenu, i1.IxMenuAbout, i1.IxMenuAboutItem, i1.IxMenuAboutNews, i1.IxMenuAvatar, i1.IxMenuAvatarItem, i1.IxMenuCategory, i1.IxMenuItem, i1.IxMenuSettings, i1.IxMenuSettingsItem, i1.IxMessageBar, i1.IxModal, i1.IxModalContent, i1.IxModalExample, i1.IxModalFooter, i1.IxModalHeader, i1.IxPagination, i1.IxPane, i1.IxPaneLayout, i1.IxPill, i1.IxPushCard, i1.IxRow, i1.IxSelect, i1.IxSelectItem, i1.IxSlider, i1.IxSpinner, i1.IxSplitButton, i1.IxSplitButtonItem, i1.IxTabItem, i1.IxTabs, i1.IxTile, i1.IxTimePicker, i1.IxToast, i1.IxToastContainer, i1.IxToggle, i1.IxToggleButton, i1.IxTooltip, i1.IxTreeItem, i1.IxTypography, i1.IxUpload, i1.IxValidationTooltip, i1.IxWorkflowStep, i1.IxWorkflowSteps, i2.IxTree, IxDropdownTriggerDirective,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztHQU9HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxlQUFlLEVBRWYsUUFBUSxFQUNSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN2QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdkMsT0FBTyxLQUFLLElBQUksTUFBTSxRQUFRLENBQUM7Ozs7QUFDL0IsTUFBTSxZQUFZLEdBQUc7SUFDbkIsR0FBRyxVQUFVO0lBQ2IsSUFBSSxDQUFDLE1BQU07SUFDWCwwQkFBMEI7SUFDMUIsTUFBTTtJQUNOLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDckIsQ0FBQztBQU1GLE1BQU0sT0FBTyxRQUFRO0lBQ25CLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7aUJBQ3pCO2dCQUNELFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7d0hBaEJVLFFBQVE7eUhBQVIsUUFBUSx3a0RBVm5CLDBCQUEwQjtRQUMxQixNQUFNO1FBQ04sbUJBQW1CO1FBQ25CLG9CQUFvQixva0RBSHBCLDBCQUEwQjtRQUMxQixNQUFNO1FBQ04sbUJBQW1CO1FBQ25CLG9CQUFvQjt5SEFPVCxRQUFROzJGQUFSLFFBQVE7a0JBSnBCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLFlBQVk7b0JBQzFCLE9BQU8sRUFBRSxZQUFZO2lCQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNpZW1lbnMgQUdcbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQVBQX0lOSVRJQUxJWkVSLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFwcEluaXRpYWxpemUgfSBmcm9tICcuL2FwcC1pbml0aWFsaXplJztcbmltcG9ydCB7IERJUkVDVElWRVMgfSBmcm9tICcuL2RlY2xhcmUtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJeERyb3Bkb3duVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24vdHJpZ2dlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSXhJY29uIH0gZnJvbSAnLi9peC1pY29uJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgU2VsZWN0VmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vc2VsZWN0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7IEJvb2xlYW5WYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi9ib29sZWFuLXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7IFRoZW1lU2VydmljZSB9IGZyb20gJy4vdGhlbWUnO1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdCc7XG5pbXBvcnQgKiBhcyB0cmVlIGZyb20gJy4vdHJlZSc7XG5jb25zdCBERUNMQVJBVElPTlMgPSBbXG4gIC4uLkRJUkVDVElWRVMsXG4gIHRyZWUuSXhUcmVlLFxuICBJeERyb3Bkb3duVHJpZ2dlckRpcmVjdGl2ZSxcbiAgSXhJY29uLFxuICBTZWxlY3RWYWx1ZUFjY2Vzc29yLFxuICBCb29sZWFuVmFsdWVBY2Nlc3NvclxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBERUNMQVJBVElPTlMsXG4gIGV4cG9ydHM6IERFQ0xBUkFUSU9OUyxcbn0pXG5leHBvcnQgY2xhc3MgSXhNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEl4TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJeE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGFwcEluaXRpYWxpemUsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgZGVwczogW0RPQ1VNRU5ULCBOZ1pvbmVdLFxuICAgICAgICB9LFxuICAgICAgICBNb2RhbFNlcnZpY2UsXG4gICAgICAgIFRoZW1lU2VydmljZSxcbiAgICAgICAgVG9hc3RTZXJ2aWNlLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=