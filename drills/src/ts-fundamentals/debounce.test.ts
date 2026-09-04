import { describe, it, expect, vi } from "vitest";
import { debounce } from "./debounce.js";

describe("debounce", () => {
  it("calls function once after it waits", () => {
    vi.useFakeTimers();

    const fn = vi.fn();
    const wait = 100;
    const d = debounce(fn, wait);

    d();
    d();
    d();

    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(wait);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
