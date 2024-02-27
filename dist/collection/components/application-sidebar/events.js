/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export class ApplicationSidebarToggleEvent extends Event {
    constructor(force) {
        super('application-sidebar-toggle', { bubbles: true, composed: true });
        this.force = force;
    }
}
//# sourceMappingURL=events.js.map
