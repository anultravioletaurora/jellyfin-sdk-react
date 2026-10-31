/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { multiply } from '../index';

jest.mock('../NativeSdkReact', () => ({
  __esModule: true,
  default: {
    multiply: jest.fn((a: number, b: number) => a * b),
  },
}));

describe('multiply', () => {
  it('delegates to the native module', () => {
    expect(multiply(3, 7)).toBe(21);
  });
});
