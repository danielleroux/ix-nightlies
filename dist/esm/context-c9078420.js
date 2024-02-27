import { T as TypedEvent } from './typed-event-ad6484c5.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * A function which creates a Context value object
 */
function createContext(name, initialValue) {
    return {
        name,
        initialValue,
    };
}
/**
 * An event fired by a context requester to signal it desires a named context.
 *
 * A provider should inspect the `context` property of the event to determine if it has a value that can
 * satisfy the request, calling the `callback` with the requested value if so.
 *
 * If the requested context event contains a truthy `subscribe` value, then a provider can call the callback
 * multiple times if the value is changed, if this is the case the provider should pass an `unsubscribe`
 * function to the callback which requesters can invoke to indicate they no longer wish to receive these updates.
 */
class ContextEvent extends Event {
    constructor(context, callback, subscribe) {
        super('context-request', { bubbles: true, composed: true });
        this.context = context;
        this.callback = callback;
        this.subscribe = subscribe;
    }
}
function useContextConsumer(hostElement, context, onContextReceived, subscribe) {
    let _unsubscribe;
    hostElement.dispatchEvent(new ContextEvent(context, (ctx, unSub) => {
        onContextReceived(ctx, unSub);
        _unsubscribe = unSub;
    }, subscribe));
    return {
        unsubscribe: () => {
            _unsubscribe();
        },
    };
}
function useContextProvider(hostElement, context, contextPayload) {
    const requestContext = new TypedEvent();
    const updateContext = new TypedEvent();
    const requests = new Set();
    hostElement.addEventListener('context-request', (requestContextEvent) => {
        if ((requestContextEvent === null || requestContextEvent === void 0 ? void 0 : requestContextEvent.context.name) !== context.name) {
            return;
        }
        requestContextEvent.stopPropagation();
        if (requestContextEvent.subscribe) {
            requests.add(requestContextEvent);
        }
        requestContext.emit(requestContextEvent);
        if (contextPayload) {
            requestContextEvent.callback(contextPayload, () => {
                requests.delete(requestContextEvent);
            });
        }
    });
    updateContext.on((context) => {
        requests.forEach((r) => r.callback(context, () => {
            requests.delete(r);
        }));
    });
    return {
        emit: (context) => {
            updateContext.emit(context);
        },
    };
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const closestIxMenu = (element) => {
    const menuElement = element.closest('ix-menu');
    return menuElement;
};
const ApplicationLayoutContext = createContext('application-layout-context', {
    hideHeader: false,
    host: null,
    sidebar: false,
});

export { ApplicationLayoutContext as A, useContextConsumer as a, closestIxMenu as c, useContextProvider as u };

//# sourceMappingURL=context-c9078420.js.map