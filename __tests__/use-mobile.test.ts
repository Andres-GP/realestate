import { renderHook } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { useIsMobile } from "@/hooks/use-mobile";

const MOBILE_BREAKPOINT = 768;

describe("useIsMobile hook", () => {
  let matchMediaMock: any;

  beforeEach(() => {
    matchMediaMock = vi.fn().mockImplementation((query) => {
      return {
        matches: window.innerWidth < MOBILE_BREAKPOINT,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        onchange: null,
        dispatchEvent: vi.fn(),
      };
    });
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: matchMediaMock,
    });
  });

  it("returns true if window.innerWidth < MOBILE_BREAKPOINT", () => {
    window.innerWidth = 500;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });
});
