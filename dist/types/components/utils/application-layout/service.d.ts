import { Breakpoint } from '../breakpoints';
import { TypedEvent } from '../typed-event';
declare class ApplicationLayoutService {
    #private;
    debouncedOnResize: (...args: unknown[]) => void;
    constructor();
    get breakpoint(): "sm" | "md" | "lg";
    get onChange(): TypedEvent<"sm" | "md" | "lg">;
    get isDetectionEnabled(): boolean;
    private onResize;
    disableBreakpointDetection(): void;
    enableBreakpointDetection(): void;
    setBreakpoint(breakpoint: Breakpoint): void;
    setBreakpoints(breakpoints: Breakpoint[]): void;
}
export declare const applicationLayoutService: ApplicationLayoutService;
export {};
