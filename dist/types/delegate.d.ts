import { FrameworkDelegate } from '@siemens/ix';
export declare class ReactFrameworkDelegate implements FrameworkDelegate {
    attachViewToPortal?: (id: string, view: any) => Promise<Element>;
    removeViewFromPortal?: (id: string) => void;
    resolvePortalInitPromise: (() => void) | undefined;
    portalInitPromise: Promise<void>;
    isUsingReactPortal: boolean;
    constructor();
    attachView(view: any): Promise<any>;
    removeView(view: any): Promise<void>;
    portalReady(): void;
    private isPortalReady;
}
export declare const reactFrameworkDelegate: ReactFrameworkDelegate;
