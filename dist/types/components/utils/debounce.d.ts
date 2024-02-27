type AnyFunction = (...args: any[]) => any;
export declare function debounce<T extends AnyFunction>(func: T, delay: number): (...args: Parameters<T>) => void;
export {};
