import { TypedEvent } from '../utils/typed-event';
import { ToastConfig } from './toast-utils';
export type ShowToastResult = {
    onClose: TypedEvent<any | undefined>;
    close: (result?: any) => void;
};
export declare class ToastContainer {
    /**
     */
    containerId: string;
    /**
     */
    containerClass: string;
    /**
     */
    position: 'bottom-right' | 'top-right';
    private readonly PREFIX_POSITION_CLASS;
    get hostContainer(): Promise<HTMLElement>;
    componentDidLoad(): void;
    onPositionChange(newPosition: string, oldPosition: string): void;
    /**
     * Display a toast message
     * @param config
     */
    showToast(config: ToastConfig): Promise<ShowToastResult>;
    render(): any;
}
