/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class InputState {
    hasCategory() {
        return this.category !== undefined;
    }
    constructor(token, category) {
        this.token = token;
        this.category = category;
    }
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// eslint-disable-next-line @stencil-community/ban-exported-const-enums
var LogicalFilterOperator;
(function (LogicalFilterOperator) {
    LogicalFilterOperator["EQUAL"] = "Equal";
    LogicalFilterOperator["NOT_EQUAL"] = "Not equal";
})(LogicalFilterOperator || (LogicalFilterOperator = {}));

export { InputState as I, LogicalFilterOperator as L };

//# sourceMappingURL=logical-filter-operator-f6701df5.js.map