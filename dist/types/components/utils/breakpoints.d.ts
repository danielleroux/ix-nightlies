declare const mediaQueries: {
    readonly sm: "(max-width: 48em)";
    readonly md: "(min-width: 48.0625em) and (max-width: 80em)";
    readonly lg: "(min-width: 80.0625em)";
};
export type Breakpoint = keyof typeof mediaQueries;
export declare const matchBreakpoint: (breakpoint: Breakpoint) => boolean;
export {};
