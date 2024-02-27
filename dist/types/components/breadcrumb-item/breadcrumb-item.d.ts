import { EventEmitter } from '../../stencil-public-runtime';
export type BreadcrumbItemLinkTarget = '_self' | '_blank' | '_parent' | '_top' | string;
export declare class BreadcrumbItem {
    hostElement: HTMLIxBreadcrumbItemElement;
    /**
     * Breadcrumb label
     */
    label: string;
    /**
     * Icon to be displayed next ot the label
     */
    icon: string;
    /**@internal */
    ghost: boolean;
    /**@internal */
    visible: boolean;
    /**@internal */
    showChevron: boolean;
    /** @internal */
    isDropdownTrigger: boolean;
    /**@internal */
    itemClick: EventEmitter<string>;
    a11y: any;
    componentDidLoad(): void;
    componentWillLoad(): void;
    animationFadeIn(): void;
    render(): any;
}
