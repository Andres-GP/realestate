import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import Hero from "@/components/hero"

describe("Hero Component", () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn()
  })

  it("renders the main heading", () => {
    render(<Hero />)
    expect(screen.getByText("Discover Your")).toBeInTheDocument()
    expect(screen.getByText("Dream Home")).toBeInTheDocument()
  })

  it("renders the description text", () => {
    render(<Hero />)
    expect(screen.getByText(/Explore exceptional properties curated for those who appreciate/i)).toBeInTheDocument()
  })

  it("renders the Explore Properties button", () => {
    render(<Hero />)
    expect(screen.getByRole("button", { name: /explore properties/i })).toBeInTheDocument()
  })

  it("scrolls to properties section when button is clicked", () => {
    const mockElement = document.createElement("div")
    mockElement.id = "properties"
    document.body.appendChild(mockElement)

    render(<Hero />)
    const button = screen.getByRole("button", { name: /explore properties/i })

    fireEvent.click(button)
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" })

    document.body.removeChild(mockElement)
  })

  it("renders the scroll down arrow button", () => {
    render(<Hero />)
    expect(screen.getByLabelText("Scroll to properties")).toBeInTheDocument()
  })
})
