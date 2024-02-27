import { EventEmitter } from '../../stencil-public-runtime';
import { CustomLabelChangeEvent } from '../utils/menu-tabs/menu-tabs-utils';
export declare class MenuAboutItem {
    /**
     * About Item label
     */
    label: string;
    /**
     * Label changed
     */
    labelChange: EventEmitter<CustomLabelChangeEvent>;
    watchLabel(newValue: string, oldValue: string): void;
    render(): any;
}
