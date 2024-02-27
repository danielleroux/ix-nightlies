import { EventEmitter } from '../../stencil-public-runtime';
import { CustomCloseEvent } from '../utils/menu-tabs/menu-tabs-utils';
export declare class MenuAbout {
    el: HTMLIxMenuAboutElement;
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
     * About and Legal closed
     */
    close: EventEmitter<CustomCloseEvent>;
    items: HTMLIxMenuAboutItemElement[];
    updateTab(label: string): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
