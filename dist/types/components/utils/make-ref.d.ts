export type MakeRef<T> = {
    (ref: T): void;
    current: T;
    waitForCurrent(): Promise<T>;
};
export declare function makeRef<T>(currentChangedCallback?: (element: T) => void): MakeRef<T>;
