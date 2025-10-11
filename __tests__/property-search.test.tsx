import { render, screen, fireEvent } from "@testing-library/react";
import PropertySearch from "@/components/property-search";
import { vi } from "vitest";

describe("PropertySearch Component", () => {
  it("renders input with initial searchQuery", () => {
    const setSearchQuery = vi.fn();
    render(
      <PropertySearch searchQuery="initial" setSearchQuery={setSearchQuery} />
    );

    const input = screen.getByPlaceholderText(
      /search by location, title, or description/i
    );
    expect(input).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe("initial");
  });

  it("calls setSearchQuery when input changes", () => {
    const setSearchQuery = vi.fn();
    render(<PropertySearch searchQuery="" setSearchQuery={setSearchQuery} />);

    const input = screen.getByPlaceholderText(
      /search by location, title, or description/i
    );
    fireEvent.change(input, { target: { value: "Villa" } });

    expect(setSearchQuery).toHaveBeenCalledTimes(1);
    expect(setSearchQuery).toHaveBeenCalledWith("Villa");
  });
});
