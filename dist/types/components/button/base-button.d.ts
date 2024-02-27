import { A11yAttributes } from '../utils/a11y';
import { ButtonVariant } from './button';
export type ButtonAlignment = 'center' | 'start';
export declare const getButtonClasses: (variant: ButtonVariant, outline: boolean, ghost: boolean, iconOnly: boolean, iconOval: boolean, selected: boolean, disabled: boolean) => {
    btn: boolean;
    'btn-primary': boolean;
    'btn-outline-primary': boolean;
    'btn-invisible-primary': boolean;
    'btn-secondary': boolean;
    'btn-outline-secondary': boolean;
    'btn-invisible-secondary': boolean;
    'btn-icon': boolean;
    'btn-oval': boolean;
    selected: boolean;
    disabled: boolean;
};
export type BaseButtonProps = {
    type: string;
    variant: ButtonVariant;
    outline: boolean;
    ghost: boolean;
    iconOnly: boolean;
    iconOval: boolean;
    selected: boolean;
    disabled: boolean;
    loading: boolean;
    icon: string;
    onClick?: Function;
    ariaAttributes?: A11yAttributes;
    extraClasses?: {
        [key: string]: boolean;
    };
    iconSize?: string;
    iconColor?: string;
    alignment?: ButtonAlignment;
    tabIndex?: number;
    afterContent?: any;
};
export declare function BaseButton(props: BaseButtonProps, children: any): any;
