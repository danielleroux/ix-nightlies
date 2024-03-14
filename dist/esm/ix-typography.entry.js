import { r as registerInstance, h, H as Host } from './index-5cd176b3.js';

const VariantsMapping = {
    'x-small': 'text-xs',
    small: 'text-s',
    caption: 'text-caption',
    'caption-single': 'text-caption-single',
    default: 'text-default',
    'default-single': 'text-default-single',
    large: 'text-l',
    'large-single': 'text-l-single',
    h2: 'text-h2',
    'display-large': 'text-xl',
    'default-title': 'text-default-title',
    'default-title-single': 'text-default-title-single',
};

const typographyCss = ".typography-label,:host(.typography-label){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-label-xs,:host(.typography-label-xs){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--2);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xxl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-label-sm,:host(.typography-label-sm){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--1);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-label-lg,:host(.typography-label-lg){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-body,:host(.typography-body){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-body-xs,:host(.typography-body-xs){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--2);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xxl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-body-sm,:host(.typography-body-sm){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-body-lg,:host(.typography-body-lg){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display,:host(.typography-display){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-3);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display-xs,:host(.typography-display-xs){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-sm);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display-sm,:host(.typography-display-sm){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-2);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display-lg,:host(.typography-display-lg){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-4);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display-xl,:host(.typography-display-xl){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-5);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-sm);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-display-xxl,:host(.typography-display-xxl){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-6);line-height:var(--theme-line-height-xs);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-sm);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h6,.typography-h6,:host(.typography-h6){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h5,.typography-h5,:host(.typography-h5){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h4,.typography-h4,:host(.typography-h4){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h3,.typography-h3,:host(.typography-h3){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-2);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-lg);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h2,.typography-h2,:host(.typography-h2){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-3);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}h1,.typography-h1,:host(.typography-h1){font-feature-settings:\"clig\" off, \"liga\" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-4);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-bold);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-code,:host(.typography-code){font-feature-settings:\"clig\" off, \"liga\" off;font-family:JetBrainsMono, Courier New, monospace, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-code-lg,:host(.typography-code-lg){font-feature-settings:\"clig\" off, \"liga\" off;font-family:JetBrainsMono, Courier New, monospace, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-md);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-code-sm,:host(.typography-code-sm){font-feature-settings:\"clig\" off, \"liga\" off;font-family:JetBrainsMono, Courier New, monospace, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms--1);line-height:var(--theme-line-height-lg);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.typography-decoration-none,:host(.typography-decoration-none){text-decoration:none !important}.typography-decoration-underline,:host(.typography-decoration-underline){text-decoration:underline !important}.typography-decoration-line-through,:host(.typography-decoration-line-through){text-decoration:line-through !important}.typography-weight-bold,:host(.typography-weight-bold){font-weight:700 !important}a{color:var(--theme-color-primary)}:host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.text-xs){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}:host(.text-s){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}:host(.text-caption){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}:host(.text-caption-single){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}:host(.text-default){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}:host(.text-default-single){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}:host(.text-default-title){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}:host(.text-default-title-single){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}:host(.text-l){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}:host(.text-l-single){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}:host(.text-l-title){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}:host(.text-l-title-single){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}:host(.text-h2){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}:host(.text-xl){-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}";
const IxTypographyStyle0 = typographyCss;

const IxTypography = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = undefined;
        this.format = undefined;
        this.color = undefined;
        this.textColor = undefined;
        this.bold = false;
        this.textDecoration = 'none';
    }
    render() {
        var _a, _b;
        let typographyClass = {};
        if (this.variant) {
            typographyClass[VariantsMapping[(_a = this.variant) !== null && _a !== void 0 ? _a : 'default']] = true;
        }
        else {
            typographyClass[`typography-${(_b = this.format) !== null && _b !== void 0 ? _b : 'body'}`] = true;
        }
        if (this.textDecoration !== 'none') {
            typographyClass[`typography-decoration-${this.textDecoration}`] = true;
        }
        typographyClass['typography-weight-bold'] = this.bold;
        let style = {};
        if (this.color) {
            style = {
                color: `var(--theme-color-${this.color}-text)`,
            };
        }
        if (this.textColor) {
            style = {
                color: `var(--theme-color-${this.textColor}-text)`,
            };
        }
        return (h(Host, { key: 'a33ba3db2813bf5e41e8480195f5c540a70c7bb1', class: typographyClass, style: style }, h("slot", { key: '8a4320ebdf3ead5430eaa49ddaa4991ac76df931' })));
    }
};
IxTypography.style = IxTypographyStyle0;

export { IxTypography as ix_typography };

//# sourceMappingURL=ix-typography.entry.js.map