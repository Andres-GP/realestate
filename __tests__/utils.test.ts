import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn utility function", () => {
  it("combines multiple class strings", () => {
    const result = cn("bg-red-500", "text-white", "p-4");
    expect(result).toBe("bg-red-500 text-white p-4");
  });

  it("ignores falsy values", () => {
    const result = cn("bg-red-500", undefined, false, "p-4");
    expect(result).toBe("bg-red-500 p-4");
  });

  it("merges conflicting tailwind classes", () => {
    const result = cn("p-2 p-4", "text-sm text-lg");
    expect(result).toBe("p-4 text-lg");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    const result = cn(
      "bg-red-500",
      isActive && "text-white",
      false && "hidden"
    );
    expect(result).toBe("bg-red-500 text-white");
  });

  it("returns empty string when no valid classes", () => {
    const result = cn(undefined, false, null, "");
    expect(result).toBe("");
  });
});
