import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import PropertySearch from "@/components/property-search"

describe("PropertySearch Component", () => {
  it("renders search input", () => {
    const mockSetSearchQuery = vi.fn()
    render(<PropertySearch searchQuery="" setSearchQuery={mockSetSearchQuery} />)

    expect(screen.getByPlaceholderText(/search by location/i)).toBeInTheDocument()
  })

  it("displays current search query value", () => {
    const mockSetSearchQuery = vi.fn()
    render(<PropertySearch searchQuery="New York" setSearchQuery={mockSetSearchQuery} />)

    const input = screen.getByPlaceholderText(/search by location/i) as HTMLInputElement
    expect(input.value).toBe("New York")
  })

  it("calls setSearchQuery when input changes", () => {
    const mockSetSearchQuery = vi.fn()
    render(<PropertySearch searchQuery="" setSearchQuery={mockSetSearchQuery} />)

    const input = screen.getByPlaceholderText(/search by location/i)
    fireEvent.change(input, { target: { value: "Los Angeles" } })

    expect(mockSetSearchQuery).toHaveBeenCalledWith("Los Angeles")
  })

  it("renders search icon", () => {
    const mockSetSearchQuery = vi.fn()
    render(<PropertySearch searchQuery="" setSearchQuery={mockSetSearchQuery} />)

    const searchIcon = document.querySelector("svg")
    expect(searchIcon).toBeInTheDocument()
  })
})
