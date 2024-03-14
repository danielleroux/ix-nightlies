/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { defineCustomElements as iconsDefineCustomElements } from '@siemens/ix-icons/loader';
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';
let didInitialize = false;
export const appInitialize = (doc) => {
    return async () => {
        const win = doc.defaultView;
        if (win && typeof window !== 'undefined') {
            if (didInitialize) {
                return;
            }
            didInitialize = true;
            await applyPolyfills();
            await iconsDefineCustomElements();
            await defineCustomElements();
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWluaXRpYWxpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwLWluaXRpYWxpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUVILE9BQU8sRUFBRSxvQkFBb0IsSUFBSSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFFMUIsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBYSxFQUFFLEVBQUU7SUFDN0MsT0FBTyxLQUFLLElBQUksRUFBRTtRQUNoQixNQUFNLEdBQUcsR0FBdUIsR0FBRyxDQUFDLFdBQWtCLENBQUM7UUFDdkQsSUFBSSxHQUFHLElBQUksT0FBUSxNQUFjLEtBQUssV0FBVyxFQUFFO1lBQ2pELElBQUksYUFBYSxFQUFFO2dCQUNqQixPQUFPO2FBQ1I7WUFFRCxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRXJCLE1BQU0sY0FBYyxFQUFFLENBQUM7WUFDdkIsTUFBTSx5QkFBeUIsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sb0JBQW9CLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNpZW1lbnMgQUdcbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudHMgYXMgaWNvbnNEZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gJ0BzaWVtZW5zL2l4LWljb25zL2xvYWRlcic7XG5pbXBvcnQgeyBhcHBseVBvbHlmaWxscywgZGVmaW5lQ3VzdG9tRWxlbWVudHMgfSBmcm9tICdAc2llbWVucy9peC9sb2FkZXInO1xuXG5sZXQgZGlkSW5pdGlhbGl6ZSA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgYXBwSW5pdGlhbGl6ZSA9IChkb2M6IERvY3VtZW50KSA9PiB7XG4gIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgd2luOiBXaW5kb3cgfCB1bmRlZmluZWQgPSBkb2MuZGVmYXVsdFZpZXcgYXMgYW55O1xuICAgIGlmICh3aW4gJiYgdHlwZW9mICh3aW5kb3cgYXMgYW55KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChkaWRJbml0aWFsaXplKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGlkSW5pdGlhbGl6ZSA9IHRydWU7XG5cbiAgICAgIGF3YWl0IGFwcGx5UG9seWZpbGxzKCk7XG4gICAgICBhd2FpdCBpY29uc0RlZmluZUN1c3RvbUVsZW1lbnRzKCk7XG4gICAgICBhd2FpdCBkZWZpbmVDdXN0b21FbGVtZW50cygpO1xuICAgIH1cbiAgfTtcbn07XG4iXX0=