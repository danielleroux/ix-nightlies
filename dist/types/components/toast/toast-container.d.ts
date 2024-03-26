import { TypedEvent } from '../utils/typed-event';
import { ToastConfig } from './toast-utils';
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
    showToast(config: ToastConfig): Promise<{
        onClose: TypedEvent<any>;
        close: (result?: any) => void;
    }>;
    render(): any;
}
