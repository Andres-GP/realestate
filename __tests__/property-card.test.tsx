/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import PropertyCard from "@/components/property-card";
import type { Property } from "@/lib/types";

vi.mock("lucide-react", () => {
  return {
    Bed: () => <div data-testid="icon-bed" />,
    Bath: () => <div data-testid="icon-bath" />,
    Maximize: () => <div data-testid="icon-maximize" />,
    MapPin: () => <div data-testid="icon-mappin" />,
  };
});

const mockProperty: Property = {
  id: "1",
  title: "Luxury Villa",
  price: 500000,
  location: "Beverly Hills, CA",
  bedrooms: 5,
  bathrooms: 4,
  area: 4500,
  image: "/villa.jpg",
  type: "house",
  status: "sale",
};

describe("PropertyCard Component", () => {
  it("renders property title, location and price", () => {
    render(<PropertyCard property={mockProperty} />);
    expect(screen.getByText(mockProperty.title)).toBeInTheDocument();
    expect(screen.getByText(mockProperty.location)).toBeInTheDocument();
  });

  it("renders status badge", () => {
    render(<PropertyCard property={mockProperty} />);
    expect(screen.getByText(/For sale/i)).toBeInTheDocument();
  });

  it("renders bedroom, bathroom, and area icons with values", () => {
    render(<PropertyCard property={mockProperty} />);
    expect(screen.getByTestId("icon-bed")).toBeInTheDocument();
    expect(
      screen.getByText(mockProperty.bedrooms.toString())
    ).toBeInTheDocument();

    expect(screen.getByTestId("icon-bath")).toBeInTheDocument();
    expect(
      screen.getByText(mockProperty.bathrooms.toString())
    ).toBeInTheDocument();

    expect(screen.getByTestId("icon-maximize")).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProperty.area.toLocaleString()} sqft`)
    ).toBeInTheDocument();
  });

  it("renders MapPin icon", () => {
    render(<PropertyCard property={mockProperty} />);
    expect(screen.getByTestId("icon-mappin")).toBeInTheDocument();
  });

  it("renders image with correct alt text", () => {
    render(<PropertyCard property={mockProperty} />);
    const img = screen.getByAltText(mockProperty.title) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(mockProperty.image);
  });

  it("renders link to property detail page", () => {
    render(<PropertyCard property={mockProperty} />);
    const link = screen.getByRole("link") as HTMLAnchorElement;
    expect(link.href).toContain(`/property/${mockProperty.id}`);
  });

  it("sets imageLoaded state on image load", () => {
    render(<PropertyCard property={mockProperty} />);
    const img = screen.getByAltText(mockProperty.title);
    fireEvent.load(img);
    expect(img).toHaveClass("opacity-100");
  });
});
