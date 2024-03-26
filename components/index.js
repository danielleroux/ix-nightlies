export { getAssetPath, setAssetPath, setNonce, setPlatformOptions } from '@stencil/core/internal/client';
export { I as InputState, L as LogicalFilterOperator } from './logical-filter-operator.js';
export { F as FlipTileState } from './flip-tile-state.js';
export { r as renderDefaultItem } from './default-tree-item.js';
export { U as UploadFileState } from './upload-file-state.js';
import { g as getCoreDelegate } from './modal.js';
export { c as closeModal, d as dismissModal, g as getCoreDelegate, r as registerFrameworkDelegate, a as resolveDelegate, s as showMessage, b as showModal } from './modal.js';
import { A as Animation } from './animation.js';
export { c as convertToAbbreviationString, a as convertToRemString } from './rwd.util.js';
export { g as getCurrentSystemAppearance, t as themeSwitcher } from './theme-switcher.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class FilterState {
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function getToastContainer() {
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
function setToastPosition(position) {
    getToastContainer().position = position;
}
async function toast(config) {
    const context = getToastContainer();
    const toast = await context.showToast(config);
    return toast;
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

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function showModalLoading(message) {
    const modal = document.createElement('ix-modal');
    modal.keyboard = false;
    const loading = document.createElement('ix-modal-loading');
    loading.innerText = message;
    modal.appendChild(loading);
    getCoreDelegate().attachView(modal);
    modal.showModal();
    return {
        update: (text) => (loading.innerHTML = text),
        finish: (text, timeout = 250) => {
            if (text !== undefined) {
                loading.innerText = text;
            }
            else {
                timeout = 0;
            }
            setTimeout(() => {
                modal.closeModal(null);
                setTimeout(async () => await getCoreDelegate().removeView(modal), Animation.mediumTime);
            }, timeout);
        },
    };
}

export { FilterState, getToastContainer, setToastPosition, showModalLoading, toast };

//# sourceMappingURL=index.js.map