import { h } from './index-f18c5ad1.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const isPrimary = (variant) => {
    return variant.toUpperCase() === 'Primary'.toUpperCase();
};
const isSecondary = (variant) => {
    return variant.toUpperCase() === 'Secondary'.toUpperCase();
};
const getButtonClasses = (variant, outline, ghost, iconOnly = false, iconOval = false, selected, disabled) => {
    return {
        btn: true,
        'btn-primary': isPrimary(variant) && !outline && !ghost,
        'btn-outline-primary': isPrimary(variant) && outline && !ghost,
        'btn-invisible-primary': isPrimary(variant) && !outline && ghost,
        'btn-secondary': isSecondary(variant) && !outline && !ghost,
        'btn-outline-secondary': isSecondary(variant) && outline && !ghost,
        'btn-invisible-secondary': isSecondary(variant) && !outline && ghost,
        'btn-icon': iconOnly,
        'btn-oval': iconOval,
        selected: selected,
        disabled: disabled,
    };
};
function BaseButton(props, children) {
    var _a, _b;
    const extraClasses = (_a = props.extraClasses) !== null && _a !== void 0 ? _a : {};
    return (h("button", Object.assign({}, props.ariaAttributes, { onClick: (e) => (props.onClick ? props.onClick(e) : undefined), tabindex: props.disabled ? -1 : (_b = props.tabIndex) !== null && _b !== void 0 ? _b : 0, type: props.type, class: Object.assign(Object.assign({}, getButtonClasses(props.variant, props.outline, props.ghost, props.iconOnly, props.iconOval, props.selected, props.disabled || props.loading)), extraClasses) }),
        props.loading ? h("ix-spinner", { size: "small", hideTrack: true }) : null,
        props.icon && !props.loading ? (h("ix-icon", { class: "icon", name: props.icon, size: props.iconSize, color: props.iconColor })) : null,
        h("div", { class: {
                content: true,
                [`content-${props.alignment}`]: !!props.alignment,
            } }, children),
        props.afterContent ? props.afterContent : null));
}

export { BaseButton as B, getButtonClasses as g };

//# sourceMappingURL=base-button-37b915d6.js.map