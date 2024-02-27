import { TypedEvent } from './typed-event';
export type ThemeVariant = 'light' | 'dark';
declare class ThemeSwitcher {
    readonly prefixTheme = "theme-";
    readonly suffixLight = "-light";
    readonly suffixDark = "-dark";
    readonly defaultTheme = "theme-classic-dark";
    mutationObserver: MutationObserver;
    _themeChanged: TypedEvent<string>;
    get themeChanged(): TypedEvent<string>;
    hasVariantSuffix(className: string): boolean;
    private isThemeClass;
    setTheme(themeName: string, systemAppearance?: boolean): void;
    private replaceBodyThemeClass;
    toggleMode(): void;
    getCurrentTheme(): string;
    setVariant(variant?: ThemeVariant): void;
    private getOppositeMode;
    private handleMutations;
    private registerMutationObserver;
    constructor();
}
export type IxTheme = 'classic' | 'classic-dark' | 'classic-light' | (string & {});
export declare const getCurrentSystemAppearance: () => ThemeVariant;
export declare const themeSwitcher: ThemeSwitcher;
export {};
