import { EventEmitter } from '../../stencil-public-runtime';
import { DropdownItemWrapper } from '../dropdown/dropdown-controller';
export declare class MenuAvatarItem implements DropdownItemWrapper {
    /**
     * Avatar dropdown icon
     */
    icon: string;
    /**
     * Avatar dropdown label
     */
    label: string;
    /**
     * Avatar dropdown item clicked
     */
    itemClick: EventEmitter<MouseEvent>;
    hostElement: HTMLIxMenuAvatarItemElement;
    private dropdownItemRef;
    /** @internal */
    getDropdownItemElement(): Promise<HTMLIxDropdownItemElement>;
    render(): any;
}
