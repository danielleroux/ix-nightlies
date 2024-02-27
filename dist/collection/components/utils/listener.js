/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getElement } from "@stencil/core";
const defaultOptions = {
    target: 'window',
    defaultEnabled: true,
};
export function createListener(event, options = {}) {
    const opts = Object.assign(Object.assign({}, defaultOptions), options);
    let callback;
    const onEvent = (event) => {
        callback(event);
    };
    const resultObject = {
        on: (onEventCallback) => {
            callback = onEventCallback;
        },
        isEnabled: opts.defaultEnabled,
        enable: (state) => {
            resultObject.isEnabled = state;
            if (state) {
                addEventListener(event, onEvent);
            }
            else {
                removeEventListener(event, onEvent);
            }
        },
        destroy: () => {
            resultObject.enable(false);
        },
    };
    resultObject.enable(opts.defaultEnabled);
    return resultObject;
}
export function OnListener(event, fnExp) {
    return (proto, methodName) => {
        const { componentWillLoad, componentWillRender, disconnectedCallback } = proto;
        if (fnExp) {
            proto.componentWillRender = function () {
                var _a;
                const host = getElement(this);
                (_a = host[`__ix__${methodName}`]) === null || _a === void 0 ? void 0 : _a.enable(fnExp(this));
                return componentWillRender && componentWillRender.call(this);
            };
        }
        proto.componentWillLoad = function () {
            const listener = createListener(event);
            const host = getElement(this);
            const method = this[methodName];
            host[`__ix__${methodName}`] = listener;
            listener.on(method.bind(this));
            return componentWillLoad && componentWillLoad.call(this);
        };
        proto.disconnectedCallback = function () {
            var _a;
            const host = getElement(this);
            if (host && host[`__ix__${methodName}`]) {
                (_a = host[`__ix__${methodName}`]) === null || _a === void 0 ? void 0 : _a.destroy();
                host[`__ix__${methodName}`] = null;
            }
            return disconnectedCallback && disconnectedCallback.call(this);
        };
    };
}
//# sourceMappingURL=listener.js.map
