/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getCoreDelegate, resolveDelegate } from "../delegate";
import { TypedEvent } from "../typed-event";
export function setA11yAttributes(element, config) {
    const ariaDescribedby = config.ariaDescribedby;
    const ariaLabelledby = config.ariaLabelledby;
    delete config['ariaDescribedby'];
    delete config['ariaLabelledby'];
    if (ariaDescribedby) {
        element.setAttribute('aria-describedby', ariaDescribedby);
    }
    if (ariaLabelledby) {
        element.setAttribute('aria-labelledby', ariaLabelledby);
    }
}
function getIxModal(element) {
    return element.closest('ix-modal');
}
export function closeModal(element, closeResult) {
    const dialog = getIxModal(element);
    if (dialog) {
        dialog.closeModal(closeResult);
        return;
    }
}
export function dismissModal(element, dismissResult) {
    const dialog = getIxModal(element);
    if (dialog) {
        dialog.dismissModal(dismissResult);
        return;
    }
}
export async function showModal(config) {
    const delegate = resolveDelegate();
    let dialogRef;
    const onClose = new TypedEvent();
    const onDismiss = new TypedEvent();
    if (typeof config.content === 'string') {
        const dialog = document.createElement('ix-modal');
        dialog.innerText = config.content;
        dialogRef = await getCoreDelegate().attachView(dialog);
    }
    if (config.content instanceof HTMLElement &&
        config.content.tagName !== 'IX-MODAL') {
        const dialog = document.createElement('ix-modal');
        dialog.appendChild(config.content);
        dialogRef = await getCoreDelegate().attachView(dialog);
    }
    if (!dialogRef) {
        dialogRef = await delegate.attachView(config.content);
    }
    setA11yAttributes(dialogRef, config);
    Object.assign(dialogRef, config);
    await dialogRef.showModal();
    dialogRef.addEventListener('dialogClose', async ({ detail }) => {
        onClose.emit(detail);
        await delegate.removeView(dialogRef);
    });
    dialogRef.addEventListener('dialogDismiss', async ({ detail }) => {
        onDismiss.emit(detail);
        await delegate.removeView(dialogRef);
    });
    return {
        htmlElement: dialogRef,
        onClose,
        onDismiss,
    };
}
//# sourceMappingURL=modal.js.map
