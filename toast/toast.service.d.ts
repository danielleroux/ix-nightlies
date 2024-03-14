import { ToastConfig } from './toast.config';
import * as i0 from "@angular/core";
export declare class ToastService {
    setPosition(position: 'bottom-right' | 'top-right'): void;
    getPosition(): "bottom-right" | "top-right";
    show(config: ToastConfig): Promise<{
        onClose: import("@siemens/ix").TypedEvent<any>;
        close: (result?: any) => void;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToastService>;
}
