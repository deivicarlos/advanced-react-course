import { vi, describe, it, expect, beforeEach } from "vitest";
import { memoize } from "./memoize.js";

describe("memoize", () => {
  it("returns the correct values", () => {
    const m = memoize((n: number) => n * n);

    expect(m(2)).toBe(4);
    expect(m(4)).toBe(16);
  });

  it("calls the function only once", () => {
    const fn = vi.fn((n: number) => n * n);
    const m = memoize(fn);

    m(5);
    m(5);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
