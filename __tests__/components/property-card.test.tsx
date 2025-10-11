import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import PropertyCard from "@/components/property-card"
import type { Property } from "@/lib/types"

const mockProperty: Property = {
  id: "1",
  title: "Modern Loft",
  price: 850000,
  location: "New York, NY",
  bedrooms: 2,
  bathrooms: 2,
  area: 1500,
  image: "/test-image.jpg",
  type: "apartment",
  status: "sale",
  description: "A beautiful modern loft",
}

describe("PropertyCard Component", () => {
  it("renders property title", () => {
    render(<PropertyCard property={mockProperty} />)
    expect(screen.getByText("Modern Loft")).toBeInTheDocument()
  })

  it("renders property location", () => {
    render(<PropertyCard property={mockProperty} />)
    expect(screen.getByText("New York, NY")).toBeInTheDocument()
  })

  it("renders property price correctly for sale", () => {
    render(<PropertyCard property={mockProperty} />)
    expect(screen.getByText("$850,000")).toBeInTheDocument()
  })

  it("renders property price with /mo for rent", () => {
    const rentProperty = { ...mockProperty, status: "rent" as const, price: 3500 }
    render(<PropertyCard property={rentProperty} />)
    expect(screen.getByText("$3,500/mo")).toBeInTheDocument()
  })

  it("renders property details (bedrooms, bathrooms, area)", () => {
    render(<PropertyCard property={mockProperty} />)
    expect(screen.getByText("2")).toBeInTheDocument() // bedrooms
    expect(screen.getByText("1,500 sqft")).toBeInTheDocument()
  })

  it("renders status badge", () => {
    render(<PropertyCard property={mockProperty} />)
    expect(screen.getByText("For sale")).toBeInTheDocument()
  })

  it("links to property detail page", () => {
    render(<PropertyCard property={mockProperty} />)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "/property/1")
  })
})
