import { render, screen } from "@testing-library/react";
import PropertyListings from "@/components/property-listings";
import { vi } from "vitest";

vi.useFakeTimers();

describe("PropertyListings Component", () => {
  beforeEach(() => {
    vi.clearAllTimers();
  });

  it("renders loading state initially", () => {
    render(<PropertyListings />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
