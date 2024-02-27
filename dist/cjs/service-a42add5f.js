'use strict';

const breakpoints = require('./breakpoints-5d1583fb.js');
const typedEvent = require('./typed-event-8032c0c0.js');

function debounce(func, delay) {
    let timeoutId;
    return function debounced(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ApplicationLayoutService_supportedBreakpoints, _ApplicationLayoutService_breakpointChangeListener, _ApplicationLayoutService_breakpoint, _ApplicationLayoutService_isDetectionEnabled;
class ApplicationLayoutService {
    constructor() {
        // Keep order of breakpoints
        _ApplicationLayoutService_supportedBreakpoints.set(this, ['sm', 'md', 'lg']);
        _ApplicationLayoutService_breakpointChangeListener.set(this, new typedEvent.TypedEvent());
        _ApplicationLayoutService_breakpoint.set(this, 'lg');
        _ApplicationLayoutService_isDetectionEnabled.set(this, true);
        this.debouncedOnResize = debounce(this.onResize.bind(this), 50);
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.debouncedOnResize.bind(this));
            this.debouncedOnResize();
        }
    }
    get breakpoint() {
        return __classPrivateFieldGet(this, _ApplicationLayoutService_breakpoint, "f");
    }
    get onChange() {
        return __classPrivateFieldGet(this, _ApplicationLayoutService_breakpointChangeListener, "f");
    }
    get isDetectionEnabled() {
        return __classPrivateFieldGet(this, _ApplicationLayoutService_isDetectionEnabled, "f");
    }
    onResize() {
        if (!__classPrivateFieldGet(this, _ApplicationLayoutService_isDetectionEnabled, "f")) {
            return;
        }
        if (!__classPrivateFieldGet(this, _ApplicationLayoutService_supportedBreakpoints, "f")) {
            return;
        }
        const matchBreakpoints = [];
        const breakpoints$1 = __classPrivateFieldGet(this, _ApplicationLayoutService_supportedBreakpoints, "f");
        breakpoints$1.forEach((breakpoint) => {
            const match = breakpoints.matchBreakpoint(breakpoint);
            matchBreakpoints.push([breakpoint, match]);
        });
        if (matchBreakpoints.every(([_, match]) => match === false)) {
            let breakPointIndex = 0;
            if (!__classPrivateFieldGet(this, _ApplicationLayoutService_supportedBreakpoints, "f").includes('lg')) {
                breakPointIndex = matchBreakpoints.length - 1;
            }
            const [breakpoint, _] = matchBreakpoints[breakPointIndex];
            __classPrivateFieldGet(this, _ApplicationLayoutService_breakpointChangeListener, "f").emit(breakpoint);
            __classPrivateFieldSet(this, _ApplicationLayoutService_breakpoint, breakpoint, "f");
            return;
        }
        for (const [breakpoint, match] of matchBreakpoints.reverse()) {
            if (match) {
                __classPrivateFieldGet(this, _ApplicationLayoutService_breakpointChangeListener, "f").emit(breakpoint);
                __classPrivateFieldSet(this, _ApplicationLayoutService_breakpoint, breakpoint, "f");
                break;
            }
        }
    }
    disableBreakpointDetection() {
        __classPrivateFieldSet(this, _ApplicationLayoutService_isDetectionEnabled, false, "f");
    }
    enableBreakpointDetection() {
        __classPrivateFieldSet(this, _ApplicationLayoutService_isDetectionEnabled, true, "f");
    }
    setBreakpoint(breakpoint) {
        __classPrivateFieldSet(this, _ApplicationLayoutService_breakpoint, breakpoint, "f");
        __classPrivateFieldGet(this, _ApplicationLayoutService_breakpointChangeListener, "f").emit(breakpoint);
    }
    setBreakpoints(breakpoints) {
        __classPrivateFieldSet(this, _ApplicationLayoutService_supportedBreakpoints, breakpoints, "f");
        this.onResize();
    }
}
_ApplicationLayoutService_supportedBreakpoints = new WeakMap(), _ApplicationLayoutService_breakpointChangeListener = new WeakMap(), _ApplicationLayoutService_breakpoint = new WeakMap(), _ApplicationLayoutService_isDetectionEnabled = new WeakMap();
const applicationLayoutService = new ApplicationLayoutService();

exports.applicationLayoutService = applicationLayoutService;

//# sourceMappingURL=service-a42add5f.js.map