export type CssGridTemplateType = 'sm' | 'md' | 'lg';
/**
 * @internal
 */
export declare class CssGrid {
    /**
     * Define css grid template
     */
    templates: Partial<Record<CssGridTemplateType, string[][]>>;
    currentTemplate: string[][];
    private disposeMediaQueryListener;
    private mediaQueries;
    componentWillRender(): void;
    disconnectedCallback(): void;
    private findNextTemplate;
    private applyTemplate;
    render(): any;
}
