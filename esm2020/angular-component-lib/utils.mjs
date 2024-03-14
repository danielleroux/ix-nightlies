/* eslint-disable */
/* tslint:disable */
import { fromEvent } from 'rxjs';
export const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
            /**
             * In the event that proxyInputs is called
             * multiple times re-defining these inputs
             * will cause an error to be thrown. As a result
             * we set configurable: true to indicate these
             * properties can be changed.
             */
            configurable: true,
        });
    });
};
export const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
export const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
export const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW5ndWxhci1jb21wb25lbnQtbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVqQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFRLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO0lBQ3hELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3RCLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRTtZQUNyQyxHQUFHO2dCQUNELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixDQUFDO1lBQ0QsR0FBRyxDQUFDLEdBQVE7Z0JBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFRLEVBQUUsT0FBaUIsRUFBRSxFQUFFO0lBQzFELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1FBQzdCLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRztZQUN0QixNQUFNLElBQUksR0FBRyxTQUFTLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUFDLFFBQWEsRUFBRSxFQUFPLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBZSxFQUFFLGFBQWtCLEVBQUUsRUFBRTtJQUN6RSxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksT0FBTyxjQUFjLEtBQUssV0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN4RyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztLQUMvQztBQUNILENBQUMsQ0FBQztBQUVGLGlEQUFpRDtBQUNqRCxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQXlFO0lBQ2hHLE1BQU0sU0FBUyxHQUFHLFVBQVUsR0FBUTtRQUNsQyxNQUFNLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztRQUV4RCxJQUFJLHFCQUFxQixLQUFLLFNBQVMsRUFBRTtZQUN2QyxxQkFBcUIsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUM7SUFDRixPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNvbnN0IHByb3h5SW5wdXRzID0gKENtcDogYW55LCBpbnB1dHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IFByb3RvdHlwZSA9IENtcC5wcm90b3R5cGU7XG4gIGlucHV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFByb3RvdHlwZSwgaXRlbSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbFtpdGVtXTtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy56LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+ICh0aGlzLmVsW2l0ZW1dID0gdmFsKSk7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBJbiB0aGUgZXZlbnQgdGhhdCBwcm94eUlucHV0cyBpcyBjYWxsZWRcbiAgICAgICAqIG11bHRpcGxlIHRpbWVzIHJlLWRlZmluaW5nIHRoZXNlIGlucHV0c1xuICAgICAgICogd2lsbCBjYXVzZSBhbiBlcnJvciB0byBiZSB0aHJvd24uIEFzIGEgcmVzdWx0XG4gICAgICAgKiB3ZSBzZXQgY29uZmlndXJhYmxlOiB0cnVlIHRvIGluZGljYXRlIHRoZXNlXG4gICAgICAgKiBwcm9wZXJ0aWVzIGNhbiBiZSBjaGFuZ2VkLlxuICAgICAgICovXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHByb3h5TWV0aG9kcyA9IChDbXA6IGFueSwgbWV0aG9kczogc3RyaW5nW10pID0+IHtcbiAgY29uc3QgUHJvdG90eXBlID0gQ21wLnByb3RvdHlwZTtcbiAgbWV0aG9kcy5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7XG4gICAgUHJvdG90eXBlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiB0aGlzLnoucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5lbFttZXRob2ROYW1lXS5hcHBseSh0aGlzLmVsLCBhcmdzKSk7XG4gICAgfTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJveHlPdXRwdXRzID0gKGluc3RhbmNlOiBhbnksIGVsOiBhbnksIGV2ZW50czogc3RyaW5nW10pID0+IHtcbiAgZXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4gKGluc3RhbmNlW2V2ZW50TmFtZV0gPSBmcm9tRXZlbnQoZWwsIGV2ZW50TmFtZSkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gKHRhZ05hbWU6IHN0cmluZywgY3VzdG9tRWxlbWVudDogYW55KSA9PiB7XG4gIGlmIChjdXN0b21FbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGN1c3RvbUVsZW1lbnRzICE9PSAndW5kZWZpbmVkJyAmJiAhY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGN1c3RvbUVsZW1lbnQpO1xuICB9XG59O1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9ubHktYXJyb3ctZnVuY3Rpb25zXG5leHBvcnQgZnVuY3Rpb24gUHJveHlDbXAob3B0czogeyBkZWZpbmVDdXN0b21FbGVtZW50Rm4/OiAoKSA9PiB2b2lkOyBpbnB1dHM/OiBhbnk7IG1ldGhvZHM/OiBhbnkgfSkge1xuICBjb25zdCBkZWNvcmF0b3IgPSBmdW5jdGlvbiAoY2xzOiBhbnkpIHtcbiAgICBjb25zdCB7IGRlZmluZUN1c3RvbUVsZW1lbnRGbiwgaW5wdXRzLCBtZXRob2RzIH0gPSBvcHRzO1xuXG4gICAgaWYgKGRlZmluZUN1c3RvbUVsZW1lbnRGbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWZpbmVDdXN0b21FbGVtZW50Rm4oKTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXRzKSB7XG4gICAgICBwcm94eUlucHV0cyhjbHMsIGlucHV0cyk7XG4gICAgfVxuICAgIGlmIChtZXRob2RzKSB7XG4gICAgICBwcm94eU1ldGhvZHMoY2xzLCBtZXRob2RzKTtcbiAgICB9XG4gICAgcmV0dXJuIGNscztcbiAgfTtcbiAgcmV0dXJuIGRlY29yYXRvcjtcbn1cbiJdfQ==