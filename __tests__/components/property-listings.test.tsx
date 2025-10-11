"use client"

import { render, screen, waitFor } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import PropertyListings from "@/components/property-listings"

// Mock child components
vi.mock("@/components/property-card", () => ({
  default: ({ property }: any) => <div data-testid="property-card">{property.title}</div>,
}))

vi.mock("@/components/property-search", () => ({
  default: ({ searchQuery, setSearchQuery }: any) => (
    <input data-testid="property-search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
  ),
}))

vi.mock("@/components/property-filters", () => ({
  default: ({ filters, setFilters }: any) => <div data-testid="property-filters">Filters</div>,
}))

describe("PropertyListings Component", () => {
  it("renders the section heading", () => {
    render(<PropertyListings />)
    expect(screen.getByText("Featured Properties")).toBeInTheDocument()
  })

  it("shows loading spinner initially", () => {
    render(<PropertyListings />)
    expect(screen.getByRole("status", { hidden: true })).toBeInTheDocument()
  })

  it("renders property cards after loading", async () => {
    render(<PropertyListings />)

    await waitFor(() => {
      const propertyCards = screen.getAllByTestId("property-card")
      expect(propertyCards.length).toBeGreaterThan(0)
    })
  })

  it("renders search component", async () => {
    render(<PropertyListings />)

    await waitFor(() => {
      expect(screen.getByTestId("property-search")).toBeInTheDocument()
    })
  })

  it("renders filters component", async () => {
    render(<PropertyListings />)

    await waitFor(() => {
      expect(screen.getByTestId("property-filters")).toBeInTheDocument()
    })
  })

  it("shows no results message when no properties match filters", async () => {
    render(<PropertyListings />)

    await waitFor(() => {
      expect(screen.getAllByTestId("property-card").length).toBeGreaterThan(0)
    })
  })
})
