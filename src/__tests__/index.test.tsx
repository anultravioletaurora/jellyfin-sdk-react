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
