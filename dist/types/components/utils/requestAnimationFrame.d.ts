/**
 * Prevents angular from change detection when requesting an animation frame
 *
 * Credits goes to:
 * https://github.com/ionic-team/ionic-framework/blob/main/core/src/utils/helpers.ts
 */
export declare const requestAnimationFrameNoNgZone: (callback: (...args: any[]) => void) => any;
