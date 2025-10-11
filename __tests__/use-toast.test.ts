import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { reducer, useToast, toast } from "@/hooks/use-toast";

const TOAST_SAMPLE = {
  title: "Test Toast",
  description: "This is a test",
};

describe("reducer", () => {
  it("ADD_TOAST adds a toast", () => {
    const state = { toasts: [] };
    const action = {
      type: "ADD_TOAST" as const,
      toast: { ...TOAST_SAMPLE, id: "1", open: true },
    };
    const nextState = reducer(state, action);
    expect(nextState.toasts).toHaveLength(1);
    expect(nextState.toasts[0].id).toBe("1");
  });

  it("UPDATE_TOAST updates a toast", () => {
    const state = {
      toasts: [{ ...TOAST_SAMPLE, id: "1", open: true }],
    };
    const action = {
      type: "UPDATE_TOAST" as const,
      toast: { id: "1", title: "Updated" },
    };
    const nextState = reducer(state, action);
    expect(nextState.toasts[0].title).toBe("Updated");
  });

  it("DISMISS_TOAST sets open to false", () => {
    vi.useFakeTimers();
    const state = {
      toasts: [{ ...TOAST_SAMPLE, id: "1", open: true }],
    };
    const action = {
      type: "DISMISS_TOAST" as const,
      toastId: "1",
    };
    const nextState = reducer(state, action);
    expect(nextState.toasts[0].open).toBe(false);
    vi.runAllTimers();
    vi.useRealTimers();
  });

  it("REMOVE_TOAST removes a toast by id", () => {
    const state = {
      toasts: [{ ...TOAST_SAMPLE, id: "1", open: true }],
    };
    const action = {
      type: "REMOVE_TOAST" as const,
      toastId: "1",
    };
    const nextState = reducer(state, action);
    expect(nextState.toasts).toHaveLength(0);
  });
});

describe("toast function", () => {
  it("adds a toast and returns id, dismiss, update", () => {
    const t = toast(TOAST_SAMPLE);
    expect(t.id).toBeDefined();
    expect(typeof t.dismiss).toBe("function");
    expect(typeof t.update).toBe("function");
  });
});

describe("useToast hook", () => {
  beforeEach(() => {
    (globalThis as any).listeners = [];
    (globalThis as any).memoryState = { toasts: [] };
  });

  it("adds a toast via the hook", () => {
    const { result } = renderHook(() => useToast());
    act(() => {
      result.current.toast(TOAST_SAMPLE);
    });
    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe("Test Toast");
  });

  it("dismisses a toast via the hook", () => {
    const { result } = renderHook(() => useToast());
    let toastId: string = "";
    act(() => {
      const t = result.current.toast(TOAST_SAMPLE);
      toastId = t.id;
    });
    act(() => {
      result.current.dismiss(toastId);
    });
    expect(result.current.toasts.find((x) => x.id === toastId)?.open).toBe(
      false
    );
  });
});
