'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const logicalFilterOperator = require('./logical-filter-operator-5564322e.js');
const flipTileState = require('./flip-tile-state-92223109.js');
const defaultTreeItem = require('./default-tree-item-309a50cd.js');
const uploadFileState = require('./upload-file-state-3e9d929d.js');
const modal = require('./modal-828cb80a.js');
const animation = require('./animation-99234008.js');
const rwd_util = require('./rwd.util-ee53cbd1.js');
const themeSwitcher = require('./theme-switcher-2d2bde85.js');
require('./typed-event-8032c0c0.js');

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
    const modal$1 = document.createElement('ix-modal');
    modal$1.keyboard = false;
    const loading = document.createElement('ix-modal-loading');
    loading.innerText = message;
    modal$1.appendChild(loading);
    modal.getCoreDelegate().attachView(modal$1);
    modal$1.showModal();
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
                modal$1.closeModal(null);
                setTimeout(async () => await modal.getCoreDelegate().removeView(modal$1), animation.Animation.mediumTime);
            }, timeout);
        },
    };
}

exports.InputState = logicalFilterOperator.InputState;
Object.defineProperty(exports, 'LogicalFilterOperator', {
    enumerable: true,
    get: function () {
        return logicalFilterOperator.LogicalFilterOperator;
    }
});
Object.defineProperty(exports, 'FlipTileState', {
    enumerable: true,
    get: function () {
        return flipTileState.FlipTileState;
    }
});
exports.renderDefaultItem = defaultTreeItem.renderDefaultItem;
Object.defineProperty(exports, 'UploadFileState', {
    enumerable: true,
    get: function () {
        return uploadFileState.UploadFileState;
    }
});
exports.closeModal = modal.closeModal;
exports.dismissModal = modal.dismissModal;
exports.getCoreDelegate = modal.getCoreDelegate;
exports.registerFrameworkDelegate = modal.registerFrameworkDelegate;
exports.resolveDelegate = modal.resolveDelegate;
exports.showMessage = modal.showMessage;
exports.showModal = modal.showModal;
exports.convertToAbbreviationString = rwd_util.convertToAbbreviationString;
exports.convertToRemString = rwd_util.convertToRemString;
exports.getCurrentSystemAppearance = themeSwitcher.getCurrentSystemAppearance;
exports.themeSwitcher = themeSwitcher.themeSwitcher;
exports.FilterState = FilterState;
exports.getToastContainer = getToastContainer;
exports.setToastPosition = setToastPosition;
exports.showModalLoading = showModalLoading;
exports.toast = toast;

//# sourceMappingURL=index.cjs.js.map