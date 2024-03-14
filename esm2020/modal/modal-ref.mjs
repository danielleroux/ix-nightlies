/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { closeModal, dismissModal } from '@siemens/ix';
export class IxActiveModal {
    constructor(modalData) {
        this.modalData = modalData;
    }
    get data() {
        return this.modalData;
    }
    /**
     * Close the active modal
     *
     * @param reason
     */
    close(reason) {
        closeModal(this.modalElement, reason);
    }
    /**
     * Dismiss the active modal
     *
     * @param reason
     */
    dismiss(reason) {
        dismissModal(this.modalElement, reason);
    }
}
export class InternalIxActiveModal extends IxActiveModal {
    setModalElement(element) {
        this.modalElement = element;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGFsL21vZGFsLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztHQU9HO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkQsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFBNkIsU0FBaUI7UUFBakIsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUFHLENBQUM7SUFFbEQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLE1BQWU7UUFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxPQUFPLENBQUMsTUFBZ0I7UUFDN0IsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHFCQUdYLFNBQVEsYUFBNkI7SUFDckMsZUFBZSxDQUFDLE9BQW9CO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzlCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNpZW1lbnMgQUdcbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbmltcG9ydCB7IGNsb3NlTW9kYWwsIGRpc21pc3NNb2RhbCB9IGZyb20gJ0BzaWVtZW5zL2l4JztcblxuZXhwb3J0IGNsYXNzIEl4QWN0aXZlTW9kYWw8VERhdGEgPSBhbnksIFRSZWFzb24gPSBhbnk+IHtcbiAgbW9kYWxFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1vZGFsRGF0YT86IFREYXRhKSB7fVxuXG4gIHB1YmxpYyBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbERhdGE7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgdGhlIGFjdGl2ZSBtb2RhbFxuICAgKlxuICAgKiBAcGFyYW0gcmVhc29uXG4gICAqL1xuICBwdWJsaWMgY2xvc2UocmVhc29uOiBUUmVhc29uKSB7XG4gICAgY2xvc2VNb2RhbCh0aGlzLm1vZGFsRWxlbWVudCwgcmVhc29uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNtaXNzIHRoZSBhY3RpdmUgbW9kYWxcbiAgICpcbiAgICogQHBhcmFtIHJlYXNvblxuICAgKi9cbiAgcHVibGljIGRpc21pc3MocmVhc29uPzogVFJlYXNvbikge1xuICAgIGRpc21pc3NNb2RhbCh0aGlzLm1vZGFsRWxlbWVudCwgcmVhc29uKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxJeEFjdGl2ZU1vZGFsPFxuICBURGF0YSA9IGFueSxcbiAgVFJlYXNvbiA9IGFueVxuPiBleHRlbmRzIEl4QWN0aXZlTW9kYWw8VERhdGEsIFRSZWFzb24+IHtcbiAgc2V0TW9kYWxFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5tb2RhbEVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG4iXX0=