import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import Header from "@/components/header"

describe("Header Component", () => {
  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn()
  })

  it("renders the logo", () => {
    render(<Header />)
    expect(screen.getByText("ESTATE")).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    render(<Header />)
    expect(screen.getByText("Properties")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
    expect(screen.getByText("Contact")).toBeInTheDocument()
  })

  it("toggles mobile menu when menu button is clicked", () => {
    render(<Header />)
    const menuButton = screen.getByLabelText("Toggle menu")

    fireEvent.click(menuButton)
    // Mobile menu should be visible
    const mobileLinks = screen.getAllByText("Properties")
    expect(mobileLinks.length).toBeGreaterThan(1)
  })

  it("calls scrollIntoView when navigation link is clicked", () => {
    const mockElement = document.createElement("div")
    mockElement.id = "properties"
    document.body.appendChild(mockElement)

    render(<Header />)
    const propertiesLink = screen.getAllByText("Properties")[0]

    fireEvent.click(propertiesLink)
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" })

    document.body.removeChild(mockElement)
  })

  it("applies scrolled styles when page is scrolled", () => {
    render(<Header />)

    // Simulate scroll
    Object.defineProperty(window, "scrollY", { value: 100, writable: true })
    fireEvent.scroll(window)

    const header = screen.getByRole("banner")
    expect(header).toHaveClass("bg-background/80")
  })
})
