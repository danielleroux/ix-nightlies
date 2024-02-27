/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function closestElement(selector, el) {
    if (!el) {
        return null;
    }
    return (el.closest(selector) ||
        closestElement(selector, el.getRootNode().host));
}
function getSlottedElements(slot) {
    return slot.assignedElements({ flatten: true });
}
function hasSlottedElements(slot) {
    if (!slot) {
        return false;
    }
    return slot.assignedElements({ flatten: true }).length !== 0;
}
function closestPassShadow(node, selector) {
    if (!node) {
        return null;
    }
    if (node instanceof ShadowRoot) {
        return closestPassShadow(node.host, selector);
    }
    if (node instanceof HTMLElement) {
        if (node.matches(selector)) {
            return node;
        }
        else {
            return closestPassShadow(node.parentNode, selector);
        }
    }
    return closestPassShadow(node.parentNode, selector);
}

export { closestElement as a, closestPassShadow as c, getSlottedElements as g, hasSlottedElements as h };

//# sourceMappingURL=shadow-dom.js.map