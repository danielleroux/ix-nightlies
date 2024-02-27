export declare function showModalLoading(message: string): {
    update: (text: string) => string;
    finish: (text?: string, timeout?: number) => void;
};
