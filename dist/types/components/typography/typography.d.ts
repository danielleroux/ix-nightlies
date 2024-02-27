export type TypographyVariants = 'x-small' | 'small' | 'caption' | 'caption-single' | 'default' | 'default-single' | 'default-title' | 'default-title-single' | 'large' | 'large-single' | 'large-title' | 'large-title-single' | 'h2' | 'display-large';
export type TypographyColors = 'contrast' | 'std' | 'soft' | 'weak' | 'inv-contrast' | 'inv-std' | 'inv-soft' | 'inv-weak' | 'alarm';
type TypographyFormatLabel = 'label' | 'label-xs' | 'label-sm' | 'label-lg';
type TypographyFormatBody = 'body' | 'body-xs' | 'body-sm' | 'body-lg';
type TypographyFormatDisplay = 'display' | 'display-xs' | 'display-sm' | 'display-lg' | 'display-xl' | 'display-xxl';
type TypographyFormatHeading = 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
type TypographyFormatCode = 'code' | 'code-sm' | 'code-lg';
export type TypographyFormat = TypographyFormatLabel | TypographyFormatBody | TypographyFormatDisplay | TypographyFormatHeading | TypographyFormatCode;
export type TextDecoration = 'none' | 'underline' | 'line-through';
/**
 * @since 2.0.0
 */
export declare class IxTypography {
    /**
     * Font variant based on theme variables
     *
     * @deprecated Use `format` property
     * @internal
     */
    variant: TypographyVariants;
    /**
     * Text format
     */
    format: TypographyFormat;
    /**
     * Text color based on theme variables
     *
     * @deprecated since 2.1.0 use property `text-color`
     */
    color: TypographyColors;
    /**
     * Text color based on theme variables
     */
    textColor: TypographyColors;
    /**
     * Display text bold
     */
    bold: boolean;
    /**
     * Text decoration
     */
    textDecoration: TextDecoration;
    render(): any;
}
export {};
