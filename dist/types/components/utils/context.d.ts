/**
 * A Context object defines an optional initial value for a Context, as well as a name identifier for debugging purposes.
 */
export type Context<T> = {
    name: string;
    initialValue?: T;
};
/**
 * An unknown context type
 */
export type UnknownContext = Context<unknown>;
/**
 * A helper type which can extract a Context value type from a Context type
 */
export type ContextType<T extends UnknownContext> = T extends Context<infer Y> ? Y : never;
/**
 * A function which creates a Context value object
 */
export declare function createContext<T>(name: string, initialValue?: T): Readonly<Context<T>>;
/**
 * A callback which is provided by a context requester and is called with the value satisfying the request.
 * This callback can be called multiple times by context providers as the requested value is changed.
 */
export type ContextCallback<ValueType> = (value: ValueType, unsubscribe?: () => void) => void;
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
export declare class ContextEvent<T extends UnknownContext> extends Event {
    readonly context: T;
    readonly callback: ContextCallback<ContextType<T>>;
    readonly subscribe?: boolean;
    constructor(context: T, callback: ContextCallback<ContextType<T>>, subscribe?: boolean);
}
declare global {
    interface HTMLElementEventMap {
        /**
         * A 'context-request' event can be emitted by any element which desires
         * a context value to be injected by an external provider.
         */
        'context-request': ContextEvent<UnknownContext>;
    }
}
export type ContextConsumerSubscription = {
    unsubscribe: () => void;
};
export declare function useContextConsumer<T extends HTMLElement, C extends UnknownContext>(hostElement: T, context: C, onContextReceived: (context: ContextType<C>, unsubscribe?: () => void) => void, subscribe?: boolean): ContextConsumerSubscription;
export type ContextProvider<C extends Context<{}> = Context<any>> = {
    emit: (context: ContextType<C>) => void;
};
export declare function useContextProvider<X extends {}, C extends Context<X>, T extends HTMLElement = HTMLElement>(hostElement: T, context: C, contextPayload?: ContextType<C>): ContextProvider<C>;
