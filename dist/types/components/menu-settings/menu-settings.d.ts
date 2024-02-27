import { EventEmitter } from '../../stencil-public-runtime';
import { CustomCloseEvent } from '../utils/menu-tabs/menu-tabs-utils';
export declare class MenuSettings {
    el: HTMLIxMenuSettingsElement;
    /**
     * Active tab
     */
    activeTabLabel: string;
    /**
     * Label of first tab
     */
    label: string;
    /**
     * Internal
     */
    show: boolean;
    /**
     * Popover closed
     */
    close: EventEmitter<CustomCloseEvent>;
    items: HTMLIxMenuSettingsItemElement[];
    updateTab(label: string): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
