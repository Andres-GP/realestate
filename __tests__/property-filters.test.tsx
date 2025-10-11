import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import PropertyFilters from "@/components/property-filters";

describe("PropertyFilters Component", () => {
  const mockSetFilters = vi.fn();
  const initialFilters = {
    type: "all",
    minPrice: 0,
    maxPrice: 5000000,
    bedrooms: "all",
    status: "all",
  };

  beforeEach(() => {
    mockSetFilters.mockClear();
    render(
      <PropertyFilters filters={initialFilters} setFilters={mockSetFilters} />
    );
  });

  it("renders all filter labels", () => {
    expect(screen.getByText(/Property Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/Price Range/i)).toBeInTheDocument();
  });

  it("calls setFilters when type is changed", () => {
    const trigger = screen.getByText("All Types");
    fireEvent.click(trigger);

    const item = screen.getByText("House");
    fireEvent.click(item);

    expect(mockSetFilters).toHaveBeenCalledWith({
      ...initialFilters,
      type: "house",
    });
  });

  it("calls setFilters when status is changed", () => {
    const trigger = screen.getByText("All");
    fireEvent.click(trigger);

    const item = screen.getByText("For Sale");
    fireEvent.click(item);

    expect(mockSetFilters).toHaveBeenCalledWith({
      ...initialFilters,
      status: "sale",
    });
  });

  it("calls setFilters when bedrooms is changed", () => {
    const trigger = screen.getByText("Any");
    fireEvent.click(trigger);

    const item = screen.getByText("3+");
    fireEvent.click(item);

    expect(mockSetFilters).toHaveBeenCalledWith({
      ...initialFilters,
      bedrooms: "3",
    });
  });
});
