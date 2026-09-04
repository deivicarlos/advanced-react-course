import {
  vi,
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
} from "vitest";
import { throttle } from "./throttle.js";

describe("throttle", () => {
  const wait = 300;

  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("trailing call uses the args from the latest call", () => {
    const fn = vi.fn();
    const t = throttle(fn, wait);

    t("a");
    t("b");
    t("c");

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("a");
    vi.advanceTimersByTime(wait);
    expect(fn).toHaveBeenCalledWith("c");
  });
});
