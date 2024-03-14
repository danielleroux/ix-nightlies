import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @deprecated Use themeSwitcher from core package `import { themeSwitcher } from '@siemens/ix';`
 */
export declare class ThemeService {
    themeChanged: EventEmitter<string>;
    private themeSwitcher;
    constructor();
    toggleMode(): void;
    setTheme(themeName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}
