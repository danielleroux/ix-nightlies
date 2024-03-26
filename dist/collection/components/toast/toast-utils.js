export function getToastContainer() {
    const containerList = Array.from(document.querySelectorAll('ix-toast-container'));
    const [container] = containerList;
    if (containerList.length > 1) {
        console.warn('Multiple toast containers were found. Only the first one will be used.');
        return container;
    }
    if (!container) {
        const toastContainer = document.createElement('ix-toast-container');
        document.body.appendChild(toastContainer);
        return toastContainer;
    }
    return container;
}
export function setToastPosition(position) {
    getToastContainer().position = position;
}
async function toast(config) {
    const context = getToastContainer();
    return context.showToast(config);
}
toast.info = (config) => {
    return toast(Object.assign(Object.assign({}, config), { type: 'info' }));
};
toast.error = (config) => {
    return toast(Object.assign(Object.assign({}, config), { type: 'error' }));
};
toast.success = (config) => {
    return toast(Object.assign(Object.assign({}, config), { type: 'success' }));
};
toast.warning = (config) => {
    return toast(Object.assign(Object.assign({}, config), { type: 'warning' }));
};
export { toast };
//# sourceMappingURL=toast-utils.js.map
