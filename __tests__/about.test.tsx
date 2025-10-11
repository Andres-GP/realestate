import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import About from "@/components/about";
import * as lucide from "lucide-react";

vi.mock("lucide-react", () => {
  return {
    Building2: () => <div data-testid="icon-building2" />,
    Users: () => <div data-testid="icon-users" />,
    Award: () => <div data-testid="icon-award" />,
    TrendingUp: () => <div data-testid="icon-trendingup" />,
  };
});

describe("About Component", () => {
  it("renders the main heading", () => {
    render(<About />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Estate")).toBeInTheDocument();
  });

  it("renders description paragraphs", () => {
    render(<About />);
    expect(
      screen.getByText(/We are a premier real estate agency/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/With over 15 years of experience/i)
    ).toBeInTheDocument();
  });

  it("renders all stats with values and labels", () => {
    render(<About />);

    const stats = [
      { label: "Properties Listed", value: "500+" },
      { label: "Happy Clients", value: "1,200+" },
      { label: "Years Experience", value: "15+" },
      { label: "Success Rate", value: "98%" },
    ];

    stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });

    // Icons
    expect(screen.getByTestId("icon-building2")).toBeInTheDocument();
    expect(screen.getByTestId("icon-users")).toBeInTheDocument();
    expect(screen.getByTestId("icon-award")).toBeInTheDocument();
    expect(screen.getByTestId("icon-trendingup")).toBeInTheDocument();
  });

  it("renders office image with correct alt text", () => {
    render(<About />);
    const image = screen.getByAltText("Estate office");
    expect(image).toBeInTheDocument();
  });
});
