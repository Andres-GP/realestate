import { render, screen } from "@testing-library/react";
import PropertyDetail from "@/components/property-detail";
import type { Property } from "@/lib/types";

const mockProperty: Property = {
  id: "1",
  title: "Luxury Villa",
  price: 4500,
  location: "Miami, FL",
  bedrooms: 4,
  bathrooms: 3,
  area: 4500,
  image: "/villa.jpg",
  type: "house",
  status: "sale",
};

describe("PropertyDetail Component", () => {
  it("renders property title, location and formatted price", () => {
    render(<PropertyDetail property={mockProperty} />);

    expect(screen.getByText(mockProperty.title)).toBeInTheDocument();
    expect(screen.getByText(mockProperty.location)).toBeInTheDocument();
    expect(screen.getByText(/\$4,500/)).toBeInTheDocument();
  });

  it("renders property details: ID, type and status badge", () => {
    render(<PropertyDetail property={mockProperty} />);

    expect(screen.getByText("Property ID")).toBeInTheDocument();
    expect(
      screen.getByText(`EST-${mockProperty.id.padStart(4, "0")}`)
    ).toBeInTheDocument();

    const typeElement = screen.getAllByText(mockProperty.type, {
      exact: false,
    })[0];
    expect(typeElement).toBeInTheDocument();

    const statusBadge = screen.getAllByText(/For sale/i)[0];
    expect(statusBadge).toBeInTheDocument();
  });

  it("renders bedrooms, bathrooms and area in highlights", () => {
    render(<PropertyDetail property={mockProperty} />);

    const bedroomsElements = screen.getAllByText(/Bedrooms/);
    expect(bedroomsElements[0]).toBeInTheDocument();

    const bathroomsElements = screen.getAllByText(/Bathrooms/);
    expect(bathroomsElements[0]).toBeInTheDocument();

    const areaElements = screen.getAllByText(/4,500 sqft/);
    expect(areaElements[0]).toBeInTheDocument();
  });

  it("renders property image and badge", () => {
    render(<PropertyDetail property={mockProperty} />);

    const img = screen.getByAltText(mockProperty.title) as HTMLImageElement;
    expect(img.src).toContain(mockProperty.image);

    const badge = screen.getAllByText(/For sale/i)[0];
    expect(badge).toBeInTheDocument();
  });
});
