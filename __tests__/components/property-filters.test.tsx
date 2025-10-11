import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import PropertyFilters from "@/components/property-filters"

const mockFilters = {
  type: "all",
  minPrice: 0,
  maxPrice: 5000000,
  bedrooms: "all",
  status: "all",
}

describe("PropertyFilters Component", () => {
  it("renders filter heading", () => {
    const mockSetFilters = vi.fn()
    render(<PropertyFilters filters={mockFilters} setFilters={mockSetFilters} />)

    expect(screen.getByText("Filter Properties")).toBeInTheDocument()
  })

  it("renders all filter labels", () => {
    const mockSetFilters = vi.fn()
    render(<PropertyFilters filters={mockFilters} setFilters={mockSetFilters} />)

    expect(screen.getByText("Property Type")).toBeInTheDocument()
    expect(screen.getByText("Status")).toBeInTheDocument()
    expect(screen.getByText("Bedrooms")).toBeInTheDocument()
    expect(screen.getByText(/Price Range/i)).toBeInTheDocument()
  })

  it("displays current price range", () => {
    const mockSetFilters = vi.fn()
    render(<PropertyFilters filters={mockFilters} setFilters={mockSetFilters} />)

    expect(screen.getByText(/\$0 - \$5,000,000/i)).toBeInTheDocument()
  })

  it("renders property type select with options", () => {
    const mockSetFilters = vi.fn()
    render(<PropertyFilters filters={mockFilters} setFilters={mockSetFilters} />)

    const typeSelect = screen.getByLabelText("Property Type")
    expect(typeSelect).toBeInTheDocument()
  })

  it("renders status select", () => {
    const mockSetFilters = vi.fn()
    render(<PropertyFilters filters={mockFilters} setFilters={mockSetFilters} />)

    const statusSelect = screen.getByLabelText("Status")
    expect(statusSelect).toBeInTheDocument()
  })

  it("renders bedrooms select", () => {
    const mockSetFilters = vi.fn()
    render(<PropertyFilters filters={mockFilters} setFilters={mockSetFilters} />)

    const bedroomsSelect = screen.getByLabelText("Bedrooms")
    expect(bedroomsSelect).toBeInTheDocument()
  })
})
